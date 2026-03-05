import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week23Data } from "@/lib/mfa/year-two/week-23";

export const metadata: Metadata = {
  title: "Week 23 — Character Arc and Transformation | MFA Year Two",
  description:
    "Year Two Week 23 focuses on character transformation evidence, failed transformation, and projection of the thesis final scene.",
};

export default function YearTwoWeek23Page() {
  return (
    <WeekShell
      week={week23Data}
      prevHref="/diy-mfa/year-two/week-22"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
