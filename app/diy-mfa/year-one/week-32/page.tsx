import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week32Data } from "@/lib/mfa/year-one/week-32";

export const metadata: Metadata = {
  title: "Week 32 — Pacing & Rhythm — Controlling the Reader's Experience of Time | MFA Year One",
  description:
    "Week 32 develops pacing control through scene/summary contrast, dilation and compression, and deliberate repetition via anaphora and epistrophe.",
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
