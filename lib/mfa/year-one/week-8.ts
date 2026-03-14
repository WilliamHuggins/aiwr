import type { WeekData } from "@/lib/mfa/types";

export const week8Data: WeekData = {
  weekNumber: 8,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Characterization & Indirect Revelation",
  emphasizedWord: "Indirect Revelation",
  deck: "Readers don't believe characters who are described. They believe characters who are revealed. This week studies the difference between telling a reader who someone is and building the conditions under which a reader discovers it themselves.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Characterization" },
    { label: "Grammar", value: "Sentence Openers" },
    { label: "Exercise", value: "600–750 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Character Who Reveals Themselves",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1qKDAqR-SzCW7vqBC5SjW9r3o81UNp2Sg/preview" },
        {
          type: "paragraph",
          content: [
            "There is a version of character writing that reads like a dossier. The narrator announces that the protagonist is intelligent, guarded, prone to self-sabotage, secretly kind beneath a hard exterior. The reader is told who this person is. And the reader, despite being given all the correct information, does not believe it — not the way they believe in characters who are never described at all, who simply act and speak and move through a world, and whose nature accumulates in the reader's imagination through the steady pressure of specific detail.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "E.M. Forster identified the central distinction in ",
            { text: "Aspects of the Novel", emphasized: true },
            ": the difference between flat and round characters is not a difference between simple and complex, or minor and major. It is a difference between characters who can be summarized in a sentence and characters who cannot — characters who ",
            { text: "surprise us convincingly.", emphasized: true },
            " That phrase is the key. The surprise of a round character is not random; it is the surprise of depth made visible. We did not know they were capable of this. But the moment they do it, we recognize that we should have.",
          ],
        },
        {
          type: "pullquote",
          quote: "The test of a round character is whether it is capable of surprising in a convincing way.",
          cite: "— E.M. Forster, Aspects of the Novel",
        },
        {
          type: "paragraph",
          content: [
            "The primary tools of characterization divide cleanly into two methods. ",
            { text: "Direct characterization", emphasized: true },
            ' is when the narrator or another character tells us what to think: "She was the kind of woman who remembered every slight." "He was, above all, a man who needed to be right." Direct characterization has its uses — it can establish necessary information efficiently, set tonal register, or create deliberate dramatic irony when the narrator is wrong about who someone is. But it asks the reader to trust the narrator\'s verdict. It gives the reader a conclusion without the evidence.',
          ],
        },
        {
          type: "card",
          title: "Direct vs. Indirect: The Two Methods",
          paragraphs: [
            "Direct: The narrator or a character tells us who someone is. Efficient. Authoritative. Asks the reader to accept a verdict. Most effective when the verdict is complicated, qualified, or wrong — when the telling creates irony or pressure rather than simply delivering information.",
            "Indirect (through action): Character revealed by what they do, especially what they do under pressure, when no one is watching, or when they could easily do otherwise. Action is the most credible form of characterization because it is the least mediated — the character hasn't described themselves; they've simply behaved.",
            "Indirect (through speech): Not what characters say about themselves, but how they speak — their vocabulary, their rhythms, what they avoid, what they return to, how they respond to silence. Voice is character.",
            "Indirect (through relationship to objects): What a character notices, touches, keeps, or ignores in a scene tells us who they are without any assertion. This is where last week's filter work becomes characterization: what the consciousness selects is what the character is.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Indirect characterization is harder to write and more credible to read. Its primary vehicle is action — and not action in the abstract, but ",
            { text: "action under pressure.", emphasized: true },
            " A character who behaves generously when generosity is easy tells us nothing. A character who behaves generously when it costs them something tells us who they are. The dramatic scene — the scene with a genuine turn, which you studied in Week 4 — is the primary laboratory for indirect characterization precisely because it places characters under pressure and forces them to reveal themselves. What they do at the moment of maximum cost is who they are.",
          ],
        },
        {
          type: "paragraph",
          content: [
            'The indirect method also operates at the level of the sentence. The verbs a writer habitually associates with a character are a form of characterization. A character who "moved toward" is different from one who "crossed to" — and different again from one who "angled toward," "drifted toward," or "pushed through the crowd toward." These are not synonyms. They are different people. Every word choice that attaches to a character accumulates, and that accumulation becomes the reader\'s experience of who that person is. The character reveals themselves not only by what they do but by what the prose does when they are present.',
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Characterization Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction has access to the full range of characterization tools, including the one unavailable to every other form: direct interiority. The novelist can simply tell us what a character is thinking. This is a power, not a shortcut — but it creates a specific risk. Writers who have direct access to a character's thoughts often stop building the indirect evidence. They explain the interior rather than dramatizing it. The discipline of literary characterization is to use interiority to deepen what behavior has already established, not to replace behavior with announcement.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screen and stage writer has no access to interiority. Everything must be externalized — made visible through what characters do, say, and choose not to say. This constraint, which beginning screenwriters often experience as a limitation, is actually a purifying discipline: it forces the writer to find the action that externalizes the interior state. The character who is afraid doesn't think about their fear; they check the lock twice. The character who is ashamed doesn't explain their shame; they don't meet the other character's eyes. Screen characterization is always indirect. That indirection is the medium's power.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the characterization of real people carries ethical weight that fictional characterization doesn't. Rendering your mother, your ex-partner, or your childhood friend as a character in your story — with all the selective emphasis and narrative shaping that characterization requires — necessarily reduces a full human being to the function they serve in your narrative. The memoirist's ethical obligation is not to omit this reduction (it is unavoidable) but to remain conscious of it: to build characters who feel fully human on the page even while acknowledging, at least to yourself, that you are making choices about what to show and what to leave out.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Sentence Openers",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 8 of 60 — Sentence Openers and the Rhythm of Variety",
          intro: [
            "The branching work of Topics 5, 6, and 7 taught you how sentences extend — to the right, to the left, through the middle. This week focuses on a related but distinct question: where does the sentence begin? The opening element of a sentence determines its rhythm, its emphasis, and — in aggregate across a paragraph — whether the prose feels monotonous or alive.",
            "Most writers, when they scan a page of their own work, discover that 60 to 80 percent of their sentences begin the same way: with the subject. \"She opened the door.\" \"He was already awake.\" \"The room smelled of something burning.\" Subject-first is the default English sentence structure, and the default has its virtues — clarity, directness, forward momentum. But a page of subject-first sentences reads like a list. The reader's ear registers the repetition before their mind does, and attention begins to drift.",
          ],
          rule: "Skilled prose varies its sentence openers deliberately, beginning sentences with participial phrases, prepositional phrases, adverbial clauses, absolute phrases, single-word modifiers, and inverted constructions — so that the rhythm of the page shifts with the demands of the material rather than settling into a mechanical default.",
          examples: [
            {
              label: "Default (subject-first)",
              text: "She finally reached for the phone.",
            },
            {
              label: "Participial phrase opener",
              text: "Exhausted and no longer trusting her own judgment, she finally reached for the phone.",
            },
            {
              label: "Prepositional phrase opener",
              text: "After an hour of not moving, she finally reached for the phone.",
            },
            {
              label: "Adverbial clause opener",
              text: "When she could no longer pretend she wasn't going to do it, she reached for the phone.",
            },
            {
              label: "Absolute phrase opener",
              text: "Her hand already moving before she'd decided, she reached for the phone.",
            },
            {
              label: "Single-word modifier opener",
              text: "Slowly, as if the slowness could make it less definite, she reached for the phone.",
            },
          ],
          outro: [
            "Notice that the information in all six sentences is essentially the same. What changes is the emphasis, the texture of time, and the relationship between the action and its context. The default sentence delivers the action cleanly. The participial opener embeds the action in a psychological state. The adverbial clause builds delay into the syntax itself — the reader cannot arrive at the action until the condition has been named. Each opener type creates a different reading experience.",
            "This is not an argument for never beginning with the subject. Subject-first sentences are tools too — for speed, for clarity, for the percussive effect of the short declarative sentence after a long accumulation. The goal is conscious choice: to know what you are doing and why, rather than defaulting to the same opener because it is easiest.",
          ],
          exercise:
            "Take one paragraph from your current writing in which most sentences begin with the subject. Identify the two or three sentences where a different opener would serve the moment better — where the content calls for more context before the action, or where emphasis should fall differently. Rewrite only those sentences, choosing the opener type deliberately. Do not revise every sentence. Selective variation is the goal, not variety for its own sake.",
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
              title: "Aspects of the Novel",
              author: "E.M. Forster",
              href: "https://www.gutenberg.org/ebooks/7613",
              note: "Free on Project Gutenberg. Read the chapter titled \"People\" — Forster's foundational discussion of flat and round characters, homo fictus versus homo sapiens, and the necessary difference between fictional persons and real ones. This is one of the most reprinted passages in the pedagogy of fiction for good reason: it says something genuinely useful in language that has not aged.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read Chapter 3, \"Characterization.\" If you've already purchased this text, you have it; this chapter repays close reading at this stage of the semester. Pay particular attention to Burroway's treatment of the direct and indirect methods and her analysis of how character is revealed through detail, action, and the relationship between characters.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Beloved",
              author: "Toni Morrison",
              href: "https://bookshop.org/p/books/beloved-toni-morrison/6697453",
              note: "Read the opening 30 pages as a study in indirect characterization. Morrison never describes Sethe directly at the novel's opening — we come to understand her through the house, through what other characters avoid saying, through a single act of violence related almost in passing. Track the specific moments where characterization occurs. Write down three things you know about Sethe by page 30 and identify the evidence for each.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Three Introductions",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Introduce the same character three times using three different methods. Each introduction should be 200–250 words — no more. The character, setting, and basic situation should be consistent across all three.",
            "Introduction 1 — Direct: Tell us who this character is. Use the narrator's authoritative voice to describe their nature. Be specific rather than general, but tell rather than show. This is the method you are not practicing yet — its purpose is to give you something to measure against.",
            "Introduction 2 — Indirect through action: Show this character doing something. Do not describe or summarize their nature. Let a single specific action — chosen with care, under whatever degree of pressure you decide — carry the characterization. No commentary from the narrator. No interior explanation.",
            "Introduction 3 — Indirect through detail: Introduce this character through the objects and physical environment surrounding them. Do not describe the character's appearance or psychology directly. Build the character entirely from what they own, keep, have worn out, or chosen to place where it is.",
            "After writing all three: read them aloud in sequence. Which version do you believe most? Which tells you the most about who this person is? Which surprised you as you wrote it?",
          ],
          target: "600–750 words (all three combined)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 8 — The Character Interview",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week's AI exercise develops a character from the inside out. Write a brief sketch of a character you are working with or want to work with — two to four sentences describing who they are and what their situation is. Then use the prompt below to conduct a character interview.",
          prompt:
            "I am going to give you a character sketch. Role-play as this character — stay in character throughout, speak in their voice, do not break to explain yourself as an AI. The character is: [paste your sketch]. I will ask you ten questions. Answer each as the character would: not as you think they should answer, but as they actually would, given who they are. Begin.",
          questions: [
            "What do you want right now — today, this week?",
            "What are you most ashamed of?",
            "What do you believe about the world that most people you know would disagree with?",
            "What is the last thing you said to someone that you wish you could take back?",
            "What do you want that you have never told anyone?",
          ],
          note: "After the interview, read back through the transcript and mark every answer that surprised you — every place the character said something you didn't expect. Those surprises are the character's depth becoming visible. Write one or two of them into your next scene involving this character, not as direct statements but as indirect behavior: what would a person who said that thing do?",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Verb Test",
      blocks: [
        {
          type: "tip",
          icon: "⚡",
          name: "What Your Character's Verbs Reveal",
          paragraphs: [
            "Open any draft and list the ten most common verbs associated with your protagonist — the verbs that follow their name or pronoun throughout the text. Are they active or passive? Decisive or reactive? Oriented toward other people or toward objects and space? The verb pattern of a character is a form of characterization you may be producing without knowing it. Read the list. Does it describe the person you intended to write?",
            "If the verbs are primarily passive — if your protagonist is constantly being acted upon, watching, waiting, receiving — ask whether this is a psychological truth about the character or a default of your prose. Active characters move through their world with intention, even when that intention fails. A character who only reacts is a character the reader struggles to follow, because there is no forward momentum to attach to.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Person You Cannot Summarize",
      blocks: [
        {
          type: "journal",
          title: "The Person You Cannot Summarize",
          question:
            "Think of a person in your life — someone you know well — whom you could not summarize in a sentence. Not because they are complicated in an interesting way, but because any sentence you tried would immediately feel wrong, incomplete, or reductive. What is it about this person that resists summary? What do they do that surprises you while remaining completely characteristic of who they are? What have you observed about them that you cannot explain but recognize as entirely theirs? This person is already a round character. What would you need to show a reader — what actions, what objects, what words — for the reader to feel what you feel when you are in a room with them?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The people who resist our summary are the ones who teach us the most about characterization — because they remind us that roundness is not a technique applied from outside but the natural condition of any person observed with enough patience and precision.",
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
            "By the end of this week, you should have: written three introductions of the same character using direct and two forms of indirect characterization; completed the sentence opener variation exercise; read Forster's \"People\" chapter and the opening of Beloved as studies in how a character accumulates; and used the AI character interview to locate depth you hadn't consciously built.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 9",
          paragraphs: [
            "Week 9 moves deeper into the engine of character: the distinction between what a character wants and what they need — and the gap between them that generates story. You will work with the most generative framework in narrative craft for understanding why characters do what they do, and why those actions so rarely get them what they were after.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: the indirect method takes longer. Direct characterization is faster to write and easier to control. But readers remember what they discovered, not what they were told. The character who reveals themselves through action, speech, and object is the character who survives the last page.",
          ],
        },
      ],
    },
  ],
};
