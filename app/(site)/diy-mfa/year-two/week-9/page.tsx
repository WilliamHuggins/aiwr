import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week9Data } from "@/lib/mfa/year-two/week-9";

export const metadata: Metadata = {
  title: "Week 9 — Revision I: The Generative vs. the Revisionary Process | MFA Year Two",
  description:
    "Year Two Week 9 introduces the re-vision protocol, structural-first revision, and Phase 3 synthesis of phrase constructions.",
};

export default function YearTwoWeek9Page() {
  return (
    <WeekShell
      week={week9Data}
      prevHref="/diy-mfa/year-two/week-8"
      nextHref="/diy-mfa/year-two/week-10"
      nextLabel="Continue to Week 10"
      yearLabel="Year Two"
    />
  );
}
