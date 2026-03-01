import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-border bg-panel p-10 shadow-sm">
        <p className="text-sm uppercase tracking-wider text-muted">aiwritersretreat.com</p>
        <h1 className="mt-3 font-serif text-4xl">AIWR Writer&apos;s Circle</h1>
        <p className="mt-4 max-w-2xl text-muted">A calm, moderated workshop community for writers to share drafts, get feedback, and gather for events.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/signup" className="rounded-xl bg-primary px-5 py-3 text-primaryText no-underline">Join the Circle</Link>
          <Link href="/login" className="rounded-xl border border-border px-5 py-3 no-underline">Log in</Link>
        </div>
        <p className="mt-6 text-sm text-muted">By joining, you agree to our <Link href="/terms">Rules &amp; Data</Link>.</p>
      </div>
    </div>
  );
}
