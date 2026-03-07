import type { WeekData } from "@/lib/mfa/types";

export const week34Data: WeekData = {
  weekNumber: 34,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "The Thesis Read-Through — Seeing the Whole",
  emphasizedWord: "Seeing the Whole",
  deck: "You have been working on the thesis in sections. This week you will read it as a complete unit — as a reader, not a writer — for the first time. The read-through is one of the most important events in any long manuscript's development. It reveals what you've been too close to see: what works, what is missing, and what the work actually is as distinct from what you thought it was.",
  meta: [
    { label: "Commitment", value: "12–16 hrs" },
    { label: "Program Week", value: "70 of 108" },
    { label: "Craft Focus", value: "Full Manuscript Read-Through" },
    { label: "Grammar", value: "Phase 7 — Interior Monologue & Stream of Consciousness" },
    { label: "Key Deliverable", value: "700-word Read-Through Report" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Reading Your Own Draft as a Reader — What the Full View Reveals That the Section View Cannot",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The writer working in sections loses the manuscript. Not literally — the files are all there — but perceptually. The writer who has been drafting a long manuscript section by section, week by week across two semesters, has been living inside the work at the scale of the paragraph and the scene. The paragraph-level view is essential while drafting — it is where the prose is made — but it is structurally blind. The writer who can tell you every detail of chapter seven cannot tell you, from inside chapter seven, whether chapter seven should exist, whether it is redundant, whether it is placing the manuscript's most important revelation in the wrong structural position, whether the voice in chapter seven has drifted from the voice in chapter two. These are questions that can only be answered from outside the sections — from the view that the full read-through provides.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The first full read-through of a long manuscript is always a surprise. This is not a consolation — it is a structural fact about how manuscripts develop. The writer who expects to read their draft and find it exactly as they imagined it will be disappointed in both directions: the draft will be worse than they thought in the places where proximity has normalized the prose into invisibility, and better than they thought in the places where something has accumulated — an image, a thematic resonance, a character relationship — that was not consciously planned. Both surprises are valuable. The bad surprises are the revision plan's raw material; the good surprises are evidence of what the work knows that the writer does not yet know, and they are among the most important things the read-through can reveal.",
          ],
        },
        {
          type: "pullquote",
          quote: "The first impression of the manuscript in a full read-through is your most valuable editorial datum. Before revisions begin to normalize the experience of reading the work, write down everything you noticed — the places where the reading slowed, the moments of genuine surprise, the sections where you lost interest, the ending's effect on the beginning.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "How to Conduct the Read-Through — Five Principles",
          paragraphs: [
            "Read without stopping to fix. The single most important principle. The impulse to stop at a weak sentence, a clumsy transition, a section that is not working — to fix it before moving on — is almost irresistible, and it must be resisted. The read-through is a diagnostic pass, not a revision pass. Every minute spent fixing a sentence during the read-through is a minute spent at the wrong scale: it normalizes the sentence, making it invisible at precisely the moment when the full-draft view is most available. Read past the problems. Mark them if you must — a quick note in the margin or a symbol — but do not stop. The fixing happens in Year Three's revision passes. The read-through is for seeing.",
            "Read in as few sessions as possible. Ideally in one sitting; realistically in two or three. The read-through's power comes from its continuity — from the experience of the manuscript as a flowing whole rather than as a sequence of discrete sections. A read-through conducted over a week, one chapter per day, is not a full read-through; it is a series of section readings with time between them. The temporal compression matters: the reader who moves from chapter three to chapter four within the same hour experiences the transition differently from the reader who encounters chapter four the following morning. The full view depends on the reading's continuity.",
            "Come to it fresh. The read-through should not follow immediately from drafting. If Week 33's production session ended on Friday, the read-through should begin on Monday at the earliest — after a weekend of not-reading, not-thinking about the manuscript, allowing the normalization that comes from daily contact to subside. The writer who reads their draft the day after writing is still inside the draft; they are reading what they meant to write rather than what they wrote. The cooling-off period, even a short one, restores some of the foreignness the draft needs to have in order to be seen.",
            "Bring only a notebook, not a pen for the manuscript. The notebook is for observations — the questions, surprises, problems, and pleasures that arise during the reading. The pen is not for the manuscript because marking the manuscript would constitute revision, and revision stops the reading. The notebook creates a record of the read-through's discoveries without interrupting the reading. Write in the notebook as specifically as possible: not 'Chapter 4 is weak' but 'Chapter 4: the scene in the kitchen is moving too quickly, the reader needs more time with her decision before the confrontation arrives.' The specific observation is the revision task; the vague observation is only discouragement.",
            "Trust the reading experience over the writing knowledge. The writer knows what they intended in every section; the reader only knows what is on the page. During the read-through, when the reader's experience diverges from the writer's intention — when the scene that was intended to create suspense produces boredom, when the character who was intended to be sympathetic produces irritation, when the ending that was intended to resonate produces flatness — trust the reader's experience. The gap between intention and effect is the revision plan's most essential material. The writer who spends the read-through defending their intentions against their reading experience has produced a read-through report that is inaccurate and useless.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What the Read-Through Reveals Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer's read-through is primarily a structural diagnostic: does the manuscript move? Does each chapter earn its position — does chapter six need to be chapter six, or would it work equally well as chapter three, which would indicate that it is not doing structural work specific to its position? Do all the plotlines that the manuscript has established resolve, or are there threads that disappear without acknowledgment? Does the protagonist feel like the same character in the final chapter as in the first — and if not, has the drift been earned as transformation, or is it an accidental inconsistency? The read-through report for fiction should address: the quality arc (which chapters are strongest, which weakest, is there a pattern to the weakness), the character consistency, the structural integrity of all plotlines, and the ending's relationship to the opening.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter's read-through should be conducted with a stopwatch or timer alongside it: are scenes running at the pace the story requires, or is the pilot or feature bloated at its midpoint? The standard feature script should read in roughly the same time it would take to watch the film; a scene that reads slowly on the page will feel even slower on screen, because the reader's imagination supplies more than the screen can always deliver. For playwrights, the read-through is most usefully conducted aloud — preferably with another person reading each character's lines — because plays exist in time in a way that is audible rather than visual. The read-through aloud of a full play will reveal rhythm problems, dialogue that does not flow naturally, scenes that run too long, and the exact moment the play's energy sags. These moments are the revision plan's priorities.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoirist's read-through is primarily a tonal and structural diagnostic: is the narrator's voice consistent throughout, or does it shift between the experiencing self and the narrating self in ways that are not controlled? Does the temporal architecture — the movement between the experiencing self's present and the narrating self's retrospect — follow a pattern that serves the work, or has it accumulated by habit? Is the memoir's governing question actively engaged throughout, or does it go dormant in certain sections? The CNF read-through report should address: the narrator's voice consistency, the temporal architecture's logic, the governing question's presence and absence, and the question that the memoirist was avoiding addressing but that the full read has now made visible: what is this memoir actually about, in the reader's experience, as distinct from what the writer intended it to be about?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7 — Interior Monologue and Stream of Consciousness",
      blocks: [
        {
          type: "grammar",
          title: "Phase 7 · Two Modes of Direct Access to the Mind",
          intro: [
            "Interior monologue and stream of consciousness are both techniques of direct interiority — they present the mind's contents without the narrator's mediating voice — but they operate at different levels of psychological organization and grammatical coherence.",
            "Interior monologue presents the mind's contents directly, in grammatically organized prose, as though the reader has been given access to the character's articulate thought: 'He was wrong. He had always been wrong. She knew it now with the certainty of cold water.' The sentences are complete, the logic is sequential, the voice is recognizably the character's rather than the narrator's. Interior monologue is organized thought rendered directly — the character is thinking in complete sentences, or the representation of thought is grammatically complete even if the thought itself is fragmentary. The marker of interior monologue in the absence of explicit attribution ('she thought') is usually the shift to present tense within a past-tense narrative, the increased use of first-person pronouns (even in third-person narration), or the introduction of rhetorical questions that belong to the character rather than to the narrator.",
          ],
          rule: "Stream of consciousness goes further: it presents the mind's contents without grammatical organization, allowing syntax to fragment or collapse in imitation of pre-linguistic or associative thought. 'The window. He never opened it. Bread in the kitchen. She should have. Yes. No.' The fragments, the incomplete thoughts, the non-sequential associations — these are the markers of stream of consciousness, and they signal a deeper interiority than interior monologue: not the organized thought the character would articulate but the unorganized flow of perception, association, and impulse that underlies articulation. Woolf's Mrs. Dalloway and Joyce's Ulysses are the canonical examples; Faulkner's The Sound and the Fury takes stream of consciousness to its most extreme development in Benjy's section, where the mind being rendered is not capable of sequential narrative organization at all. The practical requirement: the fragmentary syntax of stream of consciousness must be distinguishable from accidental incompleteness. The reader must be able to feel that the fragmentation is the point — that the disorganization is a representation of the mind's actual movement — rather than an editing failure.",
          examples: [
            {
              label: "Interior monologue — organized thought rendered directly",
              text: "'She had been wrong about him. That was the first thing she understood when she saw him in the doorway — not who he was or what he wanted, but that she had misread him entirely, and the misreading had cost them both something they were only now beginning to account for.' [The sentences are complete; the logic is sequential; the thought is organized. The voice is hers, not the narrator's — the narrator would not have said 'she had been wrong about him' as an interior experience, only as a reported observation. Interior monologue gives the reader the character's self-knowledge from inside rather than the narrator's observation from outside.]",
            },
            {
              label: "Stream of consciousness — disorganized thought rendered directly",
              text: "'Doorway. Him. Wrong wrong had been. Cost — what had it cost? The misreading. His face now. Twenty years. Was it twenty. She couldn't.' [The fragments, the repeated word, the incomplete final sentence — these are the markers of stream of consciousness. The mind is moving associatively rather than sequentially; the thought is not finished before the next thought arrives. Used at a moment of maximum psychological intensity — the moment when the organized surface of interior monologue breaks down under the pressure of what is being understood — stream of consciousness can produce the sensation of being inside an experience that is happening faster than it can be processed.]",
            },
            {
              label: "The transition between modes — when to use each",
              text: "Interior monologue is the default mode of direct interiority in contemporary literary fiction: it is more readable than stream of consciousness and more flexible than reported thought. Stream of consciousness is reserved for moments of maximum psychological intensity — moments when the mind's organization collapses under pressure — because the fragmented syntax is difficult to sustain across long passages without exhausting the reader. The transition between modes can itself be expressive: a passage that moves from organized interior monologue into stream-of-consciousness fragmentation as a scene's emotional intensity increases, and then returns to interior monologue as the character regains their composure, has used the syntactic mode as a direct expression of psychological state.",
            },
          ],
          outro: [
            "This week's grammar exercise: write 200 words of interior monologue for your protagonist at a moment of significant self-understanding, and 200 words of stream of consciousness for the same character at a moment of maximum psychological intensity. The two passages need not be from the same scene. After writing, read each aloud: does the interior monologue sound like organized thought, distinct from the narrator's voice? Does the stream of consciousness feel like the mind moving faster than language can organize, or does it feel like sentences from which words have been removed?",
          ],
          exercise:
            "Write 200 words of interior monologue (organized direct thought, grammatically complete) and 200 words of stream of consciousness (fragmentary, associative, pre-grammatical) for your thesis protagonist. The interior monologue should occur at a moment of self-understanding; the stream of consciousness at a moment of maximum psychological intensity. After writing both, read them alongside a scene from your thesis that currently renders the same character's interiority through reported thought ('She thought that...') or free indirect discourse. What does direct interiority — monologue or stream of consciousness — add that indirect access does not?",
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
              title: "Your thesis draft — read in full",
              author: "You",
              href: "",
              note: "No new reading this week. Spend the time you would spend on assigned texts on your own manuscript instead. The thesis draft is this week's text, and reading it carefully, continuously, and without stopping to revise is the week's primary task. If the full draft is very long and a single-sitting read is not possible, aim for two sessions with as little time between them as possible. Bring the notebook described in the lecture. Trust the reading experience. Write the report.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Full Read-Through Report",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "After completing the full read-through, write a 700-word report addressing all five of the following questions. The report is not a summary of the manuscript — it is a record of the reading experience and an assessment of the manuscript's current state. Write it within twenty-four hours of completing the read-through, while the impressions are still fresh and before the familiarity that comes from rereading has normalized what the read-through revealed.",
            "The five questions: (1) What surprised you — what is the thesis doing that you did not consciously plan? Include both good surprises (something is working better than you thought, something has accumulated that you did not intend) and bad surprises (something is weaker than you remembered, something has drifted, something is absent that should be present). (2) What is the strongest single moment in the current draft — the moment where the writing is most fully what it is trying to be, where the voice and the subject and the form are most perfectly aligned? (3) What is the most significant structural problem — the single revision task that would most improve the manuscript's overall coherence and impact? (4) What is missing — what section, scene, argument, or development needs to be written that is currently absent? (5) What is the thesis actually about, having read it in full as a reader rather than having worked on it as a writer? Does it match what you said it was about in the Week 12 thesis proposal?",
            "The fifth question is the most important and the hardest. The gap between what the writer intended the thesis to be about and what it is actually about — what it has become in the drafting — is one of the most reliable signs of a manuscript that has grown beyond its original conception. A manuscript that is still exactly about what the writer said it was about in the proposal is either a manuscript that has followed its plan very faithfully, or a manuscript that has not yet discovered what it is. The read-through report's answer to question five is the foundation of the Year Three revision plan.",
          ],
          target: "700-word Read-Through Report (Key Deliverable)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The First Reader Who Is Also a Rigorous Editor",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit the fullest version of your thesis draft currently available — or the most substantial portion — for developmental assessment. The AI reads as a first reader with editorial training: attending to what is working, what is not, and what questions the manuscript leaves open.",
          prompt:
            "Read this manuscript as a first reader who is also a rigorous editor. I am not asking for line-level feedback on the prose. I am asking for a developmental assessment of the manuscript as it currently exists. Identify: (1) the work's apparent governing theme, stated in one sentence — what this manuscript is investigating or arguing, based on what is on the page rather than on any description I might have given you; (2) the three strongest moments in the current draft and what specifically makes each work — not general praise but specific identification of the craft element that is producing the effect; (3) the three most significant problems — structural, character-based, or tonal — in priority order; (4) one section that could be cut without significant loss to the manuscript's overall coherence; (5) the question you would most want to ask this writer at this stage of the project — the single question whose answer would most clarify what the manuscript needs next.",
          questions: [
            "The AI's statement of the governing theme in one sentence: compare it to your own answer to the read-through report's fifth question ('what is the thesis actually about?') and to the thesis proposal's description of the project. Do all three versions align — the AI's reading, your current understanding, and your original intention? If they diverge, which divergence is most significant: between the AI's reading and yours (which may indicate that the manuscript is not yet communicating what you intend), between your current understanding and the original proposal (which may indicate that the manuscript has grown beyond its original conception), or between all three (which may indicate that the manuscript's governing concern is not yet fully resolved on the page)? The divergence is information; name it specifically in the session log.",
            "The AI's identification of the three strongest moments: are these the moments you identified as strongest in the read-through? If the AI's strongest moments differ from yours, the difference is editorial data: either the AI is identifying craft achievements your proximity to the work has normalized (in which case the AI's identification is calibrating your sense of the manuscript's quality) or the AI is responding to surface-level craft features rather than to the moments whose depth you know from inside the work (in which case your identification is more accurate). Both are possible; the discrepancy is worth noting.",
            "The AI's identification of the section that could be cut without significant loss: this is the most immediately actionable of the AI's findings, and it is also the one most likely to be wrong. The AI reading a portion of a manuscript may identify a section as cuttable because it does not understand the section's structural function in the context of the full work. Test the identification: is the AI right? If the section were removed, would the manuscript lose something essential — not just something the writer is attached to, but something structurally or thematically necessary? If the AI is right, note the cut in the revision plan. If the AI is wrong, note why — the justification for keeping the section is itself a clarification of the section's structural function.",
            "The AI's question: this is the exercise's most valuable output. The question a rigorous reader would most want to ask at this stage of the project is the question that the read-through and the read-through report have not yet fully answered. Write the answer — in 200 words in the session log — not as a promise about what the revision will produce, but as the most accurate description of where the manuscript's central problem currently lives. The answer to the AI's question is the bridge between the read-through report and the Year Three revision plan.",
          ],
          note: "The AI developmental assessment of a long manuscript is limited by context: the AI can only read what it has been given, and it reads without the full context of the program's two-year development of the project, without knowledge of the thesis proposal's original intention, and without the cumulative history of the session log. Its assessment is a fresh reader's response — which is valuable precisely because it is not the writer's response — but it is a fresh reader without full context. Use its findings as a data point alongside the read-through report, not as an authoritative assessment.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Trust the Read-Through",
      blocks: [
        {
          type: "tip",
          icon: "📋",
          name: "The First Impression Is the Most Accurate",
          paragraphs: [
            "The first impression of the manuscript in a full read-through is the most valuable editorial datum the writer will have until a trusted human reader reads the final draft. It is more valuable than the impressions produced by rereading — which normalize the familiar and stop seeing the draft as it is — and more valuable than the impressions produced by working in sections, which lose the structural view. This first impression is available exactly once, in exactly this form, before the revision process begins to transform the writer's relationship to the draft.",
            "Write it down immediately after the read-through, before sleep, before returning to the draft for any purpose. Not the polished 700-word report — write the raw impressions first, in whatever form they arrive: a list of moments, a set of questions, a description of how the ending landed, a name for the thing the thesis has become. These raw impressions are the read-through report's true content; the 700-word report is their organization. The organization comes after; the impression comes first, and it cannot be recovered if it is not recorded before the writer returns to the draft and begins the normalization that makes the familiar invisible again.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What Did You Write",
      blocks: [
        {
          type: "journal",
          title: "Not What You Were Trying to Write",
          question:
            "Having read your thesis as a full work — as a reader encounters it rather than as a writer produces it — what is it? Not what you were trying to write. Not what the thesis proposal said it would be. Not what you hoped it would become. What did you write? Describe the work as you would describe it to a reader who knows nothing about it and who needs to understand both what it is and why it exists. What kind of work is it — what form, what mode, what relationship to its material? Who is its narrator, and what is that narrator's relationship to the events or ideas the work is investigating? What does it know that it did not know when you began it? And: is the work you wrote the work you needed to write, or is it a draft of a work that is still ahead of you — a necessary stage on the way to something that the draft is pointing toward but has not yet become? Write for thirty minutes without stopping. The answer is the Year Three revision plan's foundation.",
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
            "By the end of this week you should have: conducted the full read-through of the thesis draft in as few sessions as possible, with a notebook but no pen to the manuscript; written the 700-word Read-Through Report addressing all five questions within twenty-four hours of completing the reading; completed the AI developmental assessment with all four reflection questions; written the 200-word interior monologue and the 200-word stream of consciousness passages for the protagonist; written the journal entry answering 'what did you write?'",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 35",
          paragraphs: [
            "Week 35 is the Year Two Thesis Revision Plan — the planning week for the revision work that will occupy all of Year Three. Based on the read-through report, this week produces a detailed, prioritized, sequenced revision plan: structural revisions first, then character, then thematic, then line-level, then research gaps, then a realistic Year Three timeline. Grammar topic: the Rhetoric of Fiction — Wayne Booth's implied author and what it reveals about the work's moral and aesthetic sensibility. The revision plan is a Key Deliverable.",
          ],
        },
      ],
    },
  ],
};
