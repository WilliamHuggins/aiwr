import type { WeekData } from "@/lib/mfa/types";

export const week16Data: WeekData = {
  weekNumber: 16,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Professional Development I — The Publishing Landscape",
  emphasizedWord: "The Publishing Landscape",
  deck: "The thesis project exists not in a vacuum but in a literary marketplace — a complex ecosystem of publishers, agents, editors, literary magazines, film studios, and theatrical producers. Understanding that ecosystem is part of the craft: the best work is shaped in part by clarity about where it belongs and who needs to read it. This week maps the publishing landscape as it currently exists, with attention to how the market has changed in the last decade.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "52 of 108" },
    { label: "Craft Focus", value: "Publishing Landscape" },
    { label: "Grammar", value: "Phase 4 · Chiasmus · Phase 5 Preview" },
    { label: "Key Deliverable", value: "Publishing Plan" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Market Is Not the Enemy of the Work — It Is the Work's Destination",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The literary tradition has long maintained a productive ambivalence about the relationship between art and commerce: the work must be pure, unmotivated by market considerations, written toward the truth rather than toward the sale — and yet the work must also find readers, must be published, must enter the world through one of the existing channels for literary commerce. Most MFA training emphasizes the first half of this formulation and largely ignores the second, on the grounds that thinking about the market corrupts the creative process. This view has produced generations of writers who are sophisticated about craft and naive about the conditions under which their work will or will not reach readers.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The alternative is not to write toward the market — to let commercial considerations shape the work's content or form. The alternative is to understand the market well enough to make informed decisions about where the completed work belongs and how to position it for the readers it needs. The writer who knows that their experimental novel-in-fragments will find a more receptive home at Graywolf or Tin House than at Knopf has not compromised their artistic vision; they have saved themselves a year of misdirected submissions. The screenwriter who knows that the Sundance Lab is the right development context for their intimate character drama has not sold out; they have identified their work's natural community. Professional knowledge of the publishing landscape is not a compromise of literary values — it is the application of the same clarity and precision the writer brings to the prose.",
          ],
        },
        {
          type: "pullquote",
          quote: "The comparable titles discipline forces you to understand where your work sits in the existing literary landscape — and sometimes reveals that the work is more derivative than it should be, or more singular than you realized.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Three Tracks — Maps of the Current Market",
          paragraphs: [
            "Literary Fiction: The literary fiction market has three primary paths. The Big Five publishers (Penguin Random House, HarperCollins, Simon & Schuster, Hachette, Macmillan) acquire literary fiction but typically prefer commercially viable work from established or high-profile debut writers; they are reached almost exclusively through literary agents. The independent press ecosystem — Graywolf, Tin House, Restless Books, Coffee House, Milkweed, Catapult, Two Dollar Radio, Restless Books, and dozens more — is where most serious literary fiction by debut and mid-career writers is published; many independent presses accept unagented submissions during specific windows. The literary magazine ecosystem (The Paris Review, Tin House, Ploughshares, One Story, The Kenyon Review, Zoetrope, A Public Space, McSweeney's, and hundreds of smaller journals) is where short fiction and essay enter the conversation first and where a writer builds the publication record that supports a book submission. The role of the MFA thesis in this ecosystem: it is the foundation from which the first book submission is built, and its sample sections are often the first material submitted to literary magazines.",
            "Screenwriting: The screenwriting market divides between the feature film path and the television path, with the independent film path as a third option. Representation is almost always required — literary managers and agents are the gatekeepers of the studio and network systems, and cold submissions to production companies rarely succeed. Fellowships are the primary entry point for emerging screenwriters: the Disney Diversity Program, ABC Discovers, NBC Writers on the Verge, the Sundance Screenwriting Lab, the Austin Film Festival Fellowship, and the Academy Nicholl Fellowships are the most competitive and most career-launching. The writers' room is the television career's primary structure: most television writers begin as assistants or staff writers and work their way toward showrunner over many years. The spec script — an original pilot or spec episode of an existing show — is the primary audition document. WGA registration does not constitute copyright registration but does establish the date of creation.",
            "Creative Nonfiction and Memoir: The CNF market has two primary paths. Literary magazines — The Sun, Creative Nonfiction, Brevity, Longreads, The Believer, Guernica, The Rumpus — publish essays and memoir excerpts and are the primary proving ground for the voice and subject of a book-length memoir. The book-length memoir market requires agent representation for the Big Five and is reachable through independent presses without an agent; crucially, the memoir is sold on proposal rather than on completed manuscript, which means the memoir writer must write the proposal before the book is finished. The platform question is specific to CNF: publishers want evidence that the writer has an audience — through previous publication, social media presence, speaking engagements, or professional authority in the memoir's subject area. The essay collection is a harder sell than the single-subject memoir; most essay collections require either a strong previous book or an extremely well-defined thematic architecture.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The publishing plan — this week's key deliverable — is not a formal document or a business plan. It is a thinking exercise: a 600-word account of where the thesis belongs in the current marketplace, who its ideal publisher or producer is, what comparable titles have succeeded recently in the same space, and what the query letter or pitch will emphasize. The thinking the plan requires — the identification of comparable titles, the articulation of the work's market position, the understanding of which publishers or fellowships or magazines are the right destinations — is thinking that should have begun well before submission. The plan written now will be revised as the work develops; the thinking will not be wasted.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Professional Ecosystems — What Each Track Needs to Know",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary agent is the fiction writer's primary professional relationship with the publishing industry. Agents represent writers' work to publishers, negotiate contracts, and manage subsidiary rights (foreign rights, film rights, audio rights). The query letter — a one-page letter addressed to a specific agent, pitching a specific book — is the primary method of seeking representation. QueryTracker and QueryShark are essential resources: QueryTracker compiles agent wishlists and recent acquisition data; QueryShark (run by literary agent Janet Reid) provides detailed critiques of real query letters and is the best available education in query letter craft. The Pushcart Prize anthology and Best American series are the literary magazine ecosystem's primary recognition mechanisms; a Pushcart nomination or Best American selection is the most valuable publication credit for a literary fiction or essay writer seeking agent representation.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The Nicholl Fellowship — awarded annually by the Academy of Motion Picture Arts and Sciences to five emerging screenwriters — is the most prestigious and career-defining fellowship in screenwriting. Its application requires a feature-length screenplay; finalists and winners receive significant industry attention and often representation shortly after the announcement. The Sundance Screenwriting Lab focuses on independent and character-driven feature narratives. The Austin Film Festival's screenplay competition is the most accessible major competition and produces strong industry contacts. For playwrights, the Sundance Theatre Lab, the O'Neill National Playwrights Conference, and the Jerome Foundation fellowships are primary development contexts. The spec pilot — an original television pilot, typically 45–60 pages for a drama — has largely replaced the spec episode of an existing show as the primary television industry audition document.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir proposal is the CNF writer's primary professional document — more important, in terms of the book deal, than the completed manuscript. A memoir proposal typically includes: an overview (the book's subject, argument, and emotional arc in two to three pages); a chapter-by-chapter outline; a market analysis with comparable titles; an author platform section (who you are, who reads you, why you have the authority and audience for this book); and 50 pages of sample material. The proposal is what agents and editors evaluate; the book deal is frequently made before the manuscript is complete. Jane Friedman's website (janefriedman.com) is the most current and authoritative free resource for understanding how the nonfiction publishing process works — her 'Overview of Publishing Paths' is required reading this week.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 · Topic 7 — Chiasmus + Phase 5 Preview: The Em Dash",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 51 of 60 — Chiasmus: The Rhetoric of Reversal + Phase 5 Preview",
          intro: [
            "Chiasmus reverses the grammatical structure of two successive phrases, creating a formal symmetry that feels like completion — the figure turns back on itself, and in turning back, arrives at a kind of rhetorical inevitability. Kennedy's 'Ask not what your country can do for you — ask what you can do for your country' is chiasmus: the first clause establishes 'country → you,' the second reverses to 'you → country.' The reversal is not merely elegant — it performs the argument. The figure embodies the very principle of civic responsibility it is stating: the reversal of subject and object models the reorientation of attention from self to community.",
            "Antimetabole is chiasmus's most concentrated form: it repeats the same words in reversed order rather than reversing grammatical structure while varying the words. 'When the going gets tough, the tough get going.' 'Nice guys finish last; last guys don't finish nice.' The word-reversal creates a sense of epigrammatic completion that is difficult to produce by other means — the figure closes on itself like a combination lock clicking into place.",
          ],
          rule: "Chiasmus earns its formality when the reversal performs the meaning rather than merely decorating it. The Kennedy example works because the reversal embodies the civic argument — the grammatical reversal and the thematic reversal are the same movement. Chiasmus fails when the reversal is arbitrary — when the figure reverses structure without the content having any relationship to reversal. The test: if you removed the chiasmus and stated the same idea in a direct sentence, would something essential be lost? If yes — if the reversal is doing argumentative or thematic work — the figure is earning its formality. If no — if the reversal is purely aesthetic — the figure is decoration. Decoration announces the writer rather than serving the work.",
          examples: [
            {
              label: "Chiasmus performing its argument — Kennedy's reversal analyzed",
              text: "'Ask not what your country can do for you — ask what you can do for your country.' [The grammatical structure of the first clause: 'country → you (recipient).' The grammatical structure of the second: 'you → country (recipient).' The reversal does not merely state the principle of civic obligation — it enacts it. The reader who follows the syntactic movement has already performed, in reading, the reorientation of attention the sentence is asking for. The grammar is the argument.]",
            },
            {
              label: "Antimetabole — the same words reversed",
              text: "'She didn't live to write; she wrote to live.' [The reversal of 'live' and 'write' produces an epigrammatic closure that a direct statement cannot: 'She wrote in order to survive financially, not out of artistic devotion' would convey the same information but none of the figure's rhetorical satisfaction. The antimetabole works because the word-reversal captures the irony of the situation — the same two activities, with their relationship reversed.]",
            },
            {
              label: "Chiasmus in literary prose — more subtle and structural",
              text: "'He was a man who had learned everything except how to stop learning; she was a woman who had stopped learning in order to know something.' [A loose chiasmus: 'learn → stop learning / stop learning → know.' The reversal is not strict, but the crossing structure creates the opposition between the two characters — one trapped by endless inquiry, the other having achieved a stability the first cannot reach. The figure enacts the comparison it is making.]",
            },
            {
              label: "Phase 5 Preview — The Em Dash: Interruption, Amplification, Pivot",
              text: "Phase 5 begins Week 19 with punctuation as craft. The em dash is the most emphatic and flexible mark in the toolkit — it functions differently from parentheses (which whisper) and commas (which include neutrally). The dash interrupts, with emphasis. Three uses: interruption ('She would have done it — she knew she would have done it — if he hadn't called'); amplification ('The room was quiet — perfectly, unbearably quiet'); pivot ('He was her father — he was also, by any accounting, a stranger'). Note that the em dash is formatted without spaces on either side of it, unlike the en dash (–) used for ranges. Practice this week: use the em dash in each of its three modes.",
            },
          ],
          outro: [
            "Chiasmus closes Phase 4's inventory of rhetorical figures — parallelism, anaphora, epistrophe, symploce, polysyndeton, asyndeton, parataxis/hypotaxis, chiasmus. Each figure is a specific rhetorical instrument with a specific effect, a specific earning condition, and a specific failure mode. The writer who can use all eight figures consciously and appropriately has the full Phase 4 toolkit. Phase 5 begins in Week 19 with punctuation as craft — a new understanding of the marks that govern the rhythm, pace, and emphasis of every sentence.",
            "The connection between chiasmus and this week's publishing focus: the publishing plan requires the writer to state the work's position in the marketplace with a kind of chiastic precision — to say, in effect, 'this work is like these comparable titles, but it reverses the relationship between [element] and [element] in a way that makes it new.' The comparable titles analysis is a form of chiasmus: the work is in conversation with what came before it, and the relationship between the new work and its predecessors is the reversal that justifies the new work's existence.",
          ],
          exercise:
            "Write three chiastic sentences about subjects from your thesis — one using strict antimetabole (the same words reversed), one using structural reversal with varied words, and one using the looser chiastic structure in which two characters or situations are placed in crossing relationship. Apply the earning test to each: does the reversal perform the meaning, or is it decoration? Then write one sentence using the em dash in each of its three modes (interruption, amplification, pivot) — these are preparation for Phase 5, which begins in three weeks.",
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
              title: "Poets & Writers Magazine — current issue",
              author: "Editors of Poets & Writers",
              href: "https://www.pw.org/magazine",
              note: "Purchase or library. The current issue provides the most reliable available snapshot of the literary publishing landscape: which presses are acquiring, which agents are active, what the submission landscape looks like right now. Read the full issue with the publishing plan exercise in mind: where does your thesis fit in the landscape this issue describes? Pay particular attention to the 'Agents & Editors' columns and any feature articles on the state of specific genres or subgenres.",
              badge: "Purchase / Library",
            },
            {
              number: "02",
              title: "Adventures in the Screen Trade",
              author: "William Goldman",
              href: "https://bookshop.org/p/books/adventures-in-the-screen-trade-william-goldman/8409317",
              note: "Purchase. Still the essential account of how Hollywood actually works — not as it appears from the outside but as a working screenwriter experiences it from inside. Goldman's account of the relationship between the writer, the studio, and the production process is as accurate today as when it was written, because the structural dynamics he describes (the writer's powerlessness over the final product, the collaborative nature of the medium, the randomness of what gets made and what doesn't) have not fundamentally changed. Screenwriters: read the first half this week. LF and CNF writers: read the opening chapter for Goldman's account of why 'nobody knows anything' — one of the most useful formulations of the publishing industry's fundamental unpredictability.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: '"A Beginner\'s Guide to Literary Magazines" + Jane Friedman\'s publishing overview',
              author: "Poets & Writers / Jane Friedman",
              href: "https://janefriedman.com/key-book-publishing-paths/",
              note: "Both free online. The P&W guide to literary magazines is the most comprehensive available introduction to the literary magazine ecosystem — how to identify appropriate venues, how to read submission guidelines, how to read the magazine before submitting. Jane Friedman's 'Key Book Publishing Paths' is the most current and authoritative free overview of the publishing industry's structure — required reading for all three tracks, because understanding how books reach readers (and what prevents them from doing so) is knowledge every serious writer needs.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Publishing Plan + Thesis Session 16",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Publishing Plan (600 words): Write a 600-word publishing plan for your thesis project. This is a thinking document, not a formal business plan — its purpose is to force the clarity about the work's market position that will make future query letters, pitches, and submission strategies possible.",
            "The plan should address: Where does this work belong in the current marketplace? Name the specific publishers, fellowships, magazines, or development contexts that are the right destination for this project — not the most prestigious destinations, but the most appropriate ones given the work's genre, scale, subject, and formal approach. Who are two or three ideal agents, editors, or producers for this work — specific people, not categories? What comparable titles have succeeded recently in the same space? Name three to five specific recent books or produced screenplays or essays that occupy the same market position as your thesis, and explain in a sentence each why they are comparable and how your work differs from them. What will the query letter or pitch emphasize — what is the unique value proposition of this project, the thing it does that the comparable titles do not?",
            "The comparable titles section is the plan's most important and most challenging element. 'Recent' means published in the last five years — agents and editors use comparable titles to assess the current market appetite for your project, not to assess your influences. 'Comparable' means same genre, similar scale, similar subject or formal approach, similar readership — not simply 'books I admire.' The comparable title that is too prestigious ('my novel is like Beloved') signals the writer's ambitions rather than the market position; the comparable title that is too recent and obscure signals insufficient research. The right comparable title is a book that sold, that found its readers, and that positions your work accurately in the market that already exists for it.",
            "Part Two — Thesis Session 16 (1,500–2,000 words): Write the next section of the thesis. In the session log after writing, note which of the three market tracks best describes the thesis's destination — and whether thinking about that destination has changed anything about the session's writing.",
          ],
          target: "600 words (publishing plan) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 49 — Market Research with Perplexity",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Perplexity AI (preferred) or Claude with web search",
          intro:
            "This week's AI exercise uses Perplexity AI — a research-focused AI tool that synthesizes current web sources — to research the current market for your specific genre and project. The goal is to produce a 300-word research summary that will inform and sharpen the publishing plan.",
          prompt:
            "Use Perplexity AI (perplexity.ai) to research the current market for your thesis project's genre. Run four separate searches: (1) Recent acquisitions in [your genre] — what publishers are actively acquiring this type of work, and what recent books have they published? (2) Debut successes in [your genre] in the last two years — what comparable titles have sold, and to whom? (3) Literary agents currently seeking [your genre] — use 'agent wishlist [your genre] 2024' or '2025' as the search terms. (4) For screenwriters: recent fellowship recipients whose work resembles yours — Nicholl, Sundance, Austin Film Festival. Compile the four searches into a 300-word research summary that identifies the three most relevant market findings for your specific project.",
          questions: [
            "Which of your proposed comparable titles survived the research — which are genuinely selling, genuinely comparable, and genuinely recent? Which did the research reveal to be imprecisely chosen — either too dated, too distant from your work's actual market position, or less commercially relevant than you assumed? Revise the comparable titles section of your publishing plan based on the research findings.",
            "The research on agents seeking your genre: did you find specific agents whose wishlists match your project's genre, subject, and formal approach? Add the three most promising to a document that will become the foundation of your eventual submission list. Note for each: what they have recently sold, what they say they are looking for, and how your project matches those criteria.",
            "The research on recent acquisitions: which publishers are most actively acquiring your genre right now? Do any of them represent an acquisition track that fits your thesis — a debut author, an experimental project, an intimate character study? Revise the publishers section of the publishing plan to reflect the current acquisition landscape rather than a general sense of where literary fiction or memoir 'tends to be published.'",
            "The research may have revealed that the market for your thesis's genre is more competitive than you assumed, or less competitive, or dominated by a trend your work either fits or resists. Write two sentences in the session log about what the research revealed that surprised you — and what that surprise tells you about your assumptions about where your work belongs.",
          ],
          note: "Perplexity AI is the right tool for this exercise because it sources current web content and synthesizes it with citations — unlike Claude or ChatGPT, whose training data has a cutoff date and who cannot access current acquisition news or agent wishlists. For this specific research task, current information is essential: the publishing market changes quickly, and a market research summary based on two-year-old data is less useful than one based on current acquisitions and wishlists. If Perplexity is unavailable, use Claude with web search enabled, or run the searches directly on Publishers Marketplace, QueryTracker, and agency websites.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Comparable Titles Discipline",
      blocks: [
        {
          type: "tip",
          icon: "📚",
          name: "Comparable Titles Are a Map, Not a Compliment List",
          paragraphs: [
            "Every publishing query and pitch requires comparable titles — recent books or projects that occupy the same market position as yours. The comparable titles discipline is one of the most useful exercises available to a writer who is unclear about where their work belongs, because it forces a kind of market self-knowledge that no amount of introspection can produce. To find genuine comparable titles, the writer must read the market — must know what has been published recently in their genre, who published it, how it found its readers, and why it succeeded or failed. This knowledge is not the same as knowing the canon; it is the knowledge of the current literary conversation, of what is being written and read right now, of where a new voice can enter.",
            "The comparable title that is chosen for prestige rather than accuracy — 'my novel is in the tradition of Toni Morrison' — is useless to an agent or editor, because Morrison is not a market position but a canonical reference point. The comparable title that is chosen for accuracy — 'readers of Raven Leilani's *Luster* and Paul Tremblay's *The Pallbearer's Club* will find a similar combination of social observation and formal innovation in my novel' — tells the agent the specific readership the book is reaching for, the specific market that already exists for it, and the specific conversation it is entering. That is information an agent can use. The question for each comparable title: does this tell the agent something true and specific about my work's market position, or does it tell them something true and impressive about my reading history?",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Reader You Are Writing For",
      blocks: [
        {
          type: "journal",
          title: "The Reader You Are Writing For",
          question:
            "Who is the reader you are writing for? Not the ideal reader you imagine vaguely — a person who loves literature and will understand everything — but the specific reader: their age, their reading habits, what they want from a book, what frustrates them about books that almost deliver what they want, what your thesis will give them that nothing else has given them in quite this way. Where do they live? What do they read before yours? What do they do with a book that matters to them — do they mark it, press it on friends, return to it, write about it? Write this reader into existence for twenty minutes. The more specific the reader, the more useful they are as a compass: the writer who knows exactly who they are writing for can make almost any craft decision by asking whether the specific reader needs what this specific choice provides.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The specific reader is not the only reader — the work that has one reader as its compass will find many others. But the specificity of the compass reader is what makes the compass useful. The writer who is writing for everyone is writing for no one in particular, and the prose produced for no one in particular tends toward a generic literary register that serves the idea of literature more than it serves any actual reader. The compass reader is a craft tool as much as a market tool: they are the person whose experience of the page is being shaped by every sentence-level decision, every structural choice, every act of inclusion and omission.",
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
            "By the end of this week you should have: written the 600-word publishing plan identifying specific publishers/fellowships/magazines, two or three specific agents or editors or producers, three to five comparable titles with annotations, and the work's unique value proposition; written 1,500–2,000 words of thesis in Session 16 with the destination question recorded in the log; read the current Poets & Writers issue with the publishing plan in mind; read Goldman (screenwriters: first half; all tracks: opening chapter); read Jane Friedman's publishing overview and the P&W guide to literary magazines; completed the Perplexity AI market research and written the 300-word summary; revised the comparable titles section based on the research findings; begun a submission list with three specific agents and their relevant criteria; written the three chiastic sentences (antimetabole, structural reversal, loose crossing) with earning test applied; written three em dash sentences in the three modes (interruption, amplification, pivot) as Phase 5 preparation.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 17",
          paragraphs: [
            "Week 17 is Professional Development II — Craft, Career, and the Writer's Life. Where Week 16 mapped the publishing landscape, Week 17 considers the longer arc: what it means to build a sustainable relationship with the work over decades, how writers support themselves (teaching is the primary income source for most MFA graduates), how grant and fellowship applications work, what literary community looks like and how it is cultivated, and what 'success' actually means in literary terms. Week 17's key deliverable is the artist's statement — the document that describes not a specific project but the writer as a whole: concerns, influences, aesthetic commitments, the relationship to the material, and why the work exists.",
          ],
        },
      ],
    },
  ],
};
