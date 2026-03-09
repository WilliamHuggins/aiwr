import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek34Data } from "@/lib/mfa/year-three/week-34";

export const metadata: Metadata = {
  title: "Week 34 — The Writing Retreat as Practice | MFA Year Three",
  description:
    "Year Three, Week 34. Build the practical infrastructure for sustained writing through residencies, retreats, and realistic daily practice.",
};

export default function YearThreeWeek34Page() {
  return (
    <WeekShell
      week={yearThreeWeek34Data}
      prevHref="/diy-mfa/year-three/week-33"
      nextHref="/diy-mfa/year-three/week-35"
      nextLabel="Continue to Week 35"
      yearLabel="Year Three"
    />
  );
}
