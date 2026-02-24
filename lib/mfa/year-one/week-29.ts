import type { WeekData } from "@/lib/mfa/types";

export const week29Data: WeekData = {
  weekNumber: 29,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Syntax & Sentence-Level Craft — The Sentence as Artistic Medium",
  emphasizedWord: "The Sentence as Artistic Medium",
  deck: "Everything in the sentence — its length, its structure, its rhythm, its sound — is available as artistic material. This week formally integrates the grammar curriculum with the craft curriculum. The sentence is not the vehicle for meaning. It is meaning.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Syntax as Art" },
    { label: "Grammar", value: "Revision with the Full Phase 2 Toolkit" },
    { label: "Exercise", value: "700+ words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Three Syntactic Worlds",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every craft topic this year has, at some level, been about the sentence. Showing versus telling is a sentence-level phenomenon: the difference between 'she was angry' and 'she set the coffee cup down without looking at him' is a difference in what the sentence does, in what it renders and what it withholds. Psychic distance moves through sentence-level choices: the shorter, more direct sentence closes in; the longer, more formally complex sentence opens space between narrator and character. Voice lives in the sentence — in characteristic lengths, diction registers, opener habits, punctuation choices. This week makes that dependence explicit: the grammar curriculum and the craft curriculum formally converge, and the lesson is that every syntactic choice is an artistic choice, whether the writer knows it or not.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Three writers make that lesson most visible through contrast. Virginia Woolf, Cormac McCarthy, and James Baldwin have almost no syntactic features in common — their sentences sound nothing alike, proceed on entirely different rhythmic principles, and create entirely different reading experiences. Yet all three are recognized immediately, by any careful reader, as among the most accomplished prose stylists in the language. Their difference from each other is not a difference in quality. It is a difference in ",
            { text: "what the syntax is doing", emphasized: true },
            " — what the formal choices are in the service of, and how completely those choices enact the writer's specific way of understanding the world.",
          ],
        },
        {
          type: "pullquote",
          quote: "Woolf's sentences slide. McCarthy's sentences accumulate and then stop. Baldwin's sentences build pressure until they break open. Each syntax is a theory of consciousness.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Syntactic Worlds",
          paragraphs: [
            "Virginia Woolf: The sliding sentence. Woolf's prose is characterized by continuous, fluid motion — sentences that begin in the external world and arrive, without transition, in a character's consciousness. The defining technical features are FID (free indirect discourse), the comma as a rhythmic glide rather than a structural pause, the participial phrase that adds without stopping, and the sustained present-tense feel even in past-tense narration. Woolf's syntax enacts a theory of consciousness as perpetual motion: the mind does not rest; it moves between the outer world and the inner, between perception and memory, in a flow that the sentence form replicates. The sentence that slides is the sentence of a mind that cannot and will not stop.",
            "Cormac McCarthy: The accumulating sentence and the full stop. McCarthy's prose operates on extreme contrast: long paratactic sentences (coordinated by 'and' with minimal punctuation, refusing subordination and its implied hierarchy of causation) followed by very short declarative sentences that arrive with the weight of everything accumulated before them. McCarthy uses almost no commas and almost no subordination — his prose refuses the cause-and-effect logic that subordinating conjunctions imply, presenting events as sequential rather than causal. 'They rode on. He said nothing.' This syntax enacts a theory of the world as things that happen, without explanation, in sequence — a world where causation is either absent or inscrutable, and where the short declarative sentence is the form of irreducible fact.",
            "James Baldwin: The periodic sentence as pressure and release. Baldwin builds long periodic structures — subordinate clause upon subordinate clause, qualification upon qualification, the main clause delayed and delayed and delayed — until the sentence arrives at its center with the full weight of everything that has been accumulated. The periodic structure is the syntax of argument: Baldwin's sentences build a case, accumulate evidence, refuse to arrive until the case is complete. When the main clause finally lands, it carries the entire weight of the preceding build. This syntax enacts a theory of moral seriousness: the truth must be earned through the full complexity of its context; it cannot be stated baldly without the freight of everything that makes it true.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The master sentence analysis — this week's exercise — is an act of structural reverse-engineering. You choose one sentence of forty or more words from a writer you admire, and you take it apart: identify its grammatical structure, find its kernel sentence, trace every free modifier and its relationship to what it modifies, read it aloud for rhythm, rewrite it as three short sentences and observe what the disassembly loses. The goal is not to reproduce the sentence or to imitate its style. The goal is to understand, at the level of the clause, ",
            { text: "exactly what the sentence is doing", emphasized: true },
            " — and to write your own sentence that does something structurally similar, applied to entirely different material.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Syntax Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, syntax is the most intimate level of the writer's relationship with their material — more intimate than structure, more intimate than character, more intimate than subject. The sentence-level choices are where the writer's consciousness is most directly present on the page, and where the reader feels most immediately the quality of attention that is being paid. The syntactic stylists who have most influenced contemporary literary fiction — Woolf, McCarthy, Baldwin, Morrison, Didion, Carver — are distinguished not by what they write about but by the formal properties of the sentences in which they write about it. The writer who studies their sentences is studying their epistemology: their theory of how the world is knowable and what knowing it costs.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting prose has its own syntactic discipline, distinct from literary prose: action lines are conventionally written in present tense, active voice, and relatively short sentences. But the best screenwriters develop recognizable sentence-level styles within those constraints — Shane Black's parenthetical asides, Charlie Kaufman's recursive self-interruptions, Aaron Sorkin's declarative-then-qualification rhythm. Playwright dialogue is syntactically the most complex territory: each character's speech patterns must be distinctly their own, and a skilled playwright can characterize entirely through the syntax of a character's sentences — whether they complete their thoughts, how they handle interruption, whether their sentences are subordinating or paratactic. Pinter's characters speak in fragments and interruptions; Stoppard's in elaborate periodic periods. The syntax is the character.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In CNF, the relationship between syntax and meaning is most legible in the essay — which is, etymologically, an attempt, and whose syntax often performs the quality of the attempt. Didion's fragmented syntax performs anxiety and disorientation. Baldwin's periodic syntax performs moral seriousness and the need to hold complexity before arriving at judgment. Annie Dillard's syntax performs the movement of a mind attending very closely to a small thing and then suddenly discovering its large implications. The essay's syntax is its intelligence made visible: the way the sentences move is the way the mind moves through its inquiry. A writer who wants to understand how to write a particular kind of essay should study the syntax of the best essays in that mode with the same attention a poet brings to prosody.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Revising for Sentence Variety — The Full Toolkit",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 29 of 60 — Revising for Sentence Variety: The Full Phase 2 Toolkit",
          intro: [
            "This is the applied revision exercise that confirms whether Phase 2 has been internalized as a toolkit rather than as a checklist. You take two pages of your strongest writing from the semester and revise them using the complete Phase 2 vocabulary — not by consulting the list and inserting forms, but by reading for where the prose is falling short of its potential and applying the specific tool that addresses each shortcoming.",
            "The full Phase 2 toolkit: cumulative sentence (coordinate, subordinate, and mixed patterns); periodic sentence (delayed main clause); balanced sentence (rhetoric of twos); tricolon (rhythm of threes); sentence variety and rhythm (length distribution); short sentence as power tool; one-sentence paragraph; rhythm-conscious paragraph; extended cumulative sentence. Nine tools. The revision task is to ensure that two pages of your best writing use the full range — that no single form dominates to the point of monotony, and that the forms present are there because they serve the content of the moment where they appear.",
          ],
          rule: "The revision goal is not to maximize the number of Phase 2 forms present — it is to ensure that no sentence is doing less than it could. Two consecutive sentences of the same approximate length should be the exception, not the rule. At least one periodic, one cumulative, one very short power sentence, and one balanced sentence should appear per page. Annotate every revision: name the form and identify why the original version was not serving its moment as well as the revision.",
          examples: [
            {
              label: "Before revision — serviceable but undifferentiated",
              text: "She walked through the house one last time. She checked each room. The furniture was still there. Nothing had been moved. She had expected it to look different, but it didn't. She closed the door behind her.",
            },
            {
              label: "After revision — full toolkit applied",
              text: "She walked through the house one last time, checking each room in the particular way she had always checked rooms — methodically, touching the doorframes, looking up at the corners — as though the house might have changed in her absence and she needed proof that it hadn't. [Cumulative, mixed pattern] The furniture was still there. [Short power sentence — stillness after motion] Nothing had been moved: not the lamp her mother had placed thirty years ago in the exact position that drove everyone who lived with her slightly insane; not the chair nobody sat in; not the box in the hallway that had been waiting to be unpacked since 1987. [Periodic structure leading to tricolon — each item in the list carrying its weight] She had expected it to look different. [Short sentence — the expectation stated cleanly] It didn't. [One-sentence paragraph — the disappointment of the expectation, isolated]",
            },
            {
              label: "Annotation of the revision",
              text: "Sentence 1: Cumulative, mixed pattern — the base clause extended by a participial phrase and then a subordinate modifier. Replaces two short sentences with a single sentence that enacts the methodical quality of the checking. Sentence 2: Short power sentence — retained from original, now lands harder after the long cumulative. Sentence 3: Periodic leading to tricolon — the 'not...not...not' structure builds the list of unmoved things with increasing specificity and irony. Sentence 4: Short sentence — the expectation stated without ornament. Sentence 5: One-sentence paragraph — the single word 'It didn't' carries the full weight of the preceding accumulation.",
            },
          ],
          outro: [
            "The annotated revision is the most honest self-diagnostic available: it makes visible not just what you changed but why, and it forces you to name the tool you used and the problem it solved. A revision without annotation may produce better prose; an annotated revision produces both better prose and a clearer understanding of what made the original prose weaker.",
            "Note: the revision should not feel like a grammar exercise when complete. The forms should disappear into the prose, serving the content rather than displaying themselves. If a revised passage sounds like a demonstration of sentence types, the forms have not been applied to serve the content — they have been applied to show the forms. Revise back toward invisibility: the form is working when the reader feels the effect without seeing the mechanism.",
          ],
          exercise:
            "Take two pages (approximately 500–600 words) of your strongest writing from this semester. Revise for sentence variety and rhythm using the full Phase 2 toolkit. Annotate every substantive revision: name the form applied, identify the problem in the original version, and note what the revision produces that the original did not. Goal: no two consecutive sentences of the same approximate length; at least one periodic, one cumulative, one very short power sentence, and one balanced sentence per page. When the revision is complete, read the revised version aloud. Where does the prose sound most alive? Where does it still feel undifferentiated? Make one final targeted revision at the flattest point.",
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
              title: "Artful Sentences: Syntax as Style",
              author: "Virginia Tufte",
              href: "https://bookshop.org/p/books/artful-sentences-syntax-as-style-virginia-tufte/6697453",
              note: "Purchase. Read any chapter — Tufte's book is organized by syntactic feature, so choose a chapter on a form you have found difficult or underused in your own writing. Tufte's method is to accumulate examples from published prose, show the feature in use, and let the accumulation do the teaching. Read with a pencil: mark every example that produces a response in you, and note what formal property of the sentence produced it. This book is the most useful single reference for sentence-level study available.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Building Great Sentences, Chapters 1–3",
              author: "Brooks Landon",
              href: "https://bookshop.org/p/books/building-great-sentences-how-to-write-the-kinds-of-sentences-you-love-to-read-brooks-landon/6697453",
              note: "Purchase. Read Chapters 1–3. Landon's book is the most accessible treatment of Christensen's cumulative sentence theory, and these three chapters give the clearest explanation available of why the cumulative sentence is the dominant form of literary prose and what its structural principles are. Read as both craft text and as a return to the first principles of the Phase 2 grammar curriculum — this is where the formal principles the last ten weeks have been practicing come from.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Several Short Sentences About Writing",
              author: "Verlyn Klinkenborg",
              href: "https://bookshop.org/p/books/several-short-sentences-about-writing-verlyn-klinkenborg/6697453",
              note: "Purchase. Read in one sitting — the book is designed to be read this way. Klinkenborg's argument is the opposite extreme from the extended cumulative: he argues for the short sentence as the fundamental unit of attention, for the period as the writer's most powerful tool, for the sentence that earns its length rather than assuming it. His argument is not that all sentences should be short — it is that every sentence should be as long as it needs to be and no longer. Read this immediately before or after Landon: the two books together give the full spectrum of what sentence-level craft thinking looks like.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Master Sentence Analysis",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Analysis (400–500 words): Choose one sentence of forty or more words from a writer you admire — ideally from this week's reading or from one of the three syntactic stylists discussed in the lecture. Copy the sentence out by hand. Then:",
            "(a) Identify its grammatical structure: what type of sentence is it? What is the base clause? How does the sentence branch — left, right, or from the middle?",
            "(b) Find the kernel sentence: stripped of all free modifiers and subordinate clauses, what is the irreducible base?",
            "(c) Identify every free modifier and trace its relationship to what it modifies. For each modifier: is it participial, absolute, appositive, or a relative clause? Does it modify the base clause or a preceding modifier?",
            "(d) Read it aloud for rhythm. Where is the stress? Where does the sentence want to breathe? Where is the point of maximum pressure, and where does it release?",
            "(e) Rewrite it as three short sentences. Read those aloud. What is lost in the disassembly? What is gained?",
            "Part Two — Imitation (300 words): Write one original sentence of forty or more words that uses the same grammatical structure as the sentence you analyzed — the same base clause position, the same pattern of free modifiers, the same relationship between the sentence's length and its rhythm. The content must be entirely your own. The structure is borrowed; everything else is yours. Then write one page (approximately 300 words) of original prose in which that sentence appears, so that the sentence is legible in context rather than as a demonstration.",
          ],
          target: "400–500 words of analysis + 300 words of original prose = 700+ words total",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 29 — The Sentence Diagnosis",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the master sentence analysis and the revision exercise, paste three sentences from your own writing that you consider the most carefully crafted — sentences you labored over, that feel most fully alive, that you would be least willing to cut. Use the prompt below.",
          prompt:
            "I am going to paste three sentences from my own writing that I consider my most carefully crafted. For each sentence, analyze it at the level of syntax and rhythm. Address: (1) Identify the sentence type — what is its grammatical structure? What is its base clause? How does it branch? (2) Assess whether the sentence rhythm serves its emotional content — does the way the sentence moves (its pace, its pauses, its point of maximum stress) match the quality of the experience or idea it is rendering? (3) Suggest one structural change — a revision at the clause level, not the word level — that would increase either clarity or music without significantly changing meaning. Explain why the change serves the sentence. Here are my three sentences: [paste sentences]",
          questions: [
            "For sentence one: does the AI's identification of the grammatical structure match your own analysis? Where do they diverge?",
            "For sentence two: does the AI's assessment of rhythm-serving-content feel accurate — does the sentence move the way the experience it describes moves? If the AI says no, do you agree?",
            "For sentence three: what is the structural revision the AI proposes? Is it a genuine improvement — does it increase clarity or music without losing meaning — or does the proposed change flatten something the original had?",
            "Across all three sentences: what common structural feature do the AI's analyses identify? Is there a characteristic habit of your syntax — a form you reach for, a pattern you repeat — that the analysis makes visible?",
          ],
          note: "The AI's structural revision proposals should be evaluated critically, not applied automatically. The AI can identify when a sentence's structure and its emotional content are misaligned — when a sentence about urgency moves slowly, or a sentence about stillness is syntactically hyperactive. But it cannot always propose the right revision, because the right revision depends on the full context of the passage and on your specific voice. Use the AI's diagnosis to locate the problem; use your own judgment to solve it.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Verb Audit",
      blocks: [
        {
          type: "tip",
          icon: "⚙️",
          name: "Every Verb Is a Choice — Including the Ones You Didn't Make",
          paragraphs: [
            "Search through one page of your prose and circle every verb. Then circle, inside that set, every form of 'to be' — is, was, were, had been, will be, would be. For each 'be' verb: ask whether a more active, more specific verb would serve better. 'The room was dark' describes a state; 'The room held its dark like a secret' enacts the state as a quality of the room's character. 'She was tired' reports a condition; 'She moved through the house without lifting her feet' renders the tiredness in behavior. Not all 'be' verbs should be replaced — sometimes state-of-being is exactly what the sentence needs, and the dynamic verb would over-animate something that should be still. But in most prose, the 'be' verbs outnumber the necessary ones, and each unnecessary one is an opportunity for precision that has been passed over.",
            "The verb is the sentence's engine. Every other element of the sentence depends on it: the subject is who or what the verb acts for; the object is what the verb acts upon; the modifiers qualify how the verb acts. A weak verb produces a weak sentence regardless of how precise its modifiers are. A strong, specific verb can carry a sentence with almost no modification. The verb audit is the single most efficient revision technique for energizing prose at the sentence level.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Copying Out Beauty",
      blocks: [
        {
          type: "journal",
          title: "Copying Out Beauty",
          question:
            "Copy out, by hand — not typed, written — one paragraph of prose that you find unbearably beautiful. It should be a paragraph you return to, that you have read more than once, that produces something in you that you cannot fully account for. Do not choose it for its reputation; choose it for what it does to you when you read it. Write it out slowly, attending to each word, each comma, each sentence ending. Then: what did it feel like to move through those sentences by hand? What did you notice at the speed of handwriting that you had not noticed at the speed of reading? Where did your hand want to slow down? Where did the paragraph make demands of your attention that surprised you?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Copying beautiful prose by hand is one of the oldest learning practices in the literary tradition — it was how apprentice writers learned before the MFA existed, and before the craft essay existed. The hand moves at the speed of understanding, not the speed of reading, and the body's slow movement through another writer's sentences teaches something that analysis cannot: the felt experience of how the sentences are made, not just the intellectual understanding of their structure. This is not copying in the pejorative sense. It is learning by embodiment — the deepest kind.",
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
            "By the end of this week you should have: completed the master sentence analysis — copied a sentence of forty or more words, traced its full grammatical structure, rewritten it as three short sentences to observe what disassembly costs, and written an original sentence using the same structural pattern applied to your own material; revised two pages of your strongest writing using the full Phase 2 toolkit with full annotation; pasted three of your most carefully crafted sentences into the AI diagnosis exercise; read Tufte and Landon and Klinkenborg — the three books that together give the most complete picture of sentence-level craft thinking available; and copied one paragraph of prose you find beautiful, by hand.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 30",
          paragraphs: [
            "Week 30 is Comparison, Imagery, and Figurative Language — The Metaphor. The metaphor is not decoration; it is a mode of thought. We understand the abstract through the concrete, the unfamiliar through the familiar, the invisible through the visible. A well-made metaphor does not illustrate a point — it creates a new understanding that could not be achieved through literal description. Week 30 studies how figurative language works at the level of cognition, the difference between live and dead metaphors, and how to build original figures of comparison. The grammar topic previews Phase 3 with participial, absolute, and appositive constructions.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The formal integration this week has completed a loop that began in Week 1: from the first freewrite, to Phase 1's sentence foundations, through Phase 2's sentence architecture, to this week's recognition that every choice at the sentence level is an artistic choice. The grammar curriculum has not been separate from the craft curriculum — it has been the craft curriculum at its most precise level. Woolf's sliding sentences, McCarthy's paratactic accumulations, Baldwin's periodic pressure — these are not decorative features of their prose. They are the prose. The sentence is the unit of meaning, and the writer who cannot see the sentence is the writer who cannot yet fully control what they are making.",
          ],
        },
      ],
    },
  ],
};
