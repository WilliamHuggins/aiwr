import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week7Data } from "@/lib/mfa/year-two/week-7";

export const metadata: Metadata = {
  title: "Week 7 — Scene Architecture: Pressure, Movement, and Consequence | MFA Year Two",
  description:
    "Year Two Week 7 develops scene architecture through pressure, movement, consequence, and scene-level revision.",
};

export default function YearTwoWeek7Page() {
  return (
    <WeekShell
      week={week7Data}
      prevHref="/diy-mfa/year-two/week-6"
      nextHref="/diy-mfa/year-two/week-8"
      nextLabel="Continue to Week 8"
      yearLabel="Year Two"
    />
  );
}
