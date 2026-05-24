type ProgressHeaderProps = {
  title: string;
  subtitle: string;
  progressLabel?: string;
  guideTitle: string;
  progressPercent: number;
};

export function ProgressHeader({ title, subtitle, progressLabel, guideTitle, progressPercent }: ProgressHeaderProps) {
  return (
    <header className="progressHeader">
      <div className="headerBrand">
        <div className="academyLogo" aria-label="StreamFlix Academy">
          StreamFlix Academy
        </div>
        <p className="breadcrumb">{guideTitle} &gt; Actividad</p>
      </div>
      <div className="headerTitleBlock">
        <span className="progressBadge">{progressLabel ?? "Actividad embebible"}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="progressTrack" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>
    </header>
  );
}
