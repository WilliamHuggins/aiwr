import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/70 bg-surface-1/85 p-8 shadow-editorial backdrop-blur-sm md:p-10">
          <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">Community</p>
          <h1 className="mt-3 font-display text-4xl font-semibold">AIWR Writer&apos;s Circle</h1>
          <p className="mt-4 max-w-2xl text-muted">A calm, moderated workshop community for writers to share drafts, get feedback, and gather for events.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/writers-circle/signup" className="no-underline">
              <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Join the Circle</Button>
            </Link>
            <Link href="/writers-circle/login" className="no-underline">
              <Button variant="secondary" className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Log in</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">By joining, you agree to our <Link href="/writers-circle/terms">Rules &amp; Data</Link>.</p>
        </div>
      </Container>
    </section>
  );
}
