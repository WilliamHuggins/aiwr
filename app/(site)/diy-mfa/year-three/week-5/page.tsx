import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek5Data } from "@/lib/mfa/year-three/week-5";

export const metadata: Metadata = {
  title: "Week 5 — The Voice Revision — Consistency, Depth, and the Signature Sentence | MFA Year Three",
  description:
    "Year Three Week 5 completes a voice audit, revises weak-voice passages, and applies an adverb-elimination grammar pass.",
};

export default function YearThreeWeek5Page() {
  return (
    <WeekShell
      week={yearThreeWeek5Data}
      prevHref="/diy-mfa/year-three/week-4"
      nextHref="/diy-mfa/year-three/week-6"
      nextLabel="Week 6: Line-Level Revision I — The Sentence Pass"
      yearLabel="Year Three"
    />
  );
}
