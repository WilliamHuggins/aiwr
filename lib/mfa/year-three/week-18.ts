import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek18Data: WeekData = {
  weekNumber: 18,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Fall Semester Synthesis",
  title: "Fall Semester Synthesis: The Thesis Enters Final Drafting",
  emphasizedWord: "Final Drafting",
  deck: "Week 18 closes the fall semester by naming what is complete, what still needs deep revision, and what must happen in spring for the thesis to cross the line from promising draft to defensible manuscript. This is a reckoning week, not a performance week: inventory the work honestly, define the six non-negotiable spring obligations, and enter the next semester with a contract you can actually execute.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "90 of 108" },
    { label: "Craft Focus", value: "Semester synthesis and spring production planning" },
    { label: "Grammar", value: "Phase 8, Topic 5 — Disjunction and integrated syntactic voice" },
    { label: "Deliverable", value: "Spring Contract + Revised Thesis Roadmap (1,200 words)" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Honest Inventory",
      blocks: [
        {
          type: "paragraph",
          content: [
            "By Week 18, most writers are tempted to narrate progress optimistically: to call partial solutions complete, to describe momentum as completion, to mistake having drafted the difficult section for having revised it. This week asks for the opposite. List what the semester has produced in concrete terms — pages drafted, scenes rebuilt, structure clarified, language tightened — and list what remains unresolved with equal precision. No abstractions. No aspirational language. Just the manuscript as it exists.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The purpose of this reckoning is not self-criticism; it is operational clarity. Spring semester work should be planned around unresolved craft problems, not around mood. Identify the two or three places where the manuscript's architecture still fails, the recurring sentence-level weakness, and the section most likely to collapse under defense questions. These are your spring anchors. Everything else is secondary until these are stable.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "A spring plan is credible only when it is built from what the manuscript cannot yet do.",
          cite: "— program principle",
        },
        {
          type: "card",
          title: "The Spring Semester's Six Obligations",
          paragraphs: [
            "(1) Deliver the complete thesis draft on schedule, including all required front matter and formatting compliance. (2) Execute two full revision passes: one structural pass and one language pass. (3) Prepare and rehearse the public reading set, selecting pages that represent the strongest argument for the manuscript's voice and stakes. (4) Build the defense file: rationale, craft decisions, influences, and anticipated questions. (5) Continue professionalization: at least one submission package and one opportunity application (residency, grant, or fellowship). (6) Establish the post-program writing system, including weekly production targets and accountability structures.",
            "Name each obligation in your own terms, assign dates, and attach measurable outputs. If an obligation has no date and no measurable output, it does not yet exist as a plan.",
          ],
        },
      ],
    },
    {
      id: "grammar",
      label: "Grammar Integration",
      title: "Phase 8: Disjunction and the Integrated Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Disjunction as Controlled Friction",
          intro: [
            "Disjunction places unlike syntactic or tonal elements beside each other so that tension is felt at the sentence level. Used carelessly, it reads as inconsistency. Used intentionally, it produces pressure, complexity, and a voice capable of carrying contradictory realities without flattening them.",
            "At this stage, the goal is integration: the sentence should accommodate fracture while remaining legible and purposeful.",
          ],
          rule:
            "Use disjunction where the material itself contains conflict; maintain clarity of grammatical relation even when tonal or rhythmic relations are jagged.",
          examples: [
            {
              label: "Flat",
              text: "She accepted the offer and felt uncertain about leaving.",
            },
            {
              label: "Integrated Disjunction",
              text: "She accepted the offer — smiling, thanking everyone, already packing — while a quieter mind counted every cost she could not name aloud.",
            },
          ],
          outro: [
            "The second sentence carries competing emotional tracks without sacrificing syntactic control.",
          ],
          exercise:
            "Revise 300 words from your thesis where emotional conflict is currently simplified. Introduce controlled disjunction in at least five sentences, then read aloud to verify clarity and cadence.",
        },
      ],
    },
    {
      id: "deliverable",
      label: "Key Deliverable",
      title: "Spring Contract + Reflection",
      blocks: [
        {
          type: "exercise",
          badge: "Key Deliverable",
          paragraphs: [
            "Write a 1,200-word spring contract in two parts. Part I (500–700 words): fall semester synthesis — what was accomplished, what remains, and what specific evidence supports that assessment. Part II (500–700 words): the spring execution plan, organized around the six obligations with deadlines, weekly cadence, and explicit success criteria.",
            "Close with a one-paragraph commitment statement beginning, 'By the end of Year Three, my thesis will be...,' completed in concrete rather than aspirational terms.",
          ],
          target: "1,200 words total",
        },
        {
          type: "journal",
          title: "End-of-Semester Reckoning",
          question:
            "What part of your manuscript are you most tempted to avoid in spring, and what weekly action will prevent avoidance from becoming delay?",
        },
      ],
    },
  ],
};
