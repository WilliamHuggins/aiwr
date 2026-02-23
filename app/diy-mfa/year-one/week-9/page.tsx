import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week9Data } from "@/lib/mfa/year-one/week-9";

export const metadata: Metadata = {
  title: "Week 9 — Round, Flat & the Convincing Surprise | MFA Year One",
  description:
    "Week 9 explores round versus flat characterization, sentence inversion, and a scene built around the convincing surprise.",
};

export default function Week9Page() {
  return <WeekShell week={week9Data} prevHref="/diy-mfa/year-one/week-8" nextHref="/diy-mfa/year-one/week-10" nextLabel="Continue to Week 10" />;
}
