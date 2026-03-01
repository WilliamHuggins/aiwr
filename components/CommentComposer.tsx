"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";

export default function CommentComposer({ postId }: { postId: string }) {
  const [body, setBody] = useState("");
  const { user, profile } = useAuth();

  if (!user || !profile) return null;

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <textarea value={body} onChange={(e) => setBody(e.target.value)} className="min-h-24 w-full rounded-xl border border-border bg-bg p-3" placeholder="Offer constructive feedback..." />
      <button
        className="mt-3 rounded-xl bg-primary px-4 py-2 text-primaryText"
        onClick={async () => {
          await addDoc(collection(db, "posts", postId, "comments"), {
            authorId: user.uid,
            authorUsername: profile.username,
            authorName: profile.displayName,
            authorAvatarUrl: profile.avatarUrl,
            body,
            createdAt: serverTimestamp(),
          });
          setBody("");
        }}
      >
        Comment
      </button>
    </div>
  );
}
