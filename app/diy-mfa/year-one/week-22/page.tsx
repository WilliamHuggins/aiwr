import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week22Data } from "@/lib/mfa/year-one/week-22";

export const metadata: Metadata = {
  title: "Week 22 — The Unreliable Narrator | MFA Year One",
  description:
    "Week 22 studies unreliable narration, the rhythm of threes, and a self-deceiving narrator exercise focused on subtle structural distortion.",
};

export default function Week22Page() {
  return <WeekShell week={week22Data} prevHref="/diy-mfa/year-one/week-21" nextHref="/diy-mfa/year-one/week-23" nextLabel="Week 23: Psychic Distance — The Variable Lens" />;
}
