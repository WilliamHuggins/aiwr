import type { WeekData } from "@/lib/mfa/types";

export const week18Data: WeekData = {
  weekNumber: 18,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "The Thesis Opening & Phase 1 Synthesis",
  emphasizedWord: "Phase 1 Synthesis",
  deck: "The last week of the fall semester. You write the first 1,000–1,500 words of the project you most want to pursue — not a description of what it will be, but the thing itself. And you bring the full Phase 1 grammar vocabulary to its final synthesis.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Thesis Opening" },
    { label: "Grammar", value: "Phase 1 Full Synthesis" },
    { label: "Exercise", value: "1,000–1,500 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Declaration of Intent",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1wzU24cHA2_CHLnWPERi3G70bYhpBfzBi/preview" },
        {
          type: "paragraph",
          content: [
            "By now you have written approximately 12,000 to 18,000 words across seventeen weeks of exercises. You have studied the sentence from its irreducible kernel outward. You have studied character, voice, setting, dialogue, interiority, and the conditions of a sustained creative practice. You have read widely and analytically. You have used the AI as a first reader, a diagnostic tool, and a defamiliarization instrument. You have survived Week 16's messy middle and are still here. What comes next is the question this entire semester has been preparing you to answer: ",
            { text: "what do you actually want to write?", emphasized: true },
          ],
        },
        {
          type: "paragraph",
          content: [
            "This week you write the thesis opening — the first 1,000 to 1,500 words of the project you most want to pursue. Not a summary of what the project will be. Not a description of its premise or an outline of its structure. ",
            { text: "The thing itself.", emphasized: true },
            " The first scene, the first chapter, the first essay. The actual prose, at full commitment, pointing toward the hardest and most essential version of the story or inquiry you most need to tell. This is not a finished piece — the thesis will be written over the next two years, and this opening may change completely by the time it's done. It is a declaration of intent: the thing you are willing to commit to.",
          ],
        },
        {
          type: "pullquote",
          quote: "Begin. There is no other advice. The book that does not begin is the book that does not exist, and the book that does not exist cannot be revised.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "The most common failure of a thesis opening is that it begins with the writer finding the project rather than with the reader entering it. The first paragraph explains what the work will be about. The second paragraph provides background. The third paragraph introduces the premise. By the fourth paragraph, the reader has been told enough to understand but has been given nothing to experience. The actual story or inquiry — the thing the reader came for — begins on page three. The revision, when it comes, will almost always cut those first pages. Save yourself the revision: begin in the story, not before it.",
          ],
        },
        {
          type: "card",
          title: "What Makes an Opening Work",
          paragraphs: [
            "It begins in experience, not in explanation: the reader is in a scene, a moment, a consciousness — not in a setup for those things. The opening does not describe the world it is about to show.",
            "It makes a contract with the reader: within the first 300 words, the reader should know (or begin to know) whose story this is, what kind of prose they are reading, and what kind of question the work will pursue. The contract does not need to be explicit — it is felt, not stated.",
            "It creates forward momentum: something is at stake or in motion from the first sentence. The reader is pulled forward by curiosity, tension, or the force of a voice. The opening that generates no forward momentum has not yet found its entry point.",
            "It is written at full strength: not a draft-mode opening that holds the writer's place while the real writing begins, but prose at the level the entire work aspires to. An opening written below the project's potential will require the reader to trust that the work improves — which is a debt you don't need to incur.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Write toward the hardest version of this project. Not the safest approach, not the version that seems most achievable — the version that, if you pulled it off, would be the piece you most needed to write. Year One has been building your capacity for exactly this. Phase 1 of the grammar curriculum has given you the sentence-level vocabulary to see what your prose is doing and to change it deliberately. Seventeen weeks of exercises have given you material and momentum. The thesis opening is the place where all of that preparation converges.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "A note on the spring semester, which begins next week: the craft curriculum continues, now moving into Phase 2 of grammar (the cumulative sentence and its architecture) and into point of view, conflict, structure, and voice at an intermediate level. The exercises continue. But an additional purpose runs through the spring that was not yet present in the fall: everything you study, you can now bring to bear on this project. The spring semester is the beginning of the sustained work.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What the Opening Must Do in Each Form",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction opening must establish its world, its voice, and its central consciousness within the first page — not through description but through the quality of the prose itself. The reader should know what kind of book this is from the first paragraph: what it values, how it sees, what it is willing to risk. The great novel openings — Woolf's Mrs Dalloway, Morrison's Beloved, Chekhov's long story openings — do not explain their worlds; they enact them. Write an opening that is already fully the book, not a preamble to it.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay's first ten pages are the most scrutinized ten pages in the industry — script readers make their assessment in the first act, and the first act's opening pages determine whether the second act gets read. The first scene must establish the world visually, introduce the protagonist under some form of pressure, and begin the story's central question. The first line of dialogue a character speaks should be characteristic of their voice. For playwrights: the opening establishes the theatrical world — what the stage will be, what the audience should attend to — and should create an immediate question the play will spend its duration answering.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir or personal essay opening makes the most complex contract of all three forms: it asks the reader to trust both the events (they happened) and the narrator's interpretation of them (here is what they mean). The reader's trust in the narrator is established in the first few pages — by the quality of the voice, by the specificity of the detail, by the honesty with which the narrator presents their own limitations and blind spots. An opening that presents the narrator as fully in command of their material and fully certain of its meaning is an opening the reader will distrust. The best CNF openings are alert to their own incompleteness.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 1 Full Synthesis",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 18 of 60 — The Complete Sentence Foundations",
          intro: [
            "This is the culmination of Phase 1 — eighteen weeks of sentence foundations. You now have the complete vocabulary: the kernel sentence, the three branching types (right, left, mid), the ten opener types, sentence inversion, the philosophical distinction between coordination and subordination, the compound sentence, the complex sentence, and the compound-complex sentence. Phase 1's purpose was not to teach you rules but to give you the analytical tools to see what any sentence is doing — and to change it deliberately when it is doing the wrong thing.",
            "The synthesis task this week is ambitious and precise. Take one page — 250 to 400 words — of your thesis opening, written this week. Label every sentence with its dominant type. Map the distribution. Then write a brief analysis: what does the distribution reveal about your prose habits? What are you over-using? What is absent? Then make two targeted revisions: one sentence revised because its structure is fighting its content, one sentence revised because it is a default where a more precise form would do better work. Write a sentence about each revision identifying exactly what changed and why.",
          ],
          rule: "Phase 1 Summary: Every sentence enacts a combination of branching choice, opener, joining logic, and hierarchical structure. Fluency is not the ability to apply all types equally — it is the ability to recognize which type a moment requires, to produce it without friction, and to see immediately when a sentence is failing because one of these choices is wrong.",
          examples: [
            {
              label: "Phase 1 sentence taxonomy — quick reference",
              text: "Kernel (K): She left. | Right-branching (RB): She left without saying goodbye. | Left-branching (LB): Without saying goodbye, she left. | Mid-branching (MB): She left — without saying goodbye — at dawn. | Compound (C): She left, and she didn't look back. | Complex (CX): She left because she knew how the night would end. | Compound-complex (CC): She left because she knew how the night would end, and there was nothing left to say. | Inverted (I): From the doorway she watched him. | Fragmentary (F): Nothing left.",
            },
            {
              label: "The diagnostic question for any failing sentence",
              text: "Is it failing because of its branching type? Its opener? Its joining logic? Its level of subordination? Each failure type has a specific repair. A sentence that says too much at once often needs its compound split into complex. A sentence that buries its point often needs left-branching converted to right-branching. A sentence that feels breathless often needs a comma or a mid-branching interruption. Name the problem; name the repair.",
            },
          ],
          outro: [
            "Phase 2 begins next semester with the cumulative sentence — Christensen's generative rhetoric, the base clause extended by free modifiers that add perception, texture, and time. Everything in Phase 1 has been preparation: you need to understand what a sentence is before you can understand how to build one that accretes.",
            "Carry Phase 1 forward not as a checklist but as a reflex. When a sentence fails, the Phase 1 vocabulary is the tool for diagnosing why. When a draft is monotonous, the Phase 1 distribution audit is the tool for seeing the pattern. The foundations are complete. The architecture begins in Spring.",
          ],
          exercise:
            "Perform the full Phase 1 synthesis on your thesis opening: label every sentence (K, RB, LB, MB, C, CX, CC, I, F), count the distribution, and write a two-sentence observation about the pattern. Then make two targeted revisions — one structural correction, one upgrade from default to deliberate — and write one sentence for each revision identifying precisely what changed and why the change serves the prose better.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Reading",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "The Art of Fiction",
              author: "John Gardner",
              href: "https://bookshop.org/p/books/the-art-of-fiction-notes-on-craft-for-young-writers-john-gardner/6697453",
              note: "No new chapter this week. Return to any section of Gardner you have already read — the fictional dream, the common errors, the psychic distance scale — and read it again with the full fall semester behind you. What do you see now that you did not see in September? What claim does Gardner make that you now have evidence for or against from your own writing? Reading the same text at a different stage of development is one of the most useful things a student of craft can do.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Your best exercise from this semester",
              author: "You",
              href: "#",
              note: "Return to the exercise from any week this semester that you were most satisfied with. Read it not as a writer but as a reader — as though someone else wrote it. What is working? What does the prose know how to do? What is it not yet able to do? Write five sentences of honest assessment. These five sentences are your baseline for the spring semester. Hold onto them.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "No new chapter. Return to the chapter that was most difficult for you this semester — the concept you have been carrying without fully grasping — and read it again. With seventeen weeks of practice behind you, what is clearer? What remains opaque? The concepts that remain opaque after return reading are almost always the ones that will click into place during next semester's work, when you have more writing behind you.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Thesis Opening",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the opening scene, chapter, or essay of the project you most want to pursue — the piece that, if you were to finish it over the next two years, would be the writing you most needed to do. Not a description of what it will be. The thing itself.",
            "Write toward the hardest, most essential version. Not the safe approach, not the version that seems most manageable — the version that requires the most of you. Apply everything from this semester: the scene that enters in medias res, the character whose want and need are both present from the first page, the setting that is doing work rather than providing backdrop, the prose that is at full strength rather than draft mode. Use your Phase 1 grammar vocabulary to see what the sentences are doing and to fix the ones that are doing the wrong thing.",
            "This is not a finished piece. It is a first declaration. The thesis will be revised extensively over two years; this opening will likely change significantly. What matters is not that it is complete but that it is committed: that it is the real beginning of the real project, not a placeholder for it.",
          ],
          target: "1,000–1,500 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 18 — The Project Inquiry",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit your thesis opening — the full 1,000–1,500 words. Use the prompt below exactly. The AI will ask five Socratic questions about the project's underlying inquiry — not about the writing itself, but about the project's reason for existing. Answer each question in full, in writing, before reading the next one.",
          prompt:
            "Read this as the first draft of the opening of a book — a declaration of what a book-length project intends to pursue. Do not evaluate the prose. Ask me five Socratic questions about the underlying inquiry: (1) What question is this book trying to answer — not its plot question but its inquiry question, the thing it is actually investigating? (2) Why does this story or inquiry need to be told in this particular form — what does this form make possible that another form could not? (3) What is the central tension or contradiction that will sustain a book-length project — what is at stake that cannot be quickly resolved? (4) What does the writer seem to be avoiding — what difficult truth about this material is not yet present in the opening? (5) What moment or truth does the writing seem to be moving toward — what is the destination the opening is navigating by?",
          questions: [
            "Answer each question fully, in writing, before reading the next. Do not answer them as a group — answer them individually.",
            "After answering all five: which answer surprised you most? Which answer revealed something you did not know you knew?",
            "Which question was hardest to answer? The hardest question is almost always the most important one.",
            "What do your five answers tell you about the project — about what it is, what it needs, and what it is asking you to be willing to write?",
          ],
          note: "These five answers are for you, not for the AI. Do not treat them as a prompt for revision — treat them as the project's preliminary self-knowledge. Keep them. In six months, return to them and ask: has the writing answered these questions? Has the project become what these answers suggested it could be?",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Permission Slip",
      blocks: [
        {
          type: "tip",
          icon: "✍",
          name: "Write It Down and Mean It",
          paragraphs: [
            "Give yourself explicit permission, in writing, to produce bad drafts. The spring semester will be harder and more demanding than the fall. Year Two will be harder and more demanding than Year One. The thesis work will require you to sustain effort through long periods of not knowing whether the work is any good — through months of the messy middle with no guarantee that the end will justify the distance.",
            "The writers who finish books are not the writers who write the best first drafts. They are the writers who keep returning. The permission slip is not a formality. It is a commitment to the process over the product — to showing up to the work even when the work is not rewarding the showing up, in the knowledge that the only manuscripts that get finished are the ones that are returned to.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What You Came Here to Write",
      blocks: [
        {
          type: "journal",
          title: "What You Came Here to Write",
          question:
            "What did you come here to write? Not what you have written this semester — what you came here to write. The project, the inquiry, the story, the question you most needed a sustained practice in order to pursue. Is it still the same thing it was in September? Has it changed — narrowed, deepened, shifted toward something you did not anticipate? What would you need to give yourself permission to write? What would it cost — in exposure, in effort, in the admission of something you have been keeping at a safer distance — to write the hardest version of this project?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The answer to this question is the compass for everything that follows. Keep it somewhere you can return to when the spring semester gets hard — and it will get hard. The thesis opening you wrote this week is the answer in action. Every week from here forward is the work of making that answer true.",
          ],
        },
      ],
    },

    {
      id: "summary",
      label: "Fall Semester in Summary",
      title: "What You've Built",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "The fall semester is complete. Across eighteen weeks, you have studied the writing process, showing versus telling, scene architecture, image and sensory detail, all four modules of characterization, two modules of dialogue, two modules of setting, cross-genre synthesis, the middle of creative practice, interiority and free indirect discourse, and the conditions of a thesis project. You have completed Phase 1 of the grammar curriculum in full — eighteen topics covering the complete architecture of the English sentence. You have written somewhere between 12,000 and 20,000 words of new prose.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Spring Semester",
          paragraphs: [
            "The spring semester opens with point of view — the deep study of first-person narration, then third-person limited, then omniscience — and continues into conflict, structure, voice, figurative language, and pacing. Phase 2 of the grammar curriculum begins: the cumulative sentence, the periodic sentence, balanced constructions, serial rhythm, and the short sentence as power tool. Every craft topic in the spring connects to the thesis project you have now declared.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Take a week off. Come back. The spring semester begins in Week 19, and it begins with the project you opened this week. Everything the fall has built is now in service of that project — which is to say, in service of the work you most needed to do.",
          ],
        },
      ],
    },
  ],
};
