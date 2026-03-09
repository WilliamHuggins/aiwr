import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek35Data: WeekData = {
  weekNumber: 35,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "The Writing Life",
  title: "Teaching Craft — The Writer as Teacher",
  emphasizedWord: "Teaching",
  deck: "Most serious writers teach at some point in their careers, and teaching craft is itself a form of craft development: articulating what you know, designing exercises that isolate specific skills, and responding to other writers' work with precision and generosity. This week completes the professional preparation curriculum by producing the teaching portfolio's centerpiece document — the craft talk — alongside the statement of teaching philosophy and a sample course description. One week remains after this.",
  meta: [
    { label: "Commitment", value: "10–12 hrs" },
    { label: "Program Week", value: "107 of 108" },
    { label: "Craft Focus", value: "The Craft Talk — Argument, Example, Exercise" },
    { label: "Grammar", value: "The Craft Talk as Syntax — Outline of a Grammatical Concept Talk" },
    { label: "Deliverable", value: "Craft Talk (1,200–1,500 words) + Teaching Philosophy Statement (600–800 words) + Course Description (one page)" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Teaching What You Know — The Craft Talk as Its Own Genre",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The craft talk — the twenty-to-thirty-minute presentation on a specific aspect of literary craft, delivered to writers at a workshop, conference, residency, or MFA program — is a distinct literary genre with its own formal requirements. It is not a lecture, in the academic sense of a systematic survey of a topic's territory. It is not a reading, in the sense of presenting one's own creative work. It is closer to the essay: an argument organized around a central claim, advanced through specific examples analyzed in detail, arriving at a conclusion that changes how the audience sees the work they are making. The craft talk that works is the craft talk that makes the writers who hear it read differently when they leave — and write differently the following week.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The central requirement of the craft talk — the requirement that distinguishes the talk worth giving from the talk that merely passes twenty minutes — is that it must be organized around an argument rather than an explanation. The craft talk that explains what scene is, lists its components, and offers examples of scenes from canonical fiction is a useful survey. The craft talk that argues that the scene's primary function is not to advance plot but to establish the specific cost of a relationship — and that demonstrates this claim through close analysis of three scenes in which nothing externally happens and everything internally changes — is a talk that changes how writers understand scene. The argument does not have to be controversial or counterintuitive; it has to be genuinely claimed, not merely asserted. The writer who believes the claim deeply enough to have written toward it will deliver it differently than the writer who assembled the claim from available materials.",
          ],
        },
        {
          type: "pullquote",
          quote: "The best craft talks don't explain a concept — they change how writers see their work. The test of a good craft talk is not whether the audience understands the concept when they leave, but whether they will read differently afterward and write differently next week. Design toward that transformation.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Architecture of the Craft Talk — Three Components That Must Be Present",
          paragraphs: [
            "The central argument: every craft talk should be expressible as a single sentence that makes a genuine claim — not a description ('this talk is about subtext') but an argument ('subtext is not what characters hide from each other; it is what they do not yet know they are saying'). That sentence is the talk's governing claim, and every element of the talk — the examples, the analysis, the exercise — should demonstrate and advance it. The writer who can state the central argument in one sentence before writing the talk will produce a more focused and persuasive talk than the writer who assembles the talk from interesting observations and hopes a claim emerges from them. Write the sentence first. The talk is the evidence for it.",
            "The analyzed examples: the craft talk's primary content is not exposition but demonstration — close analysis of published prose that makes the argument's claim visible. Three or four examples analyzed in detail are more persuasive than ten examples mentioned briefly. The analysis should be specific: not 'Carver uses subtext effectively here' but the specific words, the specific silence, the specific gap between what the character says and what the scene's prior context has established — analyzed in enough detail that the audience sees exactly what the talk is claiming to be true. The examples should be varied enough to demonstrate that the claim holds across different writers, forms, and subject matters, but focused enough that each one advances the same argument rather than introducing adjacent claims.",
            "The exercise: every craft talk should culminate in a writing exercise that isolates the concept being taught. The exercise is not an optional addition; it is the talk's final proof. The exercise that genuinely isolates the concept — that cannot be completed without deploying the specific skill the talk has been teaching — is the exercise that transforms the talk from intellectual experience to practical tool. The exercise that addresses something adjacent to the concept, or that can be completed using the skills the writer already has, does not complete the talk's arc. Design the exercise first, as a test: if a writer who had not attended the talk could complete it successfully using their existing skills, the exercise is not specific enough.",
          ],
        },
        {
          type: "card",
          title: "Teaching What You Know, Not What You Wish You Knew",
          paragraphs: [
            "The most effective craft teachers teach from their own practice rather than from abstract principle. The writer who says 'I believe students learn by reading widely' is less convincing in a teaching portfolio than the writer who says 'when I spent a semester annotating the syntax of every sentence in Baldwin's first chapter, this is what I learned, and this is the exercise I now give students based on that learning.' The specificity is the credibility. It demonstrates that the teaching philosophy is grounded in actual craft discovery rather than in general good intentions.",
            "The craft talk you are most qualified to give is not the talk on the most prestigious topic, or the talk on the concept the most celebrated writers teach, or the talk on the concept your program's most respected instructor favored. It is the talk on the concept that has most changed your own writing — the concept you understand at the level of practice, not just the level of definition. That understanding is what makes the analyzed examples feel chosen rather than assembled, what makes the central argument feel believed rather than assembled, what makes the exercise feel designed rather than appended. The writer who teaches from genuine knowledge produces a different talk than the writer who teaches from general competence. Teach from genuine knowledge.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Craft Talk in Each Track's Teaching Practice",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For the fiction writer, the most productive craft talk subjects are the concepts that are most commonly misunderstood or underteached in workshop: subtext and the gap between what characters say and what the scene establishes; the relationship between sentence rhythm and emotional register; the specific mechanics of free indirect discourse; the distinction between scene and summary and when summary is the precisely right choice; the function of the final sentence of a chapter. Each of these is a concept that most fiction writers know as a name and few know as a practice. The talk that demonstrates the practice — through analyzed examples, through the central argument that changes how the concept is seen — is the talk that most changes how students write.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For the dramatic writer, the craft talk subjects that most reward close analysis are the concepts specific to the form's relationship to performance: the scene that enters late and leaves early and what that discipline produces; the difference between dialogue that sounds natural and dialogue that sounds written and why the latter is usually preferable; the function of silence and stage direction in carrying subtext the dialogue cannot carry; the specific formal difference between the end of a scene and the end of an act. These are concepts the dramatic writing curriculum often covers taxonomically — here is what they are — without covering at the level of practice — here is what they do and how you deploy them. The craft talk addresses the practice.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For the memoir and essay writer, the craft talk subjects that most reward the three-component structure are the concepts that distinguish literary nonfiction from other forms of nonfiction writing: the role of the retrospective narrator's intelligence in memoir and how its presence or absence changes what the work can do; the distinction between scene and reflection and how the ratio between them shapes the reader's relationship to the material; the governing question in the personal essay and how its presence or absence determines whether the essay has forward pressure; the earned ending and what distinguishes it from the ending that states its theme. Each of these is a concept the CNF writer has been working with throughout the program. The craft talk is the opportunity to account for what has been learned at the level of practice.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Craft Talk as Syntax — Outline of a Grammatical Concept Talk",
      blocks: [
        {
          type: "grammar",
          title: "The Grammar Curriculum as Teachable Material",
          intro: [
            "The eight-phase grammar curriculum has produced, across three years, a systematic knowledge of how sentences work at the level of structure, rhetoric, and style. That knowledge is now the writer's permanent intellectual property — available for the writing life and, if the writer teaches, available for the teaching life. This exercise asks the writer to organize one grammatical concept from the curriculum into the architecture of a craft talk: central argument, analyzed examples, and isolating exercise.",
            "The exercise is not the craft talk written in this week's writing exercise — that talk can be on any craft concept the writer understands deeply. This is a shorter preparation document: the outline of a talk specifically on a grammatical concept, designed to demonstrate that the grammar curriculum's content is teachable material, not only acquired knowledge. The distinction matters for the teaching portfolio: the writer who can teach grammar as craft — who can make the cumulative sentence or the absolute phrase or free indirect discourse into an argument about what prose can do — is the writer who has something specific and unusual to offer as a teacher.",
          ],
          rule: "Write the outline of a craft talk on the grammatical concept from the curriculum you find most transformative — the concept that most changed your own prose. The outline should include five elements: (1) the central argument stated in one sentence (not a description of the concept but a claim about what it does); (2) three published examples you would analyze in the talk, each with a one-sentence account of what the analysis would demonstrate; (3) a brief account of the biographical or compositional context in which you personally discovered or understood this concept — when it changed how you write; (4) the isolating exercise; and (5) a one-sentence account of what a writer who completes the exercise will be able to do that they could not do before. The outline is 300–400 words. File it with the teaching portfolio materials.",
          examples: [
            {
              label: "An outline that demonstrates the concept's teachability",
              text: "Central argument: 'The absolute phrase does not describe action — it creates simultaneity, and simultaneity is the form that consciousness actually takes.' Examples: (1) Chekhov's 'The Kiss' — the absolute phrases in the departure scene that hold multiple states of awareness at once; (2) Toni Morrison's Beloved — the absolute constructions that allow the narrator to be in multiple times at once; (3) a sentence from the writer's own thesis in which the absolute phrase was discovered rather than chosen. Personal context: 'I wrote \"her hands shaking\" for three drafts before I understood that the participial phrase made it sequential — first she shook, then she did the thing. The absolute phrase \"her hands shaking\" makes it simultaneous. That is a different claim about consciousness.' Exercise: revise a passage of ten sentences, converting every sequential construction to an absolute wherever simultaneity is true. What the exercise produces: the ability to hear when sequence is a lie.",
            },
          ],
          outro: [
            "The grammatical concept craft talk outline joins the teaching portfolio alongside the Week 35 teaching philosophy statement and course description, the full craft talk from this week's writing exercise, and the grammar portfolio documents accumulated across the final arc. Together, these materials constitute a teaching portfolio that is grounded in specific craft knowledge rather than general pedagogical principle — the portfolio of a writer who teaches from practice.",
          ],
          exercise:
            "Write a 300–400 word outline for a craft talk on the most transformative grammatical concept from the curriculum: central argument (one sentence), three analyzed examples (one sentence each), personal discovery context, isolating exercise, and what the exercise produces. File in the teaching portfolio.",
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
              title: "A Swim in a Pond in the Rain",
              author: "George Saunders",
              href: "",
              note: "Read any single chapter — the Chekhov chapters are the most instructive models for the written craft talk's form, but any chapter will serve. Read it specifically for Saunders's argumentative method: how does he move from a specific moment in the story to a general claim about how fiction works? Where is the central argument of the chapter stated, and how does it govern the analysis that precedes and follows it? The Saunders craft talk is the best available contemporary model for the genre because it demonstrates what close analysis of a specific published text can produce as a claim about craft — not 'Chekhov is good' but a specific argument about what a specific choice in a specific story does that no other choice would have done.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Mystery and Manners",
              author: "Flannery O'Connor",
              href: "",
              note: "Read any of the collected lectures — 'The Nature and Aim of Fiction,' 'Writing Short Stories,' or 'The Regional Writer.' Read them as models of the lecture-essay on craft: the form in which a writer with strong aesthetic convictions uses the occasion of a talk to make those convictions available to other writers without imposing them. Notice O'Connor's rhetorical method: she rarely argues by assertion; she argues by demonstration, by the specific example that makes the claim visible. Notice also the tone — the warmth and specificity of address to an audience of writers, not an audience of critics. That tone is the right tone for the craft talk.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Three Teaching Portfolio Documents — The Full Professional Teaching Preparation",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This week produces three documents for the teaching portfolio, together constituting the professional teaching preparation the program has built toward. All three should be polished to professional standard — these are documents that will be sent to search committees, submitted with residency applications that include a teaching component, and used in any context where the writer's teaching practice needs to be represented.",
            "Document one — the craft talk (1,200–1,500 words): write a complete craft talk on any craft concept you now understand deeply enough to teach. The talk must be organized around a central argument stated explicitly, advanced through close analysis of three or four published examples, and culminating in a specific exercise that isolates the concept. The concept can be drawn from any area of the curriculum — structure, voice, scene construction, the sentence, subtext, the lyric essay, the ending — or from the grammar curriculum. Choose the concept you understand at the level of practice: the concept that has most changed your own writing and that you could talk about for twenty minutes with genuine conviction.",
            "Document two — the statement of teaching philosophy (600–800 words): write a statement of teaching philosophy addressing your approach to teaching creative writing, your beliefs about what writing instruction can and cannot do, one specific pedagogical strategy you employ, and how your own writing practice informs your teaching. The statement should be specific — grounded in your actual craft discoveries and your actual experience as a student in this program — rather than general. The teacher who says 'I believe in the importance of reading widely' is making a claim any teacher could make; the teacher who says 'my own experience with master sentence analysis taught me that the best way to understand voice is to inhabit another writer's syntax for a week — so I assign that exercise in every course I teach' is making a claim only this teacher can make. Ground the philosophy in the practice.",
            "Document three — the course description (one page): write a one-page description of a creative writing course you would teach at the undergraduate or MFA level. The description should include the course's title, a paragraph describing its subject and approach, the primary texts (five to eight titles), and a brief account of the major assignments. The course should be the course you would most want to teach — the one that would allow you to bring your specific craft knowledge to bear on the most important questions you have spent three years investigating.",
          ],
          target: "Craft talk (1,200–1,500 words) + teaching philosophy statement (600–800 words) + course description (one page) — all three documents polished to professional standard for the teaching portfolio",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Craft Talk Under Assessment — Five Diagnostic Questions",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste the completed craft talk. The AI reads as a student hearing it for the first time — not as a craft expert assessing its intellectual content, but as a writer in the audience trying to understand and apply what the talk is teaching. The diagnostic questions address the talk's clarity, persuasiveness, and practical utility.",
          prompt:
            "Read this craft talk as a writer hearing it for the first time, who has come to the talk hoping to learn something that will change how they write. I want your assessment on five questions: (1) The central argument — is it clear and genuinely argumentative, or does the talk explain the concept without making a specific claim about it? State the central argument as you understand it in one sentence. If you cannot state it in one sentence, the argument is not yet doing its work. (2) The three most illuminating moments — where in the talk does the concept become suddenly and specifically clear? What is happening in those moments that is not happening in the rest of the talk? (3) Where does the talk lose its thread — become too technical, too abstract, or too dependent on prior knowledge the audience may not have? What specific revision would restore the thread? (4) The exercise — does it genuinely isolate the concept being taught, or could a writer complete it successfully using the skills they already have? If the exercise is not sufficiently isolating, what revision would make it so? (5) One additional published example — from any work in any genre — that would strengthen the talk's central argument and that is not already included.",
          questions: [
            "The central argument test: if the AI states the argument in a sentence that is not the argument you intended — if the claim the AI heard is not the claim you were making — the talk has a clarity problem that the revision must address. The argument that the writer holds but the audience does not receive is not functioning as the talk's central organizing claim. Identify where the gap between the intended argument and the received argument opened, and revise toward the explicitly stated claim. The craft talk can state its central argument explicitly — this is not a fiction workshop where the theme must be earned rather than stated; it is a craft argument, and an argument benefits from being stated.",
            "The three illuminating moments: study what the AI identifies as the moments where the concept becomes suddenly clear. What is happening in those moments? Almost certainly, it is one of two things: either the analysis is most specific and close (the analysis of a particular sentence or a particular formal choice in a particular published text), or the writer's personal account of their own encounter with the concept is most present. These are the two sources of illumination in the craft talk — the specific example analyzed in detail, and the writer's own practice as evidence. The moments where the talk is not illuminating are almost always the moments where neither of these sources is present: where the talk is explaining rather than demonstrating, surveying rather than arguing.",
            "The lost thread: the moment where the AI identifies the talk as becoming too technical or too abstract is the moment where the writer has prioritized their own knowledge of the concept over the audience's experience of receiving it. The craft talk's obligation to the audience — the obligation to remain accessible to writers at different levels without sacrificing the precision the concept requires — is the talk's hardest formal challenge. The revision that restores the thread is usually one of two moves: a specific example inserted at the point of abstraction, or a sentence that explicitly acknowledges what the writer is assuming the audience knows and provides the context they need.",
            "The exercise test: the AI's assessment of whether the exercise genuinely isolates the concept is the most practically useful finding of the workshop. An exercise the AI identifies as addressable with existing skills is an exercise that has not been designed specifically enough. The revision is not to change the exercise's subject but to add the constraint that forces the deployment of the specific skill: not 'write a scene' but 'write a scene in which every action is expressed through an absolute phrase and no action is expressed sequentially.' The constraint is what isolates; the constraint is what teaches.",
          ],
          note: "After applying the AI's diagnostic findings to the craft talk, read the revised version aloud. The craft talk that will be delivered in person — at a workshop, a conference, a residency — needs to work at speaking pace and in the speaking voice. The revision that produces a better written essay but a worse spoken presentation is the wrong revision. Read it aloud and listen: where does the spoken version stumble, where does the written precision translate into spoken opacity? Revise for the ear as well as the eye.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Craft Talk That Changes Something",
      blocks: [
        {
          type: "tip",
          icon: "🎙",
          name: "Design Toward Transformation, Not Understanding",
          paragraphs: [
            "The craft talk whose goal is understanding — whose measure of success is whether the audience leaves knowing what the concept is — is a worthwhile talk. The craft talk whose goal is transformation — whose measure of success is whether the audience leaves seeing their work differently — is the talk worth giving again. The difference is not in the intellectual content; it is in the design. The talk designed toward transformation asks, at every moment: will this make the writer in the audience see the sentence they are writing differently? Will this analysis produce a new way of reading that the writer will carry out of the room? If the answer at any point is no — if a section of the talk is providing information without producing transformation — that section is an opportunity to get closer to the thing the talk is actually for.",
            "The journal prompt this week is the most direct path to the craft talk you are most qualified to give: what do you know now that you wish someone had told you before you began? The knowledge that is hard-won — that arrived through difficulty, through repeated failure, through the moment in the thesis when the problem finally revealed its solution — is the knowledge that changes something when it is taught. It has weight because it cost something. Teach that.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Knowledge That Cost Something",
      blocks: [
        {
          type: "journal",
          title: "What You Wish Someone Had Told You Before You Began",
          question:
            "What do you know about writing now — specifically, concretely, at the level of practice — that you wish someone had told you before you began this program? Not the general wisdom you could have found in any craft book, but the specific, hard-won knowledge that arrived through your own work on this thesis, in this program, across these three years — the knowledge that changed something about how you write and that you could not have received secondhand but only through the experience of producing the work. Write it down. That is the craft talk you are most qualified to give. It is the knowledge that belongs to you in a way that no other writer's knowledge does. The teaching portfolio is the place where that knowledge becomes available to other writers. Write it as if the Year One version of yourself is the audience. What does that writer need to know? What would have saved them months of difficulty? What would have opened the thesis sooner?",
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
            "By the end of this week you should have: written the craft talk (1,200–1,500 words), the teaching philosophy statement (600–800 words), and the course description (one page) — all three polished to professional standard and filed in the teaching portfolio; written the grammatical concept craft talk outline and filed it; applied the AI diagnostic assessment to the craft talk and revised; read the Saunders and O'Connor texts as models; written the journal entry. The teaching portfolio is complete. One week remains.",
          ],
        },
        {
          type: "card",
          title: "The Teaching Portfolio — Complete",
          paragraphs: [
            "The teaching portfolio now contains: the Fall Week 15 teaching philosophy statement and course description (now revised and superseded by this week's versions, or preserved as a Year Three evolution of the earlier draft); the craft talk; the grammatical concept craft talk outline; and the full grammar portfolio — the Week 20 aesthetic declaration, the Week 22 voice passage, the Week 26 closing reflection, the Week 27 benchmark sentences, the Week 31 grammar curriculum retrospective, the Week 32 final aesthetic declaration, the Week 33 annotated experimental syntax page, and the Week 34 three-year grammar retrospective. This is the portfolio of a writer who can account for every formal decision they make and teach every craft concept they have internalized. One week remains.",
          ],
        },
      ],
    },
  ],
};
