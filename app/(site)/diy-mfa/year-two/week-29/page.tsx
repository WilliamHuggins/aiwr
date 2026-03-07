import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week29Data } from "@/lib/mfa/year-two/week-29";

export const metadata: Metadata = {
  title: "Week 29 — Professional Development III — The MFA Thesis and Beyond | MFA Year Two",
  description:
    "Year Two Week 29 focuses on transforming the thesis into a professional document through query or pitch development, submission strategy, and market awareness.",
};

export default function YearTwoWeek29Page() {
  return (
    <WeekShell
      week={week29Data}
      prevHref="/diy-mfa/year-two/week-28"
      nextHref="/diy-mfa/year-two/week-30"
      nextLabel="Continue to Week 30"
      yearLabel="Year Two"
    />
  );
}
