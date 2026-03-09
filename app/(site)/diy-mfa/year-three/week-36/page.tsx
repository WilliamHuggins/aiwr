import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek36Data } from "@/lib/mfa/year-three/week-36";

export const metadata: Metadata = {
  title: "Week 36 — The Completion — What the Program Has Made | MFA Year Three",
  description:
    "Year Three, Week 36. Complete the final synthesis statement, write the last sentence exercise, and begin the next project.",
};

export default function YearThreeWeek36Page() {
  return (
    <WeekShell
      week={yearThreeWeek36Data}
      prevHref="/diy-mfa/year-three/week-35"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Home"
      yearLabel="Year Three"
    />
  );
}
