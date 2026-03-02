"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import type { Post } from "@/lib/types";
import { removePost, subscribeMyPosts } from "@/lib/firestore";
import PostEditorModal from "@/components/PostEditorModal";
import StatusPill from "@/components/StatusPill";

export default function MyPostsPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!user) return;
    return subscribeMyPosts(user.uid, setPosts);
  }, [user]);

  return (
    <section className="space-y-4">
      <h1 className="font-display text-3xl font-semibold">My Posts</h1>
      {posts.map((post) => (
        <article key={post.id} className="directory-card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold">{post.title || "Untitled"}</h3>
            <StatusPill status={post.status} />
          </div>
          <p className="mt-2 line-clamp-3 text-sm">{post.body}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-ui text-xs text-accent">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 flex gap-2">
            <PostEditorModal post={post} />
            <button className="rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface-2" onClick={() => removePost(post.id)}>Delete</button>
          </div>
        </article>
      ))}
    </section>
  );
}
