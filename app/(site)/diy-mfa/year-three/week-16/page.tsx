import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek16Data } from "@/lib/mfa/year-three/week-16";

export const metadata: Metadata = {
  title: "Week 16 — The Writer's Reading Life | MFA Year Three",
  description:
    "Year Three Week 16 focuses on building a sustainable reading life with maximalism and lyric prose style studies.",
};

export default function YearThreeWeek16Page() {
  return (
    <WeekShell
      week={yearThreeWeek16Data}
      prevHref="/diy-mfa/year-three/week-15"
      nextHref="/diy-mfa/year-three/week-17"
      yearLabel="Year Three"
    />
  );
}
