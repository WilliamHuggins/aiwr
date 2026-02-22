import Link from "next/link";

type ModuleHeaderProps = {
  percent: number;
};

export default function ModuleHeader({ percent }: ModuleHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 shadow-sm backdrop-blur" role="banner">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/diy-mfa/year-one/week-1" className="font-module-ui inline-flex min-h-11 items-center rounded-md border border-border px-3 text-xs font-medium text-muted no-underline hover:bg-indigo-50 hover:text-accent">← Week 1</Link>
        <div className="text-center">
          <p className="font-module-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">Year 1 · Week 2</p>
          <p className="font-module-heading text-base font-semibold text-ink">Image &amp; Sensory Detail</p>
        </div>
        <Link href="/diy-mfa/year-one/week-3" className="font-module-ui inline-flex min-h-11 items-center rounded-md border border-border px-3 text-xs font-medium text-muted no-underline hover:bg-indigo-50 hover:text-accent">Week 3 →</Link>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-3 md:px-6">
        <div className="font-module-ui mb-1 flex justify-between text-xs text-muted">
          <span>Year 1 Progress</span>
          <span>2 of 36 weeks — Fall Semester</span>
        </div>
        <div role="progressbar" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100} aria-label={`${Math.round(percent)}% complete`} className="h-1 overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-success transition-all" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </header>
  );
}
