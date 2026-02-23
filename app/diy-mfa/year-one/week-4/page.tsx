import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week4Data } from "@/lib/mfa/year-one/week-4";

export const metadata: Metadata = {
  title: "Week 4 — Scene Construction & The Turn | MFA Year One",
  description: "Week 4 focuses on scene architecture, identifying the turn, and sentence growth through addition, modification, and embedding.",
};

export default function Week4Page() {
  return <WeekShell week={week4Data} prevHref="/diy-mfa/year-one/week-3" nextHref="/diy-mfa/year-one/week-5" nextLabel="Week 5: Image & Sensory Detail" />;
}
