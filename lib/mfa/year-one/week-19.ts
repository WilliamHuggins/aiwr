import type { WeekData } from "@/lib/mfa/types";

export const week19Data: WeekData = {
  weekNumber: 19,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Point of View I — First Person",
  emphasizedWord: "First Person",
  deck: "Point of view is one of the most consequential decisions a writer makes — and in early drafts, one of the most neglected. First-person narration promises intimacy. Its risk is claustrophobia. The reader is trapped inside one mind, with all its distortions and limitations. First-person narrators are always, to some degree, unreliable.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "First-Person POV" },
    { label: "Grammar", value: "Phase 2: The Cumulative Sentence" },
    { label: "Exercise", value: "900–1,100 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Intimate Prison",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Welcome to the spring semester. Before the craft work begins: take twenty minutes and write — in your journal, on paper, anywhere — a brief spring plan. What story do you most need to tell this year? What scares you about telling it? What craft skills do you most need to develop to tell it well? What will you produce by the end of this semester? Name it. The plan is for you, not for anyone else. Keep it somewhere you can return to when the work gets hard.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Point of view is the lens through which all story is filtered. It is not a pronoun choice — it is an epistemological decision: who knows what, and how do they know it, and what are the specific limitations and distortions that follow from that knowing? The POV decision shapes every sentence of a narrative. It determines what can be described, what must be implied, what can be stated directly and what must be discovered through behavior. A narrative in the wrong point of view is not merely stylistically off — it is structurally off, because the information structure of the story is wrong from the first word.",
          ],
        },
        {
          type: "pullquote",
          quote: "The first-person narrator is always, to some degree, unreliable — not because they lie, but because every consciousness has its specific distortions, its blind spots, its motivated misreadings.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "First-person narration — the 'I' — promises two things simultaneously: intimacy and authenticity. The reader is inside a specific consciousness, hearing a specific voice, receiving the world as a particular person receives it. This intimacy is the form's primary power. Its primary risk is claustrophobia: the reader is confined to one mind, with no access to what is outside that mind's range of perception, its range of comprehension, its emotional capacity at any given moment. The first-person narrator cannot know what they cannot know. That limitation is not a deficiency to be worked around — ",
            { text: "it is the form's engine.", emphasized: true },
            " What the narrator cannot see or will not see is where the story's deepest drama lives.",
          ],
        },
        {
          type: "card",
          title: "The Two Modes of First Person",
          paragraphs: [
            "First-person immediate (present tense): the narrator is inside the experience as it happens, with no retrospective knowledge. The tension is genuine — the narrator does not know how the story ends. The risk is that the narrator's vocabulary, emotional range, and comprehension capacity must be entirely consistent with who they are in the moment of the scene. They cannot understand things they would not yet understand.",
            "First-person retrospective (past tense, looking back): the narrator tells a story that has already happened. This narrator has knowledge the past-self did not — they know what came next, what mattered, what they were wrong about. The craft challenge is managing the gap between what the past-self knew and what the present narrator knows. Too much retrospective wisdom closes the gap and kills the tension. Too little produces a narrating self who seems to have learned nothing from the experience — which raises its own questions.",
            "The choice between these two modes is not merely technical. It is a claim about the relationship between experience and understanding — about whether the self who lived through events and the self who narrates them are the same person, and what it means if they are not.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The first-person narrator's unreliability is not always intentional on the narrator's part. Most unreliable narrators in literary fiction are not liars — they are people whose psychology, self-interest, or emotional capacity limits what they can see. Holden Caulfield in ",
            { text: "The Catcher in the Rye", emphasized: true },
            " does not know he is unreliable; he believes he is one of the few people who see clearly. Mary Karr's narrating self in ",
            { text: "The Liar's Club", emphasized: true },
            " knows her childhood self was not always able to understand what was happening — but she is candid about that limitation, using it as a structural resource rather than concealing it. The writer's task is to understand the specific shape of their first-person narrator's unreliability — what they see clearly, what they see wrong, and what they cannot see at all — and to deploy that shape as the story's information structure.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "First Person Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the choice between immediate and retrospective first person is the fundamental structural decision of the form. The immediate narrator creates present-tense tension but constrains what the narrator can understand. The retrospective narrator can shape the story with the wisdom of hindsight but must manage the gap between past-self and present-narrator carefully — too much retrospective understanding and the past-self's experience loses its immediacy. Great first-person literary fiction holds both simultaneously: the reader feels the past-self's uncertainty while sensing that the narrating self, looking back, is in possession of a harder knowledge.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "First person is used sparingly in screenwriting, almost exclusively via voice-over — an 'I' narrating from outside the frame of the scene. When it works, it is exceptional: Sunset Boulevard's dead narrator, Fleabag's direct address, Election's competing unreliable narrators. When it fails, it is because voice-over is being used to explain what the visuals should be showing — to tell the audience what they are seeing rather than trusting the visual story. The screenwriter who reaches for voice-over should always ask: is this adding something the image cannot add, or is it substituting explanation for dramatization?",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "First person is the default in memoir — but the question for the memoirist is not whether to use 'I' but what kind of 'I.' Vivian Gornick's distinction between the narrator and the memoirist is the definitive formulation: the narrator is the 'I' inside the experience, the character in the story; the memoirist is the writer looking back, the intelligence that shapes the story. Both must be present in the best memoir, working in tandem. The memoir that is only the experiencing 'I' has no perspective; the memoir that is only the narrating 'I' has no immediacy. The gap between them — between then and now, between what the narrator felt and what the memoirist understands — is the memoir's generative space.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 2: The Cumulative Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 19 of 60 — The Cumulative Sentence: Three Patterns",
          intro: [
            "Phase 2 of the grammar curriculum begins. Francis Christensen identified the cumulative sentence — the base clause extended by free modifiers — as the characteristic sentence of contemporary literary prose. This week formally introduces Christensen's three cumulative patterns, which you previewed in Week 16. These three patterns are not interchangeable: each creates a different relationship between the base clause and what follows it, and therefore a different experience of the information being added.",
            "A free modifier is a phrase or clause that could be detached from the sentence without destroying its grammatical structure: a participial phrase ('running her fingers along the wall'), an absolute phrase ('her hands trembling'), an appositive ('a woman who had stopped trusting arrivals'). Free modifiers can stack in three distinct relationships to what precedes them.",
          ],
          rule: "The cumulative sentence extends a base clause with free modifiers in one of three patterns: coordinate (each modifier at the same level as the others, each adding parallel information to the base clause), subordinate (each modifier adding detail to the preceding modifier rather than to the base clause, drilling deeper), or mixed (combining both patterns in a single sentence). The pattern chosen determines the texture of the attention the sentence enacts.",
          examples: [
            {
              label: "Coordinate free modifiers — each modifies the base clause equally",
              text: "She ran, her coat open, her breath loud in the empty street, her feet finding the familiar cracks in the pavement.",
            },
            {
              label: "Subordinate free modifiers — each drills into the previous element",
              text: "She ran, her coat open, the cold air reaching her skin, the cold finding every place she had not thought to cover.",
            },
            {
              label: "Mixed — coordinate then subordinate",
              text: "She ran, her coat open, the cold finding every place she had not thought to cover, her breath coming in shallow pulls, each one smaller than the last.",
            },
            {
              label: "What the pattern difference enacts",
              text: "Coordinate modifiers give breadth: we see several simultaneous aspects of the same moment. Subordinate modifiers give depth: we follow one thread of perception into increasing specificity. Mixed patterns create the texture of actual consciousness, which does both at once — attending to multiple things and then following one thing inward.",
            },
          ],
          outro: [
            "Christensen's insight was that the cumulative sentence is not merely a grammatical form — it is a phenomenological one. It enacts the way consciousness actually works when attending to a moment: the base clause registers the event; the free modifiers are the perception elaborating, noticing, following. The coordinate pattern mimics the scanning attention. The subordinate pattern mimics the focused attention. The mixed pattern mimics the full attentional experience.",
            "This semester, every week's grammar topic will build on the cumulative sentence or introduce a new Phase 2 form (the periodic sentence, the balanced sentence, the serial construction, the power sentence). By Week 36 you will have a complete Phase 2 architecture available. Phase 2 is the tool kit for the prose you now know how to plan.",
          ],
          exercise:
            "Write ten cumulative sentences: three using only coordinate free modifiers, three using only subordinate free modifiers, four using mixed patterns. For the coordinate sentences, aim for at least three modifiers each; for the subordinate sentences, follow each thread at least two levels deep. After writing all ten, choose the one that feels most genuinely alive — where the accumulation of modifiers adds something real rather than merely more — and write one sentence identifying why that sentence works when the others are more mechanical.",
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
              note: "Read the point of view chapter in full. Burroway's treatment of POV is the most systematic available in any craft textbook, and her analysis of what each mode enables and forecloses is the framework the spring semester's POV sequence builds from. Read with your thesis opening from Week 18 in hand: which POV does your project require, and is that the POV you used?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Catcher in the Rye, Chapter 1",
              author: "J. D. Salinger",
              href: "https://bookshop.org/p/books/the-catcher-in-the-rye-j-d-salinger/6697453",
              note: "Read Chapter 1 only — Holden's opening monologue. This is the most famous first-person voice in American fiction, and it establishes its complete world, its complete unreliability, and its complete tonal register in approximately 1,500 words. Read not for story but for the mechanics of voice: what specific vocabulary choices, sentence rhythms, and self-presentations mark this as an immediately recognizable and deeply unreliable narrator?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Liar's Club, Chapter 1",
              author: "Mary Karr",
              href: "https://bookshop.org/p/books/the-liar-s-club-a-memoir-mary-karr/6697453",
              note: "Read Chapter 1 only. This is one of the great retrospective first-person memoir openings — the adult narrator looking back at a childhood self who could not understand what was happening, and being honest about that incomprehension rather than retrofitting adult understanding onto the child's experience. Notice how Karr manages the gap between past-self and narrating-self: where does retrospective wisdom enter, and where does she hold it back? That management is the technical core of retrospective first-person memoir.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Immediate and Retrospective",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the same scene twice using first-person narration. The scene: your narrator is in a place that matters to them, in the presence of another person, and something small but significant happens. Use something specific from your own experience or your thesis project's world.",
            "Version 1 — First-Person Immediate (present tense, 400–500 words): The narrator is inside the experience as it happens. They do not know what will happen next. Their understanding of the other person and the situation is limited to what they can perceive and comprehend in the moment. Do not give the narrator any information or wisdom they could not plausibly have right now, in this scene.",
            "Version 2 — First-Person Retrospective (past tense, 400–500 words): The narrator looks back at this same scene from a later vantage point. They now know something about the other person, themselves, or the situation that they did not know in the moment. They can shape the scene with retrospective understanding. But — do not over-explain. The retrospective narrator should use their additional knowledge to select and frame, not to annotate.",
            "After both versions: write one paragraph (100–150 words) analyzing how the 'I' in each version knows different things and therefore tells a different story. Where does the immediate version have something the retrospective cannot? Where does the retrospective narrator see something the immediate narrator missed?",
          ],
          target: "900–1,100 words (both versions plus analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 19 — The Retrospective Knowledge Check",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your first-person retrospective version — the past-tense scene with the looking-back narrator. Use the prompt below. The AI will identify where the retrospective narrator is doing genuine work and where they are simply adding explanation.",
          prompt:
            "Read this first-person retrospective scene carefully. The narrator is looking back at a past event. Answer these questions: (1) Identify three specific moments where the retrospective narrator appears to know something the past-self did not know in the moment — where retrospective wisdom or later knowledge enters the prose. Quote those moments exactly. (2) For each: is this retrospective knowledge earned — does it feel like wisdom the narrator genuinely gained, or does it feel like the author imposing understanding on a character who did not yet have it? (3) Where in the scene could the retrospective narrator's additional understanding be made more subtly present — implied rather than stated? (4) Where, if anywhere, is the gap between past-self and present-narrator lost — where does the narrator seem to have no more knowledge than the past-self, missing the opportunity the retrospective mode offers?",
          questions: [
            "Which of the three moments the AI identifies as carrying retrospective knowledge feels most earned to you?",
            "Is there a moment the AI flags as 'author imposing' rather than 'narrator knowing' that you disagree with? Why?",
            "Where does the AI suggest making retrospective understanding more subtle? Do you agree that the explicit version is weaker?",
            "After reading the AI's analysis: does your retrospective version make full use of the mode, or does it read like an immediate scene that happens to be in past tense?",
          ],
          note: "The retrospective first-person is only fully itself when the gap between then and now is actively present in the prose — not as stated commentary ('I know now what I didn't know then') but as a quality of selection, of what the narrator chooses to describe and what they allow to remain in shadow. The narrator's choice of detail is always retrospective; the question is whether that retrospection is conscious and controlled.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: '"I" Fatigue',
      blocks: [
        {
          type: "tip",
          icon: "👁",
          name: "The Sentence That Doesn't Start With 'I'",
          paragraphs: [
            "First-person writing often begins too many sentences with 'I.' This creates a monotony that is, paradoxically, the enemy of the very intimacy first-person narration is supposed to create: the reader stops hearing the individual and starts registering the pronoun. Audit your first-person writing for 'I' as a sentence opener. Run a search. Count. If more than a third of your sentences begin with 'I,' revise for variety.",
            "The fix is not avoidance — it is Phase 1. Begin sentences with actions ('Crossing the room, I picked up the letter'), with objects ('The letter was still on the table'), with dependent clauses ('Because she'd asked me not to, I waited'), with absolute phrases ('My hands shaking, I finally opened it'). Let the 'I' emerge from the scene rather than announcing itself at every sentence's start. The most present first-person narrators are often the ones least visible as a pronoun — absorbed into the world they are rendering rather than standing before it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Who Is Your 'I'",
      blocks: [
        {
          type: "journal",
          title: "Who Is Your 'I'",
          question:
            "Who is your narrative self — the person who tells your stories? How is that person different from who you are in daily life? Does your narrative self take more risks than your social self, or fewer? Is your narrative 'I' more or less honest than the person you are in conversation? What does your narrative self protect, and what is it willing to expose? And — when you write in the third person, who does the narrator remind you of? Is the third-person narrator another version of the 'I,' or someone genuinely different?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The spring semester's POV sequence — first person this week, third-person limited next week, second person and omniscient the week after — is in part an inquiry into this question. Which POV calls forward the writing you most need to do? Where do you find the angle of approach that makes the material available? The answer is not the same for everyone and not the same for every project. But knowing your default — and knowing why it is your default — is the beginning of making it a choice.",
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
            "By the end of this week, you should have: written the same scene in both first-person immediate and first-person retrospective and analyzed the difference in what each mode can know; written ten cumulative sentences across all three Christensen patterns; read the Salinger and Karr chapters as studies in how two radically different first-person voices manage their narrators' unreliability and retrospective knowledge; and used the AI retrospective knowledge check to confirm whether your looking-back narrator is making full use of the distance the mode offers.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 20",
          paragraphs: [
            "Week 20 moves to third-person limited — the dominant mode of contemporary literary fiction. If first person is the intimate prison, third-person limited is the next cell over: still one consciousness, but with an external narrator who can offer small calibrations of distance unavailable to the first-person 'I.' You will take your Week 19 first-person scene and rewrite it in third-person limited, then again at a significantly greater psychic distance — and the comparison will be the week's primary learning.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The spring semester is the semester of application: everything from the fall is now in service of the writing you declared in Week 18. The POV sequence will teach you to see your thesis project's angle of approach. The cumulative sentence sequence will give you the architectural tools to build sentences that hold the full weight of what you see. Begin.",
          ],
        },
      ],
    },
  ],
};
