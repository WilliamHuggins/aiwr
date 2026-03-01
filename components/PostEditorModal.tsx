"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import { updatePost } from "@/lib/firestore";

export default function PostEditorModal({ post }: { post: Post }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title || "");
  const [body, setBody] = useState(post.body);

  return (
    <>
      <button className="rounded-lg border border-border px-3 py-1" onClick={() => setOpen(true)}>Edit</button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-panel p-5">
            <h3 className="font-serif text-xl">Edit post</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-3 w-full rounded-xl border border-border bg-bg p-3" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="mt-3 min-h-32 w-full rounded-xl border border-border bg-bg p-3" />
            <div className="mt-4 flex justify-end gap-3">
              <button className="rounded-lg border border-border px-3 py-1" onClick={() => setOpen(false)}>Cancel</button>
              <button
                className="rounded-lg bg-primary px-3 py-1 text-primaryText"
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
