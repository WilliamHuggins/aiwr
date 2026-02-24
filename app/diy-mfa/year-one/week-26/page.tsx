import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week26Data } from "@/lib/mfa/year-one/week-26";

export const metadata: Metadata = {
  title: "Week 26 — Plot & Structure III — Patterns of Power & Alternative Architectures | MFA Year One",
  description:
    "Week 26 explores alternative narrative architectures, rhythm-conscious paragraphs, and a non-chronological narrative exercise.",
};

export default function Week26Page() {
  return (
    <WeekShell
      week={week26Data}
      prevHref="/diy-mfa/year-one/week-25"
      nextHref="/diy-mfa/year-one/week-27"
      nextLabel="Week 27: Voice & Tone — The Sound of the Self on the Page"
    />
  );
}
