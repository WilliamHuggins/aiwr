import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week21Data } from "@/lib/mfa/year-two/week-21";

export const metadata: Metadata = {
  title: "Week 21 — The Lyric Essay | MFA Year Two",
  description:
    "Year Two Week 21 develops associative structure, motif recurrence, and lyric coherence strategies for thesis drafting.",
};

export default function YearTwoWeek21Page() {
  return (
    <WeekShell
      week={week21Data}
      prevHref="/diy-mfa/year-two/week-20"
      nextHref="/diy-mfa/year-two/week-22"
      nextLabel="Week 22: Narrative Time Control"
      yearLabel="Year Two"
    />
  );
}
