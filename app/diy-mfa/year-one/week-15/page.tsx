import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week15Data } from "@/lib/mfa/year-one/week-15";

export const metadata: Metadata = {
  title: "Week 15 — Cross-Genre Week: Space, Place & the Scene | MFA Year One",
  description:
    "Week 15 introduces cross-genre synthesis, comparing how fiction, screenplay, and memoir render physical space under different formal constraints.",
};

export default function Week15Page() {
  return <WeekShell week={week15Data} prevHref="/diy-mfa/year-one/week-14" nextHref="/diy-mfa/year-one/week-16" nextLabel="Continue to Week 16" />;
}
