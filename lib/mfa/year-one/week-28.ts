import type { WeekData } from "@/lib/mfa/types";

export const week28Data: WeekData = {
  weekNumber: 28,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: 'Voice in CNF — The "I" on the Page & the Ethics of Self-Representation',
  emphasizedWord: 'The "I" on the Page & the Ethics of Self-Representation',
  deck: "Vivian Gornick's distinction between the narrator and the memoirist is the week's organizing concept: the narrator is a character in the story; the memoirist is the author looking back. Great memoir requires both, working in tandem. This week's inquiry applies equally to fiction writers — every narrating self makes an ethical claim about the relationship between the writer and their material.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "The Narrating Self" },
    { label: "Grammar", value: "The Extended Cumulative Sentence" },
    { label: "Exercise", value: "1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Narrator and the Memoirist",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1VNJCjCZZSDn3RAlFuPscnajN1DBiZtc6/preview" },
        {
          type: "paragraph",
          content: [
            "In Week 19 you encountered Vivian Gornick's distinction between the situation and the story in memoir: the situation is the literal circumstance the memoir narrates; the story is the emotional and intellectual inquiry the narrator is pursuing through those circumstances. This week deepens that distinction into Gornick's related and more fundamental one: the difference between the ",
            { text: "narrator", emphasized: true },
            " and the ",
            { text: "memoirist.", emphasized: true },
            " The narrator is a character in the story — the 'I' who was there, who experienced the events, whose feelings and perceptions and limitations are part of what the memoir renders. The memoirist is the author looking back — the intelligence that selects, arranges, and frames the narrator's experience into meaning. Great memoir requires both, working in tandem, neither collapsing into the other.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "When the narrator dominates without the memoirist, the memoir is all experience and no understanding — the reader is trapped inside the experiencing self's confusion, and the book cannot offer the retrospective coherence that memoir requires to be more than a diary. When the memoirist dominates without the narrator, the memoir is all understanding and no experience — the retrospective intelligence explains and interprets, but the reader has no access to the felt texture of the experience that the interpretation is meant to illuminate. The memoirist explains what the narrator cannot yet know. The narrator renders what the memoirist's retrospective understanding would flatten if rendered directly. Both are necessary, and their relationship — the gap between them, and the ways the prose manages that gap — is where much of memoir's most sophisticated craft lives.",
          ],
        },
        {
          type: "pullquote",
          quote: "The memoirist who is always right, always the most sympathetic figure in their own story, is the least trustworthy narrator of all. The obligation is to make yourself a fair witness.",
          cite: "— after Vivian Gornick",
        },
        {
          type: "card",
          title: "Four Risks of the Narrating Self",
          paragraphs: [
            "The past-self narrator with no retrospective distance: this narrator renders the experience from inside it, with no access to what it means. The writing has immediacy and sensory precision, but it cannot offer insight — it can only offer the experience itself, raw and uninterpreted. The risk is that the reader understands the experience's significance before the narrator does, and must wait for the narrator to catch up. The skill is using the past-self's limited understanding as a deliberate structural resource — making the gap between what the narrator knew and what the reader can infer do dramatic work.",
            "The present-self narrator who over-explains: this narrator has too much retrospective distance — they understand everything, they have processed all the experience into meaning, and they tell the reader what it signified before the reader has had the experience of it. The writing is safe, controlled, and ultimately airless. The reader is never given the chance to discover anything; everything is explained. The skill is restraint: letting the experience carry the meaning rather than announcing it.",
            "The ironizing narrator who undercuts every vulnerable moment with wit: this narrator is protecting themselves from full exposure by deflecting each moment of genuine emotional risk with a joke, a qualification, a stepping-back. The irony is a defense mechanism turned into a prose style. It produces writing that is often very funny and that never goes anywhere difficult. The skill is knowing when to hold the irony and when to put it down — when the vulnerable moment requires the full weight of the narrator's presence, undefended.",
            "The narrator who positions themselves primarily as a victim: this narrator organizes the story around their suffering and their innocence. Everyone else is an agent; they are acted upon. The writing has emotional clarity and moral simplicity, and it forecloses the complexity that makes memoir literature rather than testimony. The skill is fair witness: rendering yourself as a character with full agency, full limitation, full complicity in the events being narrated — not more wronged, not more perceptive, not more admirable than the fair evidence supports.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The ethical obligations of the narrating self extend beyond the self to the other people in the memoir. Real people — family members, former partners, colleagues, friends — appear in memoir without their consent, rendered through the memoirist's perception and framing. The memoirist cannot claim objectivity: their account is always partial, always shaped by their own psychology and stake in the story. The ethical discipline is not to achieve impossible objectivity but to be honest about the partiality — to render other people with the fullness and complexity that fairness requires, not to flatten them into supporting characters in the memoirist's story. The most honest memoirs are those in which other people are occasionally more interesting than the narrator.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "For fiction writers, the parallel inquiry is the relationship between the author's voice and the narrator's voice — the degree to which the author's sensibility is identical with, or deliberately separated from, the consciousness narrating the story. When the author's voice and the narrator's voice collapse entirely — when there is no gap between what the author believes and what the narrator says — the fiction risks becoming sermon: the characters are not genuinely other, they are vehicles for the author's pre-formed understanding. The fiction writer's version of Gornick's memoirist/narrator distinction is the ability to create a narrating consciousness that is genuinely different from the author's own, while maintaining the author's intelligence as the framing intelligence behind the fiction.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Narrating Self Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's version of the narrator/memoirist distinction is the relationship between the implied author and the narrator — a distinction Wayne Booth formalized and that Gornick's work on memoir illuminates from a different angle. The implied author is the intelligence the reader constructs from the full text, including everything the narrator does not know or cannot say. When that implied intelligence feels wiser, more honest, and more self-aware than the narrator, the novel has achieved the gap that makes unreliable narration work. When the implied author and the narrator are identical — when the narrative voice has no awareness the narrator lacks — the novel has no depth behind its surface. Every first-person narrator is a construction; the question is whether the author is conscious of the construction and its limits.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting and playwriting, the narrating self usually appears only in voice-over or direct address — and the ethics of that self-representation are governed by genre expectations rather than the memoir's stricter truth obligations. But the question of how autobiographical material enters screen and stage writing is real and significant: when a playwright writes a character clearly based on themselves or a family member, the ethics of rendering apply even when the character is called something else. The disguise of fiction does not eliminate the obligation to render real people with fairness and complexity — it simply changes the formal contract under which the rendering takes place.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "CNF's ethical obligations are the most explicit of the three forms: the contract with the reader promises that the events rendered actually occurred. Within that contract, the writer has enormous latitude — compression, composite characters in some forms, reconstruction of dialogue — but the contract itself is non-negotiable. Gornick's framework is the most useful practical guide to managing that contract: keep the narrator and the memoirist in productive tension, make yourself a fair witness, and never mistake the story you wanted to live for the story you actually lived. Mary Karr's The Liar's Club and Ta-Nehisi Coates's Between the World and Me are two models of the narrator/memoirist distinction handled with different but equally precise craft.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Extended Cumulative Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 28 of 60 — The Extended Cumulative Sentence: Prose Sustained Over Many Clauses",
          intro: [
            "The cumulative sentence was introduced in Week 19 with Christensen's three patterns (coordinate, subordinate, and mixed free modifiers). This week extends the cumulative sentence beyond the single-clause or two-clause form into the extended cumulative: a sentence sustained over many clauses, each adding a new layer of modification, creating a hypnotic, associative flow that replicates the actual movement of consciousness or memory.",
            "Faulkner and Morrison are the canonical practitioners of the extended cumulative sentence in American prose. Faulkner's sentences in Absalom, Absalom! and The Sound and the Fury can sustain over one hundred words without losing grammatical coherence — each new clause adding to the previous, the accumulation itself becoming the meaning, the sentence's length enacting the consciousness it describes: relentless, circular, unable to arrive at a stopping point because the experience it is processing cannot be stopped. Morrison's extended cumulatives in Beloved and Song of Solomon do something different: they create a choral effect, as though multiple voices are speaking simultaneously within a single syntactic unit.",
          ],
          rule: "The extended cumulative sentence requires a strong base clause — a kernel sentence with clear subject and verb — from which all subsequent modifiers extend. Each free modifier (participial, absolute, or appositive phrase; relative clause; coordinate clause) must maintain a clear grammatical relationship to either the base clause or a preceding modifier. The sentence must remain grammatically coherent at 100 words: a reader who lost their place could find it again without rereading the beginning. Length without coherence is not the extended cumulative — it is a run-on sentence.",
          examples: [
            {
              label: "The 100-word sentence — consciousness as structure",
              text: "She had known him for thirty years, had watched him become the person she'd imagined he would become when they were young and everything still felt possible, had seen the particular way his ambitions had narrowed without his noticing, had understood — with the specific understanding that comes from loving someone over a long time and paying close attention — that the narrowing was not failure but a kind of settlement, a peace he had made with what he was rather than what he had planned to be, and that the peace, however partial, was real.",
            },
            {
              label: "What makes it cohere — the base clause and the chain",
              text: "Base clause: 'She had known him for thirty years.' Every subsequent modifier extends this grammatically: 'had watched him...' (coordinate parallel verb), 'had seen...' (coordinate parallel verb), 'had understood...' (coordinate parallel verb, introducing the subordinate chain: 'with the specific understanding that comes from...'), 'that the narrowing was not failure...' (noun clause completing 'understood'), 'a peace he had made...' (appositive to 'settlement'), 'that the peace...was real' (noun clause parallel to 'that the narrowing'). The chain is traceable. Each link connects to a prior link.",
            },
          ],
          outro: [
            "The extended cumulative sentence is not appropriate for all prose, all subjects, or all moments. It enacts duration, accumulation, and the associative movement of a consciousness that will not let go of its subject — which makes it most powerful in passages of sustained interiority, memory, grief, or obsession. Used where the prose should be spare, it feels bloated. Used where the prose should be immediate, it creates distance. The craft question is always: does this sentence's length enact the content's quality, or is the length arbitrary?",
            "A practical note: the 100-word sentence is a discipline, not a target. Writing it forces the writer to confront whether they can sustain grammatical coherence across the full extension — whether each clause genuinely connects or whether the sentence is only long, not genuinely cumulative. If you find yourself unable to trace the grammatical chain back to the base clause, the sentence has become a run-on. Shorten it, reestablish the chain, and try again.",
          ],
          exercise:
            "Write one sentence of 100 words or more about a subject from your current writing — a character, a relationship, a memory, a place. It must remain grammatically coherent from first word to last. After writing it, trace the grammatical chain: identify the base clause, then each free modifier and its relationship to what it modifies. If any link in the chain cannot be traced, the sentence has broken — locate the break and repair it. Then write a second version of the same sentence that is exactly 50 words: compress the 100-word version without losing its essential information. Compare the two. What does the extension add? What does compression clarify?",
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
              title: "The Situation and the Story, Parts 1–2",
              author: "Vivian Gornick",
              href: "https://bookshop.org/p/books/the-situation-and-the-story-the-art-of-personal-narrative-vivian-gornick/6697453",
              note: "Purchase. Read Parts 1 and 2. Gornick's distinction between situation and story, and between narrator and memoirist, is the essential framework for all CNF and memoir work — and, as argued in the lecture, for literary fiction as well. Read with the four-risks card from the lecture in hand: where does Gornick identify the same risks? What vocabulary does she use for the failure modes of the narrating self? This is the essential CNF craft text of the year; treat it as a primary document, not background reading.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Argonauts, first 20 pages",
              author: "Maggie Nelson",
              href: "https://bookshop.org/p/books/the-argonauts-maggie-nelson/6697453",
              note: "Purchase. Read the first twenty pages. Nelson's memoir is one of the most formally radical treatments of the memoir 'I' available: it addresses 'you' (her partner Harry Dodge) rather than narrating in conventional first-person retrospection; it uses theory and quotation as structural elements alongside personal narrative; it refuses the conventional memoir arc of experience-then-understanding in favor of simultaneous experience and inquiry. Ask: where are the narrator and the memoirist in this text? How does Nelson manage the distinction — or does she deliberately collapse it? What does the collapse produce?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Between the World and Me",
              author: "Ta-Nehisi Coates",
              href: "https://bookshop.org/p/books/between-the-world-and-me-ta-nehisi-coates/6697453",
              note: "Purchase. Read the full book if possible; if not, the first fifty pages. Coates's use of the second person ('you,' his son) as a structural device makes the narrator/memoirist relationship unusually visible: the memoirist is addressing the narrator's experiences to the next generation, framing the narrator's past self for a reader who will inherit its consequences. The direct address also raises the week's ethical questions in their sharpest form: what does it mean to render your own experience as a document for someone else? What responsibilities does that audience create?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Past Self and Present Self",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write two versions of the same autobiographical scene — a real scene from your own life, charged with enough emotional content that the narrator's limited understanding and the memoirist's retrospective knowledge are genuinely different.",
            "Version 1 — The past-self narrator (400 words): Write in the first person, past tense, from inside the experience. The narrator does not know what the memoirist knows. The narrator's perception is limited by being inside the event — they cannot see around the corners of their own psychology, cannot understand the other people fully, cannot yet know what the scene means. The writing should have the texture of immediate experience: sensory, particular, constrained by what the past self could actually perceive.",
            "Version 2 — The present-self narrator (400 words): Write the same scene in the first person, past tense, but with the memoirist's retrospective knowledge shaping the selection and framing. The narrator now knows things the past self did not — about the other people, about the outcomes, about what the scene was really about. Use that knowledge to select and frame, but resist the urge to explain: let the memoirist's understanding be present in what is chosen for rendering, not in what is announced.",
            "Analysis (200 words): Write a paragraph identifying what each version can and cannot say. What does the past-self narrator's limitation produce — what does it make available to the reader that the retrospective narrator cannot offer? What does the present-self narrator's knowledge produce — what does the retrospective framing reveal that the past-self version conceals? Where is the scene's most honest telling — in one version, or in the gap between them?",
          ],
          target: "1,000 words (400 + 400 + 200)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 28 — The Four Narrating-Self Risks",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Use the AI to examine the four risks of the narrating self as they apply to memoir and personal essay — not as abstract principles but as specific craft problems with specific craft solutions. Use the prompt below before writing the exercise, as a thinking tool, or after, as a diagnostic applied to your own versions.",
          prompt:
            "In memoir and personal essay, there are four specific risks of the narrating self: (1) the past-self narrator with no retrospective distance — the narrator is inside the experience with no access to what it means; (2) the present-self narrator who over-explains — the retrospective intelligence explains the experience before the reader has had it; (3) the ironizing narrator who undercuts every vulnerable moment with wit — using irony as a defense against full exposure; (4) the narrator who positions themselves primarily as a victim — organizing the story around their suffering and innocence. For each of these four risks: describe the specific effect it creates in the prose, explain what failure mode it produces in the reader's experience, and give one concrete example of how a skilled memoirist might handle that risk — how they might use the tendency that creates the risk as a resource rather than a failure. Be specific about the craft moves available.",
          questions: [
            "Which of the four risks does the AI identify as the hardest to handle well — where the craft solution is most demanding? Do you agree?",
            "Looking at your own Version 1 and Version 2 from the exercise: which of the four risks appears in each version? Does the past-self version risk the first? Does the present-self version risk the second?",
            "Which of the four risks is most present in your autobiographical writing generally — which failure mode is your default? What is the craft move that addresses it?",
            "The AI's example of a skilled memoirist handling each risk: is the example specific enough to be useful? If not, ask for a more precise description of the craft move — the sentence-level or structural choice that turns the risk into a resource.",
          ],
          note: "The four risks are not failures to be eliminated but tendencies to be managed. Every narrating self has a characteristic relationship to at least one of them — a default mode it falls into under pressure. The craft skill is not to avoid the risk entirely but to know which risk is present in any given passage and to make a deliberate choice about whether the tendency is serving the writing or limiting it.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Self-Flattery Check",
      blocks: [
        {
          type: "tip",
          icon: "🪞",
          name: "Make Yourself a Fair Witness",
          paragraphs: [
            "Read any autobiographical piece you've written — whether it is memoir, personal essay, or a piece of autobiographically-inflected fiction — and ask: is the narrator of this piece consistently more sympathetic, more perceptive, more admirable, or more wronged than a fair telling would suggest? The self-flattery check is not about self-criticism; it is about fairness. The narrator who is always the most interesting person in their own story, always the one who understands what others don't, always the injured party in the conflicts that arise — that narrator is not a fair witness. And a narrator who is not a fair witness cannot be trusted.",
            "The specific questions to ask: Are the other people in this piece rendered with enough complexity and interiority that they could plausibly feel differently about the events than the narrator does? Are there moments where the narrator's own actions contributed to the conflict or the harm — and are those moments rendered with the same precision as the moments where others caused harm? Is the narrator's suffering the only suffering that is fully rendered, or do the other people's experiences receive comparable attention? The answers to these questions tell you whether the narrating self is a fair witness or a self-serving one.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Self You Perform and the Self You Are",
      blocks: [
        {
          type: "journal",
          title: "The Self You Perform and the Self You Are",
          question:
            "What version of yourself do you most frequently perform for the world? Not the version you aspire to be — the version you actually perform: the competence you project when you are uncertain, the ease you project when you are afraid, the self-sufficiency you project when you want help, the certainty you project when you are confused. How does that performed version differ from the self that shows up in your private writing — in journal entries, in drafts no one has read, in the writing you do at three in the morning when you are not trying to make an impression? Which is more real — or is that the wrong question? And: when you narrate your own experience, which version of yourself tends to be the narrator? Is the narrator closer to the performed self or the private one?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The performed self is not dishonest — it is a social necessity, and it is part of who you are. But the memoirist who narrates exclusively from the performed self is producing a document of how they wished to appear, not of how they actually experienced their life. The most honest memoir is written from as close to the private self as the writer can get — the self that does not know yet what impression it is making, the self that is still inside the experience before it has been processed into a story.",
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
            "By the end of this week you should have: written both versions of the autobiographical scene — past-self narrator and present-self narrator — and the 200-word analysis identifying what each version can and cannot say; read Gornick's Parts 1–2 for the narrator/memoirist distinction as the essential framework; read Nelson's first twenty pages for the memoir that formally interrogates the distinction rather than simply managing it; used the AI exercise to examine the four narrating-self risks and identify which is most present in your own autobiographical writing; and written the extended cumulative sentence of 100 words or more with the grammatical chain traced.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 29",
          paragraphs: [
            "Week 29 is Syntax and Sentence-Level Craft — The Sentence as Artistic Medium. The grammar curriculum and the craft curriculum formally integrate this week: everything in the sentence — its length, structure, rhythm, and sound — is available as artistic material. The week studies Virginia Woolf, Cormac McCarthy, and James Baldwin as three radically different syntactic stylists, and the exercise asks you to produce the most careful sentence-level writing you have done all year.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The narrator/memoirist distinction is not limited to memoir. It is the fundamental question of every piece of autobiographically-inflected writing: what is the relationship between the self who experienced these events and the self who is rendering them now? The gap between those two selves — how it is managed, how wide it is allowed to be, how honestly it is acknowledged — is where the ethical and craft questions of all personal writing converge. Every writer has a characteristic relationship to that gap. The rest of the year's work will make yours more visible and more deliberate.",
          ],
        },
      ],
    },
  ],
};
