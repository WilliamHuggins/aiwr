import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek32Data } from "@/lib/mfa/year-three/week-32";

export const metadata: Metadata = {
  title: "Week 32 — The Essay and the Ongoing Intellectual Life | MFA Year Three",
  description:
    "Year Three, Week 32. Write and revise a polished personal essay, complete publication research, and submit work to literary magazines.",
};

export default function YearThreeWeek32Page() {
  return (
    <WeekShell
      week={yearThreeWeek32Data}
      prevHref="/diy-mfa/year-three/week-31"
      nextHref="/diy-mfa/year-three/week-33"
      nextLabel="Continue to Week 33"
      yearLabel="Year Three"
    />
  );
}
