import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek22Data } from "@/lib/mfa/year-three/week-22";

export const metadata: Metadata = {
  title: "Week 22 — Intensive Final Draft Production II | MFA Year Three",
  description:
    "Year Three, Week 22. Complete all major structural revisions, produce 2,000–3,000 words, and write the concentrated voice passage inside the thesis manuscript.",
};

export default function YearThreeWeek22Page() {
  return (
    <WeekShell
      week={yearThreeWeek22Data}
      prevHref="/diy-mfa/year-three/week-21"
      nextHref="/diy-mfa/year-three/week-23"
      nextLabel="Week 23: Intensive Final Draft Production III"
      yearLabel="Year Three"
    />
  );
}
