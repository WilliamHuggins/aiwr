"use client";

import { useState } from "react";
import Link from "next/link";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { normalizeUsername } from "@/lib/validators";
import { useAuth } from "@/components/AuthProvider";
import AvatarUpload from "@/components/AvatarUpload";

export default function ProfilePage() {
  const { user, profile, resendVerification, refreshStatus } = useAuth();
  const [displayName, setDisplayName] = useState(profile?.displayName || "");
  const [username, setUsername] = useState(profile?.username || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [location, setLocation] = useState(profile?.location || "");
  const [showLocation, setShowLocation] = useState(profile?.showLocation ?? false);
  const [showEmail, setShowEmail] = useState(profile?.showEmail ?? false);
  const [msg, setMsg] = useState("");

  if (!user || !profile) return null;

  async function saveProfile() {
    if (!user) return;
    const clean = normalizeUsername(username);
    const usernameRef = doc(db, "usernames", clean);
    const existing = await getDoc(usernameRef);
    if (existing.exists() && existing.data().uid !== user.uid) {
      setMsg("Username already taken.");
      return;
    }

    await setDoc(usernameRef, { uid: user.uid, createdAt: serverTimestamp() }, { merge: false });
    await setDoc(
      doc(db, "users", user.uid),
      { displayName, username: clean, bio, location, showLocation, showEmail, updatedAt: serverTimestamp() },
      { merge: true },
    );
    setMsg("Profile updated.");
  }

  const inputClass = "w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <section className="space-y-6">
      <div className="directory-card p-6">
        <h1 className="font-display text-3xl font-semibold">My Profile</h1>
        <p className="mt-1 text-sm text-muted">Update your public information and privacy settings.</p>

        <div className="mt-6 space-y-4">
          <AvatarUpload />
          <input className={inputClass} value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Display name" />
          <input className={inputClass} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <textarea className={`min-h-24 ${inputClass}`} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio — tell other writers about yourself" />
        </div>

        <div className="mt-6 rounded-md border border-border bg-surface-2/50 p-4">
          <h3 className="font-display text-sm font-semibold">Location</h3>
          <p className="mt-1 text-xs text-muted">Share your location so other writers nearby can form writing groups.</p>
          <input
            className={`mt-2 ${inputClass}`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, state, or region (e.g. Portland, OR)"
          />
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={showLocation} onChange={(e) => setShowLocation(e.target.checked)} className="accent-accent" />
            Show my location on my public profile
          </label>
        </div>

        <div className="mt-4 rounded-md border border-border bg-surface-2/50 p-4">
          <h3 className="font-display text-sm font-semibold">Email Visibility</h3>
          <p className="mt-1 text-xs text-muted">Let other circle members see your email so they can reach out to you directly.</p>
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={showEmail} onChange={(e) => setShowEmail(e.target.checked)} className="accent-accent" />
            Show my email address on my public profile
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90" onClick={saveProfile}>
            Save profile
          </button>
          <button className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2" onClick={resendVerification}>
            Send verification email
          </button>
          <button className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface-2" onClick={refreshStatus}>
            Refresh status
          </button>
        </div>
        {msg && <p className="mt-2 text-sm text-muted">{msg}</p>}
        <p className="mt-4 text-sm text-muted">Public profile: <Link href={`/writers-circle/app/profile/${profile.username}`}>@{profile.username}</Link></p>
      </div>
    </section>
  );
}
