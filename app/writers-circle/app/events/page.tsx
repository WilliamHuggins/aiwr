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
      <h1 className="font-serif text-3xl">Events</h1>
      {events.map((event) => <EventCard key={event.id} event={event} />)}
    </section>
  );
}
