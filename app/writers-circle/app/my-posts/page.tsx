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
      <h1 className="font-serif text-3xl">My Posts</h1>
      {posts.map((post) => (
        <article key={post.id} className="rounded-2xl border border-border bg-panel p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl">{post.title || "Untitled"}</h3>
            <StatusPill status={post.status} />
          </div>
          <p className="mt-2 line-clamp-3 text-sm">{post.body}</p>
          <div className="mt-4 flex gap-2">
            <PostEditorModal post={post} />
            <button className="rounded-lg border border-border px-3 py-1" onClick={() => removePost(post.id)}>Delete</button>
          </div>
        </article>
      ))}
    </section>
  );
}
