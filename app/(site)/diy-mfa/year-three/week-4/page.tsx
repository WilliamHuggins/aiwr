import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek4Data } from "@/lib/mfa/year-three/week-4";

export const metadata: Metadata = {
  title: "Week 4 — The Thematic Revision — Making the Argument More Precise | MFA Year Three",
  description:
    "Year Three Week 4 performs a thematic audit, revises an inert scene, and applies a verb-focused be-pattern grammar pass.",
};

export default function YearThreeWeek4Page() {
  return (
    <WeekShell
      week={yearThreeWeek4Data}
      prevHref="/diy-mfa/year-three/week-3"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
