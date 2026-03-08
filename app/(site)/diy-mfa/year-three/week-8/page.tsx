import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { yearThreeWeek8Data } from "@/lib/mfa/year-three/week-8";

export const metadata: Metadata = {
  title: "Week 8 — Governing Images and Image Revision | MFA Year Three",
  description:
    "Year Three Week 8 focuses on governing images, image distribution mapping, and Phase 6 grammar synthesis.",
};

export default function YearThreeWeek8Page() {
  return (
    <WeekShell
      week={yearThreeWeek8Data}
      prevHref="/diy-mfa/year-three/week-7"
      nextHref="/diy-mfa/year-three/week-9"
      yearLabel="Year Three"
    />
  );
}
