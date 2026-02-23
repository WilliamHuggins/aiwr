import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week10Data } from "@/lib/mfa/year-one/week-10";

export const metadata: Metadata = {
  title: "Week 10 — Desire, Need & the Gap Between Them | MFA Year One",
  description:
    "Week 10 explores the want/need gap, coordination and subordination, and a scene where both character layers are visible.",
};

export default function Week10Page() {
  return <WeekShell week={week10Data} prevHref="/diy-mfa/year-one/week-9" nextHref="/diy-mfa" nextLabel="Back to DIY MFA Home" />;
}
