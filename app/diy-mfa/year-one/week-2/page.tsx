import type { WeekData } from "@/lib/mfa/types";
import WeekShell from "@/components/mfa/WeekShell";

const week2: WeekData = {
  weekNumber: 2,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Sustainable Practice",
  emphasizedWord: "Sustainable Practice",
  deck: "Coming soon. Week 2 will build on Week 1 with sustainable scheduling and momentum strategies.",
  meta: [
    { label: "Status", value: "Coming Soon" },
    { label: "Craft Focus", value: "Consistency" },
    { label: "Grammar", value: "Preview" },
    { label: "Exercise", value: "TBD" },
  ],
  sections: [{ id: "coming-soon", label: "Week 2", title: "Coming Soon", blocks: [{ type: "paragraph", content: ["Week 2 content is in development. Return soon."] }] }],
};

export default function Week2Page() {
  return <WeekShell week={week2} nextHref="/diy-mfa/year-one/week-2" nextLabel="Week 2" />;
}
