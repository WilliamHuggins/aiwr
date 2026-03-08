import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek13Data } from "@/lib/mfa/year-three/week-13";

export const metadata: Metadata = {
  title: "Week 13 — Genre-Specific Final Pass | MFA Year Three",
  description:
    "Year Three Week 13 focuses on genre-specific final revision protocols and Phase 8 minimalism syntactic analysis.",
};

export default function YearThreeWeek13Page() {
  return (
    <WeekShell
      week={yearThreeWeek13Data}
      prevHref="/diy-mfa/year-three/week-12"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
