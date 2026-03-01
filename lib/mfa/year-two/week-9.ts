import type { WeekData } from "@/lib/mfa/types";

export const week9Data: WeekData = {
  weekNumber: 9,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Revision I — The Generative vs. the Revisionary Process",
  emphasizedWord: "Re-Vision",
  deck: "Revision is not editing. It is not fixing mistakes or smoothing rough prose. Re-vision is literally a second act of seeing — looking at a draft from the outside and understanding what it is rather than what you intended it to be. The most important revision tool is the willingness to throw away significant amounts of work in the service of discovering what the work actually is. This week introduces the two-mode revision process: the generative mode and the revisionary mode.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "45 of 108" },
    { label: "Craft Focus", value: "Revision I" },
    { label: "Grammar", value: "Phase 3 · Synthesis" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Seeing Again — The Two Modes of Making",
      blocks: [
        {
          type: "paragraph",
          content: [
            "There are two fundamentally different activities that writers call 'revision,' and confusing them is one of the most reliably productive sources of frustration in the writing life. The first is what might be called the generative mode: writing badly forward, refusing to stop and assess, generating material without evaluating it, trusting that the material being produced contains the seeds of the work even when it is not yet the work. The second is the revisionary mode: stepping back from the material, seeing it from the outside, understanding what it actually is rather than what was intended, and rebuilding it from a position of architectural understanding. Both modes are necessary. Neither can perform the other's work. The writer who revises too early — who switches into revisionary mode before the generative work has produced enough material — is the writer who polishes the first page indefinitely and never finishes a draft. The writer who never switches into revisionary mode is the writer who finishes drafts that do not become books.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Re-vision — the literal second sight, the willingness to see again what has already been seen — requires a specific psychological posture that is almost the opposite of the generative posture. In generative mode, the writer must be permissive: allowing bad sentences, wrong turns, unnecessary scenes, the detours that turn out to be dead ends but that were necessary to find the road. In revisionary mode, the writer must be ",
            { text: "merciless:", emphasized: true },
            " willing to cut what cost effort to produce, to move what has been placed with care, to recognize that the draft's intentions and the draft's achievements are two different things and that the achievements — not the intentions — are what the reader encounters. The attachment to what was hard to write is the reviser's primary enemy, and the first discipline of revision is learning to identify it and set it aside.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The most important revision tool is the willingness to throw away significant amounts of work in the service of discovering what the work actually is.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Re-Vision Protocol: Four Steps Before Touching a Sentence",
          paragraphs: [
            "Read the draft in a single sitting without marking it. This is the most important and most frequently skipped step. The writer who begins revision by opening the document and editing the first sentence has not yet understood what the draft is. Before any marking, cutting, or rewriting, the draft must be read as a reader reads it — continuously, without stopping to fix, attending to what the experience of reading it is rather than what the experience of writing it was. After the reading, write a short document — 300 to 400 words — from the outside: what is this draft actually about, not what was it intended to be about? What is its strongest moment? What is its weakest? What would you cut if you had to cut one-third? What is missing that would make it complete? This document is the revision's starting point, not the draft itself.",
            "Distinguish structural revision from line revision, and perform them in order. Structural revision addresses the architecture: which scenes or sections are in the wrong order, which are redundant, which are missing, which are doing work that other scenes do better, where the governing question is absent. Line revision addresses the sentence level: word choice, rhythm, specificity, the individual sentence's music and precision. The writer who line-revises before structural revision has made the most demoralizing revision error available: polishing prose in a section that will ultimately be cut. Structural revision first. Always. Without exception.",
            "Identify what the draft is avoiding. Every draft avoids something. The most important thing in the piece is usually the thing the writer has been circling without landing on — the scene that is too close to the material, the confrontation that has been deferred, the moment of maximum emotional exposure that has been replaced with the moment just before it. The re-vision document should include an honest answer to: what is this draft not saying that it needs to say? What would the piece become if the writer gave themselves permission to write the thing they have been avoiding?",
            "Write the revision plan before revising. The writer who opens the draft intending to revise and begins making changes at random will produce a differently flawed draft, not a better one. The revision plan — a specific, prioritized, sequenced document that names structural moves in order — transforms revision from an improvised engagement with the material into a directed process with achievable objectives. Know, before touching the first sentence, what the revision session will accomplish and in what order. Revise systematically, not intuitively.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The Re-Vision exercise this week applies the protocol to a Year One piece rather than the thesis draft, for a specific reason: the Year One piece has enough distance from the current moment that the writer can practice cold reading — approaching the work without the attachment that proximity creates. The skills developed in re-visioning a Year One piece are exactly the skills needed for thesis revision, and practicing on material where the stakes are lower is the right preparation for the work that begins in earnest in Week 10 and continues through Year Three.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Revision Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Fiction revision often requires structural surgery — moving scenes, eliminating entire characters, rebuilding the opening, discovering that a subplot is actually the main plot, or that the novel begins two chapters later than the current draft begins. This is not failure; it is the normal process of book-length work. The structural pass must be completed before line revision begins, because the line revision that matters is the revision of sentences that will survive into the final draft — and the writer cannot know which sentences those are until the structure is sound. The sequence is non-negotiable: structure before scene, scene before paragraph, paragraph before sentence, sentence before word. Every deviation from this sequence produces waste.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay development process involves multiple distinct passes — structure pass, character pass, dialogue pass, format pass — and each pass has a specific objective. Multi-purpose revision, in which the writer tries to address structure, character, dialogue, and format simultaneously, is revision that accomplishes nothing because attention is divided too many ways to accomplish any single objective well. The table work method — laying every scene on index cards, physically moving them, identifying gaps and redundancies before opening the script — is the screenwriter's version of the re-vision document: a practice of understanding the whole before touching the parts. For playwrights, table work happens in rehearsal as well as at the desk; the play's revision is informed by what the actors discover in the material.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Nonfiction revision is often an act of discovering what the essay or memoir is actually arguing — which frequently differs from what the writer thought they were arguing when they began. The most common CNF revision discovery: the book begins too early, and the real beginning is buried two or three chapters in. The second most common: the essay or memoir has been answering a different question than the one it thought it was asking, and the question it has actually been investigating is more interesting than the original. Both discoveries require the cold reading — the willingness to approach the draft as a reader rather than as its author — and both are more likely to be made by the writer who reads the draft in one sitting before marking a single word.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 Synthesis — A Complete Phrase Toolkit",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topics 37–44 — Review and Synthesis: Phrase Constructions as a Complete System",
          intro: [
            "Phase 3 is complete. Over the past nine weeks the program has developed nine phrase constructions from introduction through application: participial phrases (Topic 37), absolute phrases (Topic 38), appositives (Topic 39), noun phrase appositive series (Topic 40), prepositional phrases (Topic 41), adjective and adverb clusters (Topic 42), dependent clauses (Topic 43), gerunds and infinitives (Topic 44). This week synthesizes them as an integrated toolkit — not nine separate tools but nine resources from a single system.",
            "The synthesis question is not which constructions to use but which constructions a specific piece of prose currently underuses, overuses, or uses in the wrong situations. Every writer has habitual phrase constructions — the ones that come naturally — and avoided ones — the ones that never appear or appear only when consciously reached for. The habitual constructions are often strengths; the avoided ones are often the constructions that would most expand the writer's range. The synthesis week is a diagnostic: identify the patterns, correct the imbalances, develop fluency with the underused constructions.",
          ],
          rule: "A functional review of all nine Phase 3 constructions and their primary rhetorical uses: participial phrases add simultaneous action and movement (used with a specific subject to avoid the dangling participle); absolute phrases isolate a physical or emotional detail with cinematic specificity (modify the whole sentence, not a single element); appositives rename and enrich a noun with compressed characterization or context; noun phrase appositive series stack multiple appositives to create accumulative meaning through sequence; prepositional phrases locate in space and time with precision and rhythmic flexibility; adjective and adverb clusters create density when modifiers work in genuinely different registers (and clutter when they don't); dependent clauses establish logical relationship between ideas (causation, concession, condition, simultaneity); gerunds nominalize action toward the concrete and ongoing; infinitives nominalize action toward the abstract and philosophical.",
          examples: [
            {
              label: "Sentence using five constructions simultaneously",
              text: "'Watching from the doorway, her hands steady despite everything, she understood that leaving — to leave, finally, after all of it — was the only sentence she had left to write.' [Participial phrase: 'Watching from the doorway'; absolute phrase: 'her hands steady despite everything'; gerund: 'leaving'; infinitive: 'to leave'; appositive: 'finally, after all of it'.]",
            },
            {
              label: "The construction inventory — what your prose actually uses",
              text: "Take two pages of your strongest recent thesis writing. Mark every phrase construction: circle participials in red, absolutes in blue, appositives in green, prepositional phrases in orange, dependent clauses in purple, and gerunds/infinitives in yellow. The color distribution is your current phrase toolkit's portrait. Solid orange and purple with almost no red, blue, or green means the prose is spatially precise and logically articulated but lacks movement, physical specificity, and compressed characterization.",
            },
            {
              label: "Introducing an underused construction",
              text: "If the inventory reveals that absolute phrases almost never appear: reread the most recent thesis session and identify three moments where a physical or emotional detail was explained in a dependent clause or summarized in an adjective. Rewrite each as an absolute phrase — isolate the detail, give it a participial, let it float beside the main clause as a camera move. Read both versions aloud. The absolute phrase almost always produces more specificity with less weight.",
            },
            {
              label: "The synthesis principle",
              text: "Phrase variety is not variety for its own sake — it is the formal correlative of perceptual range. A prose that uses only prepositional phrases and dependent clauses sees the world spatially and logically but not physically and simultaneously. A prose that uses only participials and absolutes is physically immediate but lacks the logical architecture that dependent clauses provide. The fully developed phrase toolkit gives the prose access to every dimension of experience simultaneously.",
            },
          ],
          outro: [
            "Phase 4 begins next week with rhetorical figures: parallelism, anaphora, epistrophe, symploce, polysyndeton, asyndeton, parataxis, hypotaxis, chiasmus, antimetabole. Phase 4 operates at a higher level of rhetorical abstraction than Phase 3 — it concerns not individual constructions but the relationships between constructions, the patterns of repetition and variation that give prose its rhetorical force. The foundation Phase 3 has built is the prerequisite for Phase 4's work: the writer who has internalized the nine phrase constructions has the raw material that Phase 4's rhetorical figures will shape into pattern.",
            "The Phase 3 synthesis exercise this week is not optional. The revision skills being developed this week and the phrase fluency being synthesized are directly connected: the re-vision that sees the draft from the outside is the same act of seeing that identifies which phrase constructions the prose needs and which it is overusing. Both are second sights — both require stepping back from the immediate and seeing the whole.",
          ],
          exercise:
            "Take two pages of your strongest recent thesis writing and annotate every phrase construction using the color-coded inventory described above. After the inventory: identify the two constructions you use most habitually and the two you use least. Now revise the two pages specifically for phrase variety — introduce at least two instances of each underused construction and thin out the overused ones where the prose would be better served by a different approach. Annotate the revision, labeling each new construction. Then write a 150-word reflection: what does the inventory reveal about your current prose's perceptual range? What dimensions of experience are the underused constructions better equipped to render?",
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
              href: "https://bookshop.org/p/books/refuse-to-be-done-matt-bell/17468310",
              note: "Purchase. The most practically useful guide to multi-pass novel revision currently available. Bell's three-draft model — the first draft as discovery, the second as structural repair, the third as line refinement — is the clearest articulation of the two-mode revision principle available in book form. Read the full book this week; it is short (under 200 pages) and designed to be read in one or two sittings. Pay particular attention to his account of what each draft pass is for and what it is not for — the discipline of not doing the next draft's work in the current draft.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Draft No. 4, 'Editors & Publisher' chapter",
              author: "John McPhee",
              href: "https://bookshop.org/p/books/draft-no-4-john-mcphee/7440875",
              note: "Purchase. McPhee's account of his editorial relationship at The New Yorker is the best available description of structural revision from the outside — what an experienced editor sees in a draft that the writer cannot see from inside it. Read for his account of the specific observations his editors made that changed the architecture of his pieces, and translate those observations into diagnostic questions for your own revision process: what would an experienced editor see in your current thesis draft that you cannot see from inside it?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Any Alice Munro interview on revision",
              author: "Alice Munro",
              href: "https://www.theparisreview.org/interviews/1791/the-art-of-fiction-no-137-alice-munro",
              note: "Free online — the Paris Review Art of Fiction interview is the most useful. Munro is the most rigorous reviser in the short story form; her account of her revision process — the number of times she rewrites, what she is looking for at each pass, her willingness to discard drafts that other writers would consider finished — is both instructive and, for most writers, a useful recalibration of expectations. Read with the question: what is Munro's version of the re-vision document, and how does she achieve the cold reading after years of working on a piece?",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Re-Vision + Thesis Session 9",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Re-Vision (400-word document + structural revision): Take the longest piece you produced in Year One — at least 1,500 words. Read it in a single sitting without marking it. Then step away from the document for at least an hour before writing the re-vision document.",
            "The re-vision document (400 words): write from the outside of the piece. Answer: What is this piece actually about — not what you intended it to be about, but what it demonstrably is on the page? What is its single strongest moment and what makes it work? What is its weakest section and why? What would you cut if you had to remove one-third of the piece's length? What is missing — what scene, turn, or arrival does the piece need but does not currently contain? What is the piece avoiding that it needs to address?",
            "The structural revision: perform one significant structural intervention — not line revision, not sentence-level work, but a structural move. Move one section to a different position. Cut one passage of at least 200 words. Add one new scene or section of 200–300 words that addresses the most significant gap identified in the re-vision document. The goal is not to produce a polished draft — it is to practice the architectural thinking that revision requires. Total: revised piece (retaining original length or close to it) + 400-word re-vision document.",
            "Part Two — Thesis Session 9 (1,500–2,000 words): Write the next section of the thesis. Before the session, apply the re-vision protocol's first question to the current thesis draft as a whole: what is the thesis draft actually about, not what is it intended to be about? Is it the same thing? Record the answer — even a tentative one — in the session log, alongside the session's word count and objective.",
          ],
          target: "400-word re-vision document + structural revision + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 45 — The Developmental Editor",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste the Year One piece you re-visioned for this week's exercise — the original version, before your structural revision. The AI's task is to read it as a developmental editor, not a copy editor: to identify the architectural issues, not the sentence-level ones.",
          prompt:
            "Read this as a developmental editor, not a copy editor. Do not comment on sentences, word choice, or style. Address only the architecture. Identify: (1) What this piece is actually about — not what it appears to be about on the surface, but what its deepest preoccupation demonstrably is; (2) The single strongest moment in the piece and what specifically makes it work at a structural level; (3) The single weakest section and why it is failing the piece — is it in the wrong position, doing work another section already does, or simply not yet written at the level the rest of the piece requires? (4) One significant structural recommendation — a section to move, cut, or expand — and a specific explanation of what the move would produce; (5) What the piece is avoiding that it needs to address — what truth about its subject is it circling without landing on? After your assessment, write a brief 'editorial letter' of 200–250 words addressed to the writer.",
          questions: [
            "Compare the AI's assessment of what the piece is actually about to your own re-vision document's assessment. Where do they agree? Where do they diverge — and when they diverge, which reading is more accurate to what is demonstrably on the page?",
            "The AI's identification of the strongest moment: is it the same moment you identified? If different, what does the discrepancy tell you — has the AI found something you were too close to the material to see, or has it missed something only you could recognize?",
            "The AI's structural recommendation (the section to move, cut, or expand): did you make the same structural move in your revision, or a different one? If different, which produces the better architectural result — and how would you test that?",
            "Write a 150-word author's reply to the AI's editorial letter. The reply is not a defense of the current draft — it is an honest engagement with the editorial letter's most important observation. What in the letter changed your understanding of the piece, and what do you now plan to do about it?",
          ],
          note: "The developmental editor prompt is the AI workshop's most useful mode for revision work, and it is the mode that will be used with increasing frequency through the remainder of Year Two and all of Year Three. The key discipline: do not let the AI comment on sentences. The moment a developmental editor begins commenting on word choice, they have abandoned their function. If the AI drifts into line-level feedback, redirect it: 'I'm not looking for sentence-level feedback — I need structural assessment only.' The structural assessment is where the most significant revision decisions are made, and where the AI's capacity for cold reading — reading without the attachment that comes from having produced the draft — is most valuable.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Structural Pass Before Line Revision",
      blocks: [
        {
          type: "tip",
          icon: "🏗️",
          name: "Always Revise from the Largest Scale to the Smallest",
          paragraphs: [
            "Always perform structural revision before line revision. Polishing sentences in a section that will ultimately be cut is wasted effort — and worse than wasted, because the polished prose creates dangerous attachment to material that should be cut but now, having been worked, feels too valuable to sacrifice. The attachment to polished sentences is the structural reviser's greatest enemy, and the writer who creates it by line-revising before structure is sound has made the most demoralizing revision error available.",
            "The sequence is non-negotiable: structure before scene, scene before paragraph, paragraph before sentence, sentence before word. At each level, the question is the same: is this necessary, and is it in the right place? Only when the answer at every level above is yes does the revision at the next level become legitimate work. The writer who reaches the line-revision stage knowing that every section is in the right place, every scene is doing necessary work, and every paragraph is organized correctly is the writer whose line revision produces final-draft prose. The writer who line-revises through a draft that has not yet been structurally sound is the writer who will revise the same draft again, and again, without ever producing the book.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What the Year One Draft Is Avoiding",
      blocks: [
        {
          type: "journal",
          title: "What the Year One Draft Is Avoiding",
          question:
            "After the cold reading and re-vision document: what is the Year One piece avoiding that it needs to address? This is the re-vision document's most important and most uncomfortable question, because the answer almost always requires admitting that the draft has been protecting the writer rather than serving the reader — that a scene has been softened, a confrontation deferred, an emotional exposure replaced with its safer approximation. What is the hardest thing the piece needs to say, and why hasn't it said it? And: is the same avoidance present in the thesis draft? What truth about your thesis subject are you circling without landing on — what would the piece become if you gave yourself permission to write the scene or section you have been approaching from a safer distance?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is an avoidance audit — not of sentence-level choices but of architectural ones. The piece that is avoiding its most important material is a piece that has been built around a gap, and the gap is usually visible to the cold reader in ways it is not visible from inside the writing. The re-vision document's question about avoidance is the most generative question in the revision protocol, because the answer almost always points directly at the revision's most important work.",
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
            "By the end of this week you should have: read the Year One piece in a single sitting without marking; written the 400-word re-vision document from outside the piece; performed one significant structural intervention (a move, a cut, or an addition); written 1,500–2,000 words of thesis in Session 9 with the re-vision protocol's first question applied to the whole draft and recorded in the session log; read Bell's Refuse to Be Done in full; read McPhee's 'Editors & Publisher' chapter; read Munro's Paris Review interview on revision; completed the AI developmental editor exercise and written the 150-word author's reply; annotated two pages of thesis prose for Phase 3 phrase constructions; identified the two overused and two underused constructions; revised the two pages for phrase variety with annotations.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 10",
          paragraphs: [
            "Week 10 begins Phase 4 — Rhetorical Figures — with parallelism as the first and most foundational figure. Phase 4 operates at a higher level of rhetorical abstraction than Phase 3: not individual constructions but the patterns of repetition and variation that give prose its rhetorical force. The craft focus in Week 10 is Revision II — the AI-assisted workshop that extends this week's re-vision work into the full thesis draft — completing the transition from generative drafting to systematic revision that is Year Two's primary fall semester objective.",
          ],
        },
      ],
    },
  ],
};
