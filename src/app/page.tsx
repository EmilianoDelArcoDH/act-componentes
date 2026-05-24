import Link from "next/link";
import { guides, getGuideActivities } from "@/data/activities";
import type { GuideSlug } from "@/types/activity";

export default function HomePage() {
  return (
    <main className="homePage themeDark">
      <section className="homeHero">
        <span className="brandPill">StreamFlix Lab</span>
        <h1>Modulo StreamFlix</h1>
        <p>
          Dieciocho actividades embebibles para practicar componentes, templates, includes, utilidades CSS,
          plantillas con JavaScript e integracion reusable sin backend.
        </p>
      </section>
      <section className="guideCards" aria-label="Guiones disponibles">
        {guides.map((guide) => {
          const guideActivities = getGuideActivities(guide.slug as GuideSlug);

          return (
            <article className="guideCard" key={guide.slug}>
              <span>Guion {guide.order}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <ul>
                {guideActivities.map((activity, index) => (
                  <li key={activity.id}>Actividad {index + 1}: {activity.title}</li>
                ))}
              </ul>
              <Link className="primaryLink" href={`/actividades/${guide.slug}`}>
                Entrar
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
