"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/types";
import { subscribeApprovedPosts } from "@/lib/firestore";
import PostCard from "@/components/PostCard";
import PostComposer from "@/components/PostComposer";
import RequireVerifiedAndAccepted from "@/components/RequireVerifiedAndAccepted";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => subscribeApprovedPosts(setPosts), []);

  return (
    <section className="space-y-6">
      <RequireVerifiedAndAccepted>
        <PostComposer />
      </RequireVerifiedAndAccepted>
      <div className="space-y-4">
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
