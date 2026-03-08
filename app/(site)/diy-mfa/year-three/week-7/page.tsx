import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek7Data } from "@/lib/mfa/year-three/week-7";

export const metadata: Metadata = {
  title: "Week 7 — Dialogue, Interiority, and Scene Polish | MFA Year Three",
  description:
    "Year Three Week 7 completes the line-level revision sequence with a focused pass on dialogue, interiority, and attribution audit.",
};

export default function YearThreeWeek7Page() {
  return (
    <WeekShell
      week={yearThreeWeek7Data}
      prevHref="/diy-mfa/year-three/week-6"
      nextHref="/diy-mfa/year-three/week-8"
      yearLabel="Year Three"
    />
  );
}
