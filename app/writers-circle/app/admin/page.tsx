"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";
import type { Post, PostStatus } from "@/lib/types";
import AdminReviewCard from "@/components/AdminReviewCard";
import { cn } from "@/lib/utils";

const tabs: PostStatus[] = ["PENDING", "APPROVED", "DENIED"];

export default function AdminPage() {
  const { isAdminOrMod } = useAuth();
  const [active, setActive] = useState<PostStatus>("PENDING");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    return onSnapshot(query(collection(db, "posts"), orderBy("createdAt", "desc")), (snap) => {
      setPosts(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Post, "id">) })));
    });
  }, []);

  const filtered = useMemo(() => posts.filter((p) => p.status === active), [posts, active]);

  if (!isAdminOrMod) return <p className="py-8 text-center text-sm text-muted">Moderators only.</p>;

  return (
    <section>
      <h1 className="font-display text-3xl font-semibold">Moderation Queue</h1>
      <div className="mt-4 flex gap-1 rounded-full border border-border/70 bg-surface-1/70 p-1 font-ui text-sm shadow-soft w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full px-4 py-1.5 transition-colors",
              active === tab ? "bg-accent text-bg" : "text-muted hover:text-text",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {filtered.length === 0 && <p className="py-8 text-center text-sm text-muted">No {active.toLowerCase()} posts.</p>}
        {filtered.map((post) => <AdminReviewCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
