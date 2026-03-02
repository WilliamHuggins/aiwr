"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";
import type { EventItem, RsvpStatus } from "@/lib/types";
import RequireVerifiedAndAccepted from "@/components/RequireVerifiedAndAccepted";

export default function EventDetailPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventItem | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    getDoc(doc(db, "events", eventId)).then((snap) => {
      if (snap.exists()) setEvent({ id: snap.id, ...(snap.data() as Omit<EventItem, "id">) });
    });
  }, [eventId]);

  if (!event) return <p className="py-8 text-center text-sm text-muted">Loading event...</p>;

  async function rsvp(status: RsvpStatus) {
    if (!user) return;
    await setDoc(doc(db, "events", eventId, "rsvps", user.uid), {
      uid: user.uid,
      status,
      createdAt: serverTimestamp(),
    });
  }

  return (
    <section className="directory-card p-6">
      <h1 className="font-display text-3xl font-semibold">{event.title}</h1>
      <p className="mt-3 text-muted">{event.description}</p>
      <RequireVerifiedAndAccepted>
        <div className="mt-6 flex gap-2">
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90" onClick={() => rsvp("GOING")}>Going</button>
          <button className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2" onClick={() => rsvp("INTERESTED")}>Interested</button>
          <button className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2" onClick={() => rsvp("NOT_GOING")}>Not going</button>
        </div>
      </RequireVerifiedAndAccepted>
    </section>
  );
}
