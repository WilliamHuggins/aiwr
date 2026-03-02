import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week12Data } from "@/lib/mfa/year-one/week-12";

export const metadata: Metadata = {
  title: "Week 12 — Dialogue II: Voice & Dialect | MFA Year One",
  description:
    "Week 12 focuses on voice differentiation, ethical dialect rendering, complex sentences, and a two-part dialogue exercise.",
};

export default function Week12Page() {
  return <WeekShell week={week12Data} prevHref="/diy-mfa/year-one/week-11" nextHref="/diy-mfa/year-one/week-13" />;
}
