import type { WeekData } from "@/lib/mfa/types";

export const week3Data: WeekData = {
  weekNumber: 3,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Showing vs. Telling & Narrative Mode",
  emphasizedWord: "Narrative Mode",
  deck: "This is the most taught and most misunderstood principle in fiction craft. The skill is not avoiding one mode or the other — it is knowing which to deploy and when.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Scene vs. Summary" },
    { label: "Grammar", value: "Base Clauses & Kernels" },
    { label: "Exercise", value: "400–600 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Scene and Summary Are Not Enemies",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The instruction \"show don't tell\" has done more damage to beginning writers than almost any other piece of craft advice. Not because it is wrong, but because it is radically incomplete. Taken literally — as many writers take it, especially at the start — it produces prose that is exhausting, airless, and ironically less vivid than a judicious combination of scene and summary would produce. Every moment dramatized in full, every transition stretched into action: the result is not immediacy but tedium.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Here is the actual principle, which is more demanding and more interesting than the slogan: ",
            {
              text: "scene and summary are two modes of narration, each with distinct properties, and the writer's job is to choose between them consciously.",
              emphasized: true,
            },
            " Scene creates immediacy, emotional experience, and the illusion of real time. Summary creates context, compression, and narrative distance. A novel that contains only scene has no breathing room; a novel that contains only summary has no life. The ratio between them — and the decisions about which moments deserve which treatment — is one of the deepest structural choices a writer makes.",
          ],
        },
        {
          type: "pullquote",
          quote: "Dramatize — but know when the camera should pull back.",
          cite: "— Henry James (paraphrased from the New York Edition prefaces)",
        },
        {
          type: "paragraph",
          content: [
            "The key question is not \"am I telling or showing?\" but rather: \"does this moment earn full dramatization?\" Some moments do. Others don't. ",
            {
              text: "A scene earns its length when something changes within it — when a character's understanding, relationship, or situation is different at the exit than at the entry.",
              emphasized: true,
            },
            " A scene that exists only to convey information the reader needs — backstory, context, setup — is almost always better handled in summary. The test is simple: at the end of this scene, has something turned? If yes, it earns the page. If no, compress.",
          ],
        },
        {
          type: "card",
          title: "Before / After: Choosing the Right Mode",
          paragraphs: [
            "BEFORE (unnecessary scene): He drove to the store. He parked the car. He walked inside. He found the aisle with cereal. He chose the one he always chose, the one his mother used to buy, and he put it in his basket. He walked to the register. He paid. He drove home.",
            "AFTER (summary serving the story): He drove to the store and bought the same cereal his mother used to buy — a habit he'd never examined until he found himself standing in the aisle, basket in hand, crying.",
            "The second version is not longer; it is smaller and more alive. Summary has compressed eight sentences into one — and earned the emotional weight the scene was fumbling toward.",
          ],
        },
      ],
    },
    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "How This Applies Across Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The ratio of scene to summary is one of the most important structural decisions in a novel. Long novels are often summary-heavy by necessity — years compress into paragraphs, decades into chapters. Short stories are almost entirely scene: in a story of 3,000 words, every scene carries enormous weight.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting has almost no summary. Everything must be visible or audible. The equivalent of telling in screen is voice-over, which must be used sparingly or the screenplay feels like a radio play. The challenge is learning to trust the image.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, showing often means rendering the remembered scene in sensory immediacy, while telling is the present narrator making meaning. Strong memoir uses both: scene first, then interpretation—earned, not announced.",
            },
          ],
        },
      ],
    },
    {
      id: "grammar",
      label: "Grammar & Style · Topic 3 of 60",
      title: "Base Clauses & Kernel Sentences",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Sentence Foundations",
          intro: [
            "Every complex sentence has a kernel: the irreducible subject-verb-object core from which everything else hangs. “She ran.” “The letter arrived.” “He forgot.” The kernel is where the sentence's action lives.",
            "Understanding kernels is not a reductive exercise — it is a diagnostic one. Strong prose is built on strong kernels, and weak prose is often weak precisely because its kernels are buried, passive, or vague.",
          ],
          rule: "Every sentence has an irreducible kernel (subject + verb + object); all modification is built on top of that kernel, and the kernel must be strong enough to bear the weight.",
          examples: [
            {
              label: "Original (kernel buried)",
              text: "It was during the long, difficult years following the accident, when everything in the house had taken on a kind of gray cast and the children had stopped asking questions, that her decision to leave finally became clear to her.",
            },
            {
              label: "Revision (kernel restored)",
              text: "She decided to leave — years after the accident, in a house gone gray and quiet, after the children had stopped asking questions.",
            },
          ],
          outro: [
            "Notice that the revision is not shorter because we have cut information — it contains nearly the same information. It is cleaner because the kernel (\"she decided to leave\") now carries the sentence.",
            "This does not mean every sentence should foreground its kernel. Some powerful sentences deliberately delay the verb — but those are choices, not accidents.",
          ],
          exercise:
            "Take a paragraph from your Week 1 or Week 2 writing. Strip each sentence down to its kernel. Write the kernels in sequence. Are they strong, clear, active? Revise the two weakest kernels. (5–10 minutes)",
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
              title: "Writing Fiction, Chapter 2: “Showing and Telling”",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-janet-burroway/9781478635048",
              note: "A thorough treatment of the distinction, with concrete examples of how published writers move between modes.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Lady with the Dog",
              author: "Anton Chekhov",
              href: "https://www.gutenberg.org/files/13415/13415-h/13415-h.htm",
              note: "A masterclass in scene/summary balance. Track where time compresses and where it slows into real-time emotional truth.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "The Art of Fiction, Fictional Dream section",
              author: "John Gardner",
              href: "https://bookshop.org/p/books/the-art-of-fiction-john-gardner/7553857",
              note: "A useful framework for what breaks when telling replaces showing at the wrong moment: the reader wakes up from the dream.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },
    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Write the Same Moment Twice",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Choose a single moment from your own life or from a piece of fiction you're developing — a moment with genuine emotional stakes.",
            "Write it first entirely in summary: compress the whole moment into 3–4 sentences. Tell the reader what happened and what it meant. Don’t dramatize.",
            "Then write it as a full scene: unfold it in real time with specific sensory detail and action. Let meaning emerge from what happens rather than explanation.",
            "Finally, write one paragraph answering: what did each version give the reader that the other couldn’t?",
          ],
          target: "400–600 words (scene) + 3–4 sentences (summary) + 1 paragraph reflection",
        },
      ],
    },
    {
      id: "ai",
      label: "AI Workshop",
      title: "AI Exercise: Mode Conversion",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro: "This uses AI to create a comparison point for your choices — not to write for you, but to reveal what summary compresses and what scene can hold.",
          prompt:
            "Paste your summary version (3–4 sentences) and use this prompt:\n\n“Transform this summary into a scene of approximately 400 words. Keep the same events, characters, and outcome. Add sensory detail, include dialogue if it would occur naturally, and let the moment unfold in real time. Do not explain what it means — let meaning emerge from action. Match the tone of the source material as closely as you can.”",
          questions: [
            "What did the AI choose to dramatize that you didn’t? Do its invented details feel true or false?",
            "What did the AI miss that only you could know?",
            "Where did it slip into unnecessary telling — commentary instead of enactment?",
          ],
          note: "Treat the AI’s version as a mirror, not a model. Don’t borrow its language—use the contrast to sharpen your own decisions.",
        },
      ],
    },
    {
      id: "tip",
      label: "Editorial Tip",
      title: "Identify Your Telling Habits",
      blocks: [
        {
          type: "tip",
          icon: "✏️",
          name: "The Telling Audit",
          paragraphs: [
            "Highlight sentences that tell the reader what to think or feel: “She was sad.” “It was a beautiful day.” “The situation was tense.” These are candidates for expansion into scene — or for conscious retention as efficient summary.",
            "You don’t need to expand all of them. Some telling is correct and efficient. But you do need to know they’re there and choose deliberately.",
          ],
        },
      ],
    },
    {
      id: "journal",
      label: "Journal Prompt",
      title: "Private Reflection",
      blocks: [
        {
          type: "journal",
          title: "The Scene You’ve Been Avoiding",
          question:
            "Think of a memory that still carries emotional weight — one you've never written about, or one you've written around. Write it first as a single telling sentence. Then ask: what specific scene contains that truth? What has stopped you from entering it directly?",
        },
      ],
    },
    {
      id: "summary",
      label: "Week in Summary",
      title: "What You Practiced",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week, you should have: read the three core texts, identified the scene/summary boundary in published work, written the same moment in both modes, completed the kernel-sentence exercise, and used the AI workshop as a contrast tool.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "If you take only one thing: showing is not virtue and telling is not sin. They are instruments. The craft is choosing consciously.",
          ],
        },
      ],
    },
  ],
};
