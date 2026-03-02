"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Post } from "@/lib/types";
import { subscribeApprovedPosts } from "@/lib/firestore";
import PostCard from "@/components/PostCard";
import PostComposer from "@/components/PostComposer";
import RequireVerifiedAndAccepted from "@/components/RequireVerifiedAndAccepted";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => subscribeApprovedPosts(setPosts), []);

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      for (const tag of post.tags || []) {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (activeTag) {
      result = result.filter((p) => p.tags?.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q) ||
          p.authorName.toLowerCase().includes(q) ||
          p.authorUsername.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.includes(q)),
      );
    }
    return result;
  }, [posts, search, activeTag]);

  function handleTagClick(tag: string) {
    setActiveTag((prev) => (prev === tag ? null : tag));
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold">Writer&apos;s Circle</h1>
        <p className="mt-1 text-sm text-muted">Browse the latest posts, search by topic, or filter by tag.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts by title, content, author, or tag..."
          className="w-full rounded-md border border-border bg-bg py-2.5 pl-10 pr-10 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {allTags.map(([tag, count]) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-ui text-xs transition-colors ${
                activeTag === tag
                  ? "border-accent bg-accent text-bg"
                  : "border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
              }`}
            >
              #{tag}
              <span className="opacity-60">({count})</span>
            </button>
          ))}
          {activeTag && (
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 font-ui text-xs text-muted transition-colors hover:bg-surface-2"
            >
              <X className="h-3 w-3" /> Clear filter
            </button>
          )}
        </div>
      )}

      <RequireVerifiedAndAccepted>
        <PostComposer />
      </RequireVerifiedAndAccepted>

      <div className="space-y-4">
        {filteredPosts.length === 0 && (search || activeTag) && (
          <p className="py-8 text-center text-sm text-muted">No posts match your search{activeTag ? ` for #${activeTag}` : ""}.</p>
        )}
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onTagClick={handleTagClick} />
        ))}
      </div>
    </section>
  );
}
