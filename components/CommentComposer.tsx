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
    <div className="directory-card p-4">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="min-h-24 w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        placeholder="Offer constructive feedback..."
      />
      <button
        className="mt-3 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90"
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
