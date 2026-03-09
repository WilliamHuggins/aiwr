import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek27Data } from "@/lib/mfa/year-three/week-27";

export const metadata: Metadata = {
  title: "Week 27 — After Completion | MFA Year Three",
  description:
    "Year Three, Week 27. Process thesis completion with a benchmark sentence portfolio, a completion letter, and forward-facing practice planning.",
};

export default function YearThreeWeek27Page() {
  return (
    <WeekShell
      week={yearThreeWeek27Data}
      prevHref="/diy-mfa/year-three/week-26"
      nextHref="/diy-mfa/year-three/week-28"
      nextLabel="Week 28: Public Reading Final Preparation"
      yearLabel="Year Three"
    />
  );
}
