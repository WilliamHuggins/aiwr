import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Week 3 — Coming Soon | MFA Year One",
  description: "Week 3 is coming soon in the DIY MFA Year One curriculum.",
};

export default function Week3Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.12em] text-muted">MFA Year One</p>
      <h1 className="mb-4 text-4xl font-semibold">Week 3 Coming Soon</h1>
      <p className="mb-8 text-muted">Next module: Showing vs. Telling.</p>
      <Link href="/diy-mfa/year-one/week-2" className="rounded-md border border-accent px-4 py-2 no-underline">← Back to Week 2</Link>
    </main>
  );
}
