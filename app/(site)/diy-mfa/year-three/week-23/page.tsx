import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek23Data } from "@/lib/mfa/year-three/week-23";

export const metadata: Metadata = {
  title: "Week 23 — Intensive Final Draft Production III | MFA Year Three",
  description:
    "Year Three, Week 23. Complete all five line-level passes, produce 1,500–2,000 words, and perform the full-manuscript read-aloud revision setup.",
};

export default function YearThreeWeek23Page() {
  return (
    <WeekShell
      week={yearThreeWeek23Data}
      prevHref="/diy-mfa/year-three/week-22"
      nextHref="/diy-mfa/year-three/week-24"
      nextLabel="Week 24: Intensive Final Draft Production IV"
      yearLabel="Year Three"
    />
  );
}
