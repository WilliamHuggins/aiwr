import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week18Data } from "@/lib/mfa/year-one/week-18";

export const metadata: Metadata = {
  title: "Week 18 — The Thesis Opening & Phase 1 Synthesis | MFA Year One",
  description:
    "Week 18 concludes the fall semester with a thesis opening draft (1,000–1,500 words) and a full Phase 1 grammar synthesis across sentence structures.",
};

export default function Week18Page() {
  return <WeekShell week={week18Data} prevHref="/diy-mfa/year-one/week-17" nextHref="/diy-mfa" nextLabel="Fall Semester Complete" />;
}
