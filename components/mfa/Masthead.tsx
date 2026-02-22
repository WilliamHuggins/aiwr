import Link from "next/link";

export default function Masthead({ weekNumber, totalWeeks, subtitle, prevHref, nextHref }: { weekNumber: number; totalWeeks: number; subtitle: string; prevHref: string; nextHref: string }) {
  const progress = `${(weekNumber / totalWeeks) * 100}%`;
  return (
    <header className="sticky top-0 z-40 border-b border-text/40 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-4 md:px-8">
        <Link href={prevHref} className="font-mfa-mono text-[10px] uppercase tracking-[0.12em] text-muted no-underline hover:text-[rgb(var(--mfa-rust))]">← Program Home</Link>
        <span className="font-mfa-display text-[13px] uppercase tracking-[0.25em] text-muted">{subtitle}</span>
        <Link href={nextHref} className="font-mfa-mono text-[10px] uppercase tracking-[0.12em] text-muted no-underline hover:text-[rgb(var(--mfa-rust))]">Week {weekNumber + 1} →</Link>
      </div>
      <div className="h-0.5 w-full bg-border"><div className="h-full bg-[rgb(var(--mfa-rust))]" style={{ width: progress }} /></div>
    </header>
  );
}
