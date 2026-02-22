import type { WeekData } from "@/lib/mfa/types";

export const week1Data: WeekData = {
  weekNumber: 1,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "The Writing Process & Creative Practice",
  emphasizedWord: "Creative Practice",
  deck: "You are not yet here to write well. You are here to write consistently. This week builds the infrastructure of a serious writing life.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Writing Process" },
    { label: "Grammar", value: "The Sentence" },
    { label: "Exercise", value: "400–600 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Begin Before You Are Ready",
      blocks: [
        { type: "paragraph", content: ["There is a particular cruelty in the blank page, and it is this: the blank page does not care that you are tired, or that the paragraph you wrote yesterday now sounds hollow, or that you suspect — as every serious writer suspects, on most days — that the entire enterprise of writing is a form of elaborate self-deception. The blank page simply waits. And the question of what kind of writer you will become is, at its most fundamental level, a question of whether you learn to sit down anyway."] },
        { type: "paragraph", content: ["This is the first principle of the writing life, and it is not glamorous. It does not appear on the covers of literary journals. It is not what MFA applicants write about in their personal statements, where the prose tends to run toward revelation — the moment the narrator discovered language, the summer everything changed. The first principle is unglamorous and absolute: ",{ text: "volume precedes quality, and practice precedes inspiration.", emphasized: true }] },
        { type: "pullquote", quote: '"The first draft of anything is shit."', cite: "— Ernest Hemingway, in conversation with F. Scott Fitzgerald" },
        { type: "paragraph", content: ["Hemingway said it bluntly, but what he meant was precise: the first draft is not the failure mode of the writing process. It ",{ text: "is", emphasized: true }," the writing process. The writers who understand this — who have genuinely internalized it in their bones, not just nodded at it intellectually — are the writers who finish things. The writers who treat every first draft as a performance, as an audition, as evidence of whether they are really writers, are the writers who accumulate folders of abandoned beginnings."] },
        { type: "paragraph", content: ["Anne Lamott's concept of the \"shitty first draft\" in Bird by Bird is one of the most liberating ideas in the pedagogy of creative writing, and one of the most routinely misunderstood. It is not permission to write carelessly. It is permission to write. These are different. The shitty first draft is a private document, a thinking-on-paper, a way of finding out what you know and what you need to know. It is never shown to anyone. It is revised, cut, rebuilt, sometimes abandoned entirely. But it must exist before anything else can."] },
        { type: "paragraph", content: ["Natalie Goldberg arrives at the same truth from a different angle. In Writing Down the Bones, she describes writing practice as almost a contemplative discipline — something closer to meditation than to craft instruction. \"Keep your hand moving,\" she says. \"Don't cross out. Don't worry about spelling, punctuation, grammar.\" These instructions are not aesthetic positions. They are tactical. The inner critic — that voice that says this is derivative, this has been done better, who do you think you are — cannot operate if the hand keeps moving. Volume is the antidote to the critic. The cure for not writing well is, paradoxically, to write badly, at volume, for long enough that the critic eventually exhausts itself and the real material begins to surface."] },
        { type: "pullquote", quote: '"Writing practice is about learning to trust your own mind and body; to not second-guess yourself... just write, just keep moving the pen."', cite: "— Natalie Goldberg, Writing Down the Bones" },
        { type: "heading", content: "The Infrastructure of a Writing Life" },
        { type: "paragraph", content: ["Serious writers are not born with discipline. They build systems. They protect time. They develop rituals that, over months and years, train the nervous system to associate a particular place and hour with the act of writing. The ritual is not mysticism — it is conditioning. The brain is lazy and pattern-seeking. If you sit down at the same desk at the same hour with the same cup of coffee for long enough, the brain begins to understand that this is the time for writing, and it offers up material. The ritual is not the writing. The ritual is the threshold. You cross it, and the writing happens on the other side."] },
        { type: "paragraph", content: ["Consider the daily practices of writers who have completed substantial bodies of work. Toni Morrison wrote before dawn, before her children woke, in the narrow hours that belonged only to her. Hilary Mantel kept notecards — thousands of them — as a way of accumulating material before she knew what shape it would take. Mary Oliver walked every morning, notebook in hand, treating the natural world as her primary source material and observation as her primary discipline. John Updike wrote every morning in his study, treating fiction-writing as a job with office hours. These practices are wildly different in their specifics. They are identical in their underlying structure: ",{ text: "a protected time, a repeated ritual, a commitment that does not depend on feeling inspired.", highlight: true }] },
        { type: "paragraph", content: ["\"Inspiration is for amateurs,\" said Chuck Close, the painter. \"The rest of us just show up and get to work.\" This is not cynicism — it is professional wisdom. Inspiration arrives, reliably, when you are already working."] },
        { type: "heading", content: "What the Practice Builds" },
        { type: "paragraph", content: ["The daily writing habit builds three things simultaneously, and none of them are what beginning writers expect."] },
        { type: "paragraph", content: [{ text: "First, it builds fluency.", emphasized: true }," Fluency is the ability to generate language without excessive friction."] },
        { type: "paragraph", content: [{ text: "Second, it builds self-knowledge.", emphasized: true }," You cannot know what you are capable of until you have written enough to see patterns."] },
        { type: "paragraph", content: [{ text: "Third, it builds tolerance for uncertainty.", emphasized: true }," Writing at book length requires the capacity to work for months on a project whose quality you cannot fully assess while you are inside it."] },
        { type: "card", title: "A Note on Perfectionists", paragraphs: ["If you are a perfectionist — and many gifted writers are — the daily practice will be uncomfortable for a specific reason: you will write things that fall short of your standard for yourself.", "The perfectionist's great error is mistaking the standard of the final, published work for the standard of the first draft."] },
      ],
    },
    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "One Discipline, Three Forms",
      blocks: [
        { type: "paragraph", content: ["This week's craft focus — the establishment of a daily writing practice — applies identically across all three genre tracks. The medium differs. The discipline is the same."] },
        { type: "genreGrid", items: [
          { badge: "Literary Fiction", variant: "lf", text: "Fiction writers measure practice in pages or words. Keep a separate notebook from your draft." },
          { badge: "Screenwriting / Playwriting", variant: "sp", text: "The industry metric is pages-per-day, typically 1–3 formatted pages." },
          { badge: "Creative Nonfiction / Memoir", variant: "cnf", text: "Memoirists and CNF writers often use memory work and sensory detail before interpretation." },
        ] },
        { type: "paragraph", content: ["Notice what the screenwriter, the novelist, and the memoirist all share: a protected time, a physical writing space, a daily practice of generation without immediate evaluation."] },
      ],
    },
    {
      id: "grammar",
      label: "Grammar & Style · Topic 1 of 60",
      title: "The Sentence as the Ur-Unit of Prose",
      blocks: [{ type: "grammar", title: "Phase 1 · Sentence Foundations", intro: ["This week introduces the philosophical position that will underpin all sixty grammar and style topics in this program.", "Lutz argues that the sentence — not the story, not the scene, not the character — is where literary prose is won or lost."], rule: '"The sentence is the site where the writer\'s sensibility most fully reveals itself."\n— Gary Lutz', examples: [{ label: "Original", text: "She walked to the window and looked out at the rain." }, { label: "Lutzian revision — attending to the sentence as experience", text: "She made her way to the window and stood in the rain's gray attention." }, { label: "Alternative revision — compression and weight", text: "Rain. She went to the window." }], outro: ["Neither revision is \"correct.\" They are different experiences."], exercise: "Exercise: Write three sentences describing the same moment. Make each one structurally different. Read them aloud. Which one sounds like you?" }],
    },
    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Texts",
      blocks: [
        { type: "paragraph", content: ["Three texts, chosen because each one addresses the same question from a different angle: what does it mean to build a writing life?"] },
        { type: "readingList", items: [
          { number: "01", title: "Bird by Bird", href: "https://www.penguinrandomhouse.com/books/97395/bird-by-bird-by-anne-lamott/", author: "Anne Lamott", note: "Read the chapter \"Shitty First Drafts.\"", badge: "Purchase" },
          { number: "02", title: "Writing Down the Bones", href: "https://nataliegoldberg.com/books/writing-down-the-bones/", author: "Natalie Goldberg", note: "Read Part One, especially \"Writing as Practice\" and \"First Thoughts.\"", badge: "Purchase" },
          { number: "03", title: "The Sentence Is a Lonely Place", href: "https://www.scribd.com/doc/221932447/Gary-Lutz-The-Sentence-is-a-Lonely-Place", author: "Gary Lutz", note: "Read it twice: once for comprehension, once for one sentence that models its argument.", badge: "Free Online" },
        ] },
      ],
    },
    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Baseline Draft",
      blocks: [
        { type: "paragraph", content: ["This week's exercise is simple and important."] },
        { type: "exercise", paragraphs: ["Set a timer for 20 minutes.", "Write about the room you are sitting in right now, in as much specific detail as you can manage.", "This is a freewrite. There is no audience. There is no grade."], target: "Target: 400–600 words · No editing · No re-reading until finished" },
        { type: "paragraph", content: ["When the timer sounds, stop. Do not immediately revise. Do not immediately judge."] },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop · Exercise #1",
      title: "Your First Reader",
      blocks: [
        { type: "paragraph", content: ["This program integrates AI tools not as replacements for craft but as extensions of it."] },
        { type: "ai", tool: "Tool: Claude or ChatGPT", intro: "Paste your 20-minute freewrite into the AI. Then submit the following prompt, verbatim:", prompt: "\"Read this as a sympathetic first reader. What one sentence is the most alive? What one sentence feels most like me trying to sound like a writer rather than just writing? Don't fix anything — just identify.\"", questions: ["Do you agree with what it identified as the most alive sentence?", "Does the sentence \"trying to sound like a writer\" feel accurate?"], note: "Note: The AI's identifications are hypotheses, not verdicts." },
      ],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Read It Aloud",
      blocks: [{ type: "tip", icon: "◎", name: "Habit #1 — Non-Negotiable", paragraphs: ["Every piece of writing you produce this year should be read aloud at least once before you consider it complete.", "Your ear catches what your eye misses.", "Read your 20-minute freewrite aloud before submitting it to the AI workshop."] }],
    },
    {
      id: "journal",
      label: "Journal Prompt · Private & Ungraded",
      title: "The Conditions of Your Writing Life",
      blocks: [
        { type: "journal", title: "This Week's Question", question: "When in your life have you felt most like a writer — not because of what you produced, but because of how you were being? What were the conditions? How do you recreate them?" },
        { type: "paragraph", content: ["Journal prompts are private and ungraded."] },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You've Begun",
      blocks: [
        { type: "divider" },
        { type: "paragraph", content: ["By the end of this week, you should have: completed a 20-minute freewrite; read all three core texts; done the sentence exercise; used the AI workshop; and responded to the journal prompt."] },
        { type: "paragraph", content: ["Week 1 is about infrastructure, not production."] },
        { type: "card", title: "Looking Ahead to Week 2", paragraphs: ["Week 2 continues the theme of creative practice by examining the specific rhythms of working writers."] },
        { type: "paragraph", className: "italic text-muted", content: ["A final word: the writers who succeed in this program are not, in our experience, the most talented writers who enroll. They are the writers who show up most consistently."] },
      ],
    },
  ],
};
