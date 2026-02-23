import type { WeekData } from "@/lib/mfa/types";

export const week9Data: WeekData = {
  weekNumber: 9,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Round, Flat & the Convincing Surprise",
  emphasizedWord: "the Convincing Surprise",
  deck: "A flat character can be a masterpiece. A round character must be capable of surprising us while remaining, in retrospect, completely inevitable. This week you learn to build both — and to know which your story needs where.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Round & Flat Characters" },
    { label: "Grammar", value: "Sentence Inversion" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Contradiction as the Engine of Depth",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The most common misreading of Forster's flat/round distinction is to treat it as a hierarchy — as if round were always better, flat always a sign of failure or laziness. This is wrong in an important way. Some of the most memorable characters in literary fiction are flat: Mr. Collins, Dolores Umbridge, Captain Ahab in his most monomaniacal passages. These characters are not thin — they are perfectly executed single-note instruments, and the note they play is exactly the note the work requires. The question is never \"is this character round?\" The question is: ",
            { text: "what does this story need this character to do, and does this character do it?", emphasized: true },
          ],
        },
        {
          type: "paragraph",
          content: [
            "That said, the protagonist of a literary work almost always needs to be round. The reason is structural: a flat protagonist cannot change, and a protagonist who cannot change cannot carry a story arc. The narrative requires that something be at stake in the interior of the central character — that their passage through events costs them something or teaches them something or forces them into contact with a truth they have been avoiding. A flat protagonist is already fully known on page one, and the reader senses this. There is nowhere to go.",
          ],
        },
        {
          type: "pullquote",
          quote: "The test of a round character is whether it is capable of surprising in a convincing way. If it never surprises, it is flat. If it surprises but does not convince, it is flat pretending to be round.",
          cite: "— E.M. Forster, Aspects of the Novel",
        },
        {
          type: "paragraph",
          content: [
            "Forster's formulation contains a second, less-quoted criterion that matters as much as the first: the surprise must be ",
            { text: "convincing.", emphasized: true },
            " This is the harder requirement. Any writer can make a character do something unexpected. The craft lies in building a character so fully — so completely grounded in specific psychology, specific history, specific contradictions — that when they do the unexpected thing, the reader's response is not confusion but recognition: ",
            { text: "Of course. I should have seen that coming.", emphasized: true },
            " The surprise is not a violation of who the character is; it is the revelation of a depth that was always there. The writer knew it. The reader feels it arriving.",
          ],
        },
        {
          type: "card",
          title: "Four Terms Worth Distinguishing",
          paragraphs: [
            "Flat: Definable in a single sentence. Fully predictable. Serves a consistent function in the narrative without surprising us. Can be brilliant — but cannot be the center of a story that requires growth or revelation.",
            "Round: Contains genuine internal contradiction. Capable of surprising us in ways that feel, in retrospect, inevitable. Has an interior life that the narrative is exploring rather than reporting.",
            "Static: Does not change across the course of the story. Can be flat or round — a round static character is one we come to understand more fully over time without them fundamentally changing. Agathe Christie's Hercule Poirot is round but static: he has depth, but he does not arc.",
            "Dynamic: Changes — in understanding, belief, behavior, or fundamental self — as a result of the story's events. Dynamic characters almost always need to be round, because a change that is not rooted in genuine interiority and contradiction tends to feel imposed by plot rather than earned by character.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The mechanism that produces roundness is contradiction. Not superficial contradiction — not \"she is kind but also impatient\" — but the kind of contradiction that creates genuine internal pressure: two things a character believes or wants or fears that cannot both be honored at once, and that the character has, until now, managed to avoid confronting directly. The story is the event that makes the avoidance impossible. What the character does when they can no longer avoid the contradiction is the story's center.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "There is also the second axis: static versus dynamic. Static characters do not change; dynamic characters do. The static/dynamic axis is independent of the flat/round axis, though they tend to correlate. Most protagonists in literary fiction are both round and dynamic — they have genuine depth and they change. But a round static character (Hamlet could be read this way — deeply contradictory, never resolving) is entirely possible, and so is a flat dynamic character (the reformed villain in popular fiction who changes without ever becoming complex). Know which combination you are working with. The confusion between these axes produces some of the most common structural failures in workshop writing: the protagonist who is interesting but doesn't go anywhere, and the protagonist who goes somewhere but we don't believe the journey.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Round and Flat Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's treatment of flat characters has evolved significantly since Forster. Contemporary literary fiction frequently uses what we might call the \"functional flat\" — a secondary character who is entirely consistent, even archetypal, but whose flatness is conscious and purposeful: a foil that illuminates the protagonist's roundness by contrast, or a type whose predictability makes the protagonist's unpredictability more visible. The most sophisticated use of flat characters is not as background furniture but as structural pressure — the flat character whose consistency creates the conditions under which the round character is forced to show their contradictions.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Television's long form has produced some of the most psychologically complex characters in the history of narrative — Tony Soprano, Fleabag's protagonist, Walter White — precisely because it has the time to build contradiction slowly, to let a character's depth accumulate across hundreds of pages of script. The TV writer who understands round character understands that the series is built on the gap between who a character presents themselves to be and who they are under pressure, and that this gap must be maintained, deepened, and only partially resolved across the full run. Genre screenwriting relies heavily on well-executed flat characters to service plot efficiently. The craft is knowing which register your story is in.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the static/dynamic axis carries particular moral weight. The memoir convention is that the narrator changes — that the story is a record of transformation, of the movement from one understanding to another. A memoir whose narrator is genuinely static risks feeling either dishonest (claiming growth that didn't occur) or solipsistic (a thousand pages of the same person). But the memoirist's specific challenge is that the real person they are rendering may actually have been static — may not have changed, may not have arrived at any useful understanding. The ethical question is whether the memoir can honor that truth while still generating narrative forward momentum. Some of the most interesting recent memoirs explore this problem directly.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Sentence Inversion",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 9 of 60 — Sentence Inversion",
          intro: [
            "Standard English word order is Subject-Verb-Object: the subject acts, the verb names the action, the object receives it. This order is so deeply ingrained that departing from it immediately registers as marked — as a deliberate choice that signals something. Sentence inversion is the practice of departing from standard order by displacing the subject, by fronting the object or complement, or by placing the verb before its subject. The effect is emphasis, formality, or a slight heightening of register that announces the sentence is doing something intentional.",
            "Christensen's study of inversion in published literary prose found that inversions appear most frequently when the inverted element carries the highest emotional or thematic weight of the sentence — when what is being moved to the front of the sentence is exactly what the writer most wants the reader to receive first, before the orienting context of subject and verb.",
          ],
          rule: "Sentence inversion departs from standard Subject-Verb-Object order by displacing or fronting an element — typically for emphasis, to create a slightly elevated register, or to place the emotionally or semantically weighted element where the reader encounters it first.",
          examples: [
            {
              label: "Standard order",
              text: "A stranger walked into the hall.",
            },
            {
              label: "Inverted (locative fronting — creates arrival, atmosphere)",
              text: "Into the hall walked a stranger.",
            },
            {
              label: "Standard order",
              text: "She had never forgiven him.",
            },
            {
              label: "Inverted (complement fronting — isolates the emotional core)",
              text: "Never had she forgiven him.",
            },
            {
              label: "Standard order",
              text: "His name was the one thing she refused to say.",
            },
            {
              label: "Inverted (object fronting — the refused thing becomes the sentence's first fact)",
              text: "His name — that she refused to say.",
            },
          ],
          outro: [
            "The inverted sentence tends toward the literary and the slightly formal. It slows the reader marginally and signals that the sentence is doing something beyond simple information delivery. Used consistently, it can create a period-inflected or elevated voice. Used sparingly, it creates local emphasis at a moment of particular weight.",
            "The most important caution: inversion for its own sake produces affectation. The sentence should earn its inversion by having something worth emphasizing, something whose placement at the front genuinely changes the reader's experience of what follows. If you cannot identify what the inversion is doing for this particular sentence, default to standard order.",
          ],
          exercise:
            "Write five inverted sentences, each describing a moment of emotional consequence — a departure, a refusal, an arrival, a recognition, a loss. For each, read the standard-order version aloud first, then the inverted version. Where does the inversion serve the sentence? Where does it feel like costume rather than architecture? The discipline is discernment, not the inversions themselves.",
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
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Continue with the characterization chapter, focusing specifically on Burroway's treatment of flat and round, static and dynamic. Pay particular attention to her examples — the way she demonstrates these concepts through published fiction rather than abstract description. Then find one example of a masterfully executed flat character in anything you have read this semester and write two sentences about what makes the flatness work.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "A Portrait of the Artist as a Young Man",
              author: "James Joyce",
              href: "https://www.gutenberg.org/ebooks/4217",
              note: "Read Chapter 1 only — free on Project Gutenberg. This is the most famous demonstration in literary fiction of gradual character emergence through style: Stephen Dedalus is not described, not analyzed, not summarized — he accretes from the texture of his perception. Read with the question: what do I know about Stephen by the end of this chapter, and how did Joyce give me that knowledge without once stating it directly?",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Fleabag (Series 1, Episode 1 script)",
              author: "Phoebe Waller-Bridge",
              href: "https://writersguild.org.uk/wp-content/uploads/2020/01/Fleabag-S1-E1-SCRIPT.pdf",
              note: "Free via the Writers' Guild. Read it as a study in round characterization achieved almost entirely through indirection: we understand Fleabag's psychology and wound long before any direct statement of them, and the form — the direct address to camera, the unreliable narrator in real time — is itself a character choice. Track the specific moments where character depth becomes visible. What is the convincing surprise of this script?",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "One Flat, One Round",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Create two characters: one flat, one round. Place them in a single scene together — one location, one continuous exchange or situation. The flat character must be perfectly consistent throughout: predictable, knowable in one dimension, serving a clear and fixed function. Do not make the flat character a villain or a fool; make them a fully realized version of their type.",
            "The round character must do one thing in the scene that surprises — both the flat character and the reader. But the surprise must be convincing: built from specific detail, specific history, specific contradiction established earlier in the scene or implied by the texture of who this character has been. The surprise should feel, on rereading, completely inevitable.",
            "Constraints: do not explain the round character's surprise to the reader. Do not announce it as a surprise. Simply build the character carefully enough that the moment arrives with the force of recognition. The flat character's reaction to the surprise is part of your material — their inability to fully receive or process what has just happened is one of the structural gifts of putting these two character types in a scene together.",
          ],
          target: "700–900 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 9 — The Contradiction Generator",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week's AI exercise builds the specific contradictions that make a round character possible. Before you use the prompt, describe your protagonist in two sentences — not their plot situation, but their psychology: who they are, what they believe, how they move through the world. Then use the prompt below.",
          prompt:
            "I am going to describe a character in two sentences. Give me ten psychological contradictions for this character — things that are genuinely true of them simultaneously and that create internal pressure. Each contradiction should be surprising but internally coherent. Do not give me surface opposites like 'he is kind but also cruel' or 'she is confident but also insecure.' Go deeper: into the specific, the particular, the contradiction that only this character — given their history, their damage, their desires — could contain. The character is: [paste your two-sentence description].",
          questions: [
            "Which contradictions feel most specific to this character rather than generically human?",
            "Which contradiction creates the most narrative pressure — the one most likely to explode under the right conditions?",
            "Which contradiction is the one this character is most actively hiding from themselves?",
            "How could you encode one of these contradictions into a specific action or object in your next scene?",
          ],
          note: "Choose the two contradictions that most resonate with your sense of who this character is — the ones that feel discovered rather than assigned. Write them into the character's backstory, not as stated facts but as implied history: what happened that made this contradiction possible? Then read your week's exercise draft and ask whether the round character's contradiction is visible in what you wrote.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Consistency Check",
      blocks: [
        {
          type: "tip",
          icon: "🔎",
          name: "The Author Who Forgot What They Established",
          paragraphs: [
            "Characters frequently behave inconsistently in early drafts — not in the interesting, round-character way, but in the way that happens when a writer forgets what they established two scenes ago. This is not depth; it is error. The read for this is simple and brutal: take a draft and track one character's behavior from first appearance to last with a single question for every action they take: does this follow from what I know about who this person is?",
            "Flag every place they act against their established desire or psychology without sufficient motivation — without a scene event significant enough to have produced a genuine change. Then ask: is this inconsistency a mistake to fix, or the seed of something round? Sometimes what looks like a continuity error is actually the character showing you something true that you haven't yet consciously written toward. The discipline is learning to tell the difference.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Contradiction You Contain",
      blocks: [
        {
          type: "journal",
          title: "The Contradiction You Contain",
          question:
            "Who in your life contains the most contradiction — who holds two things simultaneously that seem impossible to hold at once? Do not explain the contradiction or resolve it. Simply name both sides with as much precision as you can. Then: turn the question on yourself. What contradiction do you contain that you have managed, until now, to avoid confronting directly? What would happen — to your understanding of yourself, to a relationship, to a project you are working on — if you stopped avoiding it?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The contradictions you find hardest to name in yourself are usually the ones your fiction is circling without landing on. They are also, almost always, the engine of the most interesting work you will write.",
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
            "By the end of this week, you should have: written a scene containing one flat and one round character, with the round character's convincing surprise built from specific contradiction; completed the sentence inversion exercise and identified where inversion serves versus where it merely decorates; read the Joyce chapter and the Fleabag script as studies in character emergence through indirection; and used the AI workshop to generate the specific contradictions that will make your protagonist round rather than merely complex-sounding.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 10",
          paragraphs: [
            "Week 10 introduces the distinction that generates every round character's forward motion: the gap between what a character consciously wants and what they unconsciously need. This is the structural engine beneath the flatness/roundness distinction — the mechanism by which internal contradiction becomes narrative pressure. You will work with Robert McKee's want/need framework and write the scene that shows both simultaneously without naming either.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: the convincing surprise is not a twist. It is not a reversal engineered for effect. It is the moment when a character's depth — which you have been building, sentence by sentence, detail by detail — becomes visible. The reader didn't see it coming. But the moment it arrives, they recognize that it was always there.",
          ],
        },
      ],
    },
  ],
};
