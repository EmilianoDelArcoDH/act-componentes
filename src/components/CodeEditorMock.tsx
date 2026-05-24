"use client";

type CodeEditorMockProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditorMock({ value, onChange }: CodeEditorMockProps) {
  return (
    <section className="panel editorPanel" aria-label="Editor de codigo">
      <div className="panelHeader">
        <span>editor</span>
        <span>HTML / CSS / JS</span>
      </div>
      <textarea
        spellCheck={false}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Codigo de la actividad"
      />
    </section>
  );
}
