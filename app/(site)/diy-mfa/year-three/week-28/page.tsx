import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek28Data } from "@/lib/mfa/year-three/week-28";

export const metadata: Metadata = {
  title: "Week 28 — Final Preparation for the Public Reading | MFA Year Three",
  description:
    "Year Three, Week 28. Complete three timed rehearsals, finalize the author's note, and confirm all event logistics before the public reading.",
};

export default function YearThreeWeek28Page() {
  return (
    <WeekShell
      week={yearThreeWeek28Data}
      prevHref="/diy-mfa/year-three/week-27"
      nextHref="/diy-mfa/year-three/week-29"
      nextLabel="Week 29: The Public Reading"
      yearLabel="Year Three"
    />
  );
}
