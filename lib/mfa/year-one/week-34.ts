import type { WeekData } from "@/lib/mfa/types";

export const week34Data: WeekData = {
  weekNumber: 34,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Tone, Comedy & the Rhetoric of Laughter — Cross-Genre Synthesis",
  emphasizedWord: "Cross-Genre Synthesis",
  deck: "Comedy is structural, not frivolous: it relies on expectation, violation, and timing. This week examines deadpan, satire, absurdism, and wit, including the comic-serious register where humor and pain coexist without canceling each other.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Tone & Comedy" },
    { label: "Grammar", value: "Polysyndeton & Asyndeton" },
    { label: "Exercise", value: "600–800 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "How Comic Tone Carries Serious Material",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Comedy works by violated expectation in a safe frame. That mechanism is structurally identical to one core mechanism of serious fiction: the ending that feels both inevitable and surprising. The difference is tonal handling and social permission, not architecture.",
          ],
        },
        {
          type: "card",
          title: "Four Comic Registers",
          paragraphs: [
            "Deadpan: flat delivery against absurd or painful content; force emerges from tonal understatement (Lorrie Moore).",
            "Satire: moral and social pressure redirected through exaggeration, irony, and system-level critique (George Saunders).",
            "Absurdism: mismatch between human need for coherence and an incoherent world; comedy arrives through unresolved logic.",
            "Wit: speed and precision of language-level surprise; often brief but high-voltage in sentence craft.",
          ],
        },
        {
          type: "pullquote",
          quote: "In the comic-serious register, humor must not deny pain, and pain must not erase humor.",
          cite: "— tonal principle",
        },
      ],
    },
    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Timing Across Prose, Stage, and Screen",
      blocks: [
        {
          type: "genreGrid",
          items: [
            { badge: "Literary Fiction", variant: "lf", text: "Chekhov, Munro, Moore, and Saunders show tonal simultaneity: laughter and ache in the same beat." },
            { badge: "Screenwriting & Playwriting", variant: "sp", text: "Comedy is beat architecture: setup, delay, pivot, and release, with silence as timing tool." },
            { badge: "Creative Nonfiction & Memoir", variant: "cnf", text: "Comic memoir voice can increase credibility when it sharpens rather than softens painful material." },
          ],
        },
      ],
    },
    {
      id: "grammar",
      label: "Grammar Studio",
      title: "Polysyndeton & Asyndeton",
      blocks: [
        {
          type: "grammar",
          title: "Adding or Removing Conjunctions for Effect",
          intro: [
            "Polysyndeton adds conjunctions (and...and...and) to slow rhythm, weight each item, and create accretive pressure.",
            "Asyndeton removes conjunctions to accelerate pace, compress sequence, and create inevitability.",
          ],
          rule: "Use the shift between polysyndeton and asyndeton when emotional logic shifts from burden to momentum (or the reverse).",
          examples: [
            { label: "Polysyndeton", text: "He packed the books and the kettle and the photographs and the broken radio he could not throw away." },
            { label: "Asyndeton", text: "He shut the door, took the stairs, crossed the street, never looked back." },
          ],
          outro: [
            "Both are powerful because they alter cognitive tempo. The conjunction pattern should track the emotional state, not appear as ornament.",
          ],
          exercise: "Write two adjacent paragraphs on one event: first paragraph in polysyndeton, second in asyndeton. Make the shift clearly motivated by a change in emotional stance.",
        },
      ],
    },
    {
      id: "reading",
      label: "Reading List",
      title: "Comic Voice Models",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "1",
              title: "Annie Hall (Screenplay)",
              href: "https://www.dailyscript.com/scripts/annie_hall.html",
              author: "Woody Allen & Marshall Brickman",
              note: "Read for deadpan, interruption, and tonal pivots between humor and vulnerability.",
              badge: "Free Online",
            },
            {
              number: "2",
              title: "How to Become a Writer",
              href: "https://www.newyorker.com/magazine/1985/09/09/how-to-become-a-writer",
              author: "Lorrie Moore",
              note: "Study second-person deadpan and the comic-serious line.",
              badge: "Free Online",
            },
            {
              number: "3",
              title: "Me Talk Pretty One Day",
              href: "https://www.amazon.com/Me-Talk-Pretty-One-Day/dp/0316776963",
              author: "David Sedaris",
              note: "Observe voice consistency while handling embarrassment, pain, and social critique.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },
    {
      id: "exercise",
      label: "Primary Exercise",
      title: "Comic-Serious Scene",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a 600–800 word scene on a painful subject in an undeniably funny voice.",
            "The humor must not deny pain, and the pain must not eliminate humor.",
            "Aim for one clear tonal pivot where the scene reveals its emotional stakes without abandoning comic pressure.",
          ],
          target: "600–800 words",
        },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 34 — Tone Balance Pass",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro: "Paste your scene and ask for a tonal map, not joke suggestions.",
          prompt:
            "Analyze this scene for tonal balance. Identify where humor and pain coexist effectively, where humor deflects stakes, and where seriousness flattens comic energy. Mark one sentence that best demonstrates comic-serious simultaneity and one sentence that should be revised. Explain why.",
          questions: [
            "Where did the AI see successful simultaneity, and do you agree?",
            "Which lines did it identify as deflection rather than comic insight?",
            "Did the analysis help clarify your tonal pivot?",
            "What one revision keeps the voice funny while increasing emotional honesty?",
          ],
          note: "Avoid AI-generated punchlines. Use AI to detect tonal drift, then revise in your own idiom and timing.",
        },
      ],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Protect the Tonal Pivot",
      blocks: [
        {
          type: "tip",
          icon: "🎭",
          name: "Earn the Laugh, Earn the Hurt",
          paragraphs: [
            "The strongest comic-serious scenes have a pivot sentence where the reader realizes the joke has been carrying genuine pain all along. That pivot should feel inevitable in retrospect, not imported from another register.",
            "If readers laugh but feel nothing, increase specificity of consequence. If readers feel only heaviness, restore surprise and linguistic play at the sentence level.",
          ],
        },
      ],
    },
    {
      id: "journal",
      label: "Journal Prompt",
      title: "Your Defensive Tone",
      blocks: [
        {
          type: "journal",
          title: "Your Defensive Tone",
          question:
            "When do you use humor as a shield in your writing? Identify one recurring move—self-deprecation, irony, absurd escalation, or observational wit—that protects you from direct feeling. How might you keep that move but let one sentence remain undefended?",
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
            "By the end of this week you should have: drafted a comic-serious scene that sustains both laughter and pain; studied deadpan and satirical timing in prose and screenplay form; practiced emotionally motivated shifts between polysyndeton and asyndeton; and revised for tonal balance without sacrificing voice.",
          ],
        },
      ],
    },
  ],
};
