import Link from "next/link";
import { List } from "lucide-react";

const sections = [
  ["lecture", "Craft Lecture"],
  ["reading", "Core Reading"],
  ["grammar", "Grammar Lesson"],
  ["tip", "Editorial Tip"],
  ["exercise", "Writing Exercise"],
  ["journal", "Journal Prompt"],
  ["ai", "AI Workshop"],
] as const;

type ModuleSidebarProps = {
  completed: Record<string, boolean>;
  dyslexia: boolean;
  onToggleDyslexia: () => void;
};

export default function ModuleSidebar({ completed, dyslexia, onToggleDyslexia }: ModuleSidebarProps) {
  return (
    <aside className="font-module-ui sticky top-24 hidden w-[220px] shrink-0 py-6 text-[13px] lg:block" aria-label="Module navigation">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink"><List className="h-4 w-4" />This Week</div>
      <div className="mb-6 space-y-1">
        {sections.map(([id, label], idx) => (
          <a key={id} href={`#${id}`} className={`flex min-h-11 items-center gap-2 rounded px-2 no-underline hover:bg-indigo-50 hover:text-accent ${idx === 0 ? "bg-indigo-50 text-accent" : "text-ink"}`}>
            <span className={`flex h-4 w-4 items-center justify-center rounded-sm border ${completed[id] ? "border-success bg-success text-white" : "border-gray-400"}`}>{completed[id] ? "✓" : ""}</span>
            {label}
          </a>
        ))}
      </div>

      <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">All Weeks — Fall</div>
      <div className="mb-6 space-y-1">
        <Link href="/diy-mfa/year-one/week-1" className="flex min-h-11 items-center gap-2 rounded px-2 text-success no-underline hover:bg-indigo-50"><span className="h-2 w-2 rounded-full bg-success" />Week 1</Link>
        <Link href="/diy-mfa/year-one/week-2" className="flex min-h-11 items-center gap-2 rounded bg-indigo-100 px-2 font-semibold text-accent no-underline"><span className="h-2 w-2 rounded-full bg-accent" />Week 2</Link>
        <Link href="/diy-mfa/year-one/week-3" className="flex min-h-11 items-center gap-2 rounded px-2 text-muted no-underline hover:bg-indigo-50"><span className="h-2 w-2 rounded-full border border-gray-400" />Week 3</Link>
        <p className="px-2 text-muted">Week 4</p><p className="px-2 text-muted">Week 5</p><p className="px-2 text-muted">Week 6</p>
      </div>

      <button type="button" onClick={onToggleDyslexia} className="min-h-11 w-full rounded border border-border px-3 py-2 text-left text-xs text-muted hover:bg-surface-1">
        {dyslexia ? "✓ " : "ⓐ "}Dyslexia-friendly mode
      </button>
    </aside>
  );
}
