import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week19Data } from "@/lib/mfa/year-one/week-19";

export const metadata: Metadata = {
  title: "Week 19 — Point of View I: First Person | MFA Year One",
  description:
    "Week 19 opens the spring semester with first-person POV craft, cumulative sentence pattern work, and a dual-version scene exercise in immediate and retrospective narration.",
};

export default function Week19Page() {
  return <WeekShell week={week19Data} prevHref="/diy-mfa/year-one/week-18" nextHref="/diy-mfa/year-one/week-20" nextLabel="Week 20: Point of View II — Third-Person Limited" />;
}
