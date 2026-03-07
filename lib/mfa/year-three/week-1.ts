import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek1Data: WeekData = {
  weekNumber: 1,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Structural Revision",
  title: "Entering Revision — The Cold Eye and the Willing Hand",
  emphasizedWord: "Entering Revision",
  deck: "You have a draft. Not a finished draft — probably a first draft that is somewhere between promising and genuinely good. The gap between what you have and what the thesis needs to be is the territory of Year Three. This gap is not a problem; it is the work. The Year Three writer's primary skill is not generation — it is transformation: the capacity to look at existing work with cold clarity and rebuild it toward its fullest potential.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "73 of 108" },
    { label: "Craft Focus", value: "Entering Revision" },
    { label: "Grammar", value: "Phase 6, Topic 1 — Latinate vs. Anglo-Saxon Diction" },
    { label: "Year Three Theme", value: "Completion" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Two Enemies of Revision — And the Psychological Posture That Defeats Both",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every significant piece of literary prose has been revised substantially. The drafts of Flaubert's Madame Bovary fill multiple volumes; Hemingway rewrote the ending of A Farewell to Arms thirty-nine times; Toni Morrison described revision as the place where the real writing happens. The first draft is not a failure — it is the raw material from which the work will be made. The Year Three writer's task is not to apologize for the draft's limitations or to be surprised by them. It is to see them clearly and to address them in the right order, at the right scale, with the right instruments.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The two enemies of revision are attachment and perfectionism, and they operate at opposite ends of the revision process. Attachment is the inability to cut or change what cost effort to produce — the paragraph that took three hours to write and that is now, seen clearly, doing work no other paragraph is doing, but doing it in the wrong place, or at the wrong length, or in a register the manuscript's voice cannot accommodate. Attachment is the voice that says: but I worked on that. Perfectionism is the paralysis that prevents revision because no revision will be good enough — the awareness of the gap between the draft and the ideal that becomes so acute it prevents the writer from closing the gap by any available means. Perfectionism is the voice that says: but I don't know how to fix it well enough.",
          ],
        },
        {
          type: "pullquote",
          quote: "Compassionate toward the material, merciless toward what doesn't serve it. That is the psychological posture of the Year Three reviser. The material deserves to become what it is capable of being. The passages that are preventing it from becoming that do not deserve your protection.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Revision Posture — Four Commitments to Make Before the Structural Pass Begins",
          paragraphs: [
            "Commit to the work's potential rather than its current state. The revision plan you produced at the end of Year Two is a map of the gap between what the thesis currently is and what it is capable of being. That potential is not speculative — it is visible in the manuscript's strongest moments, the passages where the voice and the subject and the form are fully aligned. Those moments are the manuscript's evidence of what the full work can be. Every revision decision should be made in service of bringing the whole manuscript to the standard those moments have already established. The commitment to potential over current state is what makes the cut possible — what makes it possible to remove a passage that is good in isolation because it is preventing the work from reaching the standard its best passages have set.",
            "Commit to the sequence. Structural revision before character revision. Character revision before thematic revision. Thematic revision before line-level revision. Line-level revision before copy-editing. This sequence is not arbitrary — it reflects the logical dependency of each revision type on the ones before it. You cannot revise a character's arc if you have not yet established which scenes will remain in the manuscript. You cannot perform a line-level pass if you do not yet know which lines will survive the structural pass. Breaking the sequence — polishing sentences in a section that will be cut, developing a character whose thread will be eliminated — is the most demoralizing form of wasted effort. The sequence is your protection against it.",
            "Commit to the cold reading. The cold reading is the practice of reading your own work as though you did not write it — with the same critical attention and the same allowance for surprise that you bring to a published work you are reading for the first time. The cold reading is not natural; it requires active effort against the writer's tendency to read what they meant rather than what is on the page. The cooling-off period helps (the manuscript left unread for a week becomes slightly foreign); the change of format helps (printing what you have been reading on screen); the reading aloud helps above all, because the ear catches what the eye has normalized. This week's structural triage should be conducted after a cold reading of the relevant sections, not from memory of what the sections contain.",
            "Commit to the revision plan as the map, not the territory. The Year Two revision plan identified the five most urgent structural problems in priority order. It is the starting point, not the final word. Some of the problems it identified will turn out to be less urgent than anticipated, because addressing the highest-priority problem changed the conditions under which the others exist. Some problems the plan did not identify will emerge in the process of addressing those it did. The revision plan is the best available map at the moment of its creation; it should be updated as the territory reveals itself. Keep the plan document open throughout Year Three's structural revision weeks and revise it when the work teaches you something the plan did not know.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Entering Revision Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Novel and story collection revision requires the structural pass first: arc, character, scene order, what's missing. Line revision comes last — and it is not a consolation prize for writers who find structural revision daunting, it is a pass that can only be performed well on prose that is structurally settled. The most common structural problem in a first novel draft is the wrong beginning: the first chapter is often the chapter the writer needed to write to find the story, and the chapter the reader needs to encounter is elsewhere in the manuscript. Before touching a sentence in the first chapter, the structural triage should ask: is this where the novel begins, or is this where the novelist began? The two are frequently not the same location.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenplay revision characteristically begins with table work rather than page work: every scene printed on an index card (one card per scene, with the scene's narrative function written below the scene heading), the cards laid on a floor or table, the full structure made visible as a physical array rather than a linear document. The index card pass allows rearrangement without commitment — a scene moved is a card moved, not a page rewritten — and it reveals structural patterns that are invisible inside the script: the act where all the cards are the same emotional temperature, the middle that has five scenes doing what two could do, the third-act problem that turns out to be a first-act setup problem. For playwrights: produce the scene map as a beat sheet organized by dramatic unit rather than individual scene, with running time estimates for each unit.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Memoir revision frequently involves the discovery that the book you thought you were writing is not the book the material needs. The revision plan identified this possibility in its fifth question — what is the thesis actually about? — and the answer may be different from the book the proposal described. This is not a failure of the drafting; it is the discovery that the drafting always produces and that the revision must honor. The memoirist entering Year Three's structural pass should hold the Year Two synthesis statement's answer to 'what did you write?' alongside the revision plan's account of structural problems and ask: are the structural problems I identified symptoms of a deeper problem — that the book's governing question has shifted in the drafting and the structure has not yet followed the shift? If so, the structural revision's first task is not to move scenes within the existing structure but to renegotiate what the structure is organized around.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 6, Topic 1 — Latinate vs. Anglo-Saxon Diction",
      blocks: [
        {
          type: "grammar",
          title: "Phase 6 · The Two Lexical Streams — What Diction Register Does",
          intro: [
            "English has two great lexical streams, and literary diction is largely a matter of managing their ratio and placement. Anglo-Saxon (Germanic) words are typically shorter, more concrete, more bodily, and more immediate: blood, house, run, die, dark, hand, free, love, fire, child, cut, fall, cold, knife, sit, speak, wife, earth, stone. These are the words that came into English before the Norman Conquest — words that carry the weight of the language's oldest use, of the body's most basic experiences, of the plainest and most unavoidable facts.",
            "Latinate words — words derived from Latin, often through French after 1066 — are typically longer, more abstract, more formal, and more distanced: hemorrhage, residence, evacuate, expire, tenebrous, extremity, liberate, affection, conflagration, infant, lacerate, descend, frigid, instrument, reside, articulate, matrimony, terrestrial, lapidary. These words carry a different weight: institutional, medical, legal, philosophical. They operate at one remove from the body; they manage experience rather than inhabiting it.",
          ],
          rule: "Neither stream is superior — the richness of English prose comes from the writer's ability to use both streams with intention, placing Anglo-Saxon words where the material needs immediacy and embodiment, Latinate words where it needs formality, abstraction, or a specific kind of distance. The diagnostic question is always: is this word at the right register for what this sentence is doing? Hemingway runs almost entirely Anglo-Saxon, and the effect is a prose that keeps the reader in the body, in the immediate, with no conceptual cushion between the event and its rendering. Henry James mixes Latinate formality with Anglo-Saxon concrete nouns and the effect is a prose that holds thought and sensation simultaneously, with the Latinate words carrying the thought and the Anglo-Saxon words anchoring it in the world. Morrison moves between both streams with extraordinary deliberateness — shifting register to create tonal shifts, to mark the difference between the experiencing past and the narrating present, to mark the threshold between the sayable and the unsayable.",
          examples: [
            {
              label: "Anglo-Saxon vs. Latinate — the register effect in a single sentence",
              text: "'She left because he died.' — entirely Anglo-Saxon: short words, concrete verbs, maximum immediacy, no emotional cushion. 'She departed following his expiration.' — entirely Latinate: every key word is at two removes from the body, the clinical register has the effect of a report rather than an event, the distance is created by the diction rather than by the narrator's attitude. 'She departed because he died.' — mixed register: the departure is softened to the Latinate ('departed' vs. 'left'), the death is kept at the Anglo-Saxon ground level. The choice between these versions is not a choice about correctness; it is a choice about what the sentence is doing emotionally and what the narrator's relationship to the event is.",
            },
            {
              label: "Diction register as characterization — two characters in two registers",
              text: "A character who speaks and thinks in Anglo-Saxon diction is a character whose relationship to experience is direct, embodied, unmediated by abstraction: 'He hit her. She fell. The room went dark.' A character who speaks and thinks in Latinate diction is a character whose relationship to experience is mediated, institutionalized, kept at arm's length by conceptual language: 'He perpetrated an act of violence against her person. She lost consciousness. Visibility was reduced.' Most characters exist at neither extreme — but the ratio matters, and the ratio should be chosen rather than arrived at by default. In the thesis draft, identify which characters are currently speaking and thinking at a higher Latinate register than their position in the story warrants. Latinate diction in a character who should be in direct contact with their experience is a register error that the Phase 6 diction audit will identify.",
            },
          ],
          outro: [
            "This week's grammar exercise: take one page of your thesis draft and identify every Latinate word. Rewrite the page replacing each Latinate word with an Anglo-Saxon equivalent. Read both versions aloud. Then rewrite a second time, selecting word by word the choice that best serves the specific sentence in context — not always Anglo-Saxon, not always Latinate, but the word at the register this sentence requires. The three-version exercise is the most direct route to diction consciousness: it makes visible the choices that most drafts make invisibly, and it develops the ear for register that the Phase 6 audit will apply to the full manuscript in subsequent weeks.",
          ],
          exercise:
            "Take one page of your thesis draft. Identify every Latinate word. Rewrite the page in pure Anglo-Saxon equivalents. Read both versions aloud. Write a third version, selecting word by word the right register for each sentence. Note in the session log: which register dominates the current draft, and is that the right default for the material?",
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
              title: "Refuse to Be Done",
              author: "Matt Bell",
              href: "",
              note: "The full second and third draft chapters. Bell's account of the revision process is the most practically useful single craft resource for what Year Three requires: he writes from inside the experience of revising a long manuscript, with specific attention to the psychological as well as technical challenges. Read the second and third draft chapters specifically for his account of the structural pass — what it looks for, how it is conducted, and how to distinguish structural problems from the symptoms those problems produce in the prose. Bell's revision framework should be held alongside the Year Two revision plan throughout the fall semester's structural weeks.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Your Year Two Revision Plan",
              author: "You",
              href: "",
              note: "Required. This is your map. Read it in full before beginning the revision triage exercise. Then keep it open alongside the draft throughout the week's work. The plan's priority ordering is the starting point for this week's triage; the triage will confirm, refine, or update the plan's account of the manuscript's most urgent structural problems.",
              badge: "Required",
            },
            {
              number: "03",
              title: "Your Year Two thesis proposal",
              author: "You",
              href: "",
              note: "Reread it. Does the current draft match the promise? Not as a judgment — the draft should not necessarily match the proposal in all particulars, and significant divergence from the proposal is often evidence that the drafting discovered something the proposal could not have anticipated. The question is: does the current draft fulfill a recognizable version of the proposal's promise, or has the manuscript drifted into territory the proposal's governing question cannot account for? The answer shapes the structural revision's first priority.",
              badge: "Recommended",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Revision Triage",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Working from your Year Two revision plan, identify the five most urgent structural problems in the current thesis draft. For each problem, write a 100-word description of the problem — what it is, where it is located in the manuscript, and what effect it is currently having on the work — and a 50-word plan for addressing it: what structural action (move, cut, write, reorder) would solve the problem, and what new material, if any, that action requires.",
            "The five problems should be in priority order from the revision plan, updated by any new understanding of the manuscript the Year Two read-through and synthesis produced. If the priority ordering has shifted since the plan was written — if the read-through revealed a problem more urgent than those the plan identified — update the plan now and note the revision in the session log.",
            "After completing the triage document, address the single most urgent structural problem: write or rewrite the scene, section, or chapter it requires. This may mean writing new material (the scene identified as missing in the read-through report), reworking existing material (the chapter whose structure is wrong), or cutting material (the section the triage identifies as redundant or misplaced). Target: 1,000–2,000 words of new or substantially revised thesis material.",
          ],
          target: "Triage document (5 × 150 words) + 1,000–2,000 words of new or revised thesis material",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Developmental Editor — Three Structural Approaches",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor (from Year Two Week 28, calibrated in Week 36)",
          intro:
            "Year Three's AI workshop uses the Perfect Tutor you designed and calibrated at the end of Year Two. This week: submit the most structurally problematic section of the thesis for developmental assessment — not line edits, but structural approaches. The AI as a developmental editor who does not know what you have already tried.",
          prompt:
            "Read this section as a developmental editor. This section has a structural problem I haven't been able to solve: [describe the specific structural problem from the triage document]. What are three possible approaches to resolving it — not line edits, but structural approaches: different organization, different entry point, different focal character or perspective, different scope, different relationship to adjacent sections? For each approach, explain what it would gain and what it would sacrifice. Do not recommend a single solution — give me three genuine alternatives with honest assessments of the tradeoffs.",
          questions: [
            "The AI's three structural approaches: evaluate each against the revision plan's account of the manuscript's governing question and structural priorities. Which approach best serves the thesis's overall architecture — not which approach produces the best version of this section in isolation, but which approach most strengthens the manuscript as a whole? The section that works brilliantly in isolation but creates new structural problems elsewhere is not the right revision. The approach that solves the section's problem while also improving its relationship to the sections around it is the one the triage should pursue.",
            "What did the AI identify as the problem's root cause, and does that identification match the triage document's description? If the AI is reading the problem differently from the revision plan — if it identifies a different problem as the source of the section's difficulty — this divergence is worth sitting with. The AI is reading without the full context of the manuscript's history; it may be seeing a symptom rather than the cause. Or it may be seeing the cause more clearly than the writer who has been living inside the problem. Both are possible; the divergence is information.",
            "The AI's three approaches are starting points, not solutions — the writer implements, the AI proposes. For the approach you select: before implementing it, write a 100-word description in the session log of what you expect it to produce. After implementing it, write a 100-word description of what it actually produced. The gap between expectation and result is the most precise available record of what the revision learned.",
            "Update the revision plan based on the triage document and this week's AI workshop. If addressing the most urgent structural problem has changed the priority ordering of the remaining four problems — if solving problem one has made problem three less urgent, or has revealed a new problem the plan did not identify — note the update. The revision plan should be a living document throughout Year Three's structural weeks, not a fixed prescription.",
          ],
          note: "The structural revision weeks will use the Perfect Tutor in developmental editor mode: focused on architecture, organization, and the manuscript's relationship to its governing question, not on sentence-level craft. The line-level revision mode — closer attention to voice, syntax, and diction — comes in Weeks 6–7 when the structural passes are complete. Keep the two modes distinct; confusing them produces revision that accomplishes nothing at either scale.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Triage Principle",
      blocks: [
        {
          type: "tip",
          icon: "🔍",
          name: "Root Problems vs. Consequences",
          paragraphs: [
            "In revision, not all problems are equal. Some problems, if solved, would solve five others simultaneously. Some problems are symptoms of a deeper problem. Some problems are only problems if you keep the section they're in — and that section may need to go. Before revising any individual problem, ask: is this the root problem or a consequence? Triage before surgery.",
            "The root problem and the consequence often look identical at the prose level. A section that is 'paced too slowly' may be paced slowly because it contains scenes that do not belong in it, in which case the root problem is structural and the pacing is a symptom. A character who 'feels inconsistent' may feel inconsistent because a key establishing scene was cut in early drafting, in which case the root problem is an absence and the inconsistency is a symptom. The triage document's value is in forcing the writer to describe each problem at sufficient precision to distinguish root from consequence — 'the chapter is too long' is not a sufficient description; 'the chapter contains two scenes that are doing the work of the following chapter's opening, creating a structural overlap that makes both chapters feel redundant' is a sufficient description, and it points directly to the structural action required.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What the Thesis Needs",
      blocks: [
        {
          type: "journal",
          title: "The Revision You've Been Avoiding",
          question:
            "What does the thesis need that you've been afraid to give it? What revision are you avoiding — not because you don't know it needs to be made, but because of what making it would cost? Name it precisely: the scene that needs to be cut even though you spent three weeks on it; the character whose thread needs to be simplified even though you love them; the structural decision that would require rewriting the first chapter you were ever proud of; the governing question the current draft is circling around but not yet fully committing to. The revision you have been avoiding is almost always the revision the manuscript most needs — the one whose avoidance is costing the manuscript more, in structural incoherence or thematic evasion, than the cost of making it would be to the writer's sense of investment. Write for twenty minutes about the revision you have been avoiding. Then write one sentence about what you will do about it this week.",
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
            "By the end of this week you should have: completed the revision triage document (five structural problems described and planned in priority order, revision plan updated); addressed the single most urgent structural problem with 1,000–2,000 words of new or substantially revised thesis material; completed the AI developmental editor session with all four reflection questions; completed the Phase 6 diction exercise (three-version page); updated the session log with the week's revision work and the triage document's priority ordering.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 2",
          paragraphs: [
            "Week 2 begins the structural revision's most important analytical tool: the scene map. Before any more revision can proceed efficiently, the full manuscript's architecture needs to be made visible simultaneously — every section visible at once, with its narrative function, emotional temperature, POV, and quality noted. The scene map is the blueprint the structural revision works from. Grammar: Phase 6 Topic 2 — the power of monosyllabic words.",
          ],
        },
      ],
    },
  ],
};
