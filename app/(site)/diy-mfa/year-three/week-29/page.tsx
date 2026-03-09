import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek29Data } from "@/lib/mfa/year-three/week-29";

export const metadata: Metadata = {
  title: "Week 29 — The Public Reading | MFA Year Three",
  description:
    "Year Three, Week 29. Give the public reading, revisit Week One documents, and write one page of post-reading notes while the event is fresh.",
};

export default function YearThreeWeek29Page() {
  return (
    <WeekShell
      week={yearThreeWeek29Data}
      prevHref="/diy-mfa/year-three/week-28"
      nextHref="/diy-mfa/year-three/week-30"
      nextLabel="Continue to Week 30"
      yearLabel="Year Three"
    />
  );
}
