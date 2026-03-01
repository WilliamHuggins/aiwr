import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week3Data } from "@/lib/mfa/year-two/week-3";

export const metadata: Metadata = {
  title: "Week 3 — Advanced Structure I: Nonlinear, Fragmented & Modular Narratives | MFA Year Two",
  description:
    "Week 3 studies three alternative narrative architectures — nonlinear, fragmented, and modular — through Madison Smartt Bell's structural vocabulary, Machado's In the Dream House, and the Earned Disruption exercise.",
};

export default function YearTwoWeek3Page() {
  return (
    <WeekShell
      week={week3Data}
      prevHref="/diy-mfa/year-two/week-2"
      nextHref="/diy-mfa/year-two/week-4"
      nextLabel="Week 4: Advanced Structure II — Braided Narrative & the Logic of Juxtaposition"
      yearLabel="Year Two"
    />
  );
}
