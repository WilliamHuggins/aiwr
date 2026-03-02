"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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

  if (!post) return <p className="py-8 text-center text-sm text-muted">Loading post...</p>;

  const canView = post.status === "APPROVED" || post.authorId === user?.uid || isAdminOrMod;
  if (!canView) return <p className="py-8 text-center text-sm text-muted">This post is not available.</p>;

  return (
    <section className="space-y-6">
      <article className="directory-card p-6">
        <div className="mb-2">
          <Link href={`/writers-circle/app/profile/${post.authorUsername}`} className="text-sm text-muted no-underline hover:text-accent">
            @{post.authorUsername}
          </Link>
        </div>
        <h1 className="font-display text-3xl font-semibold">{post.title || "Untitled"}</h1>
        <p className="mt-3 whitespace-pre-wrap leading-relaxed">{post.body}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-ui text-xs text-accent">
                #{tag}
              </span>
            ))}
          </div>
        )}
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
