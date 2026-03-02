"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import { removePost, updatePost } from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export default function AdminReviewCard({ post }: { post: Post }) {
  const { user } = useAuth();
  const [reason, setReason] = useState("");

  return (
    <div className="directory-card p-5">
      <p className="text-xs text-muted">@{post.authorUsername}</p>
      <h3 className="mt-1 font-display text-xl font-semibold">{post.title || "Untitled submission"}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{post.body}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-ui text-xs text-accent">
              #{tag}
            </span>
          ))}
        </div>
      )}
      <input
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Optional reason for denial"
        className="mt-3 w-full rounded-md border border-border bg-bg p-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <div className="mt-3 flex gap-2">
        <button
          className="rounded-md bg-green-700 px-3 py-1.5 text-sm text-white transition-colors hover:bg-green-800"
          onClick={() => updatePost(post.id, { status: "APPROVED", moderation: { reviewedBy: user?.uid || null, reviewedAt: new Date(), decisionReason: null } })}
        >
          Approve
        </button>
        <button
          className="rounded-md bg-rose-700 px-3 py-1.5 text-sm text-white transition-colors hover:bg-rose-800"
          onClick={() => updatePost(post.id, { status: "DENIED", moderation: { reviewedBy: user?.uid || null, reviewedAt: new Date(), decisionReason: reason || null } })}
        >
          Deny
        </button>
        <button className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface-2" onClick={() => removePost(post.id)}>Delete</button>
      </div>
    </div>
  );
}
