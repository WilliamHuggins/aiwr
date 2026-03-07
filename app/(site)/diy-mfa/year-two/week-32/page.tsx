import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week32Data } from "@/lib/mfa/year-two/week-32";

export const metadata: Metadata = {
  title:
    "Week 32 — Intensive Thesis Production II — White Space, Pacing, and the Red Pen | MFA Year Two",
  description:
    "Week 32 continues the production block with paragraph-level pacing, white space craft decisions, and the Red Pen compression exercise.",
};

export default function YearTwoWeek32Page() {
  return (
    <WeekShell
      week={week32Data}
      prevHref="/diy-mfa/year-two/week-31"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
