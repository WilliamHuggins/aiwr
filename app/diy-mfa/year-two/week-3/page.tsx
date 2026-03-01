import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week3Data } from "@/lib/mfa/year-two/week-3";

export const metadata: Metadata = {
  title: "Week 3 — Advanced Structure I: Nonlinear, Fragmented & Modular Narratives | MFA Year Two",
  description:
    "Year Two Week 3 explores nonlinear, fragmented, and modular architectures, with appositives and thesis structure diagnostics.",
};

export default function YearTwoWeek3Page() {
  return (
    <WeekShell
      week={week3Data}
      prevHref="/diy-mfa/year-two/week-2"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
