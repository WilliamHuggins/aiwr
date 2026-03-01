import type { WeekData } from "@/lib/mfa/types";

export const week6Data: WeekData = {
  weekNumber: 6,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Opening Strategies — The First Page as a Contract",
  emphasizedWord: "The First Page as a Contract",
  deck: "The first page of a piece of writing makes a contract with the reader: it establishes the narrative voice, sets the tonal register, introduces the governing question that will organize the reader's experience, and makes an implicit promise about what kind of story this will be. Breaking that contract — changing tone radically, shifting the governing question, abandoning the voice — is a serious craft problem. This week studies how master writers open their work, what promises those openings make, and how to build first pages that honor their contracts.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "42 of 108" },
    { label: "Craft Focus", value: "Opening Strategies" },
    { label: "Grammar", value: "Phase 3 · Adjective & Adverb Clusters" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Contract and Its Terms",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The opening page is the most consequential page of any piece of writing — not because it is the best writing, not because it contains the work's most important moment, but because it is the page that determines whether the reader will read the second page. And it does this not primarily through plot or tension or hook — those are screenwriting terms whose literary equivalents are considerably more subtle — but through the establishment of a relationship. The reader who begins a piece of writing is asking, consciously or not: who is speaking to me, what are they asking me to pay attention to, and can I trust that paying attention will be worth the time? The opening page answers those questions, and its answers constitute the contract.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The contract has four terms. The first is voice: the reader should know within the first paragraph what kind of consciousness is organizing this experience — its register, its relationship to the material, its degree of irony or earnestness or formal distance. The second is governing question: not the plot question (who did it, will they get together) but the deeper question the work is actually investigating — what this story or essay is ",
            { text: "about", emphasized: true },
            " beneath its subject. The third is tonal register: the emotional key in which the work is written, which is a promise about what the reader will be asked to feel. The fourth is narrative mode: the relationship between the narrator and the events — how close, how distant, how reliable, how omniscient.",
          ],
        },
        {
          type: "pullquote",
          quote: "The opening paragraph of a novel or story should contain the germ of everything that follows. Rereading the first paragraph after finishing the work should feel like inevitability.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Opening Failures and Their Corrections",
          paragraphs: [
            "Beginning too early — with setup, context, or backstory the writer needed to write before finding the story. The correction: identify the last possible moment at which the narrative can begin and still establish everything the reader needs. That moment is almost always later than the current opening. The rule of thumb: if the first scene of the current draft is the writer finding the story, the story begins in the second scene. Cut the first scene and begin in media res — with something already in motion, a situation already charged, a question already present that the reader needs to see answered.",
            "The throat-clearing opening — a first sentence (or first paragraph) that exists to establish the writer's presence before the narrative begins. 'I was born in a small town in Ohio.' 'It was the summer everything changed.' 'My grandmother always said.' These sentences are true, perhaps, and may be well-written, but they are performing a kind of waving-to-the-reader before the story starts. The correction: find the first sentence that is already inside the story, not approaching it from the outside.",
            "The contract broken immediately — an opening that establishes a tonal register, voice, or governing question that the rest of the piece does not honor. The opening page of a comic novel in the mode of a tragedy, the opening of a lyric essay in the mode of a journalistic report, the opening that promises intimacy and delivers distance. The reader who feels betrayed by a broken contract does not usually read the rest with goodwill. The correction: after writing the full draft, reread the opening with the question: does this opening promise what the work delivers?",
            "The governing question absent or wrong — an opening that creates plot questions (what will happen next?) without creating the deeper question (what does this mean, what is this story investigating?) that sustains a reader through a long work. Plot questions create page-turning anxiety; governing questions create the investment that makes a reader care about the answer. The correction: identify the work's governing question — the thing the piece is actually trying to understand — and trace it back to the opening. Is it present in the first page? If not, how can the opening be revised to introduce it?",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The Ten Openings exercise — writing ten different first paragraphs for the same piece — is this week's primary analytical tool. Its purpose is not to find the best opening from among the ten but to discover what the work's contract actually is: which terms of which opening feel most like the true beginning of this specific piece, and why. The writer who can articulate why one opening is truer than another has articulated something about the work that no amount of drafting could have made equally clear. The analysis of the ten openings is often more important than any single opening among them.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "First Pages Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The opening paragraph of a novel or story should contain the germ of everything that follows: the governing question, the tonal register, the narrative mode, the voice in full operation. Rereading the first paragraph after finishing the work should feel like inevitability — the reader should recognize that everything was already present in the beginning, that the opening was a promise the work has now fulfilled. The practical implication: the opening is usually written last, or heavily revised last, because only after completing the draft does the writer know what the opening needs to contain. The thesis opening written in Year One, Week 36 was a declaration of intent toward a work not yet written. The opening that the completed thesis needs may be a different opening entirely.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay's first ten pages are read by coverage readers — the industry gatekeepers who determine whether a script advances to a producer's desk — to decide whether to continue. Every page should compel the next, not through manufactured tension but through the quality of attention the writing demands. The cold open (the scene before the title card) is a genre-specific tool that creates immediate momentum: *The Sopranos* pilot opens with Tony Soprano in a therapist's waiting room staring at a woman's legs, and in those first thirty seconds the show's entire moral terrain — desire, violence, domesticity, self-examination — is established. The pilot opening is the show's thesis. For playwrights, the first page establishes the theatrical world's rules: the level of naturalism, the relationship between the stage and the audience, the register of the language.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The personal essay's opening must accomplish three things simultaneously: establish the narrator's credibility (the reader must trust this voice to guide them), introduce the essay's central question (not the topic but the question the essay is genuinely investigating), and compel the reader to continue (the momentum that the first page creates must carry the reader into the second). The most common opening failure in CNF is beginning too far back — with the family history before the specific moment, with the historical context before the personal stake, with explanation before experience. The correction is always the same: begin in the scene that most fully embodies the question, and let the context arrive as it is needed.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 6 — Adjective & Adverb Clusters: The Danger and the Possibility",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 42 of 60 — Modifier Clusters: When Density Serves and When It Clutters",
          intro: [
            "Adjective and adverb clusters — multiple modifiers stacked before a noun or around a verb — are Phase 3's most double-edged construction. Used with precision, they create extraordinary density, a layered perception of a single thing that no single modifier could achieve. Used carelessly, they create clutter: the writer reaching for specificity and producing only noise.",
            "The discipline of modifier clusters begins with a question about each modifier's contribution: is this adjective doing work that no other adjective in the cluster is doing? Three adjectives that mean the same thing waste two of them. Three adjectives in genuinely different registers — different dimensions of the thing being modified, different sensory or conceptual angles — create a productive tension in which each one sharpens the others. The same principle applies to adverbs: an adverb modifying a verb usually signals an underworked verb, while an adverb modifying an adjective or another adverb can create nuance that the modifier alone cannot achieve.",
          ],
          rule: "The modifier audit is the practical tool: for every adjective cluster, ask whether each modifier is doing distinct work — whether it adds a dimension the others do not. For every adverb modifying a verb, ask whether a stronger verb eliminates the need for the adverb. 'He ran quickly' is weaker than 'he sprinted' because 'quickly' tells the reader what 'sprinted' shows. But 'almost unbearably cold' is stronger than 'very cold' because 'almost unbearably' adds the dimension of the perceiver's threshold — how close to the edge of tolerance the cold is — that 'very' cannot. The adverb that modifies degree rather than manner is often worth keeping; the adverb that merely intensifies is almost never worth keeping.",
          examples: [
            {
              label: "Productive cluster — three genuinely distinct registers",
              text: "A cold, clinical, somehow erotic silence. [Three adjectives, three different dimensions: temperature/sensation, quality/register, and the paradoxical third that complicates both. No two of the three are doing the same work.]",
            },
            {
              label: "Wasted cluster — three adjectives meaning the same thing",
              text: "A stunned, shocked, bewildered crowd. [All three mean the same state of being surprised and unable to process; cutting to 'a stunned crowd' loses nothing and gains clarity and rhythm.]",
            },
            {
              label: "Adverb eliminating vs. adverb adding dimension",
              text: "Eliminating: 'She whispered softly' — whispered already implies softness; 'softly' is redundant. Adding dimension: 'She whispered almost inaudibly' — 'almost inaudibly' specifies how close to the threshold of hearing the whisper was, which 'whispered' alone cannot convey.",
            },
            {
              label: "The modifier audit applied to an opening paragraph",
              text: "The modifier audit is most consequential at the opening page level, where every word of every sentence is load-bearing. Circle every adjective and every adverb in your current thesis opening. For each: could it be cut without loss? If yes, cut it. For clusters: does each modifier do distinct work? If not, cut to one. What remains after the audit is the modifier work the opening actually needs.",
            },
          ],
          outro: [
            "The relationship between modifier discipline and this week's opening strategies topic is direct: the opening page's contract is established in part through the quality of its modifier choices. A first page cluttered with adjectives signals a writer who does not trust their nouns; a first page with adjectives used precisely signals a writer who knows what they are looking at. The reader registers this trust or distrust in the first hundred words, often before they can articulate why one opening holds their attention and another does not.",
            "The modifier audit is a revision tool, not a drafting one — during drafting, modifiers proliferate because the writer is finding the thing being described. In revision, the audit asks which modifiers the prose has found and which it has merely reached for. The ones it has found are worth keeping; the ones it has reached for are worth cutting.",
          ],
          exercise:
            "Take one page of your current thesis draft — ideally the opening page or a scene you consider strong. Circle every adjective cluster and every adverb. For each adjective cluster: are all modifiers doing genuinely distinct work? If not, cut to the one that is doing the most. For each adverb modifying a verb: is there a stronger verb that eliminates it? If yes, replace. For each adverb modifying an adjective: is it adding dimension (almost, barely, somehow) or merely intensifying (very, quite, really)? Cut all intensifiers; keep all dimension-adders. Write a 100-word reflection on what the audit reveals about your current modifier habits.",
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
              title: "First pages of ten books in your genre",
              author: "Your genre's masters",
              href: "",
              note: "Use books already on your reading list or books you admire in your genre. Read only the first page of each — the first 200 to 350 words. For each, identify: the contract it makes (voice, governing question, tonal register, narrative mode), where the story actually begins (is there preamble before the real opening moment?), and what the first sentence promises. After reading all ten, identify the three openings whose contracts feel most like the contract your thesis is trying to make — and analyze specifically what they are doing that yours might learn from.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Burning Down the House, opening strategies essay",
              author: "Charles Baxter",
              href: "https://bookshop.org/p/books/burning-down-the-house-charles-baxter/6697453",
              note: "Purchase. Baxter's essay on opening strategies is the most analytically precise account available of what the opening page is doing and what it owes the reader. Read for his account of the contract's terms — what the opening establishes, what it promises, and how the work can fail its opening even while executing its subsequent pages well. Apply Baxter's framework to three of the ten openings you read for the first item.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Breaking Bad pilot and The Sopranos pilot cold opens",
              author: "Vince Gilligan / David Chase",
              href: "https://www.imsdb.com/scripts/Breaking-Bad.html",
              note: "Scripts available free online. Read only the cold open of each — the scene before the title card — as a study in contract-making under maximum compression. The Sopranos cold open establishes the show's entire moral terrain in its first two minutes. Breaking Bad's cold open (Walter in his underwear in the desert) promises the show's trajectory before the pilot has introduced its protagonist's situation. For screenwriters especially: analyze what each cold open establishes and what it withholds, and how those choices shape the viewer's relationship to everything that follows.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Ten Openings + Thesis Session 6",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Ten Openings (1,300–1,400 words total): Write ten different first paragraphs of approximately 100 words each for the same piece — your thesis project, or a story or essay currently in progress. Each opening should make a genuinely different contract: different tonal register (comic, elegiac, urgent, detached), different point of entry (different moment in the narrative, different relationship to time), different governing question, different relationship between narrator and material. The ten openings are not ten versions of the same beginning — they are ten different beginnings, each of which implies a different work.",
            "After writing all ten, read them against each other and identify which two feel most like the true beginning of the work — the openings that are most fully in the voice and register that the piece actually requires. Write a 200-word analysis identifying what these two share that the others do not: what specific features of voice, governing question, or tonal register make them feel true? Then write a full first page of 300–400 words that synthesizes the best elements of the two strongest openings.",
            "Part Two — Thesis Session 6 (1,500–2,000 words): Write the next section of the thesis. Before the session, apply the four opening failures test to the current thesis opening: is it beginning too early? Is there throat-clearing before the story starts? Is the contract it makes one the rest of the thesis honors? Is the governing question present in the first page? Record the assessment in the session log and note any revision the opening requires — but do not revise the opening this session. The revision can wait; the forward drafting cannot.",
          ],
          target: "Ten × 100 words + 200-word analysis + 300–400-word synthesized opening + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 42 — The Contract Reader",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste all ten opening paragraphs — the 100-word versions written for this week's exercise. The AI's task is to read each as a rigorous first reader would: assessing the contract each makes, the governing question it establishes, the tonal register it sets, and whether it creates the momentum to compel a second paragraph.",
          prompt:
            "Read these ten opening paragraphs as a rigorous first reader encountering each for the first time. For each paragraph, identify: (1) the contract it makes with the reader — what it promises about voice, tonal register, and the kind of story or essay this will be; (2) the governing question it establishes — not the plot question but the deeper question the work seems to be investigating; (3) the tonal register it sets — the emotional key in which the work is written; (4) whether it creates enough momentum and curiosity to compel a second paragraph, and what specifically creates or fails to create that momentum. After assessing all ten: rank them from most to least effective as opening paragraphs, and explain the three specific strengths of the top-ranked opening.",
          questions: [
            "Does the AI's ranking match your own assessment of the two strongest openings? Where does it agree and where does it diverge — and when it diverges, what is the AI seeing that you missed, or missing that you saw?",
            "Which of the ten openings does the AI assess as making the clearest contract — the one whose promises are most specific and most fully established in 100 words? Is that the opening you would choose as the strongest? If not, what is the difference between the clearest contract and the truest beginning?",
            "Which governing question, across the ten openings, is most closely aligned with the governing question of the thesis as you described it in Year One, Week 36's Socratic inquiry? The opening that establishes the right governing question may not be the opening with the best prose — identify the tension between those two criteria and how you would resolve it in the synthesized opening.",
            "After reading the AI's assessment: revise the synthesized first page using the most precise insight from the AI's analysis of the strongest openings. The revision should be in service of making the contract more fully legible — not changing what the contract promises, but making its terms clearer in the first 300–400 words.",
          ],
          note: "The contract reader exercise uses the AI in its most useful mode for opening analysis: as a first reader who has no context beyond the paragraph itself, and whose response to it therefore replicates the experience of the reader who picks up the book without knowing anything about its author or project. The AI's reading of the contract is not definitive — it is one account of what the opening promises, and the writer's job is to use that account as a diagnostic against their own intentions. Where the AI reads a different contract than the one intended, the question is whether the prose is failing to establish the intended contract, or whether the intended contract is less right than the one the prose is actually making.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The First Line as Thesis",
      blocks: [
        {
          type: "tip",
          icon: "✍️",
          name: "What Does the First Line Promise?",
          paragraphs: [
            "The first line of a strong piece is often its thesis — not an argumentative thesis but a narrative one: the thing the entire piece is, in some sense, a working-out of. 'It was the best of times, it was the worst of times' is not a description of historical conditions — it is the novel's governing tension stated as a formal paradox that the entire book will inhabit. 'Call me Ishmael' does not introduce a character — it establishes a relationship between narrator and reader, an informality that will be ironic, a name that will be meaningful, a mode of address that is already full of the novel's quality of attention.",
            "Examine your current thesis opening's first line. What does it promise? Does the piece deliver on that promise — not just in the next paragraph but across its full length? If the first line is throat-clearing preamble rather than narrative thesis — if it exists to establish the writer's presence before the story begins rather than to begin the story — cut it and find the first sentence that is already inside the work. That sentence is usually the second or third sentence of the current opening, and the writer's hesitation before arriving at it is the preamble that has accumulated in front of it.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The First Line of the Book You Most Want to Write",
      blocks: [
        {
          type: "journal",
          title: "The First Line of the Book You Most Want to Write",
          question:
            "What is the first line of the book you most want to write? Not the book you are writing — the book you most want to write, the one that may or may not be the same thing, the one that has been waiting. Write it now. Don't think about what comes after. Don't worry about whether it is the first line of the thesis or the first line of something else or the first line of something you cannot yet name. Just write the line. Then write the second sentence. Then the third. Stop when the impulse to continue stops — not when you have produced a complete paragraph or a satisfying opening, but when the impulse runs out. What you have written is either the beginning of something or a signal about the beginning of something. Either way it is worth having.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is deliberately unbound from the thesis — it asks for the first line of the book most wanted, not the book currently being written, because the distinction between those two things is sometimes the most important information a writer can have at this stage of the program. The thesis is the work; the book most wanted is the compass. They should be the same. If they are not, the journal this week is the place to notice that, and to ask what the gap means.",
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
            "By the end of this week you should have: written ten 100-word opening paragraphs for the thesis project, each making a genuinely different contract; identified the two strongest and written a 200-word analysis of what they share; written the synthesized first page of 300–400 words; written 1,500–2,000 words of thesis in Session 6 with the four opening failures test applied to the current opening and recorded in the session log; read the first pages of ten books in your genre with contract-mapping; read Baxter's opening strategies essay; studied the cold opens of Breaking Bad and The Sopranos as contract-making under compression; completed the AI contract reader exercise and revised the synthesized opening; and conducted the modifier audit on one page of the current thesis draft.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 7",
          paragraphs: [
            "Week 7 is Endings — Arrival, Implication, and the Reader's Work. The ending of a piece of writing is where meaning crystallizes — or fails to. The three most common ending failures: the too-tidy ending that forecloses meaning by explaining it; the too-abrupt ending that abandons the reader before meaning has formed; and the false ending that concludes the surface narrative without addressing the deep one. Week 7 studies what the great endings of literary fiction actually do — and develops the vocabulary for diagnosing and revising endings in the thesis draft.",
          ],
        },
      ],
    },
  ],
};
