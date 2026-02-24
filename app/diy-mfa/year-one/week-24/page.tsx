import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week24Data } from "@/lib/mfa/year-one/week-24";

export const metadata: Metadata = {
  title: "Week 24 — Plot & Structure I — Conflict, Crisis & Resolution | MFA Year One",
  description:
    "Week 24 introduces conflict as narrative engine, crisis design, resolution as transformed question, and a conflict-arc opening scene exercise.",
};

export default function Week24Page() {
  return (
    <WeekShell
      week={week24Data}
      prevHref="/diy-mfa/year-one/week-23"
      nextHref="/diy-mfa/year-one/week-25"
      nextLabel="Week 25: Plot & Structure II"
    />
  );
}
