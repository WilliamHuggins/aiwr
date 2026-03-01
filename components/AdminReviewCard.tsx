"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import { removePost, updatePost } from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export default function AdminReviewCard({ post }: { post: Post }) {
  const { user } = useAuth();
  const [reason, setReason] = useState("");

  return (
    <div className="rounded-2xl border border-border bg-panel p-5">
      <h3 className="font-serif text-xl">{post.title || "Untitled submission"}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm">{post.body}</p>
      <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Optional reason for denial" className="mt-3 w-full rounded-xl border border-border bg-bg p-2 text-sm" />
      <div className="mt-3 flex gap-2">
        <button className="rounded-lg bg-green-700 px-3 py-1 text-white" onClick={() => updatePost(post.id, { status: "APPROVED", moderation: { reviewedBy: user?.uid || null, reviewedAt: new Date(), decisionReason: null } })}>Approve</button>
        <button className="rounded-lg bg-rose-700 px-3 py-1 text-white" onClick={() => updatePost(post.id, { status: "DENIED", moderation: { reviewedBy: user?.uid || null, reviewedAt: new Date(), decisionReason: reason || null } })}>Deny</button>
        <button className="rounded-lg border border-border px-3 py-1" onClick={() => removePost(post.id)}>Delete</button>
      </div>
    </div>
  );
}
