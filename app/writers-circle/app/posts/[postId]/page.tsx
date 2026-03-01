"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Post } from "@/lib/types";
import { fetchPost } from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";
import RequireVerifiedAndAccepted from "@/components/RequireVerifiedAndAccepted";
import CommentComposer from "@/components/CommentComposer";
import CommentList from "@/components/CommentList";

export default function PostDetailPage() {
  const params = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const { user, isAdminOrMod } = useAuth();

  useEffect(() => {
    fetchPost(params.postId).then((value) => setPost(value));
  }, [params.postId]);

  if (!post) return <p>Loading post...</p>;

  const canView = post.status === "APPROVED" || post.authorId === user?.uid || isAdminOrMod;
  if (!canView) return <p className="text-muted">This post is not available.</p>;

  return (
    <section className="space-y-6">
      <article className="rounded-2xl border border-border bg-panel p-6">
        <h1 className="font-serif text-3xl">{post.title || "Untitled"}</h1>
        <p className="mt-3 whitespace-pre-wrap">{post.body}</p>
      </article>
      <CommentList postId={post.id} />
      {post.status === "APPROVED" && (
        <RequireVerifiedAndAccepted>
          <CommentComposer postId={post.id} />
        </RequireVerifiedAndAccepted>
      )}
    </section>
  );
}
