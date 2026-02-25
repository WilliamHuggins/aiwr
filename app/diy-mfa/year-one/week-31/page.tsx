import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week31Data } from "@/lib/mfa/year-one/week-31";

export const metadata: Metadata = {
  title: "Week 31 — Symbol & the Objective Correlative — When Objects Carry Meaning | MFA Year One",
  description:
    "Week 31 develops symbolic accumulation through the objective correlative, with a focus on three-return structure and parallelism.",
};

export default function Week31Page() {
  return (
    <WeekShell
      week={week31Data}
      prevHref="/diy-mfa/year-one/week-30"
      nextHref="/diy-mfa"
      nextLabel="Week 32: Coming Soon"
    />
  );
}
