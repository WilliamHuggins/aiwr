import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek2Data: WeekData = {
  weekNumber: 2,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Structural Revision",
  title: "The Structural Revision — Building the Scene Map",
  emphasizedWord: "Scene Map",
  deck: "Before touching a sentence, you need to understand the architecture of the whole. This week constructs the scene map — a document that makes every section of the manuscript visible simultaneously, so structural problems that are invisible at the prose level become legible as patterns. The scene map is the revision's blueprint. Everything the structural pass will do this fall, it will do from this map.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "74 of 108" },
    { label: "Craft Focus", value: "Scene Mapping" },
    { label: "Grammar", value: "Phase 6, Topic 2 — The Power of Monosyllabic Words" },
    { label: "Deliverable", value: "Complete Scene Map + 500-word Structural Analysis" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Bird's-Eye View — What Becomes Visible When the Whole Is Seen at Once",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The writer working sentence by sentence inside a long manuscript cannot see the manuscript. This is not a failure of attention — it is a structural consequence of the form. The sentence-level view is close: it sees the rhythm of the line, the precision of the image, the exact weight of the word. What it cannot see is pattern. The scene that has the same emotional temperature as the three scenes before it, creating a flat plateau where the manuscript should be building. The character who disappears for sixty pages and then reappears as though the absence has been unremarkable. The structural excess at the midpoint — five scenes doing what two could do — that makes the reader feel the manuscript is stalled even when every individual scene is well-written. The structural gap: the scene the architecture requires but that the draft has not yet produced. These problems are all invisible at the sentence level. They only become visible from above.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The scene map creates the bird's-eye view. It converts a linear document — the manuscript, read from beginning to end, one page at a time — into a spatial one: a grid or list that makes every section present simultaneously, that allows the writer to see the whole without moving through it sequentially. From the scene map, patterns become legible that the prose conceals. The act structure becomes visible. The distribution of emotional temperature becomes visible. The quality distribution — the 3s and 4s clustered in the first half, the 1s and 2s accumulated in the middle — becomes visible. The duplicated scenes, the structural gaps, the imbalances of scale become visible. None of this was invisible because the writer was inattentive. It was invisible because the prose's forward momentum, which is a virtue when reading, is a liability when revising: it pulls the reader through the manuscript without allowing the architectural view to form.",
          ],
        },
        {
          type: "pullquote",
          quote: "The scene map does not change anything about the manuscript. It only makes the manuscript's current architecture visible. But that visibility is everything: the structural revision cannot proceed accurately without it, and with it, the problems that felt intractable become specific, and specific problems can be solved.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "What the Scene Map Tracks — Six Categories",
          paragraphs: [
            "Title or heading: a short descriptive phrase that identifies each scene or section uniquely — not the working title, which may be generic, but a phrase specific enough to distinguish this scene from every other scene in the manuscript. 'The kitchen argument' is not sufficient if there are three kitchen arguments; 'the kitchen argument where she finally names what he did' is. The titling process is itself analytically useful: a scene that cannot be distinguished from other scenes in a single phrase may be doing something another scene is already doing, which is the first signal of structural redundancy.",
            "Approximate length in words or pages: the raw material for assessing proportionality. A scene that runs four times longer than the scenes adjacent to it is either doing four times the work — carrying four times the narrative function, creating four times the emotional weight — or it is overlong relative to its importance. The length column makes this visible at a glance, without reading the scene. The structural revision will assess whether the length imbalances are earned or accidental.",
            "Narrative function: what does this scene do? Not what happens in it — what does it do for the manuscript's larger architecture? Every scene should be performing at least one of the following functions: advancing the plot (something changes as a result of this scene that could not have changed without it); developing character (something new is learned about a character, or an existing understanding is complicated or confirmed); engaging the governing question (the thematic investigation is advanced, complicated, or given new evidence); or establishing the world (sensory, social, or historical context is created that subsequent scenes depend on). The scenes whose function column reads 'advancing the plot' exclusively are the scenes most at risk in the structural revision: they may be narrative connective tissue rather than structural load-bearing elements.",
            "Emotional temperature on a 1–5 scale: the scene's position on the spectrum from quietude (1) to maximum tension (5). This column, read across the full map, produces the manuscript's emotional arc — and reveals where the arc has gone flat, where tension has been sustained so long without release that the reader has been exhausted, and where the manuscript has provided breathing room before the next escalation. A well-paced manuscript does not hold maximum tension continuously; it builds, releases, builds again, with each build beginning from a slightly higher baseline. A manuscript that shows the same emotional temperature across fifteen consecutive scenes has either a pacing problem or a structural one.",
            "Point of view or temporal register: for fiction, the POV character; for CNF, whether the section operates in the experiencing past or the reflecting present. This column reveals whether any POV character is absent for an unexpectedly long stretch, whether the CNF's temporal architecture — the ratio of scene to reflection — is consistent with the work's governing approach, and whether any character's perspective is being overused in ways that narrow the manuscript's range.",
            "Quality assessment on a 1–4 scale: the writer's honest judgment of each scene's current state. 1 is placeholder (the scene is necessary but has not yet been drafted or is drafted at below-functional level); 2 is functional (the scene does its job but is not doing it well); 3 is working (the scene is solid, requires revision but not fundamental rethinking); 4 is near-final (the scene is close to what it will be in the finished manuscript). The quality column reveals the work's distribution of strength — the cluster of 4s in the opening chapters that may indicate the writer's attention was most concentrated there, the spread of 1s and 2s in the middle that confirms what the read-through report identified as the manuscript's weakest zone.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Scene Map Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Fiction scene maps typically track: scene number, POV character, location, time (day/night, season, year if the narrative spans multiple years), narrative function, emotional temperature, and quality assessment. For a story collection, the map covers individual stories rather than scenes: story title, approximate length, POV, the story's governing question, and quality assessment — plus an additional column tracking the collection's thematic arc, ensuring each story is doing distinct work in the collection's larger argument. The scene map for fiction should also include a column for what the scene's final image or final line is: the exit point of each scene is a structural decision as significant as the entry point, and the map makes the distribution of strong exits visible alongside the distribution of strong openings.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The index card method: one card per scene, each card bearing the scene heading, the scene's single narrative function (INT. KITCHEN - DAY / She learns he's been lying), and the emotional temperature. The cards are laid on a floor or a large table — the physical spread is the point, the ability to see all the cards simultaneously and to move them without commitment. The map for a screenplay should also track: act position (which act does this scene belong to, and is it currently misplaced?), whether the scene ends with a complication or a resolution (the sequence of complications and resolutions is the screenplay's primary pacing mechanism), and whether the scene is primarily exposition, action, or dialogue (an even distribution suggests no scene is working hard enough; an imbalanced distribution suggests a sequence that is relying too heavily on one mode).",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "CNF maps track: section title, temporal register (past — the experiencing self's time — or present — the narrating self's time), subject (what is this section about at the surface level), thematic function (what question does this section engage), essay movement (is this section building the argument, complicating it, providing evidence, or shifting direction?), and word count. The CNF map should include an additional column not necessary for fiction: the section's relationship to the governing question — is the governing question actively present in this section (the narrator's investigation is visible on the page), passively present (the material relates to the question but the narrator's engagement with it is not active), or absent (the section is doing narrative work but is not engaging the investigation)? A memoir with many passively present or absent sections in the map has a thematic revision problem that the structural pass should address.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 6, Topic 2 — The Power of Monosyllabic Words",
      blocks: [
        {
          type: "grammar",
          title: "Phase 6 · One Syllable — The Sentence That Cannot Be Softened",
          intro: [
            "The one-syllable word is the most powerful word in English prose. It arrives without warning and lands without cushion. 'She left.' 'He lied.' 'The child died.' The sentence of all monosyllables creates a specific effect: blunt, final, unqualified. There is no Latinate abstraction to soften the blow, no multi-syllable word to slow the reader's passage through the fact. The monosyllabic sentence is the Anglo-Saxon tradition at its most concentrated — the sentence of the body, of action, of bare fact — and it is the instrument for moments when the prose cannot afford to be anything other than what it is.",
            "Hemingway built an aesthetic on this principle. Carver refined it. Amy Hempel, in 'In the Cemetery Where Al Jolson Is Buried,' uses the monosyllabic sentence at moments of maximum emotional weight: the reader has been prepared by longer sentences, by complex syntax, by the full range of Hempel's repertoire, and then the monosyllabic sentence arrives and the preparation collapses into it. The effect is not simple — it depends entirely on the preparation, on the contrast between the sentence's brevity and the weight of what precedes it. The monosyllabic sentence alone, sustained, becomes monotonous. Placed with precision, at the right moment, after the prose has earned the right to stop elaborating, it is irreducible.",
          ],
          rule: "The practical discipline: identify three moments in your thesis where a monosyllabic sentence — or a sentence in which the key words are all monosyllables — would serve better than what you have written. The test is not whether you can write a monosyllabic sentence about the moment; it is whether the moment is being obscured by elaboration, by the prose's anxiety about being understood, by the writer's reluctance to let the fact stand alone. The moments where the prose is working hardest to explain itself are often the moments where the monosyllabic sentence would do the most: not explaining, not elaborating, just stating the fact and letting the weight fall.",
          examples: [
            {
              label: "The monosyllabic sentence at a moment of maximum weight",
              text: "'She had understood, finally, after years of not allowing herself to understand, after years of constructing the alternative explanations that let her keep going, that he had never loved her, that the love she had been so certain of had existed nowhere but in her own mind, had been a thing she built alone and furnished alone and lived in alone, and now the house was gone.' [Long sentence, full elaboration, the sentence doing the work of carrying the weight of realization.] Then: 'She left.' [The monosyllabic sentence. It does not explain the leaving. It does not describe it. It states it. The contrast between the elaboration of the understanding and the bluntness of the action is the sentence's effect.]",
            },
            {
              label: "Monosyllabic words within longer sentences — the weight placement",
              text: "The monosyllabic discipline does not require all-monosyllabic sentences. It is a word-placement principle: the key word in a sentence — the word that carries the most weight, the word the sentence's meaning depends on — should often be a monosyllable. 'The revelation came to her with the force of something she had always known but refused to acknowledge.' vs. 'The truth hit her.' Both sentences describe the same event. The first distributes the weight across the sentence with Latinate abstraction ('revelation,' 'acknowledge'); the second concentrates it into two monosyllables ('truth,' 'hit') whose brevity and concrete physicality make the impact physical rather than conceptual. The monosyllabic approach is not always right — sometimes the abstraction is the point — but it is always worth testing.",
            },
          ],
          outro: [
            "This week's grammar exercise: write five monosyllabic sentences about a moment of loss or change in your thesis. Each sentence should feel both inevitable and irreducible — the sentence that, once written, could not be written differently without losing something essential. Then identify the three moments in your current draft where you would replace an existing sentence with one of your five monosyllabic sentences, or where the monosyllabic approach would replace what the draft currently has. Note these replacements in the session log; they are candidates for the line-level revision pass in Weeks 6–7.",
          ],
          exercise:
            "Write five monosyllabic sentences about a moment of loss or change in your thesis. Each should feel inevitable and irreducible. Then identify three places in the current draft where the monosyllabic sentence — or a sentence in which the key words are monosyllables — would serve better than what is currently written. Note them for the line-level revision pass.",
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
              title: "Narrative Design",
              author: "Madison Smartt Bell",
              href: "",
              note: "The structural analysis chapters. Bell's approach to narrative design is among the most analytically rigorous available in the craft literature: he treats narrative architecture as an object of study with the same precision a structural engineer brings to load-bearing calculations. Read specifically for his account of narrative line, the distribution of action and reflection, and the way structural patterns produce or undermine the reader's sense of forward momentum. Bell's method of mapping narrative — which resembles in spirit the scene map this week produces — is the most developed account of structural thinking in contemporary craft pedagogy.",
              badge: "Required",
            },
            {
              number: "02",
              title: "A published novel, memoir, or screenplay in your genre — read structurally",
              author: "Your choice",
              href: "",
              note: "Required. Take a work in your genre that you consider structurally strong — a work whose architecture you have admired without necessarily analyzing. Build a scene map for it using the six-category framework from the lecture. Map its full structure. What patterns emerge? Where does the emotional temperature build and release? How is the quality distributed — are the opening and closing scenes the strongest, with the middle more variable? Where does the governing question go dormant and where does it return? Building a scene map for a published work before building one for the thesis provides a calibration: you are learning what a strong map looks like before you are asked to assess your own.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Scene Map — Full Manuscript Architecture",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Build a complete, updated scene map for your thesis manuscript using all six categories: title/heading, approximate length, narrative function, emotional temperature (1–5), POV or temporal register, and quality assessment (1–4). Every scene or section should appear on the map. If the manuscript has chapters, map at the scene level within chapters; if it is an essay collection or story collection, map at the piece level.",
            "After completing the map, write a 500-word structural analysis based on what the map reveals. The analysis should address three specific findings: the structural gap (what is missing that the work needs — the scene or section whose absence is creating a problem elsewhere in the manuscript); the structural excess (what is present that the work does not need — the scene or section that is duplicating the work of another, or that is present because it was drafted but not because the manuscript requires it); and the structural imbalance (sections that are too long or too short relative to their narrative function and emotional importance). The structural analysis is not a revision plan — it is a diagnosis. The revision follows from the diagnosis, not alongside it.",
            "After the analysis: write the scene or section identified as most urgently missing — the structural gap that is creating the most significant downstream problem. This new material may be short (a transitional scene of 500 words that resolves a logic gap) or substantial (a full scene of 1,500 words that the manuscript's character arc requires). Write it at full quality; this is not a placeholder.",
          ],
          target: "Complete scene map + 500-word structural analysis + 800–1,500 words of new material addressing the most urgent structural gap",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Structural Assessment — Imbalance, Duplication, and the Missing Scene",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Share the scene map with the AI — not the manuscript, but the map. The AI reads the architecture without the prose's persuasive force, which means it can see structural problems the prose has been concealing. Ask for a structural assessment of the map rather than the manuscript.",
          prompt:
            "I am sharing my manuscript's scene map — a section-by-section breakdown tracking title, length, narrative function, emotional temperature, POV/temporal register, and quality. Read it as a structural editor, not a line editor. Based on this map, identify: (1) the structural imbalances — sections that appear overlong or underserved relative to their narrative function and emotional weight; (2) the apparent shape of the dramatic arc — is it front-loaded, back-loaded, or well-distributed across the manuscript? (3) any section whose function appears to be duplicated elsewhere in the map — scenes doing the same work; (4) what appears to be missing from this architecture, based on the genre conventions of this kind of work and the thematic concerns described in the narrative function column.",
          questions: [
            "The AI's identification of structural imbalances: compare these to the structural analysis you wrote after completing the map. Do the AI's imbalances match yours? If the AI identifies an imbalance you did not — a section that reads as overlong relative to its stated function — is the AI reading the function column accurately, or is the function column undercharacterizing what the scene is actually doing? The function column of the map is only as accurate as the writer's description of each scene's work; a scene whose function has been undersold in the map will appear structurally out of proportion when it is not. Revise the map's function column where the AI's reading has revealed an inaccuracy, not just the manuscript.",
            "The AI's assessment of the dramatic arc's shape: what did it identify — front-loaded, back-loaded, well-distributed, or some other pattern? Map the emotional temperature column as a simple graph: does the line it produces match the arc a work of this kind should have? The structural revision's pacing work will address the temperature distribution; for now, note whether the AI's arc assessment matches the map's evidence and whether the arc the manuscript currently has is the arc the work requires.",
            "The AI's identification of duplicated scenes: these are the strongest candidates for the cut list. A scene that is doing work another scene is already doing is a scene the manuscript is paying twice for — the reader's time and attention allocated to the same narrative function, which means the second instance is producing diminishing returns. Before adding a duplicated scene to the cut list, verify the AI's assessment: are the scenes truly doing the same work, or are they doing similar work at different stages of the arc, where the similarity is the point (the repeated situation that reveals how the character has changed)? Repetition with variation is a structural strategy; pure duplication is a structural problem. The distinction matters.",
            "The missing scene identified by the AI: is it the same gap the structural analysis identified? If the AI has found a different absence — a function that the map shows no scene performing — assess whether this is a genuine absence or a function the map is attributing to the wrong scene. Add the AI's missing scene identification to the triage document from Week 1 if it does not already appear there, noting its priority relative to the gaps already identified. The scene map's value is cumulative: it does not replace the triage but adds specificity to it.",
          ],
          note: "Create the cut list alongside the scene map this week: a separate document containing every section identified as a candidate for removal — from the structural analysis, from the AI's assessment, from the triage document's excess category. Move cut candidates into this document rather than deleting them. Writers who know their cuts are preserved cut more freely and more bravely. The cut document is not the trash; it is the archive. Nothing in it is gone — it is held in reserve until the structural revision is complete and the manuscript can be read to confirm whether its absence is an improvement.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Cut List",
      blocks: [
        {
          type: "tip",
          icon: "✂️",
          name: "Create the Archive Before You Cut",
          paragraphs: [
            "Create a cut list alongside the scene map: every section that might be removed without structural damage to the manuscript should be moved to a separate document — call it 'Cuts' or 'Archive' — rather than deleted. The cut document is not the trash; it is the archive. Writers who know their cuts are preserved cut more freely and more bravely, because the decision to remove something is not irreversible. The passage moved to the cut document can be restored if the structural revision reveals that its absence has created a new problem. More often, it cannot be restored — the manuscript is better without it — but the writer who knows restoration is possible makes the initial cut more decisively.",
            "The cut list is also a record of what the manuscript has grown beyond. The scenes that were necessary in the early drafting — that served important functions in the writer's process of discovering the material — are often scenes that the finished manuscript does not need, because the writer has internalized what they taught and the reader does not need to see the teaching. The cut list accumulates these scenes: necessary to write, not necessary to keep. At the end of Year Three, when the thesis is submitted, the cut document is a record of the full scope of the project — everything that was written in service of the manuscript that the manuscript ultimately did not need. It is not a document of failure. It is a document of depth.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Essential 60%",
      blocks: [
        {
          type: "journal",
          title: "What You Would Keep",
          question:
            "If you could only keep 60% of what you've written — if the thesis had to be radically shorter, if you had to cut 40% of the current manuscript and could not recover it — what would you keep? Not what you want to keep, not what cost the most effort to produce, but what the work needs in order to exist as the work it is. Name the scenes or sections. Name what they have in common — what is it about the kept 60% that makes it essential while the cut 40% is expendable? The kept material is the thesis's essential spine: the scenes and sections without which the work is not the work. The cut material is not failure — it is the scaffolding the spine needed to be built. But the scaffolding is not the building, and the scene map should make it possible to see, for the first time, which is which. Write for twenty minutes. The answer is the structural revision's deepest guide.",
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
            "By the end of this week you should have: a complete scene map across all six categories for the full thesis manuscript; a 500-word structural analysis identifying the gap, the excess, and the imbalance; 800–1,500 words of new material addressing the most urgent structural gap; a cut list document (even if currently empty); completion of the AI structural assessment with all four reflection questions; five monosyllabic sentences written for the grammar exercise with three placement notes for the line-level revision pass; a map built for one published work in your genre as calibration. The triage document from Week 1 should be updated to reflect any new findings from the scene map.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 3",
          paragraphs: [
            "Week 3 begins the character revision: does every character earn their place? The character revision works from the scene map — identifying which characters are present in which scenes, tracing each character's arc across the full map, and assessing whether the distribution of scenes makes the arcs legible or leaves them fragmented. Grammar: Phase 6 Topic 3 — Hayakawa's ladder of abstraction, moving up and down between the concrete and the abstract with intention.",
          ],
        },
      ],
    },
  ],
};
