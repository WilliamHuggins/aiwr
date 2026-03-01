import Link from "next/link";
import type { Post } from "@/lib/types";
import StatusPill from "@/components/StatusPill";

export default function PostCard({ post, showStatus = false }: { post: Post; showStatus?: boolean }) {
  return (
    <article className="rounded-2xl border border-border bg-panel p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm text-muted">@{post.authorUsername}</p>
        {showStatus && <StatusPill status={post.status} />}
      </div>
      {post.title && <h3 className="font-serif text-xl">{post.title}</h3>}
      <p className="mt-2 whitespace-pre-wrap text-sm">{post.body}</p>
      <Link className="mt-4 inline-block text-sm no-underline" href={`/writers-circle/app/posts/${post.id}`}>Read discussion →</Link>
    </article>
  );
}
