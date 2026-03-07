import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week25Data } from "@/lib/mfa/year-two/week-25";

export const metadata: Metadata = {
  title: "Week 25 — Minimalism and Maximalism | MFA Year Two",
  description:
    "Year Two Week 25 compares minimalist and maximalist syntactic approaches to help define a thesis manuscript's governing style.",
};

export default function YearTwoWeek25Page() {
  return (
    <WeekShell
      week={week25Data}
      prevHref="/diy-mfa/year-two/week-24"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
