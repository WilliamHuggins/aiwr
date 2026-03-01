import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week12Data } from "@/lib/mfa/year-two/week-12";

export const metadata: Metadata = {
  title: "Week 12 — The Thesis Proposal: Articulating What You're Going to Write | MFA Year Two",
  description:
    "Year Two Week 12 focuses on thesis proposal drafting, epistrophe and symploce, and proposal-reader diagnostic feedback.",
};

export default function YearTwoWeek12Page() {
  return (
    <WeekShell
      week={week12Data}
      prevHref="/diy-mfa/year-two/week-11"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
