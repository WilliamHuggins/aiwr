import type { WeekData } from "@/lib/mfa/types";

export const week11Data: WeekData = {
  weekNumber: 11,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Genre-Specific Advanced Study — The Long Form's Special Problems",
  emphasizedWord: "The Long Form",
  deck: "This week provides genre-specific deep study for all three tracks. Literary fiction writers focus on the novel as a form with its own particular craft problems — sustaining tension over 80,000+ words, managing the middle chapters where so many novels collapse, and developing a governing structure that can bear the weight of a book-length argument. Screenwriters study the TV pilot and series bible. CNF writers study the architecture of the book-length memoir.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "47 of 108" },
    { label: "Craft Focus", value: "Genre-Specific Study" },
    { label: "Grammar", value: "Phase 4 · Anaphora" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What Only Long Form Can Do — and What Can Destroy It",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every form has problems native to its scale. The short story's central problem is compression: how to establish enough in so little space that the ending can carry the weight of everything before it. The scene's problem is architecture: entry, complication, turn, exit — and the difficulty of executing all four without any one collapsing. The long form's problem is duration: how to sustain the reader's investment across time and pages, how to make a work that cannot be read in a single sitting feel as urgent at page 200 as it did at page one, how to prevent the narrative energy generated in the opening from dissipating in the middle before it reaches the ending where it is needed most.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Long form — the novel, the narrative screenplay, the book-length memoir — is the only literary form that can do certain things: accumulate the full weight of a life, track the slow mutation of character across years, build thematic argument through the gradual collision of dozens of scenes, give the reader the specific experience of living inside a world for an extended time. These capacities are the long form's unique gifts. They are also the source of its unique dangers. The same duration that allows accumulation allows stagnation. The same scale that permits thematic development permits thematic diffusion. The same length that makes the reader feel they have ",
            { text: "inhabited", emphasized: true },
            " a world can make them feel they have been trapped in one.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "In any long-form draft, at each scene transition ask: is the situation at the end of this scene more difficult, more urgent, or more complicated than at the beginning? If not, the scene has maintained rather than escalated. Maintenance is the structural enemy of long-form prose.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Track A — Literary Fiction: The Novel's Long Middle",
          paragraphs: [
            "The novel's central structural challenge — the 'saggy middle' — is not a failure of imagination but a structural problem with a structural solution. The middle of a novel must do several things simultaneously: deepen character (we understand the protagonist differently at page 150 than at page 50), raise narrative stakes (what was at risk at the beginning is now at greater risk), introduce complications that make the resolution less certain, and develop the thematic argument through accumulation. The most common middle failure is a series of scenes that maintain rather than escalate. Each scene exists; each scene is competent; each scene does not change anything. The situation at the end of the middle section looks essentially like the situation at the beginning. The reader has not moved.",
            "The structural solution is the escalation check: at every scene transition in the middle, ask whether the situation at the end of the scene is more difficult, more urgent, or more complicated than at the beginning. Not more plot — more difficulty, more urgency, more complexity. The scene that brings the protagonist closer to what they want is an escalation. The scene that reveals a new obstacle is an escalation. The scene that forces a choice between two previously equal options is an escalation. The scene that simply shows what the protagonist is doing this Tuesday is maintenance — and maintenance is what the middle must refuse.",
            "The chapter ending is the novel's middle management device: every chapter break is a place where the reader can stop reading. The chapter that ends on resolution — tension released, situation settled — creates no pull toward the next chapter. The chapter that ends on suspension — a question raised, a situation changed, an image that requires completion — creates the pull that carries the reader forward. The chapter-end test: read the last three sentences of every chapter in the current draft. Does any of them deflate tension, summarize action, or settle into comfort? Those are the chapter endings to revise.",
          ],
        },
        {
          type: "card",
          title: "Track B — Screenwriting: The TV Pilot and Series Bible",
          paragraphs: [
            "A TV pilot must accomplish more than a feature film's first act: it must establish a world, a protagonist, a premise, a tone, a recurring dramatic problem, and the suggestion of the series's long-term potential — all in approximately 45 to 58 pages for a drama, 22 to 30 for a comedy. The pilot's structure differs fundamentally from a feature's. In a feature, the protagonist is transformed by the end of the third act. In a pilot, the protagonist is revealed — we understand who they are and, crucially, why they will keep failing to transform in ways that generate future episodes. The pilot's ending is not the character's resolution; it is the show's promise: this is the dynamic that will produce drama indefinitely.",
            "The *Breaking Bad* pilot is the genre's teaching text for this reason: by the end of its 58 pages, the viewer knows Walter White's want (dignity and financial security for his family), his need (to be seen as exceptional), the lie he believes (that he is owed more than he has been given), and — in his transformation from passive chemistry teacher to man who cooks meth — the specific form his continuing failure to resolve these tensions will take. The show does not resolve the pilot; it uses the pilot to establish the engine that will run for five seasons.",
            "The series bible — the document that describes the show's world, recurring characters, season arcs, and long-term potential — is the writer's proof that the premise is sustainable. A great pilot premise that cannot generate 60 episodes is a movie, not a TV show. The series bible forces the writer to think beyond the pilot to the long-form question: what keeps generating story? For the thesis pilot this week, the bible does not need to be complete — but the writer should be able to articulate: what is the show's recurring dramatic situation, what prevents it from resolving, and what would a second season look like?",
          ],
        },
        {
          type: "card",
          title: "Track C — Creative Nonfiction: The Book-Length Memoir",
          paragraphs: [
            "The memoir's book-length challenge is different from the essay's. A single essay can hold one governing question and drive it to a conclusion in 5,000 words. A memoir must sustain a narrator's voice and inquiry over 200 pages or more, organize material that may span decades, maintain the reader's investment in a narrator whose outcome the reader suspects or knows, and arrive at a final understanding that feels earned by the journey rather than imposed on it. Mary Karr's formulation is the most useful available: 'A memoir is a true story told to make a point that matters.' The point that matters is the governing theme; the true story is its evidence.",
            "The structural question for the book-length memoir is the same question that faces any long form: what keeps the reader turning pages when the destination is already known? The answer is not suspense about outcome — it is investment in the narrator's understanding. The reader of a memoir keeps reading because they want to see how the narrator comes to understand what happened, not merely what happened. This means the memoirist's relationship to the material must change across the book's length. The narrator who begins and ends in the same relationship to their subject — same distance, same understanding, same emotional position — has not written a memoir; they have written a report.",
            "The book-length memoir's structural options: linear chronological (the most transparent form, and the hardest to sustain because it offers no structural surprises); thematic organization (scenes and periods arranged by subject rather than time, creating a meditative rather than narrative arc); braided (alternating between two or more time periods or registers, each illuminating the other by juxtaposition); and hybrid forms that combine chronology with lyric digressions or research sections. The choice of structure should be determined by the material's nature: does the story gain power from its chronology, or is there a thematic or associative order that would reveal more?",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What All Three Tracks Share",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The novel's governing structure must be able to bear the weight of a book-length argument — it must have enough tensile strength to hold 80,000 words of material without the architecture collapsing under its own weight. Bell's *Narrative Design* chapters on the novel provide the most analytically precise vocabulary for diagnosing the specific structural failures of book-length fiction. For this week's exercise: write a middle chapter that escalates without resolving — one that ends the situation in a demonstrably worse, more complicated, or more urgent position than it began, with no false resolution.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The TV pilot study text this week is the *Breaking Bad* pilot script, available free online. Read it for how Vince Gilligan establishes world, character, premise, tone, and long-term potential in 58 pages — and specifically for how the pilot's ending is not a resolution but a promise. For the exercise: write the cold open and first act of a pilot, attending to how quickly the world is established and how precisely the protagonist's recurring dramatic problem is introduced. For playwrights, the equivalent exercise is the opening scene of a play that establishes its world's rules, its central tension, and its theatrical mode — all in the first ten pages.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Mary Karr's *The Art of Memoir* is the week's primary reading for CNF writers — specifically Chapters 1–4, which address the memoirist's relationship to truth, memory, and the material's organization. For the exercise: write a structural plan for the memoir (what are its sections, in what order, organized by what principle — chronology, theme, or braid?) alongside an opening chapter of 500 words that establishes the narrator's voice, the material's emotional register, and the governing question that will organize the reader's experience across the book's length.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 · Topic 2 — Anaphora: Deliberate Repetition at the Beginning",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 46 of 60 — Anaphora: Insistence, Momentum, and the Rhetoric of Return",
          intro: [
            "Anaphora repeats the same word or phrase at the beginning of successive clauses or sentences. Churchill's wartime speeches are its canonical political example: 'We shall go on to the end. We shall fight in France. We shall fight on the seas and oceans. We shall fight with growing confidence and growing strength in the air.' King's 'I Have a Dream' is its canonical American example. Dickens opens *A Tale of Two Cities* with it across eight successive clauses. Baldwin deploys it in the essays of *Notes of a Native Son* to build rhetorical pressure that becomes moral argument.",
            "The effect is accumulation, insistence, and a quality that might be called rhetorical inevitability: the repeated opening word or phrase says, in its formal repetition, that this is too important for variety, that the same thing keeps being true from different angles, that the claim being made is not finished until the accumulation is complete. Anaphora is a figure of emphasis. It does not vary; it insists. And because it insists, it should be used sparingly — once in a chapter, perhaps once in an essay, in a moment where insistence is the right register and the accumulation is genuinely building toward something.",
          ],
          rule: "Anaphora earns its repetition when the repeated element accumulates meaning across the series — when each instance adds a dimension to the claim that the previous instances did not contain, so that the series is more than the sum of its parts. Anaphora fails when the repeated element is decorative — when the successive clauses say the same thing from slightly different angles without building toward a conclusion that only the accumulation could reach. The test: after the final instance, has the reader arrived somewhere that the first instance could not have delivered alone? If yes, the anaphora is earning its repetition. If no, the repetition is ornament.",
          examples: [
            {
              label: "Anaphora building through accumulation to arrive somewhere the first instance couldn't",
              text: "'She had learned to be quiet in rooms where men were speaking. She had learned to make herself small in kitchens where dinner was being prepared. She had learned, across years of careful practice, to take up exactly as much space as was left for her.' [Three clauses beginning with 'She had learned.' The first two instances establish the pattern; the third breaks it slightly ('across years of careful practice') and delivers the weight the accumulation has been building toward: 'to take up exactly as much space as was left for her.' The final clause could not carry its full weight without the two that precede it.]",
            },
            {
              label: "Anaphora in the opening — insistence as contract",
              text: "Baldwin's opening to 'Notes of a Native Son': 'On the 29th of July, in 1943, my father died. On the same day, a few hours later, his last child was born.' [This is a two-instance anaphora using 'On the' — barely qualifying as the figure, but establishing the essay's fundamental structural and moral argument in two sentences: death and birth on the same day, the same day, the insistence of the repetition performing the insistence of the fact's meaning.]",
            },
            {
              label: "The decorative failure — and its correction",
              text: "Failing: 'She was tired of the arguments. She was tired of the silence. She was tired of the whole situation.' [Three clauses, three instances of 'She was tired of' — but the three items (arguments, silence, situation) are not accumulating; 'situation' is merely a catch-all that deflates the specificity of the first two. The anaphora is not building.] Corrected: 'She was tired of the arguments. She was tired of the silence that followed them. She was tired, most precisely, of the sound of her own voice still rehearsing both.' [The third instance completes the accumulation by arriving at the most specific and most damaging truth, which only the first two prepared the reader to receive.]",
            },
            {
              label: "Anaphora in long-form prose — the chapter-level figure",
              text: "In long-form prose, anaphora can operate at the paragraph level: successive paragraphs beginning with the same phrase create a rhetorical structure that organizes the reader's experience of an argument or a sequence of events. Morrison uses this in *Beloved*; Baldwin uses it in essays. The figure at this scale requires that each paragraph, like each clause, accumulate — that the series of paragraph openings is moving toward a conclusion that only the full accumulation can support.",
            },
          ],
          outro: [
            "The connection between anaphora and this week's long-form focus is the connection between accumulation at the sentence level and accumulation at the manuscript level. Anaphora works because each repetition adds weight to the ones before it, so the series arrives at a conclusion that is more than any single instance could deliver. The long manuscript works by the same logic: each scene, each chapter, each section adds weight to the ones before it, so the ending arrives with a force that the opening, alone, could not have generated. The figure and the form share a principle.",
            "The exercise this week applies that principle directly: write a six-sentence anaphoric passage on a subject from your thesis. The repeated element should feel earned and necessary — it should be a repetition that insists because the thing being said demands insistence, not a repetition chosen because it sounds literary.",
          ],
          exercise:
            "Write a six-sentence anaphoric passage on a subject from your thesis — a character, a situation, an image, a governing question. The repeated element (the word or phrase that begins each sentence) should be chosen because the material genuinely calls for insistence. After writing, apply the earning test: after the final sentence, has the reader arrived somewhere the first sentence could not have delivered alone? If not, either the repeated element is wrong, or the series is not accumulating — revise until it is. Then locate one moment in your current thesis draft where anaphora could replace a passage of flat accumulative prose — a moment where insistence is the right register — and try the figure there.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Texts — By Track",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "LF",
              title: "Narrative Design, novel chapter + Refuse to Be Done, novel revision section",
              author: "Madison Smartt Bell / Matt Bell",
              href: "https://bookshop.org/p/books/refuse-to-be-done-matt-bell/17468310",
              note: "Purchase (both continuing from earlier weeks). Bell's novel chapter provides the most analytically precise vocabulary for the novel's structural challenges — specifically the middle. Matt Bell's novel revision section applies the structural pass framework to the specific problems of book-length fiction: what to look for in a structural revision of a novel that is different from a structural revision of a story. Read both with attention to the escalation principle and the chapter-end test.",
              badge: "Purchase",
            },
            {
              number: "SP",
              title: "Breaking Bad pilot script + Writing the TV Drama Series, Chapters 1–3",
              author: "Vince Gilligan / Pamela Douglas",
              href: "https://www.imsdb.com/scripts/Breaking-Bad.html",
              note: "Pilot script free online; Douglas purchase. Read the Breaking Bad pilot for how world, character, premise, tone, and series potential are established in 58 pages — and specifically for how the pilot ends not with transformation but with revelation and promise. Douglas Chapters 1–3 provide the vocabulary for pilot structure and series bible construction: what is the show's recurring dramatic problem, what prevents it from resolving, and how does the pilot establish both?",
              badge: "Free / Purchase",
            },
            {
              number: "CNF",
              title: "The Art of Memoir, Chapters 1–4",
              author: "Mary Karr",
              href: "https://bookshop.org/p/books/the-art-of-memoir-mary-karr/6697453",
              note: "Purchase. Karr's first four chapters address the memoirist's most fundamental challenges: the relationship between memory and truth, the narrator's relationship to the material, the ethics of writing about living subjects, and the structural question of how to organize 200 pages of true material so that the reader's experience of the book is as shaped and meaningful as their experience of the best fiction. Read with the structural questions in mind: what is the governing theme, and what is the structural principle that organizes the evidence?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Long-Form Genre Exercise + Thesis Session 11",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Genre-Specific Long-Form Exercise (1,000 words + 200-word analysis): Write in the mode specific to your track.",
            "LF Writers: Write a middle chapter — not the opening chapter, not the climax, but a chapter from the middle of your thesis novel or story collection — that escalates without resolving. At the end of the chapter, the situation must be demonstrably more difficult, more urgent, or more complicated than at the beginning. No false resolution. The chapter should end on suspension, not settlement. After writing, note in the 200-word analysis: what has escalated, and what is the specific mechanism of the escalation — is it a new obstacle, a deepened complication, a forced choice?",
            "SP Writers: Write the cold open and first act of a TV pilot — your thesis pilot or a new premise. The cold open (before the title card) should establish the show's world and tone in its first few pages. The first act should introduce the protagonist, establish their recurring dramatic problem, and end on an act break that makes the second act inevitable. After writing, note in the 200-word analysis: what is the show's recurring dramatic problem, and what prevents it from resolving?",
            "CNF Writers: Write a structural plan for your memoir (one page: what are its sections, in what order, organized by what structural principle — chronological, thematic, braided, or hybrid?) plus an opening chapter of approximately 500 words that establishes the narrator's voice, the material's emotional register, and the governing question the book will investigate. After writing, note in the 200-word analysis: what structural principle did you choose and why is it the right vessel for this material?",
            "Part Two — Thesis Session 11 (1,500–2,000 words): Write the next section of the thesis. Before the session, apply the escalation check to the three most recent thesis sessions' pages: does each session's new material end in a position more difficult, urgent, or complicated than it began? Record the assessment in the session log.",
          ],
          target: "1,000 words (genre exercise) + 200-word analysis + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 46 — The Long-Form Diagnostician",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Describe your thesis project in detail: genre, premise, structure, current word count, what you have written so far, and where you feel the project is most at risk. The AI's task is to identify the three most likely structural problems this specific project will face at book length — not generic problems of the form, but problems generated by this project's specific premise, structure, and where it currently sits.",
          prompt:
            "I am going to describe my thesis project in detail. Based on this description, identify the three most likely structural problems this project will face at book length. For each problem: (1) describe what the failure mode looks like — what the writer will notice when it's happening, what the reader will experience when the failure has occurred; (2) explain the cause of the failure at the architectural level — is it a problem of escalation, of governing structure, of the middle's relationship to the ending, of character arc, or something else; (3) propose one specific structural strategy to address the problem, drawn from the craft considerations specific to this genre. Here is my thesis project: [describe your genre, premise, current structure, word count, and where you feel most at risk].",
          questions: [
            "Of the three structural problems the AI identifies, which is the one already present in your current draft — which failure mode can you already see happening in the pages you have written? Is it the escalation failure (scenes maintaining rather than escalating), the middle collapse, the governing structure's inability to bear the material's weight, or something the AI identified that you had not named?",
            "The AI's first structural strategy: is it a strategy you have already tried, or one you have not considered? If already tried and insufficient, what did it fail to address — what does the AI's description of the failure mode suggest about why the strategy fell short?",
            "For your specific genre track: does the AI's diagnosis match the track-specific lecture content? For LF writers, is the escalation check the right diagnostic, or is the AI identifying a different structural mechanism? For SP writers, is the pilot's dramatic problem clearly enough defined in your description? For CNF writers, is the structural principle clear to the AI from your description, or does the AI's difficulty identifying it signal that it needs clarification?",
            "Apply the AI's three failure modes as a prospective audit: for the next three thesis sessions, track whether the escalation check is being passed at each scene or section break. Record the audit in the session log.",
          ],
          note: "The long-form diagnostician exercise uses the AI in its most productive mode for book-length work: as a structural reader who is assessing architectural risk rather than sentence quality. The writer who can name their project's three most likely structural failure modes before they occur is the writer who can watch for them and address them while there is still time. The AI's diagnosis is a hypothesis, not a verdict — but the hypothesis is most useful when it is specific to this project's material and structure, not when it is generic to the form.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Escalation Check",
      blocks: [
        {
          type: "tip",
          icon: "📈",
          name: "Every Scene Transition in a Long Manuscript Must Escalate",
          paragraphs: [
            "In any long-form draft, at each scene transition ask: is the situation at the end of this scene more difficult, more urgent, or more complicated than at the beginning? Not more plot — more difficulty, more urgency, more complexity. The scene that shows the protagonist doing something that does not change the situation, deepen the problem, or force a choice between previously equal options is a maintenance scene — and maintenance is the structural enemy of long-form prose. The reader who finishes chapter after chapter without the situation having changed has experienced the saggy middle, and no amount of beautiful prose in those chapters will prevent them from feeling it.",
            "The chapter-end test is the escalation check applied at the chapter level: read the last three sentences of every chapter in the current draft. Does any of them deflate tension, summarize action, or settle into comfort? Does any of them release the reader from the forward pull rather than sustaining it? Those are the chapter endings to revise. The chapter that ends on suspension — a question raised, a situation changed in a direction whose implications are not yet clear, an image that requires completion — creates the pull that carries the reader forward into the next chapter. Long-form momentum is built chapter-end by chapter-end, scene by scene, and each transition is a structural decision.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You Most Fear About Writing at Book Length",
      blocks: [
        {
          type: "journal",
          title: "What You Most Fear About Writing at Book Length",
          question:
            "What do you most fear about writing at book length — not about the thesis as an obligation or a grade, but about the experience of trying to sustain a work of this scale? Is it the middle, where the initial energy of the opening has exhausted itself and the resolution is still too far away to provide pull? Is it the structure, the worry that the architecture will not hold what you need it to hold? Is it the commitment — the sustained attention to a single world that book-length work requires, the giving over of months or years to a single set of questions? Or is it something more specific to your project, some element of the material that you have not yet been willing to approach at full length? Name the fear precisely and write about it for fifteen minutes. The fear is usually pointing at the work's center of gravity — at the part that matters most and therefore frightens most.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is a diagnostic of the writer's relationship to the long form as a psychological and creative challenge. The fears writers name are usually accurate: the writer who fears the middle has a real structural problem to address, the writer who fears the commitment has a real relationship question to examine, the writer who fears approaching a specific element of the material is usually circling that element's importance. Naming the fear precisely is the first step toward converting it from a source of avoidance into a source of understanding.",
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
            "By the end of this week you should have: completed the genre-specific long-form exercise (LF: escalating middle chapter; SP: cold open and first act; CNF: structural plan and opening chapter) with 200-word structural analysis; written 1,500–2,000 words of thesis in Session 11 with the escalation check applied to the three most recent sessions' pages and recorded in the log; read the track-specific readings (LF: Bell/Matt Bell; SP: Breaking Bad pilot and Douglas; CNF: Karr Chapters 1–4); completed the AI long-form diagnostician exercise and applied the three failure modes as a prospective audit; written the six-sentence anaphoric passage with the earning test applied; identified one place in the thesis draft where anaphora could replace flat accumulative prose; and named the specific fear about writing at book length.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 12",
          paragraphs: [
            "Week 12 is The Thesis Proposal — Articulating What You're Going to Write. The thesis proposal is not a formal academic document but an act of creative self-knowledge: a writer articulating as precisely as possible what they intend to write, why this material demands book-length treatment, what form the work will take, and what the governing question is. Week 12 produces the full first draft of the thesis proposal — the document that will serve as the compass for the remaining two and a half years of the program.",
          ],
        },
      ],
    },
  ],
};
