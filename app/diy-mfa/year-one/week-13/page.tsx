import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week13Data } from "@/lib/mfa/year-one/week-13";

export const metadata: Metadata = {
  title: "Week 13 — Setting I: Place as Character | MFA Year One",
  description:
    "Week 13 explores setting as an active force in fiction, concludes Phase 1 grammar review, and practices writing place-specific scenes.",
};

export default function Week13Page() {
  return <WeekShell week={week13Data} prevHref="/diy-mfa/year-one/week-12" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
