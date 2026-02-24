import type { WeekData } from "@/lib/mfa/types";

export const week22Data: WeekData = {
  weekNumber: 22,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "The Unreliable Narrator",
  emphasizedWord: "The Unreliable Narrator",
  deck: "The unreliable narrator is not a trick. It is a way of honoring the truth that all perception is partial. Every narrator is unreliable to some degree — the question is whether the unreliability is the story's surface decoration or its deepest engine.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Unreliable Narration" },
    { label: "Grammar", value: "Serial Constructions & the Rhythm of Threes" },
    { label: "Exercise", value: "700–1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Gap Between What Is Said and What Is True",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Wayne Booth coined the term 'unreliable narrator' in ",
            { text: "The Rhetoric of Fiction", emphasized: true },
            " (1961) to describe a narrator whose account diverges — in ways the implied author signals to the reader — from what actually happened or what is actually true. The term has since become one of literary fiction's most generative concepts, and also one of its most misunderstood. Unreliability is not a binary property: narrators are not either reliable or unreliable. They exist on a spectrum, and the most sophisticated literary uses of unreliable narration are those in which the unreliability is subtle, graduated, and structural — built into the very way the narrator speaks rather than announced through obvious inconsistency or revealed in a climactic twist.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The sources of unreliability are multiple, and each produces a different kind of narrative gap. Self-deception — the narrator who genuinely believes their own distorted account — is the most productive because it operates continuously: every sentence the narrator speaks carries the distortion, and the reader must simultaneously track what the narrator says and what the evidence suggests. Psychological limitation — the narrator whose comprehension capacity is genuinely incomplete, whether through age, trauma, or condition — creates a gap between what the narrator perceives and what the reader can infer from the perceptions. Motivated concealment — the narrator who knows the truth and withholds it — is technically unreliable but risks feeling like a trick if the withholding is the narrative's primary mechanism. And the simply ",
            { text: "perspectival", emphasized: true },
            " narrator — the one who is unreliable only in the sense that everyone is, because every consciousness has blind spots — is the most honest acknowledgment that all narration is partial.",
          ],
        },
        {
          type: "pullquote",
          quote: "The unreliable narrator does not lie to us. They tell us the truth as they understand it. The gap between their understanding and the truth is where the novel lives.",
          cite: "— craft principle, after Wayne Booth",
        },
        {
          type: "paragraph",
          content: [
            "Kazuo Ishiguro's Stevens in ",
            { text: "The Remains of the Day", emphasized: true },
            " is the canonical example of gentle, continuous unreliability. Stevens does not lie. He reports events with meticulous, almost pedantic care. But his account of those events is systematically distorted by a lifetime of repressing everything that his professional identity as a great butler cannot accommodate — his feelings for Miss Kenton, his complicity in Lord Darlington's political errors, his sacrificed personal life. The reader sees all of this with perfect clarity through the very precision of Stevens's evasions: the excessive qualification, the retreat to professional standards when emotional admission becomes imminent, the almost physical avoidance of certain memories. Ishiguro makes Stevens's unreliability structural. It is not the content of his narration that reveals him — it is its ",
            { text: "form.", emphasized: true },
          ],
        },
        {
          type: "card",
          title: "Four Sources of Unreliability — and What Each Produces",
          paragraphs: [
            "Self-deception: The narrator genuinely believes their distorted account. The gap between the narrator's self-image and the evidence is continuous — every sentence carries it. This is the most productive source of unreliability because it operates at the level of the prose itself: the narrator's word choice, their evasions, their over-explanations all become signals. Stevens in The Remains of the Day; Humbert Humbert in Lolita (though with elements of motivated concealment as well).",
            "Psychological or perceptual limitation: The narrator cannot fully comprehend what they are experiencing — through age, trauma, cognitive difference, or the simple limitation of being inside an event whose significance they cannot yet understand. Huckleberry Finn cannot fully understand the social world he describes; his innocence is the source of both his moral clarity and his occasional failure to see. Stevens Dakarai in Ironweed; Esther Greenwood in The Bell Jar in her most dissociated passages.",
            "Motivated concealment: The narrator knows more than they tell and withholds it deliberately. This is the mechanism of thriller unreliability (Gone Girl, The Murder of Roger Ackroyd) and of some literary fiction when secrets are structural. The risk is that when the concealment is revealed, it feels like a trick rather than a discovery — unless the withholding has been thematically motivated from the beginning.",
            "Perspectival limitation: Every narrator is unreliable in this sense — limited to their own vantage point, unable to fully comprehend other minds, shaped by their specific history and psychology. Wayne Booth's insight is that the implied author and the narrator are always distinct, and the gap between them is always present to some degree. The question for any narrative is whether that gap is meaningful — whether it is doing work — or simply the irreducible condition of all told stories.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The craft discipline of unreliable narration is subtlety. The most common failure is making the unreliability too visible — having the narrator over-protest, or placing the signals of unreliability so heavily that the reader feels the author's hand rather than the narrator's distortion. The reader should feel a mounting discomfort, a growing sense that something is wrong with the account being offered, without being able to point to a single moment where the narrator breaks. The unreliability should be systemic — diffused throughout the prose — not spotlit. When the narrator is doing their most characteristic distorting, the prose should sound most like itself.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Unreliable Narration Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's unreliable narrators are most powerful when the unreliability is not a plot mechanism but a character truth: the narrator's distorted account is itself the characterization. What Stevens cannot say about Miss Kenton tells the reader everything about Stevens. What Humbert Humbert aestheticizes when he should feel horror tells the reader everything about Humbert's moral failure. The literary unreliable narrator is not concealing information for a reveal — they are revealing themselves in every evasion, every over-explanation, every retreat to abstraction when concrete admission becomes dangerous. Build the unreliability into the prose's texture, not into the plot's architecture.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Unreliability in screenwriting is almost always structural rather than tonal — it operates through what the audience is shown versus what is true, managed through editing and visual withheld information rather than through a narrator's voice. Gone Girl and The Usual Suspects use unreliability as genre mechanism: the audience is given a story and then shown it was false. Stage unreliability is different again: the audience watches a character construct their account in real time, and the gap between performance and truth is visible in the actor's body. Pinter's plays are built on this gap — characters who cannot say what they know, or who know more than they say, producing the specific dramatic discomfort of motivated concealment rendered physically.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the memoirist is always, to some degree, an unreliable narrator of their own life — and the best memoirists acknowledge this rather than concealing it. Memory is reconstructive and self-serving; the retrospective self shapes the story of the experiencing self in ways that are not always neutral. Nabokov's Speak, Memory is the supreme example of a memoir that foregrounds its own unreliability: Nabokov's narrating self is acutely aware that he is constructing a self-serving aesthetic object rather than rendering transparent truth, and the memoir's beauty is inseparable from its self-consciousness. The ethical imperative in CNF is not to eliminate unreliability — that is impossible — but to be honest about its presence. The memoirist who writes as though their account is the whole truth is not more reliable than the one who flags their limitations; they are simply less honest about them.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Serial Constructions & the Rhythm of Threes",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 22 of 60 — Serial Constructions and the Rhythm of Threes",
          intro: [
            "Two elements create a pattern; three complete it. This is not merely an aesthetic observation — it is a cognitive one. The human brain expects pattern, and a pair creates the expectation of a third element. When the third arrives, there is a specific satisfaction: the sense of completion, of having arrived somewhere, of a series that has found its end. The tricolon — three parallel elements in series — is the most satisfying serial construction in English prose, and one of the oldest. 'Friends, Romans, countrymen.' 'Life, liberty, and the pursuit of happiness.' 'Blood, sweat, and tears.'",
            "The tricolon works on rhythm as well as pattern. The three elements need not be equal in length — and often the most effective tricolons are those in which the third element is weighted differently from the first two, either longer (creating a sense of culmination) or shorter (creating a sense of punctuation or surprise). 'She was smart, she was beautiful, and she was deeply unhappy' arrives differently than 'She was smart, beautiful, and lost' — the single-word third element drops like a stone, carrying all the weight of the two longer elements that preceded it.",
          ],
          rule: "The tricolon presents three parallel elements in series, the third often differently weighted from the first two. The parallelism must be grammatical — like structures in like positions — but the weight and length of the three elements can vary, and that variation is where the rhetorical effect lives. The series should feel complete at three: a fourth element almost always dissipates the rhythm.",
          examples: [
            {
              label: "Three equal elements — accumulation at even weight",
              text: "He had lied to his family, he had lied to his colleagues, he had lied to himself.",
            },
            {
              label: "Two short, one long — third element as culmination",
              text: "She was tired. She was cold. She was the kind of tired and cold that comes from carrying a secret for twenty years.",
            },
            {
              label: "Two long, one short — third element as punctuation",
              text: "She had believed him when he said it was temporary, had believed him when he said it would get better. She had been wrong.",
            },
            {
              label: "The fourth-element test",
              text: "Adding a fourth: 'He had lied to his family, his colleagues, himself, and everyone who had ever trusted him' — the fourth element dissipates the rhythm. Three completes the pattern; four reopens it. Cut to three.",
            },
          ],
          outro: [
            "Serial constructions in prose are not limited to three-element tricolons. Series of four or more can create different effects — the polysyndeton (conjunctions between every element: 'and this and that and the other') that creates cumulative weight; the asyndeton (no conjunctions: 'the light, the heat, the silence, the absolute stillness') that creates breathless enumeration. But three is the fundamental unit, and fluency with the tricolon is the foundation for all other serial work.",
            "Note the relationship between serial constructions and the unreliable narrator: a narrator who over-uses tricolons is performing coherence — suggesting through rhetorical completeness that they have the situation under control, that they have accounted for everything. That performance can itself be a signal of unreliability: the narrator who is most insistent on the symmetry of their account is often the one most actively avoiding the asymmetry underneath it.",
          ],
          exercise:
            "Write six tricolon sentences on subjects drawn from your current writing — characters, settings, emotional states, relationships. Vary the weight distribution across the six: at least two with an extended third element, at least two with a contracted third element, and two with equal elements. After writing all six, apply the fourth-element test to each: add a fourth element and read it aloud. Confirm that three is where the sentence wants to stop. Then write one paragraph using at least two tricolons, ensuring each earns its three-part structure.",
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
              title: "The Remains of the Day, Chapters 3–4",
              author: "Kazuo Ishiguro",
              href: "https://bookshop.org/p/books/the-remains-of-the-day-kazuo-ishiguro/6697453",
              note: "Purchase. Read Chapters 3 and 4 as a study in gentle, structural unreliability. You have already read Chapter 1 for Week 20's third-person limited study; now read deeper into the novel with the specific question: where does Stevens's unreliability live? Not in what he says but in how he says it — in his retreats to professional abstraction, his qualifications, his almost physical avoidance of certain subjects. Mark every moment where the form of his narration is more revealing than its content. The gap between what Stevens says and what the reader understands is the novel's central mechanism.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Speak, Memory, Chapter 1",
              author: "Vladimir Nabokov",
              href: "https://bookshop.org/p/books/speak-memory-an-autobiography-revisited-vladimir-nabokov/6697453",
              note: "Purchase. Read Chapter 1 — the famous opening meditation on consciousness and time. Nabokov's memoir is the canonical example of a memoir that foregrounds its own unreliability: the narrating self is visibly shaping, selecting, aestheticizing the material, and the memoir's beauty is inseparable from that visible construction. Ask: what is Nabokov acknowledging about the relationship between memory and invention? How does his self-consciousness about that relationship change your relationship to the material he presents?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Gone Girl screenplay, first act",
              author: "Gillian Flynn",
              href: "https://deadline.com/wp-content/uploads/2014/09/gone-girl.pdf",
              note: "Free online. Read the first act — approximately pages 1–30. This is the most precise contemporary example of unreliability as genre mechanism in screenwriting: two narrators, both eventually revealed to be giving false or partial accounts, their competing stories structuring the entire first act's information architecture. Read not for story but for mechanism: how does Flynn signal, early, that both accounts are unreliable without making the unreliability visible? What signals are present in the first thirty pages that a re-reader would recognize as early warnings?",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Self-Deceiving Narrator",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a scene narrated by someone who is, in some significant way, lying to themselves. The narrator should be utterly convinced of their own account — they are not concealing information deliberately, they genuinely believe what they are telling you. The reader should be able to see what the narrator cannot.",
            "Do not break the narrator's illusion. Do not have the narrator slip and reveal the truth, or suddenly become self-aware. Let the distortion stand — continuous, consistent, utterly sincere. The gap between the narrator's account and the visible evidence should do all the work.",
            "The unreliability should live in the prose's texture: in the narrator's word choices, in what they linger on and what they pass over quickly, in their over-explanations of things that do not require explanation, in the precision of their avoidance. Build it into the form, not the content.",
            "Craft note: choose one specific source of unreliability and commit to it entirely. Do not mix self-deception with motivated concealment. The self-deceiving narrator is the hardest to write because you must hold two things simultaneously: the narrator's sincere belief in their account, and the reader's clear view of what that belief is distorting.",
          ],
          target: "700–1,000 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 22 — The Unreliability Diagnostic",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the exercise, paste your unreliable narrator scene. Use the prompt below. The AI will diagnose how clearly and how subtly the unreliability comes through — and, crucially, where you may have over-signaled it.",
          prompt:
            "Read this scene carefully. The narrator is meant to be unreliable — specifically, self-deceiving: they believe their own account, but the reader should be able to see what the narrator cannot. Answer these questions: (1) How clearly does the unreliability come through? Is the gap between the narrator's account and the visible evidence legible to a careful reader? (2) Identify the three strongest textual signals of unreliability — the specific moments where the narrator's word choice, evasion, over-explanation, or avoidance reveals the distortion most clearly. Quote those moments. (3) Identify any moments where the unreliability is too overt — where the narrator 'breaks' in a way that feels like the author stepping in rather than the character's distortion showing naturally. (4) Is there any moment where the narrator's self-deception actually produces unintentional sympathy — where the reader might feel the narrator's sincerity more than their distortion?",
          questions: [
            "Which of the three strongest signals the AI identifies was intentional on your part, and which did you not consciously place?",
            "Does the AI identify any moment of over-signaling — where the unreliability is too visible? Do you agree?",
            "What does the AI identify as the source of the unreliability — self-deception, limitation, concealment? Is that what you intended?",
            "Where does the narrator's sincerity create sympathy rather than unease? Is that a failure or a complexity you want to preserve?",
          ],
          note: "The most valuable output of this exercise is not the AI's identification of signals you already placed deliberately — it is the signals you did not consciously place, which the AI finds anyway. Unconscious unreliability signals are often the most convincing ones, because they emerge from genuine inhabitation of the narrator's psychology rather than authorial calculation. If the AI finds signals you did not intend, study them: they are the moments where you were most fully inside the narrator's distorted perception.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Too-Obvious Unreliable Narrator",
      blocks: [
        {
          type: "tip",
          icon: "🎭",
          name: "The Unreliability Should Feel Like the Narrator, Not the Author",
          paragraphs: [
            "The most common failure of unreliable narrator writing is making the unreliability too visible — having the narrator over-protest their innocence, or placing the dramatic irony so heavily that the reader feels the author's hand directing them toward the correct interpretation. When the reader feels manipulated rather than unnerved, the unreliable narrator has failed. The goal is mounting discomfort, not clear signals.",
            "The test is this: if you removed every obvious signal of unreliability — every moment where the narrator's account is visibly wrong — would the unreliability still be present? It should be. The unreliability should be systemic, diffused throughout the prose at the level of diction, rhythm, and attention. When the narrator is doing their most characteristic distorting, the prose should sound most fully like itself — most assured, most meticulous, most at home. Stevens is most unreliable when he is most professorial. That is the model.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Your Own Reliable Unreliability",
      blocks: [
        {
          type: "journal",
          title: "Your Own Reliable Unreliability",
          question:
            "In what area of your life have you been most reliably unreliable — most consistently telling yourself a version of events that suited you better than the truth? Not a single episode of self-deception, but a pattern: the story you returned to, the account that served you, the version of a relationship or a failure or a success that you found it necessary to maintain. When did you know? Was there a moment when the gap between your account and the evidence became impossible to sustain, or did the distortion simply slowly become less necessary as the circumstances that made it necessary changed? What would the narrator of that period of your life — the self who believed the account — sound like on the page?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The self-deceiving narrator you write this week is most convincing when it draws on the specific texture of how self-deception actually works in a mind you know from the inside. You know what your own reliable unreliability sounds like. That knowledge is your most valuable resource for this exercise.",
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
            "By the end of this week you should have: written a scene with a self-deceiving narrator whose unreliability is built into the prose's texture rather than announced through obvious inconsistency; read Ishiguro's Chapters 3–4 for the way structural unreliability operates at the level of form rather than content; read Nabokov's first chapter for the memoir that foregrounds its own constructedness; used the AI diagnostic to identify both intentional and unintentional unreliability signals; and written six tricolon sentences with varied weight distribution.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 23",
          paragraphs: [
            "Week 23 is Psychic Distance — The Variable Lens. You encountered Gardner's six levels in Week 17; now you will train the ability to move fluidly up and down the scale within a single scene, using distance strategically to create revelation, manage pacing, and control emotional effect. The week's exercise — 'The Depth Dive' — begins at maximum distance and closes in over 800 words to the deepest interiority, with the reader feeling the closing-in.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The POV sequence is now complete: first person, third-person limited, second person and omniscient, and unreliable narration. These five weeks constitute the most sustained treatment of POV available in any MFA curriculum. What you know now is not merely a taxonomy of modes — it is a set of precise instruments for controlling information, managing the reader's relationship to character, and making the epistemological claim that every narrative makes. The thesis project you declared in Week 18 has a POV. This sequence has given you the vocabulary to confirm it, question it, or change it with full understanding of what is at stake.",
          ],
        },
      ],
    },
  ],
};
