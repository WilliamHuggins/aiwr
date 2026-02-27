import type { WeekData } from "@/lib/mfa/types";

export const week33Data: WeekData = {
  weekNumber: 33,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "The Short Story & Its Special Laws — A Different Species",
  emphasizedWord: "A Different Species",
  deck: "The short story is not a reduced novel. It obeys distinct formal laws: implication, compression, dominant effect, set-up/payoff precision, and endings that recontextualize what came before.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Short Story Form" },
    { label: "Grammar", value: "Parataxis vs. Hypotaxis" },
    { label: "Exercise", value: "800 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Five Laws of Short Fiction",
      blocks: [
        {
          type: "card",
          title: "What Makes a Short Story a Short Story",
          paragraphs: [
            "Implication over statement: the story's deepest claims are inferred by the reader rather than declared by the narrator.",
            "Compression at every level: scene count, character count, object count, and sentence-level movement all serve a concentrated design.",
            "Single dominant effect: following Poe's formulation, the piece should land with one governing emotional and intellectual pressure.",
            "Chekhovian gun-and-shot: what is placed acquires obligation. Every introduced element should either transform, return, or resonate by the end.",
            "Ending as recontextualization: the final movement should alter how we understand the opening, creating inevitability and surprise simultaneously.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "A successful short story does not feel unfinished because it is brief. It feels complete because it is exact. The scale is smaller, but the architecture is tighter. Revision is mostly subtraction until only load-bearing language remains.",
          ],
        },
      ],
    },
    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Dominant Effect Beyond Prose",
      blocks: [
        {
          type: "genreGrid",
          items: [
            { badge: "Literary Fiction", variant: "lf", text: "Munro and Saunders show how implication can carry social scale inside compressed form." },
            { badge: "Screenwriting & Playwriting", variant: "sp", text: "Short-form scripts rely on setup/payoff economy and one dominant tonal-emotional effect." },
            { badge: "Creative Nonfiction & Memoir", variant: "cnf", text: "Flash memoir uses selective omission to create contour: what is withheld becomes structural meaning." },
          ],
        },
      ],
    },
    {
      id: "grammar",
      label: "Grammar Studio",
      title: "Parataxis vs. Hypotaxis",
      blocks: [
        {
          type: "grammar",
          title: "Two Fundamental Sentence Logics",
          intro: [
            "Parataxis places clauses side by side with minimal subordination. It presents before it explains.",
            "Hypotaxis uses subordination and connective logic. It explains while presenting.",
          ],
          rule: "Practice both modes intentionally. Know your default and develop fluency in its opposite.",
          examples: [
            { label: "Parataxis", text: "He opened the letter. He read the first line. He sat down." },
            { label: "Hypotaxis", text: "When he opened the letter and read the first line, he sat down because he understood what it meant." },
          ],
          outro: [
            "Parataxis creates starkness and velocity; hypotaxis creates nuance and causality. Most mature prose uses a dynamic mix.",
          ],
          exercise: "Write one 150-word passage in pure parataxis, one in pure hypotaxis, then a third 150-word passage that combines both in motivated alternation.",
        },
      ],
    },
    {
      id: "reading",
      label: "Reading List",
      title: "Short Story Models",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "1",
              title: "Writing Fiction",
              href: "https://www.amazon.com/Writing-Fiction-Guide-Narrative-Craft/dp/022661669X",
              author: "Janet Burroway",
              note: "Read the short story chapter for formal distinctions from the novel.",
              badge: "Purchase",
            },
            {
              number: "2",
              title: "The Progress of Love",
              href: "https://www.newyorker.com/magazine/1986/08/11/the-progress-of-love",
              author: "Alice Munro",
              note: "Track how memory structure and implication produce dominant effect.",
              badge: "Free Online",
            },
            {
              number: "3",
              title: "Sea Oak",
              href: "https://www.newyorker.com/magazine/1998/12/28/sea-oak",
              author: "George Saunders",
              note: "Observe tonal shifts and ending recontextualization in compressed form.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },
    {
      id: "exercise",
      label: "Primary Exercise",
      title: "Flash Story + Omission Analysis",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a complete flash story under 600 words that includes: a character, a concrete desire, a complication, a turn, and an ending that recontextualizes the beginning.",
            "Then write a 200-word analysis of what you deliberately left out and how those omissions support the story's dominant effect.",
          ],
          target: "600 words story + 200 words analysis",
        },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 33 — Dominant Effect Diagnostic",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro: "Paste your flash story and ask for structural diagnosis, not line edits.",
          prompt:
            "Read this flash story and diagnose: (1) What is the dominant effect? (2) Which sentences create that effect most strongly? (3) Where does the story over-explain instead of implying? (4) Does the ending recontextualize the beginning or merely conclude events? Give three surgical cuts that would increase compression without reducing clarity.",
          questions: [
            "Did the AI identify the same dominant effect you intended?",
            "Which suggested cuts remove redundancy without flattening voice?",
            "Where did the AI perceive over-explanation, and do you agree?",
            "What revision would most improve ending recontextualization?",
          ],
          note: "Treat AI output as an editorial mirror. Keep revisions that increase implication and pressure; reject revisions that explain away ambiguity.",
        },
      ],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Cut to the Load-Bearing",
      blocks: [
        {
          type: "tip",
          icon: "✂️",
          name: "Compression Is Selection",
          paragraphs: [
            "In short fiction, every sentence must carry at least two functions: event and tone, image and motive, action and implication. Single-function sentences are prime candidates for deletion.",
            "Revision question: if this line disappears, does the reader lose necessary orientation or only commentary? Keep orientation. Cut commentary unless it does indispensable tonal work.",
          ],
        },
      ],
    },
    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You Leave Out",
      blocks: [
        {
          type: "journal",
          title: "What You Leave Out",
          question:
            "What do you habitually over-explain in your stories: motive, backstory, emotional interpretation, or thematic takeaway? Choose one scene from recent work and list five lines you included to reassure the reader. Which one deletion would make the story more alive by requiring trust?",
        },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You've Built",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week you should have: drafted a complete flash story under 600 words; written a 200-word omission analysis; practiced parataxis and hypotaxis as contrasting sentence logics; and revised toward implication, compression, and a recontextualizing ending.",
          ],
        },
      ],
    },
  ],
};
