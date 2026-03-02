import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week18Data } from "@/lib/mfa/year-two/week-18";

export const metadata: Metadata = {
  title: "Week 18 — Fall Portfolio Review: The Thesis Comes Into Focus | MFA Year Two",
  description:
    "Year Two Week 18 focuses on portfolio review, proposal-draft alignment, and rhetorical figures synthesis.",
};

export default function YearTwoWeek18Page() {
  return (
    <WeekShell
      week={week18Data}
      prevHref="/diy-mfa/year-two/week-17"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
