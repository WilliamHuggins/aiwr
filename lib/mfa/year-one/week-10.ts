import type { WeekData } from "@/lib/mfa/types";

export const week10Data: WeekData = {
  weekNumber: 10,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Desire, Need & the Gap Between Them",
  emphasizedWord: "the Gap Between Them",
  deck: "The richest characters pursue a want that is, in some essential way, at odds with what they actually need. The gap between those two things is not a subplot — it is the story. This week you learn to build both, and to let the reader see both at once.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Desire & Need" },
    { label: "Grammar", value: "Coordination & Subordination" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What They Want Is Not What They Need",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1VSnsRU5ytGzlgTC849XKrIWZ47XZArWP/preview" },
        {
          type: "paragraph",
          content: [
            "Every story is driven by desire. A character without desire is a character without forward motion — someone to whom events happen rather than someone who generates events. But desire alone is not enough to produce the kind of narrative depth that distinguishes literary fiction from functional plot. What produces depth is the relationship between what a character consciously wants and what they unconsciously need — and the gap between those two things, which the story systematically widens until the character is forced to confront it.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Robert McKee's distinction between want and need, developed in ",
            { text: "Story", emphasized: true },
            " as a framework for screenwriters, is one of the most generative concepts in all of narrative craft. The want is the character's conscious, articulable goal — what they are actively pursuing, what they believe will resolve their situation or complete them. The need is what they are actually lacking at the level of psychology or soul — what they would have to face, surrender, or become in order to be whole. The richest characters in literary fiction pursue a want that is, in some essential way, at odds with their deepest need. Hamlet wants revenge; he needs to find a reason to act at all. Elizabeth Bennet wants to marry well on her own terms; she needs to learn to trust her judgment enough to act on it. Gatsby wants Daisy; he needs to stop believing that the past is recoverable.",
          ],
        },
        {
          type: "pullquote",
          quote: "True character is revealed in the choices a human being makes under pressure — the greater the pressure, the deeper the revelation.",
          cite: "— Robert McKee, Story",
        },
        {
          type: "paragraph",
          content: [
            "The want is visible on the surface of the story. The need is almost never stated directly — it is embedded in the character's behavior, in what they avoid, in how they respond when the want fails. This is why the want/need distinction is not merely a structural convenience but a craft imperative: ",
            { text: "the need can only be shown, never told.", emphasized: true },
            ' The moment you write "what she actually needed was to stop running from her grief" you have collapsed the engine of the story into an editorial note. The need must be present in every scene — visible to the reader, invisible to the character — as the thing the character is failing to pursue while they pursue everything else.',
          ],
        },
        {
          type: "card",
          title: "Want vs. Need: The Structural Relationship",
          paragraphs: [
            "The want is conscious and external: a goal the character can articulate and actively pursue. It generates plot — the sequence of events that follows from a character trying to get what they want.",
            "The need is unconscious and internal: a psychological truth the character is avoiding. It generates depth — the difference between a story that resolves plot and a story that changes the reader.",
            "The gap between them is where story lives. Not in either one alone, but in the friction between a character relentlessly pursuing what they want while steadily missing, resisting, or sabotaging what they need.",
            "The arc of a dynamic character is the journey from want toward need — a journey they often resist until the cost of resistance becomes higher than the cost of change. The story engineers the conditions under which the gap becomes impossible to ignore.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The mechanism that produces the gap is the wound — the formative event, often in the character's past, that generated a false belief about themselves or the world. The wound produces the lie the character lives by: a belief that was understandable given the circumstances that created it, and that has since become a prison. The want is usually a direct expression of the lie — an attempt to prove that the lie is not a lie, or to get something that would make the lie unnecessary. Gatsby's want is an expression of his wound: if he can get Daisy back, he can prove that the self he invented is real, that the past can be rewritten, that money and will are enough. They are not. The need — to accept impermanence, to release the invented self — is everything the want is designed to avoid.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "For the writer, the discipline of the want/need framework is restraint. The need must never be explained, summarized, or announced in the text. It must be present as dramatic irony: the reader sees it; the character does not. This is the double vision that the best literary fiction creates — the reader simultaneously inside the character's desire and outside it, watching the character move steadily toward or away from something the character cannot yet name. Building that double vision, and sustaining it, is the work of this week.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Want and Need Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the want/need distinction maps directly onto the concept of surface narrative versus deep narrative — what the story appears to be about versus what it is actually about. The surface narrative is the want in action: the pursuit, the complication, the provisional resolution. The deep narrative is the need and its fate: is the character changed by the end, or not? Literary fiction's particular claim is that the deep narrative is the story — that a novel in which only the surface resolves has not fully earned its pages. The want generates the events; the need gives them meaning.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "McKee developed this framework specifically for screenwriting, and it remains the backbone of character arc analysis in Hollywood and in the room. For the screenwriter, the want is almost always the engine of the A-story — the visible plot — and the need is the engine of the B-story or the emotional through-line. The gap between them is what gives the film something to be about beyond its genre mechanics. Great genre films work because their want and need are perfectly chosen: Die Hard is a film about a man who wants to save hostages and needs to save his marriage. The need is what makes it more than an action movie.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, desire is the engine of the narrator's journey. The memoirist wanted something — urgently, specifically, with consequences — and the memoir is the record of what they actually got and what that taught them. But the memoirist's version of the want/need framework carries a complication: the narrator is looking back, which means they may already know what they needed. The craft challenge is managing that retrospective knowledge — using it to structure the narrative without letting it collapse the dramatic tension of the experiencing self who did not yet know. Vivian Gornick's concept of the situation (the events) and the story (the understanding the narrator pursues) is the memoirist's version of this distinction.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Coordination and Subordination as Philosophical Choices",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 10 of 60 — Coordination and Subordination",
          intro: [
            "You have studied how sentences branch, how they open, and how they invert. This week addresses a foundational question that underlies all of those topics: when you join two ideas in a single sentence, what is the relationship you claim between them? The answer is always either coordination or subordination — and the choice is never merely grammatical. It is a philosophical claim about how the world works.",
            "Coordination joins two ideas as equals: it says these two things are equivalent in weight, in time, in importance. Subordination places one idea inside another: it says this idea is the main claim, and that idea is the condition, cause, concession, or context that qualifies it. The coordinating conjunction (and, but, or, so, yet, for, nor) is the hinge of an equal relationship. The subordinating conjunction (because, although, when, if, before, after, since, unless, until, while) is the hinge of a hierarchical one — and the choice of subordinating conjunction makes a specific claim about what kind of hierarchy it is.",
          ],
          rule: "Coordination joins independent clauses as equals, implying equivalence or sequence. Subordination embeds one clause inside another, establishing causation, condition, concession, or time — and the specific subordinating conjunction used always makes a different claim about the relationship between the ideas it joins.",
          examples: [
            {
              label: "Coordinated (equivalent weight, sequence)",
              text: "She ran, and she didn't look back.",
            },
            {
              label: "Subordinated — causation (because)",
              text: "She ran because she knew he was watching.",
            },
            {
              label: "Subordinated — concession (although)",
              text: "She ran although she had nowhere to go.",
            },
            {
              label: "Subordinated — condition (if)",
              text: "She ran as if the distance itself were the point.",
            },
            {
              label: "The philosophical difference made visible",
              text: '"She ran, and she cried" (two equal facts) vs. "She ran because she was crying" (running as caused by crying) vs. "She ran although she was crying" (running despite — a different psychology entirely).',
            },
          ],
          outro: [
            "The coordinated sentence is paratactic: it places things side by side without claiming a relationship between them beyond adjacency. Hemingway's prose is largely paratactic — \"He was very tired and his legs hurt and he was hungry.\" The reader supplies the relationship between the exhaustion, the pain, and the hunger; the prose refuses to establish it. The subordinated sentence is hypotactic: it builds hierarchy, establishes causation, creates the logic of the world. Henry James writes in hypotaxis — every clause qualified by another clause, every claim contextualized and conditioned. These are not just stylistic preferences. They are different claims about how experience coheres.",
            "For the working writer, the practical question is this: when you join two ideas, are they genuinely equal — is coordination the honest choice — or is one idea actually dependent on the other in a way that subordination would make clear? Most writers default to coordination because it is simpler. The discipline is to ask, for each compound sentence, whether the conjunction is doing the philosophical work the relationship requires.",
          ],
          exercise:
            "Take five compound sentences from your recent writing — sentences joined by \"and\" or \"but.\" For each, rewrite it as a subordinated sentence using at least two different subordinating conjunctions. Read all three versions aloud: the original and both subordinations. What changes? Which version makes the most accurate claim about the relationship between the two ideas? The goal is not to eliminate coordination but to confirm that your coordinated sentences are coordinated by choice, not by default.",
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
              title: "Story: Substance, Structure, Style and the Principles of Screenwriting",
              author: "Robert McKee",
              href: "https://bookshop.org/p/books/story-substance-structure-style-and-the-principles-of-screenwriting-robert-mckee/6697453",
              note: 'Read the chapter titled "Structure and Character." McKee\'s framework for want, need, and the gap between them was developed for screenwriters but applies to all narrative fiction. His analysis of how character arc and story structure are not separate things but the same thing is the most important idea in this chapter. Read actively: apply every claim he makes to a character you are working with.',
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Their Eyes Were Watching God",
              author: "Zora Neale Hurston",
              href: "https://bookshop.org/p/books/their-eyes-were-watching-god-zora-neale-hurston/6697453",
              note: "Read Chapters 1–4. This novel is one of the clearest and most beautiful demonstrations of desire as narrative engine in American fiction. Track Janie's want across these chapters — what she is actively pursuing — and ask what her need might be. Notice how Hurston encodes both simultaneously without stating either one directly. Pay attention also to how voice operates here: the prose is itself an enactment of Janie's interiority.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Situation and the Story",
              author: "Vivian Gornick",
              href: "https://bookshop.org/p/books/the-situation-and-the-story-the-art-of-personal-narrative-vivian-gornick/6697329",
              note: "If you purchased this for Week 6, return to it now and read the remainder of Part One. Gornick's distinction between the situation (what happened) and the story (what the narrator pursues in understanding of what happened) is the memoirist's version of want and need — and her analysis of how the gap between them generates the essay and memoir's forward momentum is one of the most precise accounts of nonfiction's structural engine anywhere in print.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Both Layers Visible",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene in which your protagonist actively pursues their want. The want should be specific, concrete, and urgent — a thing they are trying to get or accomplish or prevent within the scene's action.",
            "The scene itself — through what the protagonist notices, avoids, chooses, and misreads — should reveal what they need. The reader should be able to see both layers simultaneously: the want in action on the surface, the need present as the shape of what the protagonist is failing to reach for.",
            'Constraints: do not state what the protagonist needs. Do not use any sentence in the form "what she really needed was" or "beneath the surface of her wanting." The need must be visible only in the gap — in the specific things the protagonist does not pursue, does not notice, or actively pushes away while pursuing the want. One object or detail in the scene should be quietly carrying the need without comment.',
            "After the draft, write one private sentence — not for the story, only for you — naming the need. Then read the draft and ask: is that private sentence already in the scene, encoded in behavior and image? If you cannot find it, the scene's surface layer is solid but the deep layer is absent.",
          ],
          target: "700–900 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 10 — The Wound Generator",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Before using the prompt, describe your protagonist's situation in two sentences — not their plot position, but their psychology: who they are, what they believe, and how that belief shapes their pursuit of what they want. Then use the prompt below.",
          prompt:
            "I am going to describe a character in two sentences. Propose five possible needs beneath the surface of this character — not what they consciously want, but what their psychology suggests they are actually hungry for, even if they would never name it. For each need, frame it as a wound that produces behavior: what happened (or what they believe happened), what false lesson they drew from it, and how that false lesson is now driving the want I've described. Do not give me generic psychological profiles. Give me specific, character-particular wounds. The character is: [paste your two-sentence description].",
          questions: [
            "Which of the five needs feels most specifically true to this character rather than generically applicable?",
            "Which wound produces the most interesting behavior — the most surprising and yet the most inevitable actions?",
            "How is the want a direct expression of the wound — what is the character trying to prove or recover?",
            "Where in your current draft is the wound already visible, even if you didn't consciously put it there?",
          ],
          note: "Use the most resonant response as your character's core wound — but test it against what you have already written. The best wound is the one that makes sense of behavior you've already put on the page without knowing why. If the AI's wound explains things in your draft that previously puzzled you, that is the right wound. Write it into the backstory not as a stated fact but as a presence: the event that explains everything and is never mentioned.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Motivation Test",
      blocks: [
        {
          type: "tip",
          icon: "⚙",
          name: "Does Every Action Serve the Want, the Need, or Both?",
          paragraphs: [
            "For every major action your protagonist takes in a draft, ask: does this action serve their stated want, their deeper need, or both? If the action serves neither — if you cannot trace it to either layer of the character's motivation — it is probably a plot convenience rather than a character choice, and the reader will feel it as unconvincing behavior even if they cannot name why.",
            "The most powerful actions are those that serve the want while simultaneously betraying the need — or that seem to serve the want but actually move the character, without their knowing it, toward what they need. These double-valenced actions are the moments where plot and character are fully integrated: where what happens and who it happens to are inseparable. Build toward them.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What Getting It Taught You",
      blocks: [
        {
          type: "journal",
          title: "What Getting It Taught You",
          question:
            "What have you wanted in your life that you worked very hard to get — something you pursued with genuine effort and at real cost? What happened when you got it, or when you didn't? And looking back now: what did you actually need at that time, that the wanting was serving as a substitute for? What was the wound that generated the want? You don't have to answer all of these questions cleanly. The interesting material is usually in the place where the answer won't come.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The writers who build the most resonant characters are almost always working, at some level of awareness, with their own experience of the gap between want and need. Not autobiographically — the character does not have to share your situation — but structurally: the shape of the gap, the specific way that pursuing a want can be a form of avoiding a need, is something you understand from the inside. That understanding is the raw material the framework gives you a way to use.",
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
            "By the end of this week, you should have: written a scene in which both the want and the need are simultaneously visible without either being stated; completed the coordination/subordination exercise and confirmed which of your compound sentences are coordinated by choice; read the McKee chapter and applied its framework to a character you are developing; and used the AI workshop to locate the wound that generates your protagonist's want.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 11",
          paragraphs: [
            "Week 11 introduces dialogue — the craft of rendering speech on the page as something other than transcription. Fictional dialogue is not what people actually say; it is a highly compressed, rhythmically shaped, dramatically loaded version of speech that is always doing at least two things at once. You will study the techniques of realistic dialogue, the mechanics of the said/asked convention, and how subtext — which you studied in Week 6 — operates specifically within the spoken word.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: the want is what you give readers to follow. The need is what you give them to feel. A story with only a want is a plot. A story with only a need is a mood. The gap between them is the story — and it must be maintained, deepened, and only partially resolved until the very last pages earn their resolution.",
          ],
        },
      ],
    },
  ],
};
