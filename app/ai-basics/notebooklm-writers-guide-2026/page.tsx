import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The Writer's Complete Guide to NotebookLM in 2026 | AI Writers' Retreat",
  description:
    "A complete writer-focused NotebookLM tutorial covering setup, fiction workflows, nonfiction research, prompts, limitations, and recommended resources.",
};

const tutorials = [
  ["Google", "NotebookLM — Start Here", "https://notebooklm.google.com"],
  ["Google Blog", "8 Expert Tips for Getting Started", "https://blog.google/innovation-and-ai/products/notebooklm-beginner-tips/"],
  ["Google Support", "NotebookLM Help Center", "https://support.google.com/notebooklm/"],
  ["Substack — Matt Kelland", "NotebookLM for Writers", "https://mattkelland.substack.com/p/notebooklm-for-writers"],
  ["Robb Wallace", "Google NotebookLM for Authors", "https://www.robbwallace.co.uk/news/google-notebooklm-for-authors/"],
  [
    "Substack — Shane Wozere",
    "Interrogating the Script: Practical Use Cases",
    "https://shanewozere.substack.com/p/interrogating-the-script-practical",
  ],
] as const;

export default function NotebookLMTutorialPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface-1 to-surface-2 py-20 md:py-24">
        <Container className="max-w-4xl">
          <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent2">Updated February 2026</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            The Writer&apos;s Complete Guide to NotebookLM in 2026
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            NotebookLM is not a writing generator. It&apos;s a source-grounded research and editorial assistant that helps
            writers analyze their own material with citations.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://notebooklm.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 font-ui text-xs uppercase tracking-[0.14em] text-bg no-underline"
            >
              Open NotebookLM
            </a>
            <Link
              href="/ai-basics"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 font-ui text-xs uppercase tracking-[0.14em] text-text no-underline"
            >
              Back to tutorials
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="max-w-4xl space-y-8 text-base leading-relaxed text-text">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.16em] text-muted">The Big Idea</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">It&apos;s not a writing tool. That&apos;s the point.</h2>
            <p className="mt-4 text-muted">
              NotebookLM generates responses from uploaded sources and provides inline citations. For writers, that
              makes it useful for continuity tracking, research synthesis, draft comparisons, and first-pass critique.
            </p>
          </div>

          <Card className="p-6">
            <h3 className="font-display text-2xl font-semibold text-text">What does it cost?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Free: 100 notebooks, 50 sources per notebook, 50 daily queries, 3 audio overviews/day.</li>
              <li>Pro ($19.99/mo): 500 notebooks, 300 sources per notebook, 500 daily queries, 20 audio overviews/day.</li>
              <li>Ultra: enterprise-scale usage; generally unnecessary for most solo writers.</li>
            </ul>
          </Card>

          <div>
            <p className="font-ui text-xs uppercase tracking-[0.16em] text-muted">Getting Organized</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">Build your workspace before you query</h2>
            <p className="mt-4 text-muted">
              Use one notebook per major project, plus shared reference notebooks (e.g., series bible, craft references,
              recurring research themes). Naming and source hygiene heavily affect result quality.
            </p>
          </div>

          <Card className="p-6">
            <h3 className="font-display text-2xl font-semibold text-text">For fiction writers</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Continuity audits across long manuscripts and multi-book arcs.</li>
              <li>Compare old and revised outlines to spot moved, cut, or added scenes.</li>
              <li>Run custom personas (editor, critic, genre reader) for targeted feedback passes.</li>
            </ul>
          </Card>

          <div>
            <p className="font-ui text-xs uppercase tracking-[0.16em] text-muted">Other writer types</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">
              Screenwriters, journalists, and nonfiction authors all benefit differently
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Card className="p-5">
                <p className="font-ui text-xs uppercase tracking-[0.14em] text-accent">Screenwriters</p>
                <p className="mt-2 text-sm text-muted">Chronology breakdowns, continuity checks, and recap extraction from scripts.</p>
              </Card>
              <Card className="p-5">
                <p className="font-ui text-xs uppercase tracking-[0.14em] text-accent">Journalists</p>
                <p className="mt-2 text-sm text-muted">Citation-backed synthesis from large document sets and transcripts.</p>
              </Card>
              <Card className="p-5">
                <p className="font-ui text-xs uppercase tracking-[0.14em] text-accent">Nonfiction authors</p>
                <p className="mt-2 text-sm text-muted">Theme clustering, contradiction detection, and source tracking during drafting.</p>
              </Card>
            </div>
          </div>

          <Card className="p-6">
            <h3 className="font-display text-2xl font-semibold text-text">Prompt pack (examples)</h3>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p className="rounded-lg border border-border bg-surface-2 px-4 py-3 font-mono">
                “Review all uploaded documents and identify what is missing—not what is already covered.”
              </p>
              <p className="rounded-lg border border-border bg-surface-2 px-4 py-3 font-mono">
                “Find all contradicting information and make both sides explicit with citations.”
              </p>
              <p className="rounded-lg border border-border bg-surface-2 px-4 py-3 font-mono">
                “Create a 360-degree feedback report: strict editor, reader confusion points, and genre expectations.”
              </p>
            </div>
          </Card>

          <div>
            <p className="font-ui text-xs uppercase tracking-[0.16em] text-muted">Go Deeper</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">Official tutorials & community resources</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {tutorials.map(([source, title, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="h-full p-5 transition-transform hover:-translate-y-0.5">
                    <p className="font-ui text-[11px] uppercase tracking-[0.14em] text-accent2">{source}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-text">{title}</p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
