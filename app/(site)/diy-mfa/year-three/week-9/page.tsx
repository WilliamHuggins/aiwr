import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek9Data } from "@/lib/mfa/year-three/week-9";

export const metadata: Metadata = {
  title: "Week 9 — Pacing Revision | MFA Year Three",
  description:
    "Year Three Week 9 focuses on full-manuscript pacing revision, pacing map analysis, and Phase 7 paragraph composition.",
};

export default function YearThreeWeek9Page() {
  return (
    <WeekShell
      week={yearThreeWeek9Data}
      prevHref="/diy-mfa/year-three/week-8"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
