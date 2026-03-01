import type { WeekData } from "@/lib/mfa/types";

export const week12Data: WeekData = {
  weekNumber: 12,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "The Thesis Proposal — Articulating What You're Going to Write",
  emphasizedWord: "The Thesis Proposal",
  deck: "The thesis proposal is not a formal academic document. It is an act of creative self-knowledge: a writer articulating, as precisely as possible, what they intend to write, why this material demands book-length treatment, what form the work will take, and what the governing question is. The proposal is a living document — it will almost certainly change as the work develops — but the act of writing it forces a clarity that is often the catalyst for the work's acceleration.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "48 of 108" },
    { label: "Craft Focus", value: "Thesis Proposal" },
    { label: "Grammar", value: "Phase 4 · Epistrophe & Symploce" },
    { label: "Key Deliverable", value: "Thesis Proposal Draft" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Proposal as Thinking — Not Reporting",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Most writers resist writing the thesis proposal because it feels premature — like being asked to describe a building before the foundation is poured. This resistance is understandable and almost entirely wrong. The proposal is not a report on a completed project. It is a thinking instrument — a document that forces the writer to articulate, in precise language, what they are trying to do and why. The act of articulation almost always produces new understanding: the writer who could not state their governing question before writing the proposal can state it after, because the pressure of having to write it down forces the vagueness into clarity. The proposal does not describe the work; it helps make the work possible.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The thesis proposal has five intellectual tasks, and it fails when any of them is left undone. The first is the governing question: what is this work actually investigating? Not its subject — its question. Not 'grief' but 'what does grief ask of the people who survive it, and what is the cost of refusing to pay?' Not 'immigration' but 'what does it mean to belong to a place that does not belong to you?' The governing question is the work's compass: it allows the writer to assess, at any point in the drafting, whether what they are writing is in service of the investigation or a detour from it.",
          ],
        },
        {
          type: "pullquote",
          quote: "The thesis proposal serves a practical function: it is a commitment device that makes abandonment harder. Once you have articulated what this work is and why it matters, walking away from it requires an explicit act of revision — you must decide to stop, not simply drift away.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Five Intellectual Tasks of the Thesis Proposal",
          paragraphs: [
            "The governing question — stated as genuine inquiry: the single most important sentence in the proposal, and the one that most proposals fail to write with sufficient precision. The governing question should be open (the writer does not yet know the answer), specific (it could only be asked by this project, not any project in the genre), and genuinely generative (it produces more questions rather than closing down inquiry). The test: could this governing question be asked by a different book? If yes, it is not yet this book's governing question — it is a category question, and the proposal needs to find the question that belongs specifically to this material.",
            "The form argument — why this form is the right vessel for this material: the proposal must argue, not merely state, that the chosen form — its structure, its point of view, its relationship to time, its genre — is not an arbitrary container but the form that this material requires. Why does this story need to be told nonlinearly rather than chronologically? Why does this memoir need to be braided rather than linear? Why is this a novel rather than a story collection? The form argument forces the writer to understand the relationship between content and form as a craft decision rather than a default.",
            "The protagonist or narrator — want, need, and the gap: the proposal must establish who carries the story, what they consciously pursue, and what they actually require — and why the gap between those two things is the engine of the narrative. For memoir writers, the narrator is both the self who experienced the events and the self who is writing them, and the proposal should address that doubleness: what is the relationship between the experiencing self and the narrating self, and how does the book's structure navigate between them?",
            "The sample excerpt — showing not telling: the 500 to 700 word excerpt is the proposal's most important element, because it demonstrates what the proposal only describes. The excerpt should be the opening of the thesis — the first page or first scene or first essay — in as close to its final form as the writer can currently produce. It is the one place in the proposal where everything claimed about voice, tone, and governing question must be evident rather than asserted. The proposal can say 'this work is written in a spare, elliptical prose that uses implication rather than statement' — the excerpt must show a spare, elliptical prose that uses implication rather than statement.",
            "The scope and timeline — honest assessment: the proposal's final element is the most practical and the most frequently falsified. How long will this work be? When will it be done? The writer who cannot give an honest answer to these questions has not yet thought concretely enough about what the project requires. A realistic timeline — one that accounts for the pace of the sessions so far, the amount of material that remains to be generated, and the revision work that will follow the generative phase — is more valuable than an aspirational one.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The proposal is, finally, a document in dialogue with itself across time. The proposal written today will be read at the end of Year Two and again in Year Three, and those readings will reveal what has changed — which of the initial articulations held up, which the work outgrew, which the writing discovered to be wrong. Keep the proposal current. Revise it as the work evolves. When the work takes an unexpected direction, return to the proposal and ask whether the governing question needs to be updated — or whether the unexpected direction is actually following the governing question more faithfully than the original plan.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Proposal Across Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Fiction proposals address four specific questions that the genre requires: the character's want and need (the engine that generates the narrative's energy); the structural form and why it is the right vessel for this story (not 'I will write in third person limited because that is my preferred point of view' but 'third person limited serves this story because the gap between what the protagonist knows and what the reader can infer is the story's primary source of dramatic irony'); the thematic question that the collision of character desire and situation generates; and the scope — how long, how many scenes, what is the arc from opening to ending. The sample excerpt for a fiction proposal should be the opening scene, rendered with full scene-level precision.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting proposals address premise, protagonist arc, and the pilot's or film's dramatic problem. The logline is the proposal's most compressed element: one sentence that establishes the protagonist, their want, their obstacle, and the dramatic situation — in approximately 25 words. 'A mild-mannered chemistry teacher, diagnosed with terminal cancer, becomes a methamphetamine manufacturer to secure his family's future, only to discover he prefers the power to the money.' The series bible component addresses the show's recurring dramatic problem and its long-term potential: what prevents the situation from resolving, and what would a second season look like? For playwrights, the proposal addresses the play's central dramatic situation, its theatrical world and rules, and the argument it makes through its form.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "CNF proposals carry ethical obligations that fiction proposals do not: the memoirist must address the relationship between memory and truth (how will contested memories be handled?), the ethical considerations of writing about living subjects (who in this book might be harmed by its publication, and how will the writer navigate that?), and the narrator's relationship to the material (what is the distance between the experiencing self and the narrating self, and how does that distance organize the work?). Karr's *Art of Memoir* addresses these questions directly in the chapters assigned this week. The CNF sample excerpt should demonstrate the narrator's voice at full strength and establish the governing question in its first paragraphs.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 · Topic 3 — Epistrophe & Symploce: Emphasis Through Arrival and Enclosure",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 47 of 60 — Epistrophe and Symploce: The Rhetoric of the Repeated End",
          intro: [
            "Epistrophe is anaphora's mirror: where anaphora repeats at the beginning of successive clauses to create insistence and forward momentum, epistrophe repeats at the end to create emphasis through arrival — each clause lands on the same word or phrase, and the accumulation charges that repeated word with increasing weight. Lincoln's Gettysburg Address closes with its most famous epistrophe: 'government of the people, by the people, for the people.' The three repetitions of 'the people' do not simply say the same thing three times — they arrive at the same place from three different directions (possession, agent, beneficiary), and the triple arrival makes the phrase feel definitive, final, inevitable.",
            "Symploce is the most formally sophisticated of the three repetition schemes: it combines anaphora and epistrophe, repeating at both ends of successive clauses, enclosing the varying middle content in a frame of identical opening and closing. It is the rarest and most deliberately architectural of the figures — when it appears, it signals that the writer has designed rather than discovered the passage, and the design must be worth the formality it announces.",
          ],
          rule: "Epistrophe creates emphasis through destination: the reader arrives repeatedly at the same word or phrase, and each arrival adds weight. The repeated ending functions as a conclusion that the successive clauses are all reaching toward — the effect is of convergence, of multiple paths arriving at the same point, which gives that point the authority of the inevitable. Symploce creates emphasis through enclosure: the repeated frame suggests that the varying middle content is being held, contained, and defined by the frame. The effect is more formal and more architectural than either anaphora or epistrophe alone — it announces that what is inside the frame has been carefully considered.",
          examples: [
            {
              label: "Epistrophe — three arrivals, each charging the landing word more heavily",
              text: "'She had given him her evenings. She had given him her patience. She had given him, in the end, the years she would never get back.' [Three clauses all landing on a variation of 'given him'; the third breaks the exact parallel ('given him' becomes 'given him... the years') to carry the weight of the final arrival — the most costly item saved for last, the form performing the escalation.]",
            },
            {
              label: "Epistrophe — Lincoln's 'the people' analyzed",
              text: "'Government of the people, by the people, for the people.' [Three prepositional phrases all ending in 'the people,' each arriving from a different direction: possession (of), agency (by), benefit (for). The triple arrival charges 'the people' with the authority of a term that has been approached exhaustively — every possible relationship of government to people has been named, and each time the landing is the same.]",
            },
            {
              label: "Symploce — repetition at both ends enclosing variation",
              text: "'When we are born, we cry. When we love, we cry. When we lose what we loved, we cry — and at each of these moments we are most precisely what we are.' [Each clause begins with 'When we' and ends with 'we cry,' with a varying middle. The enclosure by the frame creates the argument: birth, love, and loss are equivalent stations, formally equal, all leading to the same essential response. The final clause breaks the frame deliberately to deliver the argument the frame has been building toward.]",
            },
            {
              label: "The epistrophe failure — and why it fails",
              text: "Failing: 'She was tired. He was tired. Everyone was tired.' [Three instances of the same word at the end of three clauses — technically epistrophe, but not earning its repetition. The three clauses are not arriving at the landing word from different directions; they are simply repeating the same observation in expanding scope. The repetition is not accumulating; it is stalling.] The figure earns its repetition when the successive clauses carry the reader toward the landing word from genuinely different angles, so that each arrival adds to rather than merely repeats what preceded it.",
            },
          ],
          outro: [
            "Both epistrophe and symploce are figures of formal commitment — they announce that a passage has been deliberately shaped rather than written in the normal forward motion of composition. This is their power and their risk. Used in the right moment — at a passage's climax, at the conclusion of an argument, at the point where the work's emotional or thematic stakes are highest — they produce the effect of inevitability, of having arrived at the only possible destination. Used in the wrong moment — in passages of moderate significance, or applied as decoration — they announce formal ambition without substance, and the reader feels the gap between the figure's formality and the content's ordinariness.",
            "The connection to this week's thesis proposal is the connection between formal commitment and intellectual commitment: the proposal that states its governing question with the rhetorical precision of an epistrophe is a proposal that has earned the confidence its formality implies. The proposal that uses formal sophistication to disguise an unclear governing question has done the opposite — the figure's formality highlights the vacancy behind it. Rhetoric serves argument; it cannot replace it.",
          ],
          exercise:
            "Write three separate passages: one demonstrating epistrophe (six clauses, all landing on the same word or phrase, each arriving from a genuinely different direction), one demonstrating symploce (four clauses, identical opening and closing, varying middle), and one that deliberately breaks an established epistrophe pattern in the final clause to deliver the conclusion the accumulation has been building toward. Each passage should use a subject from your thesis. After writing, apply the earning test to each: are the repeated elements accumulating, or merely repeating? Revise any passage where the repetition is stalling rather than building.",
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
              title: "Three sample thesis proposals from your genre",
              author: "Various",
              href: "https://www.pw.org/mfa",
              note: "Available via MFA program websites (many programs post sample proposals), literary agents' 'what I'm looking for' pages (which describe projects in proposal-like terms), or Poets & Writers MFA resources. Find three proposals or project descriptions in your genre — they need not be full proposals, but they should give you the structure and register of how working writers describe their book-length projects to external readers. Read for: how is the governing question stated? How is the form argued for? How is the narrator or protagonist introduced? What does the excerpt show that the prose cannot?",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "The Art of Memoir, 'The Proposal' discussion",
              author: "Mary Karr",
              href: "https://bookshop.org/p/books/the-art-of-memoir-mary-karr/6697453",
              note: "Purchase (continuing from Week 11). Karr's discussion of how memoir writers articulate their projects to themselves and to external readers is the most practically useful available account of the CNF proposal's specific challenges — particularly the ethical obligations (memory, living subjects, the narrator's relationship to truth) that distinguish it from fiction proposals. Even if you are not writing memoir, read this discussion for its account of what it means to articulate a project's governing question before the project is complete.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Any author's note, preface, or interview on how a writer came to their subject",
              author: "Writer of your choice",
              href: "https://www.theparisreview.org/interviews",
              note: "Free online — the Paris Review Art of Fiction interviews are the best available archive. Find a writer whose work is in some way comparable to your thesis project and read their account of how they came to their subject: what drew them to the material, what questions they were trying to answer, what form they chose and why. This is the informal version of the thesis proposal — the retrospective account of what the proposal was trying to say before the work existed. Use it as a model for how to write about your own project's origins and governing question.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Thesis Proposal — Full First Draft",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This week's primary exercise is the full first draft of the thesis proposal — one of the program's key deliverables and the navigational document for the remaining two and a half years. Write each section with full care; this is not a rough draft to be discarded but a living document to be revised as the work evolves.",
            "Section 1 — Title and genre (working title is fine; state the genre and sub-genre if relevant): 1–2 lines.",
            "Section 2 — Subject and premise (200 words): What is this work about? What happens? For fiction: what is the story? For screenwriting: what is the premise, who is the protagonist, what is the dramatic problem? For memoir/CNF: what material is the work drawing from, and what is the narrator's relationship to it?",
            "Section 3 — The governing question (100 words): What question is this work genuinely investigating? Write it as an open inquiry, not a thesis statement. Apply the specificity test: could this question be asked by any other project in your genre, or does it belong specifically to this material?",
            "Section 4 — Form and structure (200 words): What is the work's structure? Why is this form the right vessel for this material? This is the form argument — not a description but a defense. Why does the material require this structure rather than a different one?",
            "Section 5 — The narrator or protagonist (150 words): Who carries the story? What do they want, what do they need, and what is the cost of the gap between those two things? For memoir, address the doubleness of experiencing self and narrating self.",
            "Section 6 — Sample excerpt (500–700 words): The opening of the thesis in as close to its current best form as you can produce. Not a placeholder — the best available version of the opening scene, chapter, or essay. This is the proposal's most important element.",
            "Section 7 — Scope and timeline (100 words): How long will the work be? What is a realistic timeline for completion? Be honest rather than aspirational.",
            "Total: 1,250–1,450 words of proposal + 500–700 word excerpt. Save this document; it will be revised throughout the program.",
          ],
          target: "1,250–1,450 words (proposal) + 500–700 words (excerpt) = approximately 1,800–2,200 words total",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 47 — The Proposal Reader",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your complete thesis proposal — all seven sections including the excerpt. The AI's task is to read it as a rigorous first reader and editor: assessing the clarity of the governing question, the persuasiveness of the form argument, and whether the excerpt delivers what the proposal promises.",
          prompt:
            "Read this thesis proposal as a rigorous first reader and editor. Identify: (1) Where the project's governing question is most clearly articulated — the sentence or passage where the inquiry becomes most precise and most specific to this material; (2) Where the governing question is obscured or absent — where the proposal retreats to subject description instead of inquiry, or where the question stated is too broad to belong specifically to this project; (3) Whether the proposed form is genuinely argued for or merely stated — does the proposal explain why this form is the right vessel for this material, or does it simply describe the form without making the case? (4) What the sample excerpt reveals about the work that the proposal prose doesn't say — what does reading the excerpt add to the reader's understanding of the project? (5) The single question you would most want to ask this writer about their project — the question whose answer would most change your understanding of what this work is trying to do.",
          questions: [
            "Write a 300-word response to the single question the AI most wants to ask about your project. This response is an addendum to the proposal — it should be added to the document as a sixth section, titled 'The Question I Have Not Yet Answered.' The question the AI asks is almost always pointing at the part of the project the proposal has been circling without landing on.",
            "Where does the AI locate the governing question as most precise? Is that the place you would have identified? If different, what does the AI's identification reveal about which sentence in the proposal is actually doing the work — and which sentence you thought was doing the work?",
            "The AI's assessment of the form argument: does the proposal argue for the form or merely state it? If the AI finds the form argument absent or weak, rewrite Section 4 with a genuine defense — not 'this work will be written in first person present tense' but 'first person present tense serves this material because the gap between the experiencing self and the narrating self is this memoir's central investigation, and present tense collapses that gap in a way that past tense cannot.'",
            "What does the excerpt reveal that the proposal prose doesn't say? The AI's answer to this question is often the proposal's most important diagnostic: if the excerpt is revealing things the proposal hasn't articulated, the proposal needs to catch up to the excerpt. If the excerpt is not revealing anything the proposal hasn't already said, the excerpt may not yet be at full strength.",
          ],
          note: "The proposal reader is the program's most important AI exercise because it is applied to the most important document the writer will produce this year. The thesis proposal is the project's navigation system; the AI's assessment of its clarity, precision, and persuasiveness is the most useful external check available before the proposal is used as a guide through the remaining sessions. Save the AI's full response alongside the proposal — read both at the end of each semester to track how the project has developed relative to its initial articulation.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Proposal as Commitment Device",
      blocks: [
        {
          type: "tip",
          icon: "🧭",
          name: "Keep the Proposal Current — It Is a Navigation Instrument, Not an Archive",
          paragraphs: [
            "The thesis proposal serves a practical function beyond its immediate value as a thinking instrument: it is a commitment device that makes abandonment harder. Once you have articulated what this work is and why it matters — in the specific, precise language that a well-written proposal requires — walking away from it is no longer a passive act. It requires an explicit decision to stop, not a simple drifting away from something that has lost its momentum. The proposal creates an obligation to the project that is more binding than intention alone because it is more specific: it names the governing question, the form, the protagonist, the scope. To abandon a project that has been that precisely articulated requires explaining, at least to oneself, exactly what has changed.",
            "Keep the proposal current. Revise it as the work evolves — when a structural decision changes, update Section 4; when the governing question sharpens or shifts, update Section 3; when the scope changes, update Section 7. The proposal that is revised as the work develops is the proposal that remains useful as a navigation instrument; the proposal that is written once and filed is the proposal that gradually becomes a description of a project that no longer exists. Use it. Return to it when you feel lost in the draft. The governing question, clearly stated, is the fastest route back to the work's center.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What Writing the Proposal Revealed",
      blocks: [
        {
          type: "journal",
          title: "What Writing the Proposal Revealed",
          question:
            "In writing the thesis proposal — in trying to articulate the governing question, the form argument, the protagonist's want and need, the scope and timeline — what did you discover you didn't know about your project? Not what you learned about how to write a proposal, but what the act of articulation revealed about the work itself. What question did stating the governing question raise that you hadn't previously confronted? What did writing Section 4 — the form argument — reveal about why you have been making the structural choices you have been making, or about whether those choices are actually the right ones? What did the excerpt show you when you tried to write it in its best available form? Write for twenty minutes without stopping, attending to what the proposal revealed rather than to what it confirmed.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is an excavation of the proposal's most productive yield: not the document itself but what the act of writing it produced in the writer's understanding. The writer who finishes the proposal knowing exactly the same things they knew before writing it has not yet used the proposal as a thinking instrument. The writer who finishes it knowing something they did not know before — about the governing question, about the form's relationship to the material, about the protagonist's need — has used the proposal correctly, regardless of whether the document itself is well-written.",
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
            "By the end of this week you should have: written the complete first draft of the thesis proposal — all seven sections plus excerpt, approximately 1,800–2,200 words total; saved the proposal as a living document to be revised throughout the program; completed the AI proposal reader exercise and written the 300-word addendum answering the AI's single most important question; revised Section 4 (form argument) if the AI identified it as absent or weak; read three sample proposals from your genre; read Karr's proposal discussion (CNF) or equivalent; read a Paris Review or equivalent interview on how a writer came to their subject; written the three epistrophe/symploce/deliberate-break passages with earning test applied.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 13",
          paragraphs: [
            "Week 13 is Writing the Other — Ethics, Craft, and the Limits of Imagination. Literary imagination has no inherent borders, but the exercise of imagination across significant lines of difference — race, class, culture, disability, sexuality, historical period — carries craft and ethical responsibilities that this generation of writers has brought into sharp critical focus. Matthew Salesses's *Craft in the Real World* is the essential text: it argues that what we call 'craft' is never neutral — it is always embedded in specific cultural assumptions about whose stories matter and how they should be told. Week 13 applies these arguments directly to the thesis material.",
          ],
        },
      ],
    },
  ],
};
