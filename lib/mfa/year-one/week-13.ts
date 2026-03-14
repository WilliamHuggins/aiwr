import type { WeekData } from "@/lib/mfa/types";

export const week13Data: WeekData = {
  weekNumber: 13,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Setting I — Place as Character",
  emphasizedWord: "Place as Character",
  deck: "Setting is not backdrop. In the best literary fiction, place shapes psychology, generates pressure, and carries thematic weight that no amount of direct statement could achieve. The moors in Wuthering Heights are not scenery. They are Heathcliff.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Setting & Place" },
    { label: "Grammar", value: "Phase 1 Review" },
    { label: "Exercise", value: "700–1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Place That Could Not Be Anywhere Else",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1M8fTztUJmm_IoTM4quslb4bbTCR1qqvI/preview" },
        {
          type: "paragraph",
          content: [
            "When novice writers think about setting, they think about description — the obligation to orient the reader in physical space before the action begins. A few sentences about the quality of light, the layout of a room, the feel of a neighborhood. Setting as necessary preamble. This is the weakest possible relationship a narrative can have with the place it inhabits, and it produces the weakest possible prose: a paragraph that the reader's eye slides over on the way to the scene that actually matters.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The alternative is not to describe the setting more vividly. It is to understand that in the best literary fiction, ",
            { text: "setting is not where the story happens — it is part of what the story is.", emphasized: true },
            " The moors in ",
            { text: "Wuthering Heights", emphasized: true },
            " are not scenery; they are an externalization of Heathcliff's violence, Cathy's wildness, the novel's governing conviction that the passionate life cannot be contained by the domestic world. Faulkner's Yoknapatawpha County is not a location; it is a moral atmosphere, a specific kind of historical weight that produces specific kinds of damage in the people it forms. Chekhov's provincial towns are not backdrop; they are the very substance of his characters' entrapment, the physical form taken by everything his people cannot escape.",
          ],
        },
        {
          type: "pullquote",
          quote: "Place is the crossroads of circumstance, the proving ground of what happened. 'Where' is as surely the heart of fiction as 'who' and 'what.'",
          cite: "— Eudora Welty, \"Place in Fiction\"",
        },
        {
          type: "paragraph",
          content: [
            "Welty's formulation — place as proving ground — locates what is essential. Setting is not the container of the story; it is one of the story's active forces. It shapes what characters are capable of, what they want, what they fear, what they cannot say in this particular room at this particular time of day. A scene that could happen anywhere is not yet fully located — it has not yet discovered the relationship between its action and its place. The discipline of setting is to find that relationship and make it structural: not to add setting details to a scene that already exists, but to recognize that the scene and its place are the same event, each generating the other.",
          ],
        },
        {
          type: "card",
          title: "Three Ways Setting Does Work",
          paragraphs: [
            "Setting reveals character: What a character notices — or fails to notice — in the places they move through is a form of indirect characterization. The filter you studied in Week 7 operates constantly through setting. Two characters in the same room attend to different things, and those differences tell the reader who each person is. The room a character has chosen to live in, and what they have done to it, is equally revealing: the character who controls their environment and the character who lets it accumulate around them are already different people before anyone speaks.",
            "Setting generates pressure: Place can create the conditions under which the story's central tensions become unavoidable. The cramped apartment that makes a conversation feel like an interrogation. The formal dining room where nothing raw can be said. The landscape — empty, vast, indifferent — that strips away all the social scripts a character normally relies on. The best settings are almost antagonists: they make it harder for characters to avoid what they need to confront.",
            "Setting carries thematic weight: The recurring images in a setting accumulate meaning across a narrative. The stopped clocks in Miss Havisham's Satis House are not descriptive details — they are the novel's argument about grief and time, rendered as physical objects. The fog in Bleak House is not atmosphere — it is the legal system, made visible. When a setting detail recurs, it is doing symbolic work; the discipline is to make that work coherent and to earn it.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The most reliable test of whether setting is doing its job is what Eudora Welty implies in her formulation: could this story happen anywhere else? If the honest answer is yes — if the scene could be transplanted to a different city, a different room, a different landscape without losing anything — the setting is generic. It has not yet become the specific place that this specific story requires. The revision task is not to add more physical detail but to find the detail that is irreplaceable: the one thing about this place, at this moment, that makes it the proving ground for exactly this action.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Place Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's specific power with setting is the ability to render a place from the inside — through a character's consciousness, so that the physical world and the psychological world are simultaneous. The room is not described; it is perceived, and the perception is itself the characterization. This integration of place and consciousness reaches its highest expression in free indirect discourse, where the character's specific way of seeing suffuses the prose so completely that it becomes impossible to separate the place from the person experiencing it. Strive for this integration: not setting described, but setting inhabited.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, setting is communicated through slug lines (INT. KITCHEN — DAY) and action lines, with rigid economy: only what the camera can see, only what a production designer can build from. The discipline is precision without interiority — the setting must do its work through visual and spatial facts alone, without access to any character's perception of it. For the fiction writer, studying screenwriting's treatment of setting is instructive: it forces the question of what is actually visible versus what is merely felt. If a setting's significance cannot be translated to the visual, it may be doing its thematic work too abstractly.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Place is often the memoir's central trigger and deepest subject. Many of the most powerful memoirs are fundamentally about a place — the family home, the childhood neighborhood, the country left behind — and the psychological formation that place produced. The memoirist's relationship to place is complicated by memory's selective and reconstructive nature: the place you return to in writing is not the place as it was but the place as you have carried it, shaped by time and retrospective understanding. Edward Abbey's Desert Solitaire is the canonical CNF example of setting elevated to the level of primary subject: the landscape is not where the book takes place but what the book is about.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 1 Review",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 13 of 60 — Synthesizing the Sentence Foundations",
          intro: [
            "This week completes Phase 1 of the grammar curriculum — twelve weeks of sentence foundations. Before moving into Phase 2 (sentence architecture: the cumulative sentence, the periodic sentence, balanced and serial constructions), this is the moment to consolidate what you have built. Return to your earliest writing from this semester — Week 1 or 2 — and bring to it everything you now know.",
            "The twelve topics of Phase 1 form a coherent system: the kernel sentence as the irreducible unit of meaning (Topic 1); the mechanics of modification and embedding (Topic 4); the three branching types — right, left, and mid — as a full toolkit for extending the kernel (Topics 5, 6, 7); the ten sentence opener types as a system for varying rhythm (Topic 8); sentence inversion for emphasis (Topic 9); coordination and subordination as philosophical choices (Topic 10); and the compound and complex sentence as the formal realization of those choices (Topics 11, 12). These are not separate tools. They are aspects of a single question: how do I build a sentence that does exactly what this moment requires?",
          ],
          rule: "Phase 1 Review: Every sentence you write enacts a combination of the twelve foundation choices — branching type, opener, joining logic, hierarchical structure. Fluency means making these choices deliberately rather than by default, and recognizing when a sentence is failing because one of these choices is wrong.",
          examples: [
            {
              label: "A sentence from early in the semester (hypothetical)",
              text: "She walked into the room and she didn't know what to say.",
            },
            {
              label: "Revised: compound resolved to complex (subordination clarifies the relationship)",
              text: "She walked into the room without knowing what to say.",
            },
            {
              label: "Revised: left-branching (the condition placed before the arrival)",
              text: "Without any idea of what to say, she walked into the room.",
            },
            {
              label: "Revised: mid-branching (the uncertainty placed at the sentence's center)",
              text: "She walked into the room — uncertain, already failing — and said nothing.",
            },
            {
              label: "The principle made visible",
              text: "Same event, same information: four different sentences that make four different claims about what matters. The first is a default. The last three are choices.",
            },
          ],
          outro: [
            "The goal of the Phase 1 review is not to revise old work into perfection — it is to make the distance between then and now visible. When you can see what you were doing unconsciously in Week 1 and name the specific choice that would improve it, Phase 1 has done its work.",
            "Phase 2 begins next week: the cumulative sentence, which Francis Christensen called the characteristic sentence of contemporary prose — the base clause extended by free modifiers that add detail, texture, and the accumulated weight of perception. Everything in Phase 1 has been preparation for this: you need to understand what a sentence is before you can understand how to build one that accretes.",
          ],
          exercise:
            "Pull a paragraph from your writing in Week 1 or 2 of this semester. Read it with the full vocabulary of Phase 1 — label each sentence by its dominant type: kernel, right-branching, left-branching, mid-branching, compound, complex, inverted. Count the distribution. What do you over-use? What is absent? Now revise two sentences: choose one that is a default (subject-first, compound with 'and') and one that is a missed opportunity (a moment where the content called for a different structure than you gave it). Write a single paragraph — two or three sentences — analyzing what each revision changed about the sentence's claim.",
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
              title: '"Place in Fiction"',
              author: "Eudora Welty",
              href: "https://www.newyorker.com/magazine/1956/12/22/place-in-fiction",
              note: "Free to find widely online — originally published in The New Yorker, 1956, and widely reprinted. This is the defining essay on setting in American fiction, and one of the most precise pieces of craft writing on any subject. Read it slowly. Welty is herself a prose stylist of the highest order, and the essay demonstrates its argument — about the irreplaceable specificity of place — in its own language.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Wuthering Heights",
              author: "Emily Brontë",
              href: "https://www.gutenberg.org/ebooks/768",
              note: "Free on Project Gutenberg. Read Chapters 1–3 only — the arrival at Wuthering Heights, the opening of the novel's world. Read with a single question: how does Brontë make the physical landscape and the architecture of the house do psychological and thematic work? Mark every moment where the setting is not describing but arguing — where the physical world is making a claim about the human world that contains it.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Desert Solitaire",
              author: "Edward Abbey",
              href: "https://bookshop.org/p/books/desert-solitaire-edward-abbey/6697453",
              note: "Read the first chapter, \"The First Morning.\" This is the canonical example of CNF setting elevated to primary subject: Abbey is not describing the Utah desert in order to orient the reader — the desert is the inquiry, the argument, and the book's reason for existing. Notice how he uses specificity (the names of things, the quality of light, the temperature of stone) to make the landscape feel like a presence rather than a backdrop.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Place That Could Not Be Anywhere Else",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene set in a real place you know well — a place you have spent enough time in that you know what a tourist would never see.",
            "Before writing: make two lists. First, five things about this place that only someone who has been there long enough to stop being a visitor would know — the way the light comes through a specific window at a specific time of day, the noise that happens every morning that regulars have stopped registering, the detail that looks like nothing but that everyone who belongs to this place has a relationship with. Second, five sensory details that are particular to this place at a specific time of year or day — not the general but the specific, the time-stamped, the unrepeatable.",
            "Write your scene using at least three items from each list. The place should feel like it has agency — as if the story you are telling could not have happened anywhere else, because the conditions this particular place creates are the conditions under which this particular action became possible.",
            "One character should be from this place. One should be a visitor, or someone for whom this place is unfamiliar. The difference in how they perceive the same physical space is part of your material.",
          ],
          target: "700–1,000 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 13 — The Sensory Detail Generator",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Before writing your exercise, use the AI to expand your inventory of setting detail. Describe your chosen place in three sentences — its location, its function, its general character. Then use the prompt below.",
          prompt:
            "I am going to describe a setting in three sentences. Generate ten unexpected details about this place that a writer might overlook — micro-details of sound, smell, texture, temperature, or quality of light that would make a reader feel physically present in this space. Prioritize the sensory and specific over the visual and general. Prioritize details that are particular to a specific time of day, season, or type of weather — the unrepeatable over the generic. Avoid clichés. The setting is: [paste your three-sentence description].",
          questions: [
            "Which of the ten details surprised you — details you knew but had not thought to write?",
            "Which details feel most specific to this place rather than applicable to any similar space?",
            "Which detail carries the most potential for thematic or psychological weight?",
            "After writing your scene: did you use any of the AI's details? Did any of them lead you to a detail of your own?",
          ],
          note: "Use the AI's output as a prompt for your own perception, not as material to incorporate directly. The goal is to remind yourself of what you already know about this place — to overcome the novelist's amnesia that comes from familiarity. If one of the AI's details triggers a real memory or observation, follow the real thing. The AI's detail is a placeholder; your specific detail is the scene.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Displacement Test",
      blocks: [
        {
          type: "tip",
          icon: "📍",
          name: "Could This Scene Happen Anywhere Else?",
          paragraphs: [
            "Take any scene in your draft and ask: could this scene happen in a different city? A different room? A different landscape? If the honest answer is yes — if you could move the scene without losing anything — the setting is generic. It is providing orientation without providing pressure. The place has not yet become the proving ground for this action.",
            "The revision move is not to add more description. It is to find the one thing about this specific place — the physical condition, the sensory detail, the architectural or geographic fact — that makes it the only place where this particular scene becomes possible. When you find that thing, it will usually change the scene. The scene becomes what it is because of where it is. That is when setting is doing its job.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Place That Shaped You",
      blocks: [
        {
          type: "journal",
          title: "The Place That Shaped You",
          question:
            "Describe a place from your past that shaped who you became. Not what happened there — set that aside for now. Describe the place itself: its quality of light at the time of day you most associate with it, the smell that was specific to it, the sounds that defined it, the physical texture of the most important surface you touched there. The scale of it. Whether it felt enclosed or exposed. What it demanded of your body to be in it. What the place made possible, and what it made impossible. Then ask: what kind of person does a place like this tend to produce?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The places that shaped us are already literary — already structured by the pattern of meaning we built in them over time. The discipline is to render them with the precision that recovers the original physical experience, before the meaning was added. The meaning is the easy part. The smell of the place at seven in the morning is the hard part, and the part that makes the meaning feel true.",
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
            "By the end of this week, you should have: written a scene in which a real, specific place is doing genuine work — shaping psychology, generating pressure, or carrying thematic weight that the prose never needs to announce; completed the Phase 1 sentence review and identified both what you over-use and what you have been avoiding; read Welty's essay and the Brontë opening as studies in how place becomes argument; and used the Displacement Test to confirm that your scene's setting is irreplaceable.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 14",
          paragraphs: [
            "Week 14 extends into Setting II: world-building and research. Every narrative world — a 1970s Detroit neighborhood, a corporate law firm, a rural Mississippi county in 1955 — requires construction. The writer must know far more about the world than they put on the page; the invisible knowledge is what makes the visible world feel real. You will study research methods, how to know when you have done enough, and how to deploy researched detail with the light hand that makes it feel inevitable rather than inserted.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A note on the Phase 1 milestone: you have spent twelve weeks building a vocabulary for the sentence. That vocabulary is now yours — not as a set of rules to apply consciously to every line you write, but as a set of options available when a sentence isn't working and you need to understand why. Phase 2, beginning next week, will teach you how to build sentences that accumulate: that grow from their base clause outward, adding perception and texture and time. Everything in Phase 1 has been preparation for the sentence that can carry the full weight of what you see.",
          ],
        },
      ],
    },
  ],
};
