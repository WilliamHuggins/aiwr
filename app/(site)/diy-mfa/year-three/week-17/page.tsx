import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek17Data } from "@/lib/mfa/year-three/week-17";

export const metadata: Metadata = {
  title: "Week 17 — The Literary Community | MFA Year Three",
  description:
    "Year Three Week 17 focuses on literary community-building, residency preparation, and sustained professional practice.",
};

export default function YearThreeWeek17Page() {
  return (
    <WeekShell
      week={yearThreeWeek17Data}
      prevHref="/diy-mfa/year-three/week-16"
      nextHref="/diy-mfa/year-three/week-18"
      nextLabel="Continue to Week 18"
      yearLabel="Year Three"
    />
  );
}
