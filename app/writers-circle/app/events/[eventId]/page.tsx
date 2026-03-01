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

  if (!event) return <p>Loading event...</p>;

  async function rsvp(status: RsvpStatus) {
    if (!user) return;
    await setDoc(doc(db, "events", eventId, "rsvps", user.uid), {
      uid: user.uid,
      status,
      createdAt: serverTimestamp(),
    });
  }

  return (
    <section className="rounded-2xl border border-border bg-panel p-6">
      <h1 className="font-serif text-3xl">{event.title}</h1>
      <p className="mt-3 text-muted">{event.description}</p>
      <RequireVerifiedAndAccepted>
        <div className="mt-6 flex gap-2">
          <button className="rounded-xl bg-primary px-4 py-2 text-primaryText" onClick={() => rsvp("GOING")}>Going</button>
          <button className="rounded-xl border border-border px-4 py-2" onClick={() => rsvp("INTERESTED")}>Interested</button>
          <button className="rounded-xl border border-border px-4 py-2" onClick={() => rsvp("NOT_GOING")}>Not going</button>
        </div>
      </RequireVerifiedAndAccepted>
    </section>
  );
}
