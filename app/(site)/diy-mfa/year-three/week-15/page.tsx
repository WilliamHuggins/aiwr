import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek15Data } from "@/lib/mfa/year-three/week-15";

export const metadata: Metadata = {
  title: "Week 15 — Professional Preparation II | MFA Year Three",
  description:
    "Year Three Week 15 focuses on building the teaching portfolio and completing the culminating master sentence grammar synthesis.",
};

export default function YearThreeWeek15Page() {
  return (
    <WeekShell
      week={yearThreeWeek15Data}
      prevHref="/diy-mfa/year-three/week-14"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
