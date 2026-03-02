"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MapPin, Mail } from "lucide-react";
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

  if (!profile) return <p className="py-8 text-center text-sm text-muted">Profile not found.</p>;

  return (
    <section className="directory-card p-6">
      <h1 className="font-display text-3xl font-semibold">{profile.displayName}</h1>
      <p className="mt-1 text-sm text-muted">@{profile.username}</p>
      <p className="mt-4 leading-relaxed">{profile.bio || "No bio yet."}</p>

      {(profile.showLocation && profile.location) || profile.showEmail ? (
        <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
          {profile.showLocation && profile.location && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
          )}
          {profile.showEmail && profile.email && (
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-accent">
              <Mail className="h-4 w-4 text-accent" />
              {profile.email}
            </a>
          )}
        </div>
      ) : null}
    </section>
  );
}
