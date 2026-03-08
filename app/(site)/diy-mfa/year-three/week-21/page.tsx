import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek21Data } from "@/lib/mfa/year-three/week-21";

export const metadata: Metadata = {
  title: "Week 21 — Intensive Final Draft Production I | MFA Year Three",
  description:
    "Year Three, Week 21. Produce 2,000–3,000 words of final-draft thesis prose, complete a full syntactic master passage analysis, and run pacing visualization.",
};

export default function YearThreeWeek21Page() {
  return (
    <WeekShell
      week={yearThreeWeek21Data}
      prevHref="/diy-mfa/year-three/week-20"
      nextHref="/diy-mfa/year-three/week-22"
      nextLabel="Week 22: Intensive Final Draft Production II"
      yearLabel="Year Three"
    />
  );
}
