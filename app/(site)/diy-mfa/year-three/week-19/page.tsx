import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek19Data } from "@/lib/mfa/year-three/week-19";

export const metadata: Metadata = {
  title:
    "Week 19 — The Final Draft — Producing the Thesis-Ready Manuscript | MFA Year Three",
  description:
    "Year Three, Week 19. Spring semester begins with final-draft production standards, a vernacular syntax audit, and 1,500–2,000 words of thesis-ready prose.",
};

export default function YearThreeWeek19Page() {
  return (
    <WeekShell
      week={yearThreeWeek19Data}
      prevHref="/diy-mfa/year-three/week-18"
      nextHref="/diy-mfa/year-three/week-20"
      nextLabel="Week 20: The Ideal Reader"
      yearLabel="Year Three"
    />
  );
}
