import type { WeekData } from "@/lib/mfa/types";

export const week36Data: WeekData = {
  weekNumber: 36,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Year One Synthesis — Thesis Pre-Planning & the Writer You Are Becoming",
  emphasizedWord: "the Writer You Are Becoming",
  deck: "The final week of Year One. This week is not a conclusion but an orientation — toward Year Two, toward the thesis, toward the writer you are in the process of becoming. You will articulate the core question of your emerging creative project, identify the craft skills you need to develop to execute it, and write the first serious scene, chapter, or essay section of what will eventually become your thesis manuscript.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Year One Synthesis" },
    { label: "Grammar", value: "Phase 1 & 2 Self-Assessment" },
    { label: "Exercise", value: "1,000–1,500 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Declaration of Intent",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every serious book begins as a declaration of intent — not a plan, not an outline, not a proposal, but a first move toward the material that most urgently requires your attention. The declaration of intent is the opening of the work itself: the first scene, the first chapter, the first essay section, written not because you know where it is going but because you know you have to begin. The declaration is always provisional. It will be wrong in ways you cannot yet see. But it will be the thing that everything else is eventually written in relation to — the point of origin that the finished work will look back toward, even if the finished work looks nothing like the first draft of this first piece.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Year One has been a year of acquiring vocabulary: craft vocabulary, grammatical vocabulary, the vocabulary of form and structure and voice that makes it possible to think precisely about what writing is doing and how. That vocabulary is now largely in place — not fully internalized, not yet instinctive, but available. Year Two will be the year of applying it under pressure: the pressure of a sustained project, of a thesis that must be completed, of the specific craft challenges that your specific material presents. The difference between having a vocabulary and being able to use it under pressure is the difference between Year One and Year Two, and the only way to make that transition is to begin.",
          ],
        },
        {
          type: "pullquote",
          quote: "The writers who finish books are not the writers who write the best first drafts. They are the writers who keep returning.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Questions for the Thesis Pre-Plan",
          paragraphs: [
            "What is the core question? Not the subject — the question. A book about grief is a subject; 'what does a person owe the dead?' is a question. A book about a family is a subject; 'how does a child understand that their parents are also strangers?' is a question. The question is what gives the book its inquiry, its forward motion, its reason for being a book rather than a collection of observations about a subject. If you can state the question in one sentence, you have found the book's spine. If you cannot, the thesis planning this week is the place to find it.",
            "What form does the material require? Not the form you prefer, not the form you are most comfortable in, but the form that serves the specific question you are asking. The question 'what does a person owe the dead?' might require a memoir (the personal stakes make it live), or a novel (the fictional distance makes it more honest), or a lyric essay sequence (the compression and associative logic suits the fragmentation of grief). The form question and the subject question are not separate, but they need to be asked separately before they can be answered together.",
            "What craft skills do you need to develop? Year One has given you the foundational vocabulary. But every thesis project presents specific craft challenges that Year One's general curriculum could not anticipate: the writer whose thesis requires sustained third-person close narration needs to develop FID fluency; the writer whose thesis is a braided memoir needs to develop the specific skills of braiding; the writer whose thesis is a comic novel needs to develop the skills of sustained comedic prose. Identifying the specific skills the thesis requires is the prerequisite for Year Two's intentional development of those skills.",
            "What would you need to give yourself permission to write? This is the question that is hardest to answer and most important to ask. There is a version of the thesis you know you should write — the safe version, the version that asks the questions you know how to answer, that stays in the emotional terrain you have already mapped. And there is a version of the thesis you actually need to write — the harder version, the version that asks the questions you cannot yet answer, that goes toward the material you have been circling. The thesis that requires permission is almost always the right thesis.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The thesis opening exercise — 1,000 to 1,500 words of the actual work — is the most important exercise of Year One, and the most frightening. It asks you to stop planning and start. It asks you to commit, at least provisionally, to a form and a focal point and a first move. It will be wrong in specific ways, and those wrongnesses will be useful: they will tell you what the work actually needs, which is different from what you thought it needed before you began. The opening that feels most essential — the one that puts you in the most direct contact with the material, the one that is hardest to write because it is closest to what you actually mean — is almost always the right one.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Entering Year Two Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For literary fiction writers, the thesis opening is the opening of the novel or story collection — the first scene written at full ambition, toward the hardest and most essential version of the story. It is not a warm-up and not a summary. It is the work, begun. The questions to carry into the opening: whose consciousness are we in, and why? What is the first thing this consciousness notices, and what does that choice of noticing reveal? What is in motion at the opening that will not be resolved until the end? The opening should feel like an arrival in a world that already exists, not like the construction of a world from scratch. Write as though the novel has already been written and you are entering it at its first moment.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For screenwriters and playwrights, the thesis opening is the opening scene of the screenplay or play — the first scene written at full ambition, with full craft control, toward the essential version of the story. The specific questions for the screen or stage opening: what is the first image? (Screenwriting: this is the first thing the audience sees, and it establishes the visual grammar of the whole work.) What is the first voice? (Playwriting: the first words spoken establish the world's register, and that register is a promise.) What conflict is already in motion before the scene begins? The 'enter late, leave early' principle applies with maximum force to the opening scene: you are entering as late as you can while still establishing everything the audience needs.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For CNF writers, the thesis opening is the first section of the memoir or essay collection — the first piece of the book written at full ambition, toward the most essential version of the inquiry. The specific questions: whose voice is this, and how close to the material is the narrator? Is the opening in scene (inside an experience) or in essay (reflecting on an experience), and is that the right entry point for what the book needs? What question does the opening establish — not announce, but establish through the rendering itself? The most common failure of memoir openings is beginning at the beginning of the story rather than at the beginning of the inquiry. The inquiry begins with the question you cannot answer, not with the event that eventually generated the question.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Year One Grammar Synthesis — What You've Learned and What You'll Build",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 36 of 60 — Year One Grammar Synthesis",
          intro: [
            "Year One's grammar curriculum covered two complete phases. Phase 1 (Weeks 1–18) built sentence foundations: kernel sentences, the three branching types, opener variety, coordination, subordination, compound and complex sentences — the complete architecture of the basic English sentence. Phase 2 (Weeks 19–36) built sentence architecture: the cumulative sentence in all three Christensen patterns, the periodic sentence, the balanced sentence, the tricolon, sentence variety and rhythm, the short sentence as power tool, the one-sentence paragraph, the rhythm-conscious paragraph, the extended cumulative sentence, the full Phase 2 synthesis, the participial/absolute/appositive preview, parallelism, anaphora and epistrophe, polysyndeton and asyndeton, parataxis and hypotaxis, and free indirect discourse.",
            "Sixty grammar topics are planned across the three-year curriculum. Thirty-six are complete. Phase 3 (phrases and constructions) begins in Year Two, Week 1. Before moving forward, the self-assessment exercise this week asks you to look backward: which of the Phase 1 and Phase 2 concepts have been genuinely internalized — meaning they arrive in your prose through feel, not through conscious application — and which are still operating as deliberate choices that sometimes feel forced?",
          ],
          rule: "The test of internalization is simple: read a page of your own prose without consulting the grammar curriculum, then annotate it afterward. If the Phase 2 forms you identify are things you did rather than things you tried to do — if the annotation is a description of what happened rather than a plan for what should happen — the forms are internalized. If you find yourself consulting the curriculum while writing to see which form you should use next, the forms are not yet instinctive. Both states are normal at this stage. The shift from deliberate application to instinctive use happens through use, and the only accelerant is more writing.",
          examples: [
            {
              label: "Phase 1 concepts most commonly internalized by Year One's end",
              text: "Right-branching sentences (the dominant pattern of English prose, internalized simply through extensive writing); basic coordination and subordination; opener variety (writers who have practiced varied openers tend to break the 'I' habit instinctively). Phase 1's foundational forms become invisible quickly because they describe patterns already present in the writer's prose.",
            },
            {
              label: "Phase 2 concepts that most commonly remain deliberate",
              text: "The periodic sentence (requires withholding the main clause, which is unnatural and must be practiced until it becomes available as an option); the extended cumulative sentence (requires sustained grammatical coherence across many clauses, which is a form of attention most writers must develop); anaphora and epistrophe (rhetorical figures that feel artificial until the writer has found the moments that genuinely require them). These forms remain deliberate longer because they require more precise conditions for their appropriate use.",
            },
          ],
          outro: [
            "The Year One grammar synthesis is not an exercise in the conventional sense — it is a self-assessment that will guide your sentence-level development in Year Two. The forms you identify as not yet instinctive are the forms to practice deliberately in Year Two's thesis work. The forms you identify as fully internalized can be trusted to appear without conscious effort. Year Two's grammar curriculum (Phase 3: phrases and constructions) will build on what Phase 1 and 2 have established, adding a new layer of syntactic complexity that the Phase 1 and 2 foundations make possible.",
          ],
          exercise:
            "Write a 400-word reflection on your grammatical development this year. Address: which Phase 1 and Phase 2 concepts most changed how you write — where do you feel the grammar curriculum's influence most clearly when you read your own prose? Which concepts do you still find difficult to deploy naturally, and how do you know (what does the forced version feel like compared to the instinctive one)? What do you want to work on in Year Two — what specific grammatical or syntactic skills does your thesis project require that you do not yet fully possess? This is not a grammar exercise. It is a craft self-assessment that will guide your sentence-level development going forward.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Texts",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Your Week 18 Spring Plan",
              author: "You",
              href: "",
              note: "Reread the Spring Plan document you wrote at the end of the fall semester. How accurate were your predictions about the spring? What did you get right about yourself — about what you needed, what you were ready for, what would be difficult? What did you get wrong? The gap between the predictions and the actuality is not a record of failure; it is a record of what you learned that you could not have predicted. It is also a model for the Year Two plan you are beginning to write this week.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Three texts whose form is closest to your thesis project",
              author: "Your choice",
              href: "",
              note: "Choose three published works that are formally closest to what you imagine your thesis becoming — not the works you most admire in the abstract, but the works whose form, length, structure, and relationship between content and container most resembles what you need to build. Read their openings again this week with a specific question: how do they begin? At what moment do they enter the work? What contract does the opening establish? What do they withhold and what do they declare? The answer to those questions is the model your thesis opening is in dialogue with.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Thesis Opening",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the opening scene, chapter, or essay of your thesis manuscript. Not a description of what it will be — the thing itself. Write toward the hardest, most essential version of the story or inquiry you most need to tell.",
            "This is not a finished piece. It is a declaration of intent. It will be wrong in specific ways, and those wrongnesses are information. Write it anyway.",
            "The constraints: begin as late as possible — at the last moment before the story or inquiry must begin, with something already in motion. Do not begin at the beginning of the story; begin at the beginning of the reader's need to know. Do not describe the project or explain its intentions; enact them. Write as though the work already exists and you are entering it at its first necessary moment.",
            "After writing the opening, do not revise it. Instead, submit it to the AI workshop prompt below and answer the five Socratic questions in writing. The questions are more important than the prose at this stage — they will tell you what the work needs that the first draft does not yet have.",
          ],
          target: "1,000–1,500 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 36 — The Socratic Inquiry",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit your thesis opening — the 1,000–1,500 words written for this week's exercise. The AI's task is not to evaluate the writing but to ask the questions that clarify the project's underlying inquiry.",
          prompt:
            "Read this as a first draft of the opening of a book. Do not comment on the quality of the writing. Instead, ask me five Socratic questions about my project — not about the writing itself but about the underlying inquiry the work is pursuing: (1) What question is this book trying to answer — not its subject, but its question? (2) Why does this story or inquiry need to be told in this form, at this length, by this narrator? (3) What is the central tension or contradiction that will sustain a book-length project — what is the irreducible conflict at the work's heart? (4) What does the writer seem to be avoiding — what territory does the opening approach and then retreat from? (5) What moment or truth does the writing seem to be moving toward — what is the thing that, if the book succeeds, the reader will understand that they did not understand before?",
          questions: [
            "Answer all five questions in writing — not briefly, but fully. The answers are the thesis pre-plan.",
            "Which of the five questions is hardest to answer? The hardest question is almost always the most important one — it identifies the aspect of the project that is not yet clear, which is the aspect that Year Two's work must clarify.",
            "Question four — what does the writer seem to be avoiding? — is the most productive and the most uncomfortable. What is the AI's answer? Do you agree? If you do, what would it mean to write toward what you have been avoiding?",
            "After answering the five questions: reread your thesis opening. Does the opening establish the question, the tension, and the direction toward the truth the book is pursuing? Where does it do this most clearly? Where is the declaration of intent most legible — and where does it still need to be written more fully into the prose?",
          ],
          note: "The Socratic inquiry is not an evaluation of the opening's quality — at this stage, quality is less important than direction. What the five questions establish is whether you know what you are writing toward, which is the prerequisite for all the writing that follows. The writer who cannot answer question one — what question is this book trying to answer — does not yet have a thesis, regardless of how many pages they have written. The writer who answers it clearly has a thesis, regardless of how few pages exist. Find the question. Everything else follows.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Permission Slip",
      blocks: [
        {
          type: "tip",
          icon: "✍️",
          name: "Give Yourself Permission to Produce Bad Drafts",
          paragraphs: [
            "Give yourself explicit permission, in writing, to produce bad drafts. Year Two will be harder and more demanding than Year One. The thesis work will require you to sustain effort through long periods of not knowing whether the work is any good — periods where every page feels inadequate, where the project seems to have collapsed in on itself, where you cannot see what you are building. These periods are not failures. They are the experience of writing a long work, and every writer who has finished a book has been through them.",
            "The writers who finish books are not the writers who write the best first drafts. They are the writers who keep returning. The permission slip is not permission to write badly — it is permission to write imperfectly toward something that is not yet visible, to trust that the work is advancing even when you cannot see it advancing, to keep the draft moving forward even when forward feels wrong. Write it out, literally: 'I give myself permission to produce bad drafts. I will keep returning.' Put it where you will see it when you open the manuscript in Year Two.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You Came Here to Write",
      blocks: [
        {
          type: "journal",
          title: "What You Came Here to Write",
          question:
            "What did you come here to write? Not what you have written — what you came here to write. The work that has been waiting, the project that exists at the edge of what you know how to do, the story or inquiry or question that you have been moving toward for longer than this year. Is it still the same thing you imagined at the beginning? Has it changed shape — has the year's work revealed that what you thought you were writing toward was a proxy for something harder and more essential? What would you need to give yourself permission to write — permission from yourself, not from anyone else? And: is there a version of the thesis that you know you should write because it is expected, and a version you need to write because it is true? If so, which one are you going to write?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt for the final week of Year One is not a retrospective. It is a prospective — a question about direction, not about where you have been. Year One is complete. The craft vocabulary is in place. The reading has been done. The exercises have been written. Now the only question is what you are going to make with all of it, and the answer to that question is the work of the next two years.",
          ],
        },
      ],
    },

    {
      id: "summary",
      label: "Year One in Summary",
      title: "What Year One Has Built",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "Year One is complete. Thirty-six weeks, two semesters, two phases of the grammar curriculum, the full foundational craft curriculum across all three tracks. The writing produced across this year — approximately 28,000 to 48,000 words of exercises, portfolio pieces, journal entries, and the thesis opening — is the evidence of what has been built. It is not the thesis. It is the foundation on which the thesis will be built.",
          ],
        },
        {
          type: "card",
          title: "Year One: What Has Been Covered",
          paragraphs: [
            "Grammar Phases 1 & 2 (36 topics): kernel sentences through the full sentence architecture curriculum — cumulative, periodic, balanced, serial, power sentences; sentence variety and rhythm; FID introduction. 24 topics remain across Phases 3–8.",
            "Literary Fiction craft: writing process; showing vs. telling; scene architecture; image and sensory detail; characterization (four modules); dialogue (two modules); setting (two modules); point of view (four modules including unreliable narrator and psychic distance); conflict/crisis/resolution; Freytag and alternative structures; voice and tone; figurative language and symbol; pacing; the short story.",
            "Screenwriting & Playwriting: scene fundamentals; visual storytelling; dialogue for screen; stage vs. screen format; conflict as structure; character externalization; genre tone; comedic structure.",
            "Creative Nonfiction & Memoir: the personal essay tradition; scene vs. summary in CNF; the memoirist's 'I'; truth and memory ethics; research methods; voice and the narrator/memoirist distinction; trauma and the ethics of representation.",
            "AI Exercises: Style Autopsy (Week 30); Queneau's 99 Styles (Week 34); Character Interview (Week 7); Dialogue Subtext Workshop (Week 11); First Reader feedback loop (Weeks 1, 3, 4, 7, 8, 9, 10, 11, 12, 17, 35, 36); Research Sprint (Week 14); Cross-Genre Synthesis Weeks 15, 28, and 34.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Year Two",
          paragraphs: [
            "Year Two begins the advanced craft curriculum and the thesis proper. Grammar Phase 3 (phrases and constructions: participial, absolute, appositives, prepositional phrases, dependent clauses, gerunds, infinitives) begins in Week 1. The craft curriculum moves into Tier 3 advanced topics: scene construction as architectural craft; subtext and the iceberg theory; advanced structure; time manipulation; opening strategies and endings; theme and meaning; revision strategies. The thesis proposal is written in Year Two, Week 12. The thesis manuscript begins in Year Two, Week 13.",
            "Year Two will be harder than Year One. The sustained work of a long project, the specific craft challenges your material presents, the uncertainty that is the normal condition of writing something ambitious — all of these will be present in Year Two in ways Year One could only prepare you for, not replicate. The preparation has been done. Keep returning.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The final sentence of Year One is also the first sentence of Year Two. There is no gap between them — no rest, no pause, no moment of completion before the next beginning. The thesis opening written this week is already Year Two's first page. The work continues.",
          ],
        },
      ],
    },
  ],
};
