import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week29Data } from "@/lib/mfa/year-one/week-29";

export const metadata: Metadata = {
  title: "Week 29 — Syntax & Sentence-Level Craft — The Sentence as Artistic Medium | MFA Year One",
  description:
    "Week 29 integrates grammar and craft at the sentence level through syntactic analysis, revision, and imitation.",
};

export default function Week29Page() {
  return (
    <WeekShell
      week={week29Data}
      prevHref="/diy-mfa/year-one/week-28"
      nextHref="/diy-mfa/year-one/week-30"
      nextLabel="Continue to Week 30"
    />
  );
}
