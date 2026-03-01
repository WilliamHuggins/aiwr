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
    await setDoc(doc(db, "users", user.uid), { displayName, username: clean, bio, updatedAt: serverTimestamp() }, { merge: true });
    setMsg("Profile updated.");
  }

  return (
    <section className="space-y-4 rounded-2xl border border-border bg-panel p-6">
      <h1 className="font-serif text-3xl">My Profile</h1>
      <AvatarUpload />
      <input className="w-full rounded-xl border border-border bg-bg p-3" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Display name" />
      <input className="w-full rounded-xl border border-border bg-bg p-3" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      <textarea className="min-h-24 w-full rounded-xl border border-border bg-bg p-3" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <div className="flex gap-3">
        <button className="rounded-xl bg-primary px-4 py-2 text-primaryText" onClick={saveProfile}>Save profile</button>
        <button className="rounded-xl border border-border px-4 py-2" onClick={resendVerification}>Send verification email</button>
        <button className="rounded-xl border border-border px-4 py-2" onClick={refreshStatus}>Refresh status</button>
      </div>
      {msg && <p className="text-sm text-muted">{msg}</p>}
      <p className="text-sm text-muted">Public profile: <Link href={`/app/profile/${profile.username}`}>@{profile.username}</Link></p>
    </section>
  );
}
