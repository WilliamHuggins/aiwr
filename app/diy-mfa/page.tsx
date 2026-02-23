import Link from "next/link";

export default function DiyMfaHome() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">DIY MFA</p>
      <h1 className="mt-4 font-mfa-display text-6xl">Year One</h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl text-muted">A 36-week writing curriculum organized around practice, craft, and editorial rigor.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/diy-mfa/year-one/week-1" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 1</Link>
        <Link href="/diy-mfa/year-one/week-2" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 2</Link>
        <Link href="/diy-mfa/year-one/week-3" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 3</Link>
        <Link href="/diy-mfa/year-one/week-4" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 4</Link>
        <Link href="/diy-mfa/year-one/week-5" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 5</Link>
        <Link href="/diy-mfa/year-one/week-6" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 6</Link>
        <Link href="/diy-mfa/year-one/week-7" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 7</Link>
        <Link href="/diy-mfa/year-one/week-8" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 8</Link>
        <Link href="/diy-mfa/year-one/week-9" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 9</Link>
        <Link href="/diy-mfa/year-one/week-10" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 10</Link>
        <Link href="/diy-mfa/year-one/week-11" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 11</Link>
        <Link href="/diy-mfa/year-one/week-12" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 12</Link>
        <Link href="/diy-mfa/year-one/week-13" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 13</Link>
        <Link href="/diy-mfa/year-one/week-14" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 14</Link>
        <Link href="/diy-mfa/year-one/week-15" className="rounded-sm border border-border px-4 py-2 no-underline">Enter Week 15</Link>
      </div>
    </section>
  );
}
