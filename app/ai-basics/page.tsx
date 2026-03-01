import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const tutorials = [
  {
    title: "AI Storyboarding & Promo Videos for Writers",
    description:
      "Build a writer-first workflow for storyboards, image continuity, video generation, and trailer-ready audio using modern AI tools.",
    href: "/ai-basics/ai-storyboarding-promo-videos-for-writers",
    source: "AIWR Lesson Module",
    updated: "Updated February 2026",
  },
  {
    title: "The Writer's Complete Guide to NotebookLM in 2026",
    description:
      "A comprehensive, source-grounded walkthrough of NotebookLM for fiction, nonfiction, screenwriting, and journalism workflows.",
    href: "/ai-basics/notebooklm-writers-guide-2026",
    source: "AIWR Tutorial",
    updated: "Updated February 2026",
  },
];

export default function AITutorialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface-1 to-surface-2 py-20 md:py-24">
        <Container>
          <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">AI Tutorials</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Practical tutorials for writers using AI with judgment.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Step-by-step guides for research, revision, continuity checks, and editorial workflows—built for writers who
            want to stay in control of voice and craft.
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tutorials.map((tutorial) => (
              <Link key={tutorial.href} href={tutorial.href} className="group no-underline">
                <Card className="directory-card flex h-full flex-col p-7">
                  <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-accent2">{tutorial.source}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-text">{tutorial.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tutorial.description}</p>
                  <p className="mt-5 font-ui text-xs uppercase tracking-[0.14em] text-muted">{tutorial.updated}</p>
                  <span className="mt-6 font-ui text-xs uppercase tracking-[0.14em] text-accent">Read tutorial →</span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
