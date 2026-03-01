import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week10Data } from "@/lib/mfa/year-two/week-10";

export const metadata: Metadata = {
  title: "Week 10 — Revision II: The Workshop Mindset & Self-Critique | MFA Year Two",
  description:
    "Year Two Week 10 develops self-workshop technique, structural diagnosis through workshop letters, and Phase 4 parallelism.",
};

export default function YearTwoWeek10Page() {
  return (
    <WeekShell
      week={week10Data}
      prevHref="/diy-mfa/year-two/week-9"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
