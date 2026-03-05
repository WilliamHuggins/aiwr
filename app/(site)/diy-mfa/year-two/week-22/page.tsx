import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week22Data } from "@/lib/mfa/year-two/week-22";

export const metadata: Metadata = {
  title: "Week 22 — Narrative Time Control | MFA Year Two",
  description:
    "Year Two Week 22 develops scene-summary-leap pacing and temporal sequencing strategies for thesis drafting.",
};

export default function YearTwoWeek22Page() {
  return (
    <WeekShell
      week={week22Data}
      prevHref="/diy-mfa/year-two/week-21"
      nextHref="/diy-mfa/year-two/week-23"
      nextLabel="Week 23: Character Arc and Transformation"
      yearLabel="Year Two"
    />
  );
}
