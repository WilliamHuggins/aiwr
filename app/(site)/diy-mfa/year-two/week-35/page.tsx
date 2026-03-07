import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week35Data } from "@/lib/mfa/year-two/week-35";

export const metadata: Metadata = {
  title: "Week 35 — The Year Two Thesis Revision Plan | MFA Year Two",
  description:
    "Year Two Week 35 builds the sequenced revision plan for Year Three, with implied-author analysis and a final AI planning workshop.",
};

export default function YearTwoWeek35Page() {
  return (
    <WeekShell
      week={week35Data}
      prevHref="/diy-mfa/year-two/week-34"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
