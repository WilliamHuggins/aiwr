"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        <div key={comment.id} className="rounded-md border border-border bg-surface-1 p-3">
          <Link href={`/writers-circle/app/profile/${comment.authorUsername}`} className="text-xs text-muted no-underline hover:text-accent">
            @{comment.authorUsername}
          </Link>
          <p className="mt-1 text-sm leading-relaxed">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
