import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week36Data } from "@/lib/mfa/year-two/week-36";

export const metadata: Metadata = {
  title: "Week 36 — Year Two Synthesis — Who Are You as a Writer? | MFA Year Two",
  description:
    "Week 36 culminates Year Two with a synthesis statement, grammar self-assessment, and Year Three tutor calibration.",
};

export default function YearTwoWeek36Page() {
  return (
    <WeekShell
      week={week36Data}
      prevHref="/diy-mfa/year-two/week-35"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
