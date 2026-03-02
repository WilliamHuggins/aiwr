import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week5Data } from "@/lib/mfa/year-two/week-5";

export const metadata: Metadata = {
  title: "Week 5 — Time Manipulation: Flashback, Flash-Forward & Compression | MFA Year Two",
  description:
    "Year Two Week 5 explores flashback and flash-forward structure, time compression, and prepositional phrases as rhythmic tools.",
};

export default function YearTwoWeek5Page() {
  return (
    <WeekShell
      week={week5Data}
      prevHref="/diy-mfa/year-two/week-4"
      nextHref="/diy-mfa/year-two/week-6"
      nextLabel="Week 6: Opening Strategies — The First Page as a Contract"
      yearLabel="Year Two"
    />
  );
}
