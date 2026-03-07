import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek6Data: WeekData = {
  weekNumber: 6,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Line-Level Revision",
  title: "Line-Level Revision I — The Sentence Pass",
  emphasizedWord: "The Sentence Pass",
  deck: "The structural passes are complete. The line-level revision begins. This is the revision most writers think of when they think of revision — and it is the last revision to perform, not the first. A sentence-by-sentence pass on a structurally sound manuscript is entirely different from a sentence pass on an unrevised draft: you are now refining a building that stands, not decorating a structure that may be demolished.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "78 of 108" },
    { label: "Craft Focus", value: "Line-Level Revision I" },
    { label: "Grammar", value: "Phase 6, Topic 6 — Zombie Nouns and Nominalizations" },
    { label: "AI Exercise", value: "Exercise #17: The Red Pen Exercise at Scale" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Sentence Pass — What It Is, What It Is Not, and What It Requires",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The sentence pass is the most granular revision work of the entire sequence, and the most time-intensive. It proceeds at the pace of a sentence at a time — slower than reading, slower than drafting, slower than any of the structural revision passes that preceded it. The structural passes could cover the whole manuscript in a week because they were reading for pattern, for architecture, for the large-scale problems that become visible from above. The sentence pass cannot cover the whole manuscript in a week because it is not reading for pattern. It is reading for the precise rightness of every individual sentence — its length, its rhythm, its word choices, its relationship to the sentence before and the sentence after, its position on Hayakawa's ladder, its verb quality, its proportion of Anglo-Saxon to Latinate diction, its adverbs and nominalizations, the work it is doing and whether that work justifies the reader's attention.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The sentence pass has a single objective stated simply: every sentence should earn its place. Not every sentence should be beautiful — the manuscript that is attempting beauty on every line is a manuscript that has confused ornament with purpose, and the reader will feel the strain of that confusion as exhaustion. Pacing requires plain sentences. Transition requires sentences that rest the reader before the next demanding passage. Exposition requires sentences that deliver information cleanly without drawing attention to themselves. The sentence that earns its place in these functional roles is not a lesser sentence than the sentence that carries maximum lyric or dramatic weight; it is a sentence that is doing what the manuscript needs at that moment, and doing it without waste. The sentence that does not earn its place is the sentence that is merely present — that is there because the draft needed to get from one point to another, that delivers no rhythm, creates no pressure, carries no meaning beyond the minimal informational content required to advance the sequence. That sentence should be cut, or revised until it earns what it costs the reader.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The sentence pass is not about making every sentence beautiful. It is about ensuring that no sentence is merely present — that every sentence, however plain, is doing something the manuscript needs done, and doing it without the words it does not need.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Five Questions the Sentence Pass Asks of Every Sentence",
          paragraphs: [
            "Does it earn its place? The foundational question, and the most demanding. A sentence earns its place by doing one or more of the following: advancing the narrative (something changes as a result of this sentence that was not changed before it); creating rhythm (the sentence is positioned in the sequence for its sound and length, not only its meaning, and its removal would damage the passage's music); carrying an image (the sentence contains the specific detail that will accumulate into the work's governing imagery); delivering character (the sentence reveals something about who this person is that no other sentence has revealed); or doing thematic work (the governing question is engaged by what this sentence does, in the way the thematic audit has trained the writer to recognize). A sentence that is doing none of these things is a sentence the reader is spending attention on with no return.",
            "Is every word the right word? Word-rightness is not synonymous with word-beauty. The right word is the word that is most precisely accurate to what the sentence is doing — the specific word at the specific register, at the right position on Hayakawa's ladder, with the right Anglo-Saxon or Latinate weight for this moment, with a verb that is as dynamic as the sentence needs it to be. The adverb audit (Week 5) and the zombie noun audit (this week's grammar) are both instruments of word-rightness: they identify the words that are wrong because they are covering for words that are not there yet. The sentence pass applies all of the Phase 6 toolkit simultaneously, asking of each word whether it is the right word or only the adequate one.",
            "Is it the right length? Length is a rhythmic decision as much as an informational one. The sentence that is too long for its content — that accumulates qualifications, subordinate clauses, and modifications around a core that would be better stated plainly — is wasting the length it is borrowing from the sentences around it. The sentence that is too short for its content — that handles a complex event, a loaded moment, a thematically dense action in fewer words than the moment requires — is refusing the weight its subject is asking for. The right length is the length that matches the sentence's content and its position in the sequence: a long sentence after a series of short ones creates a specific effect; a short sentence after a long cumulative construction creates a different one. The sentence pass asks whether the length is serving the effect or arriving by default.",
            "Is it doing everything it can do? This question is distinct from the question of whether it is doing its minimum. The sentence that earns its place by performing its minimum function — advancing the narrative, say, without also creating rhythm or carrying an image or doing thematic work — is a sentence that could be doing more than it is. Not every sentence can do everything simultaneously; the manuscript would be exhausting if they did. But the sentence pass asks of each sentence whether there is an opportunity being missed — whether a small revision could make this sentence do two things instead of one, or three instead of two. This question is the sentence pass's most generative: it produces the specific local improvements that distinguish a polished manuscript from a merely competent one.",
            "Does it read aloud cleanly? The ear catches what the eye normalizes. The sentence that stumbles when read aloud — where the rhythm breaks unexpectedly, where the writer rushes to get through it, where the syntax creates a momentary confusion that resolves but leaves a slight turbulence — is a sentence that is asking the reader to do compensatory work that the revision should be doing instead. The sentence pass should be conducted with at least one full reading-aloud pass: every sentence marked as unsatisfying in the silent read should be read aloud before revision, and every revised sentence should be read aloud to verify that the revision has improved the rhythm rather than merely changed the information.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Sentence Pass Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction sentence pass has two distinct territories: the prose sentences (narration, description, action, interiority) and the dialogue. The prose sentences are assessed against all five questions from the lecture. The dialogue is assessed against a different set: is this line something only this character would say, in this character's specific syntax and diction? Does the line advance what is happening between the characters, or is it filling time between the beats that matter? Is the attribution doing any work — carrying any action, any physical presence — or is it merely labeling the speaker? Is there an attribution at all where none is needed? The fiction sentence pass should be conducted as two sub-passes: first the prose, then the dialogue, because the two require different attention and the simultaneous assessment of both tends to do justice to neither.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay sentence pass focuses on two elements that are most often under-revised in first drafts: the action lines and the scene headings. Action lines — the prose that describes what the camera sees — are frequently written at draft quality during the generative phase: functional, accurate, but not doing the work they could do. The action line sentence pass asks of each line whether it is rendering what is most important about the shot — not just what is visible but what the audience should be attending to — with the economy and specificity the form requires. Scene headings are not usually revised at all, but the sentence pass is a good moment to assess whether INT. KITCHEN - DAY is earning its position or whether a more specific heading ('INT. KITCHEN - EARLY MORNING, BEFORE THE OTHERS WAKE') would do work for the reader that the generic version does not.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The CNF sentence pass should pay particular attention to what Steven Pinker calls 'the curse of knowledge': the tendency of writers who know their subject intimately to omit the specific steps and concrete details that the reader needs in order to follow the writer's thinking, because those steps are so obvious to the writer that they seem unnecessary to state. In CNF and memoir, the curse of knowledge appears as abstract summary where scene is needed, as named emotion where rendered experience is needed, as the writer's conclusion stated where the reader needs the evidence that leads to the conclusion. The sentence pass asks, of every sentence in the CNF: does the reader have what they need to understand what this sentence is doing? Not does the writer have it — does the reader?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 6, Topic 6 — Zombie Nouns: Nominalizations and How to Kill Them",
      blocks: [
        {
          type: "grammar",
          title: "Phase 6 · The Zombie Noun — How Turning Verbs Into Nouns Drains Prose of Life",
          intro: [
            "Helen Sword coined the term 'zombie nouns' for nominalizations: verbs and adjectives converted into nouns that drain vitality from prose by smothering the action that was alive in the original verb under the abstraction of a noun form. The zombie noun is recognizable by its suffix: -tion, -ment, -ance, -ence, -ity, -ness, -ism. Implementation, consideration, achievement, realization, clarification, development, assessment, determination, utilization — these are verbs wearing noun costumes, and their effect on prose is the effect of fog: the action that was precise and physical and present in the verb form has been converted into a concept, a process, a thing that happens rather than something someone does.",
            "The zombie sentence's grammar is also characteristic: the zombie noun requires additional verbs to animate it, verbs that are almost always weak — make, reach, achieve, undergo, experience, conduct, perform. 'They reached a decision' versus 'they decided.' 'She underwent a realization' versus 'she realized.' 'He made an assessment of the situation' versus 'he assessed it.' Each zombie version is longer, more abstract, more bureaucratic, and less alive than the verb version. The extra words are not carrying extra meaning; they are the cost of converting the verb into a noun and then having to animate the noun with a weaker verb.",
          ],
          rule: "The zombie noun audit proceeds the same way as the adverb audit: search for the suffix patterns (-tion, -ment, -ance, -ence, -ity, -ness, -ism) and for the characteristic weak verbs that accompany them (make, reach, achieve, undergo, experience, conduct, perform, provide, offer, demonstrate). For each zombie noun found, ask: what is the underlying verb? Is there a version of this sentence in which the verb is doing the work the zombie noun is currently doing — in which the actor is acting rather than experiencing or undergoing or reaching? The revision restores the verb to the sentence and eliminates the noun form and its accompanying weak verb. The resulting sentence is almost always shorter, more physical, and more present than the zombie version. The exceptions — zombie nouns that are doing genuine conceptual work, where the nominalized form is the right register for the sentence's purpose — should be marked as keepers by the same standard as the adverb keeper: the test is whether the sentence loses something irreplaceable when the zombie is removed.",
          examples: [
            {
              label: "The zombie sentence and its restoration",
              text: "'The implementation of the new policy required the consideration of multiple factors and the achievement of consensus among the relevant stakeholders.' Every key word is a zombie noun: implementation, consideration, achievement, consensus. The restored version: 'They implemented the new policy after considering multiple factors and getting everyone to agree.' Still not literary prose — the subject matter is institutional — but shorter, cleaner, and stripped of the bureaucratic fog that the zombie nouns produce. In literary writing, the zombie noun is more insidious because it is less visible: 'Her realization of his deception came slowly' versus 'She realized slowly that he had lied.' 'The achievement of understanding between them' versus 'They came, finally, to understand each other.' In both cases the zombie version is abstracting what the verb version is enacting.",
            },
            {
              label: "The zombie noun that earns its place — nominalization as conceptual tool",
              text: "'Her silence was a kind of mercy.' Silence here is a nominalization of the verb 'to be silent,' but it is not a zombie: it is naming a state as a thing, and the naming is the point — the sentence is about what her silence is, not about the act of being silent. 'The darkness in the room had weight.' Darkness is a nominalization, but it is doing work that 'the room was dark' does not do: it is making the darkness an entity with physical properties, which is the sentence's effect. The test: would the verb form be more alive here, or would it change the sentence's meaning in a way that loses what the nominalized form was doing? If the former — if the verb form is more alive and the meaning is preserved — the zombie should be restored. If the latter — if the nominalization is specifically creating an entity, a state, a concept that the verb form cannot — it is not a zombie but a legitimate nominalization.",
            },
          ],
          outro: [
            "This week's grammar exercise: find ten nominalizations in the thesis draft using the suffix patterns and accompanying-weak-verb method. For each, identify the underlying verb and write the restored sentence. Read both versions aloud. Keep the restoration where it is stronger; keep the original where the nominalized form was doing genuine conceptual work. Note the proportion of restorations to keepers in the session log: a high proportion of restorations indicates a draft that is using the bureaucratic register more than the literary subject requires, and the sentence pass should watch for zombie nouns across the full fifteen-page pass.",
          ],
          exercise:
            "Find ten nominalizations in your thesis draft. For each, identify the underlying verb and write the restored sentence. Read both versions aloud. Keep restorations where stronger; preserve originals where the nominalized form is doing genuine conceptual work. Note the proportion in the session log.",
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
              title: "The Sense of Style",
              author: "Steven Pinker",
              href: "",
              note: "Chapter 3: 'The Curse of Knowledge.' Pinker's account of why knowledgeable writers produce prose that is opaque to their readers is the most useful diagnostic tool for the CNF sentence pass — and for any prose that is dealing with complex material the writer knows deeply. The curse of knowledge is not a failure of intelligence or generosity; it is a structural consequence of expertise, and understanding its mechanism is the first step toward correcting it in the sentence pass. Pinker's writing itself is a model: lucid, precise, concrete, free of the zombie nouns and passive constructions that afflict most academic writing on the same subjects.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Several Short Sentences About Writing",
              author: "Verlyn Klinkenborg",
              href: "",
              note: "Required. Reread in full in one sitting. Klinkenborg's book is structured as a prose poem about prose — short declarative sentences about how sentences work and how writers should think about them. The second reading, after two years of the grammar curriculum, will produce a different experience than the first: the vocabulary for what Klinkenborg is describing is now present in a way it was not before, and his compressed formulations will carry more weight. Read it as a model of the sentence consciousness the sentence pass is trying to develop: the attention to each sentence as a complete, purposeful unit, not a vehicle for getting to the next sentence.",
              badge: "Required",
            },
            {
              number: "03",
              title: "Dreyer's English",
              author: "Benjamin Dreyer",
              href: "",
              note: "Chapters 5–8. Dreyer's account of copy-editing — the prose-level precision that distinguishes the near-final manuscript from the finished one — is the best available guide to the sentence pass's more granular concerns: word repetition, redundant pairs, the specific constructions that are technically correct but rhythmically wrong, the qualifiers that weaken what they intend to strengthen. Dreyer writes with the authority and wit of a professional who has read thousands of manuscripts at the sentence level; his chapters on specific word choices and constructions are directly applicable to the sentence pass.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Sentence Pass — First Fifteen Pages",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Perform a sentence-by-sentence revision pass on the first fifteen pages of your thesis. For every sentence, ask all five questions from the lecture: Does it earn its place? Is every word the right word? Is it the right length? Is it doing everything it can do? Does it read aloud cleanly? Mark every sentence you are not satisfied with. Then revise every marked sentence.",
            "This will take several hours. That is not a warning — it is a calibration. The sentence pass is not a pass that can be done at the pace of reading. If you are moving through the fifteen pages at reading speed, you are not doing the sentence pass; you are doing a reading. The sentence pass requires that the writer slow to a pace where each sentence is held individually and evaluated against each question before the next sentence is approached. The cognitive mode is different from reading, different from drafting, different from the structural passes: it is the mode of close attention to the smallest unit of prose that carries meaning.",
            "After completing the sentence pass on the first fifteen pages, read those fifteen pages aloud in full — the entire revised passage, beginning to end. The reading aloud serves as both a quality check (sentences that still stumble will reveal themselves) and as a reward: the passage that has been through the sentence pass should sound different from the passage before the pass, and the difference should be audible as a quality of precision and purposefulness that the draft quality could not yet achieve.",
          ],
          target: "Sentence-by-sentence revision pass on the first fifteen pages + full reading aloud of the revised passage",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #17: The Red Pen Exercise at Scale",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude — Exercise #17 (The Red Pen Exercise)",
          intro:
            "The Red Pen Exercise from Year Two Week 32 asked the AI to cut 30% of a submitted passage while preserving meaning. At this stage of the revision — after the structural passes are complete and the line-level work has begun — the exercise is applied at scale: the page you submit is the page in the thesis you feel is closest to finished, and the AI's 25% cut is a diagnostic of what is still excess even in the manuscript's strongest material.",
          prompt:
            "Cut 25% of this passage while preserving all essential meaning, every key image, and the overall rhythm. Make no cuts that change the meaning of any sentence or eliminate any piece of information that the passage requires. Prioritize for cutting: redundancies (any piece of information stated twice); over-explanation (the sentence that tells the reader what the previous sentence has already shown); sentences that restate what the preceding sentence has already established; adjective clusters where one adjective would serve as well as two or three; any sentence whose sole function is transitional and that could be eliminated without damage to the passage's logic or rhythm. After the cut, note in a brief annotation: which category of excess was most prevalent — redundancy, over-explanation, restatement, adjective excess, or transitional padding?",
          questions: [
            "Review every cut the AI made. For each: does the passage improve with the cut, or does the removal cost something the annotation did not account for? Keep every cut that improves the passage; restore every cut that diminishes it. The AI's cuts are not authoritative — they are diagnostic. Some will be correct; some will be wrong. The value is in the process of evaluating each cut, which develops the critical precision the sentence pass requires: the ability to assess whether a word, a phrase, or a sentence is earning its place.",
            "The AI's annotation of which category of excess was most prevalent: does this match your own sense of where the manuscript tends to overwrite? If the AI finds primarily redundancy — information stated twice — and you believed the passage was one of your most compressed, the gap is instructive: what the writer experiences as compression may still contain more redundancy than is visible from the inside. If the AI finds primarily over-explanation — the sentence that tells what the previous sentence has already shown — the redundancy pass (the editorial tip) is the most urgent remaining line-level task.",
            "After reviewing the AI's cuts, make one additional cut the AI did not make: a cut you would not have made without the AI's demonstration that 25% could be removed without damage to the passage. The most useful outcome of the Red Pen Exercise is not the AI's specific cuts but the recalibration of the writer's sense of how much can be removed from a passage that feels near-finished — how much is still excess that the writer's attachment has been protecting. The additional cut is the exercise's full benefit: the cut the exercise made possible that the writer could not have made without it.",
            "Apply the Red Pen Exercise's principle to the sentence pass on the first fifteen pages: after completing the sentence pass, read the revised passage and ask whether 10% of it could still be cut without damage. Not 25% — the sentence pass has already done significant compression. But 10% is almost always available even in a revised passage, and finding it requires the same attention to redundancy and over-explanation that the Red Pen Exercise has been developing. The sentence pass and the Red Pen principle are complementary instruments: the pass revises every sentence toward precision; the cut removes the sentences that are still excess after the revision.",
          ],
          note: "The sentence pass and the Red Pen Exercise together constitute the line-level revision's full toolkit for this week. Next week's dialogue and interiority pass will apply the same sentence-level attention to the manuscript's most character-concentrated passages — the elements that most directly carry who the characters are and what they are doing to each other.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Redundancy Pass",
      blocks: [
        {
          type: "tip",
          icon: "🔁",
          name: "The First Statement Is Usually Fine — The Second Is the Writer Not Trusting the First",
          paragraphs: [
            "One of the most productive single-objective revision passes is the redundancy pass: reading through the manuscript for the sole purpose of identifying every piece of information that is stated twice. In a first draft, the redundancy is almost always invisible to the writer because the two statements are separated by enough prose that the writer has moved on and does not remember the earlier one. In the sentence pass, conducted at the pace of a sentence at a time, the redundancy becomes visible: the second statement of something already established arrives and the ear catches the repetition.",
            "The diagnostic is simple: the first statement of a piece of information is usually fine. The writer wrote it when they first needed it, in the place where it belongs, at the moment in the narrative where the reader needs to have it. The second statement is almost always the writer not trusting the first — returning to the information because they are afraid the reader has forgotten it, or because the second passage is dealing with consequences of the first and the writer felt the reader needed to be reminded of the premise. The redundancy pass develops trust: trust in the image you have built, the fact you have stated, the character you have established. The reader who has been attentive — and the sentence pass is producing a manuscript that rewards attentive reading — does not need to be reminded. Trust the first statement. Cut the second.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Word You Use Too Often",
      blocks: [
        {
          type: "journal",
          title: "The Tic That Reveals the Preoccupation",
          question:
            "What word do you use too often in your thesis — not as a stylistic choice but as a tic? Not a word you have chosen deliberately and deployed with intention, but a word that appears more frequently than you intend, that you reach for reflexively, that arrives in the draft before you have decided it is the right word for this sentence? It may be a word of perception (looked, noticed, saw, felt), a word of approximation (somehow, something, almost, seemed), a word of qualification (just, quite, really, simply), or a word from the thesis's specific subject matter that has become the default term for something that should be rendered in multiple ways across the full manuscript. Find it — search the document if you need to — and name it. Then ask: what does this word's overuse tell you about what your mind keeps returning to? What anxiety is it covering, what gesture is it making reflexively, what is it reaching for that a more precise word would supply? The tic is not an embarrassment; it is information. It tells you something about where the revision still has work to do, and about what the manuscript is still trying to say that it has not yet found the right words for.",
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
            "By the end of this week you should have: completed the sentence-by-sentence revision pass on the first fifteen pages; read the revised fifteen pages aloud in full; completed the Red Pen Exercise (AI 25% cut, all cuts reviewed, one additional cut made); completed the zombie noun audit (ten nominalizations found and assessed, restorations noted); read Pinker Chapter 3, Klinkenborg in full, and Dreyer Chapters 5–8; updated the session log with the sentence pass's findings and the tic word identified in the journal prompt.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 7",
          paragraphs: [
            "Week 7 continues the line-level revision with the dialogue and interiority pass — the two elements that most directly carry character and that most often need the most revision work. The attribution audit, the dialogue compression test, the interiority over-explanation pass. Grammar: Phase 6 Topic 7 — register, diction levels, and code-switching. The sentence pass continues on the manuscript's next section; the line-level revision will proceed through Week 7 before moving to the image revision in Week 8.",
          ],
        },
      ],
    },
  ],
};
