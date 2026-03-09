import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek30Data } from "@/lib/mfa/year-three/week-30";

export const metadata: Metadata = {
  title: "Week 30 — The Thesis Defense | MFA Year Three",
  description:
    "Year Three, Week 30. Final defense preparation, thesis defense, and post-defense notes on the committee conversation.",
};

export default function YearThreeWeek30Page() {
  return (
    <WeekShell
      week={yearThreeWeek30Data}
      prevHref="/diy-mfa/year-three/week-29"
      nextHref="/diy-mfa/year-three/week-31"
      nextLabel="Continue to Week 31"
      yearLabel="Year Three"
    />
  );
}
