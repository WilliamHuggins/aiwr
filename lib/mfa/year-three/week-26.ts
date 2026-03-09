import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek26Data: WeekData = {
  weekNumber: 26,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Defense and Reading",
  title: "The Thesis Defense — Articulating the Work",
  emphasizedWord: "Articulation",
  deck: "The thesis defense is an academic requirement, but it is also a craft development: the ability to talk about your own work with precision, rigor, and genuine intellectual engagement is a skill that will serve you throughout your career — in interviews, in classrooms, in grant applications, and in conversations with editors and agents. This week prepares both the defense presentation and the craft of self-articulation. It also closes the grammar curriculum: three years of syntactic study, accounted for in 400 words.",
  meta: [
    { label: "Commitment", value: "10–15 hrs" },
    { label: "Program Week", value: "98 of 108" },
    { label: "Craft Focus", value: "Defense Presentation — 10–15 Minutes, Six Sections" },
    { label: "Grammar", value: "Phase 8 Final — Syntactic Development: The Closing Reflection" },
    { label: "Deliverable", value: "Defense Presentation Written, Practiced, and AI-Stress-Tested" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Art of Talking About Your Own Work — Precision Without Performance",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Most writers are better at writing about writing in the abstract than talking about their own specific work. The craft lecture, the workshop comment, the published essay on form and influence — these are forms the serious writer practices and develops. But the direct, first-person account of what a specific manuscript is doing, why it makes the formal choices it makes, what it was reaching toward and what it achieved and what it remains reaching toward — this is different, and harder. It requires a kind of self-knowledge that the making of the work does not automatically produce. Writers often discover what they were doing only after they have done it; the defense asks them to articulate that discovery out loud, in front of people, at a level of precision that makes the work's intelligence visible.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The thesis defense is not a performance of certainty. The committee has read the manuscript. They know it is not a perfect object. They know you know it is not a perfect object. The defense that presents the work as fully achieved — that claims every formal decision was the correct one, that the manuscript resolved every tension it set out to address, that the writer is satisfied with every aspect of the result — is the defense that tells the committee the writer has not fully understood their own work. The defense that is honest about the discoveries the writing produced, the problems it could not resolve, the terrain it was unable to fully explore, and the questions it leaves open — that defense demonstrates the kind of intellectual engagement with the work that is the mark of a serious literary mind.",
          ],
        },
        {
          type: "pullquote",
          quote: "The best thesis defenses are not performances of certainty — they are honest accounts of the work's discoveries and unresolved tensions. The questions you found unanswerable, the craft problems you solved imperfectly, the thematic terrain you were unable to fully explore — discussing these honestly demonstrates more intellectual sophistication than a defense of the work as complete and perfect.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Six-Section Defense — What Each Section Must Do",
          paragraphs: [
            "The governing question and why it matters to you (2 minutes): this is not a summary of the thesis's subject matter — it is an account of why this material claimed the writer's three years. Not 'the thesis is about grief' but 'the thesis is pursuing the question of whether grief is a form of knowledge — whether losing someone teaches the griever something they could not have learned any other way, and if so, what that something is.' The governing question should be stated with the precision the three years of working on it have produced. It should be a genuine question — one that the thesis approaches rather than answers. And the account of why it matters to the writer personally should be specific: not 'this is a subject that interests me' but the actual reason, the actual stake.",
            "The form and why it is the right vessel (2 minutes): every formal decision in the thesis — the genre, the structure, the point of view, the use of time, the relationship between narrator and material — should be defensible as a choice that serves the governing question. The defense does not need to justify every decision, but it should demonstrate that the major formal choices were made deliberately and that the writer can articulate the relationship between form and content: why this material needed this form, and what a different form would have lost. The account of form is often the most intellectually interesting part of the defense for a committee that has been reading writing about writing for a long time.",
            "The primary influences and how they are visible (2 minutes): every manuscript is a conversation with the literature that preceded it, and the writer who can name their primary influences and describe specifically how those influences are visible in the work — in the prose style, the structural approach, the handling of a specific craft challenge — is the writer who has thought rigorously about their own literary inheritance. The influences should be named as specific writers and specific works, and the description of their visibility should be concrete: not 'I was influenced by Toni Morrison's use of voice' but 'Morrison's handling of collective memory in Beloved — the way the community's history accumulates in the prose's texture rather than in explicit narration — is the model for the way my thesis renders the narrator's relationship to the past.'",
            "The most significant craft challenge and how it was addressed (2 minutes): every thesis has a specific technical problem that required more sustained attention than any other — a structural problem, a voice problem, a problem of time or perspective or scene that the revision sequence addressed but perhaps did not fully resolve. Naming this problem honestly and describing the specific revision approach the writer brought to it is one of the defense's most effective moments, because it demonstrates that the writer is a rigorous editor of their own work. The craft challenge should be specific — not 'I struggled with structure' but the specific structural problem — and the account of how it was addressed should name the specific revision approach taken, including any approach that did not work before the one that did.",
            "What the writing taught you (2 minutes): this is the defense's most intellectually generous section, and the one most likely to be remembered by the committee. The writer who can say specifically what they learned — about the subject, about the form, about themselves as a writer — that they did not know before writing the thesis is the writer whose engagement with their own work is fully alive. The learning should be concrete and specific: not 'I learned a lot about revision' but the specific discovery, the thing that changed, the understanding that the three years of work produced that no amount of research or study could have produced.",
            "What comes next (1 minute): a brief, honest account of how this work positions the writer for the next project — not a summary of the next book, but a statement about where the thesis has left the writer intellectually and formally, what questions it has opened that the next work might pursue, and what the writer now knows about their own practice that they did not know at the program's beginning. This section should be forward-looking without being speculative: not 'I think I will write a novel about X' but 'the thesis has shown me that I am drawn to the intersection of personal history and cultural memory, and I want to pursue that intersection at a larger scale in the next project.'",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Defending Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction defense should be prepared for questions about the relationship between the fiction's formal choices and its thematic commitments — questions that ask the writer to move between the level of the sentence and the level of the novel's moral and emotional architecture. The committee member who asks 'why does the narrative stay in close third person rather than first?' is asking a craft question; the writer who can answer it by explaining what first person would have given up — the irony of the distance, the reader's access to the gap between what the narrator perceives and what the prose is showing — is demonstrating the kind of formal intelligence the defense is designed to reveal.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing defense should address the relationship between the script's formal constraints — the act structure, the scene compression, the dialogue's management of subtext — and the story's dramatic argument. The committee member who asks 'why does Act Two feel like it's working against the protagonist rather than developing them?' is asking a structural question about dramatic momentum; the writer who can explain the Act Two design as a deliberate choice — the protagonist's resistance to growth as the act's dramatic subject — is demonstrating the structural intelligence the form requires. The defense should also address the relationship between the written script and the production it implies: what the writer's visual imagination contributed to the work's formal choices.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir defense must be prepared for ethical as well as formal questions — questions about the representation of living subjects, the reconstruction of dialogue, the compression of time, the composite figures if any exist. The writer who can address these questions with the full intellectual seriousness they deserve — not defensively, not apologetically, but with a rigorous account of the ethical framework the memoir was written within and the specific decisions made at the points of greatest ethical complexity — is the writer who has thought as carefully about the memoir's obligations as about its literary ambitions. The ethical questions are not separate from the craft questions; in memoir they are the same questions.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 8 Final — Syntactic Development: The Closing Reflection",
      blocks: [
        {
          type: "grammar",
          title: "Phase 8 · The Last Grammar Exercise — Three Years Accounted For",
          intro: [
            "This is the final grammar exercise of the program. It is not an application exercise — there is no new syntactic technique to learn, no passage to annotate or imitate. It is a reflective exercise: an honest accounting of what three years of systematic syntactic study has done to the writer's prose, to the writer's reading, and to the writer's relationship to the sentence as a unit of both craft and thought.",
            "The grammar curriculum began in Year One, Week One, with kernel sentences — the irreducible core of an English clause, stripped of all modification, all elaboration, all the syntactic machinery that literary prose uses to make a sentence more than a statement. It ends here, in Year Three, Week 26, with the full Phase 1 through Phase 8 toolkit available — from kernel sentences through rhetorical figures, from punctuation as craft through style synthesis, from the first naive sentence the Year One writer produced to the voice passage annotated in Week 22. The distance between those two points is the curriculum's product. This exercise accounts for it.",
          ],
          rule: "Write a 400-word reflection on your syntactic development across the three years of the program. The reflection should address four questions: (1) What do you know now that you didn't know in Year One, Week One — not the concepts from the curriculum, but the specific thing you understand about your own prose that you could not have articulated then? (2) Which Phase 1 through Phase 8 concepts have become fully automatic — so integrated into your sentence-making that you no longer apply them as techniques but simply use them as a writer? (3) Which concepts remain deliberate — which syntactic tools require conscious application rather than natural deployment, and what does that tell you about where your next years of sentence-level development will focus? (4) What is the most important thing the grammar curriculum has done for your prose — not the most interesting concept or the most elegant technique, but the change in the relationship between your intention and your sentence-level execution that three years of systematic syntactic study has produced? This reflection is a document for the teaching portfolio. It is the closing statement of the grammar curriculum, and it should be written with the same care as every grammar exercise before it.",
          examples: [
            {
              label: "What a strong closing reflection addresses",
              text: "A writer who began the program over-relying on simple declarative sentences — strong in their clarity and directness, but limited in their capacity to hold complexity — might write: 'The participial phrase gave me a way to be in two temporal positions simultaneously, which is what my prose needed and didn't have — the sentence that holds the present action while also reaching back or forward. That tool is now automatic. What remains deliberate is the rhetorical figure: I can deploy anaphora when I intend it, but I don't yet reach for it naturally. The curriculum has made the gap between my syntactic intention and my sentence-level execution smaller. It has not closed. The gap is now the right size for a writer of my current capacity — specific enough to work on, not so large it produces despair.'",
            },
          ],
          outro: [
            "The closing reflection, filed in the teaching portfolio alongside the Week 20 aesthetic declaration, the Week 22 voice passage, and the Week 15 master sentence analysis, constitutes the grammar curriculum's terminal document: a record of the syntactic education the program provided and the writer's honest account of what it produced. It is also a prospective document: the grammar work of Phase 1 through Phase 8 is complete, but the syntactic development of the writer it has trained is not. That development continues for as long as the writer writes — which is to say, for the rest of the writing life.",
          ],
          exercise:
            "Write a 400-word reflection on syntactic development across three years: what you now know about your own prose; which concepts are automatic; which remain deliberate; what the curriculum's most important single contribution to your prose has been. File the reflection in the teaching portfolio. This is the final grammar exercise of the program.",
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
              title: "Your thesis proposal — from Year Two, Week 12",
              author: "You — from Year Two",
              href: "",
              note: "Required. Read the thesis proposal as a historical document — a record of what you understood the thesis to be before it existed in its current form. The proposal describes the project as the writer imagined it before the making of it revealed what it actually was. Read it with the curiosity you would bring to a writer's correspondence or notebooks: what did you think you were doing? Where were you right? Where were you wrong in ways that turned out to be productive — wrong toward something better than what you planned? The distance between the proposal and the completed thesis is the map of the project's development, and the defense is in part an account of that distance.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Your Year One and Year Two synthesis statements",
              author: "You — from Years One and Two",
              href: "",
              note: "Required. Read both synthesis statements — the Year One account of who you were becoming as a writer, and the Year Two account of who you had become — as the record of a development that the Year Three program has continued. The Year One writer who wrote the first synthesis statement is not the writer defending the thesis. Tracing the line from that writer to this one is part of what the defense presentation's 'what the writing taught you' section should account for.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Defense Presentation — Written, Revised, and Practiced Aloud",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the defense presentation: a 10 to 15 minute talk, 700 to 900 words, organized into the six sections described in the craft lecture. Write it to be spoken, not read — the sentences should be shorter and clearer than the prose of the thesis, the vocabulary should be the writer's natural speaking vocabulary, and the transitions between sections should sound like the spoken language of a person moving through a prepared argument rather than the written language of an essay making its points.",
            "After writing, read it aloud — timed. Adjust the length if necessary to fall within the 10 to 15 minute range at speaking pace. Then revise for two specific qualities: precision and honesty. Every claim in the defense should be as specific as the writer can make it — not 'I was influenced by Toni Morrison' but the specific influence, the specific mechanism of influence, the specific place in the thesis where that influence is visible. And every claim should be honest — including the claim about the most significant craft challenge, which should name the problem precisely and describe the revision approach including what did not work.",
            "Practice the defense aloud at least twice before submitting it to the AI workshop. The defense that has been spoken aloud twice before the AI assessment is a defense that has already been tested at the level of the spoken sentence; the AI's assessment will then be more useful, because the weak claims and unsupported assertions the AI identifies will be claims whose weakness the writer has already begun to feel in the speaking.",
          ],
          target: "700–900 word defense presentation in six sections; read aloud and timed; revised for precision and honesty; practiced twice before AI assessment",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Simulated Committee — Three Hard Questions",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste the full defense presentation. The AI reads as a thesis committee member who has read the manuscript and is prepared to ask genuine intellectual questions — not hostile questions, but the kind that probe the claims the presentation makes and press the writer to go further.",
          prompt:
            "Read this thesis defense presentation as a member of a thesis committee who has read the manuscript and is preparing to engage seriously with the writer's account of their own work. I want you to do three things: (1) Identify the three most intellectually interesting claims made in this presentation — the claims that most fully demonstrate the writer's genuine engagement with their own work, the claims you would most want to pursue in a committee conversation. Explain briefly what makes each one interesting. (2) Identify the two weakest claims — the assertions made without sufficient precision or evidence, the moments where the presentation stays at the level of generality when it should go specific, the places where the writer is describing the work from the outside rather than from full knowledge of it from the inside. Be honest: these are the places where a committee member would press for more. (3) Generate three questions you would ask following this presentation. Not gotcha questions designed to expose weakness, but genuine intellectual inquiries about the work's formal decisions and thematic commitments — questions that a serious reader of the manuscript would genuinely want to discuss. Make the questions specific to this presentation's actual claims, not general thesis-defense questions.",
          questions: [
            "The three most intellectually interesting claims: these are the presentation's strengths — the moments where the writer's self-knowledge is most fully available and most specifically expressed. Read each claim the AI identifies and ask: is this the fullest version of this claim I can make, or has the AI identified its interest at a level of generality that the defense presentation's version doesn't fully support? For each of the three claims, write one sentence that makes the claim as specific and precise as the writer's actual understanding of the thesis can make it. The defense that delivers these claims at maximum precision is the defense that demonstrates the writer's full intellectual engagement with their own work.",
            "The two weakest claims: apply the diagnosis. For each weak claim, the revision is one of two things: either go specific — replace the generality with the concrete detail, the named influence, the precise craft mechanism that the generality is gesturing toward — or remove the claim if the specificity is not available. A defense presentation that makes eight strong claims is better than one that makes ten claims, two of which are unsupported. Cut or strengthen. Do not leave the weak claims in place on the grounds that the committee might not notice them. The committee will notice them.",
            "The three questions: write answers to all three before the defense. Not polished answers — notes on what you would say if a committee member asked each question. The answer should be honest and specific: if the question touches on a genuinely unresolved tension in the work, the answer should acknowledge the tension and describe the writer's current thinking about it, not paper over it with a confident claim. The committee member who asked a genuine intellectual question is a committee member who wants to think with the writer about the work; the answer that engages that invitation is the answer that makes the defense a genuine intellectual event rather than an academic ritual.",
            "Additional questions the presentation might generate: beyond the three the AI identified, what other questions could a serious committee raise about the formal decisions, the thematic commitments, or the ethical choices of this specific manuscript? The writer who has prepared for five to seven questions — who has thought through the range of intellectual challenges a committee could bring — enters the defense with the kind of readiness that allows the conversation to feel generative rather than threatening. The prepared writer is the writer who can be honest, because they are not scrambling to defend every decision; they have already thought about every decision and know what they believe about each one.",
          ],
          note: "The AI assessment of the defense presentation is most useful when the writer has already spoken the presentation aloud twice and has a felt sense of where the claims are strong and where they are not. The AI's identification of weak claims should feel like confirmation of what the writer already sensed, plus new specificity about what is weak and why. If the AI identifies weakness the writer had not noticed, that is the most valuable finding: the claim that looks fine on the page but is not strong enough to survive oral examination.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Honest Defense",
      blocks: [
        {
          type: "tip",
          icon: "🎓",
          name: "What the Committee Already Knows — and What Honesty Demonstrates",
          paragraphs: [
            "The committee has read the thesis. They know where it is strong and where it is not. They know the craft problem the revision addressed imperfectly. They know the thematic tension that the ending approaches but does not fully resolve. None of this is hidden from them by the defense presentation. The defense that performs certainty about a manuscript the committee has read and assessed is the defense that tells the committee the writer has not yet developed the self-knowledge that characterizes a mature literary mind.",
            "The defense that says 'the ending was the hardest formal problem in the manuscript, and I addressed it by doing X, and the result is better than what I had before but does not fully resolve the tension between Y and Z, which I believe is a genuine tension in the material rather than a failure of execution' — that defense tells the committee the writer is a rigorous reader of their own work, understands the difference between a craft problem and an artistic decision, and is prepared to continue developing as a writer beyond the thesis. That is what the defense is for. Be honest. The committee will respect it, and the defense will be better for it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Year That Wasn't Spent",
      blocks: [
        {
          type: "journal",
          title: "One More Year — What You Would Do",
          question:
            "If you could add one year to the program — one more year to work on this thesis, with everything you now know about it that you did not know at the beginning — what would you do differently? Not what you wish you had done in Years One and Two, which is a different question — what would you do in a hypothetical Year Four, with the manuscript in its current state, if time were not the constraint it is? Name the specific revisions, the specific explorations, the specific aspects of the work you would pursue further. Then: what would you still do the same? Not what you are proud of in the abstract, but the specific formal decisions, the specific passages, the specific structural choices that a Year Four of revision would leave untouched. The distance between what you would change and what you would leave is the most honest account of the thesis's current state and your relationship to it. Write about both for twenty minutes.",
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
            "By the end of this week you should have: written the 700 to 900 word defense presentation in six sections; read it aloud twice and timed it; revised it for precision and honesty; submitted it to the AI committee simulation and applied the findings — strengthening or cutting the two weak claims, writing notes on answers to the three generated questions; written the 400-word grammar closing reflection and filed it in the teaching portfolio; read the thesis proposal and both synthesis statements; written the journal entry on the hypothetical Year Four. The grammar curriculum is complete. The defense is prepared.",
          ],
        },
        {
          type: "card",
          title: "The Program's Final Arc — Weeks 27 Through 36",
          paragraphs: [
            "Week 27 is submission and the completion letter — a letter written to the Year One, Week One writer describing what the program has been, what the thesis is, and what lies ahead. Weeks 28 through 30 are the public reading, its final preparation, and the defense itself. Weeks 31 through 36 are the program's final five weeks: what comes after the thesis, the next project's first notes, the essay form as permanent practice, experimental form as permanent practice, the craft talk for the teaching portfolio, and the final synthesis — who the writer is now, at the program's end, and what the writing life they are beginning looks like.",
          ],
        },
      ],
    },
  ],
};
