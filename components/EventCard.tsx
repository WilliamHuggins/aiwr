import Link from "next/link";
import type { EventItem } from "@/lib/types";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="rounded-2xl border border-border bg-panel p-5">
      <h3 className="font-serif text-xl">{event.title}</h3>
      <p className="mt-2 text-sm text-muted">{event.description}</p>
      <Link href={`/writers-circle/app/events/${event.id}`} className="mt-3 inline-block no-underline">View event →</Link>
    </div>
  );
}
