import type { WeekData } from "@/lib/mfa/types";

export const week32Data: WeekData = {
  weekNumber: 32,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Intensive Thesis Production II — White Space, Pacing, and the Red Pen",
  emphasizedWord: "The Red Pen",
  deck: "The second of three consecutive production weeks. This week's craft pressure operates at the paragraph level and above: white space as a pacing instrument, the sentence that does not serve the governing question, and the discipline of radical compression. AI Exercise #17 — The Red Pen Exercise — asks what the prose does when forced to say the same thing in 30% fewer words.",
  meta: [
    { label: "Commitment", value: "12–16 hrs" },
    { label: "Program Week", value: "68 of 108" },
    { label: "Craft Focus", value: "Production + Compression" },
    { label: "Grammar", value: "Phase 7 — White Space and Pacing" },
    { label: "AI Exercise", value: "Exercise #17 — The Red Pen Exercise" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Sentence That Does Not Serve — What Excess Looks Like from the Inside",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every first draft contains sentences that are not serving the work. This is not a failure; it is the nature of first-draft writing, which must often circle a subject before landing on it, must often write through an idea in order to find the sentence that says the idea clearly, must often produce the approach to the real sentence before producing the sentence itself. The approach sentences — the warm-up sentences, the sentences that say 'this is what I am about to say' before saying it, the sentences that summarize what the previous sentence already established — are the cost of the drafting process, and they must be paid. The revision question is not whether they exist but whether they are still serving the work once the real sentence has been found.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The sentence that does not serve the thesis's governing question is the most reliable diagnostic for this kind of excess in a long manuscript. Every thesis has a governing question — the question the work is organized to investigate, the question whose answer (or whose refusal of easy answers) constitutes the work's argument. In a novel: what does this story want to know? In a memoir: what is the narrator's relationship to their own past, and what does examining it reveal? In a screenplay: what is the world of this story investigating through its protagonist? Every section, every scene, every paragraph, every sentence should be in some relationship to that governing question — should be advancing the investigation, complicating it, providing evidence for it, or creating the conditions under which the question can be asked more precisely. The sentence that has no relationship to the governing question — the sentence that is well-written, perhaps even beautiful, but that is doing its work in a different essay, a different novel, a different script — is excess, and the red pen is its instrument.",
          ],
        },
        {
          type: "pullquote",
          quote: "Compression is not subtraction. When you cut 30% of a passage and the passage is stronger, the cut words were not the passage — they were the scaffolding the passage needed to be built and no longer needs to stand.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "What Excess Looks Like — Four Patterns to Mark",
          paragraphs: [
            "The approach sentence: the sentence that announces what the following sentence will say. 'She thought about her mother often. Her mother had been the kind of woman who...' — the first sentence is the approach; the second is the landing. In revision, the approach sentence is often the one that can be cut: 'Her mother had been the kind of woman who...' begins with the work, not with the announcement of the work. The approach sentence sometimes provides a useful transition, establishing that the character is thinking, or that time has passed, or that a new subject is being introduced; it earns its place when it does that transitional work. When it does nothing but announce, it is excess.",
            "The summary sentence: the sentence that, after a passage of showing, tells the reader what the showing has shown. 'It was the loneliest she had ever felt.' After three paragraphs in which the loneliness has been fully rendered through scene — through the specific objects in the room, the specific quality of the silence, the specific way she moved through the space — the summary sentence tells the reader what they have already understood. It earns its place when the telling adds something the showing cannot say — when the narrator's retrospective knowledge at the summary level produces a resonance the scene alone cannot produce. When it merely restates what the scene has established, it is excess.",
            "The qualification sentence: the sentence that hedges a claim the narrative has already made with sufficient precision. 'In some ways, perhaps, this was the beginning of the end — or at least, so it seemed to her then.' Every qualification weakens the claim it qualifies. The claim that cannot be made without qualification may need to be reconsidered rather than hedged; the claim that can be made directly should be made directly. The qualification sentence earns its place when the hedging is itself meaningful — when the narrator's uncertainty is the subject, when the retrospective view is genuinely ambiguous. When it is merely caution, it is excess.",
            "The transition sentence that does nothing but transit: 'The next day, things were different.' Transition sentences earn their place when they carry their own weight — when the transition itself is meaningful, when the time shift creates a specific effect, when what is not said in the transition is productive. When the transition merely moves the narrative from one scene to the next without doing its own work, it is often more honest to simply begin the next scene. The white space between sections is itself a transition; a weak transition sentence is worse than no sentence at all, because it adds words without adding meaning.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "White Space, Pacing, and Compression Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "For the fiction writer, white space between sections is a pacing instrument as powerful as sentence length. A section break imposes a rest stop — a pause in which the reader's imagination is briefly sovereign, filling the gap with what the narrative has implied but not stated. The section break placed at maximum tension — ending a section at the point of highest stakes, before the resolution — creates forward momentum through incompleteness. The section break placed after resolution creates a breathing space, a moment of consolidation before the next movement. Managing the distribution of section breaks across a chapter is a pacing decision that determines the rhythm of the reader's experience at the macro level. Map the section breaks in this week's new pages and the most recently completed chapter: are they placed for maximum effect, or have they accumulated by habit?",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "For the screenwriter, compression is not optional — it is the form's primary discipline. The page-per-minute rule creates a hard constraint: every page of script is approximately one minute of screen time, and a feature film is approximately 90–120 pages. This constraint means that every scene must earn its screen time, and the scene that is doing one thing when it could be doing two is wasting the form's most precious resource. The Red Pen Exercise applied to screenplay pages: submit 500 words of scene description and dialogue for 30% cutting while preserving meaning. For playwrights, the equivalent constraint is the stage's temporal pressure — the audience is present, in real time, and their attention cannot be recovered once lost. The sentence that does not serve the play's governing question is not a sentence that can be cut in revision; it is a sentence the audience has already experienced as dead weight before the playwright reaches it in the draft.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For the memoirist, the sentence that does not serve the governing question is often the sentence that is true but not relevant — the detail that is accurate but that is not doing narrative or thematic work. Memoir has a particular susceptibility to this kind of excess because the writer's obligation to accuracy can produce a false equivalence between what happened and what belongs in the book. Everything that happened is true; not everything that is true belongs. The governing question is the instrument for distinguishing between them: this detail is accurate, but does it advance the investigation? This scene occurred, but does it complicate or develop the narrator's relationship to the material? The red pen applied to memoir is an act of editorial honesty: the willingness to cut what happened because it is not serving the book, which is a different obligation from serving the record of a life.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7 — White Space and Pacing at the Paragraph Level",
      blocks: [
        {
          type: "grammar",
          title: "Phase 7 · White Space — The Blank Page as Craft Decision",
          intro: [
            "White space in literary prose is not the absence of language — it is language at its most compressed. The blank line between paragraphs, the section break, the chapter ending followed by white before the new chapter begins: each of these is a silence in the prose's music, and silences are as compositional as notes. The writer who manages white space manages the reader's experience of time, emphasis, and meaning at the level of the page rather than the sentence.",
            "At the paragraph level, white space does three things: it isolates, it paces, and it implies. Isolation: a short paragraph — or a one-sentence paragraph — surrounded by longer paragraphs receives emphasis from its isolation. The reader's eye pauses at the shorter unit; the surrounding white gives it room to resonate. Pacing: a page dense with unbroken prose creates a sensation of pressure, of accumulation, of a consciousness that cannot pause to breathe. A page with frequent paragraph breaks creates a different rhythm — more staccato, more spacious, more susceptible to the reader's own breathing. Implication: the break between two paragraphs, when it is placed at the right moment, can imply what neither paragraph states — the gap between 'She walked to the window' and 'He was gone when she turned around' is the story's most active zone.",
          ],
          rule: "The management of white space is the management of the reader's attention at the macro level. The practical discipline: map the white space distribution across a chapter. Count the paragraph breaks. Note their placement — do they fall at moments of transition, at moments of maximum tension, at moments where the narrative needs to breathe? Or have they accumulated by habit, the writer pressing return whenever the prose needed a pause without asking whether the pause was serving the work? A chapter with no paragraph breaks is a different experience from a chapter where every other sentence is isolated; both can be right, but both should be chosen rather than arrived at by default.",
          examples: [
            {
              label: "Section break placement — the break at maximum tension",
              text: "The section break placed at the moment of maximum unresolved tension is the most common pacing decision in published literary fiction: the chapter ends before the confrontation resolves, before the question is answered, before the reader has what they need to feel complete. The break forces the reader forward — the forward momentum is produced by incompleteness. The section break placed after resolution creates a different experience: the chapter ends with a kind of completion, and the following chapter begins fresh. Both are legitimate; neither should be the default. The question is which serves the manuscript's pacing needs at this specific moment.",
            },
            {
              label: "The one-sentence paragraph as white space instrument",
              text: "A one-sentence paragraph is not just a short paragraph — it is a paragraph that claims the full visual and rhythmic weight of a paragraph for a single sentence. The white space that precedes and follows it gives the sentence room that it would not have if embedded in a longer paragraph. This extra room is emphasis: the reader cannot move past the sentence without pausing in it. The one-sentence paragraph earns its isolation when the sentence is strong enough to sustain that emphasis — when the pause is productive, when the isolation creates resonance. When the sentence is average, the isolation merely highlights its averageness. The test: would this sentence be more powerful isolated or embedded? The answer is usually embedded, which is why the one-sentence paragraph should be used sparingly.",
            },
          ],
          outro: [
            "After writing this week's thesis pages, read them specifically for white space distribution: where are the paragraph breaks, are they serving the prose's pacing and emphasis, and is there any section where the white space is either too dense (breaking so frequently that the prose feels fragmented) or too sparse (running so long without a break that the reader cannot find a natural pause)? Note the distribution in the session log.",
          ],
          exercise:
            "Map the white space in the most recently completed chapter: note the placement of every paragraph break and section break. Identify one place where a break should be added (the prose needs to breathe and is not being given room) and one place where a break should be removed or moved (the break is interrupting a passage that should be felt as continuous). Make both changes and read the revised passage aloud.",
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
              title: "Your thesis draft — the current chapter in progress",
              author: "You",
              href: "",
              note: "Required. Before writing new pages, read the current chapter specifically for the four patterns of excess described in the lecture: approach sentences, summary sentences, qualification sentences, and empty transition sentences. Mark each one. Do not cut them yet — this week's Red Pen AI exercise will develop the compression instinct more precisely, and the cuts are ultimately revision-pass work for Year Three. For now, the marking is the exercise: learning to see the excess while it is still in the draft, before it becomes invisible through familiarity.",
              badge: "Required",
            },
            {
              number: "02",
              title: "A passage of published prose in your genre that you consider formally excellent",
              author: "Your choice",
              href: "",
              note: "Required. Choose any passage of 500 words from a published work in your genre — a passage that you consider compressed, precise, and formally excellent. Read it with the red pen framework: are there approach sentences? Summary sentences? Qualification sentences? Empty transitions? Almost certainly not — the published passage has been through the editorial process that removed them. Then read your own thesis pages from this week alongside it. The comparison is not invidious; it is instructive. The gap between the published passage's compression and the thesis pages' current state is the gap that revision closes.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Spring Thesis Session 14 — 1,500–2,500 Words",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This is a production week. Write 1,500–2,500 words of thesis manuscript. Before writing, spend ten minutes reading the previous session's pages and marking — without cutting — any sentences that fall into the four excess categories identified in the lecture. This pre-marking creates the editorial awareness that the production session can then consciously work against: the sentences in the new pages that are approach sentences, that are summaries of what the scene has already shown, that are qualifications of claims the narrative has already established.",
            "After writing: apply the white space audit from the grammar section to the new pages. Map the paragraph breaks, identify one place to add a break and one to remove or move a break. Update the session log: word count, what was written, any sentences marked as excess to address in revision.",
          ],
          target: "1,500–2,500 words of thesis",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #17 — The Red Pen Exercise",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit 500 words of thesis prose for radical compression: the AI attempts to cut 30% of the word count while preserving the full meaning of the passage. The exercise reveals what the prose requires and what it has accumulated through habit.",
          prompt:
            "I am going to share 500 words of prose from my thesis draft. Your task: cut 30% of the word count while preserving the full meaning of the passage — every event, every image, every character beat, every piece of information the passage contains. Do not cut content; cut the words required to carry the content. When you are done, show me the revised passage and then list, in order, the specific types of cuts you made most frequently: which sentences were shortened, which were removed entirely, which phrases were reduced to single words. I want to understand the pattern of the cuts, not just see their result.",
          questions: [
            "Read the AI's compressed version alongside the original. What has been lost, if anything, beyond word count — and is what has been lost worth the compression? Sometimes the cut words were carrying meaning the AI could not detect: a rhythm, a specific quality of the narrator's voice, a repetition that was deliberate rather than redundant. Name what has been lost (if anything) and whether you would restore it. The Red Pen Exercise does not produce the revision; it produces the editorial instinct — the ability to see what the prose requires versus what it has accumulated.",
            "The AI's list of cut types: which category appeared most frequently in this passage? If the most frequent cut was the removal of approach sentences, that is a pattern to carry into the session's new pages — a signal that the drafting process is currently producing more approach sentences than usual, and that the new pages can be written with that tendency in mind. If the most frequent cut was the compression of qualification sentences, that is a signal about the prose's current relationship to confidence: the draft is hedging claims it should be making directly.",
            "Apply the red pen exercise's discipline to one paragraph of the new pages written in this week's session — not by submitting it to the AI, but by reading it yourself with the question: if I had to cut 30% of this paragraph, what would go? Make those cuts. Read the compressed version. Is it stronger? The paragraph that is stronger after 30% cutting was carrying 30% of its words as scaffolding rather than structure. The paragraph that loses something essential with a 30% cut is a paragraph whose words are all doing work — and that is the standard the whole manuscript is working toward.",
            "The broader discipline: mark every sentence in the thesis session's new pages that does not serve the thesis's governing question. Not to cut them now — that is revision work — but to see the proportion of governing-question sentences to supporting sentences to approach/summary/qualification sentences in the current drafting. The proportion is information: a draft in which a high percentage of sentences serve the governing question directly is a compressed draft; a draft in which many sentences approach, summarize, or qualify is a draft with room for compression in revision.",
          ],
          note: "The Red Pen Exercise consistently reveals that prose contains more scaffolding than the writer is aware of while drafting. This is not a failure of the drafting; the scaffolding is often what makes the construction possible. The exercise's value is in making the scaffolding visible so that the revision pass can remove it cleanly — leaving only what the structure requires to stand on its own.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Mark Every Sentence That Does Not Serve the Governing Question",
      blocks: [
        {
          type: "tip",
          icon: "✂️",
          name: "The Governing Question as Editorial Instrument",
          paragraphs: [
            "The thesis's governing question is the most reliable instrument available for making editorial decisions in a long manuscript. Every sentence can be evaluated against it: is this sentence advancing the investigation? Complicating it? Providing evidence? Creating the conditions under which the question can be asked more precisely? If the answer to all four is no — if the sentence is doing work, but the work is being done in a different book — the sentence is a candidate for the red pen.",
            "The practical discipline: read any two pages of the thesis with a pencil, and mark every sentence that does not serve the governing question. Do not cut anything. Just mark. Then count the marked sentences against the unmarked ones. In a tight, compressed passage, the ratio might be one marked sentence to ten unmarked ones. In a passage that has drifted — that has followed the prose's momentum into territory that is interesting but not essential — the ratio might be much higher. The ratio is information about where the revision work is concentrated. It does not tell you that the marked sentences are bad sentences — some of the most beautiful sentences in first drafts are sentences doing the wrong work in the right prose. It tells you that they are serving a different investigation than the one the thesis has committed to.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Where You Feel Most Fully Yourself",
      blocks: [
        {
          type: "journal",
          title: "In the Writing",
          question:
            "Where in the writing do you feel most fully yourself — most fully the writer you are becoming rather than the writer you have been? Not the passages you are most proud of, not the passages that are most technically accomplished, but the passages in which the writing felt most like you: most native, most direct, most inhabiting the voice and mode that is yours rather than borrowed or attempted. Name the passage, or the kind of passage, or the conditions under which it was written. What was happening in those sessions that is not always happening — what was different about the approach, the mood, the material, the sentence-level choices, the relationship to the governing question? And: what would it mean to try to replicate those conditions? Not to force the voice — that always fails — but to understand what the voice requires in order to arrive, and to create more of those conditions in the remaining weeks of Year Two.",
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
            "By the end of this week you should have: written 1,500–2,500 words of thesis in Session 14; completed the pre-writing excess marking on the previous session's pages (approach, summary, qualification, and empty transition sentences marked without cutting); completed the white space audit and the two-break revision (one break added, one removed or moved); completed the Red Pen Exercise with all four reflection questions, including the self-applied 30% cut to one paragraph of new pages; read and compared a published passage to the thesis pages for compression; updated the session log with the governing-question sentence count.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 33",
          paragraphs: [
            "Week 33 closes the three-week production block: 1,500–2,500 final words, grammar focus on transitional strategies beyond transitional words, and AI Exercise #24 — Revision Coaching, in which the AI asks questions about the draft rather than offering suggestions. The editorial tip for Week 33: read the full draft in one sitting and mark only what surprises you — good and bad. The journal prompt: if you had to finish the thesis in six months, what would you cut?",
          ],
        },
      ],
    },
  ],
};
