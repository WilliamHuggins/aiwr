import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek33Data } from "@/lib/mfa/year-three/week-33";

export const metadata: Metadata = {
  title: "Week 33 — Experimental Form as Permanent Practice | MFA Year Three",
  description:
    "Year Three, Week 33. Practice experimental form as an ongoing craft tool and produce new seed material for your next project.",
};

export default function YearThreeWeek33Page() {
  return (
    <WeekShell
      week={yearThreeWeek33Data}
      prevHref="/diy-mfa/year-three/week-32"
      nextHref="/diy-mfa/year-three/week-34"
      nextLabel="Continue to Week 34"
      yearLabel="Year Three"
    />
  );
}
