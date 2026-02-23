import type { WeekData } from "@/lib/mfa/types";

export const week17Data: WeekData = {
  weekNumber: 17,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Interiority — Free Indirect Discourse & Psychic Distance",
  emphasizedWord: "Interiority",
  deck: "This week introduces fiction's unique superpower: interiority. You'll learn to control how close the narration sits to a character's consciousness using free indirect discourse and Gardner's psychic distance scale.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Interiority" },
    { label: "Technique", value: "Free Indirect Discourse" },
    { label: "Exercise", value: "900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Sentence as Camera Distance",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Fiction is distinguished by a strange, precise power: it can move the reader into the felt interior of another mind while still maintaining narrative control. This movement is not accidental; it is engineered sentence by sentence.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Free indirect discourse allows the narrator's grammar to carry the character's perception, while psychic distance gives you a scale for adjusting intimacy. Learn to shift those two levers deliberately and you can modulate emotional force without melodrama.",
          ],
        },
      ],
    },
  ],
};
