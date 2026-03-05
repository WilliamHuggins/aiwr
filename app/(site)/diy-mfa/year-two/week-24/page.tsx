import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week24Data } from "@/lib/mfa/year-two/week-24";

export const metadata: Metadata = {
  title: "Week 24 — The Sentence as Music | MFA Year Two",
  description:
    "Year Two Week 24 trains advanced prose rhythm through sentence musicality, period control, and oral revision.",
};

export default function YearTwoWeek24Page() {
  return (
    <WeekShell
      week={week24Data}
      prevHref="/diy-mfa/year-two/week-23"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
