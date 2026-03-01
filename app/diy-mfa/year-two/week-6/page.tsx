import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week6Data } from "@/lib/mfa/year-two/week-6";

export const metadata: Metadata = {
  title: "Week 6 — Opening Strategies: The First Page as a Contract | MFA Year Two",
  description:
    "Year Two Week 6 explores opening-page contracts, governing questions, tonal register, and adjective/adverb cluster revision.",
};

export default function YearTwoWeek6Page() {
  return (
    <WeekShell
      week={week6Data}
      prevHref="/diy-mfa/year-two/week-5"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
