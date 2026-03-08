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
      nextHref="/diy-mfa/year-three/week-10"
      nextLabel="Continue to Week 10"
      yearLabel="Year Three"
    />
  );
}
