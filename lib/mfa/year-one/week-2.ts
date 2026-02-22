import type { WeekData } from "@/lib/mfa/types";

export const week2Data: WeekData = {
  weekNumber: 2,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Image & Sensory Detail",
  emphasizedWord: "Sensory Detail",
  deck: "The image is the fundamental unit of literary art — not the idea, not the theme, but the concrete thing seen, heard, smelled, tasted, and touched.",
  meta: [
    { label: "Commitment", value: "14–16 hrs" },
    { label: "Craft Focus", value: "Image" },
    { label: "Grammar", value: "Concrete Diction" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Triggering Subject",
      blocks: [
        { type: "paragraph", content: ["Richard Hugo called the image the \"triggering subject\" — the concrete thing that unlocks a piece of writing from the inside."] },
        { type: "paragraph", content: ["Images engage the body. Vivid sensory language makes readers experience a scene rather than merely understanding it abstractly."] },
        { type: "pullquote", quote: "Not the idea, not the theme — the image: the thing seen, heard, smelled, tasted, touched.", cite: "Week 2 Craft Principle" },
        { type: "paragraph", content: ["This week, replace abstraction with specificity. Instead of naming emotions, locate the physical evidence that lets the reader feel them."] },
        {
          type: "genreGrid",
          items: [
            { badge: "Literary Fiction", variant: "lf", text: "Use literal sensory grounding first; then allow figurative language to deepen meaning." },
            { badge: "Screenwriting & Playwriting", variant: "sp", text: "Every important beat should correspond to something visible, audible, or actionable on stage/screen." },
            { badge: "Memoir & CNF", variant: "cnf", text: "Specific sensory memory is a credibility signal: it tells the reader you were present." },
          ],
        },
      ],
    },
    {
      id: "reading",
      label: "Core Reading",
      title: "Texts for Sensory Precision",
      blocks: [
        { type: "readingList", items: [
          { number: "01", title: "The Triggering Town", href: "https://wwnorton.com/books/9780393318292", author: "Richard Hugo", note: "Read the opening essay and focus on the idea of the triggering subject.", badge: "Purchase" },
          { number: "02", title: "Madame Bovary (Part I, Chapter 1)", href: "https://www.gutenberg.org/ebooks/2413", author: "Gustave Flaubert", note: "Study how character is built through physical detail before abstract interpretation.", badge: "Free Online" },
          { number: "03", title: "Place in Fiction", href: "https://www.theatlantic.com/magazine/archive/1956/06/place-in-fiction/641167/", author: "Eudora Welty", note: "Read for Welty's argument that place enables emotional permission in fiction.", badge: "Free Online" },
        ] },
      ],
    },
    {
      id: "grammar",
      label: "Grammar & Style · Topic 2 of 60",
      title: "Concrete Diction Before Interpretation",
      blocks: [{ type: "grammar", title: "Phase 1 · Specificity", intro: ["This week extends our sentence focus into diction.", "Strong prose names what can be perceived before it explains what it means."], rule: 'Concrete nouns and active verbs generate authority; abstraction should arrive later and in smaller doses.', examples: [{ label: "Abstract", text: "The room felt depressing and lonely." }, { label: "Concrete", text: "One fork sat in the sink beside a cold pan; the refrigerator hummed louder than the rain." }, { label: "Compressed", text: "Rain, hum, one fork in the sink." }], outro: ["Each version points toward mood, but only one gives the reader sensory leverage."], exercise: "Exercise: Revise five abstract sentences from your draft into concrete, sensory alternatives." }],
    },
    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Sensory Inventory Draft",
      blocks: [
        { type: "exercise", paragraphs: ["Choose a room, street, or recurring place from your life.", "Write continuously for 25 minutes.", "Include at least one detail for sight, sound, smell, touch, and temperature."], target: "Target: 700–900 words · Draft forward only" },
        { type: "paragraph", content: ["If you stall, ask: What is the most specific thing I can name right now?"] },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop · Exercise #2",
      title: "Sensory Blind Spots",
      blocks: [{ type: "ai", tool: "Tool: Claude or ChatGPT", intro: "Use AI as a first reader to detect sensory gaps, not as a ghostwriter.", prompt: "Analyze this passage for sensory coverage. Identify missing senses (especially smell and touch), then suggest up to three precise detail options that fit my tone. Do not rewrite the passage.", questions: ["Which suggested details are genuinely yours to keep?", "Which suggestions feel decorative rather than necessary?"], note: "Document any adopted detail in your process notes." }],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Favor the Nameable",
      blocks: [{ type: "tip", icon: "◎", name: "Habit #2 — Sensory Audit", paragraphs: ["Before revision, underline every abstract noun in your paragraph.", "Replace at least half with an image, object, action, or sensory cue."] }],
    },
    {
      id: "journal",
      label: "Journal Prompt · Private & Ungraded",
      title: "Embodied Memory",
      blocks: [{ type: "journal", title: "This Week's Question", question: "What place from your past does your body remember most clearly? Describe one specific moment there through physical sensation only." }],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You Built This Week",
      blocks: [
        { type: "divider" },
        { type: "paragraph", content: ["By the end of Week 2, you should have read the core texts, drafted a sensory inventory, revised abstract diction, and completed the AI sensory audit."] },
        { type: "card", title: "Looking Ahead to Week 3", paragraphs: ["Week 3 moves from image to technique: showing vs. telling, and when each mode creates the strongest narrative effect."] },
      ],
    },
  ],
};
