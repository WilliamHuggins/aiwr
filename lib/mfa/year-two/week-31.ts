import type { WeekData } from "@/lib/mfa/types";

export const week31Data: WeekData = {
  weekNumber: 31,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Intensive Thesis Production I — Logic, Gaps, and the Paragraph as Unit",
  emphasizedWord: "Intensive Production",
  deck: "The first of three consecutive production weeks. Lighter structured craft content, heavier thesis word count. The aim across Weeks 31–33 is 4,000–8,000 words of thesis material — the final sustained drafting push of Year Two. This week's craft pressure: the logic of what you have written, the gaps in it, and the paragraph as the basic compositional unit of the prose.",
  meta: [
    { label: "Commitment", value: "12–16 hrs" },
    { label: "Program Week", value: "67 of 108" },
    { label: "Craft Focus", value: "Production + Plot Logic" },
    { label: "Grammar", value: "Phase 7 Preview — The Paragraph" },
    { label: "AI Exercise", value: "Exercise #15 — Plot Hole Detective" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Logic of What You Have Written — Internal Consistency at Book Length",
      blocks: [
        {
          type: "paragraph",
          content: [
            "At the scale of the long manuscript, logic is a structural property as much as a local one. A scene can be beautifully written, emotionally true, and formally accomplished — and still undermine the manuscript's logic if it introduces information that contradicts something established earlier, or if it requires the reader to accept a causal connection that the narrative has not built. This kind of structural illogic is almost impossible to catch while drafting; it becomes visible only when the manuscript is read as a complete unit, which is what Week 34's read-through is designed to produce. But it can be anticipated, and the Plot Hole Detective exercise this week is an early version of that anticipation: a way of asking, before the full read-through, whether the draft is internally consistent.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Internal consistency in a long manuscript operates at several levels simultaneously. At the level of character: does the protagonist behave in chapter seven in a way that is consistent with what has been established about them in chapters one through six, or has the writer needed them to behave differently for plot reasons and accommodated the need without building the justification? At the level of world: does the world the narrative has established follow its own rules consistently, or has the writer introduced an element that the world cannot support? At the level of cause and effect: does each scene's outcome follow plausibly from its premise, or is the progression from scene to scene driven by the writer's need for the plot to move rather than by the internal logic of the characters and situation? These questions are not exclusively for genre fiction — literary fiction, memoir, and screenwriting all require internal consistency — and the failure to maintain it is felt by the reader as a loss of trust in the narrative even when the reader cannot name exactly what has gone wrong.",
          ],
        },
        {
          type: "pullquote",
          quote: "The test for a plot hole is not 'could this theoretically happen' but 'has the narrative built the grounds on which this can happen.' A character can do almost anything — the question is whether the story has earned it.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Categories of Internal Inconsistency — and What Each Requires",
          paragraphs: [
            "Character logic failures: the character who acts against their established psychology without sufficient motivation. The most common failure mode: the writer needs a character to do something for plot reasons and writes the scene without building the motivation in preceding scenes. The character's action then feels unmotivated — or, worse, it is motivated by a new characterization introduced in the scene to justify the action, which contradicts the characterization established earlier. The fix is always the same: either build the motivation in earlier scenes (a revision task) or change the action to something consistent with the established characterization (a drafting task for the current session). The Plot Hole Detective exercise catches this by reading a submitted chapter for moments where character action requires justification the narrative has not provided.",
            "Causal logic failures: scene B does not follow plausibly from scene A, but the narrative has not provided a bridging scene or explanation. In literary fiction, causal gaps are sometimes deliberate — the lyric essay, the fragmented structure, the non-linear narrative all use unexplained transitions as a formal strategy. The distinction: a deliberate causal gap produces a specific effect in the reader (disorientation, the sensation of leaping across time, the experience of implication rather than statement); an accidental causal gap produces confusion, the sensation that something has been omitted by error. The test: can you name what the gap is doing, specifically? If yes, it is probably deliberate. If you cannot name the effect, it is probably accidental, and the revision task is either to fill the gap or to make it deliberately productive.",
            "World logic failures: the narrative's established world has rules — geographic, social, psychological, historical — and those rules must be consistent. In realistic fiction and memoir, world logic failures are usually factual inconsistencies: a character drives from New York to Boston in forty minutes, a historical detail is wrong, a profession is described inaccurately. In less realistic work, world logic failures are the violation of the world's own invented rules: the magic system that works differently in chapter seven than it did in chapter two, the social structure that has changed between scenes without explanation. The fix: a consistency log — a document tracking established facts about the world, characters, and timeline — is the standard tool for managing world logic across a long manuscript. If you do not have one, building it is a Year Three revision task. For now, the Plot Hole Detective exercise catches the most visible inconsistencies in the submitted chapter.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Logic and the Paragraph Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For the fiction writer, the paragraph is the basic unit of fictional time as well as the basic compositional unit of prose. A paragraph that contains a single action or exchange occupies a different fictional duration from a paragraph that compresses weeks into a summary sentence — and the ratio of scene-paragraphs to summary-paragraphs across the manuscript is a rough index of the narrative's pacing. The production week is an occasion to attend to the paragraph-level pacing of new pages: are you writing scene-paragraphs where the action needs to be slowed and felt, or summary-paragraphs where time needs to compress? The error in both directions is common — overcrowding the scene with compressed paragraph prose that speeds past the moment, and overextending the summary into paragraph-length riffs that slow the narrative's momentum.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For the screenwriter, internal consistency includes continuity — the technical consistency of physical details, costumes, props, and locations across scenes — and structural logic: the consistency of character motivation, the plausibility of plot development, and the internal rules of the world. The Plot Hole Detective exercise is directly applicable to screenplay pages: paste a scene or sequence and ask the AI to identify whether any character action requires motivation not yet established, whether any information the characters act on has been withheld from the audience, or whether any scene relies on a coincidence the story has not earned. For playwrights, the logic question centers on the scene's internal progression: does each exchange follow from the previous one, and does the scene's final beat follow from its opening beat with the kind of inevitability-in-retrospect that characterizes a well-constructed dramatic scene?",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For the memoirist, internal consistency has a specific dimension that fiction does not: the consistency of the narrator's self-presentation. The narrator who presents themselves as incapable of a specific kind of action in chapter one and then performs that action in chapter seven without explanation has committed a characterization inconsistency as damaging to the reader's trust as any plot hole in fiction — and more so, because the reader's trust in a memoir is trust in the actual person rather than in a constructed character. The memoir's narrator must behave consistently with their established psychology unless the narrative has built the grounds for a transformation — in which case the transformation should be visible as transformation, not as unexplained inconsistency. The Plot Hole Detective exercise applied to memoir pages: does the narrator's behavior in the submitted section follow from what has been established about their psychology and situation?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7 Preview — The Paragraph as Unit of Composition",
      blocks: [
        {
          type: "grammar",
          title: "Phase 7 · The Paragraph — What It Is, What It Does, How It Fails",
          intro: [
            "Phase 7 of the grammar curriculum — which will be developed fully in Year Three — addresses the paragraph as a compositional unit: not the individual sentence but the grouping of sentences that constitutes the basic unit of sustained prose thought. The paragraph is the sentence's larger context, the unit within which sentences acquire their relational meaning. A beautiful sentence in a poorly constructed paragraph is a beautiful sentence failing to do its full work.",
            "The paragraph has an internal architecture that mirrors the sentence's architecture at a larger scale. The topic sentence (or its absence) is the paragraph's main clause: it announces what the paragraph is going to do. The body sentences are the free modifiers: they develop, qualify, extend, and complicate the topic. The closing sentence is the period: it marks completion and often performs the same emphatic function that the final word of a sentence performs — the most important idea in the paragraph should, where possible, arrive at the end rather than the beginning.",
          ],
          rule: "A paragraph is a unit of thought: it does one thing. The paragraph that tries to do two things is usually a paragraph that should be two paragraphs — the transition between thoughts is more valuable than the compression of two thoughts into one. The test: what is the single thing this paragraph is doing? If the answer requires the word 'and' — 'it establishes the setting and it introduces the protagonist's desire' — the paragraph may be doing two things and should be examined for a natural break. The exceptions: the paragraph that moves from establishing to complicating the same thing (a single thought developed rather than two thoughts compressed) and the paragraph that uses a transition between two related thoughts as its own compositional unit.",
          examples: [
            {
              label: "The paragraph's arc — topic, body, close",
              text: "Topic sentence announces what the paragraph does. Body sentences develop it — extend it, qualify it, complicate it, provide evidence or example. Closing sentence marks completion with appropriate weight. The paragraph that buries its most important sentence in the middle — that arrives at its central claim after three sentences of development and then continues for three more — has wasted the emphatic positions at the beginning and end. The most emphatic position in a paragraph is the final sentence; the second most emphatic is the opening sentence. The body is where the development lives; the opening and the close are where the argument is staked and completed.",
            },
            {
              label: "The one-sentence paragraph — when isolation earns its keep",
              text: "The one-sentence paragraph is the fragment's analogue at paragraph scale: it isolates a single sentence, giving it the weight of a complete thought rather than embedding it in a larger development. Used once in a passage, at a moment of maximum emotional or argumentative crystallization, the one-sentence paragraph creates the sensation of arrival — the reader pauses, as they pause at a sentence fragment, and the pause is the paragraph's meaning. Used repeatedly, it becomes a rhythm tic: the writer signaling importance through isolation rather than through content. The test: does this sentence earn isolation, or is the paragraph break performing importance the sentence has not produced on its own?",
            },
          ],
          outro: [
            "Phase 7 content — paragraph architecture, white space and pacing at paragraph level, transitional strategies — continues in Weeks 32 and 33. The full Phase 7 curriculum is developed in Year Three, where it is integrated with the thesis revision work. For now, the paragraph preview introduces the vocabulary: topic sentence, body, closing sentence, emphatic positions, the one-sentence paragraph. Apply this vocabulary to the thesis pages you write this week: after drafting, read each paragraph and ask what single thing it is doing, whether its most important sentence is in an emphatic position, and whether any one-sentence paragraphs are earning their isolation.",
          ],
          exercise:
            "After writing this week's thesis pages, read each new paragraph and ask: (1) What is the single thing this paragraph is doing? (2) Is the most important sentence in the closing position, where it will carry the most weight? (3) Does any paragraph try to do two things and would it be stronger as two paragraphs? Mark the paragraphs that need revision and note them in the session log — they are revision tasks for Year Three's structural passes.",
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
              title: "Your thesis draft — the most recently written chapter or section",
              author: "You",
              href: "",
              note: "Required. Before beginning this week's new pages, reread the most recently completed chapter or section of the thesis — not for pleasure, not for revision, but specifically for internal logic: does every character action in the section have motivation established in the text? Does every event follow plausibly from the previous event? Is there any moment where you can feel the writer's hand moving the plot rather than the characters and situation generating the movement? Mark these moments without revising them — they are the material for the Plot Hole Detective exercise. Reading the draft for logic before writing new pages also helps prevent the continuity errors that accumulate when new pages are written without reference to what has already been established.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Refuse to Be Done — the revision and consistency chapters",
              author: "Matt Bell",
              href: "https://bookshop.org/p/books/refuse-to-be-done-matt-bell/18168498",
              note: "Purchase (continuing from Week 22). Return to Bell specifically for the chapters on consistency and the consistency log: the practical document that tracks established facts about characters, the world, and the timeline across a long manuscript. If you do not yet have a consistency log for your thesis, building a basic one this week — names, physical descriptions, established facts about the world, key dates and sequence of events — is more valuable than any amount of new drafting, because it prevents the consistency errors that are hardest to catch in revision.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Spring Thesis Session 13 — 1,500–2,500 Words",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This is a production week. Write 1,500–2,500 words of thesis manuscript. No supplementary craft exercise beyond the paragraph audit described in the grammar section.",
            "Before writing: spend fifteen minutes rereading the previous session's pages, noting any unresolved logic questions in the session log. These are not problems to solve before writing; they are problems to note so they can be addressed in revision. The production weeks are not the place for revision — they are the place for generation. Write forward.",
            "After writing: apply the paragraph audit (from the grammar section) to the new pages. Mark paragraphs that need revision without revising them. Update the session log: word count, what was written, what questions the new pages have raised about the manuscript's logic or structure. The session log's accumulated record of questions is the raw material for the Year Three revision plan.",
          ],
          target: "1,500–2,500 words of thesis",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #15 — The Plot Hole Detective",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit a chapter or substantial section of your thesis draft — ideally the section you identified as most logically uncertain in your prereading — for logic-checking. The AI reads for internal consistency rather than for craft or voice.",
          prompt:
            "Read this chapter [or section] for internal logical consistency. I am not asking for craft feedback on the prose — I am asking specifically for logic-checking. Identify: (1) Any moment where a character acts in a way that requires motivation not established in this section or clearly established in earlier sections — any action that seems unmotivated given what the reader has been shown about the character; (2) Any moment where an event or development does not follow plausibly from what preceded it — where the causal connection is missing, weak, or where the narrative seems to require a coincidence it has not earned; (3) Any established fact about the world, the characters, or the timeline that this section appears to contradict or that it leaves ambiguous in a way that creates confusion rather than productive uncertainty; (4) Any question the reader would reasonably have at the end of this section that the narrative has not yet answered and that does not appear to be a deliberate withholding.",
          questions: [
            "For each logical problem the AI identifies: is it an actual problem, or is it a consequence of the AI reading the section in isolation rather than in the context of the full manuscript? Some apparent plot holes are resolved in earlier sections the AI has not read; some apparent motivation failures are established in earlier characterization the AI cannot access from a single chapter. Distinguish between problems that require revision and problems that only appear as problems because the AI lacks the full context. Note both in the session log: the genuine problems are revision tasks; the apparent problems may indicate sections that need to be better telegraphed earlier in the manuscript so that even a reader coming to the chapter without full context can follow.",
            "The AI's identification of unmotivated character actions: for each one, trace the character's motivation backward through the manuscript. Is the motivation established somewhere the AI did not read — and if so, is it clearly enough established that a reader will carry it to this scene? Or is the motivation genuinely absent, established in the writer's knowledge of the character but not yet on the page? The motivation that exists only in the writer's knowledge of the character is the most common source of the 'but why would they do that?' reader response, and it is the revision problem most resistant to self-editing because the writer cannot experience their own absent motivation as absent.",
            "The AI's identification of causal gaps: for each one, decide whether the gap is deliberate or accidental. The deliberate causal gap should produce a specific effect — name it. If you cannot name the effect the gap is producing, it is probably accidental. For accidental gaps: is the fix a bridging scene (a new scene that establishes the causal connection), a line of summary (a sentence or two that moves the narrative across the gap with acknowledgment), or a revision of the scene's ending to make the following scene's beginning more plausible? Note the fix in the session log as a Year Three revision task.",
            "The AI's unanswered questions at the section's end: for each, decide whether it is a deliberate withholding (the reader is meant to carry the question forward as a source of narrative tension) or an accidental omission. The deliberate withholding should be purposeful — the question should generate forward momentum, create suspense, or establish a problem that the narrative will later address. If the withheld information serves no narrative purpose except to be revealed later, consider whether the withholding is earning its keep or simply deferring the scene's resolution past the point where the reader needs it.",
          ],
          note: "The Plot Hole Detective exercise is most useful for manuscripts in which the logic is complex — multiple characters with intersecting motivations, non-linear structures where information is withheld across time, worlds with specific rules that must be consistently applied. For simpler structures, the exercise may produce relatively few findings, which is itself useful information: the manuscript's logic is more robust than the writer's anxiety about it suggests. Either outcome — problems identified or logic confirmed — is productive.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Decision You Are Most Uncertain About",
      blocks: [
        {
          type: "tip",
          icon: "⚖️",
          name: "Name the Uncertainty — Then Write Toward It",
          paragraphs: [
            "Every long manuscript in progress contains at least one decision the writer is uncertain about: a structural choice that might be wrong, a characterization that might not be serving the work, a formal commitment that the manuscript has made but that the writer suspects might be limiting rather than enabling. The uncertainty is not a sign that the decision is wrong; it is a sign that the decision is significant. The significant decisions are the ones worth being uncertain about.",
            "Name the uncertainty specifically — not 'I'm not sure about the structure' but 'I am not sure whether the non-linear structure is serving the material or whether it is a formal experiment that the material cannot support.' Once the uncertainty is named, it can be tested: write toward the uncertainty in this week's session, directly addressing the decision the thesis has made and seeing whether the new pages confirm or challenge it. A decision that generates strong pages is probably right; a decision that generates labored pages may be the constraint that is limiting the work. The production weeks are the right place for this kind of testing, because the forward pressure of the word-count target prevents the testing from becoming a reason not to write.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Decision You Are Most Uncertain About",
      blocks: [
        {
          type: "journal",
          title: "Name It",
          question:
            "What decision in your thesis are you most uncertain about — not the decision that is clearly wrong (those are revision tasks) but the decision whose rightness you cannot yet assess? It may be a structural decision: the choice to begin in medias res rather than chronologically, the non-linear structure that may be illuminating the material or may be obscuring it. It may be a characterization decision: the protagonist's specific blind spot, which you have committed to but which may be limiting rather than enabling the story. It may be a formal decision: the choice to write in present tense, the lyric essay structure, the second-person address. It may be a thematic decision: the governing question the thesis is organized around, which may be the right question or may be a question that the material is outgrowing. Name the uncertainty. Then: what would it mean to be wrong? What would you lose if the decision is wrong, and what would be gained by changing it? Write for twenty minutes. You are not making a decision — you are taking the uncertainty's measure.",
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
            "By the end of this week you should have: written 1,500–2,500 words of thesis in Session 13; completed the paragraph audit on the new pages (marked paragraphs needing revision, noted them in the session log); submitted a chapter to the Plot Hole Detective exercise with all four reflection questions completed; reread the most recently completed chapter specifically for internal logic before writing new pages; updated the consistency log or noted the need to build one as a Year Three revision task; written the journal entry naming the thesis's most uncertain decision.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 32",
          paragraphs: [
            "Week 32 continues the intensive production block: 1,500–2,500 more words of thesis, grammar focus on white space and pacing at the paragraph level, and AI Exercise #17 — The Red Pen Exercise, in which 500 words of thesis prose are submitted for 30% cutting while preserving meaning. The editorial tip for Week 32: mark every sentence that does not serve the thesis's governing question. The journal prompt: where in the writing do you feel most fully yourself?",
          ],
        },
      ],
    },
  ],
};
