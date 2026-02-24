import type { WeekData } from "@/lib/mfa/types";

export const week17Data: WeekData = {
  weekNumber: 17,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Interiority — Free Indirect Discourse & Psychic Distance",
  emphasizedWord: "Free Indirect Discourse & Psychic Distance",
  deck: "Interiority is fiction's unique superpower: direct access to a character's thoughts, sensations, memories, and unconscious associations. This week introduces the two advanced tools that make that access possible — and precise.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Interiority & FID" },
    { label: "Grammar", value: "The Compound-Complex Sentence" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Inside of the Inside",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Of all the things that separate the novel from every other narrative form, interiority is the most radical. Film can show you what a character does. Theater can show you what they say and how they move. But the novel — and the novel alone among the major narrative forms — can put you inside a consciousness. Not just narrating what a character thinks, as a journalist might report it, but inhabiting that thought from the inside: its texture, its particular vocabulary, its associative logic, the way it moves between the surface of a room and the depths of a memory without transition, because that is how thought actually moves.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The technique that makes this possible at the sentence level is free indirect discourse. Free indirect discourse (FID) is the most important and most underexplained technique in all of literary fiction. It merges the narrator's third-person voice with the character's first-person interiority without quotation marks, without attribution tags, without any announcement of the transition. The prose simply slides — from narration into consciousness, and back out — with an ease so complete that the reader often does not notice it happening. Consider: ",
            { text: "She looked at the clock. It was already three. He was never coming.", emphasized: true },
            " The first sentence is narration. The second and third are FID — the character's thought rendered in the narrator's grammatical person (third), the narrator's tense (past), but the character's voice, the character's register, the character's specific devastation. The seam between narration and interiority has disappeared.",
          ],
        },
        {
          type: "pullquote",
          quote: "Free indirect discourse is the technique that allows a novelist to be simultaneously the narrator observing a character and the character being observed — to occupy two consciousnesses at once.",
          cite: "— craft principle, after Austen and Flaubert",
        },
        {
          type: "paragraph",
          content: [
            "FID was present in embryo in Austen, developed systematically by Flaubert, and made so central to the novel's apparatus by Woolf that contemporary literary fiction without it is almost inconceivable. It is the technique behind the phrase 'close third person' — the narrator who is not omniscient and not a character, but who inhabits a character's consciousness so completely that the distinction between the two begins to dissolve. When you read Woolf's Mrs. Dalloway and find the streets of London and Clarissa's memories interpenetrating in mid-sentence, with no attribution and no quotation marks, you are reading FID deployed at its maximum extension. The sentence itself has become the consciousness.",
          ],
        },
        {
          type: "card",
          title: "Free Indirect Discourse: The Three Tests",
          paragraphs: [
            "The grammar test: FID uses the narrator's third-person pronouns and past tense but the character's vocabulary, register, and first-person thinking. 'Was she never to have a room of her own?' is FID — the grammar says narrator (third-person 'she'), but the voice says character (the italicized exasperation, the rhetorical question).",
            "The voice test: If you switched the pronouns to first person and the past tense to present, would it read as direct interior monologue? 'Am I never to have a room of my own?' — yes. If the sentence passes the voice test, it is FID.",
            "The seam test: FID has no announcement. There are no quotation marks, no 'she thought,' no 'she wondered.' The seam between narration and consciousness has been removed. If you can see the seam — if the reader must be told that this is thought — the FID is not yet fully achieved.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The second tool this week is John Gardner's concept of psychic distance — the spectrum of narratorial closeness to character consciousness, from maximum distance to maximum intimacy. Gardner describes six levels, from the most removed ('It was winter of the year 1853. A large man stepped out of a doorway') to the most intimate (raw, unattributed thought: 'Lord, lord, he thought, not again'). These are not fixed categories but points on a continuum, and skilled literary fiction moves fluidly up and down the scale within a scene — using distance strategically, moving into intimacy at the moment of maximum emotional pressure, pulling back to manage pacing or to create irony.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The relationship between FID and psychic distance is precise: FID is the primary technique of the closer levels of Gardner's scale. You cannot write at Level 5 or Level 6 without FID. And the filtering problem — the unnecessary perception verbs that insert the narrator between the reader and the experience — is the symptom of a writer who is attempting close distance but maintaining the grammar of the distant levels. 'She saw that the door was open' is distant: the narrator is reporting what a character perceived. 'The door was open' is close: the door's openness arrives in the prose without the narrator's mediation, as it would in consciousness. Remove the filter; close the distance.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Interiority Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Interiority is the specific power that literary fiction holds over every other form, and FID is the technique that makes it available at the sentence level without the mechanical apparatus of internal monologue markers. The literary fiction writer's discipline with FID is control of the seam: knowing when you are in narration and when you are in consciousness, and making the transition earn the dissolution it creates. FID used carelessly produces prose that feels unanchored — the reader cannot tell whose voice they are in, and the intimacy becomes confusion rather than immersion. FID used deliberately is the closest approach to rendering consciousness from the inside that prose has yet achieved.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting has no interiority. The camera cannot see thought. The entire art of screenwriting is making inner life visible through external behavior — through what the character does, chooses, avoids, cannot say. This constraint is not a limitation to resent; it is the discipline that produces the screenplay's specific power. The screenwriter who understands FID as a technique has a useful defamiliarization tool: for every interior moment in a scene you are writing, ask what it would look like if the camera could only see the outside. What does the character do with their hands? What do they look at? What do they not say? The externalized answer is often more powerful than the interior one.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Memoir operates differently from fiction with respect to interiority. The 'I' narrator is simultaneously inside the experience and outside it, remembering it — which means memoir has access to a specific form of doubled consciousness that fiction's FID cannot replicate. The experiencing self at the time of the event had interiority that was innocent of what would happen next. The narrating self looking back has knowledge the experiencing self did not. The memoirist's craft challenge is managing the gap between these two consciousnesses: how much retrospective understanding to bring to a scene, and when to let the experiencing self's incomplete understanding stand as the most honest account available. Vivian Gornick's distinction between the situation and the story is the memoirist's version of psychic distance.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Compound-Complex Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 17 of 60 — The Compound-Complex Sentence",
          intro: [
            "The compound-complex sentence is the most architecturally dense sentence type in Phase 1: it contains at least two independent clauses (the compound element) and at least one dependent clause (the complex element). It is, structurally, both a compound sentence and a complex sentence simultaneously. This architecture allows it to do something neither type can do alone: it can hold multiple independent actions or states in balance while subordinating a third element — condition, cause, concession, or time — that qualifies the entire compound relationship.",
            "Used deliberately, the compound-complex sentence is a precision instrument for moments when the narrative must hold more than two elements in relationship at once — when the scene requires a balance of forces that a simple compound sentence cannot hold because one of those forces needs to be qualified, or when a complex sentence cannot do the work because there are genuinely two equal things that both need to be present as independent clauses.",
          ],
          rule: "The compound-complex sentence contains at least two independent clauses joined by a coordinating conjunction or semicolon, and at least one dependent clause. The dependent clause can modify either independent clause, the compound structure as a whole, or stand in a temporal or conditional relationship to the rest of the sentence. Every element must be earning its place: if either independent clause can be subordinated, it should be.",
          examples: [
            {
              label: "Compound-complex — dependent clause modifying the first independent clause",
              text: "Because she had waited too long, the room was empty and the last of the light had gone.",
            },
            {
              label: "Compound-complex — dependent clause modifying the second independent clause",
              text: "She opened the letter, and her hands stopped moving when she read the first line.",
            },
            {
              label: "Compound-complex — dependent clause qualifying the compound relationship",
              text: "She had known him for twenty years, and she trusted him completely, although she could not have explained why.",
            },
            {
              label: "The economy test: could this be simpler?",
              text: "'She opened the door, and it was dark inside because the bulb had gone' — three clauses. Ask: does each independent clause genuinely require its independence? Is the 'because' dependent clause necessary? If both independent clauses are genuinely equal and the dependent clause genuinely qualifies both, keep the structure. If one independent clause can be subordinated without loss, subordinate it.",
            },
          ],
          outro: [
            "The compound-complex sentence is the most likely sentence type to accumulate beyond its usefulness. Because it holds more elements than simpler sentence types, it invites the addition of yet more — a fourth clause, a second dependent relationship, a qualifying phrase that qualifies a qualification. The discipline is economy: the compound-complex sentence earns its complexity only when the content genuinely requires two independent and one dependent relationship simultaneously. If the content is simpler than the structure, simplify the structure.",
            "With the compound-complex sentence, Phase 1 has covered the full range of English sentence architecture. Next week completes the Phase 1 synthesis before Phase 2 begins in Spring. You now have the complete vocabulary: kernel, branching types, openers, inversion, coordination, subordination, compound, complex, and compound-complex. Phase 2 will teach you how to build sentences that grow by accretion — the cumulative sentence and its architecture of free modifiers.",
          ],
          exercise:
            "Write five compound-complex sentences, each on a different emotional situation in your current writing. After writing all five, apply the economy test to each: identify every clause and ask whether each independent clause genuinely requires its independence. For any sentence where you can subordinate one independent clause without loss, write the subordinated version and compare. The goal is not to prefer compound-complex over complex — it is to confirm that when you use compound-complex, you are using it because the content requires it.",
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
              note: "Read the sections on psychic distance specifically — Gardner's six-level scale and his analysis of how prose moves between them. If you purchased this book for Week 7, you have it. If not, purchase it now: it will be referenced throughout the spring semester. Read the psychic distance section twice: once to understand the scale, once to apply it to something you are currently writing. Where on the scale are you operating? Is that the right distance for this material?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Mrs Dalloway, opening 20 pages",
              author: "Virginia Woolf",
              href: "https://www.gutenberg.org/ebooks/5018",
              note: "If you read this for Week 15's cross-genre exercise, read it again — this time not as a study in spatial description but as a study in FID. Mark every sentence where you shift from narration into Clarissa's consciousness. Notice: there are no quotation marks, no attribution tags, no 'she thought.' The seam is gone. Find at least ten instances of FID and for each, apply the voice test: if you switch to first person present, does it read as interior monologue? Where FID is most fully achieved, the answer is yes.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "A Swim in a Pond in the Rain",
              author: "George Saunders",
              href: "https://bookshop.org/p/books/a-swim-in-a-pond-in-the-rain-in-which-four-russians-give-a-master-class-on-writing-reading-and-life-george-saunders/14543267",
              note: "Read any single story chapter — Saunders analyzes a complete short story, sentence by sentence, showing exactly how the story makes its effects. His treatment of interiority and psychic distance in Russian fiction is one of the best practical accounts available of how FID works at the paragraph level. If you do not own this book, prioritize it: it will be used again in the spring semester and is among the most useful craft books published in recent years.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Psychic Distance Drill",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the same moment at each of Gardner's six levels of psychic distance. Use your own character and situation — a moment of emotional significance in a piece you are developing. The moment should be the same across all six versions: the same event, the same character, the same room or landscape. What changes is the distance between the narrator and the character's consciousness.",
            "Level 1 — Maximum distance (historical, third-person, impersonal): 'It was winter of the year 1987. A woman stood at a window on the fourth floor of a building on the north side of the city.'",
            "Level 2 — Narrator observes from outside (physical description, no interiority): 'She stood at the window, her hands flat on the glass, her face turned toward the street.'",
            "Level 3 — Narrator reports thoughts and feelings as facts: 'She felt cold, though the room was warm. She thought about the letter again.'",
            "Level 4 — FID begins (character's voice enters the narrator's grammar): 'The room was warm enough. The letter, though. She couldn't stop thinking about the letter.'",
            "Level 5 — Deep FID (character's voice dominates): 'Why had she kept it? Three years in a drawer and she hadn't thrown it out. Couldn't. Wouldn't let herself.'",
            "Level 6 — Maximum intimacy (interior monologue, raw thought): 'Three years. The drawer. His handwriting. Don't open it. Don't.'",
            "Write 100–150 words at each level (total: 600–900 words across all six). Then write a single analytical paragraph identifying which level best serves this particular moment in your story — and why. The 'why' must be specific: what does the chosen distance enable that the others cannot?",
          ],
          target: "700–900 words (six levels plus analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 17 — The Distance Rewrite",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Find a passage of your own writing — 150 to 300 words — that remains at a consistent psychic distance throughout. It can be from any exercise this semester. Paste it with a brief note identifying what psychic distance level you believe it is operating at. Then use the prompt below.",
          prompt:
            "I am going to paste a passage of my own writing. I believe it is operating at approximately [your identified level] on Gardner's psychic distance scale. Rewrite this passage twice: once at a significantly greater distance from the character's consciousness — more impersonal, more narratorial, less access to interiority — and once at a significantly closer distance — deeper into the character's consciousness, using free indirect discourse in the closer version if appropriate. Preserve the same events and information in both rewrites; change only the distance. Here is the original passage: [paste your passage].",
          questions: [
            "In the distant version: what has the prose lost that the original had? What has it gained?",
            "In the close version: where does the AI use FID? Apply the voice test to those sentences — do they pass?",
            "Which of the three versions (original, distant, close) best serves this moment? Is your original distance actually the right one?",
            "What does the close version reveal about what your original distance was costing — what interiority was available but not accessed?",
          ],
          note: "The purpose of this exercise is not to prefer closer distance — it is to make your current distance a choice rather than a default. Many writers have a distance they unconsciously operate at without knowing it is a choice. Seeing the passage at two other distances makes the choice visible. After studying the AI's rewrites, revise the original passage at the distance you now believe serves the moment — which may be your original distance, confirmed.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Filtering Problem",
      blocks: [
        {
          type: "tip",
          icon: "🔎",
          name: "Remove the Narrator Between the Reader and the Experience",
          paragraphs: [
            "Filtering is the technical term for the unnecessary perception verbs that insert the narrator between the reader and a character's direct experience: 'She saw that the door was open' versus 'The door was open.' 'He noticed the rain had started' versus 'The rain had started.' The filter — saw, noticed, felt, realized, heard, watched, thought, wondered — creates distance by attributing the experience to a perceiver rather than rendering it directly. Unless you want distance at that moment, the filter is weakening your prose.",
            "Search your strongest draft for: saw, noticed, felt, realized, heard, watched, thought, wondered, seemed, appeared. For each instance, ask: is this filter creating distance deliberately — is the distance serving the moment? If not, remove the filter. 'The door was open' is more immediate than 'she saw that the door was open,' and immediacy is almost always what close interiority requires. The filter is distance you don't know you're creating.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Distance at Which Memory Becomes Manageable",
      blocks: [
        {
          type: "journal",
          title: "The Distance at Which Memory Becomes Manageable",
          question:
            "Think of a difficult memory — not the most difficult, but one that still carries resistance when you approach it directly. Try to write it at three different distances. First: at maximum remove, as though reporting a fact about a stranger. Second: as the narrator observing the experiencing self from close outside. Third: from inside, in the present tense of the original experience, without the retrospective frame. Notice at which level the memory becomes available, and at which level it becomes too close to examine. What does that threshold tell you about how you process experience? Where is your default distance — and is it the distance the material requires, or the distance at which it is most survivable?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The memoirist's version of psychic distance is ethical as well as technical: the question is not only what distance allows the most vivid rendering but what distance is honest — where the experiencing self's incomplete understanding should stand, and where the narrating self's retrospective knowledge should be allowed to speak. There is no universal answer. But there is always an answer that is more honest than the default.",
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
            "By the end of this week, you should have: written the psychic distance drill across all six levels for a moment in your current work; read the Woolf opening and marked at least ten instances of FID, applying the voice test to each; completed the compound-complex sentence exercise and applied the economy test to confirm each sentence's complexity is justified; and used the distance rewrite to make your current psychic distance a deliberate choice rather than a default.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 18",
          paragraphs: [
            "Week 18 is the fall semester's close — a thesis opening week and a full Phase 1 synthesis. You will write the first 1,000–1,500 words of the project you most want to pursue — not a description of what it will be, but the thing itself. And you will bring the complete Phase 1 grammar vocabulary to a full synthesis exercise, completing the sentence foundations curriculum before Phase 2 begins in Spring.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A note on FID: this is not a technique you will master in a week. It is a technique you will spend years learning to control — to make the seam between narration and consciousness disappear so completely that the reader cannot find it. But after this week you can see the technique at work in what you read, which is the first step. Read the Woolf, and then read your own prose, and ask: where am I in narration and where am I in consciousness? The answer will tell you where your work is, and where it could go.",
          ],
        },
      ],
    },
  ],
};
