import type { WeekData } from "@/lib/mfa/types";

export const week7Data: WeekData = {
  weekNumber: 7,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Scene Architecture — Pressure, Movement, and Consequence",
  emphasizedWord: "Pressure, Movement, and Consequence",
  deck: "Strong scenes are built, not found. This week focuses on scene architecture: where pressure enters, how movement is created on the page, and how consequence reshapes what follows. The objective is to draft scenes that do real structural work for your thesis rather than serving as atmospheric filler.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "43 of 108" },
    { label: "Craft Focus", value: "Scene Architecture" },
    { label: "Grammar", value: "Phase 3 · Clause Rhythm and Pacing" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What Makes a Scene Earn Its Place",
      blocks: [
        {
          type: "paragraph",
          content: [
            "A scene earns its place in a manuscript when something changes: a decision is made, a relationship shifts, new information alters stakes, or a character's self-understanding is destabilized. Beautiful language without movement can produce mood, but it cannot produce narrative momentum.",
          ],
        },
        {
          type: "card",
          title: "Three Structural Tests for Every Scene",
          paragraphs: [
            "Pressure: what force is acting on the character in this scene? Pressure can come from time, conflict, desire, fear, social constraint, or contradiction.",
            "Movement: what specifically changes between the first line and the last line of the scene? If nothing changes, you likely have setup rather than scene.",
            "Consequence: what becomes newly possible or newly impossible because this scene exists? Consequence is the bridge from one scene to the next.",
          ],
        },
        {
          type: "pullquote",
          quote: "A scene is not a container for information. It is a machine for change.",
          cite: "— workshop principle",
        },
      ],
    },
    {
      id: "reading",
      label: "Reading",
      title: "Study Scene Pressure in Action",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "A Temporary Matter",
              href: "https://www.newyorker.com/magazine/1998/03/16/a-temporary-matter",
              author: "Jhumpa Lahiri",
              note: "Observe how silence and routine become pressure sources that force revelation.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Sonny's Blues",
              href: "https://www.newyorker.com/magazine/1957/09/14/sonnys-blues",
              author: "James Baldwin",
              note: "Track how each scene repositions the narrator's understanding of his brother.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Bird by Bird",
              href: "https://bookshop.org/p/books/bird-by-bird-some-instructions-on-writing-and-life-anne-lamott/6627744",
              author: "Anne Lamott",
              note: "Read the sections on short assignments and character to support scene-level drafting.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },
    {
      id: "practice",
      label: "Thesis Workshop",
      title: "Draft Two Consequential Scenes",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Draft two new scenes for your thesis project. For each scene, write a one-sentence statement of pressure before drafting.",
            "After drafting, annotate the final paragraph with what changed and what consequence now exists for the next scene.",
            "If a scene does not clearly pass all three structural tests, revise by tightening objective, conflict, or decision point.",
          ],
          target: "Produce 1,500–2,000 words of scene-based material and a 150-word reflection on structural movement.",
        },
        {
          type: "journal",
          title: "Reflection Prompt",
          question: "Where in your current thesis draft are you summarizing change rather than staging it as scene?",
        },
      ],
    },
  ],
};
