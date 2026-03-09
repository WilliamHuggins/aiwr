import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek24Data } from "@/lib/mfa/year-three/week-24";

export const metadata: Metadata = {
  title: "Week 24 — Intensive Final Draft Production IV | MFA Year Three",
  description:
    "Year Three, Week 24. Complete all remaining new writing, begin the oral-reading revision pass, and run the full diction synthesis audit.",
};

export default function YearThreeWeek24Page() {
  return (
    <WeekShell
      week={yearThreeWeek24Data}
      prevHref="/diy-mfa/year-three/week-23"
      nextHref="/diy-mfa/year-three/week-25"
      nextLabel="Week 25: Preparing for the Public Reading"
      yearLabel="Year Three"
    />
  );
}
