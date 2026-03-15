import type { WeekData } from "@/lib/mfa/types";

export const week25Data: WeekData = {
  weekNumber: 25,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Plot & Structure II — Freytag's Pyramid & Its Discontents",
  emphasizedWord: "Freytag's Pyramid & Its Discontents",
  deck: "Freytag's Pyramid describes the arc of traditional dramatic narrative. It remains the most useful analytical vocabulary available. But contemporary literary fiction has complicated, subverted, and occasionally abandoned it — not as a failure of craft, but as a more honest account of how experience actually moves.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Structure & the Alternatives" },
    { label: "Grammar", value: "The One-Sentence Paragraph" },
    { label: "Exercise", value: "900–1,100 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Map and the Territory",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1CjkrMqo6XUoNEettNR2436hixwqUoCEV/preview" },
        {
          type: "paragraph",
          content: [
            "Gustav Freytag published his structural analysis in 1863, and the pyramid he drew — exposition rising through conflict to climax, then falling through falling action to dénouement — has been reproduced in every introductory craft textbook since. It is the first structural model most writers encounter, and for good reason: it is accurate about a large body of traditional dramatic narrative. The five-act plays it was designed to describe — Sophocles, Shakespeare, Schiller — do move this way, and so do many contemporary genre novels, Hollywood films, and television procedurals. Freytag gave us the vocabulary for a real structural phenomenon.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The problem is not that Freytag is wrong. The problem is that writers who have internalized the pyramid as a prescriptive model — who feel that their story is failing when it does not rise and fall in the expected arc — are unconsciously measuring their work against a model designed for a different century's literature and a different culture's dramatic conventions. Contemporary literary fiction does not typically organize itself around a single climax toward which everything rises. It organizes itself around ",
            { text: "pattern, image, emotional accumulation, and the gradual revelation of what the story has always been about.", emphasized: true },
            " The ending that does not resolve, the narrative that spirals rather than climbs, the story whose 'climax' is an interior recognition rather than an external event — these are not structural failures. They are the structural choices of a form that has grown more honest about the shape of actual experience.",
          ],
        },
        {
          type: "pullquote",
          quote: "The story that knows what it means before it ends has settled for less than what fiction can do. The ending that feels inevitable and surprising simultaneously — that is the ending that earns its place.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Alternatives Worth Knowing",
          paragraphs: [
            "The double-act structure: two connected narrative units, each with its own internal arc, whose relationship creates the story's full meaning. Alice Munro builds many of her stories this way — a long first section establishes a world and a character; a shorter second section, often set years later, recontextualizes everything the first section meant. Neither section is subordinate to the other. The meaning lives in the gap between them.",
            "The spiral narrative: the story returns repeatedly to the same moment, image, or emotional situation, each time with accumulated context that changes what it means. Marilynne Robinson's Housekeeping is structured as a spiral — the lake, the father's death, the flooding house — returning to its images with deepening meaning rather than rising toward a climax and resolving.",
            "The tonal arc: the story's forward motion is not driven by plot events but by a progression of emotional register — from one tonal state to another, from distance to intimacy, from irony to grief, from chaos to stillness. Many lyric short stories and personal essays are organized this way. What arrives at the end is not a plot resolution but a tonal one: the prose has arrived somewhere emotionally that the opening prose could not have reached.",
            "The ending-that-isn't-an-ending: the narrative stops rather than resolves, leaving the story's central conflict open and the reader in a condition of productive irresolution. This is one of the defining features of literary short fiction — the Chekhovian non-ending, the story that closes on an image or a gesture rather than a revelation. The 'resolution' is the reader's recognition of the irresolution's meaning: this is what it is to be in this situation, and there is no exit.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Madison Smartt Bell's concept of 'narrative design' is the most useful contemporary framework for thinking about structure beyond Freytag. Bell argues that every successful narrative has a governing formal principle — the rule by which it is organized — and that the writer's task is to find the principle that is native to their material, not to impose a borrowed template. For some stories, that principle is chronological causation (this happened, and therefore that). For others it is spatial (we move through a landscape), or imagistic (we return to a set of images), or tonal, or interrogative (the story is organized as a series of questions that are gradually deepened rather than answered). The question is always: what organizing principle does this particular material demand?",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Structure Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's freedom from Freytag is its specific structural privilege — and its specific structural danger. The freedom to organize by image, tonal arc, or spiral rather than by causation means the writer must find their story's governing principle from the inside, without the scaffold that traditional structure provides. The danger is formlessness disguised as experimentation: a narrative that does not rise and fall according to Freytag must do something else with equal rigor. The alternative structure must be as precise and purposeful as the traditional one. 'I didn't follow the pyramid' is not a structural argument; 'I organized by the spiral return to a central image, and each return changes what the image means' is.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting operates under the most explicitly Freytag-derived structural model in any narrative form: Syd Field's three-act paradigm, the Save the Cat beat sheet, McKee's story principles. These models are not identical to Freytag, but they all describe a narrative that rises to a climax and resolves. The commercial pressure toward this structure in studio filmmaking is real and significant. But art-house cinema, prestige television, and international film traditions regularly depart from it — and the screenwriter who understands Freytag well enough to know exactly where and why they are departing from it is in a fundamentally different position from the one who simply ignores it. Know the model; then decide where your material requires you to break it.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Memoir's relationship to Freytag is ethically as well as formally complicated: the events being narrated actually happened, and they did not happen in the shape of a pyramid. Life does not escalate cleanly toward a climax. The memoirist who imposes the Freytag arc onto their material is imposing a retrospective coherence that falsifies the experience. The memoirist's structural challenge is to find the organizing principle that is honest — that respects the actual shape of the experience while giving the reader a structure legible enough to follow. The double-act structure (before and after), the spiral (returning to the central wound), and the tonal arc (moving from incomprehension toward partial understanding) are all more natural to memoir than the pyramid.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The One-Sentence Paragraph",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 25 of 60 — The One-Sentence Paragraph",
          intro: [
            "Last week's topic established the short sentence as a power tool — the sentence of seven words or fewer that lands with disproportionate force after a longer build. This week extends that principle to the paragraph level. A paragraph containing a single sentence — especially a short one — stops the reader entirely. It creates white space on the page, which is visual emphasis. It says: pay attention here. This is the thing.",
            "The one-sentence paragraph is the paragraph-level version of the short sentence's power, and it operates on the same mechanism: contrast. Embedded in a longer paragraph, a sentence has neighbors — the sentence before, the sentence after — and those neighbors absorb some of its impact. Set alone as its own paragraph, the same sentence is isolated, surrounded by white space, given the full attention of the reader's eye before they move on. The white space is not empty; it is the pause that makes the sentence land.",
          ],
          rule: "The one-sentence paragraph should be used sparingly — two or three times in a piece, not ten. Its power depends entirely on the surrounding paragraphs being multi-sentence; it lands because it is different from everything around it. Used too frequently, it becomes a tic, and its force dissipates. Reserved for the moments of maximum weight — the sentence the entire preceding passage has been building toward, the revelation, the pivot, the moment of irresolvable recognition — it is one of the most powerful punctuation devices available at the paragraph level.",
          examples: [
            {
              label: "One-sentence paragraph as pivot — the moment everything changes",
              text: "She had driven the same road for twenty years, past the same fields and the same faded signs, and she had never once thought about what she was driving away from rather than toward. That afternoon she thought about nothing else.\n\nShe turned around.",
            },
            {
              label: "One-sentence paragraph as ironic counterpoint",
              text: "He had prepared everything: the speech, the ring, the restaurant reservation, the story he would tell their children someday about how he had done this perfectly, had thought of everything, had left nothing to chance.\n\nShe said no.",
            },
            {
              label: "One-sentence paragraph as tonal arrival — prose coming to stillness",
              text: "The argument had lasted three hours. It had covered seventeen years of accumulated grievances, had revisited decisions and silences and failures of attention that neither of them had known the other remembered. At the end of it, they had said everything.\n\nThey had nothing left.",
            },
            {
              label: "What goes wrong when it is overused",
              text: "Scanning a page and finding one-sentence paragraphs every three or four lines — each one arriving with the same typographic emphasis — produces the opposite of impact. The reader's eye normalizes the isolation; the white space becomes ambient rather than emphatic; the sentences lose their force. Reserve it. Make it earn its separateness.",
            },
          ],
          outro: [
            "The one-sentence paragraph is also the writer's most useful tool for structural emphasis at the macro level. The sentence that opens a new section of a novel, standing alone before the first paragraph of that section, creates a transition and a tonal announcement simultaneously. The sentence that closes a chapter, isolated below the chapter's final paragraph, creates an ending that is also a beginning — it lingers in the white space before the chapter break, holding its meaning a moment longer than any embedded sentence could.",
            "Audit your current drafts for places where a sentence is fighting its paragraph for attention — where the surrounding sentences are diluting a moment that deserves isolation. Extract those sentences. Give them their own paragraph. See if the white space reveals what you already knew was there.",
          ],
          exercise:
            "Find three places in any of your drafts from this semester where a one-sentence paragraph would create better emphasis than the current embedding. Extract each sentence, set it alone, and read the surrounding passage aloud before and after. For each: write one sentence identifying what the white space reveals that the embedded version concealed. Then write an original passage of 200 words that uses exactly two one-sentence paragraphs, each placed at a moment of structural or emotional weight.",
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
              title: "Narrative Design",
              author: "Madison Smartt Bell",
              href: "https://bookshop.org/p/books/narrative-design-a-writer-s-guide-to-structure-madison-smartt-bell/6697453",
              note: "Read Chapter 1. Bell's concept of 'narrative design' — the formal principle native to a specific story rather than borrowed from a template — is the most useful contemporary alternative to Freytag-based structural thinking. Bell distinguishes between 'linear' and 'modular' narrative designs and argues that each requires different analytical tools and different writerly decisions. Read with your thesis project in mind: what is the governing formal principle of your project? Is it chronological causation, spatial organization, imagistic return, tonal progression, or something else entirely?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Lives of Girls and Women",
              author: "Alice Munro",
              href: "https://bookshop.org/p/books/lives-of-girls-and-women-alice-munro/6697453",
              note: "Purchase. Read the opening story or chapter — Munro's alternative to linear plot is one of the clearest examples available of the double-act structure and the non-resolving ending. Munro does not build toward climaxes; she builds toward recognitions — moments when the narrator understands something she could not have understood earlier — and those recognitions do not resolve the conflicts they illuminate. Notice where the story's traditional 'climax' would be, and what Munro does instead at that moment.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Moonlight screenplay",
              author: "Barry Jenkins",
              href: "https://deadline.com/wp-content/uploads/2017/02/moonlight.pdf",
              note: "Free online. Study the screenplay's three-act structure — but notice that the three acts are not organized by traditional causation. Each act covers a different period of Chiron's life; the connections between them are not plot connections but thematic and imagistic ones. Where is Freytag's climax in Moonlight? Is there one? What does Jenkins use instead? This screenplay is one of the most formally instructive examples of a narrative that uses the three-act scaffold while filling it with a completely non-traditional structural principle.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Reverse Engineering",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Structural map (200 words): Choose a short story or screenplay you have read this semester that you admire. Map its structural arc in exactly ten bullet points — ten moments, beats, or movements, in order, that describe the story's architecture. Not plot summary: structural function. What does each moment do in the story's overall design? What does it set up, complicate, reveal, or transform? The ten-point map should make the story's governing formal principle visible.",
            "Part Two — Borrowed pattern (700–900 words): Write a scene that borrows the structural pattern of the story you mapped — not its content, not its characters, not its setting or subject, but its governing formal principle applied to your own material. If the story you mapped uses the double-act structure, write a scene with two connected units whose meaning lives in the gap between them. If it uses tonal arc, write a scene whose forward motion is a progression of emotional register. If it uses imagistic return, identify your central image and return to it with deepening context. The borrowed pattern should be recognizable in your scene; the content should be entirely your own.",
            "Part Three — Structural analysis (200 words): After writing the scene, describe the structural pattern you borrowed, how you applied it, what it made possible that your default structure would not have, and what it cost.",
          ],
          target: "900–1,100 words (map + scene + analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 25 — The Freytag Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit a story or screenplay outline you are developing — your thesis project outline, or the conflict arc you designed in Week 24. Describe it in 200–300 words: the characters, the central conflict, the sequence of events, and your intended ending. Use the prompt below.",
          prompt:
            "I am going to describe the outline of a story or screenplay I am developing. Analyze its structure against Freytag's Pyramid — exposition, rising action, climax, falling action, dénouement. Answer these questions: (1) Where does my outline align with Freytag's model, and where does it deviate? (2) For each deviation: is it likely intentional and effective — a structural choice that serves the material — or does it seem accidental and potentially problematic, a structural gap that might leave the reader without the narrative momentum they need? (3) Suggest one structural change — either toward Freytag or deliberately further away from it — that would make the arc both less predictable and more emotionally satisfying. Here is my outline: [describe your outline].",
          questions: [
            "Does the AI identify deviations from Freytag that you intended as deviations? If so, does its analysis of whether they are effective or accidental align with your own judgment?",
            "Which deviation does the AI flag as potentially problematic? Do you agree? What would closing that structural gap require?",
            "What is the AI's suggested structural change? Is it a move toward traditional arc or away from it — and which direction feels right for this material?",
            "After the Freytag audit: what is the governing formal principle of your project? Can you name it in one sentence? If not, that is the structural question to hold going into Week 26.",
          ],
          note: "The goal of this exercise is not to make your project more Freytag-shaped — it is to make your relationship to Freytag conscious. A project that deliberately departs from the pyramid in specific, purposeful ways is in a fundamentally different structural position from a project that simply hasn't thought about the pyramid. After this audit, you should know exactly where your project aligns with traditional dramatic structure, exactly where it departs, and exactly why each departure is either intentional or something to address.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Ending Test",
      blocks: [
        {
          type: "tip",
          icon: "🔚",
          name: "Inevitable and Surprising Simultaneously",
          paragraphs: [
            "Go to the last scene of your longest current draft. Ask a single question: does this ending feel inevitable and surprising simultaneously? Both qualities must be present for an ending to fully satisfy. Inevitable means: in retrospect, we could not have imagined it otherwise — the ending has been earned by everything that preceded it, and a careful re-reader would find it prepared throughout. Surprising means: we did not see it coming — the ending arrives with some quality of the unexpected, even if, looking back, it was always there.",
            "An ending that is only inevitable is predictable: the reader saw it coming and was not moved. An ending that is only surprising is arbitrary: the reader did not see it coming because nothing prepared it, and the surprise feels like a trick. The craft challenge is to construct an ending that feels both earned and unexpected — that surprises the reader in the moment of arrival and then, immediately, feels like the only ending the story could have had. If your current ending has one quality without the other, you know which direction to revise.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Story You Still Don't Understand",
      blocks: [
        {
          type: "journal",
          title: "The Story You Still Don't Understand",
          question:
            "What story from your own life do you still not understand how it ends? Not a story that ended badly — a story whose ending you cannot interpret, whose meaning remains opaque even though the events are finished. Is it still in progress, and the meaning will only become visible from a later vantage point? Or is it finished but unreadable — you can see what happened, you can describe the sequence of events, but you cannot yet say what it means or what shape it has? If you were to map this story against Freytag's Pyramid, where would the climax be — and does identifying the climax help you understand the story, or does the pyramid not fit it at all? What would fit?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The stories from your life that resist interpretation are often the most useful raw material — not because you will write them directly, but because the resistance tells you something about where the conventional structural models break down for this kind of experience. The shape a story needs is often most visible when the familiar shapes don't fit.",
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
            "By the end of this week you should have: mapped the structural arc of a published story or screenplay in ten bullet points; written a scene that borrows that arc's governing formal principle and applied it to your own material; completed a Freytag audit of your own project's outline and named the governing formal principle of your project in one sentence; read Bell's Chapter 1 for the vocabulary of narrative design; and found three places in your current drafts where a one-sentence paragraph would create better emphasis than embedding.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 26",
          paragraphs: [
            "Week 26 is Patterns of Power and Alternative Architectures — the full vocabulary of structural alternatives beyond Freytag: braided narrative, frame narrative, reverse chronology, episodic structure, spiral, and modular organization. You will write a non-chronological narrative in which the order of revelation earns its disruption of chronology, and you will use the AI to design five genuinely different structural architectures for your own project.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Freytag's Pyramid is not the enemy of good structure — it is the baseline against which all structural decisions become legible. A writer who has never internalized the pyramid cannot meaningfully depart from it; their departures are accidents, not choices. A writer who has internalized it and then consciously decided where their material requires something different is making a structural argument. The argument may be: this material is too honest about irresolution to pretend to a climax. Or: this material organizes by image, not by causation. Or: this material requires two acts whose relationship creates meaning that neither contains alone. All of those are valid structural arguments. But they are only arguments — and not accidents — if you know the pyramid well enough to know exactly where you are departing from it.",
          ],
        },
      ],
    },
  ],
};
