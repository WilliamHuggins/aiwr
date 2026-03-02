import type { WeekData } from "@/lib/mfa/types";

export const week18Data: WeekData = {
  weekNumber: 18,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Fall Portfolio Review — The Thesis Comes Into Focus",
  emphasizedWord: "The Thesis Comes Into Focus",
  deck: "The last week of Year Two's fall semester. By now you have a thesis proposal, a publishing plan, an artist's statement, and approximately seventeen sessions of drafted material. This week asks a new question: not 'How have I grown as a writer?' but 'What is this thesis project and is it the right project?' This is the last moment before spring semester's intensive thesis drafting to reconsider, redirect, or confirm direction.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "54 of 108" },
    { label: "Craft Focus", value: "Portfolio Review" },
    { label: "Grammar", value: "Phase 4 Synthesis · Rhetorical Figures Audit" },
    { label: "Semester Closer", value: "Fall Semester Ends" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Last Moment to Change Direction",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every portfolio review in this program asks the same surface question — how has the writing developed? — and conceals a harder question beneath it. The Year One spring portfolio review asked whether the writer had found subjects and a voice worth sustaining. This review asks something more urgent: is the thesis project you have been building, week by week, across seventeen sessions, the project that most urgently requires your attention? Not the project you committed to in the proposal, not the project whose structure you have been developing, not the project you have already spent months on — but the project that, having spent months on it, you now believe is the right one.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The permission to change direction at this moment is not a weakness in the program's design — it is the most important structural decision in it. Spring semester is intensive thesis drafting: more pages per week, more sustained focus, the full commitment of the second half of the year to a single project. Starting the wrong project in spring is far more costly than redirecting now. The writer who reaches Week 18 having discovered that the project proposed in Week 12 is not the work that most urgently requires writing has not wasted seventeen sessions — they have spent seventeen sessions learning what the work actually is, which is precisely what those sessions were for.",
          ],
        },
        {
          type: "pullquote",
          quote: "The thesis proposal is a living document. The permission to revise it is not the permission to abandon the work — it is the permission to write the work more honestly than the proposal allowed.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Thesis Check-In — Three Questions, Honestly Answered",
          paragraphs: [
            "Is the thesis project you proposed in Week 12 still the right project? This is the hardest question, and it requires reading the proposal and the most recent draft pages in direct dialogue with each other — not separately, but side by side, asking whether the work being written is the work that was proposed, and if it isn't, whether what has emerged is better or worse than what was planned. The proposal's governing question: is the work still investigating it? The proposal's form argument: is the actual draft in the form that was argued for? The proposal's protagonist or narrator: is the character or voice that has emerged the one proposed, or has the work found a different center of gravity? Discrepancies between the proposal and the draft are not necessarily failures — they may be the work discovering what it actually is. The question is whether the discrepancies represent genuine discovery or drift, growth or avoidance.",
            "What are the three most significant structural challenges encountered in the first sections of the draft? Not the moments that were technically difficult — the scenes that were hard to write, the sections where the voice was uncertain — but the structural problems: places where the architecture of the work is not holding, where the escalation is not happening, where the governing question is not being engaged, where the form is working against the material rather than with it. For each challenge: name it precisely, diagnose its cause (is it a planning failure, an execution failure, or a discovery that the original plan was wrong?), and describe current thinking about how to address it. Not the solution — current thinking about the direction. The solution will be found in the drafting.",
            "What will spring semester accomplish, specifically? Not aspirationally — specifically. How many pages will be written? Which sections will be completed? Which structural challenges will be addressed and in what order? Which craft skills, identified through the fall semester's curriculum, will be applied directly to the thesis in spring? The spring plan is not a promise — it is a navigational document, a map of intentions specific enough to hold the work together across the fourteen weeks that remain in Year Two. The fall semester produced the foundation; the spring semester builds on it. The spring plan should reflect what was learned in the fall about what the work requires.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The reading this week is the thesis proposal and the draft pages — no new texts. This is intentional. Week 18 is a week of looking back at what has been built and forward at what must be built, not a week of encountering new craft concepts. The fall semester has introduced nine weeks of craft topics, three weeks of genre-specific study, three weeks of professional development, one synthesis week, and seventeen thesis sessions. The portfolio review is where all of that becomes visible as a whole rather than as a sequence of individual weeks.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What Each Track Is Assessing",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction portfolio review asks whether the work has found its structural form. Is the novel's architecture — its point of view, its management of time, its chapter structure, its relationship to the governing question — working at book length? The escalation check from Week 11: has each session's new material moved the situation into a demonstrably more difficult, urgent, or complicated position? The voice consistency audit from Week 14: do the seventeen sessions sound like the same writer throughout? And the most difficult fiction question: has the protagonist surprised the author yet — has the character done something the author didn't plan, which is the signal that the character has achieved sufficient interiority to generate action from inside themselves rather than being moved by the plot's requirements?",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriting portfolio review asks whether the pilot or screenplay has found its dramatic problem. Is the recurring dramatic problem — the situation that generates story indefinitely, that cannot be resolved without ending the series — clearly established in the pages written so far? Is the protagonist revealed rather than transformed in the pilot draft's first act? And the professional question specific to screenwriting: does the pitch document (the publishing plan equivalent for screenwriters) accurately describe what the pages actually are, or has the work diverged from the pitch in ways that require either revising the pitch or redirecting the project? For playwrights: has the play found its theatrical world — the set of rules about how this particular play operates — and are those rules consistent across the pages so far?",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The CNF portfolio review asks whether the memoir's narrator has changed across the pages written so far. The memoirist's relationship to the material must develop across the manuscript's length — the narrator who ends in the same position they began, with the same distance and the same understanding, has not written a memoir but a report. Is the narrating self gaining understanding, or simply recounting? Is the experiencing self fully present — with the texture, the confusion, the specificity of being inside the events as they happened — or has retrospective narration flattened the past into a smooth account? And the ethical question that the portfolio review makes explicit: after seventeen sessions of writing, what is the memoirist now certain of that they were uncertain about in Week 12? What remains genuinely uncertain, and is that uncertainty productive or an avoidance?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 Synthesis — The Full Rhetorical Figures Audit",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 Synthesis — All Nine Figures Applied: The Audit and the Passage",
          intro: [
            "Phase 4 of the grammar curriculum is complete. Over nine weeks, the following rhetorical figures have been introduced: parallelism (Week 10), anaphora (Week 11), epistrophe and symploce (Week 12), polysyndeton (Week 13), asyndeton (Week 14), parataxis and hypotaxis (Week 15), chiasmus (Week 16), and the semicolon as Phase 5's opening figure (Week 17). This week's grammar work is synthetic: an audit of three thesis draft pages to assess how the figures are currently operating — unconsciously, consciously, and where they could serve the prose more fully — followed by a 300-word synthesizing passage in which at least five figures are deployed not as decoration but as structure.",
          ],
          rule: "The audit principle: rhetorical figures should not be absent from a passage (which would indicate prose operating at only one register) or uniformly present (which would indicate ornamental application). The figure distribution of three pages reveals the prose's range: which figures appear naturally, which have been introduced through conscious practice, and which are entirely absent despite the material offering opportunities for their use. The synthesis principle: figures arise from content. The 300-word passage is not a demonstration of all nine figures — it is a passage in which five or more figures arise naturally from the specific content being written, each doing structural rather than decorative work.",
          examples: [
            {
              label: "What the audit looks for — figure by figure",
              text: "Parallelism: coordinate elements in matching grammatical forms. Anaphora: repeated opening across successive clauses. Epistrophe: repeated arrival at the same word or phrase. Polysyndeton: conjunction between every item in a series (excess, ceremony, accumulation). Asyndeton: conjunctions removed (speed, inevitability, compression). Parataxis: short coordinate sentences without subordinating hierarchy. Hypotaxis: long subordinating sentences where ideas are embedded inside each other. Chiasmus: grammatical reversal across two successive phrases. Note the semicolons: how many are doing genuine rhetorical work (implying a relationship more interesting than any named connection) and how many are pretentious periods?",
            },
            {
              label: "The synthesis passage — what it should demonstrate",
              text: "A 300-word passage using at least five of the Phase 4 figures: the figures should arise naturally from the content — not 'here I will use anaphora' but 'this content calls for insistence, and the natural expression of that insistence is anaphoric.' After writing, annotate each figure: identify it by name, explain what effect it is producing, and assess whether it is earning its formality. Then revise to remove any figure that feels forced or merely applied — any figure whose removal would not diminish the passage's effect is a figure that was decorating rather than structuring.",
            },
          ],
          outro: [
            "The Phase 4 audit is also a voice diagnostic: the distribution of figures across three pages reveals which registers of rhetorical relationship the prose habitually reaches for and which it avoids. The prose that uses only parataxis and asyndeton sees the world as atomic and fast-moving; it may be avoiding the subordinating complexity of hypotaxis. The prose that uses only polysyndeton and anaphora accumulates weight without ever cutting for speed; it may be avoiding the forward momentum of asyndeton. The distribution is not a judgment — it is information about what the voice already does and what it has not yet learned to do.",
            "Phase 5 continues in spring semester (Weeks 19–30) with the remaining punctuation-as-craft figures: the em dash (previewed in Week 16), parentheses, the colon, the comma splice as deliberate style choice, the sentence fragment, the ellipsis, and the period as rhythm maker. Each will be introduced in the context of the spring semester's craft topics.",
          ],
          exercise:
            "Take three consecutive pages of your thesis draft. Read with a colored pencil, circling each instance of the nine Phase 4 figures in a different color (or marking them by name in the margin). Map the distribution: which figures appear most frequently? Which are absent? Write a 200-word reflection on what the audit reveals about the prose's rhetorical range — where it is working fully and where it is writing at only one register. Then write the 300-word synthesis passage, using at least five figures that arise naturally from the content, and annotate each figure. Remove any that feel forced. Keep the annotation alongside the passage as a record of conscious rhetorical choice.",
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
              title: "Your thesis proposal — revised if necessary",
              author: "You",
              href: "",
              note: "Required. Read the full thesis proposal — all seven sections — with fresh eyes. Try to read it as though someone else wrote it: does the governing question feel genuinely open? Does the form argument persuade? Does the sample excerpt demonstrate what the proposal claims? Mark every place where the draft has departed from the proposal — for better or worse. These departures are the most important information the portfolio review produces.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Your thesis draft pages — all of them, in sequence",
              author: "You",
              href: "",
              note: "Required. Read the draft pages produced across the seventeen fall thesis sessions in a single reading if possible — at minimum, read the first session's pages and the most recent session's pages in close dialogue. Apply the voice consistency audit: does the voice remain consistent, or has it shifted across the semester? Apply the escalation check: has each new session moved the situation into a demonstrably more difficult, urgent, or complicated position? Apply the governing question test: is the work engaging its governing question, or has it been avoiding it? Mark everything. The portfolio review is only as useful as the reading that precedes it.",
              badge: "Required",
            },
            {
              number: "03",
              title: "Your publishing plan and artist's statement — Weeks 16 and 17",
              author: "You",
              href: "",
              note: "Required. Read these two professional documents alongside the thesis proposal and draft pages. Three questions: Do the aesthetic commitments stated in the artist's statement appear in the draft pages? Does the publishing plan's description of the work's market position match what the draft pages are actually producing? Has the market research from Week 16 (the comparable titles, the target publishers or fellowships) revealed anything about the direction the thesis should take in spring? The alignment — or misalignment — between the professional documents and the draft is information about both the project and the writing.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Thesis Check-In + Spring Plan + Session 18",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Thesis Check-In (700 words): Write a document that honestly addresses the three questions from the lecture.",
            "First: Is the thesis project you proposed in Week 12 still the right project? Read the proposal and the draft in direct dialogue. Where have they converged and where have they diverged? Are the divergences discoveries or drifts? If the project has changed significantly — if the governing question has shifted, or the form has evolved, or the protagonist has become a different character — revise the proposal to reflect the current reality of the work. The proposal is a living document. Do not preserve the Week 12 proposal as an archive of original intentions; revise it to be the most accurate available description of the project as it now exists.",
            "Second: What are the three most significant structural challenges encountered so far? Name each specifically, diagnose its cause, and describe current thinking — not the solution, but the direction.",
            "Third: What will spring semester accomplish? Be specific: pages per week, sections to be completed, structural challenges to be addressed in priority order, craft skills from the fall curriculum to be applied directly to the thesis.",
            "Part Two — Thesis Session 18 (1,500–2,000 words): Write the final fall session of the thesis. In the session log, note: what has the fall semester's drafting taught you about the work that the proposal did not anticipate? What is the spring semester's first task?",
          ],
          target: "700 words (thesis check-in) + revised thesis proposal if needed + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 51 — Proposal–Draft Alignment",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your thesis proposal — the current version, revised if the work has diverged from the original — alongside the strongest pages of your thesis draft so far, ideally the opening pages and the most recent pages. The AI's task is to assess the alignment between what was proposed and what has been written.",
          prompt:
            "I am going to share my thesis proposal and a selection of pages from my thesis draft. Read both and evaluate the alignment between them. Specifically: (1) Is the work being written the work that was proposed — does the governing question stated in the proposal appear to be actively engaged in the draft pages? (2) Where has the project grown beyond or away from the proposal — what has the draft discovered that the proposal didn't anticipate, and does the discovery strengthen or complicate the project? (3) Where does the draft most successfully realize the proposal's stated ambitions — the governing question, the form argument, the protagonist or narrator as described? (4) Where does the draft fall short of the proposal's ambitions — where is the gap between what was promised and what has been delivered largest? (5) What does the draft reveal about the project that the proposal didn't say — what is the work actually about, having read the pages, that the proposal description missed or understated?",
          questions: [
            "The AI's fifth finding — what the draft reveals that the proposal didn't say: this is the portfolio review's most important finding. The work being written almost always knows more than the proposal did. If the AI identifies something the draft is doing that the proposal didn't describe, that discovery belongs in the revised proposal. Update the governing question, the form argument, or the protagonist description to reflect what the draft has found.",
            "The AI's fourth finding — where the gap between proposal and draft is largest: is this a problem with the draft (which hasn't yet achieved what the proposal promised) or a problem with the proposal (which promised something the material turned out not to require)? The answer determines whether spring semester should push the draft toward the proposal or revise the proposal toward the draft.",
            "Apply the AI's three strongest-moments identification to the spring plan: what is it about those moments that makes them work — and can the spring semester's drafting replicate those conditions more consistently? The strongest moments are the template; the spring plan should identify what produced them and pursue that deliberately.",
            "After completing the exercise, write one sentence in the session log that begins: 'The spring semester's first task is...' The sentence should be specific enough that it tells you, on the first day of Week 19, exactly what to write.",
          ],
          note: "The Proposal–Draft Alignment exercise is the fall semester's most architecturally significant AI use: it applies an external reader's perspective to the most important structural question of the semester — whether the work being written is the work that should be written. Save the AI's full response alongside the revised thesis proposal and the thesis check-in document. These three documents together constitute the portfolio review's record: what the project was, what it has become, and what it must become by the end of Year Two.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Permission to Change Direction",
      blocks: [
        {
          type: "tip",
          icon: "🧭",
          name: "If the Project Is Wrong, Change It Now — Not After Spring Semester Has Begun",
          paragraphs: [
            "If you have reached Week 18 and realized — through the portfolio review, through reading the proposal and draft in direct dialogue, through the AI's alignment assessment — that the thesis project you have been building is not the project that most urgently requires your attention, this is the moment to change direction. Not out of discouragement, not because the work has been difficult, not because the sessions have sometimes been uncertain — those are the conditions of every serious literary project. But if the governing question no longer feels genuinely open, if the form you are writing in is working against the material rather than with it, if the protagonist or narrator has refused to come to life across seventeen sessions and the refusal is not an artistic problem but a fundamental mismatch between the material and the form — now is the time to redirect.",
            "The permission to change direction is not a consolation prize for insufficient commitment. It is the program's most important structural safeguard: the recognition that seventeen sessions of drafting in the wrong direction produces material from which the right direction can be extracted, but fourteen weeks of spring semester in the wrong direction produces a thesis that may never become the work it should have been. If the project needs to change: write the new governing question, write the new form argument, revise the proposal to reflect the new direction, and begin spring semester with that clarity. The fall semester's work is not wasted — it taught you what the work actually is.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What This Year Has Surprised You With",
      blocks: [
        {
          type: "journal",
          title: "What Has Surprised You — About the Writing, and About Yourself",
          question:
            "What has surprised you most about the writing you've done this year? Not what you expected to discover — what you actually discovered. About the thesis: what does it want to be that the proposal didn't anticipate? About your voice: what does your prose do that you didn't know it could do before seventeen sessions of sustained work? About your practice: what habits have formed, what resistances have emerged, what relationship to the daily work of writing has developed across the fall semester? And about yourself: what have you learned about yourself — as a writer, as a thinker, as a person with a specific history and specific preoccupations — that you didn't know when September began? Write for twenty minutes without stopping. The surprises are the most valuable information the semester has produced. They are the residue of genuine discovery — the evidence that the work has been taking the writer somewhere rather than confirming what the writer already knew.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "This is the fall semester's final journal prompt. The spring semester begins with Week 19 — Entering the Thesis — and the journal prompts will shift in register: more focused on the thesis work itself, more specifically diagnostic, more concerned with the practical and emotional conditions of sustaining a long-form project across fourteen weeks. The fall semester's journals have been exploratory; the spring semester's will be more architectural. Keep the fall journals. Read them at the end of spring to see what you knew in Week 18 that you will have forgotten by Week 36.",
          ],
        },
      ],
    },

    {
      id: "summary",
      label: "Fall Semester Complete",
      title: "What the Fall Semester Has Built",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "The fall semester of Year Two is complete. Eighteen weeks of craft study, professional development, and thesis drafting have produced: the thesis proposal (Week 12), the publishing plan (Week 16), the artist's statement (Week 17), the thesis check-in and spring plan (Week 18), and approximately 27,000–36,000 words of combined thesis material, craft exercises, analytical writing, and journal entries. The grammar curriculum has completed Phase 3 (phrases and constructions, Weeks 1–9) and Phase 4 (rhetorical figures, Weeks 10–18), with Phase 5 (punctuation as craft) beginning in Week 19.",
          ],
        },
        {
          type: "card",
          title: "Spring Semester Begins — Week 19",
          paragraphs: [
            "Week 19 is Entering the Thesis — Sustained Work on a Single Project. Spring semester is organized differently from every other semester in the program. The focus shifts decisively toward sustained work on the thesis manuscript. Weekly writing targets increase: 1,500–3,000 words of thesis-related material per week. The craft curriculum covers experimental and hybrid forms, revision at scale, character arc, minimalism and maximalism, master sentence analysis, advanced characterization, voice development synthesis, and the ethics of nonfiction — all directed toward the specific challenges the thesis project presents. Phase 5 punctuation figures begin with the em dash. The spring semester's first task is written in the session log at the end of Week 18. Carry it forward.",
          ],
        },
      ],
    },
  ],
};
