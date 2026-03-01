import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week13Data } from "@/lib/mfa/year-two/week-13";

export const metadata: Metadata = {
  title: "Week 13 — Writing the Other: Ethics, Craft & the Limits of Imagination | MFA Year Two",
  description:
    "Year Two Week 13 focuses on cross-cultural imaginative inhabitation, representation ethics, and polysyndeton.",
};

export default function YearTwoWeek13Page() {
  return (
    <WeekShell
      week={week13Data}
      prevHref="/diy-mfa/year-two/week-12"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
