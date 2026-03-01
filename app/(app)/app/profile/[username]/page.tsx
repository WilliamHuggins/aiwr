"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import type { UserProfile } from "@/lib/types";

export default function PublicProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    getDocs(query(collection(db, "users"), where("username", "==", username), limit(1))).then((snap) => {
      if (!snap.empty) setProfile(snap.docs[0].data() as UserProfile);
    });
  }, [username]);

  if (!profile) return <p>Profile not found.</p>;

  return (
    <section className="rounded-2xl border border-border bg-panel p-6">
      <h1 className="font-serif text-3xl">{profile.displayName}</h1>
      <p className="mt-1 text-sm text-muted">@{profile.username}</p>
      <p className="mt-4">{profile.bio || "No bio yet."}</p>
    </section>
  );
}
