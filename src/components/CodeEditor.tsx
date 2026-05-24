"use client";

import { useEffect, useRef } from "react";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { bracketMatching, defaultHighlightStyle, indentOnInput, syntaxHighlighting } from "@codemirror/language";
import { Compartment, EditorState, type Extension } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import type { EditorFiles } from "@/lib/editorFiles";

type CodeEditorProps = {
  files: EditorFiles;
  activeFile: string;
  onActiveFileChange: (fileName: string) => void;
  onFileChange: (fileName: string, value: string) => void;
};

export function CodeEditor({ files, activeFile, onActiveFileChange, onFileChange }: CodeEditorProps) {
  const editorHostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const languageCompartmentRef = useRef(new Compartment());
  const themeCompartmentRef = useRef(new Compartment());
  const onFileChangeRef = useRef(onFileChange);
  const activeFileRef = useRef(activeFile);
  const fileNames = Object.keys(files);
  const activeValue = files[activeFile] ?? "";
  const languageLabel = getLanguageLabel(activeFile);

  useEffect(() => {
    onFileChangeRef.current = onFileChange;
  }, [onFileChange]);

  useEffect(() => {
    activeFileRef.current = activeFile;
  }, [activeFile]);

  useEffect(() => {
    if (!editorHostRef.current || viewRef.current) return;

    const themeExtension = getThemeExtension(editorHostRef.current);
    const view = new EditorView({
      parent: editorHostRef.current,
      state: EditorState.create({
        doc: activeValue,
        extensions: [
          history(),
          lineNumbers(),
          EditorState.tabSize.of(2),
          indentOnInput(),
          bracketMatching(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          keymap.of([
            indentWithTab,
            ...defaultKeymap,
            ...historyKeymap,
            {
              key: "Mod-s",
              run: () => true,
            },
          ]),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (!update.docChanged) return;
            onFileChangeRef.current(activeFileRef.current, update.state.doc.toString());
          }),
          languageCompartmentRef.current.of(getLanguageExtension(activeFile)),
          themeCompartmentRef.current.of(themeExtension),
          editorBaseTheme,
        ],
      }),
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const currentValue = view.state.doc.toString();
    if (currentValue !== activeValue) {
      view.dispatch({
        changes: { from: 0, to: currentValue.length, insert: activeValue },
      });
    }

    view.dispatch({
      effects: languageCompartmentRef.current.reconfigure(getLanguageExtension(activeFile)),
    });
  }, [activeFile, activeValue]);

  return (
    <section className="panel editorPanel" aria-label="Editor de codigo">
      <div className="editorChrome">
        <div className="editorTraffic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <strong>STREAMFLIX WORKSPACE</strong>
      </div>
      <div className="editorTabs" aria-label="Archivos del ejercicio">
        {fileNames.map((fileName) => (
          <button
            className={fileName === activeFile ? "editorTab isActive" : "editorTab"}
            key={fileName}
            onClick={() => onActiveFileChange(fileName)}
            type="button"
          >
            {fileName}
          </button>
        ))}
      </div>
      <div className="editorBody">
        <div className="codeMirrorHost" ref={editorHostRef} aria-label={`Codigo de ${activeFile}`} />
      </div>
      <div className="editorStatus">
        <span>{activeFile}</span>
        <span>{languageLabel}</span>
        <span>{activeValue.split("\n").length} lineas</span>
        <span>UTF-8</span>
      </div>
    </section>
  );
}

function getLanguageLabel(fileName: string): string {
  if (fileName.endsWith(".html")) return "HTML";
  if (fileName.endsWith(".css")) return "CSS";
  if (fileName.endsWith(".js")) return "JavaScript";
  return "Texto";
}

function getLanguageExtension(fileName: string): Extension {
  if (fileName.endsWith(".html")) return html();
  if (fileName.endsWith(".css")) return css();
  if (fileName.endsWith(".js")) return javascript();
  return [];
}

function getThemeExtension(host: HTMLDivElement): Extension {
  return host.closest(".themeLight") ? lightCodeMirrorTheme : oneDark;
}

const editorBaseTheme = EditorView.theme({
  "&": {
    minHeight: "590px",
    height: "590px",
    fontSize: "14px",
  },
  ".cm-scroller": {
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    lineHeight: "1.58",
  },
  ".cm-content": {
    padding: "18px 0",
  },
  ".cm-line": {
    padding: "0 18px",
  },
  ".cm-gutters": {
    paddingTop: "18px",
  },
  ".cm-focused": {
    outline: "none",
  },
});

const lightCodeMirrorTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: "#ffffff",
      color: "#0f172a",
    },
    ".cm-content": {
      caretColor: "#16a34a",
    },
    ".cm-cursor": {
      borderLeftColor: "#16a34a",
    },
    ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
      backgroundColor: "rgba(34, 197, 94, 0.2)",
    },
    ".cm-gutters": {
      backgroundColor: "#f8fafc",
      borderRightColor: "#e2e8f0",
      color: "#94a3b8",
    },
    ".cm-activeLine": {
      backgroundColor: "#f8fafc",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "#eef2ff",
      color: "#0f172a",
    },
  },
  { dark: false },
);
