import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week2Data } from "@/lib/mfa/year-two/week-2";

export const metadata: Metadata = {
  title: "Week 2 — Subtext & Implication: The Iceberg Theory | MFA Year Two",
  description:
    "Year Two Week 2 explores Hemingway's iceberg theory, subtext across dialogue/action/image channels, and absolute phrases as a precision tool.",
};

export default function YearTwoWeek2Page() {
  return (
    <WeekShell
      week={week2Data}
      prevHref="/diy-mfa/year-two/week-1"
      nextHref="/diy-mfa/year-two/week-3"
      nextLabel="Week 3: Advanced Structure I — Nonlinear, Fragmented & Modular Narratives"
      yearLabel="Year Two"
    />
  );
}
