import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week33Data } from "@/lib/mfa/year-one/week-33";

export const metadata: Metadata = {
  title: "Week 33 — The Short Story & Its Special Laws — A Different Species | MFA Year One",
  description:
    "Week 33 focuses on short-story compression, dominant effect, implication, and syntactic control through parataxis and hypotaxis.",
};

export default function Week33Page() {
  return (
    <WeekShell
      week={week33Data}
      prevHref="/diy-mfa/year-one/week-32"
      nextHref="/diy-mfa/year-one/week-34"
      nextLabel="Continue to Week 34"
    />
  );
}
