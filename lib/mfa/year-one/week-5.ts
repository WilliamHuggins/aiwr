import type { WeekData } from "@/lib/mfa/types";

export const week5Data: WeekData = {
  weekNumber: 5,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Image & Sensory Detail",
  emphasizedWord: "Sensory Detail",
  deck:
    "The image is not decoration. It is the primary unit of meaning in literary prose. This week you learn to see what you are writing — and to trust the concrete world to carry what abstract statement cannot.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Image & Sensory Detail" },
    { label: "Grammar", value: "Right-Branching Sentences" },
    { label: "Exercise", value: "600–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Concrete World Does the Work",
      blocks: [
        {
          type: "paragraph",
          content: [
            "There is a particular failure mode in literary fiction, and it sounds like this: ",
            { text: "She felt an overwhelming sense of loss.", emphasized: true },
            " Or: ",
            { text: "The room had a sad quality to it.", emphasized: true },
            " Or: ",
            { text: "He was a man haunted by regret.", emphasized: true },
            " These sentences are not wrong in any grammatical sense. They are wrong in a more fundamental way: they tell the reader what to feel without giving them any material to feel it with. Abstract nouns — loss, sadness, regret — are placeholders. They point toward an experience without creating one.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The image — the specific, concrete, sensory detail — does what abstraction cannot. It does not name the feeling; it constructs the conditions under which the feeling becomes inevitable. The writer's job is not to label emotion but to assemble the physical world so precisely that the reader's nervous system responds before the mind has time to categorize the response. Ezra Pound called this the ",
            { text: "Image", emphasized: true },
            ": not a picture, but a unit that presents an intellectual and emotional complex in an instant of time. The image does not describe experience. It ",
            { text: "is", emphasized: true },
            " the experience.",
          ],
        },
        {
          type: "pullquote",
          quote: "No ideas but in things.",
          cite: "— William Carlos Williams",
        },
        {
          type: "paragraph",
          content: [
            "Williams's dictum is the most useful single instruction in the pedagogy of image. It does not mean that fiction cannot contain ideas — it means that ideas in fiction must be grounded in physical reality to have any force. The moment a narrative loses contact with the concrete world — with the weight of objects, the specific quality of light, the texture of a surface under a hand — it begins to float. Floating prose feels literary to writers who confuse abstraction with sophistication. Readers feel something else: disconnection.",
          ],
        },
        {
          type: "card",
          title: "Abstract vs. Concrete: A Diagnostic",
          paragraphs: [
            "Abstract: The house had an atmosphere of decay.",
            "Concrete: The porch screen had pulled away from its frame on one side, and hornets had built a nest in the gap. The wood beneath it was the color of wet newspaper.",
            'The first sentence names a quality. The second creates a world the reader can inhabit. Notice: the second sentence does not use the word "decay" — but the reader has no choice but to feel it.',
            "The test: can you photograph what you've written? If yes, it is concrete. If no, it is abstract and needs grounding.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Sensory detail does not mean visual detail only. Prose that relies exclusively on the eye is impoverished prose. The full sensorium is available: sound (the specific pitch of a voice, the character of a room's silence), smell (the most visceral and memory-laden sense, and the most underused in fiction), touch and texture, temperature, proprioception — the felt sense of a body in space. When you write a scene, ask: what does this place smell like? What does the air do to exposed skin? What is the character's body doing while this conversation is happening? The answers to those questions are your material.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "One further principle, which will save you from the opposite error: specific detail is not the same as ",
            { text: "catalogued", emphasized: true },
            " detail. A paragraph that lists every object in a room is not more vivid than a paragraph that isolates one detail with precision. Selection is the craft. The detail you choose to render tells the reader where to look — and what to feel. Choose the detail that carries the most weight for the least words, and trust the reader to populate the rest of the scene from their own experience of the physical world.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Image Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the image often does double work: it renders the physical world and simultaneously externalizes a character's interior state. This is the objective correlative — T.S. Eliot's term for the set of objects, situations, or events that evokes a particular emotion without naming it. When Chekhov puts a guitar in the corner of a room and never explains it, the guitar is doing emotional work. Your images should always be doing at least two things: showing the world, and showing what the character carries into the world.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: 'In screenwriting, image is the medium itself — the script is a blueprint for a camera, and everything the audience knows must come through what can be seen and heard. The screenwriter who writes "he feels trapped" has written a direction to the actor, not to the camera. "He crosses to the window, checks the latch, and steps back" — that is a camera-ready image. In playwriting, the stage image (the physical arrangement of bodies, objects, and space) is a distinct compositional element. Directors and designers will execute it, but the playwright establishes the image\'s governing logic.',
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the image is the primary evidence that the narrator was actually present — not constructing a retrospective argument but inhabiting a specific moment in time. The images that survive memory are rarely the ones we would choose; they are sensory fragments that lodged somewhere before the mind's editorial function could screen them. The memoirist's task is to trust those fragments, to render them precisely rather than explaining what they mean, and to resist the temptation to reach for significance too quickly. The image earns the interpretation that follows. It does not require it.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Right-Branching Sentences",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 5 of 60 — The Right-Branching Sentence",
          intro: [
            "Last week you learned the three methods by which sentences grow: addition, modification, and embedding. This week focuses on where that growth happens — specifically on the right-branching sentence, which front-loads its main claim and then extends outward to the right, accumulating detail, qualification, and texture after the base clause is complete.",
            "The right-branching sentence is the dominant structure of English prose, and for good reason: it delivers its subject and verb early, giving the reader a stable footing before the modifying material arrives. It is the sentence of observation, of accumulation, of the world being added to itself.",
          ],
          rule:
            "A right-branching sentence places its base clause first and extends to the right through modifying phrases, participial constructions, appositives, and coordinate clauses — delivering the main claim before the qualifications arrive.",
          examples: [
            {
              label: "Simple right-branch (one free modifier)",
              text: "She stood at the window, watching the street fill with rain.",
            },
            {
              label: "Extended right-branch (multiple free modifiers, coordinate)",
              text: "She stood at the window, watching the street fill with rain, her coffee cooling on the sill, the neighbor's dog barking twice and then going quiet.",
            },
            {
              label: "Right-branch with appositive",
              text: "He handed her the letter, a single folded page, unsealed.",
            },
            {
              label: "Contrast — left-branching (modifiers before the base clause)",
              text: "Watching the street fill with rain, her coffee cooling on the sill, she stood at the window.",
            },
          ],
          outro: [
            "The right-branching sentence creates a particular sensation of time: it feels like watching, accumulating, adding. The left-branching sentence (modifiers first, base clause last) creates delay and withholding — it builds toward the claim rather than away from it. Both are useful. The right-branch is the workhorse; the left-branch is the emphasis tool.",
            "Francis Christensen's foundational research on the cumulative sentence — the mature writer's version of the right-branch — will be the centerpiece of the Phase 2 grammar curriculum. For now, practice right-branching as a default: put the subject and verb first, then let the sentence grow.",
          ],
          exercise:
            "Write three right-branching sentences, each describing a specific physical place you know well. Each sentence must contain at least two free modifiers after the base clause. Then rewrite one of them as a left-branching sentence (move all modifiers before the subject and verb). Read both versions aloud. Spend 10 minutes total — the goal is to feel the structural difference in your ear, not to produce finished prose.",
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
              title: "Selected Poetry",
              author: "William Carlos Williams",
              href: "https://www.poetryfoundation.org/poets/william-carlos-williams",
              note: 'Read "The Red Wheelbarrow," "This Is Just to Say," and "Spring and All" — free at the Poetry Foundation. These are not assigned as poems to be analyzed; they are assigned as demonstrations of what happens when a writer trusts the concrete object completely. Read them as a prose writer asking: what is this technique and how does it translate to fiction?',
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Bird by Bird",
              author: "Anne Lamott",
              href: "https://bookshop.org/p/books/bird-by-bird-some-instructions-on-writing-and-life-anne-lamott/6697453",
              note: 'Read the chapter titled "Index Cards" and the chapter on school lunches. Lamott is one of the best writers on the relationship between observation and memory — on keeping the notebook of the world before you sit down to write the page. Read with attention to how she moves between the general and the specific.',
              badge: "Purchase",
            },
            {
              number: "03",
              title: "In the American West (photographs)",
              author: "Richard Avedon",
              href: "https://bookshop.org/p/books/in-the-american-west-richard-avedon/7440023",
              note: "Optional but recommended. Avedon's portraits are exercises in what a single, precisely chosen image can hold. If you have library access, spend 20 minutes with this book before you write. The photographs are an argument about what specificity does that generalization cannot — and they will change how you look at the people in your fiction.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Room That Holds the Feeling",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Choose an emotion — grief, anticipation, dread, relief, longing. Do not name it in the exercise. Your task is to render a physical environment so specifically that the emotion becomes inescapable without ever being stated.",
            "Constraints: Write a scene in which a single character moves through or inhabits a specific physical space. You may use all five senses; you must use at least three. No abstract nouns of emotion (no sadness, grief, loss, joy, fear, longing, dread, anger, hope). No sentences that begin with 'She felt' or 'He thought' or 'It seemed.' The character may have a want — something they are trying to do or find or avoid — but the dominant pressure of the piece is sensory observation, not plot.",
            "When you finish the draft, read it aloud and mark every moment where you reached for abstract language rather than a physical detail. Those are the places to return to in revision.",
          ],
          target: "600–900 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 5 — The Abstraction Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week the AI serves as a reader with a single question: where is the prose abstract when it could be concrete? Paste your completed exercise and use the prompt below. The AI will not rewrite your work — it will identify the places where you have told rather than shown.",
          prompt:
            "Read this piece carefully. Do not rewrite anything. Identify: (1) every sentence or phrase that names an emotion or abstract quality directly instead of rendering it through physical detail — list them; (2) the three most vivid, concrete, physically specific images in the piece — quote them; (3) one place where the prose loses contact with the physical world for more than two sentences. Be specific. Do not suggest revisions.",
          questions: [
            "Which sentences name emotion instead of rendering it?",
            "What are the three most physically specific images?",
            "Where does the prose lose contact with the concrete world?",
            "Which sense is most underused — and where could it enter?",
          ],
          note: "Pay particular attention to the AI's answer to the third question. Extended stretches of abstraction are usually the places where the writer ran out of observed detail and substituted language for experience. That is the location in the draft that needs the most work.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Photograph Test",
      blocks: [
        {
          type: "tip",
          icon: "📷",
          name: "Can You Photograph It?",
          paragraphs: [
            "Read a paragraph of your prose and ask, sentence by sentence: could a photographer take a picture of what I have described? If yes, the sentence is concrete. If no — if the sentence describes a feeling, a quality, an atmosphere without giving it physical form — it is abstract and needs grounding.",
            "This is not a rule against interior states or reflection. It is a diagnostic. When you identify an abstract sentence, your next task is simple: what is the physical thing in this scene that is carrying this quality? Find the object, the texture, the sound that holds the abstraction, and render that instead.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Detail You Cannot Forget",
      blocks: [
        {
          type: "journal",
          title: "The Detail You Cannot Forget",
          question:
            "Think of a specific, physical detail from your past — not an event, not a feeling, but a single concrete thing: the pattern on a piece of fabric, the way a particular door sounded, the smell of a specific room. A detail that has stayed with you without your knowing why. Describe it as precisely as you can. Then ask: what is it holding? What does its persistence tell you about what was happening around it?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "These are the details that belong in your fiction. Not because they are autobiographical, but because they were charged enough to survive — and charged material, rendered precisely, transmits its charge to the reader.",
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
            "By the end of this week, you should have: written one fully sensory scene without a single named emotion; completed the right-branching sentence exercise; read the Williams poems as a prose writer rather than a poetry student; and used the AI workshop to audit your own abstractions.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 6",
          paragraphs: [
            "Week 6 turns from what the prose shows to what it withholds. Subtext — the layer of meaning operating beneath the surface of dialogue and action — is the next major craft concept. You will learn how implication works, why the unsaid is often more powerful than the said, and how to build the gap between what characters say and what they mean.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: abstraction is the path of least resistance in prose. It is always faster to name a feeling than to build the physical world that makes it inevitable. The image takes more time. It is also the only thing that lasts.",
          ],
        },
      ],
    },
  ],
};
