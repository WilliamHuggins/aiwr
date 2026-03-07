import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week28Data } from "@/lib/mfa/year-two/week-28";

export const metadata: Metadata = {
  title: "Week 28 — Developing Your Own Voice Through Syntax | MFA Year Two",
  description:
    "Year Two Week 28 focuses on voice synthesis through syntax self-portrait work, comparative analysis, and thesis production.",
};

export default function YearTwoWeek28Page() {
  return (
    <WeekShell
      week={week28Data}
      prevHref="/diy-mfa/year-two/week-27"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
