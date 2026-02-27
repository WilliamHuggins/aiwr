import type { WeekData } from "@/lib/mfa/types";

export const week33Data: WeekData = {
  weekNumber: 33,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "The Short Story & Its Special Laws",
  emphasizedWord: "Its Special Laws",
  deck: "The short story is not a truncated novel. It is a different species — one that relies on implication over statement, compression, a single dominant effect, and a structural economy that the novel never requires. Understanding what the short story form can do that no other form can is the prerequisite for writing one well.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Short Story Form" },
    { label: "Grammar", value: "Parataxis & Hypotaxis" },
    { label: "Exercise", value: "600 + 200 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "A Different Species",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Poe's formulation — that the short story should produce a 'single effect' that the entire piece subordinates itself to — was made in 1842 and has been refined, disputed, and surpassed by a hundred years of practice, but its central insight remains useful: the short story cannot afford to pursue multiple effects simultaneously the way a novel can. Every element of a short story — its first sentence, its choice of focal character, the objects it notices, the time period it covers — must be doing multiple things at once, and those things must converge. The short story writer who allows an element that serves only one purpose is spending the form's limited resources inefficiently.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The Chekhovian 'gun' and 'shot' principle is the structural expression of this economy: if a gun appears in the first act, it must fire by the third. In the short story context, this means that every element introduced has a formal obligation — it will be required later, and its later appearance will be changed by the earlier one. The short story cannot afford the novel's luxury of objects and characters that exist only for texture, only for the living density of a fully realized world. Everything in a short story is load-bearing. Everything that is not load-bearing should be cut.",
          ],
        },
        {
          type: "pullquote",
          quote: "The short story proceeds by implication. Its power is not in what it says but in what it makes the reader feel is present — the seven-eighths of the iceberg that the reader's imagination completes from the one-eighth that is rendered.",
          cite: "— after Hemingway",
        },
        {
          type: "card",
          title: "Five Special Laws of the Short Story",
          paragraphs: [
            "Implication over statement: the short story cannot afford to state what it can imply. The novel has space to develop understanding over many pages; the short story must produce it in the white space between its rendered moments. The reader of a short story is more actively engaged in meaning-making than the reader of a novel — they must complete what the story leaves unfinished, feel what the story does not say, understand what the story shows without explaining. The short story writer who explains is not trusting the form's fundamental mechanism.",
            "Compression at every level: every sentence, every scene, every image must do multiple things simultaneously. The sentence that only describes, the scene that only advances plot, the image that only sets atmosphere — these are spending the form's resources on single tasks that the form cannot afford. Compression means finding the element that is simultaneously the character revelation, the thematic resonance, the tonal signal, and the plot advance. It exists. The craft is finding it.",
            "The single dominant effect: not Poe's formulation in its strictest sense, but the principle that the short story must know what it is doing — what experience it is producing in the reader, what question it is pursuing, what emotional chord it is building toward. A short story that pursues three equally weighted concerns usually fails to fully develop any of them. The dominant effect is not a theme or a message; it is the specific quality of the reader's experience at the story's end.",
            "The Chekhovian structural move — gun and shot: every element introduced creates an obligation. The obligation need not be obvious; the shot need not be loud. In Chekhov, the gun is often a character's quality, a relationship's unspoken tension, a situation's implication — and the shot is the moment when that quality, tension, or implication is finally forced into the open. The structural move is the formal enactment of inevitability: the reader, looking back, sees that nothing else was possible.",
            "The ending that recontextualizes the beginning: the short story's ending does not merely conclude — it transforms. The story's final image, gesture, or piece of dialogue changes the meaning of everything that preceded it. The reader who finishes 'The Dead' and then returns to the story's opening pages is reading a different story — the same words carry different weight because the ending has changed what they mean. This recontextualization is the short story's specific formal achievement, the thing it can do that the novel, with its different relationship to endings, cannot do as purely.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Contemporary short story architecture has expanded well beyond the single-effect story. Alice Munro's stories contain what feels like entire novels — they cover decades, move between timelines, hold multiple focal characters — and they do this while remaining, formally, short stories: everything is load-bearing, the implication is dense, and the endings recontextualize everything. George Saunders's stories operate through extreme formal pressure — compressed into a formal or narrative constraint that forces the story's content to find shapes it would not find in conventional narration. The short story form is not a set of limitations but a set of specific demands, and the contemporary short story meets those demands in an astonishing range of ways.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Short Form Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The short story and the novel are related but distinct craft problems. A writer who has only written novels may struggle with the short story's economy — the resistance to texture for its own sake, the demand that every element be load-bearing, the need for the ending to recontextualize rather than merely conclude. A writer who has only written short stories may struggle with the novel's different relationship to time, digression, and the secondary character who exists primarily for the density of the world rather than for formal function. The short story is the better training ground for the skills that both forms require at their most demanding level: compression, implication, the management of what is left unsaid.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The short film and the ten-minute play are the screen and stage equivalents of the short story, and they share the same special laws: everything is load-bearing, implication does the work that statement cannot afford, and the ending must transform rather than merely conclude. The short film is one of the most demanding forms in screenwriting precisely because every scene, every object, every piece of dialogue must carry the full weight of a character and a story in ten to twenty minutes. For the playwright, the one-act and the ten-minute play train the same compression discipline. Many of the most accomplished screenwriters and playwrights say that the short form is where they learned to write.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The personal essay and the short lyric essay are CNF's analogs to the short story, and they share its demand for compression and implication. The personal essay that states its theme directly — that tells the reader what the experience meant — has replaced the reader's act of meaning-making with the writer's completed act. The essay that implies, that renders and trusts the rendering to produce understanding, is doing what the short story does at its best. The flash essay and the braided lyric essay are the CNF forms that most fully inhabit these special laws — they are compressed, implicative, and reliant on endings that recontextualize. Writers who move between the short story and the personal essay often find that the skills are more transferable than the forms appear.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Parataxis & Hypotaxis — The Fundamental Syntactic Distinction",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 33 of 60 — Parataxis & Hypotaxis: Choosing Your Syntactic World",
          intro: [
            "Parataxis and hypotaxis are the two fundamental modes of syntactic organization in prose. Parataxis (from the Greek for 'placed beside') coordinates elements without subordinating them — short, additive sentences that place one thing beside the next: 'He came in. He sat down. He didn't speak.' Hypotaxis (from the Greek for 'placed under') subordinates elements inside each other — longer, hierarchical sentences where ideas are embedded: 'When he finally came in, having waited longer than was reasonable, he sat without speaking, as if the act of speech would require an acknowledgment of what had passed between them.'",
            "The distinction matters because it is not merely syntactic — it is epistemological. Parataxis presents without explaining: the paratactic sentence places events side by side and trusts the reader to infer their relationship. Hypotaxis explains while presenting: the hypotactic sentence embeds the relationship between events in the syntax itself, through subordinating conjunctions ('when,' 'because,' 'although,' 'as if') that name the logical or causal connection. Hemingway writes in parataxis; Henry James writes in hypotaxis. Most writers default to one and practice the other rarely. Both are available. Both can serve specific content in specific ways.",
          ],
          rule: "Parataxis is the syntax of action, immediacy, and implication — it presents without explaining, which forces the reader to infer the connections. It is the natural syntax of the short story's compression discipline: paratactic prose trusts the reader with more than hypotactic prose. Hypotaxis is the syntax of analysis, complexity, and embedded relationship — it shows how things connect, which is the syntax of argument, retrospection, and the long sentence that holds multiple things in suspension simultaneously. Know which mode you default to; practice the other deliberately.",
          examples: [
            {
              label: "Parataxis — Hemingway, 'Hills Like White Elephants'",
              text: "'The hills across the dry valley of the Ebro were long and white. On this side there was no shade and no trees and the station was between two lines of rails in the sun.' No subordination, no explanation of relationship. The 'and' is additive, not causal. The reader is given details placed side by side and must infer what they mean.",
            },
            {
              label: "Hypotaxis — Henry James",
              text: "'She had, with her eyes on him, not departed from her previous judgment—which was that, although he might easily be amusing if one chose to take him so, there was no real reason why, if one didn't choose, one should.' The embedded clauses explain and qualify simultaneously. The reader is given the relationship between every element; nothing is left to infer.",
            },
            {
              label: "Parataxis vs. hypotaxis on the same content",
              text: "Paratactic: 'She left. He waited. The room got dark.' Hypotactic: 'After she left, he waited in the room as it darkened around him, because leaving himself felt, at that moment, like an admission he wasn't prepared to make.' The paratactic version withholds the connection; the hypotactic version names it. Both are right for different moments — the question is what the content requires.",
            },
            {
              label: "The short story and parataxis — why compression favors the former",
              text: "Paratactic prose places a greater demand on the reader's active participation — they must supply the connections the syntax withholds. This is why parataxis is particularly compatible with the short story's dependence on implication: a paratactic short story requires the reader to complete its meaning in the white space between its rendered moments. The reader who has made the inference feels the story's impact more powerfully than the reader who was told. This is not a rule — Munro and James can be hypotactic and write short stories of great power — but it is a natural alignment between a syntactic mode and a formal demand.",
            },
          ],
          outro: [
            "A practical note on default mode: most writers can identify their syntactic default quickly by reading a page of their own prose aloud and counting subordinating conjunctions ('because,' 'although,' 'when,' 'since,' 'unless,' 'as if'). A page with many subordinating conjunctions is hypotactic; a page with few is paratactic. Both are valid; neither is superior. The problem is unconscious default — writing paratactically or hypotactically because you don't know another mode is available, rather than because the content requires it.",
            "This week's flash story exercise is a natural context for practicing parataxis: the compression discipline of the flash story aligns with paratactic presentation, and writers who habitually write in hypotaxis will often find that the flash form's demands push them toward a more paratactic mode than they usually inhabit.",
          ],
          exercise:
            "Write one paragraph in pure parataxis — no subordinating conjunctions, no embedded clauses, sentences placed side by side without explanation of their relationship. Then write the same paragraph in pure hypotaxis — every connection between ideas named in the syntax, the relationships explicit. Both paragraphs should cover the same content. Then write a third version that uses both modes, shifting between them as the content's demands shift — paratactic where implication serves better than explanation, hypotactic where the relationship between elements needs to be felt in the syntax. For each version, write one sentence identifying what the syntactic mode produces that the other cannot.",
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
              title: "Writing Fiction, short story structure chapter",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the short story structure chapter. Burroway's treatment covers the gun-and-shot principle, the role of compression and implication, and the structure of the contemporary short story in ways that connect directly to the five special laws from the lecture. Read before writing the flash story.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"The Progress of Love"',
              author: "Alice Munro",
              href: "https://bookshop.org/p/books/the-progress-of-love-alice-munro/6697453",
              note: "Purchase. Read 'The Progress of Love' — the title story of the collection — as a study in what the short story form can contain when pushed to its limit. The story covers decades, moves between multiple timelines, holds multiple focal consciousnesses, and includes material that in any other writer's hands would be a novel. Map its structure: where does each timeline begin? How does the story manage the transitions between them? And most crucially: where is the ending, and what does it do to everything that came before?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: '"Sea Oak" or "The Semplica Girl Diaries"',
              author: "George Saunders",
              href: "https://bookshop.org/p/books/tenth-of-december-george-saunders/6697453",
              note: "Purchase (in Saunders collections). Read one of these two stories. Both are studies in short story form under extreme formal pressure: 'Sea Oak' operates through the constraint of a zombie story in a suburban setting, using the genre machinery to generate a social argument it could not make in realist mode; 'The Semplica Girl Diaries' operates through the constraint of a journal format that forces the story's most disturbing content to be rendered indirectly. In each case, the formal constraint is the story's enabling condition — the thing that makes it possible to say what it says. Apply the five special laws: what is each story's single dominant effect? Where is the gun, and where is the shot? How does the ending recontextualize the beginning?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Flash Story",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a complete story in under 600 words. It must have a character, a desire, a complication, a turn, and an ending that recontextualizes the beginning.",
            "The constraints: no setup, no explanation — begin in medias res, inside the action. No backstory in the first 100 words. The character's desire should be present from the first paragraph, legible through action or dialogue rather than through statement. The complication should arrive within the first half. The turn — the moment after which nothing can be the same — should be a behavioral or situational change, not an announced realization. The ending should be an image, gesture, or piece of dialogue that, in retrospect, changes what the opening meant.",
            "Apply the five special laws as you write: every element must be load-bearing; the ending must do more than conclude; what is implied should be trusted to do more work than what is stated.",
            "After completing the flash story, write a 200-word analysis: what did you include, and — more importantly — what did you leave out? What is implied in the story that is not stated? Where is the story's single dominant effect located — at what moment does the story's full emotional charge arrive? And: where is the gun, and where is the shot?",
          ],
          target: "Under 600 words (story) + 200 words (analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 33 — The Flash Story Diagnosis",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the flash story and the 200-word analysis, paste the story (not the analysis). The AI's task is to assess the story against the five special laws — to diagnose where the form is working and where it is not yet fully inhabited.",
          prompt:
            "Read this flash story carefully. Analyze its structure and form against the special laws of the short story. Answer: (1) Does it function as a complete story — is there a character, a desire, a complication, a turn, and an ending? (2) Where is the story's turn — the specific moment after which the situation is permanently changed? Is the turn clearly established or does the story end without a genuine structural shift? (3) What is implied in this story rather than stated — what does the reader understand that the prose does not say directly? Is the implied content clear, or is there ambiguity that feels unearned? (4) What is the story's final image or moment, and what does it do for the reader — does it recontextualize what came before, or does it merely conclude? (5) What is the story's single dominant effect — what is the specific quality of the experience it produces in the reader? Diagnose only; do not rewrite.",
          questions: [
            "Does the AI locate the turn where you placed it? If it identifies a different moment as the turn, which reading is more accurate — and what does that tell you about whether the turn is legible on the page?",
            "What does the AI identify as implied rather than stated? Does its reading of the implied content match your intention? Where does the implied content land most clearly for the AI, and where is it still ambiguous?",
            "Does the AI assess the ending as recontextualizing or merely concluding? If it reads the ending as merely concluding, what is it missing — and is that something you need to add to the ending, or something the ending is doing that the AI cannot see?",
            "After the AI diagnosis: compare it to your own 200-word analysis. Where do the two readings converge? Where do they diverge? The divergence is the most productive information — it identifies the gap between what you intended and what the story produced on the page.",
          ],
          note: "The flash story is an ideal AI diagnostic subject because its compression means that every element is visible and its structural moves are legible even in a short passage. The AI can map the five special laws against a 600-word story with more precision than it can apply them to a 5,000-word excerpt of a novel, because the flash form's economy makes its structure transparent. Use this precision to sharpen your analysis of what the form requires.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Opening Line Test",
      blocks: [
        {
          type: "tip",
          icon: "✏️",
          name: "The First Line Does More Work Than Any Other",
          paragraphs: [
            "The first line of a short story performs more work than almost any other line in the piece. It must establish voice — the reader should know, from the first sentence, that a specific consciousness is behind these words. It must create a question — something that requires an answer, even if that question is only 'why is this person telling me this?' It must locate the reader in a world — not describe the world, but drop the reader into it with enough orientation to follow. And it must set a tonal promise that the story must keep: the first sentence's register — ironic, elegiac, comic, urgent — establishes the contract with the reader that every subsequent sentence must honor.",
            "Read the opening lines of your five most-read short stories. What makes each of them work? Where is the voice established — in what specific word or syntactic choice is a consciousness recognizably present? Where is the question? What is the tonal promise, and can you identify the moment in the story where the tone breaks that promise, if it does? Then apply this analysis to your own flash story's opening line: does it do all four things? If not, which of the four is absent, and what would it cost to add it?",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Smallest Complete Story",
      blocks: [
        {
          type: "journal",
          title: "The Smallest Complete Story",
          question:
            "What is the smallest complete story you have lived — a story with a beginning, a complication, and an ending that changed something? Not a significant event, not a formative experience, but a small story: a conversation that changed a relationship's direction in an afternoon; a decision made in a moment that foreclosed other possibilities; a misunderstanding that clarified something true. Write it in 100 words. The discipline is the compression: 100 words requires that you identify, precisely, what the story is. Not what happened — what the story is. The difference between those two descriptions is the difference between an event and a narrative.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The 100-word story is a diagnostic for understanding what the short story form requires: compression forces you to find the essential shape. Writers who struggle with the 100-word version of a story they know intimately are often struggling because they have not yet identified what the story actually is — they know what happened, but not what structural shape the events have. Finding the 100-word version is finding the shape. The longer version can then be written from the inside of that shape.",
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
            "By the end of this week you should have: written a complete flash story under 600 words with a character, desire, complication, turn, and recontextualizing ending, accompanied by a 200-word analysis; read Burroway's short story structure chapter; read Munro's 'The Progress of Love' for the short story pushed to its formal limit; read one Saunders story for the short story under formal constraint; completed the AI flash story diagnosis and compared it to your own analysis; and written the parataxis-hypotaxis exercise with a third version that uses both modes deliberately.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 34",
          paragraphs: [
            "Week 34 is a cross-genre synthesis week on Tone, Comedy, and the Rhetoric of Laughter — the second annual cross-genre week. Tone includes not just the emotional registers of gravity, irony, and elegy but also comedy, satire, absurdism, and wit. This week studies how tone creates the reader's fundamental relationship to the work, and how comedy specifically functions as a narrative and rhetorical instrument. All three tracks examine comedic voice and structure.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The short story is where most of Year One's craft vocabulary finds its most concentrated application. Every topic covered since Week 1 — scene construction, image, characterization, dialogue, setting, point of view, conflict, structure, voice, syntax, figurative language, pacing — is demanded simultaneously by the short story's compression. The flash story written this week is not a demonstration of the form's simplicity but of its extraordinary difficulty: to produce a complete story in under 600 words, everything the writer knows must be active at once. The flash story is not a lesser form. It is the form that most fully tests whether the full vocabulary is internalized.",
          ],
        },
      ],
    },
  ],
};
