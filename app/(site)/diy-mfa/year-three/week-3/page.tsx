import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek3Data } from "@/lib/mfa/year-three/week-3";

export const metadata: Metadata = {
  title: "Week 3 — The Character Revision — Does Every Character Earn Their Place? | MFA Year Three",
  description:
    "Year Three Week 3 audits the full cast with function, voice, and interiority tests, plus Hayakawa's ladder of abstraction.",
};

export default function YearThreeWeek3Page() {
  return (
    <WeekShell
      week={yearThreeWeek3Data}
      prevHref="/diy-mfa/year-three/week-2"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Three"
    />
  );
}
