import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week17Data } from "@/lib/mfa/year-one/week-17";

export const metadata: Metadata = {
  title: "Week 17 — Interiority: Free Indirect Discourse & Psychic Distance | MFA Year One",
  description:
    "Week 17 introduces fiction's unique superpower — interiority — and the two techniques that make it precise: free indirect discourse (the seamless merger of narrator and character voice) and Gardner's psychic distance scale.",
};

export default function Week17Page() {
  return (
    <WeekShell
      week={week17Data}
      prevHref="/diy-mfa/year-one/week-16"
      nextHref="/diy-mfa/year-one/week-18"
      nextLabel="Week 18: The Thesis Opening & Phase 1 Synthesis"
    />
  );
}
