import Link from "next/link";
import { ActivityCard } from "@/components/ActivityCard";
import { getGuide, getGuideActivities } from "@/data/activities";
import type { GuideSlug } from "@/types/activity";

type GuideIndexProps = {
  guideSlug: GuideSlug;
};

export function GuideIndex({ guideSlug }: GuideIndexProps) {
  const guide = getGuide(guideSlug);
  const activities = getGuideActivities(guideSlug);

  if (!guide) {
    return (
      <main className="homePage">
        <p>No se encontro el guion.</p>
      </main>
    );
  }

  const themeClass = guideSlug === "ui-reutilizable" ? "homePage themeLight" : "homePage themeDark";

  return (
    <main className={themeClass}>
      <section className="homeHero">
        <Link className="homeLink" href="/">
          StreamFlix Lab
        </Link>
        <span className="brandPill">Guion {guide.order}</span>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
      </section>
      <section className="activityCards" aria-label="Actividades del guion">
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} displayOrder={index + 1} key={activity.id} />
        ))}
      </section>
    </main>
  );
}
