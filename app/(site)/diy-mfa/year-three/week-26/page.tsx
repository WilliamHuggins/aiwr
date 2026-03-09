import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek26Data } from "@/lib/mfa/year-three/week-26";

export const metadata: Metadata = {
  title: "Week 26 — The Thesis Defense | MFA Year Three",
  description:
    "Year Three, Week 26. Draft, rehearse, and stress-test a six-part thesis defense presentation while completing the final grammar reflection.",
};

export default function YearThreeWeek26Page() {
  return (
    <WeekShell
      week={yearThreeWeek26Data}
      prevHref="/diy-mfa/year-three/week-25"
      nextHref="/diy-mfa/year-three/week-27"
      nextLabel="Week 27: Thesis Submitted"
      yearLabel="Year Three"
    />
  );
}
