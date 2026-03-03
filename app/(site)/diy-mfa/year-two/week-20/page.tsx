import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week20Data } from "@/lib/mfa/year-two/week-20";

export const metadata: Metadata = {
  title: "Week 20 — Experimental & Hybrid Forms | MFA Year Two",
  description:
    "Year Two Week 20 introduces experimental and hybrid forms as a thesis drafting strategy when conventional structures fail the material.",
};

export default function YearTwoWeek20Page() {
  return (
    <WeekShell
      week={week20Data}
      prevHref="/diy-mfa/year-two/week-19"
      nextHref="/diy-mfa/year-two/week-21"
      nextLabel="Week 21: The Lyric Essay"
      yearLabel="Year Two"
    />
  );
}
