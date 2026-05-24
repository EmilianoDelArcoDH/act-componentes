import Link from "next/link";
import type { ActivityMeta } from "@/types/activity";

type ActivityCardProps = {
  activity: ActivityMeta;
  displayOrder?: number;
};

export function ActivityCard({ activity, displayOrder = activity.order }: ActivityCardProps) {
  return (
    <Link className="activityCard" href={activity.route}>
      <span>Actividad {displayOrder}</span>
      <div>
        <h2>{activity.title}</h2>
        <p>{activity.objective}</p>
      </div>
      <strong>Comenzar</strong>
    </Link>
  );
}
