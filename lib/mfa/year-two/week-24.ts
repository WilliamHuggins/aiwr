import type { WeekData } from "@/lib/mfa/types";

export const week24Data: WeekData = {
  weekNumber: 24,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "The Sentence as Music — Prose Rhythm Advanced",
  emphasizedWord: "The Sentence as Music",
  deck: "Every strong prose stylist is, at some level, a musician — they compose sentences the way a composer writes music, with awareness of tempo, dynamics, tone, and the relationship between phrase and silence. This week trains the ear: the musicality of prose, the way sentence rhythm, sound repetition, and the sequencing of stressed and unstressed syllables create the reading experience as something close to listening.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "60 of 108" },
    { label: "Craft Focus", value: "Prose Rhythm" },
    { label: "Grammar", value: "Phase 5 · The Period as Rhythm Maker" },
    { label: "Key Exercise", value: "The Rhythm Revision" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Sound Before Sense — Teaching the Ear What the Eye Has Normalized",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The eye is a normalizing instrument. It moves through prose efficiently, extracting meaning, skipping over what it has learned to take for granted — the habitual sentence length, the recurring syntactic pattern, the stressed syllable always falling in the same position. The ear cannot normalize in the same way. Read a passage aloud and the ear registers everything the eye has skipped: the sentence that has the same rhythm as the three sentences before it, producing a lulling monotony the reader mistakes for boredom with the subject; the sentence that ends on a stressed monosyllable and stops hard, creating emphasis the writer didn't intend; the paragraph that accelerates when it should slow, or slows when the reader needs to be carried forward. The ear is the instrument that catches what the eye has trained itself to ignore, which is why reading aloud is not a writing exercise but a revision practice — a systematic way of hearing what the prose is actually doing versus what the writer believes it is doing.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The musicality of literary prose operates at four levels simultaneously, and the writer who commands all four has resources unavailable to the writer who attends only to meaning and clarity. At the level of the syllable: the distribution of stressed and unstressed syllables determines whether a sentence moves quickly or slowly, whether it arrives with weight or lightness, whether its ending lands or trails. At the level of the sentence: the relationship between sentence length, syntactic complexity, and the placement of the sentence's most significant element determines the prose's tempo — the speed at which the reader moves through the paragraph, where they accelerate, where they are forced to slow. At the level of the paragraph: the sequence of sentence lengths and structures determines the paragraph's arc — whether it builds toward its ending, releases tension, or sustains a single register throughout. At the level of the passage: the relationship between paragraphs — their relative lengths, their tonal registers, the moments of compression and expansion — determines whether the prose breathes.",
          ],
        },
        {
          type: "pullquote",
          quote: "At least one complete revision pass of any piece should be conducted entirely through reading aloud. Mark every sentence where you stumble, rush, or feel the rhythm go wrong. These are the sentences that need revision. The ear catches what the eye normalizes.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Elements of Prose Music — and How to Work with Each",
          paragraphs: [
            "Sentence length variation: the most immediately audible dimension of prose rhythm. A paragraph of sentences that are all approximately the same length — whether long or short — produces monotony; the reader's ear registers the pattern and begins to anticipate it, and anticipation is the enemy of attention. Sentence length variation creates the prose equivalent of dynamic range: the short sentence after a series of long ones arrives with the force of a downbeat; the long sentence after a series of short ones releases the tension the short sentences have been building. The specific pattern matters less than the principle: varied length is musical, uniform length is metronomic. The practical check: read a paragraph aloud and count the syllables in each sentence. If the counts are all within 20% of each other, the rhythm needs work.",
            "Sound repetition — alliteration, assonance, consonance: the recurrence of similar sounds within a sentence or across adjacent sentences creates the sonic texture that distinguishes literary prose from functional writing. Alliteration (repeated initial consonants) is the most obvious and the most easily overdone; when used sparingly, at moments of high intensity, it creates a binding effect — the sounds hold the words together the way rhyme holds a line of verse. Assonance (repeated vowel sounds) is the subtler and more powerful tool: the long vowels (ā, ī, ō) slow the sentence and open it; the short vowels (ĕ, ĭ, ŏ) quicken it and close it. A sentence composed primarily of long vowels creates a different sonic experience than a sentence composed primarily of short ones, regardless of meaning. Morrison's most powerful sentences are often dense with long vowel sounds at moments of maximum emotional weight; Hemingway's most devastating sentences are stripped of open vowels, hard and quick and closed.",
            "Stressed syllables and the sentence's ending: in English prose, the most emphatic position in any sentence is the end — the word that arrives last carries the most weight, because the period that follows it creates a pause in which that word echoes. The writer who places the sentence's most significant word at the end has aligned syntactic emphasis with semantic emphasis; the writer who places the most significant word in the middle of the sentence and trails off into less important material has allowed the sentence's most charged element to be buried. The practical discipline: read the last word of every sentence in a paragraph. Do the final words carry the weight the sentences are trying to create? Or are the sentences ending on function words, prepositions, conjunctions — words that trail rather than land?",
            "The paragraph's arc and breath: a paragraph is a unit of breath as well as a unit of meaning — it should have a shape, a movement from opening to close, that gives the reader the sensation of having traveled somewhere. The paragraph that begins with its most significant sentence and then explains it creates a different experience from the paragraph that builds toward its most significant sentence. The paragraph that is all one register — all long sentences, or all short, or all at the same emotional temperature — does not breathe. The paragraph that shifts register — from long to short, from complex to simple, from the general to the specific — creates the sensation of a mind working, of thought moving through language rather than language reporting thought. The paragraph break itself is a beat: the white space between paragraphs is a pause, a breath, a moment in which the reader takes in what has arrived before the next unit begins.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The rhythm revision exercise — taking two pages of the thesis and revising them specifically for rhythm — is the most direct application of this week's content. The instruction is precise: not meaning, not clarity — rhythm. The meaning and clarity of a passage can survive a great deal of rhythmic improvement; improving rhythm without improving meaning is the cleaner discipline, because it isolates the sonic dimension of prose from the semantic one. A writer who has never revised for rhythm alone discovers, in this exercise, that rhythm and meaning are not separate — that a sentence with better rhythm is often also a sentence with better meaning, because the rhythm has forced the writer to attend to where the emphasis is falling and to ask whether that is where it should fall.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Prose Rhythm Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer's relationship to prose rhythm is the relationship to the specific voice the novel inhabits — the rhythm of the prose is inseparable from the narrator's consciousness. Woolf's long, syntactically complex, vowel-rich sentences in *The Waves* perform a specific relationship to consciousness: thought as continuous, sensation as overflowing the sentence's capacity to contain it. McCarthy's short, paratactic, consonant-heavy sentences in *The Road* perform a different relationship: the world stripped to its elements, syntax as sparse as the landscape it is moving through. Neither rhythm is better; each is the necessary rhythm for its narrator and its world. The fiction writer's rhythm revision this week should be applied not just to any two pages but to the pages that most clearly belong to the narrator's specific voice — the pages where the voice is strongest — and the revision should ask: is the rhythm I am producing the rhythm this consciousness would produce? Does my narrator think in long sentences or short ones? In open vowels or closed? In complex syntax or paratactic? The rhythm, once identified, should be consistent throughout the manuscript — not uniform (variation is essential) but recognizably of a piece.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter's relationship to prose rhythm is specific to the form: screenplay prose is functional, not literary — the scene description exists to communicate action and atmosphere to a director and actor, not to create a reading experience for its own sake. But the screenwriter who attends to rhythm in scene description discovers that functional prose and musical prose are not incompatible. The scene description that moves — that has varied sentence lengths, that ends its sentences on strong words, that uses short sentences to create urgency and longer sentences to create atmosphere — communicates more effectively than the scene description that is rhythmically inert, because rhythm is pace, and pace in scene description tells the director and actor how fast this moment moves. For playwrights, dialogue rhythm is the primary site of musical attention: the specific rhythm of a character's speech — the length of their sentences, the placement of their pauses (indicated by dashes, ellipses, or stage directions), the distribution of stressed syllables — is as much a part of characterization as the content of what they say. Pinter's pauses are rhythmic instruments; the silence between two lines of dialogue is as carefully composed as the lines themselves.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoirist's relationship to prose rhythm is the relationship to the narrator's two voices — the experiencing self and the narrating self — and the specific way each voice moves. The experiencing self, close to the events, typically moves in shorter sentences, more fragmented, more immediate — the rhythm of being inside the experience as it happened. The narrating self, in retrospect, typically moves in longer, more complex sentences — the rhythm of understanding, of the mind that has had time to process what the experiencing self could only endure. The best memoir prose moves fluidly between these two rhythms, and the rhythm revision this week should identify which register each page is primarily in and whether the rhythm is serving that register. A page that is in the experiencing-self register but using long, complex sentences may be rhythmically misaligned — the rhythm is producing the retrospective distance the page is trying to close. A page that is in the narrating-self register but using only short, fragmented sentences may be performing an urgency the retrospective narrator no longer needs to feel.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 5 · Topic 7 — The Period: The Writer's Most Powerful Punctuation",
      blocks: [
        {
          type: "grammar",
          title: "Phase 5 · Topic 57 of 60 — The Period: Completion, Breath, and the Sentence That Earns Its Rest",
          intro: [
            "Verlyn Klinkenborg's *Several Short Sentences About Writing* makes a claim that initially sounds like hyperbole and, on examination, is simply accurate: the period is the most important punctuation mark. Every sentence ends with one. Every sentence is therefore a unit of completion — a breath taken and released — and the period is the moment of that release. The question the period poses to every sentence it closes is not 'is this grammatically correct?' but 'is this complete?' — not technically complete but genuinely complete: has this sentence said what it needed to say, and nothing more?",
            "The period's power is proportional to the fullness of the pause it creates. A sentence that earns its period — that arrives at genuine completion, that could not continue without losing something — creates a pause in which the reader receives what the sentence has delivered. A sentence that merely stops — that runs out of material without having completed a thought, or that trails into subordinate clauses and qualifications until the period arrives as a matter of necessity rather than design — creates a pause that the reader experiences as a stumble, a moment where the prose has gone slack. Klinkenborg's insight is that writers who are afraid of the period — who fill their sentences with additional clauses and modifiers past the point of completion — are writers who do not trust their sentences to be enough.",
          ],
          rule: "Every sentence should earn its period — should arrive at genuine completion before the period closes it. The test: at the point of the period, has the sentence said what it needed to say? If yes, the period belongs there. If the sentence continues past its point of genuine completion — if it has said what it needed to say and then kept talking — the period should have arrived earlier and the remaining material should be cut or become its own sentence. If the sentence has not yet said what it needed to say when the period arrives, the sentence is incomplete and needs more. The period's position is not determined by grammatical completeness — every independent clause is grammatically complete — but by rhetorical completion: the sense that the thought has arrived at its natural end.",
          examples: [
            {
              label: "The short sentence that earns its period — completion through economy",
              text: "'She left.' [Two words. One stress. One full stop. The sentence is complete — it has said exactly what it needed to say and nothing more. Any addition — 'She left the room,' 'She left without a word' — would dilute the impact of the stop. The period creates a pause in which 'left' echoes, in which the reader fills the white space with what 'left' means in this context. The sentence earns its period through compression: it trusts the reader to supply what it does not say.]",
            },
            {
              label: "The long sentence that earns its period — completion through accumulation",
              text: "'She had spent twenty years in a city that never learned her name, in rooms that changed shapes around her, in relationships that began with the specific clarity of emergency and faded into the comfortable vagueness of habit, until she could no longer remember what she had come there to find or whether she had found it.' [The sentence earns its period because it arrives — after its long accumulation of loss and diminishment — at genuine completion: the forgetting that is the sentence's final and heaviest term. The period closes not just the grammatical sentence but the twenty years. Every clause has added weight; the period releases it all at once.]",
            },
            {
              label: "The period as a rhythm instrument — alternating sentence lengths",
              text: "'The door was open. She had left it open — she always left it open, the way she left everything, slightly ajar, as if escape needed to remain an option. He stepped through. The house was empty. Not empty in the way houses are empty when their occupants have gone out; empty in the way houses are empty when their occupants are not coming back.' [The alternation between short sentences ('The door was open,' 'He stepped through,' 'The house was empty') and longer ones creates a specific rhythm: the short sentences land hard, the longer sentences process and qualify. The three short sentences in a row slow the approach to the discovery; the final long sentence opens into the discovery's full weight.]",
            },
            {
              label: "The sentence that misses its period — continuing past completion",
              text: "Failing: 'She left the room quietly, as she had learned to do over the years of living in close proximity to others, and closed the door behind her with the specific care of someone who has learned that the sounds they make are noticed.' [The sentence continues past its point of genuine completion at 'quietly' — a sentence that earns its period there creates emphasis through compression. Each additional clause dilutes the impact of 'left.' Better: 'She left the room quietly. She had learned, over years of close quarters, that the sounds she made were noticed — and had learned, before that, that the noticed sounds were always the wrong ones.']",
            },
          ],
          outro: [
            "This topic is the final grammar figure of Phase 5: Punctuation as Craft. The phase has covered the em dash (three modes: interruption, amplification, pivot), parentheses (the whispered aside, subordination, digression), the colon (formal introduction, anticipation, the payload that must justify the pause), the semicolon (implied relationship, the gap the reader must cross), the comma splice (collapsing temporal and causal distance), the sentence fragment (isolation as emphasis), the ellipsis (trailing thought, the incompletable), and now the period (completion, breath, the sentence that earns its rest).",
            "Phase 5 Synthesis will appear in Week 30, when the full punctuation curriculum is audited together: two pages of thesis prose annotated for every punctuation decision, asking not 'is this correct?' but 'what is this doing?' Phase 6 begins in Week 25 with word-level craft and diction — Latinate versus Anglo-Saxon, the power of the monosyllable, the verb as the sentence's engine.",
          ],
          exercise:
            "Read your thesis draft aloud — two full pages — pausing fully at every period. Mark every sentence where the pause feels incomplete (the sentence ran out before it was done) and every sentence where the pause feels forced (the sentence continued past its natural end). Then perform the period audit: for each marked sentence, identify where the period should have arrived and revise accordingly. One set of sentences will need expansion — they stopped too soon. Another set will need compression — they continued past completion. After revising, read the two pages aloud again. Count the syllables in each sentence and check for monotony. If more than four consecutive sentences fall within 20% of the same syllable count, vary the pattern. Write one paragraph of entirely new prose — on any moment from your thesis — in which every sentence earns its period and no two consecutive sentences have the same approximate rhythm.",
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
              title: "Several Short Sentences About Writing",
              author: "Verlyn Klinkenborg",
              href: "https://bookshop.org/p/books/several-short-sentences-about-writing-verlyn-klinkenborg/6697453",
              note: "Purchase. Reread now, as a Year Two student — it reads differently here than it did in Year One. Klinkenborg's argument that the sentence is the fundamental unit of prose — that the writer's first obligation is to know when the sentence is complete and to stop there — is the direct source of this week's grammar topic. Read it in one sitting, aloud if possible: the book is itself a performance of its argument, composed of the short sentences that earn their periods, and reading it aloud is hearing those periods land. Pay particular attention to his account of what it means to revise: not to improve sentences but to find the sentences that are already in the material, hidden under the instinct to keep talking.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Artful Sentences: Syntax as Style — Chapter on Rhythm",
              author: "Virginia Tufte",
              href: "https://bookshop.org/p/books/artful-sentences-syntax-as-style-virginia-tufte/6697453",
              note: "Purchase. Tufte's chapter on rhythm is the most analytically rigorous account of prose rhythm currently available: she maps the relationship between syllable count, sentence length variation, and the musical properties of connected prose with the precision of a linguist and the sensitivity of a literary critic. The examples are dense and specific — she is not making general claims about rhythm but demonstrating, sentence by sentence, how specific syntactic choices produce specific rhythmic effects. Read with pencil in hand and attention to the examples more than the argument.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Toni Morrison reading from Beloved / James Baldwin reading his essays",
              author: "Toni Morrison / James Baldwin",
              href: "https://www.youtube.com/results?search_query=toni+morrison+reading+beloved",
              note: "Free on YouTube. Search for a recording of Morrison reading from *Beloved* and a recording of Baldwin reading from his essays — both are widely available. Listen specifically to sentence rhythm: how Morrison's sentences breathe, where they slow and where they accelerate, how the pause at the end of each sentence is itself a formal instrument. Then listen to Baldwin for the different rhythm: longer sentences, more complex syntactic structures, the rhythm of argument building through accumulation. The comparison is instructive — two of the great American prose stylists of the twentieth century, producing radically different music from the same language. Listen without reading the text on the page: hear the rhythm before you see it.",
              badge: "Free on YouTube",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Rhythm Revision + Spring Thesis Session 6",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Rhythm Revision (two fully revised pages + 300-word analysis): Choose two pages of your thesis draft that you consider stylistically strong — pages where the voice is clear and the content is working. Read them aloud and mark every sentence where the rhythm falters: where the prose doesn't move the way you want it to move, where the sentence runs out before completion or continues past it, where consecutive sentences have fallen into the same approximate length and the repetition has become a drone rather than a pattern.",
            "Revise the two pages specifically for rhythm — not meaning, not clarity, rhythm. This constraint is the exercise's discipline: you are not improving what the sentences say, you are improving how they sound. Change sentence lengths deliberately: break long sentences that have continued past their completion, combine short sentences that have been separated by periods they haven't earned. Alter the position of stressed syllables in sentences that end weakly: move the most significant word toward the end. Listen for sound repetition — alliteration, assonance, consonance — and add it sparingly where it would create binding or texture; remove it where it has become accidental and intrusive. Vary the paragraph structure: if all paragraphs are approximately the same length, break one short and let another breathe long.",
            "Read the revision aloud. The ear will tell you where the work remains. Mark any sentence that still stumbles and revise until the full two pages can be read aloud without a single hesitation.",
            "After revising, write a 300-word analysis of the specific changes made: which sentences were broken and why; which were combined and why; where the stressed syllables were repositioned; what sound repetition was added or removed; and what the rhythm of these pages is now doing that it was not doing before. Name the specific effect each major revision creates.",
            "Part Two — Spring Thesis Session 6 (1,500–2,000 words): Write the next section of the thesis. In the session log, note whether the rhythm revision has affected how you are beginning today's session — whether attending closely to sound has changed how the first sentences of the new session arrive.",
          ],
          target: "Two revised pages + 300-word analysis + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 56 — The Sonic Reading",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your two revised pages — after the rhythm revision, not before. The AI's task is to read the prose as sound rather than sense: not to evaluate what the sentences mean but to identify where the rhythm is working and where it remains problematic.",
          prompt:
            "Read this prose as sound rather than sense — as a musician reads a score rather than as a reader reads for meaning. Your task is not to evaluate the content but to map the rhythm. Specifically: (1) Where is the rhythm most effective — where does the sentence variety and sound create momentum, emphasis, or texture that reinforces the emotional content? Name the specific sentences and identify what they are doing rhythmically. (2) Where is the rhythm most problematic — where do consecutive sentences fall into monotony, where does a sentence end on a weak syllable when a strong one would serve better, where is the prose moving faster or slower than its content requires? Name the specific sentences. (3) Identify two specific sentences that could still be improved for rhythm — not for meaning, but for sound — and offer alternative wordings that preserve the meaning while improving the music. (4) Identify one moment where a word choice, an image, or a sound creates a sonic effect that reinforces its semantic meaning — where sound and sense are performing the same work simultaneously.",
          questions: [
            "The AI's identification of the two most effective rhythmic moments: do these match the moments you were most satisfied with after the revision? If the AI identifies different moments than the ones you were proud of, this is valuable information — the moments of which the writer is proudest are not always the moments that are working hardest. Read the AI's identified moments again, specifically for rhythm. What is the rhythm doing there that you may not have consciously produced?",
            "The AI's identification of the two most problematic remaining rhythmic moments: these are the sentences the rhythm revision did not fully reach. For each, apply the question: does this sentence earn its period? Where is the most significant word falling in the sentence — at the end, where it should be, or buried in the middle? Revise these two sentences based on the AI's finding and the period's positioning principle.",
            "The AI's suggested alternative wordings for the two specific sentences: do they improve the rhythm while preserving the meaning? If yes, adopt them or adapt them. If no — if the AI's alternative is rhythmically better but semantically wrong — this is the limit of the AI's usefulness as a rhythm reader: it can hear the music but cannot always preserve the meaning. Use the alternative as a model for the kind of revision needed, not as the revision itself.",
            "Apply the Oral Revision principle to the full session log for this week: reread the session log entries from Sessions 1 through 6 aloud. The session log is prose too — does it sound like the writer who is producing the thesis, or does it sound like functional record-keeping? The session log does not need to be literary, but it should be honest and specific enough to be readable. If the entries are too brief to be useful in revision — if they record 'wrote 1,500 words, went okay' rather than the specific accomplishment, the surprise, the unresolved problem, the next session's objective — revise the habit now, not later.",
          ],
          note: "The Sonic Reading exercise uses the AI for one of its genuine strengths as a reader: pattern recognition at scale. The AI can identify rhythmic repetition across a passage — the consecutive sentences that have fallen into the same approximate length, the stressed syllable that keeps landing in the same position — more quickly and systematically than the writer who is reading for meaning simultaneously. Its weakness is in distinguishing between rhythmic problems that matter and rhythmic problems that don't: not every instance of rhythmic repetition is a problem, because sometimes the repetition is deliberate — anaphoric, building — and the AI may flag it as monotony. The writer's judgment about when repetition is deliberate and when it has become automatic is what the AI's systematic reading is supplementing, not replacing.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Oral Revision",
      blocks: [
        {
          type: "tip",
          icon: "🎵",
          name: "Read Every Revision Aloud — The Ear Catches What the Eye Normalizes",
          paragraphs: [
            "At least one complete revision pass of any piece — not just the rhythm pass, but any revision pass — should be conducted entirely through reading aloud. Read at the speed of natural speech, not faster. Pause fully at every period. Mark every sentence where you stumble — where the syntax trips the tongue, where the rhythm forces you to rush past words you should be landing, where you find yourself rereading a sentence to understand it. Mark every sentence where you rush — where the rhythm is carrying you faster than the content warrants, where the prose is moving before the reader has had time to receive what has just arrived. These are the sentences that need revision. Not the sentences that are grammatically incorrect — those are visible on the page. The sentences the ear catches are the ones whose rhythm is wrong: locally correct, globally misaligned with the prose's sonic intentions.",
            "The specific mechanics: read aloud in a room where no one will hear you, or where you are comfortable being heard. Hold a pencil and mark as you go — do not stop to revise during the reading. Complete the full reading before revising, because the problems you discover on page three may be caused by a pattern established on page one, and revising page three before you have seen the full pattern is revising the symptom rather than the cause. After the full reading, go back to the marks and revise from the largest pattern to the smallest: first the structural rhythmic problem (uniform sentence length throughout a passage), then the paragraph-level problem (the paragraph that doesn't breathe), then the sentence-level problem (the individual sentence that ends weakly or continues past its completion).",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Music You Are Writing Toward",
      blocks: [
        {
          type: "journal",
          title: "What Piece of Music Resembles the Experience You Want Your Prose to Create",
          question:
            "What piece of music — a specific piece, a specific recording — most closely resembles the experience you want your prose to create? Not the subject matter, not the mood in general terms — the specific sonic experience: the tempo, the dynamic range, the relationship between complexity and simplicity, the moments of acceleration and rest, the way the piece handles silence. What is that music doing rhythmically, dynamically, tonally that you want your writing to do? And: are you currently doing it? Does the prose in the thesis produce, in its rhythm and its sound, anything like the experience that music produces in its listener? If not — if the music you are writing toward and the prose you are actually producing are rhythmically far apart — what is the distance between them, and what specific revision would close it? Write for twenty minutes. Identify the music first; then describe it as precisely as you can; then apply its description to the thesis as a diagnostic.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The comparison between a piece of music and a piece of prose is an analogy, not a prescription — prose cannot replicate musical experience, and the attempt to make it do so directly produces purple writing rather than musical prose. But the analogy is instructive as a diagnostic: it names, in the terms of a different art form, what the prose is trying to do rhythmically and whether it is doing it. The writer who knows they are writing toward the specific kind of music Coltrane makes — the long, exploratory, forward-moving, never-quite-resolving — has more precise rhythmic intentions than the writer who knows only that they want the prose to be 'beautiful.'",
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
            "By the end of this week you should have: read two pages of thesis draft aloud and marked every rhythmic problem; revised those two pages specifically for rhythm (sentence length variation, stressed syllable placement, sound repetition, paragraph arc and breath) with the 300-word analysis of specific changes and their effects; written 1,500–2,000 words of thesis in Spring Session 6 with the full session log entry; read *Several Short Sentences About Writing* in one sitting, aloud if possible; read the Tufte rhythm chapter with pencil and attention to examples; listened to Morrison and Baldwin recordings without reading along; completed the Sonic Reading exercise with all four reflection questions and revised the two AI-identified problematic sentences; completed the period audit (two pages, every period questioned for whether the sentence has earned its rest) and written one new paragraph in which every sentence earns its period and no two consecutive sentences have the same approximate rhythm.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 25",
          paragraphs: [
            "Week 25 is Minimalism and Maximalism — Two Syntactic Philosophies. After this week's deep attention to the sentence's sonic properties, Week 25 examines the two governing stylistic philosophies that organize prose writers' relationship to the sentence at large: the minimalist conviction that the sentence should say the minimum the material requires, and the maximalist conviction that the fullness of consciousness cannot be represented by abbreviation. Hemingway and Carver on one side; Faulkner and Morrison on the other — and the question of where your thesis belongs on the spectrum, and whether the answer is consistent throughout the draft. Phase 6 of the grammar curriculum begins with word-level craft and diction: Latinate versus Anglo-Saxon, the monosyllabic sentence, concrete versus abstract language.",
          ],
        },
      ],
    },
  ],
};
