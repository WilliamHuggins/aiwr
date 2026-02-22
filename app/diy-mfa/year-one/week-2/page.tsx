import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import Week2Module from "@/components/mfa/Week2Module";

export const metadata: Metadata = {
  title: "Week 2 — Image & Sensory Detail | MFA Year One",
  description: "The image is the fundamental unit of literary art — not the idea, not the theme, but the concrete thing seen, heard, smelled, tasted, touched.",
};

export default function Week2Page() {
  return <WeekShell variant="module" moduleContent={<Week2Module />} />;
}
