"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import type { Comment } from "@/lib/types";

export default function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const commentsRef = collection(db, "posts", postId, "comments");
    const unsub = onSnapshot(query(commentsRef, orderBy("createdAt", "asc")), (snap) => {
      setComments(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Comment, "id">) })));
    });
    return () => unsub();
  }, [postId]);

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="rounded-xl border border-border bg-bg p-3">
          <p className="text-xs text-muted">@{comment.authorUsername}</p>
          <p className="mt-1 text-sm">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
