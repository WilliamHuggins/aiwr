import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek31Data: WeekData = {
  weekNumber: 31,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "The Writing Life",
  title: "What Comes After — The Next Project",
  emphasizedWord: "Beginning",
  deck: "The thesis is complete and defended. What remains in the program are five weeks designed not to add to the thesis but to establish the infrastructure of the ongoing writing life. This week begins the first notes, sketches, or early drafts of whatever comes next — and asks the writer to account, in 600 words, for what three years of systematic grammar study actually did.",
  meta: [
    { label: "Commitment", value: "10–14 hrs" },
    { label: "Program Week", value: "103 of 108" },
    { label: "Craft Focus", value: "The Next Project — Seed Document and the Beginner's Permission" },
    { label: "Grammar", value: "The Full Curriculum in Retrospect — 600-Word Portfolio Essay" },
    { label: "Deliverable", value: "Seed Document (500 words) + Grammar Retrospective (600 words)" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Space Between Projects — How to Be in It Without Wasting It",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every serious writer has a between-projects period — the interval after one long work is completed and before the next has claimed sufficient territory to be called a project. The interval is uncomfortable because the writing life without a project feels purposeless in a way that the writing life within one does not: there is no manuscript to return to, no specific problem that yesterday's work left unsolved, no voice in the prose that the writer is trying to sustain. The desk is still the desk. The notebook is still there. But the organizing obligation that gave the desk its urgency is gone, and what replaces it, at first, is not a new obligation but a kind of open attention that can feel, from the inside, like emptiness.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This is not emptiness. It is the condition in which the next project forms. The between-projects period is not a waiting room; it is a laboratory — the period when the writer's attention is not directed by a specific creative problem and can therefore be captured by anything. The image that recurs in dreams. The overheard conversation that stays in the ear for days. The archive item that should be irrelevant to anything the writer is working on and is not irrelevant at all. The question that surfaces in the margins of reading done for pleasure. These are the next project's early materials, and they accumulate most richly precisely when the writer is not trying to find them — when the critical faculty that serves revision has been stood down and the open, undirected attention of early exploration has been allowed to operate.",
          ],
        },
        {
          type: "pullquote",
          quote: "The early notes on a new project should feel like permission: permission to not know what it is, permission to follow curiosity without destination, permission to be the writer you were in Year One before the critical faculty had fully developed. That faculty is invaluable in revision. In early drafting, it is an obstacle. Learn to turn it off again.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "What the Seed Document Is — and What It Is Not",
          paragraphs: [
            "The seed document is not an outline. It is not a proposal. It is not a commitment to a project or a genre or a form. It is a piece of writing — prose, notes, a question, an image, a fragment of voice — that represents the earliest available evidence of what the next project might be. It is written toward the material rather than about it: not 'I am going to write a novel about X' but the actual prose of X, however incomplete and uncertain, however far from final form.",
            "The seed document's only obligation is to follow the material wherever it goes without stopping to evaluate whether it is going somewhere. The Year One writer who produced the Week One freewrite was following this same instruction — write without the inner critic, follow the prose, trust that the 20 minutes will produce something even if you cannot yet see what. The Year Three writer returning to that permission is not returning to Year One's capabilities; they are returning to Year One's openness, with Year Three's craft. That combination is exactly the condition the early drafts of the next project require.",
            "A seed document can be anything: a passage of prose that may or may not belong in the finished work; a catalogue of images connected by an association the writer cannot yet name; a question the writer has been living with since before the thesis was finished, written out in full for the first time; a voice overheard or imagined, given a few paragraphs to establish itself; a fragment of research — a date, a document, a place — that has been claiming the writer's attention at the edges of the thesis work. Write toward it. Five hundred words. Do not stop before the time is up.",
          ],
        },
        {
          type: "card",
          title: "The Critical Faculty — How to Turn It Off for Early Work",
          paragraphs: [
            "The critical faculty developed across three years of systematic craft study is an extraordinary instrument. It can identify a zombie noun in a sentence read at speed. It can hear a rhythm falter in a passage that looks correct on the page. It can locate the structural problem in a chapter that reads smoothly but leaves the reader unsatisfied. This faculty is the product of everything the program built — the grammar curriculum, the annotation exercises, the revision sequence, the defense — and it is the instrument the writer will use for the rest of the writing life.",
            "It is also the enemy of first drafts. The sentence that produces, immediately after it is written, the evaluation 'this is not good enough' will not be followed by the sentence the evaluation interrupted. The scene that is abandoned because the critical faculty identifies a problem in its second paragraph will not reach its third paragraph, where the problem resolves. The seed document that is assessed for quality while it is being written will stop before it finds what it is. The instruction 'turn off the critical faculty' is not an instruction to write badly; it is an instruction to write without evaluation — to produce before assessing, to follow before directing, to trust the twenty minutes or the five hundred words to produce something even when the critical faculty is convinced they will not. The critical faculty is right that the early draft is imperfect. It is wrong that this matters yet.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "How the Next Project Begins in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The next fiction project often begins not with a plot or a character but with a voice — a first-person narrator who speaks a sentence the writer has not heard before, or a close third whose relationship to a particular consciousness produces a specific quality of attention that the thesis did not have. The seed document for fiction is often most productive when it begins with voice rather than event: write a paragraph in a voice you do not yet understand, follow where it goes, and assess afterward what the voice seems to know, what it avoids, what kind of story it is capable of generating. The voice that surprises its own writer is often the voice the next project needs.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The next dramatic project often begins with a situation rather than a character — a specific circumstance, often absurd or under extreme pressure, that immediately generates the question: what do these people do? The seed document for dramatic writing can be as brief as a single scene written without any plan for what precedes or follows it: two or three characters in a room, with a problem, with something at stake. The scene that generates more questions than it answers — that ends with the writer wanting to know what happens next — is the seed of the next project. Write that scene. The rest will follow.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The next nonfiction project often begins with a question the thesis raised but could not answer — the adjacent territory the memoir gestured toward but did not enter, the research thread the essay followed partway and then had to abandon. The seed document for nonfiction is often most productively written as a question the writer is genuinely living with: not a research question, but the kind of question that appears in the margin of books, in the notebook at 2 a.m., in the recurring image that the thesis kept circling without naming. Write the question out in full. Then write toward an answer for five hundred words. Do not reach the answer. Stay in the pursuit.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Full Grammar Curriculum in Retrospect — A 600-Word Portfolio Essay",
      blocks: [
        {
          type: "grammar",
          title: "Three Years, 60 Topics, One Honest Account",
          intro: [
            "The grammar curriculum is complete. Phase 1 through Phase 8 — kernel sentences through voice synthesis — has been delivered across three years and 108 weeks. The closing reflection written in Week 26 was a personal account of syntactic development. This week's essay is a different document: an analytical account of the curriculum itself, written from the perspective of a writer who has been through it and can now assess it from the outside.",
            "This essay is for the teaching portfolio. It will be useful if you teach writing — as evidence that you have thought rigorously about what grammar instruction at the sentence level produces, in prose and in the writer's relationship to their own sentences. It will also be useful for your own practice: the act of writing it will clarify which concepts have become fully integrated and which remain deliberate, and that clarity is the basis for the sentence-level work of the next project.",
          ],
          rule: "Write a 600-word essay on the grammar curriculum across three years. The essay should address four questions, though not necessarily as discrete sections — it should read as a coherent analytical piece, not a list of answers: (1) Which phase was most transformative for your prose — not which was most interesting conceptually, but which most directly and permanently changed what you do when you write a sentence? Name the specific concept and describe the specific change it produced. (2) Which concept proved most immediately useful — the tool you reached for in the first revision session after you learned it, the concept that immediately and obviously applied to problems you were already having? (3) Which concept you initially dismissed or found irrelevant turned out to be essential — the topic you resisted, the exercise you completed without conviction, that later revealed its importance? What was the resistance about, and what did it take to discover that it was misplaced? (4) What would you teach differently — not what should be cut, but what sequence, what application, what pairing with other concepts would make the curriculum more effective for the writer you now understand yourself to be?",
          examples: [
            {
              label: "What makes a strong curriculum retrospective essay",
              text: "The essay that says 'Phase 4 was most transformative because rhetorical figures gave me a vocabulary for what I was already doing unconsciously' is interesting. The essay that says 'Phase 4 was most transformative because the anaphora exercise revealed that I had been writing three consecutive paragraphs with the same syntactic opening for years without noticing, and once I saw it I could choose when to use it and when to vary it — which is the difference between a tic and a technique' is the essay worth teaching from. Be specific. The curriculum retrospective is only useful if the specificity is there.",
            },
          ],
          outro: [
            "File the completed essay in the teaching portfolio alongside the Week 20 aesthetic declaration, the Week 22 voice passage, the Week 26 closing reflection, and the Week 27 benchmark sentences. These five documents constitute the portfolio's grammar section: a record of what three years of systematic syntactic study produced, in the writer's own analytical and reflective prose.",
          ],
          exercise:
            "Write a 600-word analytical essay on the grammar curriculum across three years: most transformative phase, most immediately useful concept, the concept initially dismissed that proved essential, what you would teach differently. File in the teaching portfolio.",
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
              title: "Whatever you have been putting off — the book that has been sitting on the shelf",
              author: "Self-selected",
              href: "",
              note: "Required, with the specific instruction that it be the book you have been meaning to read but have not read because the thesis claimed priority. Every writer in the program has at least one such book — the one that appeared in a footnote of something else, or was recommended by a writer whose work you admire, or arrived in the mail and was placed on the shelf with the intention of reading it 'after the thesis.' Read it this week. Read it without a craft agenda — without annotating for technique or noting influences. Read it because it is there and you have been wanting to read it and the thesis is done.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Seed Document — 500 Words Toward the Next Thing",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a 500-word seed document for the next project. Not an outline. Not a proposal. A piece of writing — prose, notes, a question written out in full, a fragment of voice, an image catalogue — that represents the earliest available evidence of what the next project might be. Write toward the material. Do not plan what you will write before you begin writing it.",
            "The single instruction, borrowed from Year One: write without stopping. For the duration of the 500 words, the critical faculty that evaluates quality is stood down. There is no assessment during production. What exists at the end of the 500 words is not the next project; it is the seed of it — the first written evidence that something is forming. Assess afterward, briefly: what did the writing seem to know? What did it avoid? What question is it sitting inside?",
            "The seed document is not a commitment. It is not a contract with a project. It may be the opening of the next novel, or a question that will become an essay, or a voice that will dissolve before the next project announces itself from a completely different direction. Its value is not in its accuracy as a prediction of the next project's form. Its value is in what it demonstrates about the writer's current attention: what is drawing it, what it cannot yet see, what it is already moving toward without having named the destination.",
          ],
          target: "500 words of seed document prose, written without stopping; brief post-writing note on what the writing seemed to know",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Five Socratic Questions for the Seed Document",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "The AI workshop this week is not a craft assessment — it is a Socratic inquiry. Paste the seed document and ask the AI to generate questions that help the writer understand what the material is and what form it might need, without prescribing those things. The AI is not a developmental editor here; it is a thinking partner in the early stage of a project that does not yet have a form to be edited.",
          prompt:
            "I am a writer who has just completed a [genre] manuscript about [brief description of thesis]. I am beginning to think about a second project. I am not planning it yet — I am following my curiosity toward it. Here is the earliest writing I have produced toward this new material: [paste seed document]. I do not want you to assess the quality of this writing or suggest revisions. I want you to ask me five Socratic questions — genuine questions that would help me understand what this material is and what it might need, without prescribing either the subject or the form. The questions should be open rather than leading: questions that open the inquiry rather than direct it toward a conclusion.",
          questions: [
            "Answer all five questions in writing — not in a separate document, but here, in the notebook or on the page, in the same session as the AI workshop. Write toward each question for as long as the writing goes. Do not reach a final answer; the point of the Socratic questions is not resolution but deepened inquiry. The answer that produces a further question is more valuable than the answer that closes the question down. If a question is particularly productive — if writing toward it generates more material than any of the others — follow it. The AI's questions are not equally important; the one that opens the most is the one the seed document most needs.",
            "The question that you cannot answer yet is often more valuable than the question you can answer immediately. The Socratic question that stops you — that requires thought you have not yet done — is the question at the boundary of what the material currently knows. That boundary is where the next project lives. Note which question produced the most resistance. Write toward that one last, after the others, when the resistance has been acknowledged.",
            "After the five questions and your responses: write a single sentence — not for the AI, but for the notebook — that describes what the material seems to be about in a way you could not have written before the Socratic session. Not what you planned it to be about. What the writing and the questions have revealed it is about. This sentence is not a thesis statement or a governing question in the formal sense; it is the seed document's own account of itself, produced one layer deeper than the seed document itself reached. It is the clearest available evidence of what the next project is.",
            "Return to the seed document in a week — not to revise it, but to read it. The writer who reads the seed document a week after writing it often finds that the material has continued developing in the interval without conscious effort: the question the Socratic session identified has been working in the background, and the week-later read reveals what it produced. Make a note. This is how the next project builds.",
          ],
          note: "The AI's Socratic questions are most useful when the seed document is genuinely exploratory — when the writer does not yet know what the material is. If the seed document is already fairly directed — if the writer knows the basic shape of the next project and the seed document is confirming rather than discovering — the Socratic questions will be less surprising. In that case, ask the AI for a different kind of inquiry: 'What is this material avoiding? What question is it not asking that it should be asking?' The question the material is avoiding is often more generative, at the early stage, than the question it is already pursuing.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Beginner's Permission",
      blocks: [
        {
          type: "tip",
          icon: "🌱",
          name: "You Are a Beginner Again — and That Is Not a Setback",
          paragraphs: [
            "Beginning a new project after completing a long one is a return to a state the writer has been in before: the state of not knowing what the work is, of following without being able to see the destination, of producing prose that will not survive into the final draft but that is necessary to produce before the final draft can exist. The writer who completed the thesis is more skilled than the writer who began it — the grammar curriculum, the revision sequence, the sustained practice across three years has produced real and permanent development. But the next project does not care about the previous one's completion. It asks to be approached with the same openness the Year One freewrite required: without the inner critic, without the comparative assessment, without the standard of the finished thesis applied to the rough notes toward the next thing.",
            "This is not a regression. It is the correct relationship to early materials. The beginner's permission — the permission to not know, to follow, to produce without evaluating — is not available to the writer who insists on applying the Year Three standard to Year Zero drafts. Grant the permission deliberately. The Year Three craft is available for revision. The seed document is not yet revision. It is the before.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Free Curiosity",
      blocks: [
        {
          type: "journal",
          title: "What Are You Curious About Right Now?",
          question:
            "What are you curious about right now — not in connection with the thesis, not in connection with the program's obligations, not in connection with any project you have committed to or plan to commit to, but freely, unexpectedly, in the way that curiosity operates when nothing is directing it? Follow that curiosity for twenty minutes without stopping. Write wherever it goes. Do not evaluate whether it is a subject worth writing about. Do not assess whether it could become a project. Do not perform curiosity about a subject you think you should be curious about — write about what is actually drawing your attention, however unexpected, however apparently unrelated to your established interests as a writer. The curiosity that arrives uninvited is the curiosity most worth following. Follow it.",
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
            "By the end of this week you should have: written the 500-word seed document — prose toward the next project, without stopping, without evaluation; completed the AI Socratic workshop and written toward all five questions; noted which question produced the most resistance and written toward that one last; written the single sentence that describes what the material seems to be about in a way the seed document alone did not reach; written the 600-word grammar curriculum retrospective and filed it in the teaching portfolio; begun the self-selected reading — the book that has been waiting. The final arc of the program is open.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Weeks 32–36",
          paragraphs: [
            "Week 32 is the essay as ongoing form — the personal essay and the literary magazine as the professional infrastructure of the between-projects period, alongside an aesthetic declaration. Week 33 is experimental form as permanent practice. Week 34 is the writing retreat as a practice — the residency application as a real document for the next project. Week 35 is the craft talk for the teaching portfolio. Week 36 is the final week: the completion, and the synthesis of who the writer is at the program's end. Five weeks remain.",
          ],
        },
      ],
    },
  ],
};
