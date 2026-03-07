import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek1Data } from "@/lib/mfa/year-three/week-1";

export const metadata: Metadata = {
  title: "Week 1 — Entering Revision — The Cold Eye and the Willing Hand | MFA Year Three",
  description:
    "Year Three opens with structural revision triage, developmental editing strategy, and Phase 6 diction work.",
};

export default function YearThreeWeek1Page() {
  return (
    <WeekShell
      week={yearThreeWeek1Data}
      prevHref="/diy-mfa/year-two/week-36"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
