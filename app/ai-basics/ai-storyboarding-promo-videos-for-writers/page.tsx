import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Storyboarding & Promo Videos for Writers | AI Writers' Retreat",
  description:
    "A practical lesson module for writers on storyboarding, AI image generation, and turning stills into promo videos.",
};

export default function AIStoryboardingPromoVideosPage() {
  return (
    <main className="bg-surface-1">
      <iframe
        src="/ai-tutorials/ai-storyboarding-promo-videos-for-writers.html"
        title="AI Storyboarding & Promo Videos for Writers"
        className="h-[calc(100vh-80px)] w-full border-0"
      />
    </main>
  );
}
