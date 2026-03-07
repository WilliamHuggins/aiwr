import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek2Data } from "@/lib/mfa/year-three/week-2";

export const metadata: Metadata = {
  title: "Week 2 — The Structural Revision — Building the Scene Map | MFA Year Three",
  description:
    "Year Three Week 2 builds a full scene map for structural diagnosis, with monosyllabic diction study and AI architecture assessment.",
};

export default function YearThreeWeek2Page() {
  return (
    <WeekShell
      week={yearThreeWeek2Data}
      prevHref="/diy-mfa/year-three/week-1"
      nextHref="/diy-mfa/year-three/week-3"
      nextLabel="Continue to Week 3"
      yearLabel="Year Three"
    />
  );
}
