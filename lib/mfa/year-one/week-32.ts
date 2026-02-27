import type { WeekData } from "@/lib/mfa/types";

export const week32Data: WeekData = {
  weekNumber: 32,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Pacing & Rhythm — Controlling the Reader's Experience of Time",
  emphasizedWord: "Controlling the Reader's Experience of Time",
  deck: "Pacing is not speed. It is temporal design: when to dilate, when to compress, when to cut, when to linger, and when to let repetition create pressure. This week focuses on the tools that let you control narrative time with intention.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Pacing & Rhythm" },
    { label: "Grammar", value: "Anaphora & Epistrophe" },
    { label: "Exercise", value: "900+ words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Narrative Time as a Craft Decision",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Pacing is the writer's control over how long experience lasts for the reader. A single second can be expanded across two pages if the prose dilates through sensory detail, thought, and attention; a decade can pass in one sentence through summary. This is not a binary between 'fast' and 'slow.' It is design. Every section of a story implies an answer to the same question: how much time does this moment deserve?",
          ],
        },
        {
          type: "card",
          title: "Five Pacing Tools",
          paragraphs: [
            "Scene versus summary: scene presents lived time with immediate detail; summary compresses duration into report. The strongest drafts alternate them with intention rather than defaulting to one mode.",
            "Sentence-length variation: long syntactic units can dilate perception; short sentences accelerate movement and intensify impact by compression.",
            "White space and section breaks: paragraphing and breaks create temporal jumps and silence. White space is not absence; it is implied elapsed time.",
            "Dilation: the most powerful pacing move. Slow down at the emotional hinge — the second before impact, the gesture that changes a relationship, the instant of recognition.",
            "Digression and subnarrative: strategic departure can increase, not decrease, momentum if the side path returns with pressure and relevance.",
          ],
        },
        {
          type: "pullquote",
          quote: "When everything is narrated at the same temporal scale, nothing feels important.",
          cite: "— pacing principle",
        },
      ],
    },
    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Compression and Expansion Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            { badge: "Literary Fiction", variant: "lf", text: "Carver and Hemingway model compression: what is omitted controls velocity as much as what is said." },
            { badge: "Screenwriting & Playwriting", variant: "sp", text: "Scene length, beat timing, and cuts perform pacing visibly; page space maps runtime pressure." },
            { badge: "Creative Nonfiction & Memoir", variant: "cnf", text: "Memoir can jump years in a clause and then slow one memory to near-stillness for emotional precision." },
          ],
        },
      ],
    },
    {
      id: "grammar",
      label: "Grammar Studio",
      title: "Anaphora & Epistrophe",
      blocks: [
        {
          type: "grammar",
          title: "Deliberate Repetition at the Clause Edge",
          intro: [
            "Anaphora repeats a word or phrase at the beginning of successive clauses; epistrophe repeats at the end.",
            "Both devices create rhythm, coherence, and emphasis. Used sparingly, they can dilate time at the sentence level and produce rhetorical force.",
          ],
          rule: "Use one controlled anaphoric or epistrophic series per piece. Repetition should intensify meaning, not decorate it.",
          examples: [
            { label: "Anaphora", text: "We waited for the bus, we waited for the call, we waited for the apology that never arrived." },
            { label: "Epistrophe", text: "He wanted clarity in the kitchen, clarity in the car, clarity in the silence before sleep." },
          ],
          outro: [
            "Overuse flattens effect and can feel performative. Reserve repetition for pressure points where pacing and emphasis should converge.",
          ],
          exercise: "Write one paragraph with a three-clause anaphoric series and a second paragraph with a three-clause epistrophic series. Then cut one-third of the repeated material while preserving rhythm.",
        },
      ],
    },
    {
      id: "reading",
      label: "Reading List",
      title: "Models for Temporal Control",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "1",
              title: "Writing Fiction",
              href: "https://www.amazon.com/Writing-Fiction-Guide-Narrative-Craft/dp/022661669X",
              author: "Janet Burroway",
              note: "Read the pacing chapter with attention to scene/summary decisions.",
              badge: "Purchase",
            },
            {
              number: "2",
              title: "Cathedral",
              href: "https://www.newyorker.com/magazine/1981/01/12/cathedral",
              author: "Raymond Carver",
              note: "Track how compression and withheld exposition create momentum.",
              badge: "Free Online",
            },
            {
              number: "3",
              title: "A Clean, Well-Lighted Place",
              href: "https://biblioklept.org/2013/12/04/a-clean-well-lighted-place-ernest-hemingway/",
              author: "Ernest Hemingway",
              note: "Study minimal dialogue rhythm and temporal pressure through omission.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },
    {
      id: "exercise",
      label: "Primary Exercise",
      title: "Pacing Contrast",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a maximum-dilation passage of 200 words on a single second (for example: a glass slipping from a hand, a door opening before bad news, the first sight of someone after years).",
            "Write the same moment in one sentence only.",
            "Then write a 700-word scene that contains both versions strategically: one dilation and one compression, each placed for maximum emotional effect.",
          ],
          target: "900+ words total",
        },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 32 — Pacing Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro: "Paste your 700-word scene and ask the model to map temporal movement.",
          prompt:
            "Analyze this scene for pacing. Mark where the prose is in scene versus summary, identify the exact sentence where dilation begins, and identify where compression is strongest. Point out any stretches where temporal scale is monotonous. Then suggest two edits that would increase contrast without changing plot.",
          questions: [
            "Where did the AI locate your key dilation point, and is that where you intended the emotional hinge to be?",
            "Did the AI identify monotony in a section you thought was dynamic?",
            "Which suggested edit preserves your voice while improving temporal contrast?",
            "What did this audit reveal about your default pacing habit?",
          ],
          note: "Use AI for diagnostics, not authority. Keep edits that sharpen intentional pacing and reject edits that merely accelerate for efficiency.",
        },
      ],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Place Dilation at the Hinge",
      blocks: [
        {
          type: "tip",
          icon: "⏱️",
          name: "Slow Down Where Meaning Changes",
          paragraphs: [
            "Writers often slow down where description is easy rather than where emotion turns. Reverse that habit. Put your slowest prose at the hinge: the instant after realization, the beat before action, the sentence where a relationship changes state.",
            "If every paragraph has equal temporal weight, your reader cannot tell what matters most. Signal importance through duration.",
          ],
        },
      ],
    },
    {
      id: "journal",
      label: "Journal Prompt",
      title: "Your Default Tempo",
      blocks: [
        {
          type: "journal",
          title: "Your Default Tempo",
          question:
            "When you draft quickly, where do you naturally speed up and where do you linger? Do you compress difficult emotion and expand logistics, or the reverse? Identify one moment in recent writing where your pacing avoided the hardest beat. How would the piece change if you stayed there twice as long?",
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
            "By the end of this week you should have: practiced deliberate dilation and compression on the same material; written a 700-word scene with explicit temporal contrast; studied Carver and Hemingway for compression discipline; and used one controlled repetition device (anaphora or epistrophe) to shape rhythm without overstatement.",
          ],
        },
      ],
    },
  ],
};
