import type { WeekData } from "@/lib/mfa/types";

export const week20Data: WeekData = {
  weekNumber: 20,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Experimental & Hybrid Forms — When Conventional Structure Fails the Material",
  emphasizedWord: "Form as Discovery",
  deck: "Week 20 asks a practical thesis question: what should you do when the material refuses the form you originally planned? This week introduces experimental and hybrid forms as diagnostic tools rather than stylistic tricks, then applies them directly to your thesis draft.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "56 of 108" },
    { label: "Craft Focus", value: "Experimental & Hybrid Forms" },
    { label: "Grammar", value: "Phase 5 · Colon / Dash / Fragment Control" },
    { label: "AI Exercise", value: "#22 · Genre Translation" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "When the Work Outgrows the Container",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Most thesis projects begin in a familiar container: linear literary fiction, chronological memoir, traditional essay sequence, stage-bound dramatic structure. That is useful in early drafting because known forms reduce decision load. But by spring semester, many projects encounter a break point: the chosen structure can no longer hold the material's pressure. The symptom is not just difficulty writing; it is repeated structural failure in the same places.",
          ],
        },
        {
          type: "pullquote",
          quote: "Form is not a costume you put on the draft. Form is the architecture that makes the material legible.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Signs You Need a Hybrid Move",
          paragraphs: [
            "Repetition without escalation: the draft keeps revisiting the same emotional or narrative beat, but each return adds little pressure. This often means the current form cannot create meaningful progression.",
            "Exposition overload: scenes are repeatedly interrupted by explanation because key context cannot be carried naturally by the existing structure. This signals a need to redistribute information through alternate forms (fragments, documents, braided sections, white-space sequencing).",
            "Voice mismatch: your strongest pages are being cut because they feel 'off-format,' yet those pages carry the manuscript's highest energy. When this happens consistently, the draft may be asking for a larger formal frame than the original plan allowed.",
          ],
        },
      ],
    },
    {
      id: "reading",
      label: "Reading",
      title: "Models of Structural Risk",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Bluets",
              href: "https://www.graywolfpress.org/books/bluets",
              author: "Maggie Nelson",
              note: "Study modular numbering and lyric argument as structure.",
              badge: "Purchase / Library",
            },
            {
              number: "02",
              title: "Citizen: An American Lyric",
              href: "https://www.graywolfpress.org/books/citizen",
              author: "Claudia Rankine",
              note: "Observe movement between lyric, essay, image, and document register.",
              badge: "Purchase / Library",
            },
            {
              number: "03",
              title: "The White Book",
              href: "https://www.penguinrandomhouse.com/books/564500/the-white-book-by-han-kang/",
              author: "Han Kang",
              note: "Read for fragment sequence and thematic recurrence as coherence.",
              badge: "Purchase / Library",
            },
          ],
        },
      ],
    },
    {
      id: "ai",
      label: "AI Exercise 22",
      title: "Genre Translation (Diagnostic, Not Generative)",
      blocks: [
        {
          type: "ai",
          tool: "ChatGPT / Claude",
          intro: "Use AI to test formal possibilities by translating one thesis passage into alternate containers.",
          prompt:
            "Take the passage below and produce two rewrites: (1) as a segmented lyric essay with numbered fragments and (2) as a scene-forward narrative with no exposition paragraphs. Keep core facts unchanged. After each rewrite, provide a short structural diagnosis: what each form reveals and what each form suppresses.",
          questions: [
            "Which version increases pressure and progression?",
            "Which version preserves your original voice most effectively?",
            "What specific formal move can be imported back into your thesis this week?",
          ],
          note: "Do not paste AI output into your manuscript verbatim. Extract structural insight, then re-draft in your own language.",
        },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You Should Leave Week 20 With",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By week's end, you should have produced one full thesis session (1,500–3,000 words), completed one genre-translation diagnostic on a difficult passage, identified at least one formal adjustment to test over the next two sessions, and written a log note explaining why that adjustment serves your material better than your original structure.",
          ],
        },
      ],
    },
  ],
};
