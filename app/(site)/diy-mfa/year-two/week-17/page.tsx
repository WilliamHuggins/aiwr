import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week17Data } from "@/lib/mfa/year-two/week-17";

export const metadata: Metadata = {
  title:
    "Week 17 — Professional Development II: Craft, Career & the Writer's Life | MFA Year Two",
  description:
    "Year Two Week 17 focuses on sustainable literary careers, artist statements, and semicolon craft.",
};

export default function YearTwoWeek17Page() {
  return (
    <WeekShell
      week={week17Data}
      prevHref="/diy-mfa/year-two/week-16"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
