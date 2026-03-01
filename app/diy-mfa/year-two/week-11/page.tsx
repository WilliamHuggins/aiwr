import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week11Data } from "@/lib/mfa/year-two/week-11";

export const metadata: Metadata = {
  title: "Week 11 — Genre-Specific Advanced Study: The Long Form's Special Problems | MFA Year Two",
  description:
    "Year Two Week 11 focuses on long-form structural challenges by track, anaphora, and thesis session 11.",
};

export default function YearTwoWeek11Page() {
  return (
    <WeekShell
      week={week11Data}
      prevHref="/diy-mfa/year-two/week-10"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
