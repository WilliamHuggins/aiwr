import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week36Data } from "@/lib/mfa/year-one/week-36";

export const metadata: Metadata = {
  title: "Week 36 — Year One Synthesis — Thesis Pre-Planning & the Writer You Are Becoming | MFA Year One",
  description:
    "Week 36 culminates Year One with thesis pre-planning, a grammar self-assessment, and a 1,000–1,500 word declaration-of-intent opening.",
};

export default function Week36Page() {
  return (
    <WeekShell
      week={week36Data}
      prevHref="/diy-mfa/year-one/week-35"
      nextHref="/diy-mfa/year-two/week-1"
      nextLabel="Begin Year Two, Week 1"
    />
  );
}
