import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week8Data } from "@/lib/mfa/year-one/week-8";

export const metadata: Metadata = {
  title: "Week 8 — Characterization & Indirect Revelation | MFA Year One",
  description:
    "Week 8 focuses on characterization through indirect revelation, sentence opener variety, and action-based character development.",
};

export default function Week8Page() {
  return <WeekShell week={week8Data} prevHref="/diy-mfa/year-one/week-7" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
