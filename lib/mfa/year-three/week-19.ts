import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek19Data: WeekData = {
  weekNumber: 19,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Final Draft Production",
  title: "The Final Draft — Producing the Thesis-Ready Manuscript",
  emphasizedWord: "Final Draft",
  deck: "Spring semester of Year Three is organized around a single objective: the final, polished, submitted thesis. The craft curriculum continues — Grammar Phase 8, the style synthesis — but it is entirely in service of the manuscript, which is the primary obligation of every week. Weekly thesis production targets are 1,000–3,000 words of final-draft prose. Not draft prose. Final-draft prose: every sentence at the level of the work's best pages.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "91 of 108" },
    { label: "Craft Focus", value: "Final-Draft Production — 1,000–3,000 Words" },
    { label: "Grammar", value: "Phase 8, Topic 5 — Vernacular and Dialect as Syntactic Craft" },
    { label: "Deliverable", value: "1,500–2,000 Words of Final-Draft Thesis Prose" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What Final-Draft Prose Actually Is — and How It Differs from Every Draft Before It",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The spring semester begins with a distinction that matters more than any craft concept the program has introduced: the distinction between draft prose and final-draft prose. Draft prose is the prose of discovery and approximation — the prose that gets the scene on the page, that finds the character's voice, that works out the structural logic of the chapter, that produces the material that revision can then shape. Draft prose is essential; the thesis could not exist without it. But draft prose is not finished, and calling it finished is the mistake that produces the good-enough thesis rather than the fully realized one. Final-draft prose is the prose that has been through every available revision — structural, character, thematic, voice, sentence-level, dialogue, image, pacing, opening, ending, genre-specific — and that reflects the writer's fullest current capacity at every level simultaneously. Every sentence is the best available sentence. Every transition is doing its work. Every image is the right image, in the right position, at the right level of development. Every passage of dialogue is carrying its full dramatic weight without leaning on attribution or action beats to do what the exchange itself should do.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The spring semester's weekly production target — 1,000 to 3,000 words of final-draft prose — sounds modest compared to the generative targets of Year One's spring semester. It is not modest. Final-draft prose at 2,000 words per week, sustained across six weeks, produces 12,000 words of prose at the highest level the writer is currently capable of making. That is a substantial portion of most thesis manuscripts. The writer who treats the spring target as a draft target — who produces 3,000 words of approximate prose and calls it done — is not producing the thesis. The writer who produces 1,500 words that are fully at the standard the revision sequence has established, every sentence examined and committed to, is producing the thesis. The count matters less than the standard. The standard is everything.",
          ],
        },
        {
          type: "pullquote",
          quote: "At this stage of the manuscript's development, the most valuable feedback comes not from craft analysis but from reading experience. Find two trusted first readers and ask them to report their reading experience: where they were absorbed, where they became aware they were reading, what they felt at specific moments. This is different from workshop feedback and often more useful at the final stage.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Final Draft's Specific Demands — What the Spring Semester Is Actually Asking",
          paragraphs: [
            "No placeholder passages: the final draft contains no sentences that are standing in for better sentences the writer hasn't written yet. The draft that contains a bracketed note — '[describe the room here]' or '[figure out this transition]' or '[this scene needs more]' — is not a draft that is ready for the final-draft pass. The spring semester begins by identifying every such placeholder in the manuscript — every passage that is approximate, every transition that is provisional, every scene that is present in structure but not yet in full execution — and naming it as work that must be done before the final draft is complete. The spring contract from Week 18 should have named these passages; if it did not, name them now.",
            "No rough transitions: the transition between chapters, between sections, between scenes is one of the places in prose where the writer's difficulty is most visible to the reader. The transition that is merely chronological ('The next morning..'), the transition that is merely spatial ('Down the hall..'), the transition that announces its own function ('Meanwhile..') — these are transitions that have not yet found their form. The final draft's transitions carry the same weight as the sentences on either side of them. They do structural work (moving from one element to another), emotional work (carrying the reader's state across the gap), and sometimes thematic work (the gap itself meaning something). Every transition in the manuscript should be examined this spring: not for whether it connects, but for whether it does its full work.",
            "No unresolved images: every image in the final draft has been placed deliberately, at the right level of development for its function. The image that appears once and is never developed — that seems to promise a governing significance it never acquires — should either be developed or removed. The image that has been developed in the wrong place — that gets its fullest treatment in the middle of the manuscript when it should be receiving it at the thematic climax — should be redistributed. The image revision of Week 8 addressed this systematically; the spring pass confirms that those revisions have been fully implemented and that no new image failures have appeared in the material written or substantially revised since Week 8.",
            "Consistent voice throughout: the voice that the voice audit established in Week 5, the signature sentences that define the manuscript's characteristic register, must be audible on every page of the final draft. Not identically — voice develops across a long work, and the narrator who ends the novel is not quite the same as the narrator who began it — but recognizably. The spring's daily practice of reading the previous day's pages aloud before writing the next ones is the most reliable instrument for catching voice drift before it accumulates into a problem.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Final-Draft Production in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction final draft is produced chapter by chapter, each chapter brought fully to the standard before the next is begun. The chapter-by-chapter approach prevents the accumulation of chapters that are approximately at the standard — chapters that look finished individually but whose combined effect is a manuscript in which no two chapters are at quite the same level. For each chapter this spring: read it through once without marking, noting only the passages that require attention; then address each passage in a single focused session rather than in the margins of an ordinary writing day. The chapter that emerges from this session should be fully at the standard. Only then move to the next.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing final draft is produced in a single document that the writer works through sequentially, scene by scene, applying the full final-pass protocols to each scene before moving forward. If a table read has not yet been conducted, schedule one in the first two weeks of spring semester — the oral experience of the script reveals final-draft problems that no amount of silent revision can catch. After the table read, the notes from it constitute the spring semester's primary revision agenda: address every note that reflects a genuine problem (not a preference), in the order of the scene's appearance in the script. The formatted, table-read, and fully revised script is the final draft.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir final draft requires particular vigilance about the narrator's voice, because the memoir's narrator is the book's primary instrument and the narrator's voice consistency is both harder to maintain and more critical to the book's success than in fiction. As each chapter or section is brought to final-draft standard this spring, the writer should read it against the opening chapter: is this the same narrator — same register, same relationship to the material, same quality of retrospective intelligence — as the narrator who opens the book? Voice drift in memoir is not developmental inconsistency (the narrator growing in understanding across the work) but tonal inconsistency (the narrator sounding like they were written in different moods). The final draft repairs every instance of the second kind while preserving every instance of the first.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 8, Topic 5 — Vernacular and Dialect as Syntactic Craft",
      blocks: [
        {
          type: "grammar",
          title: "Phase 8 · Vernacular — Authenticity Through Syntax, Not Spelling",
          intro: [
            "Vernacular — the language specific to a community, region, class, or historical period — is one of the most powerful characterization tools available to the literary writer. Used with precision, vernacular creates authenticity and specificity that no amount of descriptive prose can achieve: the reader who encounters a character's speech rendered in its specific regional or social idiom does not need to be told where the character is from, what class they belong to, or what their relationship to formal authority is. The speech tells them. Used carelessly, vernacular becomes parody or condescension — the writer who renders dialect through misspelling and apostrophes is not rendering a character's speech but performing their outsider relationship to it.",
            "The distinction between authentic and performed vernacular operates at the syntactic level rather than at the orthographic level. Authentic vernacular captures the characteristic syntax patterns of a speech community — the double negative ('I don't know nothing'), the invariant 'be' of African American Vernacular English ('She be working late'), the phrase order inversions of Yiddish-inflected American speech ('Already with the questions'), the characteristic idiom ('fixing to' in Southern American English, 'wicked' as intensifier in New England) — rather than attempting to represent pronunciation through altered spelling. The writer who renders a Southern character's speech as 'Ah'm fixin' t'go' is transcribing what the writer imagines the speech sounds like to an outsider. The writer who renders it as 'I'm fixing to go' is capturing the idiom that marks the character as a member of a specific speech community, without the condescension of the phonetic approximation.",
          ],
          rule: "The vernacular audit: read through the thesis manuscript specifically for every passage of dialogue and every instance of free indirect discourse that involves a character whose speech community is different from the narrator's or the writer's. For each: is the vernacular being rendered through syntax and idiom (authentic) or through altered spelling and apostrophe (performed)? If performed, revise toward syntax: find the characteristic phrase structures, idioms, and grammatical features of the speech community and render those rather than the phonetics. Then — for writers whose thesis does not involve vernacular speakers — apply the grammar exercise in the other direction: audit the prose for the characteristic syntactic features of your own vernacular, the features of your speech community that appear in the prose without your having chosen them. Every writer has a vernacular; the writer who thinks they write in a neutral, unmarked English is simply unaware of their vernacular's specific features.",
          examples: [
            {
              label: "Zora Neale Hurston — vernacular as interiority, not performance",
              text: "From Their Eyes Were Watching God: 'Ships at a distance have every man's wish on board.' The novel's vernacular exists in the dialogue — rendered through syntax, idiom, and rhythm that is entirely specific to the speech community of Eatonville, Florida — while the narrative voice operates in a poetic, lyric register that is Hurston's own. The two registers do not compete; they create a doubled consciousness that is the novel's central formal achievement. Hurston was doing something that her contemporaries found controversial: rendering the vernacular of a Black Southern community with full literary seriousness, neither exoticizing it nor translating it into standard American English. The syntax of the dialogue is the character's interior life made audible.",
            },
            {
              label: "Junot Díaz — code-switching as syntax, Spanglish as epistemology",
              text: "From The Brief Wondrous Life of Oscar Wao: the novel's code-switching between English and Spanish, between geek-culture reference and Caribbean idiom, between academic register and street vernacular is not stylistic decoration but structural argument — the argument that Oscar Wao exists at the intersection of multiple worlds, speaks multiple languages, and cannot be rendered in any single register without falsifying what he is. The Spanglish syntax does not translate; it insists that translation would lose precisely what matters. This is vernacular as philosophy: the syntax enacting what no summary could express.",
            },
          ],
          outro: [
            "The thesis audit for vernacular precision should happen this week alongside the final-draft production. Every passage of dialogue involving a speaker whose vernacular is not the writer's own should be read against one of two questions: have I rendered the syntax and idiom of this community's speech, or have I rendered what I imagine it sounds like to someone outside that community? The first is characterization; the second is caricature. The difference is in the specificity of the syntactic knowledge — which requires research, immersion, and sometimes the consultation of sensitivity readers who are members of the community whose speech is being rendered.",
          ],
          exercise:
            "Audit the thesis for vernacular: identify every passage of dialogue or FID involving a character whose speech community differs from the writer's own. For each, assess whether the vernacular is rendered through syntax and idiom or through altered spelling. Revise any phonetic rendering toward syntactic authenticity. If the thesis contains no vernacular speakers, audit the prose for the writer's own unexamined vernacular features.",
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
              title: "Their Eyes Were Watching God",
              author: "Zora Neale Hurston",
              href: "",
              note: "The canonical model of literary vernacular — the novel that most fully demonstrates that the authentic rendering of a specific speech community's syntax and idiom is not a compromise of literary seriousness but its fullest expression. Read specifically for the relationship between the novel's two registers: the poetic, lyric narrative voice and the vernacular dialogue. How does Hurston move between them? When does the narrative voice take on features of the community's speech, and when does it remain in its own register? The boundary management is itself a form of argument about whose perspective the novel inhabits and when.",
              badge: "Required",
            },
            {
              number: "02",
              title: "The Brief Wondrous Life of Oscar Wao",
              author: "Junot Díaz",
              href: "",
              note: "Spanglish as syntactic philosophy — the novel that most fully demonstrates code-switching as a structural principle rather than a stylistic gesture. Read for the syntax of the code-switching: where does Spanish appear within English sentences, and what does its appearance signal about the narrator's relationship to the material at that moment? Where does the geek-culture register appear alongside the Caribbean vernacular, and what does the juxtaposition do? The novel's formal argument is in its syntax; the syntax is inseparable from the meaning.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "1,500–2,000 Words of Final-Draft Thesis Prose",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write 1,500 to 2,000 words of final-draft thesis material — the most polished, considered prose you have produced in the program. Every sentence should be at the level of the work's best pages. No placeholder passages: if a passage cannot be brought to final-draft standard this week, note it as a known deficiency and return to it next week, but do not include approximate prose in the count. No rough transitions: every movement between scenes, sections, or chapters in the pages produced this week should be doing its full work. No unresolved images: every image in these pages should be at the right level of development for its function.",
            "The production session should begin each day by reading the previous day's pages aloud — not for revision, but to re-enter the voice and confirm that today's prose will match the register and standard of what has already been written. The voice that the thesis has developed over three years of drafting and revision is not automatically available at the beginning of every writing session; it must be re-entered deliberately. The oral re-reading is the most reliable instrument for that re-entry.",
            "After writing, read the pages aloud once more — slowly, at the pace of considered speech rather than the pace of rapid reading — and mark every sentence where the rhythm stumbles, every passage where the voice is not fully at the manuscript's standard, every transition that is doing less than its full work. Address every mark before the week's production is complete. These pages, revised, are the final draft.",
          ],
          target: "1,500–2,000 words of final-draft thesis prose, read aloud and revised before the week closes",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #16 (Final Draft Version) — AI as First Reader",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "This is a repurposed version of AI Exercise #16 from the program — AI as first reader — adapted for the final-draft context. The prompt shifts from editorial assessment to reading experience: not what is wrong with the prose but what it feels like to encounter it for the first time.",
          prompt:
            "Read this as a reader encountering this manuscript for the first time — not as an editor, not as a teacher, not as a writing tutor with an agenda about what the prose should be doing, but as a thoughtful, serious reader who has picked up this book because it interests them. Read the passage I am giving you and then report your reading experience with the same honesty and specificity you would bring to describing what it felt like to read a book that affected you. Where do you want to keep reading — what is pulling you forward? Where do you pause, and why — what in the prose is asking you to slow down or reconsider? Where do you feel the prose most fully — where is the experience it is rendering most alive in the language? Where, if anywhere, does your attention drift — not lose interest, but become aware that it is reading rather than experiencing? Report your reading experience, not your editorial assessment. I am not asking what is wrong; I am asking what it is like.",
          questions: [
            "The places the AI wants to keep reading: these are the manuscript's strengths at the level of narrative pull — the sentences, images, and moments where the prose creates forward momentum. Note them specifically. The final-draft production should sustain and reinforce these qualities across every new page written this spring. The manuscript's strengths are not accidents; they are the result of specific craft choices that can be identified, understood, and replicated.",
            "The places the AI pauses: distinguish between productive pauses (the kind the prose is asking for — the moment of weight, the image that requires contemplation, the dialogue exchange whose subtext requires a moment's consideration) and unproductive pauses (the kind the prose is inadvertently creating — the transition that does not carry the reader across, the sentence whose syntax is working against rather than for the reading). Revise toward more of the first kind and fewer of the second.",
            "The places where the AI's attention drifts: these are the manuscript's vulnerabilities at the level of reader engagement — the passages where the final-draft standard has not yet been fully achieved, or where a structural problem that survived the fall revision sequence is making itself felt in the reading experience. Map these passages against the fall assessment's account of what remains. If they overlap, the remaining work is confirmed and the spring plan should address it. If they do not overlap — if the AI identifies drift in a passage the assessment considered complete — the assessment was incorrect and the passage needs additional attention.",
            "The overall reading experience: the AI's summary of what it felt like to read these pages. This is the most important finding. The final draft should produce a consistent, specific reading experience — not 'good' in the abstract but particular: this kind of attention, this quality of feeling, this relationship between the reader and the material. If the AI's account of the reading experience matches what the writer intends the thesis to produce, the final-draft production is on track. If it does not match — if the reading experience the AI describes is different from the experience the writer intends to create — the discrepancy is diagnostic: what is the prose doing that the writer did not intend, and what is the writer intending that the prose has not yet found a way to do?",
          ],
          note: "The first-reader protocol should supplement the AI workshop this week: find two trusted first readers — people who are serious readers but not necessarily writers — and ask them to read the week's pages and report their reading experience using the same framework as the AI prompt. The comparison between the AI's reading and the first readers' readings is itself instructive: where they converge, the reading experience is consistent and reliable; where they diverge, the prose is producing different experiences for different readers, which is either an ambiguity the thesis intends or a problem the final draft should address.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "First Reader Protocol",
      blocks: [
        {
          type: "tip",
          icon: "👁️",
          name: "Reading Experience Over Editorial Assessment",
          paragraphs: [
            "At this stage of the manuscript's development, the most valuable feedback comes not from craft analysis but from reading experience. Find two trusted first readers — people who are serious readers but not necessarily writers — and ask them to report their reading experience: where they were absorbed, where they became aware they were reading, what they felt at specific moments, where their attention was fully held and where it drifted. This is different from workshop feedback and often more useful at the final stage.",
            "The craft-trained reader's feedback at the final stage tends toward the editorial: identifying what could be done differently, what conventions the prose is not following, what the reader would have chosen instead. This feedback is less useful now — the structural decisions have been made, the revision sequence has run its course, and the manuscript is not in a state to absorb a new round of structural notes. The first reader's feedback, by contrast, is phenomenological: it describes what the reading experience is actually like, which is the only thing that matters at the final-draft stage. The ideal reader is more capable than most writers fear. Trust them.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Writing the Final Version",
      blocks: [
        {
          type: "journal",
          title: "The Feel of the Final Draft",
          question:
            "What does it feel like to be writing the final version of these pages? Not the craft question — not whether the pages are at the standard — but the phenomenological question: what is the experience of writing prose that you know is the thesis, not a draft of the thesis, not material that will be revised later, but the thing itself in its final form? Is there a different quality of attention? A different relationship to each sentence as you write it? A different experience of reading back what you have written? Write for twenty minutes on what the final draft feels like from the inside — the experience of the writer who is finishing something rather than continuing to work on something. This distinction, between finishing and continuing, is one of the hardest things in the writing life to learn to feel. Write about whether you can feel it yet.",
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "What You've Built — The Spring Semester Begins",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week you should have: produced 1,500–2,000 words of final-draft thesis prose, read aloud and revised to the standard; completed the vernacular audit of the thesis; completed the AI first-reader workshop with all four reflection questions; read the opening of Their Eyes Were Watching God and The Brief Wondrous Life of Oscar Wao for vernacular syntax; written the journal entry on what the final draft feels like from the inside. The spring semester's production arc has begun.",
          ],
        },
        {
          type: "card",
          title: "The Spring Production Arc — Weeks 19–24",
          paragraphs: [
            "Weeks 19 through 24 are the most intensive production period of the program. Weeks 20 through 22 sustain and increase the final-draft production target while adding craft focus on the ideal reader (Week 20) and the voice passage (Week 22). Week 23 completes all major structural revisions and all line-level revision passes. Week 24 completes all new writing and begins the oral-reading revision pass — the full manuscript read aloud, every stumble marked, every marked passage revised. By the end of Week 24, the manuscript should be substantially complete. Weeks 25 through 27 are devoted to the public reading, the defense, and the submission.",
          ],
        },
      ],
    },
  ],
};
