import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week14Data } from "@/lib/mfa/year-one/week-14";

export const metadata: Metadata = {
  title: "Week 14 — Setting II: World-Building & Research | MFA Year One",
  description:
    "Week 14 develops world-building through primary-source research, sentence variety auditing, and scene construction with invisible knowledge.",
};

export default function Week14Page() {
  return <WeekShell week={week14Data} prevHref="/diy-mfa/year-one/week-13" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
