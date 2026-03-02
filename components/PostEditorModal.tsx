"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import { updatePost } from "@/lib/firestore";

export default function PostEditorModal({ post }: { post: Post }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title || "");
  const [body, setBody] = useState(post.body);

  const inputClass = "w-full rounded-md border border-border bg-bg p-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <>
      <button className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface-2" onClick={() => setOpen(true)}>Edit</button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-border bg-surface-1 p-6 shadow-editorial">
            <h3 className="font-display text-xl font-semibold">Edit post</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={`mt-3 ${inputClass}`} placeholder="Title" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className={`mt-3 min-h-32 ${inputClass}`} placeholder="Post body" />
            <div className="mt-4 flex justify-end gap-3">
              <button className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface-2" onClick={() => setOpen(false)}>Cancel</button>
              <button
                className="rounded-md bg-accent px-4 py-1.5 text-sm font-medium text-bg transition-colors hover:bg-accent/90"
                onClick={async () => {
                  await updatePost(post.id, {
                    title,
                    body,
                    status: "PENDING",
                    moderation: { reviewedBy: null, reviewedAt: null, decisionReason: null },
                  });
                  setOpen(false);
                }}
              >
                Save & resubmit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
