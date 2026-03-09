import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek31Data } from "@/lib/mfa/year-three/week-31";

export const metadata: Metadata = {
  title: "Week 31 — What Comes After — The Next Project | MFA Year Three",
  description:
    "Year Three, Week 31. Begin a 500-word seed document for the next project and write a 600-word retrospective on the full grammar curriculum.",
};

export default function YearThreeWeek31Page() {
  return (
    <WeekShell
      week={yearThreeWeek31Data}
      prevHref="/diy-mfa/year-three/week-30"
      nextHref="/diy-mfa/year-three/week-32"
      nextLabel="Continue to Week 32"
      yearLabel="Year Three"
    />
  );
}
