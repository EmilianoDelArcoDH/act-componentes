"use client";

import { ActivityShell } from "@/components/ActivityShell";
import { getActivityById } from "@/data/activities";
import { getActivityContent } from "@/data/activityContent";

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
  const themeClass = activity.guideSlug === "ui-reutilizable" ? "themeLight" : "themeDark";

  return (
    <div className={themeClass}>
      <ActivityShell
        activityId={activity.id}
        title={activity.title}
        initialCode={content.initialCode}
        preview={content.preview}
        validate={content.validate}
        successMessage={content.successMessage}
        errorMessages={content.errorMessages}
      />
    </div>
  );
}
