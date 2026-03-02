import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week19Data } from "@/lib/mfa/year-two/week-19";

export const metadata: Metadata = {
  title: "Week 19 — Entering the Thesis: Sustained Work on a Single Project | MFA Year Two",
  description:
    "Year Two Week 19 begins spring semester thesis drafting with session logs, pacing diagnosis, and punctuation register practice.",
};

export default function YearTwoWeek19Page() {
  return (
    <WeekShell
      week={week19Data}
      prevHref="/diy-mfa/year-two/week-18"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
