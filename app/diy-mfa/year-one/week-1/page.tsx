import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week1Data } from "@/lib/mfa/year-one/week-1";

export const metadata: Metadata = {
  title: "Week 1 — The Writing Process & Creative Practice | MFA Year One",
  description: "Week 1 establishes a consistent writing practice with core readings, sentence-level craft, and foundational exercises.",
};

export default function Week1Page() {
  return <WeekShell week={week1Data} />;
}
