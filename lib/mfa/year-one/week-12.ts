import type { WeekData } from "@/lib/mfa/types";

export const week12Data: WeekData = {
  weekNumber: 12,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Dialogue II — Voice & Dialect",
  emphasizedWord: "Voice & Dialect",
  deck: "Every character should sound distinct from every other. This week studies how writers build those distinctions — through vocabulary, rhythm, what a character avoids saying, and how they respond to silence — and how to represent dialect without condescension.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Voice Differentiation" },
    { label: "Grammar", value: "The Complex Sentence" },
    { label: "Exercise", value: "750–975 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Voice That Could Only Be This Person",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Novice writers often give all their characters the same vocabulary, the same sentence rhythms, the same way of responding when a question makes them uncomfortable. The dialogue exchanges between characters are technically distinct — different names, different opinions — but beneath the surface, the same voice is speaking. The reader senses this before they can name it. The scene loses the pressure that comes from two genuinely different consciousnesses in contact, and what remains is a kind of puppet theater: the author arguing with themselves, both puppets wearing the same vocal fingerprint.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Voice differentiation is one of the hardest skills in dialogue writing, and one of the most important. It begins with understanding that a character's voice is not a collection of verbal tics — it is the expression of an entire psychology. How a character speaks follows from who they are: their education and class, their specific history with language, what they were rewarded for saying and punished for saying, what they have learned not to name directly, what subject matter they circle without landing on. The voice is the person. A character who sounds different from every other character in your fiction sounds different because ",
            { text: "they are different", emphasized: true },
            " — not because you have assigned them a catchphrase.",
          ],
        },
        {
          type: "pullquote",
          quote: "If you are using dialect or vernacular to characterize, you must know it well enough that you can see when you are patronizing it.",
          cite: "— craft principle, after Ursula K. Le Guin",
        },
        {
          type: "paragraph",
          content: [
            "The primary tools of voice differentiation are more subtle than dialect or accent. They are: ",
            { text: "vocabulary level and register", emphasized: true },
            " — whether a character reaches for the Latinate or the Anglo-Saxon, the technical or the vernacular, the formal or the clipped; ",
            { text: "sentence rhythm and length patterns", emphasized: true },
            " — whether a character thinks in long, subordinated clauses or in short declarative bursts, whether they qualify and hedge or commit and move on; ",
            { text: "habitual phrases and avoidances", emphasized: true },
            " — the words a character returns to, and equally important, the territory they refuse to enter; and ",
            { text: "response to silence and to questions", emphasized: true },
            " — whether a character fills silence immediately, whether they answer the question asked or the question they wished had been asked, whether they deflect with humor or go still.",
          ],
        },
        {
          type: "card",
          title: "Four Tools of Voice Differentiation",
          paragraphs: [
            "Vocabulary and register: Not just education level but specific lexical habits. One character says 'concerned'; another says 'worried'; a third never names the state at all and just crosses to the window. Register shifts under pressure — notice how the same character speaks differently when frightened versus comfortable.",
            "Sentence rhythm and length: One character thinks in long, subordinated sentences full of qualification. Another thinks in short, paratactic statements that refuse to establish causal relationships. These rhythms should persist even when the character is off-balance — the rhythm is the psychology.",
            "Habitual phrases and silences: What a character says too often is a tell. What they never say — the subject they will not enter, the word they substitute for the one that would be accurate — is the deeper tell. Both are characterization.",
            "Response to questions and silence: Does the character answer directly, deflect, over-explain, go quiet, answer a different question? How they respond when they don't want to respond is the voice under pressure, which is when voice most reveals character.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Dialect requires separate treatment, because it carries a history that pure voice differentiation does not. The representation of non-standard speech — regional dialect, working-class vernacular, second-language inflection, the speech patterns of specific ethnic or cultural communities — has been used throughout literary history as a tool of condescension: a way of marking characters as provincial, uneducated, or comic by contrast with a standard that the prose implicitly endorses. This history cannot be ignored. It shapes how readers receive dialect on the page, and it places an ethical obligation on the writer: you must know the dialect well enough to render it with love, with precision, and without the implicit sneer that phonetic transcription so often carries.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Hurston's ",
            { text: "Their Eyes Were Watching God", emphasized: true },
            " is the canonical counterexample — dialect used not to diminish but to ",
            { text: "honor", emphasized: true },
            " the richness and rhythmic intelligence of African American vernacular speech. The novel's dialogue is specific, musical, and impossible to mistake for any other voice in American fiction. Hurston knew the dialect from the inside, rendered it with precision, and refused the apologetic hedging that would have diluted it into something acceptable to an outside audience. The lesson is not that dialect is safe if you love it enough. The lesson is that love is necessary but not sufficient — love plus knowledge plus craft is the minimum. If you are writing dialect you do not know from the inside, the ethical obligation is to do the work: to read, to listen, to consult, to revise until the representation is specific enough to be honest.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Voice Differentiation Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, voice differentiation operates at the level of the prose itself, not just the dialogue. The focal character's vocabulary, rhythm, and particular way of organizing the world should shape every sentence in close third-person narration — so that even without dialogue, a reader can feel whose consciousness they are in. This integration of character voice into the narrative prose is one of the things that distinguishes literary fiction from genre fiction that handles POV more mechanically. When Faulkner shifts focal characters in The Sound and the Fury, the prose itself transforms: different syntax, different vocabulary, different relationship to time.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, character voice must be established within the first three to five lines of a character's first scene. Script readers evaluate this immediately — a character whose voice is indistinct from the first exchange is a character the writer has not yet found. The constraint is clarifying: with no access to interiority and no narrative prose to carry the characterization, the dialogue must do everything. Every line is a test. In playwriting, voice differentiation carries the additional weight of theatrical space: the audience cannot reread, cannot flip back, cannot slow down. Voice must be immediate and unmistakable from the first entrance.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "When the memoirist reconstructs the voices of real people — family members, former partners, colleagues, adversaries — the ethical stakes of voice differentiation are at their highest. Getting a real person's voice wrong is not just a craft failure; it is a misrepresentation of a specific human being who may read the work. The ethical minimum: reconstruct the voice from memory as accurately as possible, acknowledge the reconstruction's limits, and avoid making real people more articulate, more villainous, or more coherent than they actually were for narrative convenience. Matthew Salesses's Craft in the Real World addresses this and much more in its treatment of whose stories get told and how.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Complex Sentence",
      blocks: [
        {
          type: "grammar",
          title: "Phase 1 · Topic 12 of 60 — The Complex Sentence",
          intro: [
            "You have studied the compound sentence — two independent clauses joined as equals. The complex sentence is structurally different: it contains one independent clause and at least one dependent clause, where the dependent clause cannot stand alone and is subordinate to the independent one. The relationship between them is established by a subordinating conjunction — and as last week's exercise began to reveal, the choice of subordinating conjunction is never neutral. Each one makes a specific claim about the logical relationship between the two clauses.",
            "The subordinating conjunctions available to you are not interchangeable. They fall into rough categories: causal (because, since), concessive (although, even though, while), conditional (if, unless, provided that), temporal (when, before, after, until, as soon as, once), and comparative (as, than). Writing the same event with different subordinating conjunctions does not produce the same sentence with different words — it produces a different sentence, one that makes a different claim about how the world works.",
          ],
          rule: "The complex sentence contains one independent clause and at least one dependent clause, whose relationship is established by a subordinating conjunction. The conjunction chosen is not a stylistic preference but a philosophical claim: causal, concessive, conditional, temporal, or comparative — each makes a different assertion about the relationship between the ideas it joins.",
          examples: [
            {
              label: "Causal — asserts causation",
              text: "She left the party early because she could see how the night was going to end.",
            },
            {
              label: "Concessive — asserts effort against resistance",
              text: "She stayed at the party although she had known for an hour how the night was going to end.",
            },
            {
              label: "Conditional — asserts contingency",
              text: "She would have left the party earlier if she had let herself see how the night was going to end.",
            },
            {
              label: "Temporal — asserts sequence",
              text: "She finally left the party once there was no longer any way to misread what she had seen.",
            },
            {
              label: "Same event, four different psychological claims",
              text: "Each sentence above is about the same character at the same event. But 'because' implies she saw clearly and acted. 'Although' implies she saw clearly and stayed anyway. 'If' implies she was not letting herself see. 'Once' implies she reached a threshold. These are four different characters.",
            },
          ],
          outro: [
            "The complex sentence is one of the primary instruments of motivation in fiction. Because it must establish a logical relationship between its clauses, it forces the writer to be explicit about causation, concession, condition, and time — the architecture of why characters do what they do. A writer who relies too heavily on compound sentences (and... and... but...) is often a writer who is leaving the motivational architecture of their story implicit when it needs to be made visible.",
            "The practical exercise this week extends from last week's: take compound sentences and ask not just whether they should be subordinated, but which subordinating conjunction makes the most accurate claim. The conjunction is a commitment. Make it deliberately.",
          ],
          exercise:
            "Take a single event — a character's decision, action, or arrival — and write it six times, each version using a different subordinating conjunction: because, although, when, if, until, once. Read all six aloud. Each version should feel like a different story about a different psychological state. Choose the one that is most accurate for the character and scene you are developing, and identify precisely why the others are less accurate.",
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
              href: "https://bookshop.org/p/books/their-eyes-were-watching-god-zora-neale-hurston/6697453",
              note: "If you read Chapters 1–4 for Week 10, continue from Chapter 5. If you are reading for the first time, begin at the beginning. This week read specifically for dialogue: how does Hurston differentiate characters through speech? How does she render dialect with specificity and love rather than distance? Mark the moments where the dialogue is doing the most work — where voice and subtext are fully integrated.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Craft in the Real World",
              author: "Matthew Salesses",
              href: "https://bookshop.org/p/books/craft-in-the-real-world-rethinking-fiction-writing-and-workshopping-matthew-salesses/14726387",
              note: "Read the sections on dialect, cultural authenticity, and whose voices get represented and how. Salesses is rigorous and necessary on the question of what 'craft' actually means when it has historically been defined by a narrow cultural position. This book will ask you to interrogate assumptions you may not have known you were making. Read it with the willingness to be made uncomfortable.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Sopranos (pilot script)",
              author: "David Chase",
              href: "https://www.scriptfly.com/scripts-database/the-sopranos/",
              note: "Free to find via script databases or the Writers' Guild archive. Read the first 20 pages only — enough to encounter five or six characters. Study how Chase establishes a distinct voice for each character within a few lines of their first entrance. Cover the character names and read the dialogue aloud: can you tell who is speaking from voice alone? Notice how vocabulary, rhythm, and what each character avoids saying differentiates them without any character description.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Voice Test",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Five Voices: Write the same piece of information delivered by five different characters with five completely different backgrounds, educations, and inner lives. The information is: \"The car isn't going to make it across the state.\" Each character delivers this in their own voice, in their own context, without knowing they are delivering information — they are simply speaking as they speak. Fifty to seventy-five words per character. The five deliveries should be so distinct that you could remove all identifying information and a reader could tell them apart.",
            "Part Two — Two Voices in Contact: Choose two of your five characters. Write a scene — a real scene with a turn, not just an exchange of lines — in which these two characters have a conversation. The neutral content of the conversation can be anything; what matters is that the two voices remain unmistakably distinct throughout, and that the difference between them creates friction or pressure that the scene turns on.",
            'Constraints for both parts: do not use dialect as a substitute for the other tools of voice differentiation. If you write dialect, it must be grounded in genuine knowledge of the speech community. In Part Two: use only "said" and "asked" as attribution tags, and write at least two action beats that reveal character through physical behavior rather than speech.',
          ],
          target: "750–975 words (both parts combined)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 12 — The Voice Differentiation Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste the Part Two scene from this week's exercise — the full scene with both characters speaking. Then use the prompt below. The AI will read the dialogue without character names and assess whether the two voices are genuinely distinct.",
          prompt:
            "I am going to paste a scene with two characters speaking. Before you read it, I am going to remove all character names and attribution tags, leaving only the spoken lines and any action beats. Read what remains and answer: (1) Can you tell the two speakers apart by voice alone — by vocabulary, rhythm, what they say and avoid saying? Describe what distinguishes them specifically. (2) Are there any lines where the two voices sound interchangeable — where you could not confidently assign the line to one character rather than the other? Quote them. (3) Suggest one specific verbal habit — a phrase, a syntactic pattern, a type of avoidance — for each character that would make them more distinct without adding dialect or affectation. Here is the scene with names removed: [paste your scene with character names replaced by Character A and Character B].",
          questions: [
            "Does the AI correctly identify which character is which from voice alone?",
            "Which lines does it flag as interchangeable? Do you agree that those are where the voices blur?",
            "Are its suggested verbal habits for each character consistent with who those characters are?",
            "Where in the scene is the voice differentiation working hardest — and what is it doing there that the blurry sections are not?",
          ],
          note: "The test of replacing character names with A and B before pasting is the most useful self-editing move in dialogue revision. Do it yourself before using the AI. Read back through your own scene with names removed and mark every line where you are not certain which character is speaking. Those are the lines to revise — not by changing their content, but by making the voice more specifically this person's and no one else's.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Read-Aloud Dialogue Test",
      blocks: [
        {
          type: "tip",
          icon: "🎭",
          name: "Act It and Listen",
          paragraphs: [
            "Read your dialogue scenes aloud — not just reading them to yourself but performing them, changing your voice for each character as far as you are able. If you lose track of who is speaking without looking at the attribution, the voices are not yet distinct. This is not a peripheral failure; it is the central test. The reader experiences dialogue faster than they experience prose, and if two characters' voices are indistinguishable at reading speed, the differentiation that exists on careful inspection is not enough.",
            "Reading aloud also reveals a second problem invisible on the page: unnatural phrasing. Lines that look fine as written text often cannot be produced by a human throat without awkwardness. If you stumble on a line, the line is failing. Revise until you can speak it without hesitation. Dialogue that cannot be read aloud naturally is not finished.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Someone You Know Through Their Speech",
      blocks: [
        {
          type: "journal",
          title: "Someone You Know Through Their Speech",
          question:
            "Describe someone you know primarily through how they speak — someone whose speech is so distinctive that you could identify them in a transcript without their name attached. What specific words do they use that others don't? What subjects do they return to? What do they never say, and what do you suspect that avoidance is about? What does their sentence rhythm tell you about how they think? And: what does their speech reveal about them that they probably believe they are keeping private?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The people in your life who speak most distinctively are a library of voice. You do not need to transcribe them — their voices are material, not source. But paying close attention to what makes a real person's speech unmistakably theirs is one of the most direct routes to understanding what you are trying to build when you write dialogue.",
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
            "By the end of this week, you should have: written five voice-differentiated deliveries of the same information and a two-character scene in which both voices are unmistakable; completed the complex sentence exercise with six subordinating conjunctions; read the Hurston chapters specifically for dialect and voice craft; and used the AI audit — with character names removed — to confirm that your two characters' voices are distinct at the level of the line.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 13",
          paragraphs: [
            "Week 13 moves from character to place. Setting is not backdrop — in the best literary fiction it is a participant: shaping character psychology, generating atmospheric pressure, and carrying thematic weight that no amount of explicit statement could achieve. You will study how the best writers integrate place into story at the level of the sentence, not just as scene-setting description.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A final note: voice differentiation is not achieved by making characters quirky. Quirks are external and can be removed. Voice is structural — it follows from psychology, history, and the specific ways a character has learned to use and withhold language. Build the person first. The voice arrives with the person, if the person is fully built.",
          ],
        },
      ],
    },
  ],
};
