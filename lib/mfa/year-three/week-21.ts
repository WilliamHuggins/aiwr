import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek21Data: WeekData = {
  weekNumber: 21,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Final Draft Production",
  title: "Intensive Final Draft Production I",
  emphasizedWord: "Production",
  deck: "The first of four intensive production weeks. Structured craft content is minimal; the thesis is everything. This week's work is simple in description and demanding in execution: produce 2,000–3,000 words of final-draft prose, analyze one master passage from the genre at the full syntactic level, and run Exercise #19 — Pacing Visualization — on the most recently revised section. The production arc that began in Week 19 now deepens into the sprint.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "93 of 108" },
    { label: "Craft Focus", value: "Intensive Final Draft Production" },
    { label: "Grammar", value: "Phase 8 — Master Passage Analysis at the Full Syntactic Level" },
    { label: "Deliverable", value: "2,000–3,000 Words of Final-Draft Thesis Prose" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Production Weeks — What They Require and What They Offer",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Weeks 21 through 24 are the program's most intensive production period, and they require a different relationship to the work than any week that has come before. The revision weeks of the fall semester were analytical: the writer stood outside the manuscript and examined it, brought tools to it, applied protocols. The early spring weeks — Weeks 19 and 20 — were calibrative: establishing the standard, identifying the reader, declaring the aesthetic position. These four production weeks are neither. They are immersive: the writer is inside the manuscript, producing the prose that will be the thesis, sentence by sentence, at the highest level of current capability. The analytical and calibrative work has been done. These weeks execute it.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "What the production weeks require, above all else, is the protection of the writing time from the claims of everything that is not writing. The professional preparation documents, the grammar exercises, the journal — all of these are real and matter, but the thesis is the primary obligation of every hour that can be given to it. The writer who produces 3,000 words of final-draft prose this week and does nothing else has done the week's most important work. The grammar exercise and the AI workshop are here because the curriculum's commitments must be honored; they should not displace a single hour that could go to the manuscript. Prioritize in that order.",
          ],
        },
        {
          type: "pullquote",
          quote: "The production weeks are not the time to doubt the manuscript's direction — those doubts were the territory of the fall semester's revision passes. The production weeks are the time to trust the plan the revision produced and execute it. Write forward.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Daily Rhythm of the Production Week",
          paragraphs: [
            "Re-entry before generation: begin each production session by reading the previous session's pages aloud — slowly, at the pace of considered speech. This re-reading serves two functions. It re-enters the voice: the manuscript's specific register, its characteristic syntactic choices, its particular relationship between narrator and material. And it provides a natural transition from the day's concerns into the concentrated attention the work requires. Do not skip it. The production session that begins without re-entry produces prose that does not sound like the manuscript it belongs to, and the mismatch will require additional revision to correct.",
            "The production target as a floor, not a ceiling: 2,000 to 3,000 words is the week's target. If the writing is going well — if the voice is fully available and the scene is developing with the momentum that a well-prepared writer in full command of their material can generate — do not stop at 3,000 words because the target has been reached. The production targets are designed for the weeks when the writing is difficult, when the voice requires coaxing, when the scene resists. When the writing is easy, work past the target. The manuscript does not have an excess of easy days.",
            "The end-of-session read: at the close of each production session, read the new pages aloud once. Not for revision — for assessment. Mark any sentence where the rhythm stumbles, any passage where the voice has drifted, any transition that is not doing its full work. Do not revise these marks during the production session; note them and close the file. Address them at the beginning of the next session, before the re-entry read. This rhythm — assess at the close, address at the open — keeps the production moving forward while ensuring that the pages being produced are at the final-draft standard.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Production in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction production weeks are organized chapter by chapter: bring one chapter fully to the final-draft standard before opening the next. The temptation in the production weeks is to work across the manuscript — to address the passage in Chapter 3 that the read-through flagged, then the scene in Chapter 7 that the dialogue revision didn't fully resolve, then the transition in Chapter 12 — in a non-sequential order that feels productive but produces a manuscript whose chapters are unevenly revised. Work sequentially. The chapter that is fully at the standard is done; move forward and do not return to it unless a subsequent chapter reveals that something in the earlier one must change.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing production weeks are organized by act: bring Act One fully to the final-draft standard — every scene at the format-pass level, every dialogue exchange at the trimming-pass level, every action line at the precision-pass level — before opening Act Two. If the table read revealed specific scenes whose problems were not fully addressed in the fall's dialogue revision, those scenes are the priority in the first production week. The scene that reads well silently but does not speak well in performance is not at the final-draft standard; it requires additional attention before the act can be considered complete.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir production weeks are organized by section or chapter, with particular attention to the narrator's relationship to the material across the full sequence. As each section is brought to final-draft standard, read it against the opening pages: is the narrator who closes this section the same narrator — in register, in quality of retrospective intelligence, in relationship to the material's emotional weight — as the narrator who opens the manuscript? The memoir's narrative arc is not just the story's arc but the narrator's arc: the growing understanding, the developing perspective, the relationship between experiencing self and narrating self that should deepen as the book progresses. The production weeks confirm that this arc is present and consistent.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 8 — Master Passage Analysis at the Full Syntactic Level",
      blocks: [
        {
          type: "grammar",
          title: "Phase 8 · The Full Syntactic Toolkit Applied to One Admired Passage",
          intro: [
            "The master passage analysis in the production weeks serves a different function than the master sentence analysis of Week 15. Week 15's exercise was the curriculum's culminating demonstration: ten sentences, each annotated at every level the program has developed. This week's exercise is a diagnostic and generative tool — a single extended passage from a writer the student most admires in their genre, analyzed at the full syntactic level not as a terminal exercise but as a way of sharpening the eye before returning to the manuscript. The writer who has just spent an hour studying exactly what Marilynne Robinson is doing in a passage of Gilead, or what Colm Tóibín is doing in a passage of Brooklyn, or what Ocean Vuong is doing in a passage of On Earth We're Briefly Gorgeous, returns to their own manuscript with a different quality of attention than the writer who went directly from the journal to the page.",
            "The full syntactic toolkit, applied to a single passage of 200–300 words: identify the sentence type distribution (how many simple, compound, complex, compound-complex); the primary phrase constructions (which of the Phase 3 constructions — participial, absolute, appositives — are doing the most work); the rhetorical figures (which Phase 4 figures are operating, and what they are doing); the diction register (what proportion of Latinate to Anglo-Saxon, what position on the plain-to-ornate spectrum); the paragraph architecture (what is the organizational principle of each paragraph — consciousness, scene, argument); the white space distribution (how the passage is visually organized on the page); and the rhythmic effect (what the sound of the passage is doing at the level of stressed syllables and sentence length distribution). This is the same analysis the program has been developing across all eight phases; applied to a passage of a contemporary master, it names specifically what the writer admires and why, which is among the most useful things a writer can know about their own taste.",
          ],
          rule: "Select a passage of 200–300 words from the writer you most admire in your genre — ideally a passage whose effect you have always felt but whose mechanism you have not fully understood. Copy it out by hand. Then apply the full Phase 1–8 syntactic toolkit to the passage: sentence types, phrase constructions, rhetorical figures, diction register, paragraph architecture, white space, rhythm. Write a 200-word analysis that names the three most significant craft choices in the passage and explains specifically what each one does — not what it is, but what it accomplishes. Then identify the one technique you are not yet using in your own prose that this passage uses to greatest effect, and apply it deliberately in the week's production session. The application should be specific: not 'I will use more absolute phrases' but 'the absolute phrase in sentence three is suspending the passage's forward momentum while adding physical detail — I will try this in the scene I am writing this week where the narrator is waiting and needs to be grounded physically while time slows.'",
          examples: [
            {
              label: "What the master passage analysis produces",
              text: "A writer who has always loved the feeling of reading Alice Munro — the sense that time has been compressed and expanded simultaneously, that years have passed in a sentence and that a single moment has been dilated to fill a page — but who has never analyzed the mechanism of that effect discovers, in the master passage analysis, that Munro uses tense shift as a temporal instrument: a passage of simple past that suddenly moves into past perfect creates a pocket of deep time within the ongoing narrative, and the return to simple past feels like a surfacing. The discovery is available for application: in the production session that follows, the writer experiments with tense shift at a moment in the thesis where time needs to fold back on itself.",
            },
          ],
          outro: [
            "The master passage analysis should take approximately forty-five minutes to an hour. It is not a substitute for the production session — it is a preparation for it. The production session should follow directly, while the analysis is still active in the writer's attention. The prose produced in a session immediately following a close syntactic analysis of admired writing is often the production week's strongest prose, because the analytical attention that was brought to the master passage carries over into a heightened awareness of the writer's own choices.",
          ],
          exercise:
            "Select a 200–300 word passage from the writer you most admire in your genre. Copy it by hand. Apply the full Phase 1–8 syntactic toolkit. Write a 200-word analysis naming the three most significant craft choices and what each accomplishes. Identify one technique not yet in your own prose and apply it deliberately in the week's production session.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Text",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "The master passage — one extended excerpt from your most admired genre writer",
              author: "Self-selected",
              href: "",
              note: "The only assigned reading this week is the passage selected for the master passage analysis. Choose it carefully: not the writer's most famous passage — the passage whose effect you most want to understand, the one you return to, the one whose mechanism has always been opaque to you. Copy it out by hand before reading it analytically. The act of transcription changes the quality of attention; words that were read with narrative momentum when encountered in the book become individual choices when copied at the writer's pace.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "2,000–3,000 Words of Final-Draft Thesis Prose",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write 2,000 to 3,000 words of final-draft thesis prose. This week's production should immediately follow the master passage analysis: move from the analysis to the manuscript in a single session, carrying the analytical attention forward into the writing.",
            "The one technique identified in the master passage analysis that the writer is not yet using — apply it deliberately in the production session. Not in every sentence; in the specific moment where it would serve the material as it served the admired passage. The application should be felt as an addition to the writer's available vocabulary, not as an imposition of another writer's style. If the application feels wrong — if the technique does not suit the moment or the manuscript's voice — set it aside and note the mismatch. The master passage analysis is not an instruction to write like the admired writer; it is a sharpening of the eye that sometimes produces specific transferable techniques.",
            "At the close of the week's production, read all new pages aloud and mark every stumble. Address the marks before the following week's session opens. Do not carry unmarked passages into Week 22.",
          ],
          target: "2,000–3,000 words of final-draft thesis prose, produced in the session immediately following the master passage analysis, with one identified technique applied deliberately",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #19 — Pacing Visualization",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "AI Exercise #19: Pacing Visualization — applied to the most recently revised section of the thesis. The exercise maps acceleration and deceleration, identifies the ratio of scene to summary, and locates specific passages for revision in both directions.",
          prompt:
            "Read the passage I am giving you and map its pacing. This is a section from a thesis manuscript that has been through substantial revision; I want to understand whether the pacing of this specific section is serving the manuscript's needs at this stage. Map the pacing on four dimensions: (1) Acceleration and deceleration: identify where the prose moves quickly and where it slows, and what creates each effect — is the acceleration created by short sentences and paratactic syntax, by scene action rather than summary, by withheld interiority? Is the deceleration created by long subordinated sentences, by expanded interiority, by scene-setting that pauses the narrative? Is each acceleration and deceleration serving the material, or has the prose defaulted to a pace that doesn't match the scene's dramatic function? (2) Scene-to-summary ratio: what proportion of this passage is rendered as scene (present-tense action, specific sensory detail, dialogue) and what proportion is summary (time compressed, events reported rather than enacted)? Is that ratio right for this section's function in the larger manuscript, or is scene being used where summary should carry the material, or summary compressing material that needs to be scene? (3) One passage to accelerate: identify the single passage in this section that is moving too slowly for what it is doing — where the pace is not earned by the material's dramatic weight — and explain specifically what creates the drag and how accelerating it would change the reader's experience. (4) One passage to expand: identify the single passage that is moving too quickly for what it is doing — where material that deserves full scene rendering is being compressed into summary — and explain what the expansion would give the reader.",
          questions: [
            "The AI's mapping of acceleration and deceleration: assess whether the diagnosis is accurate. The places the AI identifies as slowing should feel, on re-reading, like places where the prose is asking the reader to slow — and the question is whether that request is earned. A slow passage in a manuscript this close to its final state is either a deliberate choice (the material is dense and requires time, the emotional weight demands it, the passage is a breathing room that resets the reader's baseline) or a residual draft problem (the prose is slow because it was written in a slow mood and the revision has not yet fully addressed it). Identify which each instance is and address the latter.",
            "The scene-to-summary ratio: the most common final-draft pacing problem in literary fiction and memoir is over-summarizing material that should be scene. The writer who has spent three years generating, revising, and reading the manuscript often knows the compressed material so fully that the summary feels adequate — because the writer can supply the scene-level texture that the summary omits. The reader cannot. If the AI identifies a high summary ratio in a section where the material deserves full scene rendering, the expansion is the week's most important revision task.",
            "The passage to accelerate: apply the AI's diagnosis. If the identified passage is dragging because of prose-level over-elaboration — sentences that are longer than the scene's pace warrants, interiority that exceeds what the moment can hold — cut the over-elaboration and assess the result. If the passage is dragging because of structural over-attention — the scene is present at greater length than its function in the manuscript requires — consider whether it should be compressed into summary or cut entirely. The acceleration pass on a single passage often reveals that the drag is coming from a decision made in early drafting that the revision has not yet revisited.",
            "The passage to expand: the expansion of a compressed passage into full scene is the most demanding production task of the final weeks. It requires the writer to generate new material — to produce the scene that the summary was standing in for — at the final-draft standard. Identify the scene the summary is compressing: what is the moment, who is present, what is the specific physical and emotional experience that the summary has reduced to report? Write the scene at full length in the week's production session. Then assess: does the manuscript need it? If the expansion is at the final-draft standard and the manuscript needs it, it stays. If the expansion reveals that the summary was right — that the compressed version is more powerful than the full scene, that expansion dissipates rather than develops — restore the summary and note the confirmation.",
          ],
          note: "The Pacing Visualization exercise is most useful when applied to the section the writer suspects is moving at the wrong pace but has been unable to diagnose precisely. If there is no such section — if the pacing seems right throughout the manuscript at this stage — apply the exercise to the section most recently revised and use it as a confirmation that the revision has achieved what it set out to do.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Productive Surprise",
      blocks: [
        {
          type: "tip",
          icon: "✍️",
          name: "Follow What the Writing Knows That You Don't",
          paragraphs: [
            "In the production weeks, the prose sometimes goes somewhere the writer did not plan. A character says something the writer did not expect them to say. A scene discovers a detail that the plot logic did not require but that the prose's deeper logic insists on. An image appears in a passage where no image was planned, and it is exactly right in a way the writer cannot fully explain. These are not failures of control; they are the manuscript revealing what it knows that the revision sequence has not yet made visible.",
            "Follow them. Note in the margin that this was a surprise, and keep writing. Do not stop to assess whether the surprise is correct or whether it fits the plan. The assessment can happen at the close of the session, in the end-of-session read. The writer who stops to evaluate every surprise kills the productive momentum that generates them. The production weeks are the last sustained period of generative surprise the thesis will have; receive it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What the Writing Knew",
      blocks: [
        {
          type: "journal",
          title: "The Surprise",
          question:
            "What surprised you in this week's writing? Not the structural surprise — not a discovery about the manuscript's architecture — but the sentence-level, moment-level surprise: the specific sentence that appeared that you did not plan, the image that arrived in a passage where no image was intended, the character who said something that the writer had not known they would say. Write about it for fifteen minutes: what was the surprise, what did it reveal about the manuscript or the character or the material that you had not previously understood, and what does the writing seem to know — about the story, about the narrator's relationship to the subject, about the thesis's governing concerns — that the writer, working analytically, has not yet fully articulated? The surprise is not a disruption to the work. It is the work's intelligence, finding a form.",
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
            "By the end of this week you should have: produced 2,000–3,000 words of final-draft thesis prose; completed the master passage analysis (200–300 word passage, copied by hand, full Phase 1–8 syntactic analysis, 200-word write-up, one identified technique applied in the production session); completed Exercise #19 Pacing Visualization with all four reflection questions; written the journal entry on the week's productive surprise. The first of the four intensive production weeks is complete.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 22",
          paragraphs: [
            "Week 22 maintains and deepens the production target — 2,000–3,000 words — with one additional obligation: all major structural revisions must be complete by the end of the week. The grammar exercise asks for the most concentrated voice passage of the program: the 500-word passage that most fully embodies the thesis's characteristic syntactic identity, using every Phase 8 style tool the writer now commands. The AI workshop submits a full chapter for comprehensive developmental assessment. The production arc is approaching its peak.",
          ],
        },
      ],
    },
  ],
};
