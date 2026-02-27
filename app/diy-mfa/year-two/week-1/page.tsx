import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week1Data } from "@/lib/mfa/year-two/week-1";

export const metadata: Metadata = {
  title: "Week 1 — Scene Construction as Architectural Craft | MFA Year Two",
  description:
    "Year Two begins with scene architecture, structural autopsy, participial phrases, and a 1,500–2,000 word thesis session.",
};

export default function YearTwoWeek1Page() {
  return (
    <WeekShell
      week={week1Data}
      prevHref="/diy-mfa/year-one/week-36"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
