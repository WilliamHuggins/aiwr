import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek35Data } from "@/lib/mfa/year-three/week-35";

export const metadata: Metadata = {
  title: "Week 35 — Teaching Craft | MFA Year Three",
  description:
    "Year Three, Week 35. Complete the teaching portfolio with a craft talk, teaching philosophy statement, and course description.",
};

export default function YearThreeWeek35Page() {
  return (
    <WeekShell
      week={yearThreeWeek35Data}
      prevHref="/diy-mfa/year-three/week-34"
      nextHref="/diy-mfa/year-three/week-36"
      nextLabel="Continue to Week 36"
      yearLabel="Year Three"
    />
  );
}
