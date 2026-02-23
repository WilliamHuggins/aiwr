import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week5Data } from "@/lib/mfa/year-one/week-5";

export const metadata: Metadata = {
  title: "Week 5 — Image & Sensory Detail | MFA Year One",
  description:
    "Week 5 focuses on concrete image, sensory detail, and right-branching sentence structure to build emotional force without abstraction.",
};

export default function Week5Page() {
  return <WeekShell week={week5Data} prevHref="/diy-mfa/year-one/week-4" nextHref="/diy-mfa/year-one/week-6" nextLabel="Week 6: Subtext & Implication" />;
}
