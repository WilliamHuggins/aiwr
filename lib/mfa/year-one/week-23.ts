import type { WeekData } from "@/lib/mfa/types";

export const week23Data: WeekData = {
  weekNumber: 23,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Psychic Distance — The Variable Lens",
  emphasizedWord: "The Variable Lens",
  deck: "In Week 17 you learned to identify Gardner's six levels and write at each one separately. This week you learn to move. Psychic distance is not a setting to choose once — it is a dial the writer turns throughout a scene, using the movement itself as an instrument of revelation, pacing, and emotional effect.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Psychic Distance" },
    { label: "Grammar", value: "Sentence Variety & Rhythm" },
    { label: "Exercise", value: "800–1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Dial, Not the Switch",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1auBnu5q9CKD5EcIAuQCxioZORfsvwabS/preview" },
        {
          type: "paragraph",
          content: [
            "In Week 17 you encountered Gardner's six levels of psychic distance and practiced writing at each level separately. That was the taxonomy. This week is the application: psychic distance in skilled literary fiction is not a setting chosen at the story's outset and maintained throughout. It is a variable — a dial the writer turns within a scene, using the movement itself as a craft instrument. Closing in toward a character's consciousness at the right moment creates a specific kind of revelation: the reader feels themselves being drawn inside, the walls of the narrative thinning between the external world and the character's inner experience. Pulling back to distance creates another kind of effect: irony, breathing room, the sense of a narrator who can see around the character's limited perspective.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Virginia Woolf's ",
            { text: "Mrs Dalloway", emphasized: true },
            " is the supreme example of psychic distance in constant, fluid motion. In the opening twenty pages alone, the prose moves between Clarissa's consciousness and the external world of London's streets dozens of times — not in marked transitions, not with announced shifts of mode, but through the sentence itself. The prose slides. A sentence begins in external description and arrives in interior perception without transition, because consciousness itself does not transition: it simply is both at once, the external world always already filtered through the experiencing self.",
          ],
        },
        {
          type: "pullquote",
          quote: "Psychic distance is not what the narrator knows. It is how far the narrator has moved inside — how completely the prose has become the character's consciousness rather than a report of it.",
          cite: "— craft principle, after Gardner",
        },
        {
          type: "paragraph",
          content: [
            "George Saunders's 'Tenth of December' uses psychic distance as a governing structural principle: the story alternates between two focal characters, and each character has their own characteristic distance range. The boy Robbie narrates at levels 4 and 5 — the language is his, the perception is his, the wild imaginative life is rendered directly. Don Eber, the dying man, narrates at levels 5 and 6 in his most interior passages, where the prose itself becomes the movement of a consciousness at the edge of its functioning. Saunders uses the shifts in distance to create dramatic irony: the reader understands each character's situation more fully than either character does, because the reader has been inside both consciousnesses and can triangulate what neither alone can see.",
          ],
        },
        {
          type: "card",
          title: "Using Distance Movement Strategically",
          paragraphs: [
            "Closing in for revelation: The most common and most powerful use of distance movement is to begin a scene at a moderate remove and close in gradually as the scene approaches its emotional center. The reader feels the closing-in as a form of pressure — the narrator moving toward something, the external world becoming less present as the character's interior becomes more so. The moment of maximum intimacy should coincide with the scene's moment of maximum emotional stakes.",
            "Pulling back for irony or pacing: After a passage of deep interiority, pulling back to distance creates relief and perspective. It can also create irony: the distant narrator sees the character from outside and registers the gap between the character's self-understanding and the external evidence. Used after a passage of intense FID, a sudden pull to distance can be devastating — the reader has been inside the character's self-deception, and the external view confirms what the character cannot see.",
            "Holding distance to create suspense: Sometimes the most effective move is to refuse interiority — to narrate a charged scene at a deliberately remote distance, letting the reader feel the heat of what is not being accessed. The scene that should close in and doesn't creates a specific unease: the reader waits for the intimacy, and when it doesn't come, the distance itself becomes expressive.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The mechanics of distance movement are primarily syntactic and lexical. Moving toward intimacy: shorter sentences, present-tense verbs or immediate past, the character's own vocabulary entering the prose, the removal of filter verbs ('she saw,' 'she felt'), the appearance of FID. Moving toward distance: longer, more syntactically complex sentences, formal vocabulary, the return of filter verbs and attribution, the sense of a narrator standing slightly outside and slightly above. The movement is made in the sentence itself — not in a paragraph break, not in a section division, but in the quality of the language shifting register.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Psychic Distance Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's specific power with psychic distance is the ability to move the dial within a sentence — to begin in external narration and arrive in consciousness without announcement, through the quality of the language itself. This is the technique Woolf radicalized and that every subsequent serious literary novelist has inherited. The discipline is control of the movement: knowing at every moment where on the dial you are, making the movement deliberate rather than accidental, and using the closing-in and pulling-back as expressive instruments rather than as uncontrolled drifts. The writer who does not know their default distance cannot control the movement away from it.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting has no psychic distance in the narrative sense — there is no narrator whose closeness to character consciousness can be adjusted. What screenwriting has instead is camera distance: extreme close-up, close-up, medium shot, wide shot, establishing shot. These are the cinematographic equivalents of Gardner's scale, and the screenwriter works with the director to choose them. The playwright works with the actor's body: a character speaking directly to the audience (soliloquy, aside, direct address) is at maximum intimacy; a character speaking to another in a full-stage scene is at maximum distance. Understanding Gardner's scale gives the screenwriter and playwright a vocabulary for what they are asking camera and actor to do.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Memoir's relationship to psychic distance is complicated by the doubled consciousness the form requires: the experiencing self and the narrating self are always both present, and the distance between them is always a variable the memoirist controls. When the narrating self moves toward the experiencing self — when retrospective distance collapses and the prose becomes the past's immediate experience — the memoir achieves its most intense moments. When the narrating self pulls back to observe the experiencing self from outside — when the present narrator reflects on who that past person was — the memoir achieves its understanding. The memoirist's version of the distance dial is the management of that temporal gap: how close to the past self, and when.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Sentence Variety & Rhythm",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 23 of 60 — Sentence Variety and Rhythm: Mixing Lengths Intentionally",
          intro: [
            "Sentence rhythm is one of the least-taught and most important elements of prose style. A string of sentences of similar length — regardless of how well-crafted each individual sentence is — creates a numbing monotony. The reader's ear stops hearing. Skilled prose writers vary sentence length as a musician varies note duration: long sentences for complexity, accumulation, and suspension; short ones for emphasis, impact, and rest. The variation is not random. It is motivated by the emotional and dramatic content of the moment.",
            "This topic belongs in Phase 2 because the tools for building variation are the tools Phase 2 has been building: the cumulative sentence provides length and accretion; the periodic sentence provides suspension; the balanced sentence provides symmetry and satisfaction; the tricolon provides the rhythm of completion. The short sentence — sometimes a fragment — provides the percussion that makes everything else legible. Without the short sentence as counterpoint, the long sentences lose their effect.",
          ],
          rule: "Sentence rhythm is created by deliberate variation of length, structure, and complexity. The short sentence derives its impact from contrast with what precedes it — it lands harder after a long sentence than after another short one. The long sentence's suspension is felt only against the backdrop of shorter, simpler sentences. Map your rhythms: no two consecutive sentences of the same approximate length is the discipline.",
          examples: [
            {
              label: "Monotonous — all sentences of similar length",
              text: "She walked into the room. She saw him standing by the window. She stopped and looked at him. He didn't turn around. She waited for a moment. Then she spoke.",
            },
            {
              label: "Varied — lengths motivated by the emotional content of each beat",
              text: "She walked into the room and stopped. He was standing by the window, his back to her, one hand flat on the glass as though bracing against something she couldn't see. She waited. He didn't turn.",
            },
            {
              label: "What the variation does",
              text: "Sentence 1: short — her entrance, her stop, action delivered cleanly. Sentence 2: long, cumulative — the full picture of him, the detail of his hand, the physical gesture that implies what she cannot see. Sentence 3: kernel, three words — her stillness, rendered as stillness. Sentence 4: short with inversion — final, irrevocable. The rhythm enacts the scene.",
            },
            {
              label: "The power sentence — very short after very long",
              text: "'She had spent twenty years building something she believed in, something that had cost her more than she had known it would cost when she began, something whose value she still — even now, standing in the wreckage — could not quite bring herself to question. It was gone.' The final two words land with disproportionate force because of the long sentence's accumulation preceding them.",
            },
          ],
          outro: [
            "The practical discipline is the sentence-length audit: take any passage of your prose and count the words in each sentence. Map the variation. A paragraph where every sentence is between fifteen and twenty-five words is a paragraph that has stopped varying — even if each sentence is individually competent, the cumulative effect is flat. Introduce a sentence of five words. Introduce a sentence of fifty. The contrast creates the music.",
            "A note on the relationship between psychic distance and sentence length: shorter, simpler sentences tend toward intimacy — they enact the compressed, immediate quality of present experience. Longer, more complex sentences tend toward distance — they enact the organizing, contextualizing intelligence of a narrator who can see enough to subordinate. This is not a rule; it is a tendency. But when you close in on a character's consciousness (moving down Gardner's scale), shortening and simplifying the sentences accelerates the effect. When you pull back to distance, lengthening and complexifying reverses it.",
          ],
          exercise:
            "Find a published passage of at least 200 words from any prose you are currently reading. Count the word-length of every sentence. Write the numbers in sequence. What is the range? What is the distribution? Where are the shortest sentences? Do they coincide with moments of emphasis or revelation? Now write an original paragraph on any subject — 150 to 200 words — that deliberately mirrors the rhythmic shape of the published model. Not the content or the style: the pattern of lengths. Long, short, medium-long, very short, long. Then write a second version of the same paragraph with the opposite rhythmic shape. Read both aloud.",
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
              note: "Return to the psychic distance sections — you read them in Week 17 before the Psychic Distance Drill. Read them again now, after five weeks of POV work and with the concept of distance movement rather than distance levels as your primary focus. What does Gardner say about how transitions between levels work? What signals the shift? Read with the question: not which level is this passage at, but how does this passage move between levels?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Mrs Dalloway, pages 20–40",
              author: "Virginia Woolf",
              href: "https://www.gutenberg.org/ebooks/5018",
              note: "Free on Project Gutenberg. Read pages 20–40 — deeper into the novel than the Week 15 and Week 17 readings. Mark every distance transition: every moment where the prose moves from external narration toward consciousness, and every moment where it pulls back. Notice that many transitions happen mid-sentence, without announcement. This is FID operating at its most complete: the seam between narration and consciousness has been made invisible. Count how many times Woolf moves the dial in a single page. The answer will surprise you.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: '"Tenth of December"',
              author: "George Saunders",
              href: "https://bookshop.org/p/books/tenth-of-december-stories-george-saunders/6697453",
              note: "Read 'Tenth of December' — the title story of Saunders's collection. This is the clearest available example of psychic distance as a governing structural principle: two characters with radically different consciousness registers, each narrated at the distance level that corresponds to their specific psychology. Note the Robbie sections (levels 4–5, the boy's imaginative language dominates) versus the Don Eber sections (levels 5–6 in his most interior passages, the prose becoming the movement of a consciousness at its limits). How does Saunders use the shifts in distance to create dramatic irony between the two characters?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Depth Dive",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a single continuous scene that begins at maximum distance and moves gradually toward maximum intimacy over its full length. The reader should feel the closing-in — should feel themselves being drawn progressively inside the character's consciousness — without being able to identify the exact moment any transition occurred.",
            "Begin at Gardner's Level 1 or 2: remote, historical, impersonal. The narrator observes from outside. No interiority. The scene is established as fact. Then move — slowly, through the middle levels, adding register, adding the character's vocabulary, removing filter verbs, approaching FID — until you arrive at Level 5 or 6: the character's raw, unfiltered thought, the prose itself becoming consciousness.",
            "Do not make any transition abrupt. Each sentence should be a small movement — closer by one degree than the sentence before, or holding at the same level for a sentence or two before moving again. The overall arc is a sustained closing-in; the moment-to-moment movement should be almost imperceptible.",
            "Choose a moment with genuine emotional stakes — something the character has been avoiding, or approaching, or not-quite-understanding. The distance movement should be motivated: the prose closes in because the character is closing in on something, because the scene is moving toward its emotional center. The structure and the content should be the same event.",
          ],
          target: "800–1,000 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 23 — The Distance Map",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the Depth Dive exercise, paste the full scene. Use the prompt below. The AI will map the distance movement, identify where the transitions are smooth and earned, and locate any moment where the closing-in is too abrupt.",
          prompt:
            "Read this scene carefully. It is meant to begin at maximum psychic distance and move gradually toward maximum intimacy — toward the character's raw interior thought — over its full length. The reader should feel the closing-in without being able to identify the exact moment of transition. Answer these questions: (1) Map the distance movement: identify approximately where in the scene each level of Gardner's psychic distance scale is operating — from distant narration through narratorial observation, summary of thoughts and feelings, FID, and raw interior monologue. Where does the scene spend most of its time? (2) Identify three moments where the transition between levels is smooth and earned — where the closing-in feels inevitable rather than announced. Quote those moments. (3) Identify any moments where the transition is abrupt or unmotivated — where the prose jumps from distance to intimacy without building the steps between. (4) Where does the prose arrive at its deepest point? Is that the scene's emotional center? If not, where is the mismatch?",
          questions: [
            "Does the AI's distance map align with your intention? Where does it place the transitions differently from where you thought you made them?",
            "Which of the three smooth transitions the AI identifies was most conscious on your part?",
            "Where does the AI identify an abrupt transition? Looking at that moment in the prose: what would closing the gap require — one sentence, two sentences, a different word choice?",
            "Does the deepest point of the prose coincide with the scene's emotional center? If the AI identifies a mismatch, what does that tell you about where the scene's actual center is?",
          ],
          note: "The AI's distance map is a diagnostic, not an evaluation. The goal is to see the movement from the outside — to confirm that what you intended as gradual is legible as gradual, and to locate any moments where the reader would feel a jolt. A jolt is not always a failure: sometimes an abrupt shift in distance is the right move. But it should be intentional. The AI's map makes the movement visible so you can confirm which jolts are chosen and which are accidental.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Distance Default",
      blocks: [
        {
          type: "tip",
          icon: "📡",
          name: "Identify Your Default Distance — Then Practice the Opposite",
          paragraphs: [
            "Most writers have a default psychic distance they unconsciously operate at and rarely deviate from. It is the distance that feels natural, that requires no deliberate effort, that the prose falls into when the writer is not actively thinking about it. For many contemporary literary fiction writers, the default is close third — Level 4 or 5 on Gardner's scale, FID as the ambient mode. For others it is a more distant narration, a narrator who observes rather than inhabits. Neither is wrong. But the default that is never departed from is the distance that has become a limit.",
            "Identify yours. Take a page of your prose and map the levels as you just mapped the Depth Dive. Where does the prose settle? If you almost never go below Level 3, you are not accessing the intimacy available to the form. If you almost never rise above Level 4, you are not accessing the irony and perspective that distance enables. Your range is your resource. This week's Depth Dive is practice in range: forcing the prose to move through its full available spectrum rather than settling at its comfortable default.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Distance at Which Memory Is Manageable",
      blocks: [
        {
          type: "journal",
          title: "The Distance at Which Memory Is Manageable",
          question:
            "When you think about a difficult memory — not the most difficult, but one that still carries some resistance — how close can you get to it? Is there a point on Gardner's scale at which the memory becomes available to you, and another at which it becomes too close to examine? Write the memory at three different distances: once at Level 1 or 2 (the distant, historical narrator: 'In the spring of that year, a woman —'); once at Level 4 (the narrator in close proximity to the experiencing self, using FID); once at Level 5 or 6 (raw interior, present-tense, the experiencing self's thought without retrospective framing). Note at which level the memory is most vivid, which level is most survivable, and which level produces writing you would want a reader to encounter.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The distance at which a memory is manageable is a craft question as well as an emotional one. The level that makes the memory most available is not always the level that makes it most powerful on the page. Sometimes the most powerful distance is the one that creates the most pressure — the one at which you are closest to what you would rather not approach. The writer's version of courage is often a distance choice.",
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
            "By the end of this week you should have: written the Depth Dive — a continuous scene moving from maximum distance to maximum intimacy without abrupt transition — and used the AI distance map to confirm that the closing-in is gradual and that the deepest point coincides with the scene's emotional center; read Woolf's pages 20–40 and counted the distance transitions per page; read Saunders's 'Tenth of December' for distance as structural principle across two focal characters; completed the sentence length audit on a published passage and written a 150-word paragraph that mirrors its rhythmic shape; and identified your default psychic distance.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 24",
          paragraphs: [
            "Week 24 is Conflict, Crisis, and Resolution — the structural engine beneath every scene you have been building. The five-week POV sequence is complete; now the curriculum moves to plot and structure. Conflict is not what happens between characters — it is the engine of narrative, the condition under which character is revealed and meaning crystallizes. Week 24 examines conflict as a craft imperative, crisis as the moment of maximum pressure, and resolution as the place where the story's question changes.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Psychic distance is the last of the five POV-sequence topics and the most technically demanding. You have now covered the full architecture of narrative perspective across six weeks: who the narrator is, what they can know, how close they can get to character consciousness, and how to move fluidly through all available distances within a single scene. What you have built in this sequence is not a set of techniques but a single integrated instrument: the capacity to control, at every moment, the reader's relationship to the consciousness at the center of your story.",
          ],
        },
      ],
    },
  ],
};
