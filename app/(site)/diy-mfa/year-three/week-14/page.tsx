import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek14Data } from "@/lib/mfa/year-three/week-14";

export const metadata: Metadata = {
  title: "Week 14 — Professional Preparation I | MFA Year Three",
  description:
    "Year Three Week 14 focuses on building the complete professional submission package and Phase 8 prose rhythm analysis.",
};

export default function YearThreeWeek14Page() {
  return (
    <WeekShell
      week={yearThreeWeek14Data}
      prevHref="/diy-mfa/year-three/week-13"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
