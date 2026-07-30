type ProgressHeaderProps = {
  title: string;
  subtitle?: string;
  progressLabel?: string;
  guideTitle?: string;
  progressPercent?: number;
};

export function ProgressHeader({ title, subtitle, progressLabel, guideTitle, progressPercent }: ProgressHeaderProps) {
  const showBrand = Boolean(guideTitle);
  const showProgress = typeof progressPercent === "number";

  return (
    <header className={`progressHeader ${!showBrand ? "isCompact" : ""}`}>
      {showBrand ? (
        <div className="headerBrand">
          <div className="academyLogo" aria-label="StreamFlix Academy">
            StreamFlix Academy
          </div>
          <p className="breadcrumb">{guideTitle} &gt; Actividad</p>
        </div>
      ) : null}
      <div className="headerTitleBlock">
        {progressLabel ? <span className="progressBadge">{progressLabel}</span> : null}
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        {showProgress ? (
          <div className="progressTrack" aria-hidden="true">
            <span style={{ width: `${progressPercent}%` }} />
          </div>
        ) : null}
      </div>
    </header>
  );
}
