import Link from "next/link";
import type { EventItem } from "@/lib/types";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="directory-card p-5">
      <h3 className="font-display text-xl font-semibold">{event.title}</h3>
      <p className="mt-2 text-sm text-muted">{event.description}</p>
      <Link href={`/writers-circle/app/events/${event.id}`} className="mt-3 inline-block font-ui text-xs uppercase tracking-[0.14em] text-accent no-underline">
        View event &rarr;
      </Link>
    </div>
  );
}
