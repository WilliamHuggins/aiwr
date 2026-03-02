"use client";

import { useEffect, useState } from "react";
import type { EventItem } from "@/lib/types";
import { fetchEvents } from "@/lib/firestore";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="font-display text-3xl font-semibold">Events</h1>
      {events.length === 0 && <p className="py-8 text-center text-sm text-muted">No upcoming events yet.</p>}
      {events.map((event) => <EventCard key={event.id} event={event} />)}
    </section>
  );
}
