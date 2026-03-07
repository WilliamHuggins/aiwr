import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek6Data } from "@/lib/mfa/year-three/week-6";

export const metadata: Metadata = {
  title: "Week 6 — Line-Level Revision I: The Sentence Pass | MFA Year Three",
  description:
    "Year Three Week 6 begins line-level revision with a sentence-by-sentence pass, zombie noun audit, and scaled Red Pen exercise.",
};

export default function YearThreeWeek6Page() {
  return (
    <WeekShell
      week={yearThreeWeek6Data}
      prevHref="/diy-mfa/year-three/week-5"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
