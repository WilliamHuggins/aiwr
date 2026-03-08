import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek12Data } from "@/lib/mfa/year-three/week-12";

export const metadata: Metadata = {
  title: "Week 12 — Full Manuscript Read-Through | MFA Year Three",
  description:
    "Year Three Week 12 focuses on the second full-manuscript read-through, final structural assessment, and Phase 7 narrative technique synthesis.",
};

export default function YearThreeWeek12Page() {
  return (
    <WeekShell
      week={yearThreeWeek12Data}
      prevHref="/diy-mfa/year-three/week-11"
      nextHref="/diy-mfa/year-three/week-13"
      nextLabel="Continue to Week 13"
      yearLabel="Year Three"
    />
  );
}
