import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week35Data } from "@/lib/mfa/year-one/week-35";

export const metadata: Metadata = {
  title: "Week 35 — Spring Portfolio Review — The Emerging Manuscript | MFA Year One",
  description:
    "Week 35 focuses on spring portfolio curation, free indirect discourse recognition, and identifying the manuscript emerging from Year One work.",
};

export default function Week35Page() {
  return <WeekShell week={week35Data} prevHref="/diy-mfa/year-one/week-34" nextHref="/diy-mfa/year-one/week-36" nextLabel="Continue to Week 36" />;
}
