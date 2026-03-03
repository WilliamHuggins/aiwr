import type { WeekData } from "@/lib/mfa/types";

export const week21Data: WeekData = {
  weekNumber: 21,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "The Lyric Essay — Associative Structure and Controlled Leap",
  emphasizedWord: "Association with Intent",
  deck: "Week 21 introduces lyric-essay thinking as a practical method for thesis writers whose material moves by image, pressure, and recurrence rather than scene-by-scene causality. The goal is not to abandon coherence, but to build a different kind of coherence: pattern, return, and charged juxtaposition.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "57 of 108" },
    { label: "Craft Focus", value: "Lyric Essay & Associative Design" },
    { label: "Grammar", value: "Phase 5 · Apposition and Compression" },
    { label: "AI Exercise", value: "#23 · Leap Coherence Audit" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "How to Make a Leap Feel Inevitable",
      blocks: [
        {
          type: "paragraph",
          content: [
            "In long-form projects, a linear scene chain sometimes produces false clarity: the draft explains more and feels less. Lyric structure offers an alternative when the material's real logic is associative — one image calling another, one pressure echoing through different moments, one question resurfacing with altered stakes.",
            "But association is not randomness. A successful lyric sequence is engineered. It repeats key motifs with variation, controls distance and sentence pressure, and places white space where the reader can perform meaning-making rather than being told what to conclude.",
          ],
        },
        {
          type: "pullquote",
          quote: "A leap is trustworthy when the reader can feel the hidden bridge.",
          cite: "— thesis drafting principle",
        },
        {
          type: "card",
          title: "Three Controls for Associative Writing",
          paragraphs: [
            "Motif recurrence: choose two or three recurring images, phrases, or conceptual questions and return to them deliberately across sections.",
            "Sentence-pressure modulation: pair dense, image-rich passages with cleaner orienting lines so the reader can re-anchor between leaps.",
            "Section-end torque: end each fragment with a pressure point (question, turn, or contradiction) that creates momentum into the next fragment.",
          ],
        },
      ],
    },
    {
      id: "reading",
      label: "Reading",
      title: "Lyric and Hybrid Models",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "The Empathy Exams",
              href: "https://www.graywolfpress.org/books/the-empathy-exams",
              author: "Leslie Jamison",
              note: "Read one essay for hinge moves between scene, reflection, and argument.",
              badge: "Purchase / Library",
            },
            {
              number: "02",
              title: "Don’t Let Me Be Lonely",
              href: "https://www.graywolfpress.org/books/dont-let-me-be-lonely",
              author: "Claudia Rankine",
              note: "Study montage logic and tonal control across documentary and lyric registers.",
              badge: "Purchase / Library",
            },
            {
              number: "03",
              title: "The Lyric Essay",
              href: "https://senecareview.org/archives/1193",
              author: "John D'Agata & Deborah Tall",
              note: "Use as a craft frame for defining associative coherence in your own thesis pages.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },
    {
      id: "ai",
      label: "AI Exercise 23",
      title: "Leap Coherence Audit",
      blocks: [
        {
          type: "ai",
          tool: "ChatGPT / Claude",
          intro: "Use AI as a diagnostic reader to locate where associative jumps are productively charged versus merely confusing.",
          prompt:
            "Read the passage below as if you are an attentive first reader. Mark each transition between paragraphs as one of three types: (A) clear causal/temporal move, (B) associative but legible leap, (C) disorienting leap. For every B or C, explain what cue made the move legible or illegible (image echo, diction shift, pronoun reference, time marker, thematic thread, etc.). Then suggest one sentence-level revision that would preserve the passage's lyric texture while increasing coherence.",
          questions: [
            "Which leaps are doing meaningful structural work, and why?",
            "Where did the reader lose orientation, and what minimal cue restores it?",
            "What recurring motif can you amplify this week to unify the sequence?",
          ],
          note: "Keep revisions minimal and strategic. The aim is not to linearize the passage, but to sharpen its hidden architecture.",
        },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You Should Leave Week 21 With",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By week's end, you should have drafted 1,500–3,000 words of thesis material, revised at least one difficult section using motif recurrence and orienting cues, completed one AI coherence audit on a lyric or hybrid passage, and recorded in your session log which associative move you will carry forward into Weeks 22–23.",
          ],
        },
      ],
    },
  ],
};
