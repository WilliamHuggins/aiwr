import type { Metadata } from "next";
import WeekShell from "@/components/mfa/WeekShell";
import { week28Data } from "@/lib/mfa/year-one/week-28";

export const metadata: Metadata = {
  title: 'Week 28 — Voice in CNF — The "I" on the Page & the Ethics of Self-Representation | MFA Year One',
  description:
    'Week 28 explores the narrator/memoirist distinction, ethical self-representation in CNF, and the extended cumulative sentence.',
};

export default function Week28Page() {
  return (
    <WeekShell
      week={week28Data}
      prevHref="/diy-mfa/year-one/week-27"
      nextHref="/diy-mfa"
      nextLabel="Week 29: Coming Soon"
    />
  );
}
