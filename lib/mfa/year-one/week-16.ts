import type { WeekData } from "@/lib/mfa/types";

export const week16Data: WeekData = {
  weekNumber: 16,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Sustaining a Practice — The Middle Distance",
  emphasizedWord: "The Middle Distance",
  deck: "Every long creative project passes through the messy middle — the place where initial excitement has faded and the end is not yet in sight. This week is about staying. Not about inspiration. About return.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Creative Practice" },
    { label: "Grammar", value: "Phase 2 Preview: Cumulative Sentences" },
    { label: "Exercise", value: "900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Book Is Written in the Middle",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1rsc1PfNVTbc8JYyXKLZ_0a_FblthNwEy/preview" },
        {
          type: "paragraph",
          content: [
            "You are in Week 16 of 18 in the fall semester. The initial energy of a new practice — the notebook, the schedule, the feeling of beginning — has either settled into genuine habit or begun to erode. This is not a failure of will or of talent. It is the structure of every long creative project, and it happens to every writer who works on anything longer than a single sitting. Novelists call it the second-act problem. Screenwriters call it the midpoint sag. Memoirists call it the archive phase, when the initial urgency of the story gives way to the grinding work of reconstruction. Whatever form the middle takes, it tends to feel the same: slow, uncertain, and like something has gone wrong.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Nothing has gone wrong. The middle is where the book is actually written. The beginning is the promise; the end is the delivery; the middle is the work itself — the sustained, unglamorous, often resistant labor of following the material into places you did not plan to go, of revising the plan when the material outgrows it, of showing up when the page does not reward the showing up. Every writer who has completed a long project has done it by learning to work in the middle. The middle is not a problem to be solved. It is the condition of the work.",
          ],
        },
        {
          type: "pullquote",
          quote: "The only way out is through. You must write badly before you can write well. You must write a great deal before you become a writer.",
          cite: "— Dorothea Brande, Becoming a Writer",
        },
        {
          type: "paragraph",
          content: [
            "Creative blocks — the periods when the work does not come, when sitting down to write produces only avoidance — are almost always craft problems in disguise. The writer who is blocked is usually a writer who has reached a place in the work where something is wrong and the unconscious knows it before the conscious mind does. The block is the mind's refusal to continue in a direction that isn't working. The question is not how to break through the block but ",
            { text: "what the block is about.", emphasized: true },
            " What has the work reached that the writer is not yet equipped to handle? What does the story require that the writer has been avoiding giving it? Blocks named and examined tend to dissolve. Blocks forced through tend to produce the wrong kind of writing.",
          ],
        },
        {
          type: "card",
          title: "Strategies for the Middle Distance",
          paragraphs: [
            "Return to the source: When a project stalls, return to the original impulse — not the plan for the project but the thing that made it feel necessary in the first place. The image, the question, the memory, the scene that started everything. Write toward that original thing again. The middle often stalls because the plan has taken over from the necessity. Return to the necessity.",
            "Lower the stakes of the session: A block is often a form of perfectionism — the sense that whatever is produced must justify the effort. Lower the daily requirement to something so small it cannot fail: one sentence, one image, one paragraph of bad prose on the subject. Volume creates momentum; perfectionism kills it. Write badly. The revision will fix it.",
            "Diagnose the craft problem: Ask what the work has reached that you don't yet know how to handle. Often the block is located precisely at the place where the story requires a skill you have not yet developed — a scene in a form you haven't tried, an emotional territory you have been circling, a structural decision you have been deferring. Name the problem in craft terms. Craft problems have craft solutions.",
            "Use the abandoned material: The pieces that stall and get put away are not wasted. They contain the work's next step. Return to them not to complete them but to understand why they stopped — and what they were trying to reach that the main project needs.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The practical infrastructure of a sustained practice deserves direct attention. The writers who finish projects are not the writers who feel most inspired — they are the writers who have built conditions that make the work available even on the days when it doesn't feel worth doing. This means: a protected time (not the time left over after everything else), a physical space that the unconscious associates with writing, a minimum daily quota small enough that it cannot be talked out of, and a relationship with the work that does not require the work to be good in order to continue. Brande's formulation — you must write a great deal before you become a writer — is not inspirational. It is structural. Volume is the mechanism.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Middle Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The second-act problem in novel writing is structural as well as psychological: the middle of a novel must do the most difficult work — sustaining tension, deepening character, advancing the plot without the energy of the beginning or the relief of the end — while covering the most pages. The writers who navigate the middle best are usually those who have invested most heavily in the foundational architecture before beginning: they know where they are going, which means they know what they are walking toward even when the path isn't visible. If you don't have a structural plan for the middle, this is the week to make one.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The midpoint sag in screenwriting is so well-documented that it has become a beat-sheet fixture: the midpoint scene, roughly page 55–60 of a 110-page script, must deliver a significant event or revelation that re-energizes the story's forward motion. The screenwriter's structural advantage over the novelist is that the beats are mapped — the midpoint is a named landmark, not an indefinite middle. If your screenplay or play is stalling, locate it on the structural map. The block is almost always at a named beat you haven't figured out how to execute. Name the beat. Then solve the beat.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The archive phase of memoir writing — the period of research, reconstruction, and excavation that follows the initial draft — is where most memoirs are either built or abandoned. The initial burst of telling is energizing; the subsequent labor of getting it right, of verifying the memories, of finding the structure that honors the complexity of the experience, is grinding. Vivian Gornick's formulation is useful here: the difference between the situation (what happened) and the story (what the narrator now understands about what happened) is not clear at the start of the writing. It becomes clear only through the middle work — the sustained, patient effort of returning to the material until it yields its meaning.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 2 Preview: The Cumulative Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 Preview · Topic 16 of 60 — The Cumulative Sentence",
          intro: [
            "Phase 2 of the grammar curriculum begins in earnest next semester, but this week opens the door. Francis Christensen, whose work in generative rhetoric is the intellectual foundation of Phase 2, identified the cumulative sentence — also called the loose or additive sentence — as the characteristic sentence of contemporary literary prose. Not every great sentence is cumulative, but the dominant mode of accumulation in serious literary fiction is cumulative: the base clause followed by free modifiers that add detail, texture, and the weight of accumulated perception.",
            "The free modifier — a phrase or clause that can be detached from the sentence without destroying its grammatical structure — is the engine of the cumulative sentence. Free modifiers can be participial phrases ('turning the key, she felt her hands begin to shake'), absolute phrases ('her hands shaking, she turned the key'), or appositives and noun phrases. They can precede the base clause (left-branching, which you have studied), follow it (right-branching), or interrupt it (mid-branching). The cumulative sentence is the form that makes all three branching types available simultaneously, coordinating them into a sentence that grows by accretion.",
          ],
          rule: "The cumulative sentence begins with a base clause and extends it with free modifiers — participial phrases, absolute phrases, appositives — that add detail and texture without altering the base clause's grammatical completeness. The modifiers can be coordinate (parallel in structure and level), subordinate (each modifying the preceding element rather than the base clause), or mixed.",
          examples: [
            {
              label: "Base clause only",
              text: "She stood at the window.",
            },
            {
              label: "Cumulative — coordinate free modifiers (each modifies the base clause at the same level)",
              text: "She stood at the window, her hands pressed against the glass, her breath fogging the cold surface, her eyes fixed on the street below.",
            },
            {
              label: "Cumulative — subordinate free modifiers (each modifies the preceding element, drilling deeper)",
              text: "She stood at the window, her hands pressed against the glass, the cold spreading upward through her palms, numbing the fingers she had not thought to move.",
            },
            {
              label: "Cumulative — mixed (coordinate then subordinate)",
              text: "She stood at the window, her hands pressed against the glass, breath fogging the cold surface, watching the street below for a sign that would not come.",
            },
          ],
          outro: [
            "Notice what the cumulative sentence does to time: it slows it. Each free modifier is a beat of attention, a moment held longer than the base clause alone would hold it. The cumulative sentence is not just a grammatical structure — it is a phenomenological one. It enacts the experience of sustained perception: the consciousness that stays with a moment rather than moving past it.",
            "This week, your task is only to notice. Read anything you are reading this semester — fiction, nonfiction, a screenplay — and identify the cumulative sentences. They are everywhere, once you have the name for them. Mark them. Read them aloud. Feel where the base clause ends and the free modifiers begin. You are learning to see the architecture before you learn to build it.",
          ],
          exercise:
            "Write three cumulative sentences, each beginning with a short base clause. Aim for at least three free modifiers in each. First sentence: begin with 'He waited.' Second: begin with 'The room was empty.' Third: begin with a base clause of your own choosing about a character or place from your current writing. Read all three aloud. Where does the sentence feel earned — where does the accumulation add something real? Where does it feel padded — where is a modifier present because you think you should have more, not because the moment requires more?",
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
              title: "Writing Down the Bones",
              author: "Natalie Goldberg",
              href: "https://bookshop.org/p/books/writing-down-the-bones-freeing-the-writer-within-natalie-goldberg/6697453",
              note: "Read the section on sustaining a writing practice — specifically the chapters on returning to writing after a break and on the relationship between discipline and freedom. Goldberg's approach is experiential rather than analytical: she is not telling you how to write but how to stay in the act of writing when the act resists you. Read it not as advice but as a reminder of what you already know about the work's conditions.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Becoming a Writer",
              author: "Dorothea Brande",
              href: "https://bookshop.org/p/books/becoming-a-writer-dorothea-brande/6697453",
              note: "Read Chapters 7 and 8 — the chapters on the writing schedule and on the writer's unconscious. Brande's 1934 book remains the most precise account of the psychological conditions that make sustained literary work possible. Her core argument — that the writer must develop two capacities simultaneously, the unconscious generative capacity and the critical editorial capacity, and must learn to activate each separately — is as useful now as it was ninety years ago.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Daily Rituals: How Artists Work",
              author: "Mason Currey",
              href: "https://bookshop.org/p/books/daily-rituals-how-artists-work-mason-currey/6697453",
              note: "Read any twenty entries — they are short, a paragraph or two each. Read not for inspiration but for pattern recognition: what do the sustained creative practices have in common? What do the failed or interrupted ones have in common? Notice especially the relationship between constraint and production: the writers who wrote the most were almost never the writers with the most freedom. Constraint, it turns out, is generative.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Returning to Week 1",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Return to the first piece of writing you produced in this program — your Week 1 exercise. Read it without correcting it, without cringing past the difficult parts, without stopping to revise. Read it as you would read a piece by a writer you are trying to understand.",
            "Part One — The Response (500 words): Write a response to that early work. Not a critique — a response. What do you see now that you could not have seen then? What was the writer of that piece trying to do, and how close did they get? What craft knowledge do you now have that would have changed specific sentences, specific choices? What is genuinely good in that early work — not as charity toward yourself but as honest observation? Where is the real writer already visible in the early prose?",
            "Part Two — The Continuation (400 words): Find the strongest single sentence in the Week 1 draft — the sentence most fully itself, most charged, most alive. Copy it at the top of a fresh page. Use it as the first line of a new piece. Write 400 words from there. Do not worry about the connection to the original draft. Follow the sentence wherever it goes.",
          ],
          target: "900 words (both parts combined)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 16 — The Socratic Unblock",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Choose a piece of writing you have abandoned or gotten stuck on — something from this semester or earlier that stopped moving and has not resumed. Describe it to the AI in three to five sentences: what you have, what you were trying to do, and where you got stuck. Then use the prompt below exactly. The AI must ask questions only — no suggestions, no fixes.",
          prompt:
            "I am going to describe a piece of writing I am stuck on. Do not offer suggestions, solutions, or rewrites. Ask me five Socratic questions — only questions — that might help me understand why this piece isn't moving forward yet. The questions should be about the work itself, not about my feelings about the work. They should push me toward understanding what the piece needs that I haven't given it. Here is what I have and where I got stuck: [paste your description].",
          questions: [
            "Which of the AI's five questions hits hardest — which one reveals something you did not already know you were avoiding?",
            "Answer each question in writing, as fully as you can. Do not publish these answers. They are for you.",
            "After answering all five: what is the craft problem the block is disguising? Name it as specifically as possible.",
            "What is the one next thing you could write — the smallest possible move forward — that would confirm the block has lifted?",
          ],
          note: "The block is almost always located at a place where the work requires something the writer has not yet figured out how to give it. The Socratic questions are tools for locating that place. Once it is named — once the craft problem is visible — it can usually be solved. The block is not the problem. The thing the block is protecting is the problem.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Single-Pass Rule",
      blocks: [
        {
          type: "tip",
          icon: "🎯",
          name: "Revise with One Objective at a Time",
          paragraphs: [
            "Revision that tries to do everything at once does nothing well. When you sit down to revise, choose a single objective for that pass and execute it completely before beginning another. One pass where you read only for character consistency — every time a character acts, ask whether the action follows from what you have established about them. One pass where you read only for dialogue naturalness — read every line aloud, stop at every line that cannot be spoken without stumbling. One pass where you read only for pacing — where is the prose moving faster or slower than the content requires?",
            "The single-pass rule accomplishes two things simultaneously: it makes revision tractable (a single clear objective, fully achievable in a single session) and it makes revision thorough (a problem that is looked for specifically is found; a problem that is vaguely hoped to be noticed usually isn't). The number of passes required is not a sign of failure. It is a sign that the work is complex enough to reward multiple readings.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Abandoned Piece",
      blocks: [
        {
          type: "journal",
          title: "The Abandoned Piece",
          question:
            "What piece of writing have you abandoned — this semester or at any point in your life as a writer? Not set aside temporarily, but genuinely given up on. Why did you abandon it — honestly, in craft terms rather than emotional ones? Was it that you didn't know how to solve a specific problem it posed? Was it that the material was harder than you had anticipated? Was it that something in the piece required you to say something you weren't ready to say? Is the piece truly unsalvageable, or is it simply hard — and have you been using 'abandoned' as a softer word for 'avoided'?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The abandoned piece is almost always the piece that knows something the writer isn't yet equipped to handle. That is why it was abandoned: not because it failed, but because it succeeded in reaching territory the writer wasn't ready for. Many of the most important books writers eventually complete are the ones they abandoned first, sometimes for years, because the work was asking for something the writer had not yet become.",
          ],
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
            "By the end of this week, you should have: returned to your Week 1 writing and written both a 500-word response to it and a 400-word continuation from its strongest sentence; identified three cumulative sentences in your current reading and written three of your own; used the Socratic unblock prompt on a stalled piece and named the craft problem the block was protecting; and read enough of Brande and Goldberg to have reconsidered at least one element of your practice infrastructure.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 17",
          paragraphs: [
            "Week 17 introduces interiority as fiction's specific superpower — the direct access to a character's thoughts, sensations, and unconscious associations that separates the novel from every other narrative form. You will study free indirect discourse, the technique that dissolves the boundary between narrator and character voice, and encounter John Gardner's concept of psychic distance for the first time before its full treatment in Year Two.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "You have two weeks remaining in the fall semester. What you do in those two weeks — how seriously you take the final writing exercises, how fully you engage with the grammar preview, how honestly you use the journal prompts — will determine what you carry into Year One's spring semester. The middle is where the book is written. You are in the middle. Stay.",
          ],
        },
      ],
    },
  ],
};
