import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week2Data } from "@/lib/mfa/year-one/week-2";

export const metadata: Metadata = {
  title: "Week 2 — Image & Sensory Detail | MFA Year One",
  description: "The image is the fundamental unit of literary art — not the idea, not the theme, but the concrete thing seen, heard, smelled, tasted, touched.",
};

export default function Week2Page() {
  return <WeekShell week={week2Data} prevHref="/diy-mfa/year-one/week-1" nextHref="/diy-mfa/year-one/week-3" nextLabel="Week 3: Showing vs. Telling & Narrative Mode" />;
}
