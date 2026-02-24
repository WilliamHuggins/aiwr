import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week21Data } from "@/lib/mfa/year-one/week-21";

export const metadata: Metadata = {
  title: "Week 21 — Point of View III: Second Person, Omniscient & the Unconventional | MFA Year One",
  description:
    "Week 21 completes the POV sequence with second person and omniscient craft, balanced sentence technique, and a three-mode scene exercise.",
};

export default function Week21Page() {
  return <WeekShell week={week21Data} prevHref="/diy-mfa/year-one/week-20" nextHref="/diy-mfa" nextLabel="Week 22: Coming Soon" />;
}
