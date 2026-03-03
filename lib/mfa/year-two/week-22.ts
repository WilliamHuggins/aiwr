import type { WeekData } from "@/lib/mfa/types";

export const week22Data: WeekData = {
  weekNumber: 22,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Narrative Time Control — Managing Pace, Duration, and Sequence",
  emphasizedWord: "Temporal Precision",
  deck: "Week 22 focuses on one of the biggest thesis-level craft problems: drafts that contain strong material but lose momentum because time is handled inconsistently. This week provides a practical system for deciding where to slow down, where to summarize, and where to leap.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "58 of 108" },
    { label: "Craft Focus", value: "Narrative Time & Pacing Control" },
    { label: "Grammar", value: "Phase 5 · Temporal Syntax & Transition Precision" },
    { label: "AI Exercise", value: "#24 · Pace Map Diagnostic" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "How to Align Page Time with Story Pressure",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Many stalled manuscripts are not conceptually broken; they are temporally mis-scaled. A minor event receives six pages while a major turning point is summarized in three sentences. The result is reader disorientation about significance: the draft's pacing implies priorities the writer did not intend.",
            "Temporal control begins with deliberate contrast between scene, summary, and leap. Scene earns page-time for moments of high consequence. Summary compresses connective material. Leaps move between charged nodes without pretending every hour or day deserves equal narrative weight.",
          ],
        },
        {
          type: "pullquote",
          quote: "Pacing is not speed. Pacing is the distribution of attention.",
          cite: "— thesis drafting principle",
        },
        {
          type: "card",
          title: "Three High-Value Time Moves",
          paragraphs: [
            "Anchor before acceleration: before a major leap, place one orienting cue (date, season, life-stage marker, or project milestone) so the reader tracks changed conditions rather than guessing.",
            "Expand the hinge, compress the corridor: give full scene treatment to the decision, confrontation, or realization that changes trajectory; summarize routine transitions that only carry the reader from one hinge to the next.",
            "Sequence by pressure, not chronology alone: when using nonlinear arrangement, order sections by escalating emotional or thematic force and add subtle temporal markers to preserve legibility.",
          ],
        },
      ],
    },
    {
      id: "reading",
      label: "Reading",
      title: "Models for Time Architecture",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "The Art of Time in Fiction",
              href: "https://www.graywolfpress.org/books/art-time-fiction",
              author: "Joan Silber",
              note: "Use as a practical framework for summary, scene, and temporal distance.",
              badge: "Purchase / Library",
            },
            {
              number: "02",
              title: "A Visit from the Goon Squad",
              href: "https://www.penguinrandomhouse.com/books/313612/a-visit-from-the-goon-squad-by-jennifer-egan/",
              author: "Jennifer Egan",
              note: "Track long-range time movement and linked-chapter momentum.",
              badge: "Purchase / Library",
            },
            {
              number: "03",
              title: "The Things They Carried",
              href: "https://www.hmhbooks.com/shop/books/The-Things-They-Carried/9780618706419",
              author: "Tim O'Brien",
              note: "Study recursive chronology and repetition with variation.",
              badge: "Purchase / Library",
            },
          ],
        },
      ],
    },
    {
      id: "ai",
      label: "AI Exercise 24",
      title: "Pace Map Diagnostic",
      blocks: [
        {
          type: "ai",
          tool: "ChatGPT / Claude",
          intro: "Use AI as a pacing analyst to identify temporal imbalance across a thesis excerpt.",
          prompt:
            "Read the excerpt below and create a pace map with one row per paragraph: (1) narrative mode (scene, summary, reflection, transition), (2) implied time covered, (3) perceived narrative importance (low/medium/high), and (4) recommendation (expand, trim, reorder, or keep). Then identify the two strongest pace mismatches and propose minimal revisions that improve temporal clarity without changing voice.",
          questions: [
            "Where is page-time currently over-invested relative to story consequence?",
            "Which underwritten moment should be expanded into scene?",
            "What one temporal cue would most improve reader orientation this week?",
          ],
          note: "Use this as diagnosis only. Re-draft solutions in your own language and cadence.",
        },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You Should Leave Week 22 With",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By week's end, you should have completed at least one thesis session (1,500–3,000 words), built a pace map for a problematic section, revised one sequence using scene/summary/leap deliberately, and logged the specific temporal strategy you'll carry into Week 23.",
          ],
        },
      ],
    },
  ],
};
