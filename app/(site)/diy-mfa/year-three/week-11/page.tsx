import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek11Data } from "@/lib/mfa/year-three/week-11";

export const metadata: Metadata = {
  title: "Week 11 — Ending Revision | MFA Year Three",
  description:
    "Year Three Week 11 focuses on ending revision, alternative ending design, and Phase 7 transitional architecture.",
};

export default function YearThreeWeek11Page() {
  return (
    <WeekShell
      week={yearThreeWeek11Data}
      prevHref="/diy-mfa/year-three/week-10"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
