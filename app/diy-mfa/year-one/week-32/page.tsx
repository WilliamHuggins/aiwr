import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week32Data } from "@/lib/mfa/year-one/week-32";

export const metadata: Metadata = {
  title: "Week 32 — Pacing & Rhythm — Controlling the Reader's Experience of Time | MFA Year One",
  description:
    "Pacing is not speed — it is the relationship between what a moment deserves and how much space it is given. Week 32 covers scene and summary, dilation and compression, and anaphora and epistrophe as a micro-pacing tool.",
};

export default function Week32Page() {
  return (
    <WeekShell
      week={week32Data}
      prevHref="/diy-mfa/year-one/week-31"
      nextHref="/diy-mfa/year-one/week-33"
      nextLabel="Continue to Week 33"
    />
  );
}
