import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week6Data } from "@/lib/mfa/year-one/week-6";

export const metadata: Metadata = {
  title: "Week 6 — Subtext & Implication | MFA Year One",
  description:
    "Week 6 focuses on subtext, implication, and left-branching sentence structure to build layered meaning beneath dialogue and action.",
};

export default function Week6Page() {
  return <WeekShell week={week6Data} prevHref="/diy-mfa/year-one/week-5" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
