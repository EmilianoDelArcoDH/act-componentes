"use client";

import { useMemo, useState } from "react";
import { CodeEditor } from "@/components/CodeEditor";
import { PreviewPanel } from "@/components/PreviewPanel";
import { ProgressHeader } from "@/components/ProgressHeader";
import { ValidationPanel } from "@/components/ValidationPanel";
import { combineEditorFiles, createEditorFiles, getInitialEditorFile } from "@/lib/editorFiles";
import { validateIndexHtmlSkeleton } from "@/lib/validators/helpers";
import { PGEvent } from "@/pg-event";
import type { ActivityShellProps, ValidationResult } from "@/types/activity";

export function ActivityShell({
  activityId,
  title,
  subtitle,
  instructions,
  initialCode,
  preview,
  validate,
  successMessage,
  errorMessages,
  progressLabel,
  guideTitle,
  progressPercent,
}: ActivityShellProps) {
  const initialFiles = useMemo(() => createEditorFiles(initialCode), [initialCode]);
  const [files, setFiles] = useState(initialFiles);
  const [activeFile, setActiveFile] = useState(getInitialEditorFile(initialFiles));
  const [result, setResult] = useState<ValidationResult | null>(null);
  const combinedCode = useMemo(() => combineEditorFiles(files), [files]);
  const showInstructions = Boolean(instructions);
  const actions = (
    <div className="actionRow">
      <button className="primaryButton" type="button" onClick={handleValidate}>
        Validar
      </button>
      <button className="ghostButton" type="button" onClick={handleReset}>
        Reiniciar
      </button>
    </div>
  );

  function handleValidate() {
    const skeletonMessages = validateIndexHtmlSkeleton(combinedCode);
    const activityResult = validate(combinedCode);
    const finalValidation = {
      success: skeletonMessages.length === 0 && activityResult.success,
      messages: [...skeletonMessages, ...activityResult.messages],
    };

    setResult(finalValidation);
    postValidationToPg(finalValidation);
  }

  function postValidationToPg(finalValidation: ValidationResult) {
    const reasons = finalValidation.messages;
    const correct = finalValidation.success ? 1 : 0;
    const total = 1;

    postToPg({
      event: reasons.length === 0 ? "SUCCESS" : "FAILURE",
      reasons,
      message:
        reasons.length === 0
          ? "Actividad completada correctamente."
          : "La actividad todavia tiene errores por revisar.",
      state: JSON.stringify({
        score: correct,
        correct,
        total,
        details: [
          {
            id: activityId,
            title,
            success: finalValidation.success,
            errors: reasons.length,
          },
        ],
      }),
    });
  }

  function handleReset() {
    setFiles(initialFiles);
    setActiveFile(getInitialEditorFile(initialFiles));
    setResult(null);
    postToPg({
      event: "FAILURE",
      reasons: [],
      message: "La actividad fue reiniciada.",
      state: JSON.stringify({
        score: 0,
        correct: 0,
        total: 1,
        details: [
          {
            id: activityId,
            title,
            success: false,
            reset: true,
            errors: 0,
          },
        ],
      }),
    });
  }

  function postToPg(payload: Record<string, unknown>) {
    const pgEvent = new PGEvent();
    pgEvent.getValues();
    pgEvent.postToPg(payload);
  }

  function handleFileChange(fileName: string, value: string) {
    setFiles((currentFiles) => ({
      ...currentFiles,
      [fileName]: value,
    }));
  }

  return (
    <main className="activityPage">
      <ProgressHeader
        title={title}
        subtitle={subtitle}
        progressLabel={progressLabel}
        guideTitle={guideTitle}
        progressPercent={progressPercent}
      />
      {!showInstructions ? <div className="activityActions">{actions}</div> : null}
      <div className={`activityGrid ${!showInstructions ? "isCompact" : ""}`}>
        {showInstructions ? (
          <aside className="panel instructionsPanel">
            <p>{instructions}</p>
            {actions}
          </aside>
        ) : null}
        <CodeEditor
          files={files}
          activeFile={activeFile}
          onActiveFileChange={setActiveFile}
          onFileChange={handleFileChange}
        />
        <div className="rightStack">
          <PreviewPanel>{preview}</PreviewPanel>
          <ValidationPanel result={result} successMessage={successMessage} errorMessages={errorMessages} />
        </div>
      </div>
    </main>
  );
}
