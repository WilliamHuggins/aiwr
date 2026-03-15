import type { WeekData } from "@/lib/mfa/types";

export const week30Data: WeekData = {
  weekNumber: 30,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Comparison, Imagery & Figurative Language — The Metaphor",
  emphasizedWord: "The Metaphor",
  deck: "The metaphor is not decoration. It is a mode of thought. We understand the abstract through the concrete, the unfamiliar through the familiar, the invisible through the visible. A well-made metaphor does not illustrate a point — it creates a new understanding that could not be achieved through literal description.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Figurative Language" },
    { label: "Grammar", value: "Participial, Absolute & Appositive Phrases" },
    { label: "Exercise", value: "400–600 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Figure That Thinks",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1Bwllx7ANe1o2VdAMejqWPSrYrlKn7-YK/preview" },
        {
          type: "paragraph",
          content: [
            "Aristotle called the ability to perceive resemblance between unlike things 'the greatest thing by far' a poet could possess, and said it could not be taught. He was right about the former and wrong about the latter. The perception of resemblance — the fundamental cognitive act behind the metaphor — cannot be taught as a formula, but it can be developed through practice, and specifically through the practice of resisting the first comparison that arrives and holding the subject in attention long enough for an unexpected one to surface. The cliché is the figure that arrived first. The live metaphor is the figure that arrived after.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "A metaphor works at the level of cognition, not decoration. When we say 'grief is a flood,' we are not adding color to an abstract concept — we are making a specific claim about how grief behaves: it arrives without warning, it overwhelms what was dry and solid, it eventually recedes but leaves damage behind, and while it is happening it is impossible to think about anything else. Some of those implications are true to certain experiences of grief; others are not. The metaphor is not a neutral ornament — it is an argument about what the thing being described is like. ",
            { text: "Every metaphor is a claim about the world.", emphasized: true },
            " This is why the dead metaphor — the figure so worn by use that it produces no visual or sensory impression — is not merely aesthetically weak. It is epistemically empty: it makes a claim that it can no longer defend.",
          ],
        },
        {
          type: "pullquote",
          quote: "To check a metaphor: try to draw it. If the drawing produces absurdity, the figure is dead. Replace it with one you can draw.",
          cite: "— the dead metaphor test",
        },
        {
          type: "card",
          title: "Four Kinds of Figurative Language — and What Each Does",
          paragraphs: [
            "Metaphor: asserts that one thing is another. 'Her voice was a nail in the wall.' The assertion is absolute — not 'like' but 'is' — which creates a compression that simile cannot achieve. The metaphor's absoluteness is part of its force: it insists on the identification, allows no hedge. The risk is overreach — identifying things that are not sufficiently related for the identification to illuminate rather than confuse.",
            "Simile: asserts that one thing is like another. 'Her voice was like a nail in the wall.' The 'like' creates distance — it signals comparison rather than identification, preserves the reader's right to evaluate the resemblance. Simile is more flexible and more forgiving than metaphor, but it is also less forceful. The choice between them is a choice about how much you are willing to insist.",
            "Personification: grants human qualities to non-human things. 'The house resented its new owners.' Personification creates intimacy and emotional charge — it invites the reader to relate to the non-human thing as they would relate to a person. Its risk is sentimentality: if the human quality granted to the non-human thing is too easy or too warm, the figure produces comfort rather than understanding.",
            "The objective correlative: T.S. Eliot's term for a set of objects, situations, or events that evoke a specific emotion without naming it. Not figurative language in the strict sense — the objective correlative operates through selection and placement rather than through comparison — but it belongs here because it is the deepest form of what figurative language attempts: making the invisible visible through the concrete. The green light at the end of Daisy's dock does not mean longing; it is longing, made available to the reader through an object in the world.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The Original Metaphor Generator exercise this week is designed to make the process of metaphor-making visible by forcing volume: twenty-four metaphors for four abstractions means you will exhaust the obvious comparisons early and be forced into the unexpected ones. The first three metaphors for 'grief' will probably all be dead — weight, darkness, flood. By the eighth or ninth, you may find something that hasn't been said before. The exercise produces dead metaphors and live ones side by side, and the comparison between them is one of the most useful things that can happen to a writer's figurative vocabulary.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Figurative Language Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction uses both kinds of figurative language — figurative imagery (metaphor, simile, personification) that operates through comparison, and literal sensory imagery that grounds the fictional world in physical reality. The two kinds are not in competition: a passage dense with figurative imagery and empty of literal sensory detail produces a floating, abstract quality; a passage dense with literal detail and empty of figurative language can be accurate without being resonant. The most accomplished literary prose deploys both in proportion to what the moment requires: when the prose needs grounding, it reaches for the concrete literal; when it needs to make a claim about what an experience means, it reaches for the figure.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screen and stage writing have a different relationship to figurative language than prose fiction does: action lines must create images a camera can capture, which means purely figurative description ('the room felt like a held breath') is largely unavailable — the camera cannot film a feeling. The screenwriter's version of metaphor is visual metaphor: the choice of image, the juxtaposition of shots, the specific object a character reaches for at a moment of emotional pressure. Citizen Kane's snow globe is not a literary metaphor — it is a visual one, operating through what is shown and when. For playwrights, figurative language enters through dialogue — through what characters say, and the specific comparisons they reach for — and through the stage picture, which is the playwright's version of the objective correlative.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In CNF, figurative language must be earned by the literalness that surrounds it: a metaphor in memoir lands only because the literal world of the memoir has been rendered with enough specificity that the comparison has a physical ground. Nabokov's elaborate figurative constructions in Speak, Memory work because the literal details of his childhood are so precisely rendered that the figurative departures feel like enhancements rather than evasions. The memoirist who reaches for figurative language before the literal world is established is using metaphor as decoration — reaching for poetry to avoid the harder work of precision. The most powerful metaphors in memoir are the ones that arise from the literal material: the comparison that is almost literal, the image that is almost itself a figure.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phrases as Style — Participial, Absolute & Appositive Constructions",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 30 of 60 — Phrases as Style: A Phase 3 Preview",
          intro: [
            "The final grammar topic of Year One previews Phase 3 by introducing three specialized phrase constructions that add a new kind of power to the sentence — not the power of length variation or sentence type, but the power of simultaneous information and compressed characterization. These three constructions are among the most frequently used features of accomplished literary prose, and their relative absence from first drafts is one of the clearest signs of a developing writer.",
            "All three constructions add information to a sentence without requiring a new clause — they attach to existing syntax, enriching it rather than extending it. They are forms of efficiency that do not feel efficient: they create density rather than compression, adding texture and dimensionality to sentences that would otherwise deliver their information in a single plane.",
          ],
          rule: "Three phrase types, each with a distinct function: participial phrases add movement and simultaneity (the present or past participle connects an action to the sentence's subject); absolute phrases isolate a detail with cinematic specificity (a noun plus a participial, detached from the main clause and commenting on the whole); appositives rename and enrich a noun (a noun phrase placed immediately after another noun to redefine or add context). All three can be placed at the beginning, middle, or end of a sentence; their placement changes their emphasis and their rhythmic function.",
          examples: [
            {
              label: "Participial phrase — movement and simultaneity",
              text: "Singing under her breath, she set the table. / She set the table, singing under her breath. / She set the table — singing under her breath, moving among the plates with the deliberateness of someone who has set this table ten thousand times and intends to set it ten thousand more.",
            },
            {
              label: "What participial phrases do that coordinate clauses cannot",
              text: "'She sang under her breath and she set the table' — coordinate clause, two separate actions. 'Singing under her breath, she set the table' — participial phrase, two simultaneous actions, the singing subordinate to the setting, the sentence's rhythm enacting the simultaneity. The participial phrase is a form of dramatic compression: it shows two things happening at once in the space a coordinate clause would need for two things happening in sequence.",
            },
            {
              label: "Absolute phrase — cinematic specificity",
              text: "Her hands shaking, she finally answered. / He stood at the window, his breath making small clouds on the glass. / The old house stood at the end of the road, its shutters hanging by one hinge, its porch tilted at an angle that suggested the ground beneath had given up.",
            },
            {
              label: "Appositive — renaming and enriching",
              text: "The dog, a three-legged terrier she'd found at seventeen, followed her everywhere. / Her mother, the most exacting person she had ever loved, called every Sunday at precisely noon. / The house — that patient, peeling, enormous fact of her childhood — was smaller than she remembered.",
            },
          ],
          outro: [
            "These three constructions will be developed extensively in Phase 3 of the grammar curriculum (Year Two). For now, the task is recognition and initial practice: noticing when published prose uses them, identifying the work they are doing, and beginning to use them intentionally in your own writing.",
            "A note on the relationship between these constructions and figurative language: the absolute phrase is particularly compatible with metaphorical thinking — 'his face a closed door, his hands flat on the table' is simultaneously an absolute phrase construction and an embedded metaphor. The two techniques reinforce each other, and learning to use absolute phrases often accelerates the development of figurative precision, because the absolute phrase requires the writer to isolate a single specific detail and render it with the exactness that metaphor also demands.",
          ],
          exercise:
            "Write ten sentences using these three constructions — three using participial phrases (vary the placement: opening, middle, closing), three using absolute phrases (vary the number of absolutes per sentence: one, two, three), and four using appositives (vary the length: a single word, a short phrase, a long clause, a clause with embedded figurative language). For each sentence, write a one-clause note identifying what the construction adds that the base sentence without it would not have had.",
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
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the imagery and metaphor chapter. Burroway's treatment is the most systematic introductory account available of how figurative language works in fiction — she distinguishes metaphor, simile, personification, and symbol, gives examples of each functioning well and badly, and provides the dead metaphor test. Read with the Original Metaphor Generator exercise in mind: how does Burroway describe the difference between a dead metaphor and a live one at the level of the word?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Speak, Memory, Chapter 2",
              author: "Vladimir Nabokov",
              href: "https://bookshop.org/p/books/speak-memory-an-autobiography-revisited-vladimir-nabokov/6697453",
              note: "Purchase. Read Chapter 2. Nabokov's figurative language is among the most intricate and original in English prose — his comparisons are unexpected, precise, and fully earned by the literal context in which they appear. Apply the dead metaphor test to every figure you encounter: can you draw it? Is the comparison specific enough to carry information, or is it decorative? Then ask: where does Nabokov's figurative language cross from illuminating to self-displaying — where does the figure call attention to its own ingenuity rather than to the thing it is describing? The line between the two is one of the most important distinctions in figurative writing.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Citizen, Section 1",
              author: "Claudia Rankine",
              href: "https://bookshop.org/p/books/citizen-an-american-lyric-claudia-rankine/6697453",
              note: "Purchase. Read Section 1. Rankine's figurative language is political as well as aesthetic — her metaphors make arguments about race, microaggression, and the body's relationship to social violence. The figures are not decorative; they are argumentative. Notice where a metaphor in Citizen does something that a direct political statement could not: where the figurative comparison produces an understanding in the reader that a literal assertion would produce only agreement or disagreement. This is what figurative language can do that literal language cannot — produce a new kind of knowing rather than a new piece of information.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Original Metaphor Generator",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write six original metaphors for each of these four abstractions: grief, ambition, failure, forgiveness. That is twenty-four metaphors total.",
            "The rule: no clichés. Grief is not a weight, a darkness, a flood, a wound, a shadow, or a hole. Ambition is not a fire, a hunger, a ladder, a knife, or a race. Failure is not a wall, a fall, a dead end, or a door that closes. Forgiveness is not a gift, a release, a door that opens, or a light. These figures are dead — they produce no visual or sensory impression because they have been used so many times that they have become idiom rather than image.",
            "To find the live metaphor: hold the abstraction in your mind and let it interact with the specific texture of your own experience of it. What is your grief like — not grief in general, but the particular quality of a grief you have known? What object, environment, process, or creature does that quality resemble? The unexpected comparison is almost always the right one.",
            "After generating all twenty-four: choose the three most unexpected — the three that surprised you, that you had not seen before — and use each in a sentence that earns the metaphor. The sentence should provide the context that makes the comparison legible, that gives the reader enough of the literal world to understand why the figure illuminates it. The metaphor should not be the only thing in the sentence; it should be the sentence's center of gravity.",
          ],
          target: "24 metaphors + 3 earned sentences = 400–600 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 30 — The Style Autopsy",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week's AI exercise is Style Autopsy — a close reading of a published passage at the level of five simultaneous craft techniques. Select a published passage of approximately 200 words that uses figurative language in a way you find powerful. Paste it with the prompt below.",
          prompt:
            "Read this passage carefully. Identify five craft techniques in use — including at least one figure of speech (metaphor, simile, personification, or objective correlative), one sentence structure choice, one word-level choice, one rhythm or sound technique, and one narrative distance choice. For each technique: (1) quote the specific moment where it is operating; (2) name the technique precisely; (3) explain how it creates meaning — what it does to the reader's understanding or experience that the prose without it would not do. Do not describe what the passage is about; describe how it works.",
          questions: [
            "Which of the five techniques the AI identifies is most precisely named? Where does the description feel genuinely specific — where could you use it as a model?",
            "Which technique does the AI identify most interestingly in the figure of speech category? Does its account of how the figure creates meaning match your experience of the passage?",
            "Now write your own 200-word passage employing all five of the same techniques on a different subject. After writing it, compare: where did borrowing the five techniques produce something in your prose that you would not have found without the constraint? Where did the constraint feel like an imposition rather than an enablement?",
            "Across the Style Autopsy and the Original Metaphor Generator exercise: what is the most important thing you have discovered this week about how figurative language works in your own writing — where it tends to arrive, what prevents it from arriving, what conditions produce the live figure rather than the dead one?",
          ],
          note: "The Style Autopsy is AI Exercise #1 from the 28-exercise list in the curriculum design — one of the most generally useful AI applications available throughout the year. It can be repeated with any published passage at any point in the curriculum: the five-technique framework stays constant, and the specific techniques it surfaces will vary with the passage. Whenever you encounter a passage that produces a strong response and you cannot account for why, the Style Autopsy is the diagnostic tool.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Dead Metaphor Alert",
      blocks: [
        {
          type: "tip",
          icon: "🎨",
          name: "Try to Draw It",
          paragraphs: [
            "A dead metaphor is a figure of speech so worn by use that it no longer creates any visual or sensory impression. Most clichés are dead metaphors: a flood of applications, the thread of an argument, a wall of silence, the heart of the matter, the foot of the mountain, the mouth of the river. These figures were once live — someone first said that applications arrived like water overwhelming a container, and it was vivid — but they have been used so many times that the visual has been rubbed away and the phrase has become idiom.",
            "The dead metaphor test: try to draw it. Take any figure from your prose and attempt to render it literally as an image. If the drawing produces absurdity or incoherence — if you cannot make a picture that corresponds to the figure — the metaphor is dead. 'She had a flood of memories' produces an absurd drawing: a woman drowning in small photographs. 'The memories arrived in no order she could follow, one crowding out the next before she had finished with it, like guests arriving too early and too many at once' — this can be drawn. A woman surrounded by people who won't stop coming through the door. That drawing is the live metaphor.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "How You Think in Images",
      blocks: [
        {
          type: "journal",
          title: "How You Think in Images",
          question:
            "How do you think in images — or don't you? When you try to explain an emotion you cannot name, or a situation you cannot yet understand, or an experience that resists description: what images or comparisons arise? Do they arrive quickly, the first comparison presenting itself with authority? Or does your mind resist comparison, preferring to hold the thing itself without analogy? When an unexpected comparison does arrive — one that surprises you, that you had not seen before — where does it seem to come from? What were you attending to at the moment it surfaced? And: what is the comparison you have used most often in your writing — the figure you reach for most readily — and what does that recurring figure tell you about the specific quality of attention your imagination brings to the world?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The recurring metaphor in a writer's work is as revealing as the recurring image — it is the comparison the writer's mind keeps finding useful, the relationship between things that the writer's sensibility keeps discovering. Knowing your recurring metaphor is knowing something about how you see. And knowing how you see is the beginning of knowing your voice.",
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
            "By the end of this week you should have: generated twenty-four original metaphors for four abstractions and chosen the three most unexpected to develop into earned sentences; read Burroway's imagery and metaphor chapter and applied the dead metaphor test to your own prose; read Nabokov's Chapter 2 and identified where his figurative language illuminates and where it becomes self-displaying; read Rankine's Section 1 for figurative language as political argument; completed the Style Autopsy on a passage you admire and written your own 200-word passage using its five techniques; and written ten sentences using participial, absolute, and appositive constructions with placement variation.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 31",
          paragraphs: [
            "Week 31 is Symbol and Objective Correlative — When Objects Carry Meaning. T.S. Eliot's 'objective correlative' describes a concrete external equivalent to an internal state: an object, situation, or set of events that evokes a specific emotion in the reader without naming it. The green light at the end of Daisy's dock in The Great Gatsby, the conch shell in Lord of the Flies — these are not symbols planted by writers with a checklist. They are objects that accumulate meaning through their placement in a story's emotional structure. Week 31 studies how symbol and objective correlative arise naturally, and how forced symbols fail.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Figurative language and the sentence-level craft of Week 29 are more closely connected than they might appear: the absolute phrase and the participial phrase — both introduced this week in the grammar topic — are natural homes for embedded figurative language, because both constructions force the writer to isolate a specific detail and render it with precision. The absolute phrase 'his face a closed door' is simultaneously a construction and a metaphor, each technique reinforcing the other. The writer who develops fluency in these constructions will find that their figurative thinking sharpens in proportion, because the constructions make the same demand that metaphor makes: be exact.",
          ],
        },
      ],
    },
  ],
};
