import type { WeekData } from "@/lib/mfa/types";

export const week6Data: WeekData = {
  weekNumber: 6,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Subtext & Implication",
  emphasizedWord: "Implication",
  deck: "The real conversation in fiction is almost never the one being spoken aloud. This week you study what operates beneath the surface of dialogue and action — and learn to build the gap between what characters say and what they mean.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Subtext & Implication" },
    { label: "Grammar", value: "Left-Branching Sentences" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What the Characters Will Not Say",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/11wPRQ3VDyFGhzoAh2w5cLRls-C_g2Ah1/preview" },
        {
          type: "paragraph",
          content: [
            "There is a conversation happening in almost every piece of fiction, and it is not the conversation on the page. The conversation on the page — about the weather, about where to eat, about whose turn it is to call the plumber — is the surface. Beneath it, in the gap between what characters say and what they mean, what they do and what they feel, is where the story actually lives. This gap is subtext, and it is one of the primary sources of tension, intimacy, and meaning in literary writing.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Hemingway's \"Hills Like White Elephants\" is the canonical demonstration. Two people at a train station discuss a landscape, order drinks, talk about an operation that is never named. The word \"abortion\" does not appear. Neither does \"afraid,\" \"desperate,\" \"finished,\" or \"trapped.\" And yet every one of those states is present in the story — present so fully that readers feel the weight of it long after the last line. Hemingway called it the iceberg theory: ",
            { text: "the dignity of movement of an iceberg is due to only one-eighth of it being above water.", emphasized: true },
            " But this is a theory of earned omission, not convenient omission. The seven-eighths only works because the one-eighth is absolutely precise. Subtext collapses into confusion if the surface isn't doing its job.",
          ],
        },
        {
          type: "pullquote",
          quote: "If a writer of prose knows enough about what he is writing about, he may omit things he knows and the reader will still have a strong feeling of those things.",
          cite: "— Ernest Hemingway, Death in the Afternoon",
        },
        {
          type: "paragraph",
          content: [
            "Subtext operates in three registers, and the best scenes use all three simultaneously. The first is ",
            { text: "dialogue subtext", emphasized: true },
            ": what a character says versus what they mean. Characters deflect, qualify, change the subject, go indirect, answer a different question than the one asked — not because they are evasive by nature but because the direct statement would be too costly: too vulnerable, too final, too true. Real people do this constantly; skilled fiction renders it with precision. The second is ",
            { text: "action subtext", emphasized: true },
            ": what a character does at the moment of maximum emotional pressure instead of what they feel. The character who cleans the kitchen when they are enraged. The character who makes a joke when they are frightened. Action chosen at the wrong moment for the moment is almost always carrying something that can't be said.",
          ],
        },
        {
          type: "card",
          title: "The Three Registers of Subtext",
          paragraphs: [
            "Dialogue subtext: A character says one thing, means another. The gap between them is the story. The reader must feel both the surface and the underneath simultaneously.",
            "Action subtext: At the moment of highest emotional pressure, the character does something — but not the obvious thing. What they do instead of the obvious thing is the subtext made visible.",
            "Image subtext (the objective correlative): The physical world externalizes what the character cannot say. The specific object selected, described, or noticed by a character in a scene of emotional pressure is carrying that pressure. This is where last week's work — the image, the sensory detail — intersects directly with this week's.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The third register is ",
            { text: "image subtext", emphasized: true },
            " — what T.S. Eliot called the objective correlative: the set of objects, situations, or events that evokes a particular emotion without naming it. When Chekhov's characters notice something in a room, when Carver's characters fixate on an object at the wrong moment, the image is carrying freight that the prose cannot directly state. This is where the work of Week 5 (the concrete image, the sensory detail) connects directly to this week's work: a precisely rendered image at a moment of emotional pressure becomes subtext by virtue of its placement. You are not telling the reader what to feel. You are giving the reader the object, and letting them feel.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "One technical distinction matters here and is worth stating directly: subtext is not the same as withholding. Withholding is when the writer refuses to give the reader information they need in order to understand the story — it creates confusion, not tension. Subtext is when the writer provides every piece of information the reader needs, but encodes part of it in action, image, and the texture of the language rather than in direct statement. The reader of a well-subtexted scene knows exactly what is happening. They simply weren't told; they felt it. That difference — knowing without being told — is one of the primary pleasures of literary reading.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Subtext Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, subtext often lives in the gap between a character's stated interpretation of events and the events themselves. The reader sees what the character cannot or will not see. Free indirect discourse — the narrative sliding into a character's consciousness without announcing it — is one of fiction's primary tools for this: the prose reports the character's distorted version of reality while the reader sees through the distortion. Austen perfected it; Alice Munro has made it the engine of almost every story she has written.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, subtext is not optional — it is the medium. There are no interior monologues on a screen; everything must be made visible or audible. The screenwriter encodes subtext in behavior: what a character does with their hands while speaking, where they look, what they do not pick up when they could. Pinter built an entire theatrical method around subtext and menace — the conversation whose real subject is never named, whose silences carry more weight than any line of dialogue. Study his work for precision in this technique.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, subtext operates in two directions at once: what the narrator-at-the-time couldn't see or say, and what the narrator-now is still circling. The gap between the experiencing self and the narrating self is one of the memoirist's most powerful structural tools. When a memoirist describes an event without interpreting it — gives the reader the scene's surface without naming its meaning — and the meaning rises anyway through the precision of the rendering, that is subtext functioning in nonfiction. Mary Karr and Maggie Nelson both rely on this: the scene that trusts the reader to do the work.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Left-Branching Sentences",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 6 of 60 — The Left-Branching Sentence",
          intro: [
            "Last week you worked with the right-branching sentence: base clause first, modifications trailing behind it. The right-branch delivers its subject and verb immediately and then unfolds. This week introduces its structural opposite — the left-branching sentence — in which modification arrives before the main clause, building toward the claim rather than extending away from it.",
            "The left-branching sentence withholds. The reader encounters qualifications, conditions, and contexts before knowing what is being qualified, conditioned, or contextualized. This creates a particular forward pressure — the sentence makes the reader wait for the base clause — and it tends toward the literary, the formal, and the deliberate. Used well, it creates anticipation and emphasis; the main clause, when it arrives, lands with the weight of everything that preceded it.",
          ],
          rule: "A left-branching sentence places its modifying material — participial phrases, prepositional phrases, adverbial clauses, or absolute constructions — before the subject and verb of the main clause, creating a structure that builds toward its central claim.",
          examples: [
            {
              label: "Right-branching (for comparison)",
              text: "She finally sat down, exhausted, her hands still shaking from the cold.",
            },
            {
              label: "Left-branching (same information, withheld main clause)",
              text: "Exhausted, her hands still shaking from the cold, she finally sat down.",
            },
            {
              label: "Left-branch with adverbial clause (condition before action)",
              text: "When she had checked every door twice and confirmed the children were asleep, she allowed herself to cry.",
            },
            {
              label: "Extended left-branch (multiple modifiers before base clause)",
              text: "Having spent the better part of an hour searching for something she could not name and would not find, she gave up.",
            },
          ],
          outro: [
            "Notice what the left-branch does to emphasis. In a right-branching sentence, the main clause is established first and the modifiers deepen it; the sentence feels expansive and observational. In a left-branching sentence, the modifiers delay and pressurize the main clause; the sentence feels like an arrival.",
            "Left-branching sentences appear frequently in literary fiction, formal nonfiction, and any prose that wants to create the sensation of weight or consequence. They tend to slow the reader down — not because they are difficult, but because they require more syntactic patience. This is a tool, not a problem. Use it when the moment calls for a sentence that makes the reader wait.",
          ],
          exercise:
            "Take three right-branching sentences from your current writing. Rewrite each as a left-branching sentence by moving all post-clause modifiers to the front. Read both versions aloud for each. Ask: which version serves the moment better — the expansive right-branch or the pressurized left-branch? There is no universal answer; the exercise is to feel the structural difference until you can make the choice deliberately.",
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
              title: '"Hills Like White Elephants"',
              author: "Ernest Hemingway",
              href: "https://www.mymcpl.org/sites/default/files/Hills%20Like%20White%20Elephants%20-%20Hemingway.pdf",
              note: "Widely available online and in most short story anthologies. Read it once for the experience, then read it a second time with this question: what is the real conversation? Where is it most visible in what characters say and do? Mark every moment where the surface and the underneath diverge.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the dialogue chapter with specific attention to Burroway's treatment of subtext and the function of what characters don't say. If you already purchased this for Week 4, you have it — these chapters repay repeated reading at different moments in your development.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Situation and the Story",
              author: "Vivian Gornick",
              href: "https://bookshop.org/p/books/the-situation-and-the-story-the-art-of-personal-narrative-vivian-gornick/6697329",
              note: "Gornick's essential study of the narrator's relationship to her own material — particularly the distinction between the narrator's situation (the circumstances) and the story (the insight the narrator is pursuing). The gap between the two is the memoir's version of subtext. Read chapters 1 and 2 this week.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Real Conversation",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene in which two characters discuss a neutral, concrete subject — planning a meal, assembling furniture, dividing possessions, choosing a route — while the real subject of their conversation is something they will not name directly: the end of a relationship, an unspoken accusation, a grief that cannot be spoken aloud, a secret one character is keeping.",
            "Constraints: The real subject must never be stated. The reader should feel it with certainty by the scene's end. Use at least one moment of action subtext — a character doing something physical at the wrong moment for the moment. Use at least one image that carries emotional freight without comment. Do not use the words 'felt,' 'realized,' 'understood,' or 'knew' as a gateway to interior explanation.",
            "When you finish the draft, read it aloud. The test: does the surface conversation sound completely natural and plausible on its own terms? If the scene would only make sense to someone who already knows the subtext, the surface is too thin. Both layers must be able to carry weight independently.",
          ],
          target: "700–900 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 6 — The On-the-Nose Test",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week's AI exercise has two steps. First, write a version of your subtext scene in which both characters say exactly what they mean — all subtext made explicit, every intention stated directly. This is the 'on-the-nose' version. Then use the prompt below on your actual scene.",
          prompt:
            "I am going to give you two versions of the same scene: one where characters say exactly what they mean, and one where they do not. Do not rewrite either version. For the subtexted version, answer: (1) Where is the subtext working — where do you feel the real conversation beneath the surface one? Quote the specific moment. (2) Where is the subtext too buried — where does the surface become opaque rather than layered? (3) Is there any moment where a character accidentally says what they mean directly, deflating the tension? Identify it. (4) Does the physical action in the scene carry emotional weight, or is it neutral backdrop?",
          questions: [
            "Where is the subtext working — where do you feel the real conversation?",
            "Where is the subtext too buried, creating opacity rather than depth?",
            "Does any character accidentally say what they mean directly?",
            "Does the physical action carry emotional weight, or is it neutral?",
          ],
          note: "The on-the-nose version is not wasted work. Compare the AI's response to both drafts. The explicit version shows you exactly what you were trying to encode in the subtexted version — and often reveals whether the encoding succeeded. Many writers find that the on-the-nose draft contains lines that are, in fact, better than their subtexted alternatives.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Explanation Audit",
      blocks: [
        {
          type: "tip",
          icon: "🔍",
          name: "Cut What the Scene Already Did",
          paragraphs: [
            "Read a scene you've drafted and search for every moment where the prose explains what the scene has already shown. Look specifically for constructions like 'she felt...', 'he realized...', 'it was clear that...', 'she understood that...' following action or dialogue. In almost every case, if the action or dialogue was doing its job, the explanation is redundant — and redundancy weakens what came before it.",
            "The explanation is usually a sign that the writer didn't trust the scene. The fix is rarely to cut the explanation; it is to trust the scene. But if the scene genuinely isn't earning its subtext — if the reader couldn't feel the real conversation without the explanation — that is diagnostic information: the scene needs more precision in its surface, not more explanation underneath it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Conversation That Couldn't Be Had",
      blocks: [
        {
          type: "journal",
          title: "The Conversation That Couldn't Be Had",
          question:
            "Think of a real conversation you've had in which the real subject was never named — a conversation whose surface was entirely different from its actual content. What was the surface? What was the real subject? Why couldn't it be said directly? What happened instead — what actions, deflections, or objects stood in for the direct statement? And: what would it have taken for one of you to say the true thing?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "That gap — between what was available to be said and what could actually be said — is the territory of subtext. Your fiction will return to it constantly, because it is the territory of all human interaction under pressure. The writer's task is not to explain the gap but to render it with enough precision that the reader feels it from the inside.",
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
            "By the end of this week, you should have: written one subtexted dialogue scene with a named real subject and a neutral surface subject; completed the left-branching sentence transformation exercise; read the Hemingway story twice with analytical attention; and used the AI workshop's on-the-nose comparison to locate where your subtext is working and where it isn't.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 7",
          paragraphs: [
            "Week 7 moves from what characters don't say to who is doing the saying: point of view. You'll study the technical distinctions between first, second, and third person — and the less-taught but equally important distinctions within third person between close, distant, and free indirect discourse. The question of who sees, and what they are capable of seeing, is the question that determines everything else in a piece of fiction.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: subtext is not a technique applied to finished prose. It is a way of understanding what scenes are actually doing. Once you can see the real conversation beneath the surface one in your own work, you will also begin to see it everywhere you read — and the experience of literary fiction will change permanently.",
          ],
        },
      ],
    },
  ],
};
