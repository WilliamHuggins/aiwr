import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek18Data } from "@/lib/mfa/year-three/week-18";

export const metadata: Metadata = {
  title: "Week 18 — Fall Semester Synthesis: The Thesis Enters Final Drafting | MFA Year Three",
  description:
    "Year Three, Week 18. The fall semester's honest reckoning: what the eighteen weeks have accomplished, what remains, and the specific spring contract. Grammar Phase 8: disjunction and the fully integrated syntactic voice. The spring semester's six obligations named and planned.",
};

export default function YearThreeWeek18Page() {
  return (
    <WeekShell
      week={yearThreeWeek18Data}
      prevHref="/diy-mfa/year-three/week-17"
      nextHref="/diy-mfa/year-three/week-19"
      nextLabel="Week 19: The Final Draft — Producing the Thesis-Ready Manuscript"
      yearLabel="Year Three"
    />
  );
}
