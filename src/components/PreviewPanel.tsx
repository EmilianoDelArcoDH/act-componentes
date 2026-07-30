import type { ReactNode } from "react";

type PreviewPanelProps = {
  children: ReactNode;
  renderedHtml?: string | null;
};

export function PreviewPanel({ children, renderedHtml }: PreviewPanelProps) {
  const hasRenderedResult = typeof renderedHtml === "string";

  return (
    <section className="panel previewPanel" aria-label="Vista previa">
      <div className="panelHeader">
        <span>{hasRenderedResult ? "resultado" : "preview"}</span>
        <span>{hasRenderedResult ? "despues de validar" : "StreamFlix"}</span>
      </div>
      <div className={`previewCanvas ${hasRenderedResult ? "hasRenderedResult" : ""}`}>
        {hasRenderedResult ? (
          <iframe className="resultFrame" title="Resultado de la actividad" sandbox="allow-scripts" srcDoc={renderedHtml} />
        ) : (
          children
        )}
      </div>
    </section>
  );
}
