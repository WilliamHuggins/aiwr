import type { WeekData } from "@/lib/mfa/types";

export const week30Data: WeekData = {
  weekNumber: 30,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "The Ethics of Nonfiction — Truth, Memory, and the Limits of Reconstruction",
  emphasizedWord: "The Limits of Reconstruction",
  deck: "The ethics of creative nonfiction center on a single, irreducible tension: the memoirist uses the tools of fiction — scene, character, dialogue, interiority — to render events the reader believes, and the writer asserts, to be true. Where is the line between legitimate artistic rendering and falsification? The question has no simple answer, but it has a craft answer: transparency. The reader must be able to trust the writer's relationship to truth, and that trust is established through specific choices.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "66 of 108" },
    { label: "Craft Focus", value: "Ethics of Nonfiction" },
    { label: "Grammar", value: "Phase 5 Synthesis — Punctuation as Artistic Choice" },
    { label: "Key Deliverable", value: "600-word Ethics Position Paper" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What the Memoirist Owes — and to Whom",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Creative nonfiction operates on a contract. The contract is not written, not signed, and nowhere stated in the text — but it is present in every word of every memoir, essay, and piece of literary journalism ever published. The contract is this: the reader agrees to bring their full imaginative and emotional investment to the experience of the text; the writer agrees that the events rendered — the scenes constructed, the dialogue reconstructed, the characters drawn from life — have their source in actual experience rather than in invention. The reader's investment is contingent on the writer's honesty. When the writer violates the contract — invents events, fabricates characters, manufactures dialogue with no basis in fact — the entire edifice collapses, and it collapses not as a matter of artistic failure but as a matter of betrayal. James Frey's *A Million Little Pieces* was not simply a bad book when its fabrications were exposed; it was a violation of the reader's trust that retroactively poisoned every genuine emotion the book had produced. Oprah Winfrey's on-air confrontation with Frey was not primarily about the lies — it was about the theft: the theft of the reader's real grief, real identification, real catharsis, which had been produced by events that never happened.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "But the contract, understood strictly, creates an impossibility. Memory is not a recording device. No memoirist remembers verbatim dialogue from a conversation that occurred twenty years ago. No memoirist has perfect recall of the sequence of events, the exact quality of light, the precise words spoken at the moments that matter most — which are precisely the moments most susceptible to the distortions of significance, of time, of the emotional weight that memory accumulates around its most important objects. The memoirist who claims total accuracy is either lying or writing about something that happened yesterday. The craft challenge is not to achieve perfect accuracy — that is impossible — but to navigate the gap between what happened and what can be honestly rendered without falsifying either the events or the reader's trust.",
          ],
        },
        {
          type: "pullquote",
          quote: "When you have compressed, reconstructed, or composited elements of a memoir, the clearest ethical practice is disclosure — in an author's note, in the text itself, or in an acknowledgment that this is a work of memory, which is fallible. Readers are more forgiving of acknowledged imprecision than of discovered deception.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Zones of Nonfiction Ethics — Where the Line Falls",
          paragraphs: [
            "Dialogue reconstruction: The zone of greatest ethical debate. No responsible ethics statement — not Creative Nonfiction magazine's, not Brevity's, not the major publishers' — prohibits dialogue reconstruction. What they prohibit is fabrication: inventing dialogue for events that did not occur, or inventing dialogue that changes the meaning of events that did occur. The standard is faithfulness to emotional truth and general content: the reconstructed dialogue must represent what was actually said in substance and tone, even if not in exact words. The markers of legitimate reconstruction: the writer was present, the exchange occurred, the reconstruction is consistent with the writer's best memory of its substance. The markers of fabrication: the exchange did not occur, or the reconstruction attributes to a real person statements they never made and would not have made. The ethical practice: when reconstructing dialogue, stay close to what you actually remember; use italics or a note when the reconstruction is substantially uncertain; never put words in someone's mouth that change who they are in the narrative.",
            "Compression and composite scenes: Legitimate in memoir, with disclosure. Compression — collapsing multiple events into one, omitting events that are irrelevant to the narrative's arc — is not only permissible but necessary; a memoir that rendered every event in a life with equal weight would be unreadable. The ethical requirement is that compression not falsify causality: if the compressed scene implies that event A caused event B, and the actual sequence was more complicated, the compression has created a false impression of how the person's life worked. Composite scenes — merging two actual events into one, or merging two actual people into one composite character — are more ethically fraught and require explicit disclosure. Mary Karr, in *The Liar's Club*, uses an author's note to acknowledge that certain scenes are her memory of events and may not match the memories of others who were present. This acknowledgment does not undermine the memoir; it establishes the kind of trust that makes the memoir's emotional claims credible.",
            "The ethics of writing about living people: The memoirist writes about real people who did not consent to be characters. The ethical obligations are different from — and in some ways more demanding than — the legal obligations. The legal standard for defamation requires falsity plus harm; the ethical standard for memoir requires something harder: accuracy, fairness, and a specific kind of honesty about the writer's own position. Writing about a parent, a former partner, an ex-friend: the memoirist has access to information and a perspective that the subject cannot control or counter. The ethical response is not to soften the portrait — false softening is its own form of dishonesty — but to render the subject with the same commitment to complexity and specificity that the memoirist brings to their own self-portrait. The person who hurt the memoirist should be as fully human in the memoir as the memoirist is. They had reasons. They had their own version of events. The memoir does not have to present their version, but it should be written with an awareness that their version exists.",
            "Truth and the fiction writer's obligations: The ethics of nonfiction apply across all three tracks, because all three tracks use real people. The fiction writer who draws heavily on actual events and actual people is not exempt from ethical obligations simply because the cover says 'novel.' *Primary Colors* was published as fiction; its subjects were not confused about what it was. The roman à clef has a long literary history and a genuine artistic justification — the distance of fiction allows the writer to see more clearly than memoir's proximity — but it does not eliminate the obligation to render real people with accuracy and fairness, even in fictional guise. The screenwriter adapting real events — the biopic, the prestige drama based on actual cases — has explicit ethical obligations to the people represented and to the historical record. Research, consultation, and a genuine commitment to accuracy rather than convenience are the ethical requirements, regardless of the 'based on a true story' disclaimer.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Ethics of Representation Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer's ethical obligations to real people are less legally constrained than the memoirist's but not less real. The roman à clef — fiction that is clearly based on actual people and events, with the serial numbers filed off but the originals recognizable — carries the full ethical weight of memoir without memoir's explicit truth-contract. The fiction writer who draws a character directly from a living person has an obligation to that person's full humanity: the fictional character should be as complex, as internally consistent, as humanly comprehensible as the person they are drawn from. Using a real person as the template for an antagonist or a grotesque is an ethical choice, not just a creative one, and the question 'would this person recognize themselves, and if so, would the portrait be fair?' is a genuine ethical test. The fictional frame does not provide infinite protection from the obligation to represent people honestly.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter adapting real events — the biopic, the legal or political drama, the true crime adaptation — operates in the zone of highest ethical and legal scrutiny. The 'based on a true story' or 'inspired by real events' disclaimer has specific legal meaning and does not grant unlimited license to fabricate. Composite characters must be disclosed; invented dialogue attributed to real people can create legal exposure; events attributed to real people that did not occur are actionable if defamatory. The ethical practice: research thoroughly, consult with people who were present, and be honest with yourself about which choices are artistically necessary and which are merely convenient. For playwrights writing verbatim theater — plays constructed from interviews and public record — the ethical obligations are explicit and stringent: the people who gave interviews are entitled to the protection of accuracy.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Mary Karr's three-book memoir sequence is the model for ethical practice at the highest level of the form: she acknowledges in each book that her memory is fallible, that others who were present will remember differently, and that the events are rendered as she experienced them rather than as objective history. This acknowledgment does not undermine her authority — it establishes it, because the reader can trust that Karr is not claiming more than she can honestly claim. The *Lifespan of a Fact* debate between John D'Agata and fact-checker Jim Fingal is the most concentrated available argument about where the line falls in literary journalism specifically: D'Agata's position (the essayist's obligation is to emotional truth and artistic coherence, not to journalistic accuracy) is argued seriously and at length, and Fingal's counterargument (every invented or altered 'fact' is a theft from the reader's trust) is equally serious. Read both positions and locate your own. The position paper this week requires you to do exactly that.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 5 Synthesis — Punctuation as Artistic Choice",
      blocks: [
        {
          type: "grammar",
          title: "Phase 5 Complete — Every Mark Is a Decision",
          intro: [
            "Phase 5 of the grammar curriculum (Weeks 19–30) has covered the full range of punctuation as craft: the semicolon as a mark of deliberate distance between related clauses; the em dash as interruption, amplification, or pivot; the colon as a mark of formal delivery; the comma splice as the refusal of distance; the sentence fragment as the refusal of completion; the ellipsis as trailing dissolution; the period as the mark of genuine completion. Each of these has been introduced as a rhetorical instrument — a choice rather than a rule — and the synthesis exercise this week asks you to apply that framework to your own draft.",
            "The synthesis exercise is not a mechanical audit. It is an act of editorial reading at the mark level: two pages of thesis prose read with the question 'what is this doing?' rather than 'is this correct?' Every punctuation mark is a decision. Most decisions made in first drafts are automatic — the comma that arrives from habit, the period that arrives from grammatical necessity rather than from rhetorical intention, the em dash that was typed because the sentence needed something and the em dash was what the fingers reached for. The synthesis exercise distinguishes the automatic marks from the intentional ones and asks whether the automatic marks should be made intentional, changed, or left as they are.",
          ],
          rule: "For each mark in the two annotated pages, apply the Phase 5 vocabulary: Is this semicolon maintaining a deliberate distance between two clauses that a comma would collapse and a period would separate too completely? Is this em dash interrupting, amplifying, or pivoting — and is that the effect this sentence needs? Is this colon's payload formal enough to earn the colon's formality, or would a comma or dash serve better? Is this comma splice collapsing a genuine intimacy — are these two clauses so close that a period between them would falsify the relationship — or is it an unconsidered default? Is this period marking genuine completion, or is the sentence continuing past the moment it should have stopped? Is this fragment isolated deliberately — does the isolation produce an effect a complete sentence would not — or did it arrive by accident? Write the 200-word punctuation analysis after annotating: which marks are doing conscious rhetorical work, which are automatic, and which should be changed.",
          examples: [
            {
              label: "The full Phase 5 toolkit applied to a single paragraph",
              text: "Consider a paragraph that contains: a semicolon between two independent clauses ('She did not leave; she had nowhere to go'); an em dash used for amplification ('The house — her grandmother's house, the only place she had ever been completely herself — sold in four days'); a sentence fragment ('Four days.'); a comma splice ('She drove past it twice, she couldn't stop herself'); and a colon introducing a specific detail ('She found what she had forgotten: the smell of the kitchen in the mornings, coffee and something else, something older, something she had no name for'). Each mark is doing specific work. The semicolon maintains the distance between the two clauses while asserting their connection. The em dash amplifies — the parenthetical description earns the interruption by charging the noun with history. The fragment isolates the number for maximum impact. The comma splice collapses the distance between the compulsion and its enactment. The colon delivers the payload with formal announcement. None of these is automatic; all are intentional; all can be named.",
            },
            {
              label: "The automatic mark — what it looks like and what to do with it",
              text: "The automatic comma is the most common automatic mark in literary prose: the comma that arrives because there is a pause in the sentence, or because the sentence felt long, or because the writer was unsure whether the clause was restrictive or nonrestrictive. The synthesis exercise catches these by asking not 'is this comma correct?' but 'what is this comma doing?' If the answer is 'holding two parts of the sentence apart' — a purely grammatical function rather than a rhetorical one — the comma may be correct without being intentional. The question is whether making it intentional would improve the sentence: could a semicolon introduce a stronger relationship between the clauses? Could the em dash create a more dynamic pause? Could the period separate them entirely and gain something from the separation? The automatic mark is not necessarily wrong; it is simply unrealized.",
            },
          ],
          outro: [
            "Phase 5 is now complete. Its synthesis — the framework of punctuation as craft, every mark as a rhetorical choice — is the tool you bring to every revision pass from this point forward. The question 'what is this doing?' applied to every mark is the question that distinguishes line-level editing from proofreading. Proofreading asks whether the mark is correct. Line-level editing asks whether it is the right choice — whether it is producing the effect the sentence requires — and that question has no answer in a style guide.",
          ],
          exercise:
            "Take two pages of your thesis draft — the most recent two pages, written closest to now. Annotate every punctuation mark using the Phase 5 vocabulary: name what each mark is doing, or note that it is automatic. Write a 200-word punctuation analysis: which marks are performing conscious rhetorical work, which are automatic, and which should be changed and why? Then make the changes. The revised two pages should be submitted as part of this week's thesis session.",
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
              title: "The Art of Memoir — chapters on truth and ethics",
              author: "Mary Karr",
              href: "https://bookshop.org/p/books/the-art-of-memoir-mary-karr/6697453",
              note: "Purchase. Karr's account of the memoirist's ethical obligations is the most practically useful available: she is specific about what she considers permissible (dialogue reconstruction that is faithful to substance and tone), what she considers impermissible (inventing events, fabricating emotions she did not feel), and how she handles the memoir's inherent subjectivity (by acknowledging it explicitly). The ethics chapters should be read alongside the position paper exercise — Karr's framework may be the starting point for your own position, or the position you argue against.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Lifespan of a Fact",
              author: "John D'Agata & Jim Fingal",
              href: "https://bookshop.org/p/books/the-lifespan-of-a-fact-john-d-agata/6697453",
              note: "Purchase or library. The most concentrated available debate about fact and art in nonfiction. D'Agata is the literary journalist who altered facts for artistic effect; Fingal is the fact-checker who caught and challenged each alteration. Their exchange — presented in the book as a running margin argument — is the ethics of nonfiction conducted in real time, and it is more illuminating than any theoretical statement of principle because both positions are argued seriously and at length. D'Agata's argument is not frivolous: he is making a genuine case for the primacy of artistic coherence. Fingal's counterargument is not pedantic: he is making a genuine case for the reader's trust. Read the whole book. You will need to locate your own position in relation to both.",
              badge: "Purchase / Library",
            },
            {
              number: "03",
              title: "The Oprah / James Frey affair — A Million Little Pieces",
              author: "Widely available online",
              href: "https://www.thesmokinggun.com/documents/celebrity/man-who-conned-oprah",
              note: "Free online. Research the full account of the fabrications in *A Million Little Pieces*, the Smoking Gun's original exposé, Frey's initial defense, and Oprah Winfrey's on-air confrontation. Then read the subsequent discussion in the publishing industry about what the affair revealed about nonfiction contracts and disclosure practices. The Frey case is the most instructive available case study in what happens when the nonfiction contract is violated: not because Frey is the worst offender in the history of the form — he isn't — but because the public confrontation made the stakes of the violation unusually visible. The reader's anger was not about the lies per se; it was about the theft of their emotional investment.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Ethics Position Paper + Spring Thesis Session 12",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Ethics Position Paper (600 words): Write a 600-word essay on your own ethical position as a creative nonfiction writer — or, if your thesis is fiction or screenwriting, as a writer who uses real people in any genre. This is a position paper, not a personal essay: it should be argued, not narrated. Address all of the following: What is your definition of the line between legitimate artistic rendering and falsification? How will you handle dialogue reconstruction in your thesis — what is your standard for faithfulness? What is your position on compression and composite scenes — are they permissible, and if so, under what conditions and with what disclosure? What are your obligations to the living people who appear in your work? What disclosure obligations do you feel toward your readers about the memoir's relationship to memory and accuracy?",
            "The position paper should stake actual positions, not hedge. 'It depends' is not a position; it is a deferral. You may qualify your positions — 'I permit dialogue reconstruction within these limits' is a position; 'I allow compression only when causality is not falsified' is a position — but you must have positions. The paper will be a useful document in Year Three when specific ethical decisions in the revision process require a standard to apply.",
            "Part Two — Spring Thesis Session 12 (1,500–2,000 words): Write the next section of the thesis, incorporating the Phase 5 punctuation synthesis into the session's attention. The session log should note whether the ethics position paper has surfaced any material in the thesis that requires ethical reconsideration — any scene, any character, any reconstruction that the position paper's standards reveal as uncertain.",
          ],
          target: "600 words (position paper) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Both Sides of the Reconstruction Question",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This week's AI exercise asks the AI to argue both sides of the central nonfiction ethics debate with equal rigor — and then asks you to locate your position in relation to both. The AI is useful here as a research and argumentation tool, not as an ethical authority.",
          prompt:
            "Present both sides of this ethical question with equal rigor: In creative nonfiction, is it ethically permissible to reconstruct dialogue that the writer does not remember verbatim, provided the reconstruction is faithful to the emotional truth and general content of the exchange? Present the strongest possible arguments for permissibility and the strongest possible arguments against. Then: what do the major ethics statements from CNF publications — Creative Nonfiction magazine, Brevity — say about this question? Finally: what are the key differences between John D'Agata's position in The Lifespan of a Fact and the positions taken by major publishers and editors regarding factual accuracy in literary nonfiction?",
          questions: [
            "After reading both sides: where do you land? The position paper exercise requires an actual position, and the AI's presentation of both sides is designed to force one. The argument for permissibility is not frivolous — most working memoirists reconstruct dialogue, and the best memoirists do it with rigor and disclosure. The argument against is not pedantic — the reader's trust is the foundation on which the entire form stands, and every falsification, however small, is a withdrawal from that foundation. Name your position specifically: not 'it depends' but 'reconstruction is permissible when [specific conditions] and impermissible when [specific conditions].'",
            "The AI's account of the major ethics statements: does the standard articulated by Creative Nonfiction magazine or Brevity match your own position, or does it require modification? If it requires modification, what is the modification and why? The major publications' ethics statements are not authoritative — they are working standards developed through decades of editorial practice — but they represent the field's collective negotiated position, and departing from them requires a justification.",
            "The D'Agata position versus the publishers' position: this is the most important fault line in contemporary nonfiction ethics. D'Agata argues that the essay's obligation is to artistic coherence and emotional truth; publishers and editors argue that the obligation is to factual accuracy, with artistic license explicitly disclosed. Where does your thesis fall on this spectrum? Are there sections of the thesis where you have made choices that align more with D'Agata's position than with the publisher's standard — where you have prioritized artistic coherence over strict factual accuracy? Name them. The ethics position paper should address these sections explicitly.",
            "The limits of the AI's authority on this question: the AI can present arguments, summarize positions, and describe what major publications have said. It cannot make ethical judgments on your behalf. The question 'is this reconstruction permissible?' has no answer in the AI's training data; it has an answer in the specific context of your memoir, your subject, your relationship to the people you are writing about, and your contract with your readers. Use the AI to clarify the arguments; make the ethical decisions yourself.",
          ],
          note: "The AI workshop exercise this week does not produce a draft revision or a craft exercise — it produces a framework for ethical reasoning that you apply in the position paper and in the thesis's remaining revision. The AI is useful here because ethical questions in nonfiction benefit from having both positions argued seriously before a position is taken, and the AI can do that quickly and comprehensively. The positions it presents are real; the arguments it makes are arguments working writers and editors have actually made. The limitation: the AI has no stake in your specific situation, and the ethics of writing about your specific people in your specific circumstances require judgment that only you can exercise.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Disclosure Practice",
      blocks: [
        {
          type: "tip",
          icon: "🔍",
          name: "Acknowledge Imprecision — Don't Conceal It",
          paragraphs: [
            "When you have compressed timelines, reconstructed dialogue, or used composite scenes in your memoir or creative nonfiction, the clearest ethical practice is disclosure. Not confession — disclosure. The author's note is the conventional vehicle: a brief statement, before the narrative begins, acknowledging that the work is a memoir and that memory is fallible; that some dialogue has been reconstructed from the writer's best recollection; that some identifying details of secondary figures have been changed; that certain events have been compressed. This acknowledgment does not undermine the memoir's authority — it establishes it, by demonstrating that the writer understands the form's limitations and has been honest about them.",
            "Readers are more forgiving of acknowledged imprecision than of discovered deception. The reader who learns in an author's note that dialogue has been reconstructed brings that knowledge to the reading and adjusts their expectations accordingly — they are reading memory rendered as scene, not a transcript. The reader who discovers after the fact that dialogue was fabricated — or, worse, that events did not occur — experiences betrayal. The author's note converts the memoir's inherent limitations into part of its honest contract with the reader. It is a craft document as much as a legal one: the writer who has thought carefully about what to disclose and why is a writer who understands the form.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Ethically Uncertain Material",
      blocks: [
        {
          type: "journal",
          title: "Write About the Uncertainty",
          question:
            "Is there a part of your thesis material that you are ethically uncertain about? A reconstruction that you are not confident is faithful to what was actually said. A compression that may have falsified causality. A composite scene. A portrait of a living person that you worry is unfair, or that is fair but that the person would experience as unfair, which is a different question. A section whose emotional truth you trust completely but whose factual accuracy you cannot verify. Write about the uncertainty for twenty minutes — not about how to resolve it, but about what exactly it is. What specifically is uncertain: the events, the dialogue, the characterization, the interpretation? What would it mean to resolve the uncertainty in the direction of strict accuracy? What would be lost? What would it mean to keep the current rendering? What is at risk? After writing, identify the responsible path forward: additional research, disclosure in an author's note, a conversation with someone who was present, a revision of the scene. The ethical uncertainty is not a creative problem; it is a craft and integrity problem, and naming it precisely is the first step toward addressing it.",
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
            "By the end of this week you should have: written the 600-word ethics position paper (a real document, staking actual positions, saved for use in Year Three revision); written 1,500–2,000 words of thesis in Session 12; annotated two pages of thesis prose for all punctuation marks using the Phase 5 vocabulary and written the 200-word punctuation analysis; made the revisions the analysis indicates; read Karr's ethics chapters; read or worked through *The Lifespan of a Fact*; researched the Frey affair; completed the AI ethics workshop with all four reflection questions; identified and written about any ethically uncertain material in the thesis.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Weeks 31–33",
          paragraphs: [
            "Weeks 31 through 33 are intensive thesis production weeks with lighter structured craft content. The aim across three weeks is 4,000–8,000 words of thesis material — the final sustained drafting push of Year Two before the manuscript review, revision plan, and synthesis weeks that close the year. Each week has a craft focus (plot structures advanced, theme at book length, and voice through research), a grammar topic woven into the lecture, and an AI exercise. The production target is the priority: the craft content is in service of the writing, not separate from it.",
          ],
        },
      ],
    },
  ],
};
