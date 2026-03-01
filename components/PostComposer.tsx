"use client";

import { useState } from "react";
import { createPost } from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export default function PostComposer() {
  const { user, profile } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  if (!user || !profile) return null;

  return (
    <div className="rounded-2xl border border-border bg-panel p-5">
      <h2 className="font-serif text-xl">Share a workshop post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Optional title" className="mt-3 w-full rounded-xl border border-border bg-bg p-3" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Draft, question, or reflection..." className="mt-3 min-h-32 w-full rounded-xl border border-border bg-bg p-3" />
      <button
        className="mt-3 rounded-xl bg-primary px-4 py-2 text-primaryText"
        onClick={async () => {
          await createPost({
            authorId: user.uid,
            authorUsername: profile.username,
            authorName: profile.displayName,
            authorAvatarUrl: profile.avatarUrl,
            title,
            body,
            status: "PENDING",
            moderation: { reviewedBy: null, reviewedAt: null, decisionReason: null },
            commentCount: 0,
            likeCount: 0,
          });
          setTitle("");
          setBody("");
          setMessage("Submitted for review.");
        }}
      >
        Submit for review
      </button>
      {message && <p className="mt-2 text-sm text-muted">{message}</p>}
    </div>
  );
}
