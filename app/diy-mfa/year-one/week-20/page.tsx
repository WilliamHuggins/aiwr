import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week20Data } from "@/lib/mfa/year-one/week-20";

export const metadata: Metadata = {
  title: "Week 20 — Point of View II: Third-Person Limited | MFA Year One",
  description:
    "Week 20 develops third-person limited POV technique, periodic sentence practice, and a three-distance comparative rewrite exercise.",
};

export default function Week20Page() {
  return <WeekShell week={week20Data} prevHref="/diy-mfa/year-one/week-19" nextHref="/diy-mfa" nextLabel="Week 21: Coming Soon" />;
}
