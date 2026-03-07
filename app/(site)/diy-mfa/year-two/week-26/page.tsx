import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week26Data } from "@/lib/mfa/year-two/week-26";

export const metadata: Metadata = {
  title: "Week 26 — Style Studies: Master Sentence Analysis | MFA Year Two",
  description:
    "Year Two Week 26 develops master sentence analysis through close reading, sentence anthology work, and chiastic reversal study.",
};

export default function YearTwoWeek26Page() {
  return (
    <WeekShell
      week={week26Data}
      prevHref="/diy-mfa/year-two/week-25"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
