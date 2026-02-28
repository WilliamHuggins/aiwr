"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export type BlogPostEntry = {
  filename: string;
  title: string;
  date: string;
  description: string;
};

function formatLongDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
}

function formatShortDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function normalizeFilename(filename: string) {
  return filename.endsWith(".html") ? filename : `${filename}.html`;
}

function usePosts() {
  const [posts, setPosts] = useState<BlogPostEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    fetch("/posts/index.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load posts.");
        }
        return response.json();
      })
      .then((data: unknown) => {
        if (ignore) return;
        if (!Array.isArray(data)) {
          setPosts([]);
          return;
        }

        const parsed = data.filter(
          (item): item is BlogPostEntry =>
            Boolean(
              item &&
                typeof item === "object" &&
                "filename" in item &&
                typeof item.filename === "string" &&
                "title" in item &&
                typeof item.title === "string" &&
                "date" in item &&
                typeof item.date === "string" &&
                "description" in item &&
                typeof item.description === "string",
            ),
        );

        setPosts(parsed);
      })
      .catch(() => {
        if (!ignore) {
          setError("Could not load the blog manifest right now.");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts],
  );

  return { posts: sortedPosts, error };
}

export function BlogPostsGrid() {
  const { posts, error } = usePosts();

  if (error) {
    return <p className="text-muted">{error}</p>;
  }

  if (posts.length === 0) {
    return <p className="text-muted">No posts yet. Check back soon.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.filename} href={`/posts/${normalizeFilename(post.filename)}`} className="group no-underline">
          <Card className="directory-card flex h-full flex-col p-7">
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-muted">{formatLongDate(post.date)}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-text">{post.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{post.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function LatestPostsTeaser() {
  const { posts, error } = usePosts();

  if (error) {
    return <p className="text-muted">{error}</p>;
  }

  if (posts.length === 0) {
    return <p className="text-muted">No posts yet. Visit again soon.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {posts.slice(0, 2).map((post) => (
        <Link key={post.filename} href={`/posts/${normalizeFilename(post.filename)}`} className="group no-underline">
          <Card className="directory-card flex h-full flex-col p-7">
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-muted">{formatShortDate(post.date)}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-text">{post.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{post.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
