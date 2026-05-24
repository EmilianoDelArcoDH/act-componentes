"use client";

import { ActivityShell } from "@/components/ActivityShell";
import { getActivityById, getGuide } from "@/data/activities";
import { getActivityContent } from "@/data/activityContent";
import type { GuideSlug } from "@/types/activity";

type ActivityPageProps = {
  activityId: string;
};

export function ActivityPage({ activityId }: ActivityPageProps) {
  const activity = getActivityById(activityId);

  if (!activity) {
    return (
      <main className="activityPage">
        <p>No se encontro la actividad.</p>
      </main>
    );
  }

  const content = getActivityContent(activity.id);
  const guide = getGuide(activity.guideSlug as GuideSlug);
  const themeClass = activity.guideSlug === "ui-reutilizable" ? "themeLight" : "themeDark";

  return (
    <div className={themeClass}>
      <ActivityShell
        activityId={activity.id}
        title={activity.title}
        subtitle={content.subtitle}
        objective={activity.objective}
        instructions={content.instructions}
        initialCode={content.initialCode}
        preview={content.preview}
        validate={content.validate}
        successMessage={content.successMessage}
        errorMessages={content.errorMessages}
        progressLabel={`Actividad ${activity.order} de 18`}
        guideTitle={guide?.title ?? "Modulo StreamFlix"}
        progressPercent={Math.round((activity.order / 18) * 100)}
      />
    </div>
  );
}
