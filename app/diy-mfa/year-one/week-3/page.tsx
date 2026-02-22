import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week3Data } from "@/lib/mfa/year-one/week-3";

export const metadata: Metadata = {
  title: "Week 3 — Showing vs. Telling & Narrative Mode | MFA Year One",
  description: "Week 3 covers showing vs. telling, scene vs. summary decisions, and sentence-kernel diagnostics.",
};

export default function Week3Page() {
  return <WeekShell week={week3Data} prevHref="/diy-mfa/year-one/week-2" nextHref="/diy-mfa/year-one/week-5" nextLabel="Week 5: Image & Sensory Detail" />;
}
