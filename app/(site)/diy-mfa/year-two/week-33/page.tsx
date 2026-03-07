import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week33Data } from "@/lib/mfa/year-two/week-33";

export const metadata: Metadata = {
  title:
    "Week 33 — Intensive Thesis Production III — Transitions, Surprise, and Revision Coaching | MFA Year Two",
  description:
    "Week 33 completes the production block with transition architecture, full-draft surprise diagnostics, and the Revision Coaching AI exercise.",
};

export default function YearTwoWeek33Page() {
  return (
    <WeekShell
      week={week33Data}
      prevHref="/diy-mfa/year-two/week-32"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
