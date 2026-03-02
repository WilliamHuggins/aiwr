"use client";

import { useState } from "react";
import { createPost } from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

function parseTags(input: string): string[] {
  return input
    .split(/[,\s]+/)
    .map((t) => t.replace(/^#/, "").toLowerCase().trim())
    .filter((t) => t.length > 0 && t.length <= 30)
    .slice(0, 5);
}

export default function PostComposer() {
  const { user, profile } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [message, setMessage] = useState("");

  if (!user || !profile) return null;

  const previewTags = parseTags(tagInput);

  return (
    <div className="directory-card p-5">
      <h2 className="font-display text-xl font-semibold">Share a workshop post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Optional title"
        className="mt-3 w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Draft, question, or reflection..."
        className="mt-3 min-h-32 w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <input
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        placeholder="Tags (comma-separated, e.g. craft, revision, feedback)"
        className="mt-3 w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {previewTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {previewTags.map((tag) => (
            <span key={tag} className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-ui text-xs text-accent">
              #{tag}
            </span>
          ))}
        </div>
      )}
      <button
        className="mt-3 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90"
        onClick={async () => {
          await createPost({
            authorId: user.uid,
            authorUsername: profile.username,
            authorName: profile.displayName,
            authorAvatarUrl: profile.avatarUrl,
            title,
            body,
            tags: parseTags(tagInput),
            status: "PENDING",
            moderation: { reviewedBy: null, reviewedAt: null, decisionReason: null },
            commentCount: 0,
            likeCount: 0,
          });
          setTitle("");
          setBody("");
          setTagInput("");
          setMessage("Submitted for review.");
        }}
      >
        Submit for review
      </button>
      {message && <p className="mt-2 text-sm text-muted">{message}</p>}
    </div>
  );
}
