import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week14Data } from "@/lib/mfa/year-two/week-14";

export const metadata: Metadata = {
  title: "Week 14 — Voice Development: Finding the Frequency Only You Can Transmit | MFA Year Two",
  description:
    "Year Two Week 14 focuses on voice development, voice consistency auditing, and asyndeton.",
};

export default function YearTwoWeek14Page() {
  return (
    <WeekShell
      week={week14Data}
      prevHref="/diy-mfa/year-two/week-13"
      nextHref="/diy-mfa/year-two/week-15"
      yearLabel="Year Two"
    />
  );
}
