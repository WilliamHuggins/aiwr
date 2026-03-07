import type { WeekData } from "@/lib/mfa/types";

export const week29Data: WeekData = {
  weekNumber: 29,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Professional Development III — The MFA Thesis and Beyond",
  emphasizedWord: "The Thesis and Beyond",
  deck: "The thesis manuscript is not only an academic requirement — it is the founding document of your literary career. This week thinks carefully about what happens to the thesis after the program ends: how it becomes a query package or book proposal, how early sections become literary magazine submissions, how the experience of working on it becomes a teaching portfolio, and how the identity of 'writer with a project' positions you in the literary community.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "65 of 108" },
    { label: "Craft Focus", value: "Professional Development III" },
    { label: "Grammar", value: "Deixis · Subjunctive · Tense as Craft" },
    { label: "Key Deliverable", value: "Query Letter or Pitch Document" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Thesis as Career Document — What You Are Building and Where It Goes",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The MFA thesis serves two masters simultaneously, and the writer who understands both is better equipped to complete it. As an academic requirement, the thesis is evidence of sustained engagement with a field — a demonstration that the writer has developed the craft, the critical vocabulary, and the stamina to produce a substantial literary work. As a career document, it is something different and more consequential: the founding manuscript, the work that establishes what kind of writer you are, the project around which the early years of a literary career will be organized. Most MFA graduates think primarily about the first function — completing the thesis, meeting the program's requirements — and only begin thinking about the second function when the degree is in hand and the manuscript is sitting on the desk. This week reverses that sequence. With eight weeks left in Year Two and all of Year Three ahead, the thesis is far enough along to be thought about as a publishable object, and thinking about it that way — concretely, with specific knowledge of the market and the genre — changes how the remaining drafting and revision is approached.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The practical knowledge required for this shift is not complex, but it is specific. Literary fiction writers need to know the difference between large commercial publishers and independent literary presses, between an agent-submitted novel and a directly submitted story collection, between the query letter and the book proposal, between the literary magazine submission and the contest entry. Screenwriters need to know the difference between a spec script and an original pilot, between a fellowship application and a development deal, between writing on assignment and writing on spec. Memoirists and essayists need to know the difference between a narrative memoir and a proposal-driven nonfiction book, between essay collections and linked essays submitted to magazines, between literary agents who represent narrative nonfiction and those who don't. None of this knowledge is esoteric — it is available, freely, from Jane Friedman's website, from Publishers Marketplace, from interviews with working agents and editors. What is required is the willingness to learn it now, while the thesis is still in progress, so that the drafting decisions of Year Three are made with full awareness of where the work is going.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "A query letter is not an administrative document — it is a prose performance. It should demonstrate your command of voice, compression, and persuasion. Every sentence should earn its place. The query letter is, in miniature, a demonstration of everything you've learned about how to make a reader want to keep reading.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Paths from Thesis to Published Work — Track by Track",
          paragraphs: [
            "Literary fiction — novels and story collections: The novel follows the agent path almost exclusively: a query letter sent to literary agents, who represent the book to publishers. The query letter has a strict format — hook sentence, brief plot summary (150 words), comparable titles (two to three recent, relevant titles), brief author bio — and is sent to one agent at a time or, carefully, to small batches. The story collection is harder: most agents do not represent debut collections, and most large publishers do not acquire them from unknown writers. The path for story collections typically runs through literary magazines first (individual stories published in journals, which build the writer's reputation and the collection's track record) and then to independent presses that specialize in short fiction (Graywolf, Tin House, A Strange Object, Sarabande, Two Dollar Radio). The thesis that is a story collection should have several of its stories submitted to literary magazines during Year Three — not after the program ends but during it, so that by the time the thesis is complete, some of its component pieces have publication histories.",
            "Screenwriting and television: The spec script — a script written on speculation, without a commission — is the primary calling card for writers trying to break into television. It demonstrates craft and voice but is almost never produced; it exists to get the writer into rooms and onto staffing lists. The original pilot — a pilot for a show the writer has created — is the current preferred calling card for writers with an original vision, and the one-page pitch (logline, protagonist, premise, world, tone, comparable shows) is the document that precedes any serious conversation about the pilot. Fellowships — Nicholl, Disney, NBC, ABC Writers Program, Sundance Episodic Lab — are the primary institutional entry points for unrepresented writers, and the fellowship submission season runs in spring. The thesis pilot or feature script should be submission-ready for fellowship applications by Year Three, Fall semester.",
            "Creative nonfiction — memoir and essay: The narrative memoir follows the book proposal path at most large publishers — a proposal (overview, chapter summaries, market analysis, comparable titles, author platform, sample chapters) is submitted to agents before the manuscript is complete. This means the memoir writer should be developing the proposal alongside the manuscript, not waiting until the manuscript is finished. The essay collection follows a path similar to the story collection: individual essays published in literary magazines, building toward a collection that can be submitted to independent presses or, if the writer has sufficient platform, to larger publishers via an agent. The memoirist's 'platform' — their existing audience, their visibility in the literary community, their credentials for writing about their subject — matters more in the nonfiction market than in fiction, and Year Three is not too early to begin thinking about what a platform looks like for this specific project.",
            "The literary magazine as the common path: Across all three tracks, the literary magazine (or its equivalent — the online journal, the short film festival, the one-act theater program) is the primary site of early career publication. Stories, essays, and excerpts published in literary magazines build reputation, create a publication record, and establish the writer's presence in the literary community before a book exists. The Year Three thesis work should be managed with literary magazine submission in mind: which sections or pieces are strong enough and self-contained enough to be submitted independently? Which journals publish work in this genre and in this mode? The submission process takes time — three to six months for a response, at many journals — which means submissions made during Year Three will produce responses (acceptances or rejections) during and after Year Three, creating a natural extension of the program's professional development work into the years that follow.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Professional Development Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The query letter for a novel is a 300-word document that may determine whether the manuscript is read. Its constraints are severe: the hook sentence must create immediate interest without being clever at the expense of accuracy; the plot summary must convey the novel's premise, stakes, and emotional core in 150 words without sounding like a Wikipedia entry; the comparable titles must be recent (published within five years, unless a classic is cited for style rather than market comparison) and genuinely relevant (not aspirationally prestigious — 'In the tradition of Toni Morrison' is not a comparable title, it is a liability). The author bio is three sentences: relevant publications, any prizes or fellowships, a sentence on the project's origins if the origins are interesting. Nothing else. The query letter for a story collection is structurally the same but the summary describes the collection's thematic or formal arc rather than a single plot. Practice this week's query letter as a real document: it should be submittable when Year Three's revision is complete.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The one-page pitch for a television pilot follows a specific architecture: logline (one sentence — protagonist, dramatic problem, world, tone); premise (two to three sentences expanding the logline into the pilot's specific situation); protagonist (one paragraph — who they are, what they want, what they fear, why this story belongs to them); world (one paragraph — the specific environment, its rules, its possibilities); tone and comparable shows (two to three current shows that are tonal or structural relatives — not 'it's like Breaking Bad' but 'it occupies the same territory as Severance and Fleabag: dark comedy in which the workplace is the site of existential crisis'); series potential (one paragraph — where the story goes beyond the pilot, what the ongoing dramatic engine is). For feature film writers: the logline, a three-paragraph summary (setup, confrontation, resolution), and two comparable films. For playwrights: research the submission requirements for the theater programs most relevant to your work — many accept full scripts rather than query letters, but the cover letter that accompanies the script follows similar principles.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir proposal is a more complex document than the fiction query letter, and it is submitted before the manuscript is complete — which means the proposal must convey the book's arc, argument, and emotional stakes from a draft rather than a finished work. The proposal's components: an overview (three to four pages describing the book's subject, argument, form, and why you are the writer to write it); chapter summaries (one paragraph per chapter, the full narrative arc made visible); market analysis (who reads books like this, where they are, what comparable titles have sold and to whom); author platform (what gives you visibility and credibility for this subject); and sample chapters (the opening chapter and one additional chapter, both at submission standard). The overview is the proposal's most important section and the hardest to write, because it requires articulating the book's argument at a level of clarity and confidence the writer often cannot achieve until the draft is further along. Write the overview now, from the draft as it exists — not the book you hope to write but the book the draft is becoming.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Deixis, the Subjunctive Mood, and Tense as Craft",
      blocks: [
        {
          type: "grammar",
          title: "Three Final Tools — Context-Dependent Meaning, the Conditional, and the Politics of Tense",
          intro: [
            "This is the final new grammar topic of Year Two. These three tools are less frequently taught in writing programs than the Phase 1 through 5 curriculum, but each has specific applications to the kinds of decisions the thesis writer is making in the spring semester — in nonlinear manuscripts, in conditional passages, and in the choice between past and present tense that most writers make once and rarely revisit.",
            "Deixis (from the Greek for 'pointing') describes words whose meaning depends entirely on context: here, now, this, that, I, you, today, then, there. Deictic words are orientation tools — they locate the speaker and the reader in time and space relative to each other and relative to the events being described. In a straightforwardly linear narrative, deixis is managed automatically; the reader's orientation is clear from context. In nonlinear narratives, fragmented structures, and lyric essays, deixis requires active management. The word 'now' in a text that moves between multiple time periods must be anchored — the reader must know which 'now' it is, or the disorientation must be deliberate and productive rather than accidental.",
          ],
          rule: "The subjunctive mood expresses wishes, conditions contrary to fact, hypotheticals, and statements of requirement or necessity. 'If she were to leave' (subjunctive) rather than 'if she was to leave' (indicative) — the subjunctive signals a different relationship to reality, a conditionality that the indicative mood does not carry. In creative prose, the subjunctive is most useful in conditional passages — the character imagining an alternative, rehearsing a future that may not happen, reconstructing a past that can only be inferred. The subjunctive is the grammatical form of the hypothetical, and the hypothetical is often where the memoir's most honest work happens: the memoirist who writes 'if my father were to have known' rather than 'if my father had known' is performing the conditionality — the not-knowing, the speculation — rather than asserting it. Tense, meanwhile, is a craft decision with specific implications for intimacy, distance, and suspense. Present tense creates immediacy and eliminates the safety net of retrospect — the reader is in the scene as it happens, without the narrator's retrospective knowledge that they survived it. Past tense creates the retrospective distance that allows the narrator to have a perspective on events — to know, or not to know, what they meant. Neither is inherently superior; both are choices, and the choice should be made deliberately rather than by default.",
          examples: [
            {
              label: "Deixis in a nonlinear manuscript — the 'now' that must be anchored",
              text: "'Now she understood.' [In a linear narrative, 'now' is unambiguous: it means the present moment of the scene. In a nonlinear narrative that moves between three time periods, 'now' must be anchored — the reader needs to know which 'now' this is. The revision: 'Now, in the kitchen with her daughter's coat still on the hook, she understood.' The additional context anchors the deictic 'now' to a specific time and place. The alternative — allowing the disorientation to stand — is a valid choice only if the confusion between time periods is the effect the sentence is producing, not an accident of construction.]",
            },
            {
              label: "The subjunctive in a conditional passage — hypothetical as honest form",
              text: "'If my mother were alive, she would say I have made the same mistake she made.' [The subjunctive 'were' (rather than the indicative 'was') signals conditionality: the mother is not alive, and the sentence is performing that absence — imagining what she would say in a reality that does not exist. The subjunctive is the grammatical form of grief, of counterfactual thinking, of the memoir's most honest passages about what cannot be known or recovered. Compare: 'If my mother was alive, she would say...' — grammatically the difference is minor, but rhetorically the indicative slightly softens the counterfactual, makes the absence feel less absolute. The subjunctive insists on the conditionality.]",
            },
            {
              label: "Tense shift — the same scene in past and present",
              text: "Past: 'She opened the door and found him sitting at the kitchen table. He did not look up.' Present: 'She opens the door and finds him sitting at the kitchen table. He does not look up.' [The present tense version eliminates the retrospective distance — there is no narrator who has survived this moment and is reporting it from safety. The reader is in the scene as it happens, without the narrator's knowledge of what happens next. The past tense version implies a narrator who has the whole scene in memory — who knows it is over, knows what came of it. Neither is better; the choice depends on the effect the passage requires: present tense for maximum immediacy, past tense for the weight of recollection.]",
            },
            {
              label: "Tense as argument — the present-tense memoir",
              text: "The present-tense memoir — the memoir narrated in present tense as though the events are happening now — is not simply a stylistic choice. It is an argument about memory and immediacy: that the past is not safely past, that the narrator is not positioned at a safe retrospective distance from which the events can be understood, that the memoir's subject is happening to the narrator in the present of writing as much as it happened in the past of living. Maggie Nelson's *The Argonauts* uses a fluid tense system — moving between past and present — as a formal argument that the experiences it describes are not settled history but ongoing processes. The tense decision in your thesis should be made with this kind of awareness: what relationship to time does the work require?",
            },
          ],
          outro: [
            "Exercise: Rewrite a past-tense scene from your thesis in the present tense. Read both versions aloud. What changes — not just the feeling but the narrator's implied relationship to the events? What does the present tense version gain, and what does it lose? Then rewrite a conditional passage using the subjunctive rather than the indicative, and read both versions. Does the subjunctive perform the conditionality more fully? Note your observations in the session log — they are relevant to revision decisions in Year Three.",
          ],
          exercise:
            "Rewrite a past-tense scene from your thesis in present tense; read both versions aloud and note what changes in the narrator's relationship to the events. Then rewrite a conditional or hypothetical passage in the subjunctive mood; note what the subjunctive performs that the indicative does not. Finally, audit three pages of your thesis for deictic words (here, now, this, that, then, there) and ask whether each is clearly anchored — whether the reader can orient themselves in time and space using the context surrounding the deictic word.",
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
              title: '"The Key Book Publishing Paths: An Overview"',
              author: "Jane Friedman",
              href: "https://www.janefriedman.com/key-book-publishing-paths/",
              note: "Free at janefriedman.com. The most current and accurate overview of the publishing landscape available, written by a former publisher who now works as an industry educator. Read the full overview and then read at least two other articles from her site relevant to your track and genre. Friedman updates her content regularly; the information here reflects current market conditions rather than the conditions described in books written five or ten years ago. Bookmark the site — it is the most reliable free resource for publishing information in English.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Three query letters from published authors",
              author: "QueryShark / QueryTracker",
              href: "https://queryshark.blogspot.com",
              note: "Free online. Read three query letters from QueryShark (Janet Reid's long-running query critique blog) — choose letters that were successful (Reid marks these) and that are in your genre. Read each as a craft document: where does the hook sentence create immediate interest? How does the plot summary convey stakes without becoming a synopsis? What do the comparable titles signal about the book's position in the market? The successful query letters are models for the week's writing exercise. For screenwriters: research five recent Nicholl Fellowship winning loglines (available at the Academy's website) and study the compression and specificity each achieves in a single sentence.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Five literary residencies relevant to your genre",
              author: "MacDowell / Yaddo / VCCA / Ragdale / others",
              href: "https://www.macdowell.org",
              note: "Research five residencies you could realistically apply to during Year Three. For each: note the application deadline, the cost (most provide full fellowships), the typical residency length, the work environment, and the community of writers who have attended. MacDowell and Yaddo are the most prestigious and most competitive; VCCA, Ragdale, Brush Creek, and Ucross are excellent and somewhat less competitive; Tin House, Bread Loaf, Sewanee, and the Kenyon Review Writers Workshop are the summer conference programs that combine craft instruction with community. Residency applications are a Year Three activity, but identifying the programs now — and noting their deadlines — means the applications can be built into the Year Three calendar rather than added on as an afterthought.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Query Letter or Pitch Document + Spring Thesis Session 11",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Query Letter or Pitch Document (400–600 words): Write a complete query letter or pitch document for your thesis project as it currently exists. This is a real document — you may use it. For fiction writers: a query letter structured as hook sentence (one sentence creating immediate interest and establishing the novel's world and stakes) + plot or premise summary (150 words maximum, present tense, third person even if the novel is first person) + comparable titles (two current, relevant titles, one sentence each) + brief author bio (three sentences: relevant publications or credentials, any prizes or fellowships, the project's hook for the bio if there is one). For screenwriters: a one-page pitch with logline, protagonist paragraph, premise paragraph, world paragraph, tone and comparable shows, and series potential. For CNF writers: the memoir proposal's overview section (three to four paragraphs: the book's subject and argument, the form and why it suits the material, why you are the writer to write it, and what the reader will take from the experience of reading it) plus a chapter summary (one sentence per chapter).",
            "Part Two — Spring Thesis Session 11 (1,500–2,000 words): Write the next section of the thesis. The session log should note whether thinking about the thesis as a professional object — as a query package, as a submission — has changed the way you are approaching the drafting. Some writers find that the professional development work clarifies the thesis's identity (this is a literary novel, these are its comparable titles, this is its market); others find it alienating (the thesis feels like it should be exempt from market considerations). Note which response you are having, without judgment. Both are information.",
          ],
          target: "400–600 words (query letter or pitch) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Query Letter as Craft Document",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "The AI reads your query letter or pitch document as a literary agent or development executive — the specific professional reader the document is designed to persuade. The exercise uses the AI's ability to apply genre conventions and reader-expectation analysis to a specific document.",
          prompt:
            "Read this query letter [or pitch document] as a literary agent who receives 200 queries per week [or: as a development executive reading pitch documents]. Identify: (1) Whether the first paragraph creates immediate and compelling interest — and if not, at what point in the document the interest arrives; (2) Whether the comparable titles are current, relevant, and well-chosen — or whether they signal that the writer is not aware of the current market, or is positioning the work aspirationally rather than accurately; (3) Whether the project's unique value proposition is clearly articulated — what makes this book or script different from the comparable titles, what it offers that readers or viewers of those titles would want but did not get; (4) One specific sentence that should be rewritten for maximum impact, with a suggested revision; (5) The single question this query leaves unanswered that a professional reader would most want answered before requesting pages.",
          questions: [
            "The AI's identification of where the interest arrives — and whether it arrives in the first paragraph: if the interest arrives late, the query letter is failing at its primary task, because most agents stop reading at the end of the first paragraph. Revise the query letter so that the interest arrives in the first sentence. The hook sentence is not a clever line; it is the sentence that most accurately and compellingly names what makes this project worth the reader's time. If you cannot write it in one sentence, you do not yet know what the project is. The effort of writing the hook sentence is itself a clarification exercise for the thesis.",
            "The AI's assessment of the comparable titles: are they current (published in the last five years)? Are they genuinely comparable (similar in form, tone, subject, or audience) rather than aspirational? Are they titles the agent or development executive is likely to know and to have an opinion about? If the AI identifies the comparable titles as poorly chosen, revise them. The comparable titles exercise — researching what has been published recently in your genre, identifying the two or three books most similar to your thesis in form and audience — is itself a market education. It requires knowing the current literary landscape, not the canonical one.",
            "The AI's suggested revision for the single sentence that should be rewritten: take the suggestion seriously even if you disagree with it. The AI's revision may not be better than your original — AI-generated prose frequently flattens voice — but the AI's identification of the sentence as the weakest is likely accurate. The AI identifies weak sentences by recognizing vagueness, abstraction, and cliché; those are the same qualities that cause a professional reader to lose interest. Revise the sentence in your own voice, using the AI's identification of the weakness rather than its proposed replacement.",
            "The single unanswered question: what is it? Answer it — in 100 words or fewer — as an addendum to the query letter. Then ask whether the question should be answered in the query letter's body rather than as an afterthought. If the unanswered question is about the book's fundamental premise or stakes, it should be built into the summary. If it is about the author's qualifications, it belongs in the bio. The unanswered question is not a failure of the query letter — it is information about what the query letter is not yet fully communicating.",
          ],
          note: "Save the revised query letter or pitch document. It is a Key Deliverable for Year Two — noted in the program's cumulative resources — and it will be revised again in Year Three's professional preparation weeks (Weeks 14 and 29) as the thesis reaches its final form. The document you produce this week is a draft, not a final submission; it will improve as the thesis improves and as your understanding of the market deepens.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Query Letter Is a Craft Document",
      blocks: [
        {
          type: "tip",
          icon: "✉️",
          name: "Every Sentence Earns Its Place",
          paragraphs: [
            "A query letter is not an administrative document that must be endured after the real work of writing is done. It is a prose performance in miniature — a demonstration, in 400 words, of everything you have learned about how to make a reader want to keep reading. The hook sentence must do what the novel's first sentence must do: create immediate interest and a reason to continue. The plot summary must do what the novel's jacket copy must do: convey premise, stakes, and emotional core with compression and without condescension. The comparable titles must do what the artist's statement must do: position the work in a tradition and a market with accuracy and confidence. The bio must do what the cover letter in any professional context must do: establish credibility without boasting and personality without oversharing.",
            "The writer who approaches the query letter as a bureaucratic obligation — a necessary evil between the real work and the world — will write a poor query letter and receive rejections that are not the manuscript's fault. The writer who approaches it as a craft challenge — the hardest possible compression exercise, the 400-word test of whether they know what their book is — will write a query letter that is a genuine representation of the manuscript's quality. Agents can tell the difference. The query letter is the first piece of prose they read; it establishes, immediately, whether the writer knows how to control tone, economy, and the reader's attention. Write it as carefully as you write the thesis.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Reader You Most Want",
      blocks: [
        {
          type: "journal",
          title: "Write Them a Letter",
          question:
            "Who would you most want to read your thesis? Not the ideal reviewer, not the most prestigious reader, not the agent or editor who would be most useful — the person, living or dead, known to you or not, whose reading of this work would matter most to you. A specific person: an ancestor, a reader from the community the work is about, a writer whose work has been the thesis's primary model, a person from your own life who needs to understand something the thesis is trying to say, a reader who has lived the experience the thesis is exploring and whose recognition would constitute the deepest possible form of success. Write a letter to that person: describe what you have made, why you made it, and what you hope they will find in it. The letter is not a pitch — you do not need to persuade them to read it, because they are exactly the reader the work was written for. What do you want them to know before they begin?",
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
            "By the end of this week you should have: written the query letter or pitch document (400–600 words, submission-quality draft saved as a Key Deliverable); written 1,500–2,000 words of thesis in Session 11; read Friedman's publishing overview and at least two additional articles from her site; studied three successful query letters or five Nicholl loglines; researched five relevant residencies with deadlines noted; completed the AI workshop query analysis with all four reflection questions and the revised query letter; completed the deixis, subjunctive, and tense exercises (past-to-present scene rewrite, conditional passage in subjunctive, deictic audit of three pages).",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 30",
          paragraphs: [
            "Week 30 is the Ethics of Nonfiction — Truth, Memory, and the Limits of Reconstruction. It applies across all three tracks but serves CNF and memoir writers most directly, addressing the central tension of creative nonfiction: the writer uses the tools of fiction to render events the reader believes to be true. Where is the line between legitimate artistic rendering and falsification? The grammar topic is the Phase 5 Punctuation Synthesis — the culminating punctuation exercise in which two pages of thesis prose are annotated asking not 'is this correct?' but 'what is this doing?' Every punctuation mark examined as a rhetorical choice.",
          ],
        },
      ],
    },
  ],
};
