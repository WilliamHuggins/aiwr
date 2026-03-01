"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";
import type { Post, PostStatus } from "@/lib/types";
import AdminReviewCard from "@/components/AdminReviewCard";

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

  if (!isAdminOrMod) return <p className="text-muted">Moderators only.</p>;

  return (
    <section>
      <h1 className="font-serif text-3xl">Moderation Queue</h1>
      <div className="mt-4 flex gap-2">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={`rounded-xl px-4 py-2 ${active === tab ? "bg-primary text-primaryText" : "border border-border"}`}>{tab}</button>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {filtered.map((post) => <AdminReviewCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
