import type { WeekData } from "@/lib/mfa/types";

export const week14Data: WeekData = {
  weekNumber: 14,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Voice Development — Finding the Frequency Only You Can Transmit",
  emphasizedWord: "The Frequency Only You Can Transmit",
  deck: "Voice is the synthesis of every stylistic choice a writer makes consistently across a body of work: the length and rhythm of sentences, the preference for certain kinds of imagery, the typical relationship to time and to the reader, the habitual stance toward the subject. In Year One you studied voice analytically. In Year Two you begin to develop it consciously — to make it less a byproduct of habit and more the expression of a governing aesthetic vision. This week moves from imitation to synthesis.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "50 of 108" },
    { label: "Craft Focus", value: "Voice Development" },
    { label: "Grammar", value: "Phase 4 · Asyndeton" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "From Habit to Vision — The Conscious Development of Voice",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every writer already has a voice before they study it. Voice is not something acquired through craft training — it is the residue of everything a writer has read, experienced, and attended to, expressed through every small stylistic choice they make in prose. The writer who has been making prose for any length of time has accumulated habits of sentence length, imagery type, relationship to the reader, characteristic syntactic patterns, a way of handling time — and these habits, taken together, constitute a voice even before the writer has named it or made it intentional. The craft project of voice development is not the creation of a voice from nothing. It is the ",
            { text: "discovery and amplification", emphasized: true },
            " of a voice that already exists — the movement from unconscious habit to conscious choice, from the voice that appears when the writer is not thinking about it to the voice that is present even when the writer is working hardest.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The distinction between voice and style is worth making precisely: style is what a writer does with language in a given work; voice is what a writer does with language consistently across all their work. Style can be varied — a writer might adopt a compressed, Carveresque style for one story and an expansive, maximalist style for another. Voice persists through all those variations. Baldwin's voice is recognizable whether he is writing an essay about his father or a novel about Harlem or a letter to his nephew — not because the style is identical but because the governing sensibility, the relationship to the reader, the characteristic way of making an argument through accumulation, are consistent. Voice is the ",
            { text: "writer's fingerprint:", emphasized: true },
            " it is the element of the work that cannot be imitated without becoming parody, because it is the expression of a consciousness that is irreducibly particular.",
          ],
        },
        {
          type: "pullquote",
          quote: "The voice consistency audit asks not whether the prose is good throughout — it asks whether the prose sounds like the same writer throughout. Voice shifts often signal the writer's relationship to their material shifting: a moment of discomfort, a passage that was difficult to write, a place where the writer wasn't sure what they were doing.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Five Features of a Recognizable Voice — and How to Find Yours",
          paragraphs: [
            "Sentence length and variation: every writer has a characteristic relationship to sentence length — a default length around which the prose varies, a comfort zone, a characteristic pattern of variation. Some writers default to the long sentence and use the short for emphasis (James, Woolf); some default to the short and use length for accumulation or irony (Hemingway, Carver). The Voice Inventory this week asks you to identify your characteristic sentence length and variation pattern — not to standardize it but to understand it, so that departures from it can be intentional rather than accidental.",
            "Imagery type and sensory register: every writer returns to a characteristic domain of imagery — the images they reach for habitually when making meaning concrete. Toni Morrison reaches for the body, for landscape, for color as political register. Didion reaches for the built environment — roads, hotels, airports, the specific textures of civic life. Nabokov reaches for light and optical phenomena. The writer who knows their characteristic imagery domain can both amplify it (reach for it more precisely and more often when it serves) and resist it (reach for a different domain when the habitual one has become reflexive rather than chosen).",
            "Relationship to the reader: every voice implies a relationship between the writer and the reader — a stance, a degree of intimacy or distance, an assumed level of knowledge and sophistication. Some voices confide (Sedaris, Lamott — the reader is trusted with embarrassing information, brought close); some instruct (Didion — the reader is told what is true with authority that does not invite argument); some interrogate (Baldwin — the reader is implicated, made to examine their assumptions); some conspire (Nabokov — the reader is invited into a private joke at another character's expense). Identify the relationship your voice typically implies — and whether that relationship is the right one for the thesis material.",
            "Syntactic habits: the characteristic phrase constructions, sentence openers, and clause patterns that the writer reaches for habitually. The writer who has completed Phase 3 and begun Phase 4 now has the vocabulary to identify their syntactic habits precisely: do you habitually open with participial phrases or with prepositional phrases? Do you favor the periodic sentence or the cumulative? Do you use anaphora intuitively — reaching for repetition at the opening of clauses without having planned it — or does repetition feel formal and self-conscious? These habits are not problems to be corrected; they are the material from which a conscious voice is built.",
            "The habitual stance toward the subject: every voice takes a characteristic stance toward whatever it is writing about — ironic or earnest, close or distanced, analytical or sensory, inside the subject or observing it from outside. Carver is almost always inside his characters' experience, close and non-judgmental. McCarthy is often distant — the landscape observed from a geological remove, the violence described without commentary. O'Connor is close and ironic simultaneously, inside the character's delusions while the reader sees what the character cannot. Your characteristic stance toward your subject is one of voice's most fundamental features — and the one most likely to be the right approach for some material and the wrong approach for other material.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The Voice Inventory exercise asks the writer to read back through everything written this year — thesis sessions, grammar exercises, workshop letters, journals — and identify five recurring formal features. Not themes or subjects but form: sentence types, imagery domains, syntactic habits, the relationship to the reader, the stance toward the subject. The inventory produces a portrait of the voice that already exists. The 600-word amplification exercise then asks the writer to push that voice further — to write in its most concentrated version, amplified and intentional, more fully itself than the usual writing allows. The distance between the usual voice and the amplified voice is the distance between habit and vision.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Voice Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, voice is the primary carrier of the work's moral intelligence — the quality that tells the reader not what the narrator thinks but how they think, what they notice, what they find significant, what they pass over without comment. The most memorable literary fiction voices are not voices that tell us things — they are voices that show us how consciousness works. Stevens in *The Remains of the Day* has a voice so particular that every sentence reveals his self-deception without his ever acknowledging it. Humbert in *Lolita* has a voice whose rhetorical brilliance is itself the novel's indictment. The fiction voice that is doing its deepest work is a voice that tells the reader more than the narrator knows it is telling — and achieving that requires the writer to understand their narrator's voice at a level of precision that makes the gap between narrator's self-presentation and the reader's understanding deliberate rather than accidental.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay presents a paradox: the writer has a prose voice, but the screenplay's prose — the action lines, the scene headings — is conventionally minimized, subordinated to dialogue and structure. What screenwriters develop instead is a tonal voice: a consistent sensibility that operates through the kinds of scenes chosen, the rhythm of dialogue, the specific details used in action lines, and the characteristic relationship between tone and genre. Sorkin's voice is recognizable in his screenplays because of his dialogue rhythm, his walk-and-talk staging, his faith in articulate passion. For playwrights, voice operates more fully on the page and has the added dimension of being embodied by actors — the playwright's voice must accommodate performance, which is both a limitation and a resource.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In CNF and memoir, voice is the primary argument for the writer's authority to tell the story — it is the evidence that this particular consciousness is the right lens for this particular material. Vivian Gornick's distinction between the narrator (a character in the story) and the memoirist (the author looking back) is a distinction between two voices that must work in tandem: the experiencing self's voice (close, embodied, often confused or wrongheaded) and the narrating self's voice (retrospective, understanding, shaped by what the writer now knows). The memoir that collapses these two into one loses both the texture of the past experience and the wisdom of the retrospective understanding. The memoir that manages both simultaneously is the memoir in which voice is doing its fullest work.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 · Topic 5 — Asyndeton: Speed, Inevitability & the Rhetoric of Compression",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 49 of 60 — Asyndeton: When the Conjunction Is Cut",
          intro: [
            "Asyndeton removes conjunctions from lists and series: where standard prose writes 'She ran and fell and got up and kept running,' asyndeton writes 'She ran, fell, got up, kept running.' Where standard prose writes 'He was tired, hungry, and cold,' asyndeton writes 'He was tired, hungry, cold.' The conjunction is not merely omitted — its absence is doing rhetorical work. The comma-only series rushes forward; the conjunction-bearing series pauses to link. Asyndeton is the figure of forward momentum, urgency, and the kind of inevitability that comes from events following each other without causal explanation.",
            "Caesar's *veni, vidi, vici* — 'I came, I saw, I conquered' — is the figure's canonical example in three words: three actions, no connectives, the sequence presenting itself as a force of nature. McCarthy's prose in *Blood Meridian* and *The Road* is built on asyndeton applied to extended catalogues: the world's objects named one after another without conjunction, the accumulation producing a kind of sublime overwhelm. Asyndeton in these hands is not a style choice but a philosophical one — the world consists of discrete things that follow each other without the human imposition of causal hierarchy.",
          ],
          rule: "Asyndeton and polysyndeton (last week's figure) are formal opposites, and their contrast is the clearest way to understand what each is doing. Polysyndeton: 'She took her coat and her hat and her gloves and her umbrella.' Each item is weighted; each receives individual attention; the accumulation feels deliberate and exhaustive. Asyndeton: 'She took her coat, hat, gloves, umbrella.' The items rush past each other; the reader experiences them as a continuous action rather than a sequence of considered choices. Polysyndeton inhabits; asyndeton observes. Polysyndeton slows; asyndeton accelerates. The diagnostic question: does this passage benefit from each item being individually weighted, or from the sense that events are moving faster than commentary can catch them?",
          examples: [
            {
              label: "Asyndeton producing urgency and forward momentum",
              text: "'He ran, he hid, he waited, he ran again.' [No connectives; the actions succeed each other with the urgency of the situation — the reader inhabits the breathlessness, not the deliberation. Compare: 'He ran, and then he hid, and then he waited, and then he ran again' — the conjunctions transform urgency into sequence, forward momentum into retrospective account.]",
            },
            {
              label: "Asyndeton in catalogue — the Mccarthy effect",
              text: "'The road crossed a salt flat, a dry wash, a ridge of broken shale.' [Three landscape elements named without conjunction, the world accumulating around the travelers without commentary or causal connection. The asyndeton performs the novel's philosophical stance: things exist, things follow things, the world does not explain itself.]",
            },
            {
              label: "Asyndeton producing inevitability — Caesar's figure applied",
              text: "'She found the letters, read them, understood everything.' [Three actions, no connectives, the sequence presenting itself as a single movement of consciousness. The conjunction-bearing version — 'She found the letters, and she read them, and she understood everything' — distributes the actions across time; the asyndeton collapses them into a single revelation.]",
            },
            {
              label: "The polysyndeton/asyndeton contrast in adjacent passages — the shift motivated by content",
              text: "Polysyndeton (the approach, weighted and ceremonial): 'She had walked this street and seen the lights and smelled the bread and heard the music every evening for thirty years.' [Each element of the ritual given individual weight.] Asyndeton (the departure, urgent and inevitable): 'She left the key, closed the door, did not look back.' [The actions of leaving rushing past without ceremony — the polysyndeton honored what was being left; the asyndeton performs the leaving itself.]",
            },
          ],
          outro: [
            "The Week 13 grammar exercise asked you to write polysyndeton in two modes (exhaustion/excess and ceremonial weight). This week's exercise pairs asyndeton with polysyndeton in adjacent paragraphs — the shift from one to the other motivated by a shift in emotional content. The writer who can move between these two figures fluidly has control over one of prose's most fundamental rhetorical variables: the weight given to individual items in a sequence. Everything else in the Phase 4 figures toolkit will build on this control.",
            "The connection between asyndeton and voice development: the writer's characteristic ratio of asyndeton to polysyndeton — the default relationship to conjunction — is one of voice's most distinctive syntactic features. Hemingway's asyndeton is so consistent that it constitutes a philosophical position. Baldwin's polysyndeton is equally consistent and equally philosophical. The Voice Inventory this week should identify where your prose falls on this spectrum — and whether the default is always the right choice for the material, or whether the other figure would serve some passages better.",
          ],
          exercise:
            "Write a passage that uses polysyndeton in one paragraph and asyndeton in the next. The shift between the two figures must be motivated by a shift in the emotional content — the passage's movement should make the figure choice feel inevitable rather than arbitrary. After writing, annotate the shift: what changed in the emotional content that called for the change in figure? Then return to your voice inventory and identify your characteristic ratio of asyndeton to polysyndeton. Which figure appears more often in your prose? Is that always the right choice — or are there passages in the current thesis draft where the other figure would serve the material better?",
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
              title: "Steering the Craft, final chapters on voice",
              author: "Ursula K. Le Guin",
              href: "https://bookshop.org/p/books/steering-the-craft-ursula-k-le-guin/8409317",
              note: "Purchase (continuing from Year One). Le Guin's voice chapters are the clearest available account of what voice is at the sentence level — what specific formal choices produce the quality of a recognizable, inhabited literary voice — and what distinguishes genuine voice from the various impostors: mannerism (stylistic tic without governing consciousness), persona (adopted stance without genuine commitment), and mere idiosyncrasy (random weirdness mistaken for originality). Read for her account of what makes voice feel like a necessity rather than a choice — why certain prose could not have been written any other way.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Essay or interview by a writer with an immediately recognizable voice",
              author: "Baldwin, Didion, Morrison, Sedaris, Woolf, or your choice",
              href: "https://www.theparisreview.org/interviews",
              note: "Free online or purchase. Choose a writer whose voice you can identify from a single paragraph — someone whose prose is so distinctively their own that it cannot be confused with anyone else's. Read one essay or interview with a single analytical question: what specific formal features make this voice recognizable? Not themes or subjects — sentence length and variation, imagery types, relationship to the reader, syntactic habits, stance toward the subject. Write two paragraphs of analysis before the Voice Inventory exercise. The analysis trains the analytical eye you will turn on your own prose.",
              badge: "Free / Purchase",
            },
            {
              number: "03",
              title: "Your own writing from this year — all of it",
              author: "You",
              href: "",
              note: "Required. Before writing the Voice Inventory, read back through everything produced this year: thesis sessions, grammar exercises, workshop letters, freewriting, journal entries. Read with a single analytical question: what formal features recur across all of it, regardless of subject or occasion? These are the features of your voice that exist independently of what you are writing about — the fingerprint that appears whether you are writing fiction or analysis, whether you are writing carefully or quickly. Mark every recurrence. The inventory is built from the evidence.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Voice Inventory + Amplification + Thesis Session 14",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Voice Inventory (400 words): Read back through everything written this year. Identify five recurring formal features of your prose — not themes or subjects but form. For each feature, be specific enough that the description could be used as a recipe: not 'I tend to use long sentences' but 'my characteristic sentence runs 30–45 words, opens with a gerund phrase or a prepositional phrase, and closes on a concrete sensory detail or a short, weight-bearing clause.' The five features should cover: sentence length and variation pattern; characteristic imagery domain; relationship to the reader (confiding, instructing, interrogating, conspiring, or another mode); syntactic habits (the Phase 3 and 4 constructions you reach for habitually); and your habitual stance toward the subject (inside, outside, ironic, earnest, analytical, sensory, or some combination).",
            "Part Two — The Amplification (600 words): Write new material — new thesis content or a new piece entirely — in your most concentrated, intentional version of the identified voice. Amplified: push the five features further than the usual writing allows. More fully itself. If your sentences tend toward 30–45 words, write some at 60. If you habitually use imagery from the built environment, reach for the most precise version of that imagery you have produced. If your relationship to the reader is confiding, let the confidence go further than comfortable. The amplification is not parody — it is the voice discovering its own outer limit. Target: 600 words that feel like the most concentrated version of your voice currently available.",
            "Part Three — Thesis Session 14 (1,500–2,000 words): Write the next section of the thesis. Before the session, apply the voice consistency test: read the three most recent thesis sessions' pages and identify any voice shifts. Mark them. In the session log after writing, note whether the new pages are in the voice identified by the inventory, or whether shifts are present — and whether those shifts are intentional or accidental.",
          ],
          target: "400 words (voice inventory) + 600 words (amplification) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 3 — Voice Transplant",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste a 400-word passage of your own prose — the most voice-concentrated passage you have produced this year, ideally from the amplification exercise or from a thesis session where the voice felt most fully inhabited. The AI's task is to identify the voice's formal features precisely enough that they could serve as a recipe for reproducing it.",
          prompt:
            "Identify five distinctive features of this writer's voice — specific, formal, structural features, not themes or subjects. For each feature, be precise enough that it could be used as a recipe: a writer who had never read this passage should be able to reproduce the voice from your five-feature description. Address: (1) characteristic sentence length and variation pattern — what is the default length, how does the writing vary from it, and what governs those variations? (2) typical imagery types — what domain of experience does the writing reach for when making meaning concrete? (3) relationship to the reader — what stance does the writing take toward the reader: confiding, instructing, interrogating, conspiring, or something else? (4) syntactic habits — what phrase constructions and sentence openers appear most consistently? (5) habitual stance toward the subject — is the writing inside the subject or observing it from outside, analytical or sensory, ironic or earnest?",
          questions: [
            "Compare the AI's five features to the five features you identified in your own Voice Inventory. Where do they match — where has the AI confirmed what you identified? Where do they diverge — and when they diverge, which account is more accurate to what is demonstrably on the page?",
            "Take the AI's five-feature recipe and write 300 words on a completely different subject — not the thesis material, but something unrelated — consciously employing all five features. This is your voice applied rather than merely exhibited. After writing: does the 300-word passage sound like you? If not, which feature is not yet fully under conscious control — which requires more practice before it can be deliberately deployed rather than only habitually present?",
            "The AI's identification of your relationship to the reader: is the stance it identifies the right stance for your thesis material? If your habitual stance is confiding and your thesis is about a subject that calls for analytical distance — or if your habitual stance is ironic and your thesis is about a subject that calls for earnestness — is there a tension between voice and material that needs to be addressed, or is the tension itself productive?",
            "Apply the Voice Consistency Audit to the thesis draft using the AI's five features as the standard: read the three most recent thesis sessions and mark every passage where one or more of the five features is absent. Are the absences intentional departures (voice shift for dramatic effect) or accidental ones (voice shift because the writer was uncertain)? Develop a plan for revising the accidental shifts toward the voice standard.",
          ],
          note: "The Voice Transplant exercise (Exercise 3 in the program's 28-exercise AI sequence) is the program's most direct application of AI to voice development — and the most instructive for understanding what voice actually is at the formal level. The AI's five-feature recipe is a useful analytical tool precisely because it is produced by a reader without the author's intimate knowledge of the prose: it identifies what is demonstrably present on the page, not what the writer believes is present. The divergence between the AI's account and the writer's own inventory is usually the most productive finding of the exercise.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Voice Consistency Audit",
      blocks: [
        {
          type: "tip",
          icon: "📻",
          name: "Where the Voice Shifts, the Writer's Relationship to the Material Has Shifted",
          paragraphs: [
            "Read your thesis draft opening — the excerpt submitted with the thesis proposal — and read forward through the most recent thesis session pages. Ask not whether the prose is good throughout but whether it sounds like the same writer throughout. Voice shifts — passages where the sentence length suddenly contracts or expands dramatically, where the imagery type changes, where the relationship to the reader becomes more distant or more intimate without narrative motivation — are diagnostic. They almost always signal the writer's relationship to their material shifting: a moment of discomfort, a passage that was difficult to write, a place where the writer wasn't sure what they were doing and defaulted to a more generic prose mode.",
            "Mark every voice shift. Decide which are intentional — deliberate departures from the established voice for narrative or emotional effect — and which are accidental, the residue of uncertainty or difficulty. The intentional shifts are craft decisions; they should be evaluated on whether they work. The accidental shifts are problems to be revised toward the voice standard — toward the voice that the Voice Inventory and the Amplification exercise have now made explicit. The goal is not a prose that never varies; it is a prose in which every variation is chosen rather than accidental.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Sentence Only You Could Write",
      blocks: [
        {
          type: "journal",
          title: "The Sentence Only You Could Write",
          question:
            "What is the sentence only you could have written — not the best sentence in the thesis, not the most technically accomplished, but the sentence that could not have been produced by any other writer with any other history and sensibility and way of seeing? The sentence that is so specifically yours that it would be unrecognizable as belonging to anyone else's voice. Write it. Do not plan it — find it, from the writing you have produced this year. Then write five more. Not five attempts at the same kind of sentence, but five sentences in your voice, each reaching toward a different feature of that voice: one that exemplifies your characteristic imagery, one that exemplifies your relationship to the reader, one that exemplifies your syntactic habits, one that exemplifies your stance toward the subject, one that exemplifies your sentence length and variation at its most characteristic. These six sentences are a portrait of your voice — specific, formal, irreducibly yours.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is simultaneously a craft exercise and a self-portrait. The sentence that is irreducibly yours is the sentence that the Voice Inventory has been trying to describe analytically — but the analytical description is always less precise than the example. The six sentences produced by this prompt are more accurate than any five-feature description, because they are the thing itself rather than an account of it. Keep them. Post them near your writing space. They are the standard toward which the thesis's voice should be revised.",
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
            "By the end of this week you should have: read all this year's writing for recurring formal features; written the 400-word Voice Inventory identifying five features with recipe-level specificity; written the 600-word amplification in the most concentrated version of the identified voice; written 1,500–2,000 words of thesis in Session 14 with voice consistency test applied and recorded in the session log; read Le Guin's voice chapters; analyzed the voice of one immediately recognizable writer in two paragraphs before writing the inventory; completed the Voice Transplant exercise (Exercise 3) and written the 300-word cross-subject application of the five-feature recipe; applied the Voice Consistency Audit to the three most recent thesis sessions with intentional/accidental shift distinction; written the polysyndeton/asyndeton contrast passage with the shift motivated by emotional content; written the six voice-portrait sentences from the journal prompt.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 15",
          paragraphs: [
            "Week 15 is the semester's cross-genre synthesis week — The Ethics of Representation Across All Three Forms. All three tracks come into direct dialogue because the ethical questions of who gets to tell which stories, how real people are rendered, and what the writer owes their subjects are largely the same across forms even when the craft responses differ. The grammar focus is parataxis and hypotaxis — the foundational syntactic distinction that separates Hemingway from Henry James, and the most philosophically significant figure yet introduced in Phase 4.",
          ],
        },
      ],
    },
  ],
};
