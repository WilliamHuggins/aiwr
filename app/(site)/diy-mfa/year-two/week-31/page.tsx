import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week31Data } from "@/lib/mfa/year-two/week-31";

export const metadata: Metadata = {
  title:
    "Week 31 — Intensive Thesis Production I — Logic, Gaps, and the Paragraph as Unit | MFA Year Two",
  description:
    "Week 31 begins the intensive production block with internal logic checks, paragraph-level composition focus, and the Plot Hole Detective AI exercise.",
};

export default function YearTwoWeek31Page() {
  return (
    <WeekShell
      week={week31Data}
      prevHref="/diy-mfa/year-two/week-30"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
