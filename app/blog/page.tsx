import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlogPostsGrid } from "@/components/blog/BlogPostListings";

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface-1 to-surface-2 py-20 md:py-24">
        <Container>
          <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">AI Writers&apos; Retreat Journal</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Notes, essays, and field reports from the craft desk.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            A magazine-style index of long-form writing on language, editorial control, and practical AI use for
            serious writers.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center font-ui text-xs uppercase tracking-[0.12em] text-text no-underline"
          >
            Back to Home
          </Link>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <BlogPostsGrid />
        </Container>
      </section>
    </>
  );
}
