import type { WeekData } from "@/lib/mfa/types";

export const week33Data: WeekData = {
  weekNumber: 33,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title:
    "Intensive Thesis Production III — Transitions, Surprise, and Revision Coaching",
  emphasizedWord: "Revision Coaching",
  deck: "The final week of the production block. By the end of this session the three-week push should total 4,000–8,000 words of new thesis material. This week's craft pressure: the architecture of transitions, the editorial value of surprise, and a different mode of AI engagement — the AI that asks questions instead of giving answers.",
  meta: [
    { label: "Commitment", value: "12–16 hrs" },
    { label: "Program Week", value: "69 of 108" },
    { label: "Craft Focus", value: "Production + Transitions" },
    {
      label: "Grammar",
      value: "Phase 7 — Transitions Beyond Transitional Words",
    },
    { label: "AI Exercise", value: "Exercise #24 — Revision Coaching" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Seam Between Scenes — What Transitions Are Really Doing",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The transition is the place in any long manuscript where the writer's craft is most exposed and most often failed. It is the seam between two sections, two scenes, two moments — the moment when the prose must move from one thing to the next without losing the reader's orientation, the emotional tone, or the work's forward momentum. The writer who handles transitions poorly has a manuscript that reads as a collection of well-written sections rather than as a unified work: each section is accomplished, but the connections between them are mechanical, generic, or simply missing. The writer who handles transitions well has a manuscript that moves — that carries the reader from one section to the next with the sensation of inevitability, as though the movement is the natural consequence of what has preceded it rather than the writer's decision to change scenes.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The weakest transition is the transitional word: *however, meanwhile, subsequently, therefore, in contrast, on the other hand*. These words perform their function — they signal a relationship between the sections they connect — but they perform it with the bluntness of a road sign. The reader is told that a contrast is coming, that time is passing, that a consequence follows. They are not shown these things; they are notified of them. The stronger transition is architectural: it creates the same effect — the sense of relationship, of movement, of connection — through the structure of the prose rather than through an explicit marker. The section that ends on an image the following section echoes; the chapter that closes on an unanswered question whose answer is the subject of the next chapter; the scene that ends on a word or phrase that the opening of the following scene picks up and transforms — these are transitions that are doing their work through form rather than through announcement.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The white space between sections is itself a transition — the strongest one available — when the juxtaposition is powerful enough to stand without explanation. The transition word is a confession that the juxtaposition needs help.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title:
            "Five Architectural Transition Strategies — Building the Seam into the Structure",
          paragraphs: [
            "The image bridge: the final image of one section is picked up by the opening image of the next — not as repetition but as transformation. The rain falling outside the window in the scene's last line becomes the rain on the roof in the following scene's first line: the image has moved, the perspective has shifted, but the reader's sensory experience is continuous. The image bridge creates the sensation of cinematic continuity — the cut that matches on action — and it is among the most elegant transitions available because it operates at the reader's peripheral awareness rather than demanding conscious attention. The practical requirement: the connecting images must be genuinely related, not merely the same noun; the transformation must do something — the image must arrive differently in the new section than it left the previous one.",
            "The thematic echo: the final sentence of one section asks a question (not necessarily in the interrogative grammatical form) whose answer is the subject of the following section. The question may be implicit — 'She did not know what she would say to him' is an implicit question — and the following section may answer it obliquely rather than directly. The thematic echo creates forward momentum through incompleteness: the reader moves to the next section because the previous section has established something that remains unresolved. The practical requirement: the question must be genuine — a question the reader is actually carrying — rather than a false suspension that the following section addresses only tangentially.",
            "The word or phrase callback: the final word or phrase of one section is recalled — transformed, complicated, or contradicted — in the opening of the next. 'She had called it peace' ends a section; 'The peace lasted three days' opens the next: the word has been picked up and immediately qualified, and the qualification is the transition. The callback creates the sensation of a continuous prose consciousness — the work is thinking, and its thinking is continuous across the section breaks. The practical requirement: the recalled word or phrase must carry enough weight in its first appearance to earn the callback; a casual word recalled carefully creates a false sense of significance.",
            "The temporal or spatial orientation: the first line of a new section orients the reader in time and space — 'Three weeks later, she was back in the house' — without a transitional word. The orientation itself is the transition: it tells the reader where they are without explaining how they got there. The white space between sections has managed the movement; the orientation confirms the destination. This strategy is the most common transition in literary prose and the least noticed by readers, which is its greatest virtue: it is invisible. The practical requirement: the orientation must be specific enough to locate the reader without being merely functional; 'Three weeks later, she was back in the house' is better than 'Later, she returned.'",
            "The bare juxtaposition: no transitional device of any kind — not a word, not an image bridge, not an orientation. One section ends; white space; the next section begins. The juxtaposition is the transition: the reader is trusted to feel the relationship between the two sections without being told what it is. This is the most demanding transition for the reader and the most powerful when it works — when the juxtaposition creates a meaning greater than either section could produce alone. It fails when the juxtaposition produces confusion rather than productive resonance, when the relationship between the sections is not felt because it is not there. The practical test: remove every transitional device from a section break and read across it. Does the relationship survive without the device? If yes, the bare juxtaposition may be the right choice. If the relationship collapses, the device is earning its place.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Transitions Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For the fiction writer, the chapter ending is the most significant transition decision in the manuscript: where to end, on what note, and how to leave the reader. The chapter that ends on a strong final image, an unresolved question, or a character in motion creates forward momentum — the reader moves to the next chapter because the previous chapter has left something in the air. The chapter that ends with resolution — with the scene's tension fully discharged, the question answered, the character at rest — creates a natural stopping point, which can be used strategically (at the end of a narrative unit that should feel complete before the next unit begins) or can work against the manuscript's overall momentum. Map the chapter endings in the current draft: how many end on unresolved tension, how many on resolution? The ratio is a rough index of the manuscript's forward momentum.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For the screenwriter, the scene transition is both a writing decision and a directing/editing decision — the 'CUT TO:' is the screenwriter's bare juxtaposition, and the matching cut (the image bridge) is its more sophisticated variant. Study the transitions in the screenplays you most admire: do they use 'CUT TO:' explicitly, or do they trust the reader (and the director) to supply the cut? The strongest contemporary screenwriting tends to trust the cut — to end a scene on a strong final image and begin the next scene without announcement, letting the juxtaposition do the work. For playwrights, the transition between scenes is often a blackout, a lighting shift, or a set change — physical rather than textual — but the final line before the blackout and the first line after it are transition decisions as significant as any scene-ending in fiction.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For the memoirist, the transition is often a temporal shift — between the experiencing self's present and the narrating self's retrospect — and managing these shifts is one of the form's most specific technical challenges. The transition from scene to reflection is the most common: the scene ends, and the narrating self's voice comes in to contextualize or interpret what the scene has shown. The weakest version of this transition uses an explicit marker: 'Looking back now, I understand...' The stronger version lets the shift happen through the syntax itself — the sentence length shortens, the diction register shifts from the scene's sensory specificity to the reflection's more abstract language, and the reader feels the temporal shift without being told about it. Study the scene-to-reflection transitions in your own thesis pages: are they marked or unmarked, and are the unmarked ones landing cleanly?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7 — Transitional Strategies Beyond Transitional Words",
      blocks: [
        {
          type: "grammar",
          title:
            "Phase 7 · The Transition as Architecture — Replacing the Road Sign",
          intro: [
            "Transition words — *however, meanwhile, therefore, subsequently, in contrast* — are the grammar curriculum's final target. They are not incorrect; they perform their function reliably. But their function is limited: they announce a relationship rather than creating it. The architectural transition strategies described in the craft lecture create the same relationships — contrast, temporal movement, consequence, elaboration — through the structure of the prose rather than through a marker that stands outside it.",
            "The audit for transition words is simple: search the thesis draft for *however, meanwhile, therefore, subsequently, in addition, furthermore, on the other hand, in contrast, as a result, consequently*. For each, ask: what relationship is this word announcing? Then ask: could the same relationship be created architecturally — through an image bridge, a thematic echo, a callback, a bare juxtaposition — without the announcement? If yes, the transition word is a candidate for removal and replacement.",
          ],
          rule: "The transition word earns its place in three situations: when the relationship between the two sections is genuinely complex and requires explicit marking to prevent misreading; when the prose is moving quickly and the reader's orientation depends on a clear signal; and when the transition word is itself carrying rhetorical weight — when *however* is the right word at the right moment, not because it is the only available tool but because its bluntness is the point. Outside these situations, the transition word is usually the weakest available choice, and the writer who has internalized the architectural alternatives has the full range of options.",
          examples: [
            {
              label: "The transition word replaced by an image bridge",
              text: "'The meeting ended badly. Meanwhile, across town, her sister was packing.' → Section break. 'Her sister's apartment was already half-empty when she arrived.' [The transition word 'meanwhile' has been removed. The section break carries the temporal simultaneity that 'meanwhile' was announcing. The first line of the new section orients the reader in space — 'her sister's apartment' — without announcing the temporal relationship explicitly. The reader supplies 'meanwhile' from the juxtaposition; the writer does not need to provide it.] The image bridge version: end the meeting scene on an image of something being cleared away — a coffee cup taken from the table, a folder closed — and open the next section on the image of packing: the action of clearing carries across the break without being named.",
            },
            {
              label: "The transition word replaced by a callback",
              text: "'She had said it was over. However, two weeks later, she called.' → 'She had said it was over. Two weeks later, the phone rang.' [The 'however' is removed because the callback — 'she had said it was over' / 'the phone rang' — already contains the contrast the 'however' was announcing. The ringing phone is the contradiction of 'it was over'; the reader doesn't need to be told that a contrast is coming because the contrast is in the juxtaposition itself.] The practical test: read the transition without the transitional word. If the relationship is still clear, the word was doing work the structure was already doing. Remove it.",
            },
          ],
          outro: [
            "The transition audit for this week: search the thesis pages written during the three-week production block for transition words. For each, apply the three-question test: (1) What relationship is this word announcing? (2) Is the relationship already created by the structure — would the reader feel it without the word? (3) If not, which of the five architectural strategies could create it? Note the results in the session log. The actual replacements are Year Three revision work; for now, the audit develops the editorial eye.",
          ],
          exercise:
            "Find three transitions in the thesis draft — anywhere in the manuscript, not only the production block pages — that rely on transitional words. For each: identify which of the five architectural strategies could replace the word, and sketch the replacement in one or two sentences. You are not making the revision; you are practicing the architectural thinking that Year Three's line-level revision passes will apply systematically.",
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
              title: "Your full thesis draft — read in one sitting",
              author: "You",
              href: "",
              note: "Required, and the editorial tip for this week. Before writing new pages, read the full draft — everything written to date — in one sitting, as quickly as is compatible with attention. Bring a notebook but no pen to the manuscript: do not stop to fix anything, do not mark the pages for revision, do not slow down to admire what is working. Read it as a reader rather than a writer, and note in the notebook only what surprises you — both the good surprises (the moment that is better than you remembered, the image that is landing harder than you thought, the section that has a coherence you did not consciously plan) and the bad surprises (the section that is duller than you thought, the character who has drifted, the transition that is not working). The full-draft read is the editorial datum that the Week 34 read-through report will formalize.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Spring Thesis Session 15 — 1,500–2,500 Words",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This is the final production week. Write 1,500–2,500 words of thesis manuscript — the concluding push of the three-week block that should total 4,000–8,000 words of new material across Weeks 31–33.",
            "After the full-draft read-through (before writing), spend ten minutes in the session log recording what surprised you — good and bad. These observations are the raw material for the Week 34 read-through report. Do not let them become a reason not to write. The production session is forward-looking; the observations are for later. Write toward what the draft still needs, not back toward what it already has.",
            "After writing: apply the transition audit from the grammar section to the new pages and to one additional chapter from earlier in the draft. Note three transition words and sketch their architectural replacements in the session log. Update the running word count for the full manuscript.",
          ],
          target:
            "1,500–2,500 words of thesis (completing the three-week production block)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #24 — Revision Coaching",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This is AI Workshop Exercise #24 from the program's 28-exercise sequence. The Revision Coaching exercise inverts the usual AI feedback mode: instead of asking the AI to give suggestions, tell the AI to ask questions. The AI as Socratic interlocutor rather than as editor.",
          prompt:
            "I am going to share a section of my thesis draft. I do not want editorial suggestions, corrections, or praise. I want you to ask me questions about it — the questions a rigorous first reader would ask after reading carefully. Ask me questions about the choices I made: why this structure rather than another, what I believe is happening in the scene that may not be on the page, what I was trying to do with the ending of this section, what I think the narrator understands about themselves that the prose does not yet show. Ask questions about the work's relationship to its governing question. Ask questions that I may not be able to answer yet but that I should be sitting with. Do not tell me what is wrong. Ask me what I think is happening.",
          questions: [
            "What did the AI ask that you were not expecting? The unexpected question is the Revision Coaching exercise's primary product: the question that reveals a gap between what you believe the prose is doing and what a reader experiences it as doing. Write the unexpected question down in the session log. It is a revision task — not a task to perform now, but a problem to sit with as the thesis moves toward the Week 34 read-through.",
            "What did the AI ask that you could not answer? The unanswerable question is a different kind of information: it marks the place in the thesis where the writer's knowledge of the work has not yet been converted into the work's knowledge of itself. The section whose governing question you cannot answer when asked directly by an outside reader is the section that needs more drafting, more thinking, or more revision than any other. Note it specifically: not 'I wasn't sure about the character's motivation in this section' but 'I cannot say what this section is investigating that no other section investigates, and I cannot say what the reader is meant to carry from it.' The specificity of the problem is the beginning of its solution.",
            "Which of the AI's questions would be most useful to ask of every section of the thesis? Some of the questions the AI generates in the Revision Coaching exercise are transferable — they are questions that apply not just to the submitted section but to the manuscript as a whole. Identify one or two and add them to the reading checklist for the Week 34 read-through: alongside 'what surprised me?' and 'what is the most significant structural problem?', add the transferable question from this exercise.",
            "The Revision Coaching mode as a practice: the AI asking questions rather than giving suggestions is a mode that can be used at any point in the drafting or revision process, and it is particularly useful at this stage — near the end of Year Two, with the full read-through approaching — because questions generate thinking rather than dependency. The writer who receives suggestions from an AI can implement the suggestions without understanding why; the writer who receives questions must answer them through the writing. Note in the session log whether this mode of AI engagement felt more or less useful than the suggestion mode, and carry the preference into Year Three.",
          ],
          note: "The Revision Coaching exercise was designed as a corrective to the most common failure mode of AI feedback: the writer asks for feedback, the AI produces suggestions, the writer implements the suggestions without engaging the underlying craft problem, and the prose improves locally without the writer understanding what was wrong or how to prevent the same problem in future drafts. Questions prevent this by requiring the writer to engage the problem rather than receive its solution. The questions the AI asks in this exercise are not necessarily the right questions — the AI is working from a limited sample of the manuscript and does not have full access to the work's governing question, structure, or history. The value is in the practice of being asked, not in the authority of the asker.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Read the Full Draft in One Sitting — Mark Only What Surprises You",
      blocks: [
        {
          type: "tip",
          icon: "👁️",
          name: "The Editorial Value of Surprise",
          paragraphs: [
            "Surprise — in both directions — is the most reliable editorial signal available at this stage of a long manuscript. The good surprise: the moment you encounter in the full-draft read that is better than you remembered, the image that has been sitting in a section you thought was weak and that turns out to be carrying the work's most significant thematic weight, the transition that you wrote quickly and that turns out to be doing something architecturally sophisticated. Note these moments specifically — they are the manuscript's strengths, and the revision plan should be organized partly around extending and developing what is already working.",
            "The bad surprise: the section that you remember as strong and that turns out to be doing something the manuscript does not need, the character who has drifted between the fall and spring semesters, the transition that you thought was invisible and that turns out to be announcing its relationship with the bluntness of a road sign. Note these specifically too. The bad surprise is not discouraging information — it is the most accurate available picture of what the revision plan must address. The writer who reads the full draft without surprise has either written a flawless first draft (unlikely) or has normalized their relationship to the work to the point where the draft is no longer visible as it actually is. The full-draft read at the end of the production block, before the Week 34 formal read-through, is designed to catch the surprises before normalization sets in.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Radical Cut",
      blocks: [
        {
          type: "journal",
          title: "If You Had to Finish the Thesis in Six Months",
          question:
            "If you had to finish the thesis in six months — not revise it, not polish it, but complete it and release it — what would you cut? Not what you would like to cut, not what feels weak, but what you would actually cut if the constraint were real and the alternative were leaving the thesis unfinished. Name the sections. Name the characters whose threads you would drop. Name the structural experiments you would abandon in favor of a cleaner, faster version of the work's argument. Name the subplots, the digressions, the lyric essays embedded in the narrative that you love but that are not essential. The exercise is not a plan — you are not committing to any of these cuts. It is a way of identifying the thesis's essential spine: what must stay because without it the work is not the work, and what is present because it is interesting or beautiful or true but not because it is necessary. The distinction between essential and additional is the revision plan's most important diagnostic.",
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
            "By the end of this week you should have: written 1,500–2,500 words of thesis in Session 15, completing the three-week production block (total across Weeks 31–33: 4,000–8,000 words); read the full draft in one sitting with surprise observations noted in the session log; completed the transition audit on new pages and one additional chapter, with three architectural replacement sketches; completed the Revision Coaching exercise with all four reflection questions; carried the transferable questions from the AI exercise into the Week 34 read-through checklist; noted the essential-versus-additional distinction from the journal prompt as a preliminary frame for the revision plan.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 34",
          paragraphs: [
            "Week 34 is the Thesis Read-Through — the formal, full-manuscript reading that produces the Read-Through Report, a Key Deliverable. No new thesis pages are written this week; the reading is the work. Grammar topic: interior monologue and stream of consciousness. The report (700 words) addresses five questions: what surprised you, what is the strongest single moment, what is the most significant structural problem, what is missing, and what is the thesis actually about having read it in full. The AI workshop submits the fullest available draft for developmental assessment.",
          ],
        },
      ],
    },
  ],
};
