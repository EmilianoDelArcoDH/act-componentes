import type { ReactNode } from "react";

type PreviewPanelProps = {
  children: ReactNode;
};

export function PreviewPanel({ children }: PreviewPanelProps) {
  return (
    <section className="panel previewPanel" aria-label="Vista previa">
      <div className="panelHeader">
        <span>preview</span>
        <span>StreamFlix</span>
      </div>
      <div className="previewCanvas">{children}</div>
    </section>
  );
}
