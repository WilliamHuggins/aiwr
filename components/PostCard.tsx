import Link from "next/link";
import type { Post } from "@/lib/types";
import StatusPill from "@/components/StatusPill";

export default function PostCard({
  post,
  showStatus = false,
  onTagClick,
}: {
  post: Post;
  showStatus?: boolean;
  onTagClick?: (tag: string) => void;
}) {
  return (
    <article className="directory-card p-5">
      <div className="mb-2 flex items-center justify-between">
        <Link href={`/writers-circle/app/profile/${post.authorUsername}`} className="text-sm text-muted no-underline hover:text-accent">
          @{post.authorUsername}
        </Link>
        {showStatus && <StatusPill status={post.status} />}
      </div>
      {post.title && <h3 className="font-display text-xl font-semibold">{post.title}</h3>}
      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{post.body.length > 280 ? post.body.slice(0, 280) + "..." : post.body}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick?.(tag)}
              className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-ui text-xs text-accent transition-colors hover:bg-accent/10"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center gap-4">
        <Link className="font-ui text-xs uppercase tracking-[0.14em] text-accent no-underline" href={`/writers-circle/app/posts/${post.id}`}>
          Read discussion &rarr;
        </Link>
        {post.commentCount > 0 && (
          <span className="text-xs text-muted">{post.commentCount} {post.commentCount === 1 ? "comment" : "comments"}</span>
        )}
      </div>
    </article>
  );
}
