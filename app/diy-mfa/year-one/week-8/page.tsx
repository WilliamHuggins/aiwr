import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week8Data } from "@/lib/mfa/year-one/week-8";

export const metadata: Metadata = {
  title: "Week 8 — Point of View & The Filter | MFA Year One",
  description:
    "Week 8 focuses on point of view, filtering, and mid-branching sentence structure to build narrative consciousness and control.",
};

export default function Week8Page() {
  return <WeekShell week={week8Data} prevHref="/diy-mfa/year-one/week-6" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
