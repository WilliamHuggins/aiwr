import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week30Data } from "@/lib/mfa/year-two/week-30";

export const metadata: Metadata = {
  title: "Week 30 — The Ethics of Nonfiction — Truth, Memory, and the Limits of Reconstruction | MFA Year Two",
  description:
    "Year Two Week 30 examines nonfiction ethics through truth contracts, memory limitations, disclosure practices, and an ethics position paper.",
};

export default function YearTwoWeek30Page() {
  return (
    <WeekShell
      week={week30Data}
      prevHref="/diy-mfa/year-two/week-29"
      nextHref="/diy-mfa"
      nextLabel="Return to Program Overview"
      yearLabel="Year Two"
    />
  );
}
