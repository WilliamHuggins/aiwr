import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week16Data } from "@/lib/mfa/year-two/week-16";

export const metadata: Metadata = {
  title: "Week 16 — Professional Development I: The Publishing Landscape | MFA Year Two",
  description:
    "Year Two Week 16 focuses on the publishing landscape, comparable titles, and chiasmus.",
};

export default function YearTwoWeek16Page() {
  return (
    <WeekShell
      week={week16Data}
      prevHref="/diy-mfa/year-two/week-15"
      nextHref="/diy-mfa/year-two/week-17"
      nextLabel="Continue to Week 17"
      yearLabel="Year Two"
    />
  );
}
