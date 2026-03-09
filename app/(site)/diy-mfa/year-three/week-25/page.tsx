import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek25Data } from "@/lib/mfa/year-three/week-25";

export const metadata: Metadata = {
  title: "Week 25 — Preparing for the Public Reading | MFA Year Three",
  description:
    "Year Three, Week 25. Build and rehearse a 12–15 minute public reading script with framing, pacing, and performance-focused revision.",
};

export default function YearThreeWeek25Page() {
  return (
    <WeekShell
      week={yearThreeWeek25Data}
      prevHref="/diy-mfa/year-three/week-24"
      nextHref="/diy-mfa/year-three/week-26"
      nextLabel="Week 26: Thesis Defense Preparation"
      yearLabel="Year Three"
    />
  );
}
