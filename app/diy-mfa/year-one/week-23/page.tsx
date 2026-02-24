import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week23Data } from "@/lib/mfa/year-one/week-23";

export const metadata: Metadata = {
  title: "Week 23 — Psychic Distance — The Variable Lens | MFA Year One",
  description:
    "Week 23 explores psychic distance as movement, sentence rhythm control, and a depth-dive scene that gradually closes from narrative distance to interior intimacy.",
};

export default function Week23Page() {
  return (
    <WeekShell
      week={week23Data}
      prevHref="/diy-mfa/year-one/week-22"
      nextHref="/diy-mfa/year-one/week-24"
      nextLabel="Week 24: Plot & Structure I — Conflict, Crisis & Resolution"
    />
  );
}
