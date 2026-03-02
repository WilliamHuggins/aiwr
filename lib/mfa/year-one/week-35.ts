import type { WeekData } from "@/lib/mfa/types";

export const week35Data: WeekData = {
  weekNumber: 35,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Spring Portfolio Review — The Emerging Manuscript",
  emphasizedWord: "The Emerging Manuscript",
  deck: "This is the second major portfolio review of the year. The task this week is not to produce more writing — it is to look at what you have and begin to see a manuscript emerging. Which pieces belong together? What themes, images, and concerns recur? What is your work beginning to be about? This is the beginning of thesis thinking, eighteen months before the thesis is due.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Portfolio Curation" },
    { label: "Grammar", value: "Free Indirect Discourse" },
    { label: "Exercise", value: "2,500 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Seeing the Manuscript in the Work",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The portfolio review at Week 35 is a different kind of task from any exercise this year has asked you to do. Every other exercise this year has been generative: produce a scene, write a metaphor, draft a flash story, render a voice. This week the task is retrospective and curatorial: you have thirty-five weeks of writing behind you, and the work this week is to look at that writing not as individual exercises but as a body of work — to read it with the question of what it is becoming, what patterns are visible in it that were not visible from inside any single piece.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Writers in MFA programs typically spend the first year generating material without fully understanding what they are generating — and then, somewhere in the spring of Year One or the fall of Year Two, something clarifies. They look at the accumulated work and recognize a preoccupation, a recurring image, a question that keeps returning in different forms, a set of formal concerns that keep asserting themselves. That recognition is the beginning of thesis thinking. It does not produce the thesis immediately — the thesis is still eighteen months away — but it produces the understanding of what direction to face, which is the prerequisite for all the work that follows.",
          ],
        },
        {
          type: "pullquote",
          quote: "Writers return to certain images, objects, and scenes without knowing why. That recurrence is not accident — it is your unconscious telling you something. Investigate it.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "What to Look For in the Portfolio Review",
          paragraphs: [
            "Recurring images and objects: scan across the year's writing for any image, object, or physical detail that appears in more than one piece. Not images you chose consciously as symbols — images that turned up on their own, that you used without planning to, that appear in pieces written months apart. The recurring image is one of the most reliable signals of a writer's preoccupation. It is appearing because your imagination finds it useful, finds it saturated with meaning, keeps reaching for it. What is the image? What does it hold?",
            "Recurring emotional terrain: what emotional situations do you keep writing toward? Not subjects — the subject of grief is less specific than the emotional situation of the person who keeps expecting the grief to have ended by now. Not themes — the theme of family is less specific than the emotional situation of the adult who still does not know how to be in the room with their parents. The recurring emotional terrain is the material your imagination genuinely knows. It is not a limitation; it is the specific territory that your writing has been mapping all year.",
            "Recurring formal concerns: what forms have you been drawn to? Have you written repeatedly in a particular point of view, a particular structure, a particular relationship between scene and summary? The formal concerns are as revealing as the imagistic and emotional ones — they suggest the shape your material is asking to take, the formal argument it wants to make.",
            "The piece that surprised you: somewhere in the year's work there is a piece that surprised you when you read it back — that went somewhere you hadn't planned, that said something you didn't know you knew, that felt more fully inhabited than the pieces around it. That piece is the most useful single datum in the portfolio review. What did it do that the others didn't? What does it tell you about what your writing sounds like when it is most fully itself?",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The 500-word artist's statement — the companion to this week's curated portfolio — is not a description of what you have written. It is a first attempt to say what the work is about: not its subjects, but its inquiry. What question does the accumulated work seem to be asking? What territory does it keep returning to, and what does that returning suggest about what you are trying to understand? The artist's statement is genuinely difficult to write at this stage — you are trying to articulate something that is still forming — and the difficulty is productive. The statement you write this week will be wrong in specific ways that the thesis you write in Year Two will correct. Writing it now gives you something to be wrong about.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Portfolio Thinking Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For literary fiction writers, the portfolio review often reveals whether the year's work is pointing toward short stories or a novel — or a linked collection that is neither quite one nor the other. The recurring preoccupation, the recurring character type, the recurring emotional situation: these are the data that answer the form question. A writer whose year's work keeps returning to the same emotional terrain from different angles may be discovering that they are writing a linked story collection. A writer whose longest pieces feel most fully inhabited may be discovering that they are a novelist. A writer whose single scenes feel most complete may be discovering that they are a short story writer. The form question and the subject question are not separate.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For screenwriters and playwrights, the portfolio review often reveals the genre sensibility the writer has been inhabiting without knowing it — the tonal register, the structural approach, the relationship to character that the year's work keeps enacting. A writer who keeps being drawn to the long, patient character study may be discovering they are a playwright rather than a screenwriter. A writer whose dialogue is most alive under pressure, whose scenes feel most charged when the stakes are highest, may be discovering the genre instincts of the thriller or the drama. The form the work wants to take is already present in the year's work; the portfolio review makes it visible.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For CNF writers, the portfolio review often reveals whether the year's work is pointing toward a single sustained memoir or a collection of essays — and, more crucially, what the memoir or collection is actually about. The subjects of individual essays are not the book's subject: the book's subject is the inquiry that runs beneath all of them, the question that each essay approaches from a different angle without fully answering. Identifying that underlying inquiry is the most important single act of the portfolio review for the CNF writer, because it transforms the book from a collection of pieces about different things into a unified investigation of one thing approached many ways.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Free Indirect Discourse — The Technique That Defines Modern Fiction",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 35 of 60 — Free Indirect Discourse: When the Seam Disappears",
          intro: [
            "Free indirect discourse (FID) is the most important and most underexplained technique in all of literary fiction. It merges the narrator's voice with the character's voice, allowing interiority to inhabit the narrative without quotation marks or attribution. Consider: 'She looked at the clock. It was already three. He was never coming.' The third sentence sounds like the character's thought — but who is speaking? Both the narrator and the character simultaneously. The seam between narrative voice and character voice has disappeared. This is FID.",
            "Austen discovered it; Flaubert systematized it; Woolf radicalized it. It is now the default mode of literary fiction — so pervasive that readers and writers use it constantly without being able to name it. The writer who cannot name it cannot fully control it, which means they cannot deploy it deliberately or recognize when it is working against them.",
          ],
          rule: "FID is produced by three conditions working together: third-person narration (or, rarely, second-person), past tense, and a character's thought or perception rendered without the explicit markers 'she thought that' or 'she wondered if.' The result is a sentence that belongs grammatically to the narrator but tonally and epistemically to the character. The test: if the sentence could be plausibly said aloud by the character, and it appears in the narrative without quotation marks or attribution, it is FID. The reader receives the character's interiority without leaving the narrator's sentence.",
          examples: [
            {
              label: "Direct thought — attributed, marked",
              text: "She looked at the clock. She thought: it was already three. He was never coming. [The thought is clearly attributed. The reader knows whose voice it is, but the narrative has had to step aside to present it.]",
            },
            {
              label: "Free indirect discourse — unattributed, merged",
              text: "She looked at the clock. It was already three. He was never coming. [The last two sentences belong grammatically to the narrator but epistemically to the character. The reader is inside the character's consciousness without leaving the narrative's third-person past-tense frame.]",
            },
            {
              label: "FID in Austen — irony through merged voices",
              text: "'It is a truth universally acknowledged...' Austen's FID is ironic: the narrator reports the community's belief in its own voice, which allows the narrator to present the belief without endorsing it. The reader understands that the 'truth' is not universal and not a truth — but the character's (or community's) conviction that it is comes through in the direct declarative form. The irony lives in the gap between the claim and the reality, which the FID makes available without the narrator having to announce it.",
            },
            {
              label: "FID as the control of psychic distance",
              text: "FID is one of the primary instruments of psychic distance adjustment. Deep FID (character's voice fully inhabiting the narration, character's specific diction and idiom coloring the prose) creates minimum distance — the reader is as close to the character as possible without first-person. Pulling back from FID (returning to pure narrator voice, describing the character's behavior from outside) increases distance. The skilled writer moves between these registers within a scene, often within a paragraph, without the reader noticing the movement.",
            },
          ],
          outro: [
            "The grammar topic this week carries no new exercise separate from the portfolio curation exercise — instead, the task is to take any third-person passage from this year's writing and mark every sentence that is FID. Then: find three places where you used explicit thought attribution ('she thought that,' 'he wondered if') and rewrite those sentences in FID. Read both versions. What does the FID version do that the attributed version does not?",
            "FID will be developed extensively in Phase 7 of the grammar curriculum (Year Two). The introduction this week is intentionally partial — the goal is recognition and initial practice, not full mastery. What FID does at its most sophisticated, in extended third-person prose over many pages, is one of the central subjects of Year Two's advanced craft curriculum.",
          ],
          exercise:
            "Take any third-person passage from your year's writing — ideally a passage with at least one moment of a character's interiority. Identify every sentence that is FID (belongs grammatically to the narrator but epistemically to the character). Then find three places where you used explicit attribution ('she thought,' 'he felt,' 'she wondered') and rewrite those sentences without the attribution markers, in FID. Read the revised version aloud. Where does the FID create intimacy that the attributed version did not? Where does the FID create ambiguity — where it is no longer clear whose perception is being reported — and is that ambiguity productive or confusing?",
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
              title: "No new reading — revisit three texts from the semester",
              author: "Your choice",
              href: "",
              note: "This week's reading time is spent revisiting rather than encountering. Choose three texts from the year's reading that produced the strongest response — that you have thought about since reading, that have changed how you think about your own work, that keep coming back to you. Reread them now with the portfolio review in mind: what is it about these three texts that speaks to what your own work is becoming? What do they do formally or thematically that you find yourself reaching toward? The rereading is a form of triangulation: the texts you keep returning to are telling you something about the writer you are becoming.",
              badge: "Free",
            },
            {
              number: "02",
              title: "Your own year's work",
              author: "You",
              href: "",
              note: "Read the full year's output in one sitting if possible — all thirty-five weeks of exercises, journal entries, and portfolio pieces. Read it the way you would read someone else's work: with attention, with a pencil, marking what surprises you, what seems most fully inhabited, what recurs. Do not edit while you read. The read-through is a diagnostic, not a revision session. What you notice in this reading is the primary material for the portfolio curation exercise and the artist's statement.",
              badge: "Free",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Spring Portfolio Curation",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Select the best 2,000 words of writing you have produced this year from across multiple pieces — not one piece in its entirety, but the best writing wherever it has appeared. The selection should represent your strongest work: the passages most fully inhabited, the sentences that surprised you, the scenes where the voice was most completely itself.",
            "Arrange the selected 2,000 words as a sequence or collection. Write brief transitions between pieces where necessary — not summaries of what was cut, but sentences that make the movement between pieces feel deliberate rather than arbitrary. The arrangement is itself a curatorial act: the order you choose implies something about how the pieces relate to each other.",
            "Then write a 500-word artist's statement: What is this year's work about? Not its subjects — its inquiry. What question does the accumulated work seem to be asking? What emotional terrain does it keep returning to? What formal concerns keep asserting themselves? What kind of book-length project might this work be pointing toward?",
            "The artist's statement should be honest about uncertainty. At this stage, you are articulating something that is still forming, and the statement that pretends to complete clarity is less useful than the statement that names what it knows and what it does not yet know. The question you cannot yet answer in the artist's statement is the question the thesis will answer.",
          ],
          target: "2,000 words (curated portfolio) + 500 words (artist's statement) = 2,500 words total",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 35 — The Manuscript Reader",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your curated 2,000 words — the portfolio selection, not the artist's statement. The AI's task is to read the selection as a first reader would: attending to what recurs, what the voice is doing, what the work seems to be about beneath its subjects.",
          prompt:
            "Read this selection of writing carefully. It is drawn from across a full year of work by a single writer. Answer these five questions: (1) What subjects and images recur across the selection — what objects, settings, or details appear more than once, and what does their recurrence suggest about the writer's preoccupation? (2) What emotional terrain does the writer keep returning to — not the subjects, but the specific emotional situations that the writing keeps approaching? (3) What is the writer's most distinctive stylistic feature — the specific formal or linguistic quality that makes this writing recognizably one writer's? (4) What question seems to animate this body of work — what is the work trying to understand? (5) Based on this writing, what kind of book-length project might this writer be building toward — what form, what length, what governing inquiry?",
          questions: [
            "Which of the AI's five answers most surprises you? Where does its reading of the work diverge most significantly from how you have understood your own work this year?",
            "Does the AI identify the recurring image or object you identified in the portfolio review? If it identifies a different one, which reading is more accurate — and what does the discrepancy tell you about what is actually recurring vs. what you thought was recurring?",
            "What does the AI say the work is trying to understand? Does its formulation of the governing question match your artist's statement? Where do they diverge?",
            "The AI's suggestion for the kind of book-length project this writing might be building toward: does it match your intuition about what you are writing toward? If not, what does the divergence tell you about the gap between what you are currently producing and what you imagine producing?",
          ],
          note: "The AI's reading of your curated portfolio is the closest thing available to a first reader's response — a response from outside the writing, from someone who has not been inside the making of it. That outside view is precisely what is most difficult to achieve on your own work, and most valuable at this stage of the year. The AI cannot fully understand the work — it cannot know what you were attempting in each piece, what was deliberate and what was accidental, what represents your best and what represents your most pressured — but it can tell you what the work produces in a reader who comes to it fresh. That production is the most honest data available.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Recurring Image",
      blocks: [
        {
          type: "tip",
          icon: "🔁",
          name: "What Your Unconscious Has Been Saying All Year",
          paragraphs: [
            "Writers return to certain images, objects, and scenes without knowing why. The image turns up in a piece written in October, then again in a piece written in February, then again in an exercise done in April — and the writer, drafting the April exercise, did not remember using it before. That recurrence is not accident. It is the imagination's insistence: this image holds something, and the work will not stop returning to it until the writing has understood what.",
            "Scan your year's work for recurrence. Any image, setting, emotional situation, or word that appears more than three times across separate pieces deserves attention. Make a list. Then ask, for each item on the list: what is this image holding? What does the imagination find in it that it keeps reaching for? What would it mean to write toward the center of this image rather than around it — to make it not a recurring background detail but the explicit subject of a piece? The answers to these questions are among the most useful data available for thesis planning.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What the Year Taught You",
      blocks: [
        {
          type: "journal",
          title: "What the Year Taught You",
          question:
            "Looking back at everything you have written this year: what surprised you? Not what went well and what went badly — what surprised you. What did the writing reveal about your imagination, your preoccupations, your formal instincts, that you did not know in September? What did you discover that you are interested in that you did not know you were interested in? What did you discover that you are afraid of, as a writer — what territory does your imagination approach and then retreat from, what subjects the prose handles from a distance rather than moving close to? And: what have you learned about yourself as a writer that has changed how you approach the work — changed how you sit down, what you reach for, what you trust?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is the inverse of the artist's statement. The artist's statement faces forward — toward the work that is becoming. The journal prompt faces backward — toward the writer who has become. Both are necessary for the final week of Year One, which asks you to stand at the threshold between who you were as a writer in September and who you will be in Year Two, and to make that threshold visible.",
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
            "By the end of this week you should have: read the full year's output in one sitting, marking what recurs, what surprises, what is most fully inhabited; selected and arranged the best 2,000 words from across multiple pieces into a curated sequence; written the 500-word artist's statement articulating what the work is about and what it is becoming; completed the AI manuscript reader exercise and attended to where the AI's reading diverges from your own understanding; revisited three texts from the semester's reading with the portfolio in mind; and identified your characteristic recurring image through the FID grammar exercise and the recurring image editorial tip.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 36",
          paragraphs: [
            "Week 36 is the final week of Year One — the capstone. The craft focus is Year One Synthesis: Thesis Pre-Planning and the Writer You Are Becoming. You will articulate the core question of your emerging creative project, identify the craft skills you need to develop to execute it, write a 400-word grammar synthesis reflecting on which Phase 1 and Phase 2 concepts most changed your writing, and produce the first serious scene, chapter, or essay section of what will eventually become your thesis manuscript. Week 36 is the declaration of intent for everything that follows.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The portfolio review is also a kind of self-portrait. The writer who looks at a year's work and recognizes a preoccupation, a recurring image, a formal instinct that keeps asserting itself — that writer has learned something about themselves that cannot be taught in a craft lecture or produced by an exercise. It is learned only by having written enough to see patterns, and then by looking at those patterns with enough honesty to name what they mean. You have written enough. Now look.",
          ],
        },
      ],
    },
  ],
};
