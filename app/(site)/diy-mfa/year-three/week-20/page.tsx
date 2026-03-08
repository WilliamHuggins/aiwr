import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek20Data } from "@/lib/mfa/year-three/week-20";

export const metadata: Metadata = {
  title: "Week 20 — Revising for the Reader You Want | MFA Year Three",
  description:
    "Year Three, Week 20. Calibrate final-draft prose to the ideal reader with a plain-vs-ornate style declaration and 2,000–3,000 words of thesis production.",
};

export default function YearThreeWeek20Page() {
  return (
    <WeekShell
      week={yearThreeWeek20Data}
      prevHref="/diy-mfa/year-three/week-19"
      nextHref="/diy-mfa/year-three/week-21"
      nextLabel="Week 21: Intensive Final Draft Production I"
      yearLabel="Year Three"
    />
  );
}
