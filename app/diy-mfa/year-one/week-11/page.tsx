import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week11Data } from "@/lib/mfa/year-one/week-11";

export const metadata: Metadata = {
  title: "Week 11 — Dialogue I: Realism & Subtext | MFA Year One",
  description:
    "Week 11 explores dialogue as action, subtext mechanics, compound sentences, and a scene where the real subject remains unstated.",
};

export default function Week11Page() {
  return <WeekShell week={week11Data} prevHref="/diy-mfa/year-one/week-10" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
