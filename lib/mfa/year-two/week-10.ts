import type { WeekData } from "@/lib/mfa/types";

export const week10Data: WeekData = {
  weekNumber: 10,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Revision II — The Workshop Mindset & Self-Critique",
  emphasizedWord: "Workshop Mindset",
  deck: "The most valuable thing an MFA workshop offers is not peer feedback — it is the experience of reading work with craft-trained eyes and articulating what you observe, without authorial attachment. This week develops the self-workshop capacity: the ability to step outside your own work and read it as though someone else wrote it, applying workshop-level analysis to your own drafts. This is an advanced cognitive skill. It requires the cooling-off period, the structural pass, and a specific evaluative vocabulary.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "46 of 108" },
    { label: "Craft Focus", value: "Revision II" },
    { label: "Grammar", value: "Phase 4 Begins · Parallelism" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Reading Your Own Work as Though Someone Else Wrote It",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The workshop model — in which writers read and respond to each other's work publicly, applying craft vocabulary to observed effects rather than guessing at intentions — has produced both the best and worst of contemporary literary education. At its worst, the workshop produces the homogenized, competent-but-safe prose that James Wood called 'workshop fiction': the drafts that have been smoothed of their idiosyncrasies, their risks, their genuine strangeness, by the collaborative pressure of ten readers who disagree about what is wrong and agree only on what is easy to fix. At its best, the workshop produces something almost impossible to achieve alone: the cold reading. The experience of someone who knows how to read with craft-trained eyes encountering your work without your intentions, without your explanations, without access to what you meant — only to what you wrote.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The self-workshop is an attempt to approximate the cold reading from inside. It cannot fully succeed — the writer will always know what they meant — but it can get closer than most writers believe. The conditions that make it possible: sufficient time between writing and reading (days at minimum, weeks if available); a specific evaluative vocabulary that creates critical distance by naming what is observed; and the deliberate practice of reading for what is demonstrably on the page rather than for what was intended. The writer who reads their own work asking 'Does this do what I intended?' will almost always answer yes. The writer who reads asking 'What does this actually do, as a reader encounters it?' will find the gap.",
          ],
        },
        {
          type: "pullquote",
          quote: "The workshop letter asks not what you meant but what you made. The answer to the first question is the author's business. The answer to the second is the reader's experience — and the reader's experience is the only thing that matters.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Workshop Letter: Five Elements",
          paragraphs: [
            "The opening claim — what the piece is doing: before addressing any problem, the workshop letter identifies what the piece is actually accomplishing. This is not a summary and not a compliment — it is a precise articulation of the work's central effect and subject as a reader experiences them. 'This piece is about the relationship between grief and housekeeping' is an opening claim. 'This piece is interesting and well-written' is not. The opening claim matters because it tells the writer whether their work is producing its intended effect — and when it doesn't, the gap between the writer's intention and the reader's experience is often the most important diagnostic in the letter.",
            "The most successful moment — with specific analysis: every workshop letter identifies the single strongest moment in the piece and explains specifically what makes it work. Not 'the kitchen scene is wonderful' but 'the kitchen scene is the piece's strongest moment because the protagonist's action of reorganizing the spice rack while her mother is speaking is doing three things simultaneously: it is characterization, it is subtext, and it is the scene's visual expression of the piece's governing question about attention and neglect.' The specific analysis is what makes the praise useful — it tells the writer which craft decisions to replicate and why they worked.",
            "The most significant problem — with diagnosis and prescription: the workshop letter identifies the single most significant problem the piece currently has, distinguishes between the symptom and its cause, and proposes a specific revision direction. 'The middle section loses momentum' is a symptom. 'The middle section loses momentum because the protagonist's want becomes passive for three scenes — she stops pursuing and starts waiting — and the story's engine is the pursuit' is a diagnosis. 'Consider: what does she do in those three scenes that could be recast as an active attempt, however misguided, toward the want?' is a prescription. The prescription should point a direction, not prescribe a solution — the solution is the writer's job.",
            "What the piece is avoiding — and why it matters: the workshop letter's most uncomfortable element, and often its most valuable. The most important scene in any draft is usually the one that hasn't been written — the confrontation that has been approached from a safer angle, the emotional exposure that has been replaced with its approximation, the moment of maximum risk that the draft has circled. Naming the avoidance is not an accusation; it is an invitation. 'The piece seems to be circling a direct scene between the narrator and her father, but the draft always cuts away before the conversation happens. The cutaway may be intentional, but if not, the scene may be the piece's center of gravity.'",
            "Specific craft questions — not suggestions: the workshop letter closes with two or three specific craft questions that the piece raises without yet answering. These are not 'you should do this' instructions — they are observations that open territory for the writer to explore. 'What would happen if the second section came first?' is a craft question. 'What does the character know at the story's end that she didn't know at the beginning, and is that change legible in her final action?' is a craft question. Questions are more productive than suggestions because they preserve the writer's authority over their own work while opening possibilities the writer may not have considered.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The self-workshop letter — writing the full workshop letter about your own work — is the week's primary analytical exercise. It is difficult because the writer is simultaneously the workshop reader and the work's author, and the author keeps interrupting the reader with explanations. The discipline is to write exclusively from the reader's position: what is demonstrably on the page, not what was intended to be there. The self-workshop letter that reads as a defense of the draft has not succeeded. The self-workshop letter that reads as an honest account of what a skilled reader would observe — including the problems, the avoidances, the unanswered craft questions — is the letter from which revision is possible.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Self-Critique Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer's self-workshop letter faces its specific difficulty in the opening claim: what is this piece actually doing? The writer who knows the story's plot and theme and character arc from the inside is the writer least able to describe what the story produces in a reader who has none of that knowledge. The practical corrective is to find a way to give the draft to a trusted reader before writing the self-workshop letter — not for their feedback, but for their opening claim: 'What do you think this is about?' The reader's answer is almost always instructive, and often humbling. It reveals which of the writer's intentions have made it to the page and which are still only in the writer's head.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay development process builds self-critique into its professional structure: coverage, table reads, pitch meetings, and the notes process are all forms of the workshop letter delivered by external readers. The self-workshopping screenwriter mimics this structure by conducting their own coverage — reading the script as a coverage reader would, attending to the first ten pages as a gatekeeping document, asking whether each scene is doing the work that coverage readers are paid to assess: does the premise set up a compelling dramatic situation? Does the protagonist have a clear want and a clear obstacle? Does the dialogue carry subtext? For playwrights, the equivalent is imagining the director's first read — what questions will the director bring to the first production meeting, and does the script answer them?",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "*Craft in the Real World* by Matthew Salesses is required reading this week precisely because it challenges the workshop model's assumptions about who the workshop's norms serve. Salesses's argument — that workshop criteria (restraint, showing not telling, the 'universal' narrator, the distrust of sentimentality) are not neutral craft standards but culturally specific preferences that often penalize writing from non-dominant subject positions — is the self-workshopping CNF writer's most important critical tool. The self-workshop letter that applies dominant workshop criteria without examining them may be misevaluating the work. The question is not only 'does this meet workshop standards' but 'are these the right standards for this particular piece and what it is trying to do?'",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 Begins — Parallelism: Saying Like Things in Like Ways",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 45 of 60 — Parallelism: Equivalence, Rhythm, and the Rhetoric of Pattern",
          intro: [
            "Parallelism is simultaneously Phase 4's grammatical foundation and its most pervasive rhetorical principle. As grammar, parallelism requires matching forms in coordinate elements: items joined by 'and,' 'but,' 'or,' and 'nor' must be in the same grammatical form. 'She liked running, swimming, and to read' is grammatically wrong because the third item breaks the participial pattern; 'She liked running, swimming, and reading' is correct. This is the rule. The rhetoric is more interesting.",
            "As a rhetorical principle, parallelism operates at every scale from the phrase to the paragraph to the entire work. It is the principle that equivalent ideas deserve equivalent grammatical treatment — that when two things are being compared, contrasted, or accumulated, their formal similarity should mirror their conceptual relationship. The Declaration of Independence is structured around parallelism at the clause level: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' The parallel 'that' clauses create a rhetorical momentum — each clause adds weight to the same structure — and the accumulation makes the argument feel inevitable.",
          ],
          rule: "The rhetorical force of parallelism operates through three mechanisms: equivalence (the parallel form signals to the reader that the items are in the same category, carrying the same weight, operating at the same level of abstraction); accumulation (each parallel item adds to the rhetorical pressure of those before it, so the structure builds); and the deliberate break (the parallel structure that is established and then broken produces the opposite effect of accumulation — the broken item is isolated, emphasized, and rhetorically charged by the violation of the expected pattern). The writer who understands parallelism controls all three mechanisms. The writer who uses parallelism only grammatically uses only a fraction of its available force.",
          examples: [
            {
              label: "Parallelism at the phrase level — equivalence and accumulation",
              text: "'He had survived the war, the marriage, the years of silence, the return.' [Four noun phrases in parallel, each one a chapter of the character's life given equal grammatical weight. The equal weight is the claim: each survival cost the same.] Compare: 'He had survived the war and the marriage and had endured years of silence before returning.' [Accurate but flat — the variation in form suggests variation in weight, which flattens the accumulation.]",
            },
            {
              label: "Parallelism at the clause level — rhythm and momentum",
              text: "'She knew what she had done. She knew what it had cost. She knew, most precisely, what it would cost next.' [Three independent clauses in strict parallel, the third extending the pattern to carry the weight of specificity. The parallelism builds; the third clause's departure from the exact pattern — 'most precisely' breaks the perfect symmetry — creates emphasis rather than disruption because it arrives after the pattern is established.]",
            },
            {
              label: "The deliberate break — isolation through violation",
              text: "'The house was quiet, the children asleep, the dishes done, the doors locked. And she was still here.' [Five parallel elements in the first sentence establish the pattern; the second sentence breaks it with an entirely different construction. The break isolates 'she was still here' — the real subject of the passage — by contrasting its form with the catalogue that precedes it. The break is felt as emphasis because the pattern made it possible.]",
            },
            {
              label: "Faulty parallelism — and why it undermines the prose",
              text: "Faulty: 'The revision process involves reading the draft, to identify structural problems, and then making the necessary changes.' [Three items in a coordinate series with three different grammatical forms: gerund, infinitive, and participial phrase. The inconsistency registers as carelessness even if the reader cannot name what is wrong.] Corrected: 'The revision process involves reading the draft, identifying structural problems, and making the necessary changes.' [Three gerunds — equivalent treatment of equivalent activities.]",
            },
          ],
          outro: [
            "Parallelism is Phase 4's first rhetorical figure because it is the foundation of all the others. Anaphora (next week) is parallelism at the opening of successive clauses. Epistrophe is parallelism at the close. Polysyndeton and asyndeton are parallelism with and without conjunctions. Chiasmus is reversed parallelism. The writer who understands parallelism as both grammatical rule and rhetorical principle — who can use it for equivalence, accumulation, and the deliberate break — has the foundation for everything Phase 4 will build.",
            "The connection to this week's revision topic is direct: the self-workshop letter uses parallelism as an analytical tool. When the workshop reader says 'this scene is doing three things: it advances plot, reveals character, and deepens theme,' they are using parallelism to organize their observation — the three items' equal grammatical treatment signals that they are being assessed as equally important. The revision letter that uses parallelism precisely is the revision letter that thinks precisely.",
          ],
          exercise:
            "Write a paragraph — 150 to 200 words — in which three or four parallel constructions build to a fourth or fifth that deliberately breaks the pattern. The break should be felt by the reader as meaningful — as emphasis, isolation, or irony — not as carelessness. After writing the paragraph, annotate it: identify the parallel elements, explain what the accumulation builds toward, and explain what the break produces. Then find one passage in your current thesis draft where faulty parallelism is present — where coordinate elements are in mismatched forms — and correct it. Find a second passage where parallelism could be used deliberately but is not, and revise it to introduce the figure.",
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
              title: "Reading Like a Writer",
              author: "Francine Prose",
              href: "https://bookshop.org/p/books/reading-like-a-writer-francine-prose/6697453",
              note: "Purchase. Prose's argument — that the most important thing a writer can do is learn to read with the precision and attention of a craftsperson, not the passive engagement of a consumer — is the intellectual foundation of the self-workshop capacity. Read the introduction and two chapters of your choice. Apply her method to the pieces you will workshop this week: what specific craft decisions is the writer making at the sentence level, the scene level, the structural level? What is the relationship between the craft decisions and the effects they produce?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Craft in the Real World, 'The Workshop' chapter",
              author: "Matthew Salesses",
              href: "https://bookshop.org/p/books/craft-in-the-real-world-matthew-salesses/15199901",
              note: "Purchase. Salesses's critique of the workshop model's culturally specific assumptions is required for any serious self-workshopper. Before applying workshop criteria to your own work, ask: whose criteria are these? What assumptions about the 'universal' narrator, about restraint, about sentimentality, about the relationship between subject and form, are embedded in the criteria? Read for his account of what workshop norms often miss or penalize — and apply his critique to your self-workshop letter as a corrective.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: '"On Workshopping" or any craft essay on workshop practice',
              author: "C.K. Williams / various",
              href: "https://poets.org/text/craft-statement-ck-williams",
              note: "Free or widely available. Williams's perspective from poetry on what the workshop mindset requires — reading without authorial attachment, attending to what is rather than what was intended — applies across genres. If this specific essay is unavailable, substitute any thoughtful craft essay on workshop practice: Junot Díaz's 'MFA vs. POC' (free online) or Garth Greenwell's essays on revision are equally generative alternatives.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Workshop Letter + Thesis Session 10",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Workshop Letter (800–1,000 words): Choose a piece from your Year One writing or your current thesis draft that you have not read in at least two weeks. Read it once without marking, then write a full workshop letter about it — as though you are a workshop reader, not the author.",
            "The workshop letter must include all five elements: the opening claim (what the piece is actually doing, as a reader experiences it — not what you intended); the most successful moment with specific craft analysis of why it works; the most significant structural problem with diagnosis of its cause and a direction for revision; what the piece is avoiding and why that avoidance matters; and two or three specific craft questions that open territory for the writer to explore.",
            "The discipline: write exclusively from the reader's position. Do not explain intentions. Do not defend choices. Do not say 'I was trying to.' If you find yourself writing from the author's position, stop and return to the question: what is demonstrably on the page? The self-workshop letter that reads as a defense is not a workshop letter — it is a justification. The self-workshop letter that reads as an honest account of what a skilled reader would observe, including what the draft has not yet achieved, is the letter from which revision is possible.",
            "Part Two — Thesis Session 10 (1,500–2,000 words): Write the next section of the thesis. Before the session, read the self-workshop letter's diagnosis of the most significant structural problem and note whether the current thesis draft has an analogous problem. If it does, record it in the session log and identify what addressing it would require — but do not address it this session. The session's work is forward drafting; the structural diagnosis is preparation for the revision that will follow.",
          ],
          target: "800–1,000 words (workshop letter) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 21 — AI vs. Human Workshop",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This is the program's most structurally complex AI exercise, and one of the most instructive. Submit the same piece — the one you wrote your self-workshop letter about — to the AI for a workshop response. Then compare the AI's workshop letter to your own, attending carefully to what each sees that the other misses.",
          prompt:
            "Read this piece as a workshop participant — a careful, craft-trained reader who is attending to what the piece is doing, not what it intended to do. Write a workshop letter that includes: (1) An opening claim: what is this piece actually about, as a reader experiences it? Not a summary — a characterization of its central effect and subject. (2) The most successful moment in the piece, with specific analysis of what craft decisions make it work. (3) The most significant structural problem the piece currently has — distinguish between the symptom and its cause, and suggest a direction for revision without prescribing a specific solution. (4) What the piece seems to be avoiding — what it is circling without landing on — and why that matters. (5) Two specific craft questions that would open productive territory for the writer to explore. Do not comment on grammar, punctuation, or word choice unless they are causing a structural problem.",
          questions: [
            "Compare the AI's opening claim to yours. Where do they agree about what the piece is doing? Where do they diverge — and when they diverge, which claim is more accurate to what is demonstrably on the page? The divergence between two cold readers is the most diagnostic information this exercise produces.",
            "The AI's identification of the most significant structural problem: is it the same problem you identified? If different, which diagnosis is more fundamental — which addresses the cause rather than the symptom? Is it possible that both diagnoses are correct but operating at different scales?",
            "What does the AI's workshop letter see that your self-workshop letter missed? This is the most important question. The AI's letter, like any external reader's, reads without your intentions — it can only respond to what is on the page. Where it sees something your letter missed, it is evidence of the gap between intention and effect that the cold reading is designed to reveal.",
            "Apply the Salesses critique to both letters: what assumptions about craft and voice are embedded in each letter's evaluative criteria? Are those assumptions appropriate for this specific piece and what it is trying to do? Where might both letters be applying the wrong standards?",
          ],
          note: "The AI vs. Human Workshop exercise (Exercise 21 in the program's 28-exercise AI sequence) is specifically designed to reveal the limits of the self-workshop through contrast with an external reader — even an artificial one. The AI's letter will have blind spots: it cannot access the cultural, historical, or personal context that a human reader brings; it applies craft criteria that may not be appropriate for every piece; it may miss irony, tone, or register shifts that a human reader would catch. But it reads without your authorial attachment. The gap between what it sees and what you see is the gap between what you wrote and what you intended — and that gap is the revision's map.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Generic Statement Alert",
      blocks: [
        {
          type: "tip",
          icon: "🔎",
          name: "Every Sentence That Could Have Been Written by Anyone Else Should Be Rewritten",
          paragraphs: [
            "The self-workshop letter fails — and the artist's statement, and the query letter, and any document that asks the writer to describe their own work — when it retreats to generality. 'I am interested in the complexity of human experience and the power of storytelling to create empathy' is a sentence that every literary writer could have written. It tells the reader nothing about this writer, this work, this specific formal and thematic commitment. The workshop reader who encounters a general opening claim — a claim that could describe any piece in the genre — has not been told what the piece is. They have been told what the genre is.",
            "The test: after writing the self-workshop letter, read every sentence and ask whether it could have been written about any other piece of literary prose by any other writer. Every sentence that could — every general statement about 'the human condition,' every claim that could describe fifty other pieces, every praise that names no specific element — should be rewritten with specifics. The effective workshop letter is specific to this piece, this writer, this moment in the draft: it names the exact scene, the exact sentence, the exact craft decision, and explains exactly what it produces. Generality is the workshop letter's avoidance. Specificity is its function.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You've Been Most Reluctant to Revise",
      blocks: [
        {
          type: "journal",
          title: "What You've Been Most Reluctant to Revise",
          question:
            "What draft of yours have you been most reluctant to revise — not the hardest to revise, but the most reluctant? The one you keep returning to without touching, or touching only gently, or touching and then undoing? What is the reluctance protecting — is it protecting a memory the draft is based on, a version of yourself that produced the draft, a sentence or scene that you cannot imagine the piece without? What would you have to let go of to make it better — and is 'better' the right word, or is the reluctance a signal that what you're protecting is not the prose but something the prose is holding? Write for twenty minutes without stopping. The reluctance is information. The draft is waiting.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week extends the self-workshop letter's logic into the personal: the attachment that prevents revision is not a craft problem but a psychological one, and naming it is the first step toward releasing it. The writer who can identify what a draft is protecting — what it holds that is not about the prose — is the writer who can make the revision decision from a position of clarity rather than avoidance.",
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
            "By the end of this week you should have: written the 800–1,000-word self-workshop letter with all five elements (opening claim, strongest moment with specific analysis, most significant structural problem with diagnosis and direction, what the piece is avoiding, two craft questions); written 1,500–2,000 words of thesis in Session 10 with the structural diagnosis from the workshop letter applied to the thesis and recorded in the session log; read Francine Prose's Reading Like a Writer introduction and two chapters; read Salesses's workshop critique and applied it to both workshop letters; read Williams or an equivalent craft essay on workshop practice; completed the AI vs. Human Workshop exercise (Exercise 21) and written responses to all four reflection questions; written the parallelism paragraph with deliberate break and annotation; corrected one faulty parallelism in the thesis and introduced one deliberate parallel structure.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 11",
          paragraphs: [
            "Week 11 is The Long Manuscript — Managing Scale, Momentum, and the Reader's Energy. Writing a book-length work requires a different set of skills from writing at the scene or story level: the management of narrative momentum across hundreds of pages, the creation and release of tension at the chapter and section level, the maintenance of the reader's investment across a work that cannot be read in one sitting. Week 11 develops the analytical vocabulary for thinking at the manuscript scale.",
          ],
        },
      ],
    },
  ],
};
