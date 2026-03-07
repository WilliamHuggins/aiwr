import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week27Data } from "@/lib/mfa/year-two/week-27";

export const metadata: Metadata = {
  title: "Week 27 — Advanced Characterization | MFA Year Two",
  description:
    "Year Two Week 27 focuses on advanced characterization challenges, narrator limitation, and the final formal grammar topic on verb energy.",
};

export default function YearTwoWeek27Page() {
  return (
    <WeekShell
      week={week27Data}
      prevHref="/diy-mfa/year-two/week-26"
      nextHref="/diy-mfa/year-two/week-28"
      yearLabel="Year Two"
    />
  );
}
