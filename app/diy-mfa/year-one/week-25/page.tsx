import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week25Data } from "@/lib/mfa/year-one/week-25";

export const metadata: Metadata = {
  title: "Week 25 — Plot & Structure II — Freytag's Pyramid & Its Discontents | MFA Year One",
  description:
    "Week 25 explores Freytag's Pyramid, modern structural alternatives, one-sentence paragraphs, and a reverse-engineering structural exercise.",
};

export default function Week25Page() {
  return (
    <WeekShell
      week={week25Data}
      prevHref="/diy-mfa/year-one/week-24"
      nextHref="/diy-mfa/year-one/week-26"
      nextLabel="Week 26: Plot & Structure III"
    />
  );
}
