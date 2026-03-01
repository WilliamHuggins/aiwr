import type { PostStatus } from "@/lib/types";

export default function StatusPill({ status }: { status: PostStatus }) {
  const colors = {
    PENDING: "bg-amber-100 text-amber-900",
    APPROVED: "bg-green-100 text-green-900",
    DENIED: "bg-rose-100 text-rose-900",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}>{status}</span>;
}
