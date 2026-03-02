import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week27Data } from "@/lib/mfa/year-one/week-27";

export const metadata: Metadata = {
  title: "Week 27 — Voice & Tone — The Sound of the Self on the Page | MFA Year One",
  description:
    "Week 27 explores voice and tone through close analysis, Phase 2 grammar synthesis, and the Voice Autopsy exercise.",
};

export default function Week27Page() {
  return (
    <WeekShell
      week={week27Data}
      prevHref="/diy-mfa/year-one/week-26"
      nextHref="/diy-mfa/year-one/week-28"
      nextLabel="Continue to Week 28"
    />
  );
}
