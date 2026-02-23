import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week16Data } from "@/lib/mfa/year-one/week-16";

export const metadata: Metadata = {
  title: "Week 16 — Sustaining a Practice: The Middle Distance | MFA Year One",
  description:
    "Week 16 focuses on sustaining creative practice through the middle stretch, introducing cumulative sentences and strategies for diagnosing blocks.",
};

export default function Week16Page() {
  return <WeekShell week={week16Data} prevHref="/diy-mfa/year-one/week-15" nextHref="/diy-mfa/year-one/week-17" nextLabel="Continue to Week 17" />;
}
