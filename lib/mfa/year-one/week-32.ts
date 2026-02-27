import type { WeekData } from "@/lib/mfa/types";

export const week32Data: WeekData = {
  weekNumber: 32,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Pacing & Rhythm — Controlling the Reader's Experience of Time",
  emphasizedWord: "Controlling the Reader's Experience of Time",
  deck: "Narrative time and clock time are completely different things. A story can spend fifty pages on one hour and three sentences on a decade — and the reader will feel both as the right speed if the pacing decisions are justified by emotional significance. Pacing is not speed. It is the relationship between what a moment deserves and how much space it is given.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Pacing & Dilation" },
    { label: "Grammar", value: "Anaphora & Epistrophe" },
    { label: "Exercise", value: "900+ words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Management of Time",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every narrative is a compression of time. The events being rendered took actual time — hours, years, a lifetime — and the rendering collapses that time into words on a page that a reader moves through in a fraction of the original duration. What the writer controls is not the amount of time compressed but the rate of compression: where the prose slows to real-time or slower, where it accelerates past real-time, and how those shifts in rate correspond to the emotional significance of what is being rendered. Pacing is this management of compression — the deliberate calibration of how much narrative space any given moment receives relative to how much it deserves.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The fundamental pacing decision in any narrative is the choice between scene and summary. Scene — the presentation of events in real-time, with dialogue and action rendered moment by moment — slows the narrative and immerses the reader. Summary — the compression of time and event into a sentence or paragraph that tells what happened rather than showing it happening — accelerates the narrative and creates distance. Most literary fiction operates as a rhythm of scene and summary: long scenes at moments of maximum emotional significance, summary in the transitions between them, with the proportion of scene to summary signaling what the narrative regards as important.",
          ],
        },
        {
          type: "pullquote",
          quote: "The most powerful pacing move available is dilation: spending two hundred words on a single second. The dilation tells the reader that this second is the second the entire narrative has been building toward.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Five Pacing Tools",
          paragraphs: [
            "Scene and summary: the master controls. Scene immerses and slows; summary accelerates and distances. The skilled writer adjusts the proportion of scene to summary not according to a formula but according to emotional significance: the moments that matter most receive the most scene-space. A chapter that is all scene has no breath; a chapter that is all summary has no texture. Both in proportion to the moment's weight.",
            "Sentence length variation: the micro-level pacing tool. Short sentences accelerate; long sentences slow. A passage of very short sentences creates urgency and fragmentation — the mind can hold only the immediate impression before the next one arrives. A passage of long, syntactically complex sentences creates a sense of time slowing, of the narrative attending closely to something that will not release it. The sentence-level pacing aligns with the scene's emotional register: fast prose for fast action, slow prose for the moment that requires maximum attention.",
            "White space and section breaks: structural pacing at the macro level. A section break imposes a pause on the reader — a moment of rest before the next section begins. Multiple short sections with white space between them create a staccato rhythm at the chapter level; one long unbroken section creates immersive continuity. The writer who manages white space strategically is making pacing decisions at every level of the narrative's architecture.",
            "Dilation: the most powerful pacing move available. Dilation is the deliberate slowing of narrative time to below real-time — spending more words on a moment than the moment would occupy in actual experience. Sensory fragmentation, micro-observation of small details, interior intrusion at moments of crisis — all of these dilate time. Used sparingly, dilation signals maximum emotional significance: the narrative slows here because this is the moment, and the slowing is the formal enactment of that claim.",
            "Digression and subnarrative: the pacing tool that moves sideways. A digression — a departure from the main narrative into memory, meditation, or associative material — slows forward momentum while maintaining engagement. Used well, the digression creates dramatic irony (the reader is aware the main narrative is paused while the digression builds toward a return) and opens the narrative's horizontal dimension. Used carelessly, it becomes dead weight. The test: does this digression, when the narrative returns from it, change what the returning moment means?",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Raymond Carver and Ernest Hemingway represent the compression extreme: prose of maximum economy, in which almost everything is summary except the few scenes rendered with complete sensory precision, and in which those precise scenes carry enormous weight exactly because they are surrounded by compression. What Carver and Hemingway do is not a failure to dilate — it is a structural argument that revelation emerges from restraint, that the moment given maximum scene-space is the moment the prose has been working toward, and that the compression of everything else makes the expansion of that one moment possible.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Pacing Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's relationship to pacing is governed by emotional significance rather than by genre convention: there is no rule that literary fiction moves slowly or quickly, only that the rate of movement at any given moment must be justified by what the moment deserves. The most common pacing failure in literary fiction is the opposite of what beginning writers expect: not that the prose is too slow, but that the prose has no range — it moves at a single undifferentiated pace, neither dilating at moments of maximum significance nor accelerating at moments of transition. The prose without pacing range is the prose without rhythm, and the reader feels it as a kind of numbness.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, pacing is controlled by the scene-to-scene structure as much as by the prose of action lines: scenes that arrive quickly and end with irresolution create forward momentum; scenes that are given more space and end with partial resolution provide breath. The act break is the macro-level pacing tool, imposing significant pauses on the narrative at the points of maximum structural tension. For playwrights, pacing is partly in the stage directions — 'a long silence,' 'she does not move immediately' — but primarily in the rhythm of the dialogue: short, clipped exchanges accelerate; long speeches dilate. Pinter's pauses are stage directions for dilation: the silence expands what precedes it.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In CNF and memoir, pacing has an additional ethical dimension: the decision about how much space to give a moment is also a decision about how much that moment mattered. The memoirist who dilates a traumatic event — who spends twenty pages on what happened in an hour — is making an implicit claim about the event's centrality to the memoir's inquiry. The memoirist who compresses that same event into a sentence is making a different claim. Both can be right; both can be a form of avoidance. The discipline is honesty about which pacing choice is serving the material and which is serving the writer's comfort.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Anaphora & Epistrophe — The Power of Deliberate Repetition",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 32 of 60 — Anaphora & Epistrophe: Deliberate Repetition as Rhetoric",
          intro: [
            "Parallelism (Topic 31) aligns grammatically equivalent elements in equivalent forms to imply equivalence and completeness. Anaphora and epistrophe extend this principle into the repetition of specific words or phrases — not just grammatical form but the words themselves — to create rhetorical momentum through accumulation.",
            "Anaphora repeats at the beginning of successive clauses or sentences: Churchill's 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields' uses anaphora to create unstoppable forward motion — the 'we shall fight' arriving again and again until the series has exhausted every terrain and the speaker's determination feels absolute. Epistrophe repeats at the end: Lincoln's 'government of the people, by the people, for the people' uses epistrophe to make 'the people' the stable center around which governance orbits, arriving at the sentence's end three times until the concept has been fully inhabited.",
          ],
          rule: "Both figures are used sparingly and with purpose — once per essay or chapter, perhaps twice in an exceptional case. Their power depends entirely on being exceptional: if every paragraph begins with anaphora, the figure has become ambient noise rather than rhetorical emphasis. The question is always: is this the moment — the single moment in this piece — that deserves this kind of intensification? If yes, the figure can carry enormous weight. If the answer is that several moments deserve it, the answer is wrong: only one moment deserves it, and the craft discipline is identifying which one.",
          examples: [
            {
              label: "Anaphora — Baldwin, Notes of a Native Son",
              text: "'You were born where you were born and faced the future that you faced because you were black and for no other reason. The limits of your ambition were, thus, expected to be set forever. You were not expected to aspire to excellence: you were expected to make peace with mediocrity.' The 'you were' repetition creates accumulation and intimacy simultaneously — the reader is addressed and the accumulated conditions are laid before them one by one.",
            },
            {
              label: "Epistrophe — Lincoln, Gettysburg Address",
              text: "'...that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.' The 'the people' at the end of three successive prepositional phrases creates a stable resolution, the phrase arriving three times until it has been fully claimed.",
            },
            {
              label: "Anaphora in literary prose — not oratorical but lyric",
              text: "She had forgotten the smell of the house, forgotten the particular quality of its light in the afternoon, forgotten how it felt to sit in the kitchen at seven in the morning with nowhere to be. The 'forgotten' anaphora creates accumulation with a specific emotional quality: the list of what has been forgotten is the record of what was lost.",
            },
            {
              label: "What goes wrong — anaphora used too frequently",
              text: "If the next paragraph also begins its series with repeated opening words, and the paragraph after that, the figure has become a verbal tic rather than a rhetorical choice. The reader habituates to the repetition and it ceases to create emphasis. Reserve both figures for the moment they are truly needed, and use them once.",
            },
          ],
          outro: [
            "The relationship between anaphora and pacing is worth noting: the anaphoric series dilates time — it creates a sustained moment through accumulation, holding the reader inside a single emotional field while the series builds. Used at a moment of maximum significance, the anaphoric series creates dilation at the sentence level, the way scene creates dilation at the narrative level. The rhetorical figure is a micro-pacing tool as well as an ornamental one.",
            "Study examples from Baldwin, King, and McCarthy before writing your own. In each case: identify the single moment in the piece where the figure appears, understand what the figure does that non-repetitive prose could not, and ask whether your own piece has such a moment — a moment that deserves this intensity. If it does, the figure is available to you.",
          ],
          exercise:
            "Study one example of anaphora and one of epistrophe in published prose (use the examples above or find your own in the week's readings). For each: identify the grammatical form being repeated, describe what the repetition accumulates across the series, and explain why the figure appears at this moment in the piece rather than elsewhere. Then write one original anaphoric series of three to five clauses on any subject, and one original epistrophic series. For each: write one sentence identifying the moment in your current writing where this figure could appear and what it would accomplish there.",
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
              note: "Read the pacing chapter. Burroway's treatment gives the clearest account available of the scene/summary distinction and how the proportion of the two creates the narrative's basic rhythm. Read with the five pacing tools from the lecture in hand: which of the five does Burroway identify? What does her account add that the lecture's framework does not cover?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"Cathedral"',
              author: "Raymond Carver",
              href: "https://bookshop.org/p/books/cathedral-raymond-carver/6697453",
              note: "Purchase. Read with attention to pacing as control of revelation: Carver's story moves at a deliberately undramatic pace for most of its length, and the final scene — the drawing of the cathedral with a blind man guiding the narrator's hand — arrives with enormous force precisely because the pacing has created no expectation of it. Map the scene/summary distribution: how much of the story is scene? Where does Carver accelerate and where does he slow? The pacing is not accidental; it is the mechanism by which the story's central revelation is withheld and then released.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: '"A Clean, Well-Lighted Place"',
              author: "Ernest Hemingway",
              href: "https://bookshop.org/p/books/the-complete-short-stories-ernest-hemingway/6697453",
              note: "Widely available online and in most Hemingway collections. Read for maximum pace with maximum compression: the story contains almost no summary — it is almost entirely scene — and yet it covers an enormous emotional territory in very few words. The compression is not speed; it is precision. Every detail carries weight because nothing superfluous has been included. Ask: what would this story be if Hemingway had given it three times the space? What does the compression produce that expansion would eliminate?",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Pacing Contrast",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Maximum dilation (200 words): Choose a single second of action from any scene you are working on or can imagine — a door opening, a hand touching a surface, a word being spoken, a face turned away. Write 200 words for that single second. Use sensory fragmentation (individual details arriving in sequence, no detail given a full sentence), micro-observation of what the observing consciousness notices in the instant, and interior intrusion at the moment of maximum pressure. The 200 words should cover no more than one second of elapsed time.",
            "Part Two — Maximum compression (one sentence): Write the same moment in a single efficient sentence. Not a summary of the scene — the moment itself, reduced to its essential information without dilation.",
            "Part Three — The full pacing scene (700 words): Write a scene of 700 words that uses both dilation and compression at different points, moving between expanded and compressed time as the emotional stakes shift. The scene should contain at least one dilated passage (where time slows and the narrative attends very closely to a moment) and at least one compressed passage (where time accelerates and events are summarized). The shifts between dilation and compression should be justified by the emotional significance of each moment: the dilated moments are the ones the scene is building toward; the compressed moments are the transitions between them.",
          ],
          target: "200 words (dilation) + 1 sentence (compression) + 700 words (full scene) = 900+ words total",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 32 — The Pacing Map",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste any passage of approximately 1,000 words from your current work — ideally the scene written for this week's exercise, or a passage from your thesis project that you suspect has a pacing problem. Use the prompt below.",
          prompt:
            "Map the pacing of this passage. Identify: (1) where the prose accelerates — what creates the acceleration, and is the acceleration justified by the emotional content at that moment, or does it move quickly past something that deserves more space? (2) where the prose slows — what creates the slowdown, and is it productive (earned contemplation, necessary scene-setting, deliberate dilation at a moment of significance) or problematic (stagnation, unnecessary repetition, a moment being given more space than it deserves)? (3) the ratio of scene to summary in this passage — is the prose in scene or in summary at each point, and does that ratio serve the passage's emotional stakes? (4) three specific places where the pacing either serves the emotional content effectively or works against it — be specific about what the pacing does and what it should do instead. Do not rewrite any passage. Diagnose only.",
          questions: [
            "Which of the four points of the pacing map does the AI identify most precisely — where is its diagnosis most specific and most useful?",
            "Does the AI identify any place where the prose is moving quickly past something that deserves more space? If so, do you agree? What would dilation of that moment produce?",
            "Does the AI identify any place where the prose is giving more space than a moment deserves — where the slowdown is stagnation rather than earned contemplation? If so, what is the signal that distinguishes the two?",
            "After reading the pacing map: what is the characteristic pacing default of your prose — do you tend to expand or to compress? What does knowing your default tell you about where to focus your pacing revision?",
          ],
          note: "The pacing map is a diagnostic, not a prescription. The AI can identify where the prose moves quickly and where it slows, and it can assess whether those movements are or are not aligned with the emotional content at each point. But the right pacing decision always depends on the full context of the work — on what has come before and what will come after — which the AI can only partially assess from a 1,000-word excerpt. Use the diagnosis to locate the problem; use your own judgment, informed by the full manuscript, to solve it.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Chapter-End Test",
      blocks: [
        {
          type: "tip",
          icon: "⏱️",
          name: "Every Chapter Break Is a Place to Stop Reading",
          paragraphs: [
            "Every chapter break is a place where a reader can stop reading. The end of a chapter is the natural pause — the moment when a reader might reasonably set the book down, make a cup of tea, go to sleep. Strong chapter endings create a pull that makes stopping difficult: a question raised that requires an answer; an image that holds the reader's attention past the chapter break; a revelation that reframes what came before it and demands that the reader discover what happens next. Weak chapter endings deflate tension, summarize what has just occurred, or settle the reader into comfort — all of which give the reader permission to stop.",
            "Read the last three sentences of every chapter in your current draft. Apply three questions: Does the ending deflate tension — does it resolve or relax what the chapter built? Does it summarize what just happened, telling the reader what they already know? Does it settle into comfort, giving the reader a stable emotional resting point? If the answer to any of these is yes, the chapter ending is inviting the reader to stop. Revise: end on momentum, on an unanswered question, on an image that requires resolution, on a revelation that cannot be left where it is.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Too Fast and Too Slow",
      blocks: [
        {
          type: "journal",
          title: "Too Fast and Too Slow",
          question:
            "What in your life moves too slowly? What moves too fast? The thing that moves too slowly: it is something you have been inside for a long time, with no sense of when it will end or what its ending will look like — a relationship, a phase, an uncertainty, a waiting. The thing that moves too fast: it is something that happened and then was over before you understood it — an event, a period of time, a relationship that was finished before you were ready. How would you make either into a story? What is the pacing decision that would be most honest to each? Would the too-slow thing need dilation at its center, or would compression be the honest choice — rendering the long stasis in the space it deserves, which might be very little? Would the too-fast thing need scene, or would the speed itself be the subject, and the sentence that rushes past be the formal enactment of the experience?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Pacing is not only a craft question. It is a question about what deserves attention and how much of it. The writer who has thought about what in their own life moves too slowly and what moves too fast has already begun thinking about the pacing decisions their material requires — because the pacing of a narrative is partly an argument about the significance of what it contains, and that argument begins with the writer's own sense of what mattered and how long it took to matter.",
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
            "By the end of this week you should have: written the full pacing contrast exercise — 200 words of maximum dilation on a single second, one sentence of maximum compression, and a 700-word scene that moves between the two; read Carver's 'Cathedral' with attention to pacing as control of revelation and mapped its scene/summary distribution; read Hemingway's 'A Clean, Well-Lighted Place' for compression as precision rather than speed; read Burroway's pacing chapter; completed the AI pacing map and identified your characteristic pacing default; and written original anaphora and epistrophe series with analysis of where each could appear in your current writing.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 33",
          paragraphs: [
            "Week 33 is The Short Story and Its Special Laws. The short story is a distinct art form — not a truncated novel but a different species. It relies on implication over statement, compression, a single dominant effect, and the Chekhovian structural move of the 'gun' and the 'shot.' Week 33 is the last major craft topic before the final three weeks, which turn to revision strategy and the short story's current landscape.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The figurative language and pacing sequence — Weeks 30 through 32 — completes the spring semester's middle movement. What it has built, alongside the voice and syntax weeks that preceded it, is a complete micro-level craft vocabulary: the writer who has moved through these weeks has tools at every scale, from the choice of a single verb (Week 29's verb audit), through the sentence-level pacing decisions made by length variation and the anaphoric series, through the scene-level decisions of dilation and compression, through the chapter-level decisions of section breaks and chapter endings. The craft vocabulary is complete. The final weeks apply it to the specific demands of the short story form and to the revision process that turns first drafts into finished work.",
          ],
        },
      ],
    },
  ],
};
