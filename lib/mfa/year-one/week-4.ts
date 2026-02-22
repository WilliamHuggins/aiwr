import type { WeekData } from "@/lib/mfa/types";

export const week4Data: WeekData = {
  weekNumber: 4,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Scene Construction & The Turn",
  emphasizedWord: "The Turn",
  deck: "Every scene is a unit of dramatic action with an internal architecture. This week you study that architecture — and learn to locate the single moment that makes a scene matter.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Scene Construction" },
    { label: "Grammar", value: "How Sentences Grow" },
    { label: "Exercise", value: "600–800 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Moment After Which Nothing Is the Same",
      blocks: [
        {
          type: "paragraph",
          content: [
            "A scene is not a location. It is not a stretch of time. It is not a sequence of events. A scene is a ",
            { text: "unit of dramatic action", emphasized: true },
            " — and like any unit, it has boundaries, internal pressures, and a structure that determines whether it succeeds or fails at the level of fiction. Understanding that structure is the difference between a writer who instinctively knows something is wrong with a scene and one who can diagnose and fix it.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The most important element of scene structure is one that beginning writers routinely omit: the ",
            { text: "turn", emphasized: true },
            ". The turn is the moment inside a scene at which something changes — a character's understanding, the balance of power between two people, what is now possible versus what is now foreclosed. Not every scene ends in catastrophe. But every scene worth writing ends with the ground shifted. If the characters and situation at the end of a scene are in the same position they were in at the beginning, you have written an anecdote, not a scene.",
          ],
        },
        {
          type: "pullquote",
          quote: "Plot is character revealed by action.",
          cite: "— craft maxim",
        },
        {
          type: "paragraph",
          content: [
            "Before the turn, there is the ",
            { text: "ground situation", emphasized: true },
            ": the state of things when the scene opens. This is not backstory. It is the charged equilibrium the scene begins in — charged because something is already at stake, already in tension, already about to shift. Most scenes fail because the writer spends too long establishing the ground situation. John Gardner's principle of ",
            { text: "in medias res", emphasized: true },
            " — entering in the middle of things — is not merely a stylistic preference. It is a structural necessity. The reader does not need to be walked to the moment of tension. They need to be dropped into it.",
          ],
        },
        {
          type: "card",
          title: "The Architecture of a Scene",
          paragraphs: [
            "Entry point: The latest possible moment at which the scene can begin and still be understood.",
            "Ground situation: The charged equilibrium — what is at stake, what each character wants, what cannot continue.",
            "Complication: The moment the equilibrium becomes unstable. A new factor enters; a hidden want surfaces; someone says the wrong true thing.",
            "The turn: The moment after which the situation is permanently changed. This is the scene's reason for existing.",
            "Exit point: The earliest moment at which the scene can end without denying the reader the turn's full weight.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Want is the engine. Every character in every scene wants something — and the most interesting scenes are those in which two characters want incompatible things, or in which a character wants something they cannot name, or in which what a character wants and what they need are different enough to generate dramatic friction. The great mistake of beginning writers is to write characters who simply react. Reactive characters have no want of their own; they function as mirrors for other characters' energy. Readers lose interest fast. Give every character in your scene a specific, active want — even if that want is merely to leave the room without having to say something true.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "One further principle before the exercise: the turn should not be ",
            { text: "explained", emphasized: true },
            ". It should be ",
            { text: "enacted", emphasized: true },
            ". If a character changes her mind in a scene, the reader should feel the change in what she does and says — not in a paragraph of interior monologue announcing that a shift has occurred. The scene's turn is an event, not a summary. Trust the reader to feel what you have built. The moment you explain the turn, you have decided the reader cannot find it. They can. Build it right, and get out of the way.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Turn Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the turn often happens in a character's consciousness rather than in external action. A shift in what a character understands, fears, or chooses to stop pretending — these are turns. The prose itself frequently signals the turn: sentence rhythm changes, the level of interiority shifts, the narrator moves closer or farther from the character's interior. Study the moment in Alice Munro's stories when a character stops telling herself something and faces it instead. That is the turn, and it happens inside.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, the turn must be visible — actionable by an actor and legible to a camera. A character cannot simply think differently; they must do something different, or stop doing something, or say the thing they have been refusing to say. The screenwriter's version of the turn is the beat change: the moment a character's objective shifts or collapses. In playwriting, the turn often lives in dialogue — specifically in the line that cannot be un-said, after which the characters' relationship is permanently altered. Pinter built entire plays out of the space around that line.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the scene's turn is frequently an act of recognition: the narrator, reconstructing a past event, arrives at the moment when the meaning of the event became clear — or when, in retrospect, it should have. The memoir's particular challenge is that the turn may be double: what changed in the moment itself, and what changed in the narrator's understanding years later. These two turns can operate at different points in a scene. The most sophisticated memoir writing uses the gap between them as its central dramatic engine.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "How Sentences Grow",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 4 of 60 — Addition, Modification, and Embedding",
          intro: [
            "Every sentence you will ever write began as a kernel: a base clause of subject and predicate that makes a complete, minimal claim. \"The dog barked.\" \"She left.\" \"He knew.\" From that kernel, sentences grow — and they grow in only three fundamental ways. Understanding those three ways is the foundation of conscious sentence craft.",
          ],
          rule: "Sentences grow through addition (coordination), modification (adjectives, adverbs, and phrases attached to existing elements), or embedding (subordinate clauses inserted inside or around the main clause) — and each method produces a distinct rhythmic and syntactic effect.",
          examples: [
            {
              label: "Kernel sentence",
              text: "The dog barked.",
            },
            {
              label: "Grown by addition (coordination)",
              text: "The dog barked, and the street went quiet.",
            },
            {
              label: "Grown by modification (participial phrase)",
              text: "The dog barked, lunging against the chain, its breath clouding the cold air.",
            },
            {
              label: "Grown by embedding (subordinate clause)",
              text: "The dog that had been silent all winter barked once, at nothing, and stopped.",
            },
          ],
          outro: [
            "Notice what each method does to time, emphasis, and energy. Coordination creates sequence and equal weight. Modification adds texture and simultaneity — multiple things happening in the same moment. Embedding interrupts, qualifies, and compresses — it tells you that some information is subordinate to other information, and places that subordination inside the grammar itself.",
            "Writers who default to one method produce monotonous prose. Writers who choose consciously — who ask, with each sentence, how much weight to give each element and what the relationship between the parts should be — are writers in control of their sentences as instruments.",
          ],
          exercise:
            "Take a single kernel sentence of your own construction — no more than four words. Grow it three times using each method separately. Then write a fourth version that combines all three methods in a single sentence. Read all four versions aloud. Notice what changed. Spend 5–10 minutes on this; the discipline is in the noticing, not the production.",
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
              title: "The Art of Fiction",
              author: "John Gardner",
              href: "https://bookshop.org/p/books/the-art-of-fiction-notes-on-craft-for-young-writers-john-gardner/6697453",
              note: "Read the chapter on scene construction and the \"fictional dream.\" Gardner's concept of the unbroken dream is the theoretical foundation for everything this week covers about entry, turn, and exit.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "\"The Dead\" (first 20 pages)",
              author: "James Joyce, Dubliners",
              href: "https://www.gutenberg.org/ebooks/2814",
              note: "Free on Project Gutenberg. Read the opening party scenes with one question: where is the turn in each scene? What changes, and how does Joyce signal that change without announcing it?",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the scene construction section. Burroway's treatment of scene vs. summary and the function of conflict in scene structure complements Gardner's more theoretical approach.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Two Wants, No Names",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene between two characters who want different things. Before you write, define each character's want in a single sentence — but do not include that sentence in the scene. The wants must emerge from action and word choice alone.",
            "Enter the scene in medias res: mid-conversation, mid-action, mid-something. Do not open with description or backstory. Drop the reader into the tension already in progress.",
            "Additional constraints: Do not name either character. Do not include any explicit statement of what either character wants. Do not explain the turn when it comes — enact it. Exit the scene when the ground has shifted, not a sentence after.",
            "When you finish the draft, locate the turn. If you cannot find it, the scene needs one. If you can find it but it happens in the last line, ask whether the scene could have arrived there in half the words.",
          ],
          target: "600–800 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 4 — Diagnosing the Turn",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week the AI functions as a structural reader — not an editor, not a rewriter. Paste your completed scene and use the prompt below exactly as written. The goal is diagnosis, not revision.",
          prompt:
            "Read this scene carefully. Do not rewrite anything. Answer these four questions only: (1) Where does this scene's turn happen — identify the specific moment; (2) Is the turn clearly established in the text, or does the reader have to infer it? (3) What does each character want in this scene — is that want visible in what they do and say, or is it hidden or absent? (4) Where does the tension between those two wants most visibly emerge? Be specific and brief.",
          questions: [
            "Where does this scene's turn happen?",
            "Is the turn established or implied?",
            "What does each character want — and is it visible?",
            "Where does the tension between wants most visibly emerge?",
          ],
          note: "If the AI identifies a turn in a different place than you intended, that is useful information — not necessarily a failure. It may mean the turn you built is not the turn the scene is enacting. Read the AI's answer before you decide whether to revise.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Enter Late, Leave Early",
      blocks: [
        {
          type: "tip",
          icon: "✂",
          name: "The Cut at Both Ends",
          paragraphs: [
            "Take any scene you have written and scan it for the first line of real dramatic tension — the line where something is at stake, where a want is in motion, where the ground situation is already charged. Cut everything before that line.",
            "Now scan for the last line where something has changed — the final moment the turn reverberates. Cut everything after that line.",
            "Most scenes carry preamble and denouement that dissipates tension rather than building it. The writer needed that material to find the scene. The reader does not need it to experience it. The cuts are almost always improvements. Do this with every scene before you consider it finished.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Conversation That Changed Things",
      blocks: [
        {
          type: "journal",
          title: "The Conversation That Changed Things",
          question:
            "Think of a real conversation that changed something — a relationship, a plan, your understanding of another person, your understanding of yourself. Not a dramatic confrontation necessarily, but a conversation after which something was different. What was the moment of turn? What was said — or not said — that made it irreversible? Could you write it as a scene? What would you have to invent, and what would you have to leave out?",
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
            "By the end of this week, you should have: drafted one full scene with a clear turn; completed the kernel-to-growth sentence exercise; read the core texts with attention to how scenes enter, turn, and exit; and used the AI workshop to diagnose structure rather than rewrite prose.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 5",
          paragraphs: [
            "Week 5 shifts from scene architecture to the pressures that operate inside scenes: image and sensory detail. You'll study how concrete physical observation does the work that abstract statement cannot — and why the image is not decoration but the primary unit of meaning in literary prose.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: if you cannot point to the turn in a scene, the scene is not yet finished. The turn is not decoration — it is the scene's reason for existing.",
          ],
        },
      ],
    },
  ],
};
