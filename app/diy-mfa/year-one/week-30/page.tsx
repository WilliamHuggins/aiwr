import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week30Data } from "@/lib/mfa/year-one/week-30";

export const metadata: Metadata = {
  title: "Week 30 — Comparison, Imagery & Figurative Language — The Metaphor | MFA Year One",
  description:
    "Week 30 focuses on metaphor as cognition, figurative language across forms, and participial, absolute, and appositive phrase constructions.",
};

export default function Week30Page() {
  return (
    <WeekShell
      week={week30Data}
      prevHref="/diy-mfa/year-one/week-29"
      nextHref="/diy-mfa"
      nextLabel="Week 31: Coming Soon"
    />
  );
}
