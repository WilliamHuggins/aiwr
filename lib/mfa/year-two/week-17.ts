import type { WeekData } from "@/lib/mfa/types";

export const week17Data: WeekData = {
  weekNumber: 17,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Professional Development II — Craft, Career & the Writer's Life",
  emphasizedWord: "The Writer's Life",
  deck: "The writing life is not only about producing manuscripts — it is about building a sustainable relationship with the work over decades. This week considers the professional infrastructure of a literary career: teaching writing, grant and fellowship applications, literary community and its cultivation, the difference between a writing career and a publishing career, and what 'success' actually means in literary terms.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "53 of 108" },
    { label: "Craft Focus", value: "Career & Community" },
    { label: "Grammar", value: "Phase 5 Begins · The Semicolon" },
    { label: "Key Deliverable", value: "Artist's Statement" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Long Game — Sustainability, Community, and What Success Actually Means",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Most discussions of literary career success are organized around publication — the first book, the award, the prize list, the review in the right place. These milestones are real, and they matter. But the career is longer than the milestones, and the milestones are rarer than the years between them. A writer who defines success exclusively in terms of publication is a writer who will spend most of their career feeling unsuccessful, because the years between significant publications are longer than the publications themselves. The alternative is a definition of success organized around practice rather than outcome: the sustained relationship with the work, the habit of attention maintained across decades, the community of readers and fellow writers built patiently over time, the body of work that grows because the writer has not stopped — not because every piece has found its audience but because the writing continues regardless.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This is not a consolation argument for writers who have not been published. It is a structural description of what a writing life actually looks like for almost every serious writer — including the ones whose careers appear, from the outside, to be defined by their publications. Toni Morrison was raising two children and editing manuscripts at Random House while writing *The Bluest Eye* and *Sula*. Raymond Carver was working as a janitor, a sawmill worker, a delivery driver while writing the stories that became *Will You Please Be Quiet, Please?* The publication history that looks like a career from the outside is, from the inside, the punctuation in a continuous practice. The practice is the career. The publications are the punctuation.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The most effective creative writing teachers teach from their own practice, not from abstract principle. Your teaching philosophy should be grounded in what you have learned through your own work: specific craft discoveries, specific difficulties you've solved, specific methods that have worked for you.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Pillars of a Sustainable Literary Career",
          paragraphs: [
            "Teaching writing — the primary income source: for the majority of MFA graduates who pursue literary careers, teaching writing is the primary income source, often throughout their entire working life. This is not a failure mode — it is the structure of the literary economy, and it has produced some of the most important literary writers of the last century. The teacher who is actively writing and publishing brings to the classroom a relationship with craft that is immediate rather than historical — they are not teaching what they once learned but what they are still learning. The teaching informs the writing (articulating craft concepts clearly forces a precision that improves the writer's own practice) and the writing informs the teaching (the writer who is currently solving specific craft problems brings those problems to the classroom with the authority of the practitioner). The academic job market for MFA graduates: positions are competitive and the market contracts periodically; adjunct teaching is often the entry point; creative writing programs at community colleges, universities, MFA programs, and non-academic writing programs (Grub Street, Hugo House, community arts organizations) are all viable contexts. Teaching is not the fallback when writing fails — it is often the structure that makes the writing possible.",
            "Grants and fellowships — the financial architecture: grants and fellowships serve a specific function in the literary economy: they buy time. The National Endowment for the Arts (NEA) Literature Fellowships, the Guggenheim Fellowship, state arts council grants, genre-specific fellowships (PEN/Faulkner, Lambda Literary, Rona Jaffe Foundation, Whiting Award), and residency fellowships (MacDowell, Yaddo, VCCA, Ragdale, Hedgebrook) all exist to give writers the uninterrupted time that a regular job does not provide. Applications require two things: a body of work (published work or a strong excerpt from a work-in-progress) and a project description (which is a version of the thesis proposal — the same five elements, the same clarity of governing question and form argument). Begin applying to grants and fellowships before you believe you are ready. The application process itself is a discipline of clarity about the work. The rejection rate is high for everyone; the writer who applies consistently over years will eventually receive support.",
            "Literary community — the invisible infrastructure: literary community is the infrastructure that most writers acknowledge only in hindsight, when they realize that every opportunity — the agent who agreed to look at the manuscript, the magazine that published the first essay, the residency that produced the breakthrough chapter — arrived through a relationship rather than a cold submission. Literary community is built slowly, through sustained engagement: through attending readings and being present in literary spaces, through publishing in literary magazines (which connects the writer to editors and fellow contributors), through MFA workshops and alumni networks, through online writing communities and social media presences that are genuinely engaged rather than promotional, through the cultivation of fellow writers whose work you respect and whose respect for your work is returned. The most important relationship in many literary careers is the sustained peer relationship with two or three other serious writers — the readers who know the work in process and whose judgment the writer trusts. These relationships are built one at a time, over years, and they are among the most valuable things a writing life produces.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The artist's statement — this week's key deliverable — is the professional document that cuts across all three pillars. Grant applications require it. Residency applications require it. MFA teaching positions require it. It is the document in which the writer describes not a specific project but themselves as a writer: their concerns, their influences, their aesthetic commitments, the relationship to their material, and — the hardest sentence to write — why they do this work. The artist's statement is harder to write than the thesis proposal because it has no external structure to lean on. The thesis proposal has seven sections; the artist's statement has only the writer's sense of what matters most about how and why they write. The writer who cannot state their aesthetic commitments in 500 words has not yet arrived at sufficient clarity about what those commitments are. Writing the artist's statement is an act of self-knowledge — and the failure mode, as with the proposal, is generality.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Career Structures by Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction writer's primary institutional affiliation is usually the university — through teaching creative writing at the undergraduate or MFA level. The academic job market for fiction writers is organized around publications (the more prestigious the press and the more significant the critical reception, the more competitive the candidacy) and teaching experience. The visiting writer position — a one- or two-year appointment at a university — is typically the first academic position, and it requires both a book and some teaching experience. Before the book: adjunct teaching, workshop facilitation at literary arts organizations, teaching in prisons and community settings, and programs like Writers in the Schools (WITS) and similar school-partnership programs are all legitimate teaching experience that builds the CV. Literary residencies — MacDowell, Yaddo, VCCA, Hedgebrook, Breadloaf — provide uninterrupted writing time and, over time, a community of fellow writers who become lifelong interlocutors. Apply for residencies before you believe you are ready; the application is the practice.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter's career structure is the most institutionally specific of the three tracks: the writers' room, the fellowship pipeline, the spec script, the manager/agent relationship. Teaching is less central to the screenwriting career than to the fiction career — most working screenwriters are employed in the industry rather than in academia, though screenwriting programs at universities do employ practitioners. Grants for screenwriters: the Nicholl Fellowship is the most prominent; the Sundance Institute, Austin Film Festival, and BAFTA Newcomers program are also significant. For playwrights, the regional theater system is the primary professional community — residencies at theaters (Playwrights Horizons, The Public Theater, Arena Stage, the Goodman) are more important than academic appointments, and the development of a new play through readings, workshops, and staged readings before production is the primary professional process. The Dramatists Guild is the playwright's equivalent of the WGA: membership provides access to standard contracts, community resources, and professional protection.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The CNF writer's career often involves a combination of teaching (as with fiction writers), journalism and freelance writing (essay and reported work for magazines and digital outlets), and book-length memoir. The platform question — raised in Week 16 as a publishing consideration — is also a career question: the CNF writer's platform (their presence as an essay writer, speaker, or public intellectual in their subject area) is what gives the memoir proposal its authority and the book its marketing context. Literary magazines are the primary professional community for the essay writer: Tin House, The Believer, The Sun, The Rumpus, Guernica, Longreads, Catapult — these are the venues in which the essay writer builds the publication record that supports the book proposal and the grant application. The personal essay has experienced a significant renaissance in literary culture over the last decade; the CNF writer who publishes consistently in literary magazines while building toward the book is in a stronger professional position than the writer who publishes rarely but aims exclusively at book publication.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 5 Begins — The Semicolon: Implied Relationship Without Named Connection",
      blocks: [
        {
          type: "grammar",
          title: "Phase 5 · Topic 1 of 12 — The Semicolon: The Most Rhetorical Punctuation Mark",
          intro: [
            "Phase 5 of the grammar curriculum addresses punctuation as craft — as a set of tools with specific rhetorical effects rather than a set of rules to be followed correctly. The semicolon is Phase 5's first figure because it is simultaneously the most misused, the most avoided, and the most rhetorically powerful mark in the writer's toolkit.",
            "The semicolon joins two independent clauses without a conjunction; it implies a relationship between them without naming it. This is its power and its challenge: where the conjunction ('and,' 'but,' 'because,' 'although') names the relationship explicitly, the semicolon gestures toward a relationship that the reader must complete. The relationship might be comparison ('She stayed; he left'), causation ('He had nothing to say; he spoke for forty minutes'), ironic juxtaposition ('She believed in honesty; she was a very good liar'), or the quiet completion of a thought that a period would close too finally. The semicolon is formal, deliberate, and slightly old-fashioned — which makes it effective in the right context precisely because it signals that the writer has chosen this connection over the more available options.",
          ],
          rule: "The semicolon works when the implied relationship between the two clauses is more interesting than any named relationship would be — when the gap the semicolon creates is productive, when the reader's movement across that gap adds meaning to both clauses. It fails when the implied relationship is either too obvious (so that the semicolon is merely a pretentious period) or too obscure (so that the reader cannot complete the connection the writer intended). Dreyer's *English* advises 'When in doubt, don't.' This is good advice for inexperienced semicolon users who reach for it as a grammatical upgrade. The writer who has studied rhetorical punctuation should follow a different rule: when the implied relationship is more powerful than any named relationship, use the semicolon. When it isn't, use the period.",
          examples: [
            {
              label: "Causation — the semicolon as 'therefore' that refuses to name itself",
              text: "'He had nothing to say; he spoke for forty minutes.' [The period would simply end the first observation. The conjunction 'and yet' would name the irony. The semicolon implies the irony without naming it — the reader performs the connection, and the performance is part of the effect. The semicolon makes the reader complicit in the observation.]",
            },
            {
              label: "Ironic juxtaposition — the most powerful semicolon use",
              text: "'She believed in honesty; she was a very good liar.' [The semicolon creates the irony by refusing to explain it. A conjunction would diminish the effect: 'She believed in honesty, although she was a very good liar' names the contradiction and thereby controls the reader's response. The semicolon presents the contradiction and steps back, trusting the reader to feel the gap.]",
            },
            {
              label: "Comparison — the semicolon as formal balance",
              text: "'The city was enormous; his life was small.' [The semicolon's symmetry — clause; clause — performs the comparison visually and rhythmically. The balance of the two clauses across the semicolon creates the formal equivalent of a scales: the city's enormity on one side, his smallness on the other, the semicolon as the pivot point between them.]",
            },
            {
              label: "The soft completion — semicolon as alternative to the period",
              text: "'She waited for the door to open; she had been waiting, in various ways, for most of her life.' [The period after 'open' would close the observation completely. The semicolon opens it: the second clause recontextualizes the first, revealing that the waiting in the doorway is not a discrete event but a recurrence. The semicolon says: this moment is continuous with something larger.]",
            },
            {
              label: "Failure mode — the semicolon as pretentious period",
              text: "Failing: 'She walked into the room; it was empty.' [The relationship between the two clauses is sequential, not implied — there is no gap for the reader to cross, no relationship more interesting than mere sequence. A period or 'and' would serve equally well. The semicolon here signals stylistic intention without producing rhetorical effect — the grammatical equivalent of a dinner jacket at a casual restaurant.] Better: 'She walked into the room. It was empty.' Or, if the emptiness is the irony: 'She had expected to find him; the room was empty.'",
            },
          ],
          outro: [
            "The six semicolon modes for this week's exercise: comparison (two clauses in formal balance), causation (the second clause as the consequence the first implies), concession (the first clause acknowledged, the second complicating it), irony (the first clause's claim undercut by the second), continuation (the second clause extending rather than completing the first), and contrast (the two clauses in explicit opposition). Each mode produces a different rhetorical effect, and the writer who can distinguish between them has conscious control over one of prose's most subtle instruments.",
            "The connection between the semicolon and this week's career focus: the artist's statement uses the semicolon when the relationship between two aspects of the writer's aesthetic — their concerns and their form, their influences and their departures from them — is implied rather than named. The artist's statement that names all its relationships explicitly ('I write about grief because I experienced loss; I use fragmented form because fragmentation mirrors grief') is less interesting than the statement that trusts the implied connection. The semicolon is the punctuation of implication; the artist's statement is the document of aesthetic implication.",
          ],
          exercise:
            "Write six semicolon sentences using subjects from your thesis or from your account of your own writing practice — one for each mode: comparison, causation, concession, irony, continuation, and contrast. After writing, identify which mode appears most frequently in your thesis draft's current pages. Is the frequency intentional — are those modes the right ones for the material? Or has the semicolon been used mechanically, without attention to which relationship is being implied?",
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
              title: 'Bird by Bird, "Radio Station KFKD"',
              author: "Anne Lamott",
              href: "https://bookshop.org/p/books/bird-by-bird-anne-lamott/6697453",
              note: "Purchase (continuing from Year One). Lamott's 'Radio Station KFKD' chapter — the one about the internal voice that broadcasts equally loud signals of grandiosity and self-contempt — is the most accurate available account of the writer's psychological environment, and the most useful corrective to the career-success orientation that Weeks 16 and 17 risk encouraging. Read it as a counterweight to the publishing landscape and the artist's statement: the work is not the career, and the career is not the work, and the voice that confuses the two is KFKD. Read before writing the artist's statement.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Chronicle of Higher Education or Poets & Writers — academic job market articles",
              author: "Various",
              href: "https://www.chronicle.com",
              note: "Free online (some paywalled) or library. Read current articles on the academic job market for creative writing positions — specifically the MFA job market as it currently exists, not as it existed a decade ago. The market has contracted significantly since 2008 and contracted further since 2020; the writer who enters the job market with accurate information about what is available and what is required makes better preparation decisions than the writer who operates on outdated assumptions. The Chronicle's 'Vitae' section and Poets & Writers' academic market coverage are both useful.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Research: three active grants and fellowships in your genre",
              author: "NEA / Guggenheim / state arts councils / genre-specific awards",
              href: "https://www.arts.gov/grants/creative-writing",
              note: "Free online. Spend one hour researching three active grant or fellowship opportunities specifically relevant to your genre and career stage. The NEA Literature Fellowships, Guggenheim Fellowships, Whiting Awards, Rona Jaffe Foundation Grants, and state arts council fellowships (which vary significantly by state) are the primary general-audience options; genre-specific fellowships (PEN/Faulkner for fiction, Lambda Literary for LGBTQ+ writers, MacDowell and Yaddo for residency support) are often more accessible for emerging writers. For each opportunity found: note the application requirements, the deadline, the award amount or duration, and whether your current work-in-progress would make a competitive application. This research will inform the artist's statement and begin the grant application calendar.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Artist's Statement + Thesis Session 17",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Artist's Statement (500 words + 300-word reflection): Write a 500-word artist's statement — the kind required for grant applications, residency applications, and MFA teaching positions. Unlike the thesis proposal, which is about a specific project, the artist's statement is about you as a writer: your concerns, your influences, your aesthetic commitments, your relationship to your material, and why you write.",
            "The artist's statement has no external structure to lean on — no seven sections, no prescribed content. Its only requirement is that every sentence be specific enough that it could not have been written by any other writer. The generic statement ('I am interested in the complexity of human experience and the power of storytelling to create empathy') tells the grant committee nothing about this writer; the specific statement ('I write about the particular form of homesickness that belongs to people who can return to where they came from but no longer belong there — the suspended condition of the person who has changed too much for the home that has not changed enough') tells the committee something only this writer could say.",
            "Write the statement, then apply the genericity test: read every sentence and ask whether it could have been written by any other literary writer working in your genre. Every sentence that could — circle it. Rewrite every circled sentence with a specific — a specific influence named, a specific formal commitment articulated, a specific element of your material described, a specific thing only your writing does.",
            "After revising, write a 300-word reflection on what was difficult to articulate: what do you find hardest to explain about why you do this work? The hardest sentence to write in the artist's statement is usually the most important one — the sentence that has been avoided because it is too honest or too particular or too committed. Write the reflection toward that sentence rather than away from it.",
            "Part Two — Thesis Session 17 (1,500–2,000 words): Write the next section of the thesis. In the session log, note whether the clarity the artist's statement forced about your aesthetic commitments has changed anything about how the session began — whether naming the commitments made the writing more or less free.",
          ],
          target: "500 words (artist's statement) + 300 words (reflection) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 50 — The Grant Committee Reader",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your completed artist's statement. The AI's task is to read it as a grant committee member — a rigorous, skeptical reader who has seen many artist's statements and whose job is to identify which writers have genuine aesthetic clarity and which are performing clarity they do not yet possess.",
          prompt:
            "Read this artist's statement critically, as a grant committee member who has read five hundred artist's statements this year and can immediately distinguish between genuine aesthetic self-knowledge and performed self-knowledge. Identify: (1) Where the writer's voice is most present and convincing — the specific sentence or passage where this writer's aesthetic is most precisely and most distinctively articulated; (2) Where the language is generic or could have been written by any literary writer working in this genre — circle every sentence that fails the specificity test; (3) Whether the stated aesthetic commitments are legible in the sample work already shared (if I were reading the thesis proposal's sample excerpt alongside this statement, would I recognize the same writer in both?); (4) One question a grant committee would want answered that this statement doesn't answer — the question whose answer would most change the committee's understanding of why this writer is writing this work.",
          questions: [
            "Where does the AI locate the statement's most present and convincing voice? Is that the sentence you would have identified — is it the one you worked hardest on, or is it one that arrived more easily? The sentence that arrived easily is often the most genuine; the sentence worked hardest on is often the one that was being written toward rather than from.",
            "The circled sentences — the ones the AI identifies as generic: rewrite every one of them with the specificity the statement requires. This rewrite is not optional; the grant committee reader does not give credit for generic statements about universal human experience. Revise until every sentence fails the genericity test in the other direction — until each sentence is so specific that it is slightly surprising, slightly more committed than felt comfortable.",
            "The AI's fourth finding — the question a grant committee would want answered that the statement doesn't answer: write a 150-word response to that question. Then decide whether the response belongs in the statement itself (if yes, add it) or is background that the statement doesn't need (if no, keep it as a craft note for future versions of the statement).",
            "Apply the same AI prompt to a 400-word excerpt from your thesis draft alongside the artist's statement: are the aesthetic commitments stated in the statement legible in the excerpt? Where they are not — where the statement claims a formal commitment that the excerpt does not demonstrate — is the gap a problem with the statement (which overclaims) or a problem with the excerpt (which underproduce the commitment)? The answer to this question tells you which document needs revision.",
          ],
          note: "The Grant Committee Reader exercise uses the AI in the mode most appropriate for the artist's statement's professional function: as a rigorous external reader whose standards are high and whose tolerance for generic language is zero. The AI grant committee reader is not a sympathetic first reader — it is an efficient sorter of candidates. Its assessment of where the statement succeeds and where it defaults to generic literary language is the most useful available feedback on whether the statement is ready to be submitted. Save the revised statement alongside the thesis proposal as the program's second key professional document.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Generic Statement Alert — Applied to the Artist's Statement",
      blocks: [
        {
          type: "tip",
          icon: "🎯",
          name: "Circle Every Sentence That Could Have Been Written by Anyone Else",
          paragraphs: [
            "Artist's statements fail most commonly through generality. 'I am interested in the complexity of human experience and the power of storytelling to create empathy.' Every literary writer is. 'I write about family, memory, and identity.' Every memoirist does. 'I am drawn to marginalized voices and believe fiction can challenge dominant narratives.' This describes approximately half of all literary fiction published in the last twenty years. None of these sentences tell the grant committee anything about this writer — they tell the committee something about the genre, the period, or the marketing category the writer belongs to.",
            "The effective artist's statement is specific in every sentence. Specific influences: not 'I am influenced by the modernist tradition' but 'the syntax of Woolf's *To the Lighthouse* taught me that consciousness is not a stream but an architecture, and I have spent the last three years trying to build architectural prose that thinks.' Specific formal commitments: not 'I am interested in experimental form' but 'I use the second person in this book because the second person refuses the reader the comfortable distance that first person allows; it implicates.' Specific material: not 'I write about immigration and belonging' but 'I write about the two years my mother spent in an apartment in Queens where she spoke to no one in English and everything she said sounded like something else.' Read every sentence of the artist's statement and circle every one that could have been written by someone other than you. Rewrite every circled sentence until it cannot be mistaken for anyone else's.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You Want Your Writing Life to Be in Ten Years",
      blocks: [
        {
          type: "journal",
          title: "In Ten Years — Not the Publications, the Practice",
          question:
            "In ten years, what do you want to be true of your writing life? Not the awards or publications — those are uncertain and partly outside your control — but the actual practice. What kind of writer do you want to be in ten years? What does the work look like — how many hours a week, what kind of material, what relationship to revision, what relationship to the reader? What does the professional life look like — teaching, or not; grants and residencies, or not; a literary community, or working more alone? What has the thesis become by then — a published book, or a foundation for later work, or something that taught you what you needed to know to write the real thing? And: is the writing life you are actually building, week by week, the one that leads to the life you want in ten years? If not, what would you change? Write for twenty minutes without stopping. The practice is the career. The career is what you do every day.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is the counterweight to the professional development content: where Weeks 16 and 17 have focused on external structures (the market, the grants, the teaching career), the journal prompt focuses on the internal one — the writer's relationship to the work as a daily practice across decades. The external structures are means; the practice is the end. The writer who knows what they want the practice to look like in ten years has a compass for evaluating every professional decision in the years between now and then.",
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
            "By the end of this week you should have: written the 500-word artist's statement with the genericity test applied and every generic sentence revised toward specificity; written the 300-word reflection on what was hardest to articulate; written 1,500–2,000 words of thesis in Session 17 with the artist's statement's clarification of aesthetic commitments noted in the session log; read Lamott's 'Radio Station KFKD' before writing the statement; read current articles on the academic job market for creative writing positions; researched three active grant and fellowship opportunities with eligibility and deadline notes; completed the Grant Committee Reader exercise and written the 150-word response to the AI's unanswered question; applied the AI prompt to the thesis excerpt and identified whether the gap between statement and excerpt is a statement problem or an excerpt problem; written six semicolon sentences in the six modes (comparison, causation, concession, irony, continuation, contrast) with mode identified for each.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 18",
          paragraphs: [
            "Week 18 is Fall Year Two Portfolio Review — the last week of the fall semester. By now you have a thesis proposal, a publishing plan, an artist's statement, approximately 17 thesis sessions of drafted material, and 18 months of craft development. Week 18 is a full portfolio review that asks a new question: not 'How have I grown as a writer?' but 'What is this thesis project and is it the right project?' This is the last moment before the spring semester's intensive thesis drafting to reconsider, redirect, or confirm the direction. Week 18 also produces the Phase 4 Synthesis — a full rhetorical figures audit of three pages of the thesis draft — and closes the fall semester.",
          ],
        },
      ],
    },
  ],
};
