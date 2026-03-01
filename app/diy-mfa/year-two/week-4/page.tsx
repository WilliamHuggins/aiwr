import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week4Data } from "@/lib/mfa/year-two/week-4";

export const metadata: Metadata = {
  title: "Week 4 — Advanced Structure II: Braided Narrative & the Logic of Juxtaposition | MFA Year Two",
  description:
    "Year Two Week 4 covers braided structure, seam logic, noun phrase appositive series, and thesis session 4 drafting goals.",
};

export default function YearTwoWeek4Page() {
  return (
    <WeekShell
      week={week4Data}
      prevHref="/diy-mfa/year-two/week-2"
      nextHref="/diy-mfa/year-two/week-5"
      nextLabel="Week 5: Time Manipulation — Flashback, Flash-Forward & Compression"
      yearLabel="Year Two"
    />
  );
}
