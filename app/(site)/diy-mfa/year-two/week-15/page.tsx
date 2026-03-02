import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week15Data } from "@/lib/mfa/year-two/week-15";

export const metadata: Metadata = {
  title:
    "Week 15 — Cross-Genre Synthesis: The Ethics of Representation Across All Three Forms | MFA Year Two",
  description:
    "Year Two Week 15 focuses on cross-genre ethics of representation and parataxis/hypotaxis.",
};

export default function YearTwoWeek15Page() {
  return (
    <WeekShell
      week={week15Data}
      prevHref="/diy-mfa/year-two/week-14"
      nextHref="/diy-mfa/year-two/week-16"
      nextLabel="Continue to Week 16"
      yearLabel="Year Two"
    />
  );
}
