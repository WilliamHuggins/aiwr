import type { WeekData } from "@/lib/mfa/types";

export const week7Data: WeekData = {
  weekNumber: 7,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Point of View & The Filter",
  emphasizedWord: "The Filter",
  deck: "Point of view is not a pronoun choice. It is a decision about whose consciousness the reader inhabits — and what that consciousness is capable of seeing, knowing, and refusing to see. This week establishes the foundational framework you will build on all year.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Point of View" },
    { label: "Grammar", value: "Mid-Branching Sentences" },
    { label: "Exercise", value: "600–800 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Whose Eyes, Whose Limits",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/13-KLqKf5Nl7k4i0VBaRNr-PUB2P5rD4e/preview" },
        {
          type: "paragraph",
          content: [
            "Every piece of fiction is told from somewhere. This is not a preference or a stylistic decision that can be deferred — it is a structural fact built into the first sentence of every story. Someone is perceiving the events. Someone's consciousness is the lens through which the reader receives the fictional world. That someone — the focal character, the narrator, the center of consciousness — determines what the story can know, what it can say, what it can feel, and what it must remain blind to. Point of view is not a pronoun. It is an entire epistemology.",
          ],
        },
        {
          type: "paragraph",
          content: [
            'Writers who treat POV as a pronoun selection — who ask "should this be first or third?" and then make a choice without understanding what each commits them to — tend to violate POV unconsciously throughout their drafts. The page slips into another character\'s knowledge without announcing it. The narrator comments on events the focal character couldn\'t have witnessed. Interior information appears for a character whose head we are not in. These are not small errors. Each one punctures the fictional dream — the state of coherent immersion that fiction at its best creates in the reader. John Gardner called it the most important thing a narrative can do: maintain ',
            { text: "the continuous and unbroken fictional dream.", emphasized: true },
            " POV errors break the dream.",
          ],
        },
        {
          type: "pullquote",
          quote: "The writer must never succumb to the illusion that he himself, as a writer, knows more than his narrator knows.",
          cite: "— John Gardner, The Art of Fiction",
        },
        {
          type: "paragraph",
          content: [
            "The three fundamental modes of point of view each create a different contract with the reader about what the narrative can access. ",
            { text: "First person", emphasized: true },
            " (\"I\") promises the most intimate access to a single consciousness — but that consciousness is inherently limited and potentially unreliable. The narrator can only know what they were present for, what they can infer, what they remember. First person is the most immediate of the modes; it is also the most claustrophobic. ",
            { text: "Third-person limited", emphasized: true },
            " (\"she,\" \"he,\" \"they\" filtered through one focal character) is the dominant mode of contemporary literary fiction. It combines the intimacy of single-consciousness access with a small degree of narratorial perspective — the narrator can occasionally observe the focal character from the outside in ways the character cannot observe themselves. ",
            { text: "Third-person omniscient", emphasized: true },
            " grants the narrator access to any character's consciousness, to events no single character witnessed, to the sweep of time and history. It is a mode of enormous power and enormous risk: mismanaged, it creates the sensation that no one is speaking, that the story is happening to no one.",
          ],
        },
        {
          type: "card",
          title: "The Three Modes: A First Survey",
          paragraphs: [
            'First person ("I"): Maximum intimacy, built-in unreliability, claustrophobic by nature. Every statement is a statement about the narrator\'s mind as much as about the world. The question is always: what is this narrator\'s limitation, and what does that limitation cost them?',
            'Third-person limited ("she/he/they" + one focal consciousness): The dominant mode of contemporary literary fiction. Allows close access to one character\'s interiority while retaining a small degree of narratorial distance. Free indirect discourse — the technique of sliding into character consciousness without attribution — is this mode\'s signature tool.',
            'Third-person omniscient (god-narrator with access to all): The mode of the 19th-century novel. Currently unfashionable in literary fiction but never absent. Demands absolute control of what the narrator reveals and when — and a voice confident enough to inhabit authority without pretension.',
          ],
        },
        {
          type: "paragraph",
          content: [
            "Beneath these three modes sits a concept that is more useful for working writers than the modes themselves: ",
            { text: "the filter.", emphasized: true },
            " The filter is the focal character's consciousness — their psychology, their history, their preoccupations, their particular way of organizing the world — as it shapes everything the narrative perceives and reports. A paranoid character does not see a car parked across the street: they see a dark sedan whose stillness is predatory, whose tinted windows are hiding something. A grieving character does not notice the light in a room: they notice how it falls across the chair that used to be his. The physical world is constant; the filter transforms it into story.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The filter is not a technique applied from outside. It is the logical consequence of committing, genuinely and completely, to a focal character's consciousness. Once you know who is perceiving — what they need, what they fear, what they cannot allow themselves to see — the filter generates itself. The discipline is to stop overriding it: to resist the temptation to describe the world objectively, to say the true thing when the focal character's limitation requires a distorted thing. The writer always knows more than the focal character. The fiction must pretend otherwise.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "POV Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, POV is inseparable from voice. The focal character's consciousness doesn't just determine what is seen — it shapes how the prose moves, what vocabulary it reaches for, what it lingers on and what it passes over. A sentence like \"The kitchen smelled like something burning and like her mother\" is a POV sentence: it tells us about the character's associative mind as much as about the kitchen. Pursue this integration. The filter should be present not just in what the narrative reports but in how every sentence is built.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, there is no interiority — there is no narrative voice to carry the filter. Everything the focal character perceives must be made visible through camera, behavior, and dialogue. The POV shot (literally, the camera placed where the character's eyes are) is one tool; the more sophisticated tool is selection: what the screenplay chooses to show in a given scene, and in what order, can encode the character's consciousness without ever stating it. The discipline of screenwriting POV is the discipline of making the invisible visible entirely through the choice of what appears on screen.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the POV problem is doubled: there are always two narrators operating simultaneously — the past self inside the experience, and the present narrator who has survived it and is now reconstructing it. The distance between these two selves, and how the memoir manages it, is one of the primary sources of its meaning. Vivian Gornick's term for this: the situation (what happened) and the story (what the narrator now understands about what happened). The memoir's filter is always bifocal. The question is which self is speaking at any given moment — and whether the memoir knows the difference.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Mid-Branching Sentences",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 7 of 60 — The Mid-Branching Sentence",
          intro: [
            "You have worked with both ends of the branching spectrum. The right-branching sentence (Topic 5) places its base clause first and extends to the right; the left-branching sentence (Topic 6) front-loads its modification and delivers the main clause at the end. The mid-branching sentence inserts its modification into the middle — interrupting the base clause to place a detail, appositive, or relative clause between the subject and the verb, or between the verb and its object.",
            "Mid-branching is the most visually distinctive of the three forms. In most typographical conventions, the interruption is set off by commas, dashes, or parentheses — each of which creates a slightly different tonal effect. The mid-branch creates the sensation of interruption, digression, or qualification inserted at the moment of highest syntactic tension: between the subject and what it does.",
          ],
          rule: "A mid-branching sentence inserts a modifying element — an appositive, a relative clause, an absolute phrase, or a parenthetical — into the middle of the main clause, between subject and verb or between verb and object, interrupting the sentence's forward momentum to place additional information at its syntactic center.",
          examples: [
            {
              label: "Base clause (no branching)",
              text: "Her father called on a Tuesday.",
            },
            {
              label: "Mid-branch with appositive (commas)",
              text: "Her father, a man who had not spoken her name in eleven years, called on a Tuesday.",
            },
            {
              label: "Mid-branch with relative clause (more formal)",
              text: "Her father, whom she had last seen at her mother's funeral and had not expected to hear from again, called on a Tuesday.",
            },
            {
              label: "Mid-branch with em-dash (more emphatic, more interrupted)",
              text: "Her father — the man she had spent a decade constructing a life without — called on a Tuesday.",
            },
          ],
          outro: [
            "Notice what mid-branching does to the reader's experience of time. The sentence delays the completion of its main clause — the verb, \"called,\" arrives only after the interruption has run its course. This delay creates suspense at the level of syntax: the reader cannot complete the grammar of the sentence until the modifier concludes. The mid-branch uses that syntactic suspense to place its most significant contextual information at the exact moment the reader is most primed to receive it.",
            "The choice of punctuation matters. Commas are neutral and inclusive. Em-dashes emphasize the interruption — they signal a stronger break, a more dramatic aside. Parentheses whisper; they suggest the parenthetical material is important but slightly separate from the main assertion. These are not interchangeable. Each makes a different claim about the relationship between the interruption and the sentence it interrupts.",
          ],
          exercise:
            "Write four mid-branching sentences about a character — any character, real or invented. Use a different punctuation choice for each: commas for the first, em-dashes for the second, parentheses for the third, and a relative clause with no additional punctuation for the fourth. Read all four aloud. Where does the interruption feel earned? Where does it feel forced? The quality of the mid-branch depends entirely on whether the inserted material deserves its syntactic position.",
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
              title: "The Art of Fiction",
              author: "John Gardner",
              href: "https://bookshop.org/p/books/the-art-of-fiction-notes-on-craft-for-young-writers-john-gardner/6697453",
              note: "If you purchased this for Week 4, return to it now and read the sections on point of view and psychic distance. Gardner's concept of the continuous fictional dream — and what breaks it — is the theoretical foundation for everything this week covers. Pay particular attention to his six levels of psychic distance; you will work with them directly in Week 23.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"The Yellow Wallpaper"',
              author: "Charlotte Perkins Gilman",
              href: "https://www.gutenberg.org/files/1952/1952-h/1952-h.htm",
              note: "Free on Project Gutenberg. Read as a study in what first-person POV can and cannot access — and what happens when the narrator's filter becomes progressively more distorted. Notice how the narrating consciousness shapes the prose at the sentence level, not just the story level. This is one of the most precise demonstrations of POV as psychological instrument in the American short story tradition.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the point of view chapter. Burroway's treatment of filtering — the unnecessary perception verbs that insert the narrator between the reader and the experience — is the most practically useful editorial tool you will take away from this week. The concept will change how you revise for the rest of the year.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Same Room, Two Filters",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the same scene twice, each time from a different character's point of view. The scene should be simple and concrete: two people in a single physical location, one of them waiting for something and the other arriving. The events — what is said, what objects are present, what happens — must be identical in both versions.",
            "What must change completely: everything the prose notices, emphasizes, and ignores. The vocabulary each narrator reaches for. What each one sees first when they enter the room. What each one cannot stop looking at. What each one fails to register because their filter doesn't select for it.",
            "Constraints: do not name either character's emotion in either version. Do not use the words 'felt,' 'noticed,' 'saw,' or 'realized' as perception gateways. Let the filter operate entirely through what the narrative chooses to render and how it renders it.",
            "After both drafts: write one paragraph identifying the most significant difference between the two versions — the detail or moment where the two filters diverge most sharply. That divergence is the filter working.",
          ],
          target: "600–800 words (both versions combined)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 7 — The Filter Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week the AI performs a filtering audit: scanning your draft for the places where the prose steps outside its focal character's consciousness — either by accessing information the character couldn't have, or by inserting unnecessary perception verbs that create distance. Paste one of your two versions from this week's exercise and use the prompt below.",
          prompt:
            "Read this passage carefully. Do not rewrite anything. Answer only these questions: (1) Identify any moment where the prose seems to access information or perspective the focal character couldn't plausibly have — any POV slip, however small. (2) Find every instance of an unnecessary perception verb — 'she saw,' 'he noticed,' 'she felt,' 'he realized,' 'she watched' — where the perception verb is a gateway to information rather than load-bearing itself. List them. (3) Name two specific details in the prose that feel most like they emerged from the focal character's particular psychology rather than from a neutral observer. What do those details tell you about who this character is?",
          questions: [
            "Are there any moments where the prose accesses what the focal character couldn't know?",
            "Which perception verbs are unnecessary gateways — filtering where none is needed?",
            "Which two details feel most specifically filtered through this character's psychology?",
            "What do those details reveal about who the character is?",
          ],
          note: "The third question is the most generative. The details the AI identifies as character-specific are the places where your filter is working — where the prose is doing POV rather than just describing POV. Read those moments carefully. They are the model for the rest of the draft.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Filtering Audit",
      blocks: [
        {
          type: "tip",
          icon: "👁",
          name: "Remove the Gateway, Keep the Experience",
          paragraphs: [
            "Search your prose for every instance of these constructions: \"she saw,\" \"he noticed,\" \"she felt,\" \"he realized,\" \"she heard,\" \"she watched,\" \"he thought,\" \"she wondered.\" For each one, ask: is this perception verb doing work, or is it a gateway to the actual information? \"She saw the door was open\" carries the same information as \"The door was open\" — with added distance. Remove the gateway; deliver the experience directly.",
            "The exception: perception verbs are load-bearing when the act of perceiving is itself significant. \"He heard the door close and realized he had been waiting for that sound for forty minutes\" is not filterable — the perception and its interpretation are the information. Learn to feel the difference between a verb that announces a perception and a verb that enacts one.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What Your Filter Selects",
      blocks: [
        {
          type: "journal",
          title: "What Your Filter Selects",
          question:
            "Think of a specific room or place you have spent time in recently — a room you know well enough that you have stopped seeing it. Now ask: what do you notice in that room that other people probably don't? What details does your specific consciousness select, because of who you are and what you carry? And conversely: what are you almost certainly not noticing, because your filter doesn't select for it? The answers to those questions describe your filter — which is to say, they describe you. What does your filter tell you about yourself as a perceiving consciousness?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Every writer has a filter, and every filter has gaps. The goal is not to eliminate the filter — it is to know it well enough to use it deliberately, to recognize when your focal character's filter should be different from your own, and to inhabit that difference completely.",
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
            "By the end of this week, you should have: written the same scene twice through two different filters; completed the mid-branching sentence exercise with all four punctuation variants; read Gilman's story as a study in POV-as-psychology; and used the AI workshop to audit your prose for filtering errors and for the moments where your filter is working.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 8",
          paragraphs: [
            "Week 8 introduces character: not character description or backstory, but the structural question of what makes a fictional person feel fully inhabited on the page. You will study the difference between a character who is described and a character who is rendered — and learn the specific craft tools that close that gap. Point of view and character are inseparable; the filter you have been studying this week is the character made into a narrative instrument.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: POV is a commitment, not a preference. Once you choose whose consciousness the reader inhabits, the narrative owes that consciousness consistency. Every slip is a broken promise. The discipline of POV is the discipline of staying inside a mind — even when, especially when, what that mind cannot see is exactly what the writer most wants to say.",
          ],
        },
      ],
    },
  ],
};
