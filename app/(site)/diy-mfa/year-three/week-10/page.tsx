import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek10Data } from "@/lib/mfa/year-three/week-10";

export const metadata: Metadata = {
  title: "Week 10 — Opening Revision | MFA Year Three",
  description:
    "Year Three Week 10 focuses on opening revision, contract diagnostics, and Phase 7 white space pacing at the paragraph level.",
};

export default function YearThreeWeek10Page() {
  return (
    <WeekShell
      week={yearThreeWeek10Data}
      prevHref="/diy-mfa/year-three/week-9"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
