import type { WeekData } from "@/lib/mfa/types";

export const week14Data: WeekData = {
  weekNumber: 14,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Setting II — World-Building & Research",
  emphasizedWord: "World-Building & Research",
  deck: "Every narrative world requires construction — a 1970s Detroit neighborhood, a corporate law firm, a rural Mississippi county in 1955. The writer must know far more than they put on the page. The invisible knowledge is what makes the visible world feel real.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "World-Building" },
    { label: "Grammar", value: "Sentence Variety Audit" },
    { label: "Exercise", value: "700–1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Iceberg of Knowledge",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1REcTIVqGf_H5ukarWV9VqlnyvBj73Agi/preview" },
        {
          type: "paragraph",
          content: [
            "World-building is a term that fiction writers in the realist tradition often hand off to genre writers — science fiction, fantasy, historical fiction — as though the worlds of literary fiction do not require construction. This is a misconception that produces some of the most common failures in realistic fiction: the vague urban neighborhood that could be anywhere, the profession that has no specific texture, the period or subculture that is gestured at rather than inhabited. Every fictional world, regardless of genre, must be built. The difference between a world that feels real and one that feels approximate is almost always a matter of",
            { text: " invisible knowledge.", emphasized: true },
          ],
        },
        {
          type: "paragraph",
          content: [
            "Hemingway described this principle in terms of the iceberg: the dignity of movement of an iceberg is due to only one-eighth of it being above water. The seven-eighths beneath the surface — the knowledge the writer has and does not use — is what gives the visible one-eighth its authority. A writer who puts everything they know on the page produces prose that feels exhausted, over-explained, anxious to be believed. A writer who has done the research and deploys only the sharpest tenth of it produces prose that feels inevitable. The reader cannot see the research. They feel it.",
          ],
        },
        {
          type: "pullquote",
          quote: "If a writer of prose knows enough about what he is writing about he may omit things he knows and the reader will still have a strong sense of them.",
          cite: "— Ernest Hemingway, Death in the Afternoon",
        },
        {
          type: "paragraph",
          content: [
            "The question for the working writer is not whether to research but how much, what kind, and — most critically — how to deploy what you've found without the deployment showing. Researched detail announces itself when it arrives as information rather than as experience: when the prose slows to explain what a piece of equipment does, when a character's profession is described from the outside rather than inhabited from within, when a period detail appears in the narrative at the moment the writer remembered to include it rather than at the moment the story requires it. The",
            { text: " light-hand principle", emphasized: true },
            " is the discipline of making researched detail feel like it was always there — like the world was built from the inside, not constructed to specification.",
          ],
        },
        {
          type: "card",
          title: "Three Principles for Research in Fiction",
          paragraphs: [
            "Know more than you show: The research should be proportionally greater than what appears on the page. For every detail in the prose, there should be ten you chose not to use — and the decision of which ten percent to use should be governed by what the scene requires, not by what you most want to show off.",
            "Research for specificity, not for accuracy: The goal of research is not to be technically correct — it is to have access to the specific, the particular, the detail that only someone with insider knowledge would reach for. Accuracy matters, but what generates verisimilitude is the specific object, the specific practice, the specific vocabulary that marks this world as real rather than imagined from outside.",
            "Let the detail arrive through character: Researched detail that is delivered by the narrator as information is always less convincing than detail that arrives because a character reaches for it, works with it, or is troubled by it. A character who is a shipwright does not explain what a caulking iron is — they pick it up. The detail that arrives through action and character relationship is the detail the reader absorbs without registering as insertion.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Research methods matter as much as research quantity. The most common approach — online searches, encyclopedia articles, secondary sources — produces the most common kind of world-building failure: technically correct but experientially thin. The information is right but the texture is missing. Primary sources — firsthand accounts, archival materials, contemporary journalism, oral histories, the actual sensory experience of the place or period — produce a different kind of detail: one that carries smell, sound, light quality, the specific vocabulary that was in use, the things that worried people at the time that no secondary source mentions because they have since been resolved.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "John McPhee, one of the most skilled practitioner-teachers of research-based prose, describes research as the process of accumulating more material than you will ever use, and structure as the process of deciding what that material means. The structural decision — what the research is",
            { text: " for", emphasized: true },
            " — cannot be made until enough research has been done that you can see the shape of the world. How much is enough? McPhee's test: when you start hearing the same names and facts repeated across different sources, the field of your subject has begun to close. That is usually enough.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Research and World-Building Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, world-building research is most convincing when it is absorbed so completely that the writer no longer has to think about it — when the details of a world arrive in the prose the way the details of one's own life arrive, without effort or annotation. This absorption requires time and volume: reading broadly in the primary sources of a period or subculture, until the vocabulary, the physical texture, and the anxieties of that world become as natural as your own. The test is whether you can write a scene in this world without stopping to check a fact — not because accuracy doesn't matter, but because the world has become interior.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Production design begins with the writer's script. How specifically and precisely a screenplay establishes the physical world of the story determines what the director, production designer, and art director can build from. A vague script produces a vague film. In screenwriting, world-building research translates directly into the action lines: the specific objects, the accurate vocabulary, the physically precise behavior. The screenwriter's research discipline is to know enough about every environment a character moves through that the action lines feel like they were written from inside that world — that the script knows where things are and what they are called.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "World-building in memoir is reconstruction from memory and research — and the distinction between those two sources is ethically significant. The memoirist must decide which details to render from memory and which to verify, and must be transparent about which is which. Mary Karr reconstructs her childhood world in The Liar's Club from memory, and that reconstruction is itself part of the memoir's subject — the unreliability of remembered place is one of its themes. Research-based CNF like Gay Talese's immersive journalism reconstructs worlds from direct observation and primary sourcing. Both are legitimate; what matters is that the writer knows which they are doing, and tells the reader.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Sentence Variety Audit",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 14 of 60 — The Sentence Variety Audit",
          intro: [
            "Last week you returned to your earliest writing to measure growth. This week the Phase 1 culmination exercise applies the full vocabulary of sentence analysis to your best writing from the semester — not to correct it, but to audit it for pattern and variety. Strong writing can still be monotonous; a writer with genuine craft in the sentence can still default to a single type and never know it.",
            "This is the final Phase 1 exercise. Phase 2 begins next week with the cumulative sentence — the dominant sentence architecture of contemporary literary prose. But before you can build accumulating sentences, you need to be fully fluent in the foundations: to be able to name what any sentence is doing and to choose alternatives deliberately. The variety audit is the confirmation of that fluency.",
          ],
          rule: "Sentence variety is not random diversification — it is the intentional matching of sentence structure to the demands of the moment. Short sentences for emphasis and impact. Long sentences for accumulation, complexity, and suspension. The distribution of types in any paragraph should reflect the emotional and dramatic content of the moment, not habit.",
          examples: [
            {
              label: "A paragraph that defaults to one type (all right-branching, all subject-first)",
              text: "She walked down the hallway, running her hand along the wall. She stopped at the door, listening. She could hear nothing from inside. She pushed the door open slowly and stepped into the room.",
            },
            {
              label: "The same paragraph revised with intentional variety",
              text: "She walked down the hallway, running her hand along the wall. At the door she stopped — listening, hearing nothing. When she pushed it open, the room was still.",
            },
            {
              label: "What changed and why",
              text: "Sentence 1 remains right-branching (the natural flow of physical movement). Sentence 2 becomes mid-branching with a dash (the interruption performs the act of stopping). Sentence 3 becomes complex (the temporal conjunction 'when' creates the cause-and-effect of door opening and stillness arriving).",
            },
          ],
          outro: [
            "The audit process: take one full page of your best writing from this semester — a passage you consider complete, not a rough draft. Mark every sentence with its type: kernel (K), right-branching (RB), left-branching (LB), mid-branching (MB), compound (C), complex (CX), compound-complex (CC), inverted (I), fragmentary (F). Count the distribution. What is your dominant type? What type appears fewer than twice?",
            "The revision step is surgical, not comprehensive: identify two or three moments where the structure you chose is fighting the content — where a compound sentence is claiming equivalence between two ideas that are not equivalent, where a right-branching sentence is rushing past something that deserves to arrive slowly. Revise only those. The goal is not maximum variety. It is intentional variety that serves the material.",
          ],
          exercise:
            "Complete the full variety audit on one page of your best writing from this semester: label every sentence, count the distribution, identify the over-used type and the absent types. Then write a two-sentence analysis: what does the distribution tell you about your prose habits? Finally, revise two sentences — one because it is using the wrong structure for what it is doing, one because it is a default where a more precise structure would do better work.",
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
              title: '"Frank Sinatra Has a Cold"',
              author: "Gay Talese",
              href: "https://www.esquire.com/news-politics/a638/frank-sinatra-has-a-cold-gay-talese/",
              note: "Free at Esquire online. This 1966 article is the canonical example of immersive research and world-building in creative nonfiction — Talese never interviewed Sinatra directly but spent weeks in his world, accumulating the specific sensory and social detail that makes the piece feel like total inhabitation. Read it as a study in how primary-source research produces a different texture than secondary-source research. Mark every detail that could only have come from being physically present in this world.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "The Great Gatsby, Chapter 1",
              author: "F. Scott Fitzgerald",
              href: "https://www.gutenberg.org/ebooks/64317",
              note: "Free on Project Gutenberg. Read Chapter 1 only — the establishment of the novel's world in approximately 5,000 words. This is the economy of world-establishment at its most precise: Fitzgerald sets the social, geographic, and moral landscape of the novel's world in a single chapter without ever feeling like he is providing background. Track the specific researched details — the geography of West Egg and East Egg, the period vocabulary, the social codes — and ask how he makes them feel like furniture rather than insertion.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Draft No. 4: On the Writing Process",
              author: "John McPhee",
              href: "https://bookshop.org/p/books/draft-no-4-on-the-writing-process-john-mcphee/6697453",
              note: 'Read the chapter titled "Structure." McPhee is the most systematic practitioner-teacher of research-based prose writing, and his account of how structure and research interact — how you cannot know what the material means until you have enough of it, and how the structural decision is always a decision about what the research is for — is the most practical treatment of this problem anywhere in print.',
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Five Details That Don't Announce Themselves",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Choose a real historical period, profession, subculture, or specific community for a new piece of writing — a world you know less well than the world you wrote in last week. Spend one focused hour researching it: reach for primary sources wherever possible (firsthand accounts, archival materials, period journalism, oral histories, trade publications from within the community).",
            "Then write a scene set in this world that incorporates five researched details. The constraint: not one of the five details should feel like inserted research. Each must arrive through character action, dialogue, or the focalized perception of a consciousness that belongs to this world. No detail should stop the prose to explain itself. No character should describe their own world to another character who would already know it.",
            "After writing: mark the five researched details in the text. For each, write a single sentence identifying what source it came from and how you deployed it — through action, through dialogue, through filtered perception, or through what a character notices and does not notice. This annotation is for you, not for the draft.",
          ],
          target: "700–1,000 words",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 14 — Primary Source Research",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Perplexity AI",
          intro:
            "This week's AI tool is Perplexity AI (perplexity.ai), not Claude or ChatGPT. Perplexity is designed for research — it retrieves current information from the web with source citations and can be directed toward primary and archival sources in ways that general-purpose language models cannot. Use it as a research assistant, not as a writing assistant.",
          prompt:
            "Use Perplexity to research your chosen world. Begin with a broad query about the period, profession, or subculture — then narrow. After the broad search, ask Perplexity specifically: 'Find three primary sources about [your subject] — firsthand accounts, archival materials, or contemporary journalism from within the period or community rather than retrospective analysis.' Follow at least two of the source links it returns and read the originals, not Perplexity's summary of them.",
          questions: [
            "What did the primary sources tell you that secondary sources hadn't?",
            "Which specific detail — from a primary source — surprised you most?",
            "Where in your scene did a primary-source detail change something you had already written?",
            "What gap in your knowledge did the research reveal — what would you need to know to write this world at full depth?",
          ],
          note: "The most valuable research is usually in the gap between what secondary sources describe and what primary sources actually show. Secondary sources tell you what happened; primary sources tell you what people worried about, what they reached for, what vocabulary was in use, what smelled wrong. That texture is what makes a world feel inhabited rather than reconstructed.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Expert Reader",
      blocks: [
        {
          type: "tip",
          icon: "🔬",
          name: "Find Someone Who Was There",
          paragraphs: [
            "Before submitting any work set in a world that isn't yours by lived experience — a specific culture, profession, subculture, historical period, or community — find at least one reader with direct knowledge of that world and ask two questions: what feels authentic, and what rings false? Research can get you close; lived experience catches what research misses. The expert reader is not an editor; they are a consistency check on the invisible knowledge you haven't yet acquired.",
            "This is not a substitute for doing the research yourself. The expert reader who corrects your work without you having done the underlying research will make you accurate but will not make you fluent. Fluency — the ability to inhabit a world without checking — requires enough primary-source immersion that the world becomes interior. The expert reader confirms the result; the research produces it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The World You Know From the Inside",
      blocks: [
        {
          type: "journal",
          title: "The World You Know From the Inside",
          question:
            "What world do you know from the inside that most people don't? A profession, a subculture, a region, a family structure, a faith tradition, a particular kind of loss or illness or institution — a world with its own vocabulary, its own physical texture, its own codes for what can and cannot be said in public. Describe what this world looks like, sounds like, smells like to someone who doesn't belong to it. Then describe what they would miss — what is invisible to the visitor that is the world's actual substance to the person who lives in it. That gap between the visible and the invisible is your material.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Every writer has at least one world they know from the inside that most people don't. The fiction that emerges from that inside knowledge — not documented, not explained, but inhabited — is almost always the most credible work a writer produces. It is the world you don't have to research because you already carry it.",
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
            "By the end of this week, you should have: written a scene in a researched world in which five primary-source details arrive through character and action rather than narrated information; completed the sentence variety audit on a page of your best writing and revised two sentences where structure was fighting content; read the Talese piece as a model of what immersive primary-source research produces; and used Perplexity AI to locate primary sources and followed at least two to their originals.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 15",
          paragraphs: [
            "Week 15 is the first of three annual cross-genre synthesis weeks — a week when all three tracks read across genre lines and examine the same craft problem through different forms. The subject this week is space and physical scene: how literary fiction, screenwriting, and creative nonfiction each handle the problem of placing the reader in a physical environment. You will write the same scene in three different genres and discover what each form uniquely enables — and what each must sacrifice.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A note on the Phase 1 close: with this week's variety audit complete, you have finished the sentence foundations curriculum. Fourteen weeks of building the vocabulary to see what a sentence is doing — branching, opening, joining, inverting, varying. Phase 2 begins in Week 16 with the cumulative sentence: the base clause extended by free modifiers, adding perception and texture and time. You will use everything from Phase 1 to build it.",
          ],
        },
      ],
    },
  ],
};
