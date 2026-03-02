import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week8Data } from "@/lib/mfa/year-two/week-8";

export const metadata: Metadata = {
  title: "Week 8 — Theme & Meaning: What Is This Piece Actually About? | MFA Year Two",
  description:
    "Year Two Week 8 explores governing questions, thematic pressure testing, and gerunds/infinitives as meaning-bearing tools.",
};

export default function YearTwoWeek8Page() {
  return (
    <WeekShell
      week={week8Data}
      prevHref="/diy-mfa/year-two/week-7"
      nextHref="/diy-mfa/year-two/week-9"
      nextLabel="Continue to Week 9"
      yearLabel="Year Two"
    />
  );
}
