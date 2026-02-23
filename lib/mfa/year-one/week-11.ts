import type { WeekData } from "@/lib/mfa/types";

export const week11Data: WeekData = {
  weekNumber: 11,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Dialogue I — Realism & Subtext",
  emphasizedWord: "Realism & Subtext",
  deck: "Fictional dialogue is not transcribed speech. It is a compressed, rhythmically shaped, dramatically loaded simulacrum of speech — and it is always doing at least two things at once. This week you learn what those two things are, and how to build the gap between them.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Dialogue" },
    { label: "Grammar", value: "The Compound Sentence" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What People Say Is Not What They Mean",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Real conversation is repetitive, digressive, full of hesitations and repairs, socially performative, and frequently pointless in the sense that nothing is decided and no one changes. If you transcribed twenty minutes of actual human speech and placed it on the page of a novel, the reader would abandon the book. Not because the dialogue was unrealistic — it would be entirely realistic — but because realism is not the goal. The goal of fictional dialogue is ",
            { text: "the illusion of realism", emphasized: true },
            ": a simulacrum of speech that sounds plausibly human while doing work that actual speech almost never does.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "That work is always at least double. Every line of functional dialogue advances the story ",
            { text: "and", emphasized: true },
            " reveals character. Not one or the other — both. A line that advances plot without revealing character is a delivery mechanism, not dialogue. A line that reveals character without advancing the scene is a monologue. The discipline of dialogue writing is finding the line that does both simultaneously — that moves the action forward while telling you something irreducible about the person who said it. When those two functions align in a single sentence of speech, dialogue becomes one of fiction's most efficient instruments.",
          ],
        },
        {
          type: "pullquote",
          quote: "Dialogue is character in action — it is the place where a character's desire, history, and evasion are all present at once, under pressure, in real time.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "The third function — the one that separates competent dialogue from genuine literary dialogue — is subtext. You studied subtext in Week 6 as a general principle of fiction; this week applies it specifically to the spoken word. Subtext in dialogue is the real conversation happening beneath the surface conversation. Characters deflect, qualify, answer the wrong question, change the subject, say something technically true that means something different. They do this not because they are dishonest but because ",
            { text: "the direct statement would cost too much", emphasized: true },
            ": too much vulnerability, too much finality, too much admission of what they actually want. Real people do this constantly. Fictional dialogue earns its keep by rendering that indirection with precision.",
          ],
        },
        {
          type: "card",
          title: "The Three Functions of Dialogue",
          paragraphs: [
            "Advance the story: Something changes as a result of this exchange. The situation at the end of the dialogue is different from what it was at the beginning — a decision made, a secret partially revealed, a relationship shifted. If nothing has changed, the dialogue is atmospheric rather than dramatic.",
            "Reveal character: Not what a character says about themselves, but how they speak. Vocabulary, rhythm, what they avoid, how they respond to silence, whether they answer the question asked or the question they wished had been asked. Voice is character.",
            "Carry subtext: The real subject of the conversation is not the stated subject. One layer of meaning operates on the surface; another operates beneath it. The reader should feel both. The characters, in most cases, should not acknowledge the second layer — which is exactly what makes it dramatic.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The mechanics of dialogue on the page are worth addressing directly. The attribution tag — \"she said,\" \"he asked\" — is almost always the right choice. \"Said\" is an invisible word: the reader's eye passes over it without registering it as a feature of the prose. Alternatives — \"he exclaimed,\" \"she retorted,\" \"he averred,\" \"she shot back\" — interrupt the invisible and draw attention to the machinery. The dialogue itself should carry the emotion. If you feel you need \"he said angrily,\" the line is not angry enough. Revise the line, not the tag.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The action beat — a brief physical action placed within or adjacent to a line of dialogue — is often more useful than any attribution tag. \"She set down her glass.\" \"He crossed to the window.\" \"She didn't look up.\" These beats do two things: they tell the reader who is speaking, and they add a layer of physical information that the dialogue itself doesn't carry. The character who doesn't look up while answering a question is telling the reader something the words are not saying. The action beat, at its best, is dialogue by other means — it is the body speaking when the mouth will not.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Dialogue Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction has the widest range of dialogue styles available to it — from the lyrical and stylized to the flat vernacular, from maximally indirect to shockingly direct. The license is wide, but the principle is constant: the dialogue must be doing at least two things simultaneously, and one of them should be subtext. Notice, in the fiction you are reading this week, how even the most naturalistic-seeming dialogue is shaped: compressed, rhythmically varied, loaded with what the characters are not saying. The compression is the art.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, dialogue is almost entirely a vehicle for subtext. Characters on screen rarely say what they mean — the director, actor, and editor will amplify what is implied, and a script that explains itself trusts no one. The screenwriter's discipline is to keep dialogue short, specific, and carrying more than its surface meaning at all times. Elmore Leonard's rule — never write a line of dialogue that could appear in any other scene — is a useful constraint. Each line should be so specific to this character, in this moment, that it could not be transplanted. In playwriting, dialogue carries more weight than in screenwriting, because the stage offers fewer visual alternatives. The playwright's dialogue must do what the camera cannot.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Reconstructed dialogue in memoir raises ethical questions that fictional dialogue does not. What did they actually say? How closely can you reconstruct it? What is your obligation when the person you are quoting remembers the conversation differently, or would object to your version? The standard in literary nonfiction is a reasonable reconstruction: dialogue that captures what was said as accurately as memory and research allow, with disclosure when significant liberties have been taken. Composite dialogue, condensed conversations, and paraphrased exchanges are all permitted when disclosed — but each requires the writer to be honest, at least with themselves, about the degree of reconstruction involved.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Compound Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 11 of 60 — The Compound Sentence",
          intro: [
            "Last week you studied the philosophical stakes of coordination versus subordination — the claim each makes about the relationship between ideas. This week works at the level of the full compound sentence: two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so — the FANBOYS) or by a semicolon. The compound sentence implies balance and equivalence between its two clauses. It says: these two things are parallel, or sequential, or in tension — but equivalent in weight.",
            "Understanding when a compound sentence is the right sentence requires understanding what equivalence actually costs. Two independent clauses joined as equals is a claim about their relationship. When that claim is accurate — when the two ideas genuinely do carry equal weight, or when their juxtaposition without hierarchy is itself the meaning — the compound sentence is exact. When one idea should govern the other, coordination weakens the prose by refusing to establish the hierarchy that the content requires.",
          ],
          rule: "The compound sentence joins two independent clauses with a coordinating conjunction (FANBOYS) or a semicolon, implying equivalence and balance between the clauses. Use it when the two ideas are genuinely equal in weight — when coordination is the honest choice, not the default.",
          examples: [
            {
              label: "Compound with 'and' — sequence, equivalence",
              text: "She opened the letter, and her hands stopped moving.",
            },
            {
              label: "Compound with 'but' — contradiction, tension between equals",
              text: "He knew it was a lie, but he needed it to be true.",
            },
            {
              label: "Compound with semicolon — close relationship, formal balance",
              text: "The room was exactly as she had left it; nothing had been touched.",
            },
            {
              label: "When subordination would be more honest",
              text: '"She was tired, and she made a mistake" vs. "She made a mistake because she was exhausted" — the second makes the causal claim the first refuses to make.',
            },
          ],
          outro: [
            "The semicolon deserves particular attention. Unlike the coordinating conjunction, which names the relationship (and = addition, but = contrast, so = consequence), the semicolon is silent about the relationship between its two clauses. It says only: these two things are closely related, and I am leaving the nature of that relationship to you. This silence can be a powerful rhetorical choice — the juxtaposition without explanation that asks the reader to supply the logic. It can also be a form of vagueness masquerading as sophistication. Use the semicolon when the relationship between the two clauses is genuinely richer for being unstated.",
            "The practical test for any compound sentence: could one of its clauses be the main clause of a complex sentence with the other as a subordinate clause? If yes, ask which structure makes the more accurate claim. If they are genuinely equal, the compound is right. If one governs the other, subordinate.",
          ],
          exercise:
            "Write a five-sentence paragraph using only compound sentences — FANBOYS or semicolons, no subordination. Then rewrite the same paragraph using subordination throughout, making each sentence complex rather than compound. Read both aloud. Where does coordination produce the right effect? Where does subordination clarify a relationship the compound version left vague? The goal is not to prefer one over the other but to confirm that your choice is deliberate in both directions.",
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
              note: 'If you read this for Week 6, read it again — now with a different question. In Week 6 you were tracking subtext as a general principle. This week, track the dialogue mechanics specifically: the attribution tags (notice how Hemingway uses "said" and almost nothing else), the action beats, the moments where a character answers a question other than the one asked. Mark every line that is doing subtext work. By the end of the story you should have marked nearly every line.',
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the dialogue chapter in full. Burroway's treatment of said versus alternatives, of action beats, and of the multiple functions dialogue must serve is the most practical and precise account of dialogue mechanics available in a craft textbook. Read it slowly and apply every claim to dialogue you have written in the past three weeks.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Pulp Fiction (screenplay)",
              author: "Quentin Tarantino",
              href: "https://imsdb.com/scripts/Pulp-Fiction.html",
              note: "Free at IMSDB. Read pages 1–30 only — the opening diner scene and the first apartment sequence. You are not reading for story; you are reading for dialogue rhythm. Notice: how short each line is, how characters talk past each other, how subtext operates in what seems like casual conversation, and how action beats replace tags almost entirely. Tarantino's dialogue is stylized, not realistic — but the underlying mechanics are precisely those this week covers.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Subtext Exchange",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene in which two characters discuss a neutral, concrete subject — cooking a meal, fixing something broken, planning a trip, sorting through belongings — while the real subject of their conversation is something they will not name directly: a grievance, a desire, a fear, a lie that one character is living, the end of something between them.",
            'Constraints: the real subject must never be stated. The reader should know what it is with certainty by the end of the scene — not through inference but through the accumulated pressure of the dialogue\'s subtext. Use at least two action beats (physical actions placed within or adjacent to dialogue that carry emotional information the words don\'t). Use "said" and "asked" as your only attribution tags; if a line needs something more emphatic, make the line itself more emphatic.',
            "After the draft: read only the spoken lines aloud, skipping all action and attribution. Does the dialogue sound like something people would actually say — naturalistic on the surface, not stilted or formal? If a line sounds written rather than spoken, revise it until it sounds spoken. Then read the full draft and ask: does the real subject arrive at the reader with force? If not, the surface conversation may be doing too much of the dramatic work. The neutral subject should be genuinely neutral — a thin, plausible surface over which the subtext can move.",
          ],
          target: "700–900 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 11 — The Subtext Diagnostic",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your completed exercise — the full scene, including action beats and attribution. Use the prompt below exactly. The AI will read the dialogue as a working reader and identify where the subtext is operating and where the surface conversation is carrying more weight than it should.",
          prompt:
            "Read this scene carefully. Do not rewrite anything. Answer only these questions: (1) What is the real subject of this conversation — what are the characters actually talking about beneath the neutral surface? State it directly. (2) Identify the two or three lines of dialogue where the subtext is working hardest — where you feel the real subject most strongly. Quote them. (3) Identify any lines where a character says something too close to the real subject — where the subtext becomes overt and the surface tension deflates. (4) Are the action beats doing emotional work, or are they neutral stage directions? Identify the one action beat that carries the most subtext.",
          questions: [
            "Does the AI correctly identify the real subject — or does it misread it?",
            "Which lines does it cite as carrying the most subtext? Do you agree?",
            "Are there lines it flags as too direct that you want to defend? Why?",
            "What does its reading of the action beats tell you about whether they are doing their job?",
          ],
          note: "If the AI correctly identifies the real subject, your subtext is working. If it misreads it — if it describes a different real subject than you intended — the surface conversation may be genuinely ambiguous rather than subtextually layered. Read its misreading carefully before deciding whether to revise toward its reading or away from it. Sometimes the misreading is more interesting than the original intention.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: 'The "Said" Debate — Resolved',
      blocks: [
        {
          type: "tip",
          icon: "💬",
          name: "Use Said. Almost Always, Use Said.",
          paragraphs: [
            "Search your dialogue for every attribution tag that is not \"said\" or \"asked.\" He exclaimed. She retorted. He averred. She shot back. He muttered darkly. For each one, ask: is this verb adding information that the dialogue and the surrounding action don't already carry? In almost every case, it is not. It is compensating for dialogue that isn't doing its job. Change the tag to \"said\" — and if the line feels flat without the tag's emotion, revise the line itself.",
            'The exceptions are narrow and specific: "asked" for direct questions; a verb that carries irreplaceable physical information — "she called from the other room," "he whispered" when the whisper is the dramatic point. Outside these cases, "said" is invisible, and invisible is the goal. The reader should not be aware of the machinery. The dialogue should arrive as experience, not as reported speech.',
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Conversation Reconstructed",
      blocks: [
        {
          type: "journal",
          title: "The Conversation Reconstructed",
          question:
            "Reconstruct, as precisely as you can, a conversation you had that changed something — a relationship, a plan, your understanding of someone, your understanding of yourself. Not a summary of what was said: the actual words, or as close as memory will allow. Write it as a scene, with attribution and action beats. Then ask: what was being said on the surface? What was actually being negotiated beneath it? Where were the lines of subtext — the moments where the real subject was closest to the surface without breaking through?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "This exercise is useful not just as a writing exercise but as a diagnostic: if you find it difficult to reconstruct the actual words — if the scene insists on collapsing into summary — that difficulty is telling you something about how you process experience. The writers who write the best dialogue are almost always close listeners. They remember not just what was meant but what was said.",
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
            "By the end of this week, you should have: written a subtext-driven dialogue scene with action beats, attribution limited to said and asked, and a real subject that the surface conversation never names; completed the compound/subordination paragraph exercise in both directions; read Hemingway's story a second time as a study in dialogue mechanics; and used the AI diagnostic to confirm whether your subtext is landing or collapsing into ambiguity.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 12",
          paragraphs: [
            "Week 12 extends into Dialogue II: the problem of making every character sound distinct from every other. Voice differentiation — through vocabulary, sentence rhythm, what a character avoids saying, how they respond to silence — is one of the most technically demanding elements of dialogue writing. You will also study dialect: both the craft necessity of authentic voice and the ethical history of dialect as a tool of condescension.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: the test of dialogue is not whether it sounds like real speech. Real speech fails on the page. The test is whether it sounds like it could be real speech — whether the reader's ear accepts it as plausible — while doing the work that real speech almost never does. That gap between the plausible and the purposeful is where dialogue lives.",
          ],
        },
      ],
    },
  ],
};
