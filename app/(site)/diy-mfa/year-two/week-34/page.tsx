import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week34Data } from "@/lib/mfa/year-two/week-34";

export const metadata: Metadata = {
  title: "Week 34 — The Thesis Read-Through — Seeing the Whole | MFA Year Two",
  description:
    "Week 34 guides your first full-manuscript read-through, with developmental diagnostics, a 700-word report, and Phase 7 grammar on interior monologue and stream of consciousness.",
};

export default function YearTwoWeek34Page() {
  return (
    <WeekShell
      week={week34Data}
      prevHref="/diy-mfa/year-two/week-33"
      nextHref="/diy-mfa/year-two/week-35"
      nextLabel="Continue to Week 35"
      yearLabel="Year Two"
    />
  );
}
