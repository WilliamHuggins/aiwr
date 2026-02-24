import type { WeekData } from "@/lib/mfa/types";

export const week21Data: WeekData = {
  weekNumber: 21,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Point of View III — Second Person, Omniscient & the Unconventional",
  emphasizedWord: "Second Person, Omniscient & the Unconventional",
  deck: "Second person implicates the reader. Omniscient liberates the narrator from any single mind. Experimental hybrids break both conventions simultaneously. This week completes the POV sequence by studying the modes that most visibly expose what every narrative is always doing: making a claim about what can be known, and who gets to know it.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "POV: Second Person & Omniscient" },
    { label: "Grammar", value: "Balanced Sentences & the Rhetoric of Twos" },
    { label: "Exercise", value: "1,400 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Who Gets to Know",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Three weeks into the POV sequence, the underlying question has sharpened: point of view is not a pronoun choice but an epistemological one. Every narrative makes a claim about what can be known, who can know it, and what the act of knowing costs. First person concentrates knowledge in one fallible consciousness. Third-person limited distributes it slightly — the external narrator can occasionally calibrate distance from a single focal mind. This week's modes take more radical positions: second person folds the reader into the narrative's 'you,' making them complicit in the consciousness they are observing; omniscient lifts the narrator above any individual mind and grants a god's-eye view; and the experimental modes available in contemporary fiction break these conventions in ways that are only legible against the history of the conventions they disrupt.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Second-person narration is the rarest of the major modes, and its rarity is instructive: it is a high-risk instrument precisely because it works by implication rather than representation. When Jamaica Kincaid writes 'Girl' as a cascade of maternal instructions addressed to 'you,' the 'you' is not the reader — it is the daughter, the subject, the recipient of a voice that will not stop. But the reader is inside the 'you' anyway, addressed, implicated, unable to maintain the safe distance that third person or even first person provides. This forced intimacy is the mode's specific power. Its risk is the same: readers who resist being addressed as 'you' exit the narrative entirely, which is why second person appears most often in short, compressed forms — the lyric essay, the flash fiction, the experimental story — where the reader can be held inside the 'you' before the resistance builds.",
          ],
        },
        {
          type: "pullquote",
          quote: "Omniscient narration is an act of radical presumption: the narrator claims to know everything about everyone. The best omniscient narrators are acutely conscious of this presumption and turn it into meaning.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "Omniscient narration — the narrator who can access any character's consciousness, who knows what everyone is thinking and can move freely across time and space — is the dominant mode of the nineteenth-century novel. George Eliot in ",
            { text: "Middlemarch", emphasized: true },
            ", Tolstoy in ",
            { text: "Anna Karenina", emphasized: true },
            ", Austen in ",
            { text: "Emma", emphasized: true },
            ": these narrators hold the whole world of the novel at once, moving in and out of any character's mind as the story requires. Contemporary literary fiction has largely abandoned the mode — it can feel presumptuous, artificial, distancing — but it is undergoing a revival, and understanding it is essential both for reading the nineteenth-century canon and for recognizing the moments when a contemporary project genuinely requires a narrator who stands above every individual consciousness in the novel.",
          ],
        },
        {
          type: "card",
          title: "Three Unconventional Modes Worth Knowing",
          paragraphs: [
            "Collective 'we': The communal narrator — 'we watched from our porches,' 'we had all heard the story' — grants a kind of social omniscience without presuming individual interiority. It is the voice of community, of shared witness. Jeffrey Eugenides uses it in The Virgin Suicides; Karen Russell uses it in several stories. Its power is to make a group into a consciousness, and to leave the reader asking: who is this 'we,' and what do they want from the telling?",
            "Alternating or shifting POVs as structure: Some contemporary novels move between focal characters scene by scene or section by section — giving each a third-person limited perspective that, accumulated, creates something approaching omniscience through montage rather than through the narrator's god-eye presumption. Jennifer Egan's A Visit from the Goon Squad shifts not just POV but form — one chapter in PowerPoint slides — treating POV itself as a structural question.",
            "Tense as POV marker: Contemporary fiction sometimes uses shifts in tense (past to present, present to future) to signal shifts in narrative position or consciousness. The present-tense narrator is most often immediate; the past-tense narrator retrospective. But when a novel switches between them, the tense becomes a form of POV — signaling whose story we are in, and from what distance.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The practical lesson of the full POV sequence — first person (Week 19), third-person limited (Week 20), and this week's modes — is not that there is a correct choice for any given project, but that there is always a ",
            { text: "most honest", emphasized: true },
            " choice. The POV that makes the most honest claim about what this material can and cannot be known from the inside of. Sometimes a story is so intimate and specific to a single consciousness that only first person can carry it. Sometimes the material requires the narrator to see around the corners of any individual mind, and first person is an artificial constraint. Sometimes a project is asking to be broken — to disrupt the reader's comfortable position outside the narrative — and second person is the instrument. The question is always: what does this story require? Not what is conventional, not what is comfortable, but what the material itself demands.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Unconventional POV Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction has the widest latitude for POV experimentation — second person, collective narrators, fragmented or multiplied perspectives — precisely because the form has no external constraint (no camera, no performing body) that limits what the narrator can claim to know or be. The risk of unconventional POV in literary fiction is that formal novelty becomes a substitute for emotional or intellectual depth. Second person is powerful when it creates genuine implication; it is gimmick when it creates only strangeness. Omniscience is powerful when the narrator's access to multiple minds reveals something that no single consciousness could see; it is lazy when it is simply convenient for moving information around.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, POV is almost always third-limited (we follow one protagonist's external experience) and omniscient narration is structurally unavailable — the camera cannot be everywhere at once. Multi-protagonist films (Magnolia, Short Cuts, Babel) approximate omniscience through montage: alternating perspectives that, accumulated, give the audience information no single character has. For playwrights, the conventional theatrical contract is also third-limited (we watch from outside), but plays from Brecht through to Sarah Kane have broken this in every conceivable direction — direct address to the audience, narrators who step in and out of scenes, characters who describe their own deaths. The stage's visibility makes its conventions legible — and therefore productive to break.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Second person in CNF is most often a dissociation technique: the memoirist cannot approach a memory in the first person because the 'I' is too close to the wound, so the 'you' creates the millimeters of distance needed to render the experience at all. Maggie Nelson's The Argonauts uses second person as an address — 'you' is her partner, Harry, and the book is a love letter and an argument. Ta-Nehisi Coates addresses Between the World and Me to 'my son,' making the second person an ethical as well as emotional choice: who gets to speak, and to whom? Omniscient narration is ethically unavailable to the memoirist — you cannot claim to know what other people were thinking without evidence. But the essayist can reach toward it through research, documentation, and clearly signaled imagination.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Balanced Sentences & the Rhetoric of Twos",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 21 of 60 — Balanced Sentences and the Rhetoric of Twos",
          intro: [
            "The balanced sentence sets two parallel elements against each other — parallel in grammatical structure, equal in weight — creating a rhythm of comparison, contrast, or equivalence that the human ear immediately recognizes as satisfying. 'It was the best of times, it was the worst of times.' 'She had come to understand loss; she had yet to learn loneliness.' 'Ask not what your country can do for you — ask what you can do for your country.' The balanced sentence is ancient (biblical cadences, Cicero's oratory, the antithetical structures of classical rhetoric) and immediately legible because the brain is pattern-seeking: two is the minimum for pattern, and the minimum for comparison.",
            "The balanced sentence belongs to Phase 2's broadening of sentence architecture beyond the cumulative. Where the cumulative sentence grows by accretion — adding free modifiers that extend the base clause outward — the balanced sentence works by doubling: two structures of equal weight, set in relationship. The relationship can be equivalence ('to err is human; to forgive, divine'), contrast ('not this, but that'), or ironic juxtaposition (where the two parallel elements reveal a gap between them that the sentence does not name).",
          ],
          rule: "The balanced sentence requires grammatical parallelism — like structures in like positions — and equivalent syntactic weight on both sides of the balance point. The balance point is usually a semicolon, an em dash, or a coordinating conjunction. The two sides do not need to be the same length, but they must feel equal: the rhythm and stress patterns should arrive at the same weight on both sides.",
          examples: [
            {
              label: "Equivalence — two sides confirm each other",
              text: "She had spent years trying to understand him; she had spent the same years becoming impossible to understand.",
            },
            {
              label: "Contrast — two sides push against each other",
              text: "He talked about the future constantly; he was terrified of it.",
            },
            {
              label: "Ironic juxtaposition — the gap between the two sides is the point",
              text: "She had everything she had wanted; it was exactly as disappointing as she had feared.",
            },
            {
              label: "The imbalance test — what happens when parallelism breaks",
              text: "'She had come to understand loss; loneliness was something she had yet to learn' — the second clause is grammatically different (passive-ish, inverted) and the balance is lost. The ear notices. Restore: 'She had come to understand loss; she had yet to learn loneliness.' Now the parallel subjects ('she had') create the balance the sentence needs.",
            },
          ],
          outro: [
            "The rhetoric of twos is the ancient foundation of antithesis — saying one thing against another to produce meaning from the relationship between them. The balanced sentence is its most concentrated form. It is particularly useful for: characterization (capturing the central tension of a character's psychology in one sentence), thematic statement (expressing the novel's central opposition without announcing it as theme), and ending a paragraph or scene at the highest possible compression.",
            "A caution: balanced sentences call attention to themselves. They land with a click of satisfaction that can feel like conclusion — which means they should rarely appear mid-scene without intention. Placed at a paragraph's close, they are a form of punctuation. Placed mid-paragraph, they create a pause that the prose must then move past. Use them deliberately and sparingly.",
          ],
          exercise:
            "Write five balanced sentences, each characterizing a relationship between two people, two ideas, or two states of a single character. The relationship should be different in each: one equivalence, one contrast, one ironic juxtaposition, and two of your own choosing. After writing all five, apply the imbalance test to each: read the sentence aloud, cover one side, read the other. Do both sides feel equally weighted? If not, identify which structural element is creating the imbalance and revise.",
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
              title: '"Girl"',
              author: "Jamaica Kincaid",
              href: "https://www.newyorker.com/magazine/1978/06/26/girl",
              note: "Free to find widely online — originally published in The New Yorker, 1978. Read it twice: once for the experience of being addressed as 'you,' once for the mechanics. What is the effect of the unbroken cascade? Where does the daughter's voice enter — only twice, in italics — and what does the mother do to it each time? Notice that the story is 650 words and accomplishes what most stories cannot accomplish in 6,000. What has Kincaid given up by using second person? What has she gained that no other mode could have given her?",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "Middlemarch, Chapter 1",
              author: "George Eliot",
              href: "https://www.gutenberg.org/ebooks/145",
              note: "Free on Project Gutenberg. Read Chapter 1 as a study in omniscient narration at its most confident and most self-aware. Notice that Eliot's narrator announces herself — 'I have so much to do in unraveling certain human lots' — and makes her omniscience a character trait rather than a transparent convention. The narrator knows everything and says so. How does this explicitness about the narrator's godlike position affect your relationship to the story? Does it create distance or a different kind of intimacy?",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "A Visit from the Goon Squad, 'Great Rock and Roll Pauses'",
              author: "Jennifer Egan",
              href: "https://bookshop.org/p/books/a-visit-from-the-goon-squad-jennifer-egan/6697453",
              note: "Purchase the novel. Read the chapter titled 'Great Rock and Roll Pauses' — the PowerPoint chapter. This is the most formally radical chapter in the novel: it tells a story through presentation slides, with bullet points and graphs, using the visual grammar of corporate communication to render an adolescent girl's interior life. Ask: what does the form's constraint force Egan to do that prose would have done differently? What is gained by making the form so visible? What is lost by abandoning sentence-level prose entirely?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "One Scene, Three Unconventional Modes",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the same scene in three different POV modes. Use a scene from your thesis project or a new scene you invent this week. The scene should involve at least two people and some form of tension or unspoken need — small enough to render in 400 words, charged enough to withstand three different formal treatments.",
            "Version 1 — Second Person (400 words): Write in 'you.' The 'you' is your protagonist, addressed by the narrating voice. Do not explain or announce that this is second person — simply begin in it. The 'you' creates a specific pressure: the reader is inside the protagonist but also slightly estranged. Let that estrangement be productive.",
            "Version 2 — Omniscient (400 words): Write with full access to every character's consciousness simultaneously. The narrator knows what each person in the scene is thinking, remembering, and afraid of. Use that access — move between minds, and let the reader know things no single character knows. Do not pretend the omniscience isn't there: let it be visible, as it is in Eliot.",
            "Version 3 — An experimental mode of your choosing (400 words): Choose one: collective 'we' narration (the scene witnessed by a community); alternating close-third paragraphs that switch focal character mid-scene; present tense intercut with future tense to create dramatic irony; or a form borrowed from another genre (a scene rendered as stage directions, as a list, as a series of questions). The constraint: the experimental form must do something the conventional forms cannot — it must earn its strangeness.",
            "After all three versions: write a 200-word analysis identifying what each mode afforded and what it cost. Be precise — name specific moments where the mode enabled something, and specific moments where it created a problem you had to solve or a limitation you could not overcome.",
          ],
          target: "1,400 words (three versions plus analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 21 — The POV Orientation Study",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Use the AI to generate three versions of a specific scene opener — a character entering a familiar room for the last time — in first person, second person, and omniscient. You are not using the AI's output directly; you are using it as a structural study. Read the three versions as a critic, not as a writer.",
          prompt:
            "Write three versions of this scene opener — a character entering a familiar room for the last time — each version exactly 100 words. Version 1: first-person narration (past tense). Version 2: second-person narration (present tense, addressing 'you'). Version 3: third-person omniscient (the narrator knows this character's thoughts and has access to what the room means to the character's history). After all three versions, write a paragraph analyzing the structural differences: how does each POV handle the problem of orientation — how does each mode establish where the reader is, what they can know, and what emotional position they are placed in?",
          questions: [
            "Where does the second-person version create genuine implication — where does 'you' pull the reader into the scene in a way first person would not?",
            "Where does the omniscient version use its access to multiple knowledge — and does the AI's narrator actually move between minds, or does it stay within one consciousness despite the omniscient grammar?",
            "Which of the AI's three versions is most successful, and what specific craft choice makes it so?",
            "Now write your own three versions of the same scene opener, using the AI's as a structural guide only — not as a model to imitate, but as a map of the problems each mode poses.",
          ],
          note: "The purpose of the AI exercise is not to produce material but to make the structural differences between POV modes visible through direct comparison. The AI's versions will have limitations — they may not fully exploit what each mode makes possible. Those limitations are part of the learning: what is the AI's omniscient narrator not doing that Eliot's does? What does the AI's second person miss that Kincaid achieves?",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Who Knows What, and When",
      blocks: [
        {
          type: "tip",
          icon: "🧭",
          name: "POV Creates an Information Structure",
          paragraphs: [
            "Point of view is not merely a voice — it is an information architecture. It determines what the reader can know, when they can know it, and what they must infer from what they are not told. Your reader should always be able to answer, at any moment in the narrative: whose consciousness are we in? What does this consciousness know, feel, and want right now? When readers feel confused — unsure of whose head they're in, or finding information that no character in the scene could plausibly have — it almost always traces to a POV problem.",
            "The POV audit is the most useful single-pass revision exercise for any multi-scene draft: read scene by scene, and for each scene identify the focal consciousness. Mark every sentence that contains information the focal character could not have access to — whether because they were not present when it happened, or because it is inside another character's mind. Those sentences are POV slips, and they must be revised: either the information is cut, or it is given to a character who could plausibly have it, or the POV is changed.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Experience You Can Only Approach in Second Person",
      blocks: [
        {
          type: "journal",
          title: "The Experience You Can Only Approach in Second Person",
          question:
            "Are there experiences in your life that you can only approach in the second person — experiences so painful, so strange, or so far outside your current sense of self that saying 'you' rather than 'I' puts the necessary millimeters of distance between you and the event? Write one of them. Not as a finished piece — as an experiment. Begin with 'you,' and follow where it leads. At the end, note: what did the second person allow you to approach that the first person would have foreclosed? And what did it cost — what intimacy or ownership did the distancing remove?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Second person is often the mode writers discover by accident, reaching for it without knowing why, finding that it allows something the 'I' cannot hold. If you have never written in second person before, this week's exercise and this journal entry are the place to find out what it does to you — what it opens, and what it closes.",
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
            "By the end of this week you should have: written the same scene in second person, omniscient, and an experimental mode of your choosing, with a 200-word comparative analysis; read Kincaid's 'Girl' for the mechanics of what second person enables in compressed form; read Eliot's Chapter 1 of Middlemarch for the self-aware omniscient narrator who announces rather than conceals her godlike access; written five balanced sentences and applied the imbalance test to each; and used the AI POV comparison to make the structural differences between modes visible before writing your own versions.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 22",
          paragraphs: [
            "Week 22 is the Unreliable Narrator — the POV sequence's final and most demanding topic. Unreliability is not a binary property (reliable or not) but a spectrum, and the most sophisticated literary fiction uses it as a structural engine: what the narrator cannot or will not tell the reader, and why, becomes the story's deepest information. Stevens in The Remains of the Day, Humbert Humbert in Lolita, Esther Greenwood in The Bell Jar: each narrator tells us the story they can tell, and the story they cannot tell is always more important.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Three weeks into the POV sequence, the question has fully emerged: not which mode is best, but what does this material demand? With first person, third-person limited, second person, omniscient, and the experimental modes now in your repertoire, you have the full vocabulary. The question for your thesis project is not which POV you are comfortable with, but which one is most honest — which makes the most accurate claim about what can be known, and by whom, in the story you most need to tell.",
          ],
        },
      ],
    },
  ],
};
