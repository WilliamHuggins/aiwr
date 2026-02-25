import type { WeekData } from "@/lib/mfa/types";

export const week31Data: WeekData = {
  weekNumber: 31,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Symbol & the Objective Correlative — When Objects Carry Meaning",
  emphasizedWord: "When Objects Carry Meaning",
  deck: "T.S. Eliot defined the objective correlative as a set of objects, situations, and events that evoke a particular emotion without naming it. The green light at the end of Daisy's dock is not a symbol planted with a checklist. It is an object that accumulates meaning through its placement in a story's emotional structure — and the difference between those two descriptions is the difference between a device and a piece of literature.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Symbol & Accumulation" },
    { label: "Grammar", value: "Parallelism" },
    { label: "Exercise", value: "700 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Object That Is Not a Symbol",
      blocks: [
        {
          type: "paragraph",
          content: [
            "There is a version of the symbol question that has nothing to do with craft and everything to do with the anxiety of interpretation. 'What does the green light mean?' students have been asking since high school. The answer that most benefits a writer is not a thematic paraphrase — not 'the green light represents the American Dream' or 'the green light symbolizes the impossibility of the past' — but a structural one: the green light means what it means because of where it appears, when it appears, how often it reappears, and what has happened between its appearances. Strip any of that context away and the green light is just a green light. It is the architecture of its placement that transforms it from a detail into what T.S. Eliot called the objective correlative: a concrete external equivalent to an internal state.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Eliot's formulation in the 1919 essay 'Hamlet and His Problems' was specific: the objective correlative is 'a set of objects, a situation, a chain of events which shall be the formula of that particular emotion; such that when the external facts, which must terminate in sensory experience, are given, the emotion is immediately evoked.' The emphasis falls on ",
            { text: "particularity", emphasized: true },
            " — not a general emotion, but a specific one; not a general object, but the exact set of objects that produces it. This is why planted symbols fail: a writer who decides in advance that an object will mean something specific and then places it in the story produces a symbol whose meaning the story must decode, rather than an objective correlative whose meaning the story produces. The reader feels the difference immediately, though they cannot usually name it.",
          ],
        },
        {
          type: "pullquote",
          quote: "The most effective symbols in literature were not planted — they arose from the writer's intuition and became weighted by revision. Start with the object. The meaning will clarify itself.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "How Symbol Accumulates — The Three-Return Structure",
          paragraphs: [
            "The first appearance: the object appears in its literal capacity, described with precision but without authorial signal that it matters. The reader receives it as detail — a coat, a chair, a particular road at a particular hour. The description should be specific enough to be memorable but unemphasized enough that the reader does not register it as significant. This is the hardest appearance to write correctly: any visible emphasis reveals the writer's intention and breaks the contract of natural accumulation.",
            "The second appearance: the object reappears in a different context, in the presence of a different emotional situation. The change of context begins to develop the object's resonance. The reader, if they remember the first appearance, now begins to register a pattern — something is being returned to, though they cannot yet say why. The writer's task at the second appearance is to deepen the object's meaning through its new context without explaining the deepening. The object should not be described as the same object it was before — it should be described afresh, with the new context changing what aspects of it are noticed.",
            "The third appearance: the object returns in the scene of maximum emotional pressure. By now it carries everything that has accumulated through its first two appearances, and its presence at the scene of highest stakes makes it do double duty: it grounds the scene in the physical world while simultaneously focusing the scene's emotional weight. The reader now understands what the object holds, and the understanding arrives as recognition rather than as interpretation — not 'this means X' but 'of course it is this, here, now.' That recognition is what Eliot means by the emotion being 'immediately evoked.'",
            "The key discipline across all three appearances: the accumulation must do the work. The writer who explains what the object means — who tells the reader that 'the coat was a reminder of everything she had left behind' — has replaced the objective correlative with a paraphrase. The coat's meaning should arrive through the reader's experience of the three appearances, not through the narrator's announcement of it.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Joyce's 'The Dead' is the canonical study of this technique: the snow, the statues, the paralysis of the living, Gabriel's speech — all of these accumulate across the story's full length until the final passage, when the snow falling over all of Ireland transforms, through accumulated context, into something that carries the full weight of the story's inquiry into the relationship between the living and the dead. The snow at the beginning and the snow at the end are not the same snow, though they are described with the same precision. Between them, an architecture of meaning has been built, and the ending snow arrives inside that architecture.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Symbol Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the object that accumulates meaning across a narrative is one of the primary ways that theme becomes structural rather than asserted. O'Connor's argument in 'The Fiction Writer and His Country' is that the serious fiction writer works always from the concrete toward the spiritual — not from the spiritual down to a concrete illustration. The peacock, the wooden leg, the grandmother's hat — these are not illustrations of O'Connor's thematic concerns. They are the material through which those concerns become available to the reader. The grammar of natural accumulation: never tell the reader what the object means; let the object do its work through placement, repetition, and the way its contexts develop across the narrative's length.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screen and stage are the natural homes of the objective correlative because they are already composed of objects in physical space. The camera does not have interior access — it can only show what is there — and this constraint is precisely what makes visual storytelling so amenable to Eliot's technique. Citizen Kane's snow globe, the matching hats in Rear Window, the spinning top in Inception: all of these are objects that accumulate meaning through placement, repetition, and context. For the playwright, the stage object is even more charged: every object on a stage has been placed there by a human hand, and the audience knows it. The bare stage of Beckett is as much an objective correlative as the heavily furnished stage of Chekhov — the emptiness holds a meaning that the fullness would dispel.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the object that accumulates meaning is both a craft device and an ethical act: the writer is asserting that a real object from a real life held a significance that, in retrospect, was always there. The ethical discipline is honesty about the retrospection: the memoirist who discovers meaning in a childhood object must be honest about whether the object held that meaning at the time or whether the meaning is being read back into it by the narrating self looking back. Both are legitimate — the object that held meaning at the time and the object that reveals its meaning only in retrospect — but they produce different kinds of prose and require different kinds of handling. The most powerful memoirs are often those in which the reader can feel both: the past self's incomplete understanding and the present self's fuller one, held in productive tension across the object's appearances.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Parallelism — Saying Like Things in Like Ways",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 31 of 60 — Parallelism: Saying Like Things in Like Ways",
          intro: [
            "Parallelism aligns grammatically equivalent elements in equivalent grammatical forms. At its most basic, it is a rule of correctness: 'She likes swimming, to run, and having breakfast early' creates a grammatical lurch because the three elements are in three different forms (gerund, infinitive, gerund phrase). 'She likes swimming, running, and eating breakfast early' corrects it by aligning all three in gerund form.",
            "But at the level of literary prose, parallelism is not just a grammatical rule — it is a rhetorical strategy. When three elements are aligned in the same grammatical form, they are implicitly claimed to be equivalent, complete as a set, and in some sense inevitable: the parallel structure says that these three things belong together and that together they constitute something whole. This is why parallelism is one of the most powerful rhetorical instruments available, and also one of the most dangerous: used carelessly, it asserts equivalence where none exists; used precisely, it creates rhythm, emphasis, and the formal enactment of a relationship between ideas.",
          ],
          rule: "Parallel structure requires that all elements in a series be in the same grammatical form — all nouns, all infinitives, all gerunds, all participial phrases, all independent clauses. The choice of which grammatical form to use for the series is a rhetorical choice: infinitives ('to love, to endure, to forget') create a slightly more formal and abstract quality than gerunds ('loving, enduring, forgetting'); noun phrases create a different quality still. The choice of form is the choice of emphasis. Make it deliberately.",
          examples: [
            {
              label: "Parallelism as correctness — the basic repair",
              text: "Broken: 'She wanted to leave the city, a quieter life, and to stop apologizing.' / Repaired: 'She wanted to leave the city, to find a quieter life, and to stop apologizing.' Three infinitive phrases, aligned, each carrying equal weight.",
            },
            {
              label: "Parallelism as rhetoric — implying equivalence and completeness",
              text: "Baldwin: 'To be a Negro in this country and to be relatively conscious is to be in a rage almost all the time.' Three infinitive phrases, the third completing what the first two together require. The parallelism enacts the argument: these conditions are not separate; they produce each other.",
            },
            {
              label: "Parallelism as accumulation — the list that builds",
              text: "She had given up the apartment, the dog, the habit of cooking elaborate meals on Sunday, the belief that she would eventually stop feeling it — all the objects and practices that had organized a life she no longer recognized as hers.",
            },
            {
              label: "Broken parallelism as deliberate style — the lurch that means something",
              text: "He had a degree, a car, a reasonable chance at happiness, and he was afraid. The broken parallelism — three nouns and then a clause — enacts the content: the clause ('and he was afraid') cannot be made parallel to the nouns that precede it because fear is not a possession; it is a state. The grammatical break marks the conceptual break.",
            },
          ],
          outro: [
            "The relationship between parallelism and the three-return structure of symbol is worth noting: both operate through structured repetition with variation. The parallel series repeats a grammatical form to create the impression of completeness; the symbol repeats an object across three different contexts to create accumulated meaning. In both cases, the repetition is the mechanism, and the variation within the repetition — the way each element of the parallel series differs from the others, the way each appearance of the object is inflected by its new context — is what creates the effect. Pure repetition without variation is monotony; pure variation without repetition is chaos. Both techniques live in the balance between them.",
            "A practical note: read your prose for places where a list has been written in mixed grammatical forms. Most mixed-form lists are accidents; repair them. But occasionally, a list in mixed forms has an expressive purpose — the broken parallelism creates a jolt that marks a conceptual or emotional break in the series. Identify which kind you have before repairing.",
          ],
          exercise:
            "Write five sentences using parallel structure deliberately — not as a correction of broken parallelism but as a rhetorical choice. For each: choose the grammatical form that creates the specific effect you want (infinitives for formality and abstraction, gerunds for immediacy and process, noun phrases for solidity and weight, independent clauses for maximum rhetorical force), write the parallel series with at least three elements, and write one sentence explaining what the parallel structure implies about the relationship between the elements — what equivalence or completeness it is asserting. Then write one sentence in which broken parallelism is a deliberate expressive choice, and explain the break.",
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
              title: "The Great Gatsby, Chapters 1 and 5",
              author: "F. Scott Fitzgerald",
              href: "https://www.gutenberg.org/ebooks/64317",
              note: "Free on Project Gutenberg (entered public domain in 2021). Read Chapter 1 for the first appearance of the green light — it is there, in the novel's opening, before it has become what it will become — and Chapter 5 for its second major appearance, when Gatsby shows Daisy the light across the water and it shifts from desire to something more complicated. Track every appearance of the light between those two chapters as well. The task is not to interpret the symbol but to map its structural placement: when does it appear, in whose presence, at what emotional moments? The meaning is in the architecture, not in the object.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: 'Dubliners: "Araby" and "The Dead"',
              author: "James Joyce",
              href: "https://www.gutenberg.org/ebooks/2814",
              note: "Free on Project Gutenberg. Read 'Araby' for how a single orienting image (the girl in the doorway, the journey to the bazaar, the darkened hall) accumulates meaning across a very short story until the final epiphany. Then read 'The Dead' for the master class: track the snow across its appearances from the opening pages to the final paragraph. What is the snow in its first appearance? What has it accumulated by the last? The distance between those two is the story's emotional and thematic arc, carried by an image rather than by event.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: '"The Fiction Writer and His Country"',
              author: "Flannery O'Connor",
              href: "https://bookshop.org/p/books/mystery-and-manners-flannery-o-connor/6697453",
              note: "In Mystery and Manners (purchase). O'Connor's essay is the most important argument available for why the fiction writer must work from the concrete toward the spiritual — not from the spiritual down to a concrete illustration. Her account of how the serious fiction writer uses the visible world to make meaning available is the theological underpinning of the objective correlative technique, stated in terms that apply regardless of the writer's own beliefs. O'Connor: 'The fiction writer presents mystery through manners, grace through nature, and the devil through the concrete particulars of an ordinary day.' Read this as a craft document, not a religious one.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Three-Return Object",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Choose an ordinary object — a chair, a coat, a particular road, a photograph, a pair of shoes, a window, a dish left in a sink. The object should be genuinely ordinary: no inherent symbolic weight, nothing that announces its own significance. The exercise fails if you choose an object that already means something (a wedding ring, a grave, a flag) because the pre-existing meaning will substitute for the accumulated meaning the exercise is designed to produce.",
            "Write a 700-word scene in which this object appears three times.",
            "At its first appearance: describe it with precision in its literal capacity. Give the reader enough detail to hold it in memory, but do not emphasize it. It is simply part of the scene.",
            "At its second appearance: the object reappears in a different context — a different emotional situation, a different moment in the scene's action. Describe it afresh rather than referring back to the earlier description. What aspects of it are noticed now, given the new context, that were not noticed before?",
            "At its third appearance: the object returns at the scene's moment of highest emotional pressure. Let it carry what it has accumulated without announcing what that is. Do not tell the reader what the object means. Do not describe the object as symbolic. Do not have a character reflect on the object's significance. Let the three appearances and their contexts do the work.",
          ],
          target: "700 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 31 — The Accumulation Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the Three-Return Object exercise, paste your scene. The AI's task is to assess whether the accumulation is working — whether the object develops meaning across its three appearances without being explained, and whether that meaning is legible to a reader who has not been told what to look for.",
          prompt:
            "Read this scene carefully. A specific object appears three times. Answer these questions: (1) Does the repeated object accumulate meaning effectively across its three appearances, or does it feel like the same detail noticed three times without development? (2) Is the significance of the object's final appearance clear without being stated — does the reader understand what it holds by the end, or is the accumulation not yet legible? (3) What does the object seem to mean in this story — what emotional or thematic content has it accumulated? (4) What does that meaning suggest about the story's underlying concern — what question or situation does the object seem to be a 'formula for,' in Eliot's sense? Do not suggest changes to the plot or the object. Diagnose only what the object is and is not yet doing.",
          questions: [
            "Does the AI's reading of what the object 'seems to mean' match your intention? If it differs, is the AI's reading wrong — or is it a reading the object produced that you didn't consciously plan?",
            "Does the AI assess the three appearances as developing (each one different, contextually inflected) or as repetitive (the same detail returned to without change)? If repetitive, what would development look like at the appearance the AI identifies as flattest?",
            "Where does the AI say the accumulation is most legible — at which appearance does the object's meaning become clear? Is that the right place, or should it arrive earlier or later?",
            "What does the AI's description of the object's meaning suggest about your material's deeper subject? Is there a thematic concern visible in the object's accumulation that you had not consciously planned for?",
          ],
          note: "The most valuable output from the AI accumulation audit is often an unexpected reading — a meaning the object has produced that you did not consciously intend. This is not a failure of control; it is evidence that the technique is working. Symbolic accumulation in the best literary fiction is not purely intentional — it arises from the writer's preoccupation expressing itself through the material chosen, and the accumulated object often reveals what the story is about before the writer does. If the AI reads something in your object that surprises you, hold that reading: it may be the story's actual concern.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Resist the Planted Symbol",
      blocks: [
        {
          type: "tip",
          icon: "🌱",
          name: "The Object You Did Not Choose to Mean Something",
          paragraphs: [
            "The most effective symbols in literature were not planted — they arose from the writer's intuition and became weighted by revision. In early drafts, avoid starting a scene by deciding what your object will mean. Start with the object itself, put it in natural relationship with your characters and their situation, and return to it. The meaning will clarify itself, and it will be a truer meaning than the one you planned, because it will have been generated by the material rather than imposed on it.",
            "A practical audit for planted symbols: read your draft and mark every object that appears more than once. For each recurring object, ask: did I put this here because the story needed it here, or because I wanted it to mean something? If the honest answer is the second, the object is planted. The planted object is legible to readers as planted — there is a quality of mechanical intention to it, a sense that the writer is reaching for significance rather than discovering it. The cure is almost always to remove the authorial intention temporarily, treat the object as a literal detail for a full draft, and see what meaning accumulates naturally through the story's emotional logic.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Object That Holds More Than It Should",
      blocks: [
        {
          type: "journal",
          title: "The Object That Holds More Than It Should",
          question:
            "What object from your past has taken on a significance disproportionate to what it is? Not an object that is inherently significant — not a wedding ring or a diploma — but an ordinary object that has accumulated meaning through its placement in your life: the particular chair in a particular room, a coat you wore at a specific time, an object in the house where you grew up that you still see clearly when you close your eyes. What is the object? Where does it appear in your memory — at what scenes, in whose presence, at what moments of pressure? What has it accumulated? And: what does the accumulation tell you about those moments and that time that a direct description of the events would not?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The objects that hold disproportionate meaning in your life are already functioning as objective correlatives for the experiences they are associated with. They have been weighted by real accumulation — by real repetition, real context, real emotional pressure. The writer's task is to learn from them what the technique requires: not to assign meaning to an object but to place it in conditions that allow meaning to accumulate naturally, and then to trust that accumulation to do the work of conveying what the direct statement cannot.",
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
            "By the end of this week you should have: written the 700-word three-return scene in which an ordinary object accumulates meaning across three appearances without authorial explanation; read Fitzgerald's Chapters 1 and 5 with structural attention to the green light's placement; read Joyce's 'Araby' and 'The Dead' for how accumulation operates at the short story's scale; read O'Connor's essay for the argument that the fiction writer works always from the concrete toward the spiritual; completed the AI accumulation audit and attended to any unexpected reading the AI produced; and written five parallel-structure sentences as deliberate rhetorical choices, with the one broken-parallel sentence as a controlled expressive departure.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 32",
          paragraphs: [
            "Week 32 is Pacing and Rhythm — Controlling the Reader's Experience of Time. Narrative time and clock time are completely different: a story can spend fifty pages on one hour and three sentences on a decade, and the reader will feel both as the right speed if the pacing decisions are justified by emotional significance. Week 32 studies the full toolkit of pacing: scene as immersion and slowdown, summary as compression and acceleration, white space, sentence length variation, chapter and section length, and the strategic use of digression.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The three-week figurative language sequence — Week 30 (Metaphor), Week 31 (Symbol and Objective Correlative), and Week 32 (Pacing, which involves the related question of when to expand and when to compress) — is approaching its close. What the sequence has built is a single, integrated understanding: the concrete detail is not decoration. In the metaphor, the concrete vehicle carries an abstract tenor; in the objective correlative, the concrete object carries an emotional charge; in the well-paced scene, the slow attention to concrete detail signals to the reader that this moment matters. The image is not the illustration of the meaning. The image is the meaning — made available through the physical world because that is the only world literature has access to.",
          ],
        },
      ],
    },
  ],
};
