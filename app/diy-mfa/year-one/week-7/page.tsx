import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week7Data } from "@/lib/mfa/year-one/week-7";

export const metadata: Metadata = {
  title: "Week 7 — Point of View & The Filter | MFA Year One",
  description:
    "Week 7 focuses on point of view, filtering, and mid-branching sentence structure to build narrative consciousness and control.",
};

export default function Week7Page() {
  return <WeekShell week={week7Data} prevHref="/diy-mfa/year-one/week-6" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
