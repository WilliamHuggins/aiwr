import type { WeekData } from "@/lib/mfa/types";

export const week34Data: WeekData = {
  weekNumber: 34,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Tone, Comedy & the Rhetoric of Laughter",
  emphasizedWord: "The Rhetoric of Laughter",
  deck: "Tone is the writer's implied attitude toward subject and reader — not just the gravity or elegy of serious literary work, but also comedy, satire, absurdism, and wit. This week studies how tone creates the reader's fundamental relationship to the work, and how comedy specifically functions as a narrative and rhetorical instrument. The comic-serious register is one of the hardest tonal challenges in writing, and one of the most powerful when it works.",
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
      title: "The Architecture of Funny",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Tone was introduced in Week 27 as voice's emotional register — the implied attitude of the writer toward their subject and their reader. In that week's context, the relevant tonal registers were gravity, elegy, irony, and detachment. This week extends the vocabulary to include the tonal registers that beginning literary writers most consistently underestimate and misuse: comedy, satire, absurdism, deadpan, and wit. The underestimation is partly a matter of cultural prestige — literary seriousness has higher status in the MFA context than literary comedy — and partly a matter of genuine difficulty: comedy is harder to do well than it appears, and its failure modes are more public and more immediate than the failure modes of serious prose.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Comedy works through the violation of expectation in a safe context. The setup creates an expectation — a pattern, a logical progression, a tonal register — and the punchline, or the comic moment, violates that expectation in a way that feels both surprising and inevitable: surprising because we didn't see it coming, inevitable because in retrospect the violation was always the only place the setup could go. This is, structurally, identical to the serious story's requirement that its ending be ",
            { text: "inevitable and surprising simultaneously.", emphasized: true },
            " The difference is not structural but tonal: comedy frames its violation as play rather than as revelation. The reader who laughs and the reader who is moved are experiencing the same cognitive event — the satisfaction of the unexpected connection — in different emotional registers.",
          ],
        },
        {
          type: "pullquote",
          quote: "The comic-serious register — holding humor and pain simultaneously without letting either cancel the other — is what Chekhov invented and what Munro, Saunders, and Moore have perfected. It is the register in which the most honest writing about human experience tends to live.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Tonal Registers of Comedy — What Each Does",
          paragraphs: [
            "Deadpan: the comedy of understatement and tonal mismatch. The deadpan voice describes absurd, painful, or extreme situations in the same flat, matter-of-fact register it would use for ordinary ones. The humor arises from the gap between the enormity of what is described and the smallness of the register in which it is described. Lorrie Moore is the master of literary deadpan: her narrators describe their situations with a precision that is simultaneously funny and unbearable, because the precision refuses the sentimentality that the situations might otherwise invite.",
            "Satire: the comedy of exposure. Satire uses humor to reveal the gap between how things are presented and how they actually are — between the official story and the real one, between the ideology and the practice. Saunders is the master of contemporary literary satire: his stories expose the machinery of late capitalism, of managed care, of motivational language, of the therapeutic industrial complex, by rendering them with such precision that the exposure is both funny and devastating. Satire requires the writer to hold the satirized thing close enough to understand it and far enough to judge it.",
            "Absurdism: the comedy of the unreasonable made reasonable. Absurdist comedy presents situations that have no rational basis as though they are entirely normal, creating humor through the collision of the absurd premise and the earnest behavior of the characters within it. The comedy does not come from pointing at the absurdity — the characters do not know they are in an absurd situation — but from the contrast between the premise's impossibility and the characters' full commitment to its logic. Kafka is the master of the absurd premise treated with complete earnestness; Saunders's zombies and alien lawn ornaments are his literary descendants.",
            "Wit: the comedy of precision and connection. Wit is the humor that arrives not from situation or premise but from the sentence itself — the unexpected word, the surprising comparison, the observation that articulates something the reader has always felt but never found the language for. Wit is the comedy of intelligence applied to the right detail at the right moment. It is the hardest to teach and the most recognizable in practice: the sentence that is funny because it is exactly right, in exactly the right words, in exactly the right order.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The comic-serious register — holding humor and pain in the same moment without letting either cancel the other — is the tonal achievement of the writers who have most shaped contemporary literary fiction. Chekhov understood that the same situation can be simultaneously funny and heartbreaking, and that choosing between those registers is a falsification: life does not separate them, and neither should literature. The exercise this week — writing a scene on a painful subject in a voice that is undeniably funny — is a practice in that coexistence. The humor should not deny the pain, and the pain should not eliminate the humor. Both must be fully present. That coexistence is one of the hardest things in writing to achieve, and one of the most honest.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Comedy Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary comedy in fiction operates through voice more than through situation — it is the quality of attention brought to the material, the precision of the observation, the unexpected comparison, the deadpan that refuses to signal its own comedy. The comic-serious register is literature's most sophisticated tonal achievement partly because it requires the writer to resist the easiest version of every moment: not to let the humor become deflection, not to let the seriousness become self-pity. Lorrie Moore's 'How to Become a Writer' uses the second-person imperative ('First, try to be something, anything, else') as the deadpan vehicle for a genuine account of creative failure and persistence — the comedy and the pathos are inseparable because they are produced by the same tonal instrument.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Comedic structure in screen and stage is more explicit and more anatomized than in literary fiction: the rule of threes, the callback, the running gag, the escalating embarrassment, the reversal — these are named mechanisms, and the screenwriter or playwright who understands them is in better control of their material. The Annie Hall screenplay is a masterclass in using the comedy of self-awareness (Alvy Singer addresses the camera directly, stops the film to dispute its own representations) as a vehicle for genuine feeling. The comedy is not a defense against the film's emotional seriousness; it is the form through which the seriousness becomes available without sentimentality. For the playwright, comedic timing lives in the line breaks, the stage directions, and the pauses — a pause before 'He said no' is not the same pause as 'He said no' without the pause.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Comedy in memoir is an ethical instrument as well as an aesthetic one: the memoirist who finds the humor in their own suffering is performing an act of perspective-taking that the pure elegy cannot achieve. David Sedaris is the model: his essays are funny about difficult things — his father's emotional unavailability, his own failures and embarrassments, his relationship to his family's dysfunction — and the humor is not a way of avoiding the difficulty but a way of being honest about how the difficulty actually felt, which was often both terrible and ridiculous at once. The memoirist who insists on the pure seriousness of their experience is often, without knowing it, flattering themselves: the person who can laugh at their own worst moments has achieved a perspective that the person who cannot is still too close to the material to have.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Polysyndeton & Asyndeton — Adding or Removing Conjunctions",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 34 of 60 — Polysyndeton & Asyndeton: The Rhetoric of Conjunctions",
          intro: [
            "Polysyndeton and asyndeton are the rhetorical figures that control the relationship between list elements through the presence or absence of conjunctions. Both are named techniques in classical rhetoric; both appear frequently in literary prose; and both create effects that are immediately audible when the passage is read aloud.",
            "Polysyndeton adds a conjunction between every element in a list: 'She washed the dishes and the floor and the curtains and the windows and finally her hands.' The added 'and' at every juncture slows the list, making each item feel weighty, exhaustive, or ritualistic — the reader moves through each element with equal deliberateness, and the accumulation feels endless. Asyndeton removes all conjunctions: 'She washed the dishes, the floor, the curtains, the windows, her hands.' The removal accelerates the list, making the accumulation feel breathless or inexorable — the items arrive in quick succession without pause, and the absence of the final 'and' before 'her hands' creates a full stop that is more emphatic than any 'and' would have been.",
          ],
          rule: "Polysyndeton is the conjunction of exhaustion, ritual, and the weight of many things: it creates the sense that the list could continue, that the accumulation is painful or compulsive or thorough. Asyndeton is the conjunction of urgency, inevitability, and breathless compression: it creates the sense that the list is complete, that each item belongs to an inexorable sequence, that there is no pause between them. Both are rhetorical choices, not grammatical requirements — the standard list style (commas between items, 'and' before the last) is neither. Choose polysyndeton or asyndeton when you want the rhetorical effect one of them creates; use standard style when you want to list without rhetorical emphasis.",
          examples: [
            {
              label: "Polysyndeton — ritual and exhaustion",
              text: "He had told her and her mother and her mother's friends and the neighbors and the people at the office and anyone who would listen, and it had not changed anything. The polysyndeton creates a weary, exhausted quality — the repetition of 'and' is the formal enactment of telling the same story one more time.",
            },
            {
              label: "Asyndeton — urgency and the inexorable",
              text: "He had told her mother, her friends, the neighbors, the people at the office, everyone — and it had not changed anything. The asyndeton accelerates the list to a breathless summary, making the futility land harder at the em-dash break.",
            },
            {
              label: "Polysyndeton — Hemingway, A Farewell to Arms",
              text: "'There were many words that you could not stand to hear and finally only the names of places had dignity.' Hemingway uses polysyndeton throughout — his 'and...and...and' is the paratactic syntax extended: both figures create accumulation without hierarchy, placing things side by side without subordinating one to another.",
            },
            {
              label: "Asyndeton — Caesar, and its rhetorical descendants",
              text: "'I came, I saw, I conquered.' Three verbs, no conjunctions, no explanation of their relationship. The asyndeton creates inevitability: not 'I came and then I saw and then I conquered' (sequence with 'and') or 'Because I came, I saw; having seen, I conquered' (hypotactic causation), but the three verbs as three equal, inexorable facts.",
            },
          ],
          outro: [
            "The relationship between these two figures and this week's tonal topic is direct: polysyndeton and asyndeton are among the sentence-level tools through which tone is created. Polysyndeton's exhausted weight can produce a deadpan comic effect when applied to a situation that doesn't deserve that weight — 'She had eaten and slept and gone to work and come home and eaten again and watched television and gone to sleep and it had been a good day, she thought.' The accumulation of ordinary events with the same conjunction given to each creates a comedy of the undifferentiated, a flatness that is itself the joke. Asyndeton's breathless urgency can create comic effect through inappropriateness — applying the pace of crisis to something completely trivial: 'She found the keys, opened the door, crossed the room, sat down, sighed.' The urgency of the asyndeton and the bathos of the content create a gap that is the source of the humor.",
            "Practice both this week, in both their serious and their comic applications.",
          ],
          exercise:
            "Write a passage that uses polysyndeton in one paragraph and asyndeton in the next. The shift from one to the other should be motivated by a shift in the emotional content: the polysyndeton paragraph should be describing something that feels exhausting, weighty, or ritualistic; the asyndeton paragraph should be describing something that feels urgent, inevitable, or compressed. Then write a third paragraph in which one of the two figures creates a comic effect through deliberate tonal mismatch between the figure's rhetorical weight and the content's triviality (or vice versa). For each paragraph, write one sentence identifying the rhetorical effect the figure produces and why that effect serves the content at that moment.",
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
              title: "Annie Hall screenplay",
              author: "Woody Allen & Marshall Brickman",
              href: "https://www.dailyscript.com/scripts/annie_hall.html",
              note: "Free online. Read for comedic structure and the unreliable narrator of humor: Allen's screenplay breaks the frame constantly — Alvy addresses the camera directly, characters step outside the film's logic to dispute its representations, animated sequences interrupt the realist narrative — and these breaks are not gimmicks but a structural argument about memory, self-deception, and the unreliability of every account we give of our own lives. Apply the four tonal registers: where is the film deadpan? satirical? absurdist? witty? And where does the comedy and the pain coexist without one canceling the other?",
              badge: "Free Online",
            },
            {
              number: "02",
              title: '"How to Become a Writer"',
              author: "Lorrie Moore",
              href: "https://bookshop.org/p/books/self-help-lorrie-moore/7440875",
              note: "Purchase (in Self-Help). Read as a study in how comedic tone in literary fiction operates through voice — specifically the second-person imperative and the deadpan register applied to a genuine account of creative failure and persistence. Map the moments where the comedy and the pathos are most fully simultaneous: where does the humor hurt? Where does the pain become funny? And: what specific syntactic or diction choices produce the deadpan register — what does Moore do at the sentence level that creates the tonal signature?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: '"Me Talk Pretty One Day"',
              author: "David Sedaris",
              href: "https://bookshop.org/p/books/me-talk-pretty-one-day-david-sedaris/6697453",
              note: "Purchase (in Me Talk Pretty One Day). Read the title essay. Sedaris's personal essay voice is the most fully developed comedic CNF voice available: his essays are funny about difficult things without either denying the difficulty or dwelling in it. The specific technique to attend to: how does Sedaris calibrate the distance between the experiencing self (who was embarrassed, humiliated, or confused) and the narrating self (who has perspective, timing, and the ability to find the situation funny in retrospect)? The distance is the comedy. The closeness is where the feeling lives.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Comic-Serious Scene",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene on a painful subject — grief, failure, embarrassment, loss, humiliation, disappointment — in a voice that is undeniably funny.",
            "The constraints: the humor must not deny the pain. The pain must not eliminate the humor. Both must be fully present simultaneously. The scene should not move from funny to serious (or serious to funny) — it should hold both registers at once, the way a good Chekhov story holds them, the way Lorrie Moore holds them, the way the best comedy does.",
            "Avoid the two failure modes: the scene that uses humor as a defense against the painful subject (where the comedy is a way of not looking at the thing directly), and the scene that gestures toward humor but undercuts itself before the joke lands (where the writer doesn't trust the comedy to coexist with the seriousness and keeps qualifying it back toward gravity).",
            "The specific technical challenge: find the detail or observation that is simultaneously the most precise account of the pain and the thing that is genuinely funny. The funniest moments in literary comedy are usually the most precise ones — the specificity is the humor, because precision in the wrong context is inherently comic, and precision in the right context is what makes something hurt.",
          ],
          target: "600–800 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 34 — Queneau's 99 Styles",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This is AI Exercise #2 from the 28-exercise curriculum — one of the most analytically powerful exercises available for understanding what tone actually is at the level of syntax, diction, and detail selection. Write a 200-word neutral anecdote: something that happened, described with complete flatness, no tonal coloring. Then use the prompt below.",
          prompt:
            "I am going to paste a 200-word neutral anecdote — a description of something that happened, written in a completely flat, neutral style with no tonal signal. Rewrite this anecdote in each of the following ten styles, keeping the basic facts identical: (1) darkly funny, (2) satirical, (3) elegiac, (4) absurdist, (5) documentary, (6) romantic, (7) bitter, (8) deadpan, (9) lyric, and (10) farcical. Each rewrite should be approximately 100 words. Here is the anecdote: [paste your 200-word neutral anecdote].",
          questions: [
            "Across the ten rewrites: what elements change in each tonal version? Make a list for each rewrite: what changed in syntax? In diction? In which details were selected and which were omitted? In the pacing? Tabulate the changes — this tabulation is your definition of what tone actually consists of.",
            "Which tonal register produces the version most different from the neutral original? What is it doing that the neutral version could not?",
            "Which tonal register is closest to your natural voice — which rewrite sounds most like something you might write? And which is furthest from your natural voice? What does that distance tell you about your tonal default?",
            "Compare the darkly funny version to the elegiac version and to the deadpan version: where do the three overlap, and where do they diverge? What is the specific difference between dark humor, elegy, and deadpan as tonal registers?",
          ],
          note: "This exercise was inspired by Raymond Queneau's Exercises in Style (1947), in which the same trivial anecdote is retold in ninety-nine different styles. The point is not the anecdote but the styles: by holding the content constant and varying only the tonal and stylistic register, Queneau demonstrated that style is not the servant of content — it is a dimension of meaning in its own right. The AI's ten rewrites perform a similar demonstration. Keep the tabulated analysis from this exercise: it is your most concrete account of what tone is made of.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Tone Drift Alert",
      blocks: [
        {
          type: "tip",
          icon: "🎭",
          name: "When the Voice Migrates Without Permission",
          paragraphs: [
            "Extended drafts often drift in tone — beginning in one register and gradually migrating to another without acknowledgment or intention. The tonal drift is one of the most common and least visible problems in long drafts: the writer who began in irony has, twenty pages later, arrived at earnestness; the writer who began in lyric has arrived in the documentary; the writer who began in dark comedy has arrived in pure grief. None of these migrations is necessarily wrong — tonal development can be one of a piece's governing structural moves — but unintentional drift is different from deliberate development, and the difference is legible to the reader as incoherence.",
            "The diagnostic: reread your current longest draft listening specifically for tone, not for content. When does the voice shift? Is the shift marked — is there a structural signal that the register is changing? If the shift is unmarked and gradual, it is probably drift. Identify which sections are the tonal interlopers: the sections that sound like a different piece of writing rather than a development of the piece they are inside. For each interloping section: decide whether to revise it toward the draft's dominant tonal register, or whether to mark the tonal shift deliberately and make it structural. Both are valid; only the accidental drift is not.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Painful Thing That Is Also Funny",
      blocks: [
        {
          type: "journal",
          title: "The Painful Thing That Is Also Funny",
          question:
            "What painful thing in your life is also, from the right angle, genuinely funny? Not darkly funny in the way that terrible things are abstractly darkly funny, but specifically funny — there is a specific detail, a specific quality of absurdity, a specific gap between what you expected and what happened, that when you describe it to the right person produces actual laughter alongside the recognition that it hurt. What gives you permission to find that angle — what has to have changed, what perspective has to have been achieved, before the funny and the painful can coexist? And: what would it cost to write toward that angle in your work — to find the precise detail that holds both registers simultaneously — rather than toward the pure seriousness that literary writing usually invites?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The permission to find the funny in the painful is not a permission to avoid the pain. It is a permission to be more honest about it — because the experience of most painful things is not pure gravity, and the writing that insists on pure gravity is often, without knowing it, sentimentalizing its subject by purifying it. The memoirist who can be funny about their worst moments has achieved the perspective that the memoir requires to be more than a record of suffering. They have become, in Gornick's sense, the memoirist who can see the narrator from the outside — and the outside view is sometimes funnier than the inside one.",
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
            "By the end of this week you should have: written the 600–800-word comic-serious scene on a painful subject, holding humor and pain simultaneously; read the Annie Hall screenplay for comedic structure and the comedy of self-awareness; read Moore's 'How to Become a Writer' and mapped the sentence-level choices that produce the deadpan register; read Sedaris's 'Me Talk Pretty One Day' for the calibration of distance between experiencing self and narrating self; completed AI Exercise #2 (Queneau's 99 Styles) with the tabulated analysis of what changed in each tonal rewrite; and written the polysyndeton-asyndeton exercise with the comic tonal-mismatch third paragraph.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Weeks 35 & 36",
          paragraphs: [
            "Weeks 35 and 36 complete Year One. Week 35 is the Spring Portfolio Review — a look back across the full year's writing to begin seeing what a manuscript might be emerging from the accumulated exercises, and an introduction to free indirect discourse as the Year Two grammar topic that waits on the other side of this year. Week 36 is Year One's capstone: the revision workshop, the year-in-review, and the thesis opening — the first declaration of what the next two years will build.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "This is the second annual cross-genre synthesis week — the week that steps back from the track-specific focus and asks all three tracks to examine the same craft problem from their respective positions. The first cross-genre week (Week 15) examined space and the scene. This one examines tone and comedy. The next will be Week 34 of Year Two: the ethics of representation. What these weeks share is a commitment to the position that the problems of one form illuminate the problems of the others — that the screenwriter who understands why comedic structure works has understood something about why literary fiction's serious structure works, because they are the same cognitive event in different registers.",
          ],
        },
      ],
    },
  ],
};
