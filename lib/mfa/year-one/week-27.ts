import type { WeekData } from "@/lib/mfa/types";

export const week27Data: WeekData = {
  weekNumber: 27,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Voice & Tone — The Sound of the Self on the Page",
  emphasizedWord: "The Sound of the Self on the Page",
  deck: "Voice is the quality that makes us feel a living consciousness is behind the words. It is the sum of every stylistic choice a writer makes — but it is irreducible to any single element. This week you learn to identify it, analyze it, and begin to deliberately inhabit your own.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Voice & Tone" },
    { label: "Grammar", value: "Phase 2 Synthesis" },
    { label: "Exercise", value: "600+ words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Irreducible Signature",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Voice is the quality in writing that makes us feel a living consciousness is behind the words. It is not the subject matter — two writers can write about the same subject and produce work that is recognizably different in voice from the first sentence. It is not the genre or the form. It is not the point of view, though the POV choice influences how voice manifests. Voice is the sum of every stylistic choice a writer makes — sentence length, word choice, sentence rhythm, punctuation habits, what is included and excluded, the implied attitude toward the subject and the reader, the characteristic relationship to time and to uncertainty — and yet it is irreducible to any single element. You cannot extract voice from prose the way you can extract a metaphor or identify a sentence type. Voice is what is left when you have accounted for all the individual choices and there is still something that cannot be explained by any of them.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Tone is voice's emotional register: the implied attitude of the writer toward their subject and their reader. Voice can remain consistent across many different tonal registers — Baldwin's voice is unmistakably his whether the tone is elegiac, furious, tender, or ironic. The voice is the constant; the tone is the variable. A writer without a developed voice has no constant — their tone is all they have, and when the tonal register changes, the reader loses the sense of a continuous consciousness behind the words.",
          ],
        },
        {
          type: "pullquote",
          quote: "The moments in a draft where you unconsciously broke into your own voice are often the best moments in the draft. Find them in revision, and protect them.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "The common confusion is between voice and style, and between both of those and persona. Style is the set of choices a writer makes consciously — the decision to write long sentences or short ones, to favor Anglo-Saxon diction over Latinate, to use the em dash aggressively or avoid it. Style is learnable, teachable, and changeable. Persona is the performed identity a writer adopts for a specific work — the speaker of a poem, the narrator of an essay. Voice is something else: it is what persists across all the changes of style and persona, the quality that makes a piece of writing recognizably the same writer's work whether the style is spare or dense, the persona confessional or detached. Voice is not taught. It is discovered — by reading one's own work with the specific question of where the prose sounds most fully alive, and protecting and extending those moments.",
          ],
        },
        {
          type: "card",
          title: "What Voice Is Made Of — The Five Analyzable Features",
          paragraphs: [
            "Sentence architecture: characteristic sentence lengths and the proportion of different sentence types (cumulative, periodic, short power sentences, fragments). Some voices are predominantly long and cumulative — Woolf, Faulkner, Baldwin at his most oratorical. Others are predominantly short and declarative — Hemingway, Carver, Hempel. Most mature voices have a characteristic range and a characteristic default.",
            "Diction register: the characteristic level of vocabulary — whether the prose favors plain Anglo-Saxon monosyllables or Latinate multisyllabic abstraction, whether it gravitates toward the concrete and sensory or the abstract and conceptual, whether it allows slang and vernacular or excludes them. Diction is not intelligence — some of the most powerful prose ever written is almost entirely monosyllabic.",
            "Relationship to the reader: the implied presence or absence of a reader, and the writer's stance toward them. Some voices are confiding — they lean toward the reader, assume a shared understanding, address the reader as an equal in the work of figuring something out. Others are declarative — they present their findings, assume the reader's reception, do not seek confirmation. Others are adversarial, or seductive, or deliberately withholding.",
            "Relationship to time: how the prose handles duration, sequence, retrospection, and summary. Some voices move through time quickly, compressing years into paragraphs. Others arrest time and dwell. The characteristic relationship to time is part of how a voice enacts its claims about what matters.",
            "What the voice notices: the characteristic subjects of attention, the kinds of details that are chosen, the sensory modalities that are favored (visual, aural, tactile), the scale of observation (panoramic or microscopic). Voice is partly what a consciousness notices, and two writers attending to the same scene will attend to different things — and that difference is part of what makes each voice irreducibly itself.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The exercise this week — the Voice Autopsy — is an act of structural analysis applied to a voice you admire. The goal is not to produce an imitation of that voice but to identify the formal mechanisms that produce its characteristic effects, and then to practice those mechanisms on your own material. The result will not sound like the writer you analyzed — your subject matter, your sensibility, and your other formal habits will ensure that. What it will do is expand your range by forcing you to inhabit a different set of constraints than your habitual ones. That expansion is how voice develops: not by finding your voice and staying inside it, but by discovering, through the practice of other voices, the full extent of what your own voice can do.",
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
              text: "In literary fiction, voice is not limited to first-person narration — a third-person narrator has a voice as distinctly as any first-person narrator, and the distance between the narrator's voice and the character's voice (via FID) is itself a craft instrument. The question for the literary fiction writer is whether the narrative voice is fully inhabited or whether it is a serviceable but generic vehicle for story delivery. The generic voice — competent, clear, undistinguished — is the most common failure of publishable literary fiction. It does nothing wrong; it does nothing the reader will remember. The developed voice makes the prose itself a reason to read.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Voice in screenwriting lives primarily in the action lines — the prose description of what the camera sees — and in the quality of the dialogue. Two screenwriters given the same scene to write will produce different action lines: one will be spare and precise, another atmospheric, another ironic. That difference is voice, and readers of many scripts will recognize it. For playwrights, voice is even more distributed: it lives in what the stage directions imply, in the syntax of the dialogue, in the characteristic rhythms of the characters' speech as well as in the playwright's instructions. Pinter's stage directions are as much his voice as his dialogue.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In CNF and memoir, voice carries the full weight of the implicit argument: this consciousness, attending to this material in this way, is a valid and interesting way to understand this experience. The reader's trust in the memoirist is partly a trust in the voice — the sense that behind the prose is a specific intelligence that will not waste the reader's time, that has actually looked at the material, that has not settled for the first available response. Voice in memoir is also the guarantee of honesty: a voice that is performing — reaching for effect, borrowing attitudes, putting on a register that does not belong to the writer — is detectable, and it breaks the contract with the reader that memoir requires.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 2 Synthesis",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 27 of 60 — The Full Prose Paragraph: A Phase 2 Synthesis",
          intro: [
            "Phase 2 has built a complete architecture of sentence forms: the cumulative sentence (Topic 19), the periodic sentence (Topic 20), balanced sentences and the rhetoric of twos (Topic 21), serial constructions and the rhythm of threes (Topic 22), sentence variety and rhythm (Topic 23), the short sentence as power tool (Topic 24), the one-sentence paragraph (Topic 25), and the rhythm-conscious paragraph (Topic 26). This week synthesizes all eight into a single extended exercise: writing a paragraph of at least 200 words that uses at least five of these forms deliberately, and then annotating it.",
            "The synthesis exercise is not a demonstration of technical range — it is a test of whether the forms have been internalized. When the grammar is fully working, the writer does not think about which sentence type to use next; they think about what the content requires, and the form arrives naturally because the full range of forms is available as instinct rather than as a checklist. The annotation performed after writing reveals whether the forms appeared through conscious choice or through something closer to feel — and both are valid, and distinguishable.",
          ],
          rule: "Write the paragraph without consulting the list of forms. Think only about the experience you want to create in the reader — the emotional effect, the rhythm, the pace of revelation. Then, after the paragraph is complete, annotate it: identify every sentence type present. Where Phase 2 forms appear that you did not consciously choose, note that they appeared through feel. Where forms are absent that would have served the content, note where they could be added in revision.",
          examples: [
            {
              label: "A paragraph before annotation",
              text: "She had not been back to the house in eleven years. The windows were new — someone had replaced the original frames with something aluminum and wrong — but the elm tree was the same, taller now, its branches reaching over the roof in a way that suggested the house had always been theirs, the tree's, not the people's who had lived inside it. She stood at the gate. She did not go in.",
            },
            {
              label: "The same paragraph annotated",
              text: "She had not been back to the house in eleven years. [Short power sentence — establishes the gap cleanly, no modifier.] The windows were new — someone had replaced the original frames with something aluminum and wrong — but the elm tree was the same, taller now, its branches reaching over the roof in a way that suggested the house had always been theirs, the tree's, not the people's who had lived inside it. [Cumulative/mid-branching — the em dash interruption, then the long right-branching modifier that arrives at the tree's claim of ownership.] She stood at the gate. [Short power sentence — stillness after motion.] She did not go in. [One-sentence paragraph — the refusal, isolated, carrying the weight of the full paragraph.] Phase 2 forms present: short power sentence (×2), cumulative, mid-branching interruption, one-sentence paragraph. Balanced sentence absent — could be added to the second sentence to sharpen the contrast between the wrong windows and the right tree.",
            },
          ],
          outro: [
            "The annotation exercise is the most important part of the synthesis: it makes visible whether the forms are working instinctively or mechanically. Instinctive use — where the form arrived through feel and the annotation confirms it — is the evidence that Phase 2 has been internalized. Mechanical use — where the writer chose a form from the list and tried to apply it — produces prose that sounds like a grammar exercise. The goal is always to think about the content and trust that the form will follow from the content, if the forms have been sufficiently practiced.",
            "Phase 2 is now complete as a formal curriculum. The forms will continue to develop through use — through the remaining spring semester exercises, through the thesis work, through reading with annotation. But the full vocabulary is now available. Phase 3 (phrases and constructions) begins in Year Two.",
          ],
          exercise:
            "Write a paragraph of at least 200 words on any subject from your current writing — a character, a scene, a moment from your thesis project. Write without consulting the list of Phase 2 forms. Then annotate every sentence: identify the form, note whether it appeared through conscious choice or through feel, and note where a form is absent that would have served the content better. Finally, make one targeted revision: add one Phase 2 form that is currently absent at a place where it would improve the passage. Write one sentence explaining why that form serves that moment.",
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
              title: "Steering the Craft",
              author: "Ursula K. Le Guin",
              href: "https://bookshop.org/p/books/steering-the-craft-a-twenty-first-century-guide-to-sailing-the-sea-of-story-ursula-k-le-guin/6697453",
              note: "Read the 'Voice' chapter. Le Guin's account of voice is the most precise and useful short treatment available — she distinguishes voice from style, from persona, from mere idiosyncrasy, and she provides specific exercises for developing it. Read with the five-feature framework from the lecture in hand: where in Le Guin's account of voice do the five features appear, and what does she add that the framework does not capture?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"Notes of a Native Son"',
              author: "James Baldwin",
              href: "https://bookshop.org/p/books/notes-of-a-native-son-james-baldwin/6697453",
              note: "Read the title essay — widely available online and in the collection. Baldwin's prose voice is one of the most distinctive in American literature, and 'Notes of a Native Son' is its fullest early demonstration: the long periodic sentences that build and build; the Anglo-Saxon directness that punctuates the Latinate complexity; the furious tenderness; the way the essay holds personal grief and political analysis simultaneously without resolving the tension between them. Apply the five-feature framework: what are Baldwin's characteristic sentence architecture, diction register, relationship to the reader, relationship to time, and characteristic subjects of attention?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Slouching Towards Bethlehem, opening essay",
              author: "Joan Didion",
              href: "https://bookshop.org/p/books/slouching-towards-bethlehem-joan-didion/6697453",
              note: "Read the opening essay of Didion's first essay collection — 'Some Dreamers of the Golden Dream' is widely available and the best entry point into Didion's voice as a structural instrument. Didion's voice is the opposite of Baldwin's in almost every measurable feature: where Baldwin builds long periodic architectures, Didion fragments; where Baldwin is oratorical, Didion is withholding; where Baldwin addresses the reader directly, Didion creates distance. Apply the same five-feature framework. Then ask: what is it that makes both voices immediately recognizable as belonging to a specific intelligence, despite being so different in their formal properties?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Voice Autopsy",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Analysis (written, not counted in word total): Choose a passage of 300 or more words from a writer whose voice you admire — one of this week's readings, or another writer whose prose you find deeply recognizable. Apply the five-feature framework: identify three specific grammatical and structural features that contribute to the voice. Be precise — not 'Baldwin writes long sentences' but 'Baldwin uses periodic sentences with multiple subordinate clauses that delay the main clause until the final position, creating a pressure that the sentence's arrival releases.' The more specific the analysis, the more useful it will be for the writing that follows.",
            "Part Two — Embodiment (300 words): Write 300 words on your own subject — not the writer's subject, not an imitation of their content — consciously using the three structural features you identified. This is not imitation: the content is yours, the sensibility is yours, the subject is yours. What you are borrowing is the formal constraints: the sentence architecture, the diction register, the relationship to the reader. Write toward those constraints as though they were a form (a sonnet, a villanelle) rather than a style to mimic.",
            "After both parts: write one paragraph (not counted) noting where the borrowed constraints felt generative — where they pushed you toward language you would not have found in your habitual mode — and where they felt like a straitjacket that prevented you from saying what you meant. Both kinds of friction are valuable information about the difference between your natural formal habits and the habits you practiced.",
          ],
          target: "300 words of analysis + 300 words of embodiment (600+ words total)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 27 — The Voice Map",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Find the paragraph from your own writing this year that you are most satisfied with — the one that sounds most fully like you, where the prose is most alive, where you can hear your own voice most clearly. Paste it. Use the prompt below.",
          prompt:
            "Read this paragraph carefully. Identify five specific features of this writer's voice — not themes or subjects, but structural and linguistic features. Be specific enough that these five features could be used as a partial recipe to reproduce the voice. Address: (1) What kind of sentences does this writer write — what are the characteristic lengths, structures, and forms? (2) What words and diction register does this writer favor — plain or ornate, concrete or abstract, Anglo-Saxon or Latinate, vernacular or formal? (3) What is this writer's implied relationship to the reader — confiding, declarative, adversarial, intimate, withholding? (4) How does this writer handle time — quickly, with compression, or with dwelling and dilation? (5) What does this writer notice — what kinds of details, what sensory modalities, what scale of observation?",
          questions: [
            "Which of the five features the AI identifies did you already know was part of your voice? Which surprised you?",
            "Which feature is the AI most specific and precise about — where does its description feel like an accurate map of something real in the prose?",
            "Which feature feels generic or inaccurate — where does the AI's description not capture what is actually happening in the language?",
            "After reading the five features: what is the feature of your voice that you most want to develop further? What would it mean to push that feature further, more fully into itself, less moderated?",
          ],
          note: "The voice map is not a definition of your voice — it is a partial description of your voice as it currently exists in one paragraph. Voice develops; the map will be different in six months. But having a specific, structural description of what your prose currently does — rather than a vague intuition that some of your writing is better than other writing — gives you a target for revision and a direction for development. Keep this map. Return to it when you are revising and ask: is this passage moving toward or away from these features?",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Authenticity Test",
      blocks: [
        {
          type: "tip",
          icon: "🎙",
          name: "Where Do You Sound Like Yourself?",
          paragraphs: [
            "Read your most recent draft aloud — not silently, aloud — at a natural speaking pace. Listen for the passages where you sound like yourself: where the prose has a specific quality of being inhabited, where the language feels like it came from inside rather than being assembled from outside. Then listen for the passages where you sound like a writer trying to sound like a writer — where the prose is reaching for an effect rather than enacting one, where the vocabulary is slightly more elevated than it needs to be, where the sentence structure is doing what it thinks literary sentences should do rather than what this particular content requires.",
            "The passages where you unconsciously broke into your own voice are often the best passages in the draft. They arrived when you were thinking about the content rather than the writing, which is exactly the condition under which voice becomes available. Find those passages in revision. Identify what formal features they share. Then ask: why did I leave those features behind in the other passages? What was I trying to achieve instead? The answer is usually: I was trying to sound more literary, more serious, more like the writers I admire. The revision direction is almost always back toward the authentic passages, not forward toward the performed ones.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "When You Most Sound Like Yourself",
      blocks: [
        {
          type: "journal",
          title: "When You Most Sound Like Yourself",
          question:
            "When do you most sound like yourself on the page? What subject, what emotional temperature, what situation in the writing brings your real voice out — the voice that is fully inhabited, that does not reach for effect, that is not trying to sound like anything except exactly what it is? Is it when you are writing from anger? From grief? From the specific pressure of having to explain something you only half understand? From the pleasure of close attention to a physical world? And: what is the voice you perform when you are not in your real voice — what is the writer you become when you are trying to sound like a writer? What does that performed voice want? What is it afraid of?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The gap between the voice you perform and the voice you actually have is the most productive gap in a writer's development. The performed voice is usually a protection — it keeps the writer at a safe distance from the material, at a safe distance from being fully seen. The real voice is the one that is willing to be seen. The rest of the year's work is, in part, about closing that gap.",
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
            "By the end of this week you should have: completed the Voice Autopsy — analyzed a passage from an admired writer using the five-feature framework and written 300 words of your own material using those same formal constraints; pasted your best paragraph from the year into the AI voice map exercise and received a specific structural description of five features of your emerging voice; read Baldwin's 'Notes of a Native Son' and Didion's opening essay with the five-feature framework applied to both; written the Phase 2 synthesis paragraph with full annotation; and identified, by reading aloud, the passages in your most recent draft where you are most fully in your own voice.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 28",
          paragraphs: [
            "Week 28 is a cross-genre specialization week on the ethics and craft of the narrating self — deepening Week 27's voice work for CNF and memoir writers while offering a related inquiry for fiction writers. Vivian Gornick's distinction between the narrator and the memoirist is the organizing concept. For fiction writers, the parallel inquiry is the relationship between the author's voice and the narrator's voice — how those two can be distinguished, and what happens when they collapse.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Phase 2 of the grammar curriculum is complete. Across nine weeks, it has built the full architecture of sentence forms available to the writer of literary prose — cumulative, periodic, balanced, serial, varied, short and powerful, and organized into rhythm-conscious paragraphs. The synthesis exercise this week confirmed whether those forms have been internalized as instinct or are still operating as a checklist. The evidence of internalization is that the forms appear in the annotation as things you did rather than things you tried to do. If the checklist is still present, keep writing: it disappears with use, and use is all it requires.",
          ],
        },
      ],
    },
  ],
};
