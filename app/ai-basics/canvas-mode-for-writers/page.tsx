import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvas Mode for Writers | AI Writers' Retreat",
  description:
    "A practical walkthrough of ChatGPT Canvas and Gemini Canvas for drafting, revision, scoped edits, and writer-first workflows.",
};

export default function CanvasModeForWritersPage() {
  return (
    <main className="bg-surface-1">
      <iframe
        src="/ai-tutorials/canvas-mode-for-writers.html"
        title="Canvas Mode for Writers"
        className="h-[calc(100vh-80px)] w-full border-0"
      />
    </main>
  );
}
