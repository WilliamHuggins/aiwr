import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week34Data } from "@/lib/mfa/year-one/week-34";

export const metadata: Metadata = {
  title: "Week 34 — Tone, Comedy & the Rhetoric of Laughter — Cross-Genre Synthesis | MFA Year One",
  description:
    "Week 34 explores comic registers, tonal balance between humor and pain, and rhythm shifts through polysyndeton and asyndeton.",
};

export default function Week34Page() {
  return (
    <WeekShell
      week={week34Data}
      prevHref="/diy-mfa/year-one/week-33"
      nextHref="/diy-mfa/year-one/week-35"
      nextLabel="Continue to Week 35"
    />
  );
}
