import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek3Data: WeekData = {
  weekNumber: 3,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Structural Revision",
  title: "The Character Revision — Does Every Character Earn Their Place?",
  emphasizedWord: "Character Revision",
  deck: "In a completed draft, every character must be interrogated: Does this character do work that no other character does? Does this character have a specific, distinct voice legible throughout? Does their interiority — whether directly accessed or implied — carry genuine complexity? Characters who fail these tests are either underdeveloped (they need more) or redundant (they need to go, or be merged). This week applies these questions to the full thesis cast.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "75 of 108" },
    { label: "Craft Focus", value: "Character Revision" },
    { label: "Grammar", value: "Phase 6, Topic 3 — Hayakawa's Ladder of Abstraction" },
    { label: "Deliverable", value: "Character Sheets + New Scene" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Character Audit — Three Questions Every Character in the Manuscript Must Answer",
      blocks: [
        {
          type: "paragraph",
          content: [
            "A long manuscript accumulates characters the way a long life accumulates acquaintances: some are essential, some are peripheral, some are present because the writer needed them at a particular moment in the drafting and has not yet assessed whether the manuscript still needs them in revision. The character revision is the audit that asks, of every named person in the manuscript, whether they are earning their place — whether the manuscript would be diminished by their absence, or whether their presence is diluting the reader's attention without adding the complexity or specificity that would justify the dilution.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The character audit is not a judgment about which characters are interesting or which the writer is most attached to. It is a structural assessment — the same kind of assessment the scene map applied to sections — that asks whether each character is performing a function that no other character is performing, whether their voice is specific enough to be distinguishable from other characters' voices without the aid of dialogue attribution, and whether their interiority — their governing desire, their governing fear, their specific quality of self-knowledge and self-deception — has been rendered with the complexity the manuscript claims to be capable of. These are demanding tests, and many characters in completed first drafts will fail at least one of them. Failing is not a sentence; it is a diagnosis that points to a specific kind of revision work.",
          ],
        },
        {
          type: "pullquote",
          quote: "The question is not whether you love this character. The question is whether the manuscript needs them, and whether the manuscript has done enough with them to justify what it is asking the reader to hold.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Three Tests — What Every Character Must Pass",
          paragraphs: [
            "The function test: does this character do work that no other character does? The function test begins with the scene map: which scenes does this character appear in, and what narrative function do those scenes perform? If two characters are appearing in similar scenes performing similar functions — both serving as 'the protagonist's confidant,' both providing the same kind of emotional support or narrative information — the manuscript may be paying for the same function twice. The function test does not require that every character perform a unique narrative function in isolation; it requires that the combination of functions each character performs is not duplicable by any other character already present in the manuscript. The secondary character who appears in three scenes to deliver information the protagonist needs is a functional character; if another secondary character is also appearing in three scenes to deliver information the protagonist needs, and if the information could be consolidated, one of them is redundant. The merge test — which the editorial tip will address — is the function test's practical instrument.",
            "The voice test: does this character have a specific, distinct voice that is legible throughout the manuscript without the aid of attribution? The voice test is the most immediately practical of the three: find any passage of dialogue spoken by this character and cover the attribution. Can the reader identify the speaker from the words alone? The character with a distinct voice has a characteristic syntax, a characteristic diction register, a set of verbal habits — the kind of sentence they build, the words they use when they're nervous, the thing they say when they mean something else — that differentiate them from every other character in the manuscript. The character without a distinct voice sounds like the prose's general register rather than like a specific person. The voice test's failure — the undistinguishable character — is often more damaging to the manuscript than the function test's failure, because it means the reader cannot track the character even when the author's intention is clear.",
            "The interiority test: does this character's inner life carry genuine complexity — a governing desire and a governing fear that are in tension with each other, a specific quality of self-knowledge that is neither too much (the character who explains themselves to the reader) nor too little (the character who is merely reactive, a surface without depth)? The interiority test does not require that every character have equal interior access; some characters are appropriately rendered from the outside, their interiority implied rather than entered. But even those characters — even the character the narrative never enters directly — should give the reader the sense of a complex inner life whose specific shape can be inferred from what they do and what they refuse to do. The character who is simply a function — who exists to advance plot or provide information — without any implied inner life is a character the reader will not believe, because the reader's experience of actual people is that everyone, however peripheral, has an interior that is generating their behavior.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Character Revision Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer's character revision should use the scene map as its primary tool: trace each character's appearances across the map and assess their distribution. A character who appears heavily in the first third and then disappears for the final two thirds has an arc that has been abandoned rather than developed — either the disappearance needs to be addressed structurally (a late-appearing scene that resolves the character's thread) or the character's early appearances need to be reconsidered (are they doing work in the opening that another character could do, so that the character's absence in the second half becomes a deliberate formal choice rather than an accidental structural gap?). The character revision in fiction should also address the protagonist's relationship to every other character: is each secondary character in genuine relationship with the protagonist — someone whose presence creates a specific pressure on the protagonist — or are some of them parallel presences who are interesting in their own right but who do not create the friction the protagonist needs?",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter's character revision has a formal constraint the fiction writer's does not: screen characters must be legible without direct interiority. The camera cannot enter a character's thoughts; the character's inner life must be rendered through behavior, through the gap between what they say and what they do, through the objects they handle and the physical space they occupy. The character revision for a screenplay should ask of every character: is their governing desire visible in their behavior? A character whose desire is stated in dialogue but contradicted by their actions is a character whose interiority has not been converted into the form the medium requires. For playwrights: the theatrical tradition gives more latitude for direct interiority — the soliloquy, the aside — but the character revision should still ask whether each character's inner life is legible to a live audience in real time, without the aid of prose narration.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoirist's character revision has an ethical dimension the other tracks do not: the characters in a memoir are real people, and the revision that develops their complexity is not simply a craft decision but an ethical obligation. The ethics position paper from Year Two Week 30 is the relevant document here: the memoir's obligation to render subjects with the same commitment to complexity as the memoirist applies to the character revision as much as to the initial drafting. The person who hurt the memoirist should be as fully human in revision as in the original draft — which means the character revision's development pass should pay as much attention to the antagonist's rendering as to the protagonist's. For the CNF writer, the character sheets should include a fifth question alongside the four standard ones: is this person rendered with the complexity their actual humanity requires, or have they been simplified into a narrative function?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 6, Topic 3 — Hayakawa's Ladder of Abstraction",
      blocks: [
        {
          type: "grammar",
          title: "Phase 6 · The Ladder — Moving Between the Concrete and the Abstract with Intention",
          intro: [
            "S.I. Hayakawa's 'ladder of abstraction,' introduced in Language in Thought and Action (1939), is one of the most useful single concepts in the craft lexicon for diagnosing prose that has climbed too high into the general and lost contact with the specific. The ladder moves from the most concrete at the bottom — a specific brown-and-white cow named Bessie, standing in the south field at 6 AM, her breath visible in the morning cold — to the most abstract at the top: livestock, agriculture, economic activity, natural resources, wealth. Every rung of the ladder is legitimate language; none is inherently better than any other. The skill is knowing which rung the prose needs at each moment, and the failure is staying too long on any single rung without the movement between them that literary prose requires.",
            "The bottom of the ladder: the specific, the particular, the individual, the sensory. Bessie. The cold breath. The south field at 6 AM. The middle of the ladder: the categorical, the grouped, the classified. Cow. Livestock. Farm. The top of the ladder: the conceptual, the abstract, the philosophical. Economic activity. Wealth. Loss. Belonging. Love. Most literary prose lives in the middle and lower-middle rungs, making frequent descents to the specific sensory detail that grounds the reader's experience in the physical world, and making occasional ascents to the abstract level where the work's thematic concerns are named. The failure mode in either direction: prose that never leaves the top of the ladder (prose about love and loss and belonging that never gives the reader a specific person, a specific room, a specific gesture) or prose that never leaves the bottom (prose that accumulates sensory detail without the interpretive framework that tells the reader why these details matter).",
          ],
          rule: "The diagnostic question: where in the current thesis draft is the prose too high on the ladder? The too-high passage has the feel of generalization — the reader understands conceptually what the writer is saying but does not feel it, because feeling requires the specific, the concrete, the sensory. 'She felt a profound sense of loss' is the top of the ladder. 'She found his reading glasses on the kitchen table three weeks after the funeral and put them in her pocket and carried them for the rest of the day without knowing why' is near the bottom. Both are about grief; only the second produces the experience of it. The revision instruction: find the most abstract paragraph in the current thesis draft and descend the ladder — replace every abstraction with the most specific, concrete equivalent available. If the revision is better, keep it. If the abstraction was doing real work — if the conceptual level is where the material needs to be at this moment — the descent will demonstrate that by producing a version that is less effective than the original.",
          examples: [
            {
              label: "Descending the ladder — the same moment at three levels",
              text: "Top of the ladder: 'Their relationship had been damaged by his betrayal, and she was unable to fully trust him again.' Middle: 'After she found out what he had done, she stopped leaving her coffee cup on his side of the sink.' Bottom: 'She stopped leaving her coffee cup on his side of the sink. She had done it for eleven years — the handle facing his chair so he could reach it while he read — and now she put it on her own side, handle inward, and did not examine the decision.' The bottom-rung version does not explain the damage to the relationship or name the betrayal. It shows the reader a coffee cup — a specific, domestic, irreducible object — and the reader supplies the damage from the specificity of what has changed. The concrete detail does more than the abstract explanation: it produces understanding through experience rather than through information.",
            },
            {
              label: "When the abstract rung is right — the ladder move that earns the climb",
              text: "The ascent to abstraction earns its place when the concrete level has been established first and the abstract level names what the concrete has been accumulating. Hemingway's 'Isn't it pretty to think so' at the end of The Sun Also Rises is nearly at the top of the ladder — abstract, ironic, philosophical — but it earns its position because the entire novel has been at the bottom and middle of the ladder, and the single abstract sentence at the end names what all that specificity has been building toward. The rule is not 'never use abstraction.' It is 'earn the abstraction by establishing the concrete first.' The abstract sentence that arrives without its concrete foundation is merely vague; the abstract sentence that names what the concrete has established is precise.",
            },
          ],
          outro: [
            "This week's grammar exercise: take the most abstract paragraph in your current thesis draft — the paragraph where the prose is highest on Hayakawa's ladder, furthest from the specific and sensory. Descend the ladder: replace every abstract term with the most specific, concrete equivalent available to you. Read the revision aloud. Is it better? If yes, keep it and carry the principle into the character revision's development scenes — every new scene written this week should be anchored at the concrete end of the ladder, with ascents to abstraction earned by the specificity that precedes them.",
          ],
          exercise:
            "Find the most abstract paragraph in your thesis draft — the passage farthest up Hayakawa's ladder. Rewrite it in the most concrete, specific, sensory language available. Read both versions aloud. Note in the session log: which abstraction levels dominate the thesis, and where the most urgent descents are needed.",
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
              title: "Writing Fiction",
              author: "Janet Burroway",
              href: "",
              note: "The characterization chapters, reread with Year Three eyes. Burroway's account of character in Year One was a framework for building characters from scratch; the Year Three reading is a diagnostic tool applied to characters who already exist in the draft. Read specifically for her account of desire as character's engine — the governing desire that organizes a character's behavior across a narrative — and apply it to each character in the thesis: what does this character want, and is that want legible in their behavior throughout the manuscript?",
              badge: "Required",
            },
            {
              number: "02",
              title: "A novel in your genre — map the full cast",
              author: "Your choice",
              href: "",
              note: "Required. Choose a published novel or memoir whose cast of characters you consider particularly well managed — where every character feels necessary and specific. Map the full cast using the character sheet framework: function, voice, governing desire, governing fear, best scene. What patterns do you notice? How does the author manage the ratio of developed to peripheral characters? How much interiority does each secondary character receive, and at what moments? The cast map of a published work provides a calibration for the character revision: you are learning what a well-managed cast looks like before applying the same analysis to your own manuscript.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Character Sheets + Development Scene",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write character sheets for every named character in your thesis: one sheet per character, addressing five questions. (1) Their specific narrative function — what does this character do for the manuscript that no other character does? (2) Their distinct voice — write three phrases or sentences only this character would say, in their characteristic syntax and diction, that could identify them without attribution. (3) Their governing desire and governing fear — the want that organizes their behavior and the fear that complicates or contradicts it. (4) The specific scene where they are most fully themselves — the scene in the manuscript that best captures what this character is. (5) Whether they could be removed or merged without significant loss to the manuscript's architecture — a yes/no with a brief justification either way.",
            "The character sheets are analytical work, not prose. Write them quickly and honestly; the point is not to produce polished descriptions of each character but to force the explicit articulation of what may be implicit or unexamined. The character who cannot be described in the voice test — the character for whom you cannot write three phrases only they would say — is the character whose voice needs the most development. The character whose governing desire you cannot name is the character whose interiority has not yet been established clearly enough to guide their behavior.",
            "After completing all character sheets, identify the character who needs the most development — the character who fails the most tests or fails them most significantly. Write a new scene featuring this character in which their governing desire is active and their distinct voice is fully deployed. The scene need not be at a moment of maximum dramatic tension; it can be a quieter scene that establishes what the dramatic scenes will depend on. Target: character sheets (all named characters) + 700–1,000 words of new development scene.",
          ],
          target: "Character sheets for all named characters + 700–1,000-word development scene",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Underdeveloped Secondary Character",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste two or three scenes featuring the secondary character identified as most underdeveloped in the character sheet exercise. The AI reads only what has been given — it has no access to the writer's intentions for the character or the character's history in the drafting process. This limitation is the exercise's value: the AI's assessment of what the character currently is, as distinct from what the writer intends them to be, maps the gap between intention and effect.",
          prompt:
            "I am sharing two or three scenes featuring a secondary character in my thesis manuscript. I want you to assess this character based only on what is on the page — not on my description of who they are or what they are supposed to do. Based only on these scenes: (1) Is this character specific enough to be memorable — do they have a distinct voice, specific physical presence, particular verbal habits that differentiate them from the other characters in these scenes? (2) Do they have genuine interiority, or do they exist primarily to serve the protagonist's scene — reacting rather than acting, providing information or response rather than generating their own pressure? (3) What appears to be their governing desire in this narrative, based on their behavior in these scenes? (4) What one scene addition or revision would most significantly deepen this character's contribution to the manuscript?",
          questions: [
            "The AI's assessment of the character's specificity: does the AI's reading of the character's distinctiveness match your own? If the AI describes the character as generic or undifferentiated — as a function rather than a person — and you believe the character is specific, the gap is a communication failure: the specificity you intend is not reaching the page. The character sheet's voice test items — the three phrases only this character would say — should be checked against the AI's assessment: if the AI cannot identify a distinct voice in the scenes you've submitted, the phrases you identified in the character sheet are not appearing with sufficient frequency or specificity to establish the voice.",
            "The AI's identification of the governing desire: compare it to the governing desire you identified in the character sheet. If they differ, the character's behavior in the scenes — what the AI can see — is not expressing the desire you believe is organizing the character. The gap is a revision target: what scenes or moments would need to be added or revised to make the governing desire legible through behavior rather than through the writer's knowledge of the character?",
            "The AI's recommendation for the single most useful scene addition or revision: evaluate it against the development scene you wrote this week. If the AI's recommendation points in a different direction from the development scene you chose to write, consider whether the AI's recommendation is more urgent. The development scene should address the most significant gap in the character's current rendering; the AI's recommendation is an outside reader's assessment of where that gap is.",
            "The character who passes all three AI tests — whose specificity, interiority, and governing desire are all legible from the scenes submitted — is a character whose current rendering may be close to finished. Note this on the character sheet: if the AI's assessment confirms the character's development, the revision plan's character category can deprioritize this character and focus on those who failed the tests. The AI's confirmation is not a guarantee of the finished work's quality, but it is useful calibration for where the revision work is most urgently needed.",
          ],
          note: "The character revision AI workshop should be conducted for the one or two most underdeveloped characters identified in the character sheets. Running the same assessment on every character in the manuscript would produce diminishing returns; the value is concentrated in the characters who fail the tests most clearly, because those are the characters the revision needs to address most urgently.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Merge Test",
      blocks: [
        {
          type: "tip",
          icon: "🔗",
          name: "When Two Characters Are Doing One Character's Work",
          paragraphs: [
            "When two secondary characters serve similar narrative functions — when both are 'the skeptical friend,' both 'the mentor figure,' both 'the character who provides the information the protagonist needs at the midpoint' — consider merging them. Two characters who each perform half of a narrative function dilute each other: the reader's attention is split between two figures who, taken individually, are too thin to be memorable. One complex, specific version of the function is almost always stronger than two thin ones.",
            "Merge cautiously. Before merging any two characters, identify what is specific to each that the other does not have: the verbal habits, the physical presence, the specific history with the protagonist, the scene that most fully realizes them. The merged character should inherit the specificity of both, not average them into a generic version of the function they share. The merge is not a simplification — it is a concentration: the manuscript's investment in two thin characters redistributed into one complex one. And merging is not always right; sometimes the two characters serve similar functions because the manuscript genuinely needs two distinct responses to the protagonist at a particular structural moment, and the similarity is the point. The test is whether the reader can distinguish them without being told to. If they cannot, the merge should at minimum be considered.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Love and Understanding",
      blocks: [
        {
          type: "journal",
          title: "The Character You Love Most and the Character You Understand Least",
          question:
            "Which character in your thesis do you love most? Not which character is most important to the narrative, not which is most skillfully rendered — which do you love? And which character do you understand least: the one whose behavior you have written without being sure you fully know what is generating it, the one whose interiority feels opaque to you even as the author, the one you have been trusting the drafting to reveal but who remains somehow unclear? Write about both characters for fifteen minutes — what you love about the first and what you do not understand about the second. Then ask: is there a relationship between those two answers? Is the character you love most one you understand too well — one whose interiority you have rendered with such completeness that the reader has nothing left to discover? Is the character you understand least one whose opacity is productive — whose opaqueness to you is a sign of genuine complexity — or is it a sign that the revision needs to go deeper than the current draft has gone? The relationship between love and understanding in your relationship to your characters is the character revision's deepest material.",
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
            "By the end of this week you should have: character sheets completed for every named character in the thesis (function, voice, governing desire and fear, best scene, removability assessment); the development scene written for the character identified as most underdeveloped (700–1,000 words); the AI secondary character assessment completed with all four reflection questions; the Hayakawa ladder exercise completed (most abstract paragraph descended to the concrete, both versions read aloud); the cast map of one published work completed as calibration; the revision plan's character category updated based on the character sheet findings.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 4",
          paragraphs: [
            "Week 4 is the thematic revision: making the argument more precise. The scene map and character sheets have established what the manuscript's architecture and cast currently are; the thematic revision asks where the governing question is most actively engaged, where it goes absent, and where the writing has answered it too neatly, foreclosing the complexity that makes the question worth asking. Grammar: Phase 6 Topic 4 — verb choice, the dynamic verb, and Tufte's be-pattern.",
          ],
        },
      ],
    },
  ],
};
