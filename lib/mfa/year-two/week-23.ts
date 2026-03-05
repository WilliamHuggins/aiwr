import type { WeekData } from "@/lib/mfa/types";

export const week23Data: WeekData = {
  weekNumber: 23,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Character Arc and Transformation — Does Anything Actually Change?",
  emphasizedWord: "Does Anything Actually Change?",
  deck: "Over the course of a book-length work, characters must change — or, in some formally specific cases, their failure to change must become the work's central meaning. This week asks the questions that long-manuscript drafting most often defers: what has your protagonist lost, gained, or understood by the last page that they didn't have at the first? What has the transformation cost? And is it shown — through specific behavior, specific changed relationship to the world — or merely stated?",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "59 of 108" },
    { label: "Craft Focus", value: "Character Arc" },
    { label: "Grammar", value: "Phase 5 · The Ellipsis" },
    { label: "Key Exercise", value: "The Projected Final Scene" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Transformation, Its Absence, and the Evidence That Makes Either Legible",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The most common failure of the long first draft is not structural — it is not that scenes are in the wrong order or that the governing question goes dormant in the middle. The most common failure is simpler and harder to fix: nothing actually changes. The protagonist begins the work with a specific set of desires, fears, limitations, and misunderstandings, and ends it with the same set, slightly rearranged. Events have occurred. The plot has progressed. But the character who experienced those events has not been genuinely altered by them — has not gained or lost or understood anything that costs them something, that requires them to become a different person in a specific, demonstrable way. The work has produced narrative without producing transformation, and a narrative without transformation is, at the level of a reader's experience, a story about someone things happened to rather than someone who lived.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The antidote is not to add a transformation — to write a final scene in which the character changes, announces their change, or behaves in a way that signals to the reader that an arc has been completed. An announced transformation is not a demonstrated one. The antidote is to understand what kind of change this character is capable of, given who they specifically are, and what it would specifically cost them — and then to build the conditions for that change into the architecture of the whole manuscript, so that when the change arrives in the final section, it is legible as the consequence of everything that preceded it. Transformation is not a destination the writer adds at the end; it is the logic of the entire work, visible only in retrospect but prepared for from the first page.",
          ],
        },
        {
          type: "pullquote",
          quote: "Any character transformation must be evidenced in a specific behavioral, verbal, or relational change in the final section. The reader should be able to point to the exact moment or sequence where the transformation is legible. If the transformation is only visible to the author, it hasn't made it onto the page.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Models of Arc — Transformation, Failed Transformation, and Revelation Without Change",
          paragraphs: [
            "The transformative arc: the character genuinely changes — they gain or lose something that matters, they understand something they could not have understood at the beginning, and that understanding costs them something specific. The transformation is not an improvement — literary fiction is suspicious of straightforward improvement, because genuine change involves loss as well as gain: the character who has learned to let go has also lost the thing they were holding. The transformation must be proportionate to the journey: a character who undergoes a hundred pages of suffering and arrives at a small, quiet insight has been transformed in the way that humans are usually transformed — incrementally, with resistance, arriving not at certainty but at a slightly different relationship to their uncertainty. Saunders's characters undergo small, costly transformations in exactly this sense: they understand one thing they didn't understand before, and that one thing is precisely proportionate to the specific suffering that produced it.",
            "Failed transformation as central statement: the character who could have changed and didn't is one of literary fiction's most powerful formal choices, but it is a formal choice with specific requirements. The failed transformation must be the work's central meaning — the reader must understand that the failure to change is the tragedy, the irony, the argument the work is making. Stevens in *The Remains of the Day* does not transform; he has every opportunity to transform, and he refuses every one, and Ishiguro's novel is the account of that refusal. The failure to transform is legible throughout — the reader sees what Stevens cannot see about himself — which is what makes the final chapter devastating. The failed transformation requires the author to understand the character's capacity for change (which is real) and their specific resistance to it (which is also real) with equal precision. A character who cannot change is not a failed transformation — it is a static character. The failed transformation is available only to the character who could have changed.",
            "Revelation without transformation: the character at the end of the work understands something they could not have understood at the beginning, but the understanding does not require them to become a different person — it requires them to become, finally, the person they always were. This is the arc of many memoirs and much literary fiction: the narrator or protagonist arrives at clarity, not change; at acceptance, not transformation. The distinction matters because the ending of a revelation arc looks different from the ending of a transformation arc. The transformation arc ends with the character doing something different — behaving differently, relating differently, choosing differently. The revelation arc ends with the character seeing clearly — understanding what was always true, accepting what was always present. Both are valid arcs; they produce different endings and require different architectures.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This week's primary exercise — writing the projected final scene — is the most structurally diagnostic exercise in the spring semester. It asks the writer to imagine the thesis's ending before the thesis is complete, which seems counterintuitive but is actually the most useful thing a writer in the middle of a long project can do. The projected final scene does not commit you to a specific ending — it is a probe, like the formal probes of Weeks 20 and 21. But it reveals, in 700–1,000 words, whether you currently know what kind of transformation (or failed transformation, or revelation) your protagonist undergoes — and whether that transformation is visible in specific behavioral or linguistic evidence on the page, or whether it exists only in your understanding of the character. If it exists only in your understanding, the spring sessions that remain are the sessions in which it must be written into the draft.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "How Arc Works Differently Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction often features failed transformation as its central statement — and the writers who do this most powerfully do it by making the failure to change the novel's devastating argument rather than its structural weakness. Stevens in *The Remains of the Day* does not transform; he has every opportunity to transform, and Ishiguro gives the reader the precise, exquisite pain of watching a man who sees everything except what his refusals have cost him. The last chapter — which should be read this week as a model of how to end a novel about a character who cannot change — is one of the most precisely calibrated endings in contemporary fiction: Stevens arrives at something very close to understanding, retreats from it in the space of a paragraph, and settles into an optimism so final it reads as the saddest sentence in the book. The fiction writer's character pass in the manuscript map should apply the following test to the protagonist: does the last scene's version of this character differ from the first scene's version in a way that is legible on the page — in behavior, in language, in what they notice and what they miss? If the difference is invisible to the reader, the arc has not been written.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting doctrine — McKee, Vogler, Snyder — insists on the character arc as the screenwriter's primary obligation: the protagonist must want something, must be transformed by the pursuit of it, must arrive at a different relationship to that want by the final scene. But the best screen characters complicate or subvert this doctrine in ways that reveal its limits. Walter White's 'arc' in *Breaking Bad* is a descent — he becomes what he always was, stripped of the self-deception that kept it hidden. Michael Corleone's transformation in *The Godfather* is into the thing he most hated, and the final image is a door closing on his wife's face — the cost of the transformation made visible in a single composed image. For playwrights: the stage's relationship to character transformation is more compressed and more explicit than the novel's — the two-hour theatrical experience demands that the transformation be legible to an audience watching live, which means it must be demonstrable in action, in speech, in the character's physical relationship to the space. The monologue that occurs near the end of many plays is often the site where transformation or its failure is articulated — not as announcement but as the character thinking aloud in a new register, from a position they could not have occupied in Act One.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the transformation is the memoirist's own — the journey from the person who experienced these events to the person who can now write about them. This is Vivian Gornick's experiencing-self / narrating-self distinction at the level of the whole book: the experiencing self who lived through the material and the narrating self who has arrived at sufficient distance to write about it must both be present in the memoir, and the distance between them — the transformation the narrating self has undergone relative to the experiencing self — is the book's deepest argument. The memoir's ending should represent a genuinely different relationship to the material than the book's beginning: not necessarily resolution (the wound may still be open) but a different kind of proximity to the wound, a different understanding of what it means or what it cost. The CNF writer should ask of the projected final section: in what specific way does the narrating self of the ending relate to the material differently than the narrating self of the opening? If the relationship is identical — if the narrator at the end is in exactly the same position as the narrator at the beginning — the memoir has not yet found its arc.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 5 · Topic 6 — The Ellipsis: Trailing Thought, Absence, Irresolvable Ambiguity",
      blocks: [
        {
          type: "grammar",
          title: "Phase 5 · Topic 56 of 60 — The Ellipsis: The Punctuation of the Unsaid",
          intro: [
            "The ellipsis in creative writing is not the citation ellipsis of academic prose — it is not a mark indicating that text has been omitted from a quotation. In literary prose, the ellipsis (…) indicates omission of a different kind: the trailing thought, the irresolvable ambiguity, the voice that runs out before it can complete itself. 'She started to speak, then…' The sentence does not end; the thought does not complete; the reader is left in the space where the completion would have been, with the absence itself as the message.",
            "The ellipsis differs fundamentally from the em dash, which is Phase 5's other mark of incompleteness. The em dash interrupts with energy — it cuts off a thought abruptly, with force, signaling that something more definite than the thought has arrived. The ellipsis trails into silence — it does not cut but fades, suggesting that the voice has simply run out, that the thought has dissolved before reaching its conclusion, that the silence after the ellipsis is not an interruption but a continuation of what the ellipsis began. The em dash is the punctuation of interruption; the ellipsis is the punctuation of dissolution.",
          ],
          rule: "Use the ellipsis sparingly, and only when you want the reader to hear a specific kind of silence — the silence of the trailing thought, the incompletable sentence, the memory that cannot be recovered in full, the voice that has arrived at something it cannot name. The ellipsis fails when it is used as a vague gesture toward profundity — when a writer trails off not because the thought is genuinely incomplete but because the thought has not yet been formed. 'She thought about everything that had happened…' followed by a scene break is not the meaningful use of the ellipsis; it is the use of the ellipsis as a substitute for the specific thought the writer hasn't yet had. Three tests: does the silence after the ellipsis have a specific content — something the reader can almost hear, almost fill in? Does the trailing-off perform something that is also true of the character's relationship to the material at this moment — do they genuinely not know what comes next, or genuinely cannot say it? And: would the em dash serve better here — is the incompleteness an interruption or a dissolution?",
          examples: [
            {
              label: "Trailing thought — the voice that cannot continue",
              text: "'He told her he had loved her once. That he had been a different person then, or thought he had been. That sometimes he still…' [The ellipsis performs the incompletability of what follows — 'still what?' is the question the reader must sit with. The trailing-off is not vague; it is the specific vagueness of a man who knows what he wants to say and cannot say it because saying it would cost him something. The em dash would produce a different effect: 'still —' would be an interruption, as if something external had cut him off. The ellipsis indicates an internal dissolution — the thought that fails itself before it can become words.]",
            },
            {
              label: "Memory under pressure — the ellipsis as gap in recollection",
              text: "'She remembered the afternoon, the light through the kitchen window, the smell of something burning on the stove. She remembered that he said something. She couldn't remember what, exactly, only the sound of it… the weight of it after he left.' [The ellipsis marks the gap in memory — the place where the recollection cannot be recovered in full. The clause that follows the ellipsis ('the weight of it after he left') comes from the other side of the gap, carrying the emotional residue of a content that cannot be retrieved. This is the ellipsis as the punctuation of memory's incompleteness: not a stylistic choice but a formal representation of what memory actually does.]",
            },
            {
              label: "Dialogue — the ellipsis as the hesitation before the truth",
              text: "'Do you love him?' she asked. 'I don't know. I think…' He stopped. 'I think I did.' [The ellipsis in 'I think…' performs the specific hesitation of a person arriving at something difficult — the pause before the admission, the moment where the sentence could go in two or three directions and the speaker is choosing. The em dash would indicate external interruption; the ellipsis indicates internal suspension. He stops himself before the truth arrives, and then the truth arrives anyway, in a sentence that costs him something.]",
            },
            {
              label: "The failure mode — the ellipsis as vague gesture",
              text: "Failing: 'She stood at the window, thinking about everything that had happened between them, about all the years and all the choices… It had been a long time.' [The ellipsis is not performing anything specific — it is gesturing at a content ('everything that had happened') that has not been specified, trailing into a sentence ('It had been a long time') that provides no resolution or intensification of the trail. The reader is not left with a specific silence; they are left with a vague one. Better: specify what she is thinking about, then trail off at the specific moment of incompletability — the thought that genuinely cannot complete itself, not a category of thoughts that haven't been written yet.]",
            },
          ],
          outro: [
            "The connection between the ellipsis and this week's character arc focus: the ellipsis is often the punctuation of the character who is in the process of transformation — who is arriving at something they cannot yet fully articulate, whose understanding is trailing toward a completion that the scene will not provide. The final chapter of *The Remains of the Day* uses the ellipsis in exactly this way: Stevens arrives at something very close to understanding, and the prose trails toward it and then retreats — the ellipsis performing the specific quality of the near-miss, the almost-understanding that Stevens characteristically substitutes for the understanding itself.",
            "Phase 5 continues next week with prose rhythm and the period as the writer's most powerful punctuation mark — the mark that closes every sentence and whose specific use determines the rhythm of the prose more than any other formal element. After the period, Phase 5 is complete and the grammar curriculum transitions to Phase 6.",
          ],
          exercise:
            "Write three sentences in which the ellipsis carries precise meaning that no other punctuation could replicate — one for a trailing thought, one for a gap in memory, and one for a dialogue hesitation. For each, write one sentence of analysis: what specifically is the silence after the ellipsis containing? Then apply the three tests: does the silence have specific content? Does the trailing-off perform something true of the character's relationship to the material? Would the em dash serve better? Finally, find one place in your thesis draft where you have been using a vague ellipsis — trailing off without specific content — and either replace it with a more specific incompleteness or remove it and write what the character actually (incompletably) thinks.",
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
              title: "The Remains of the Day — final chapter",
              author: "Kazuo Ishiguro",
              href: "https://bookshop.org/p/books/the-remains-of-the-day-kazuo-ishiguro/6697453",
              note: "Purchase. Read the final chapter specifically — and then, if you have the book, read the first chapter alongside it. The final chapter is the program's central model for the arc that is a failed transformation: Stevens arriving at something very close to understanding, retreating from it in the space of a paragraph, and settling into an optimism so terminal it reads as the saddest moment in the novel. The specific craft question: how does Ishiguro make Stevens's failure to transform devastating rather than merely frustrating? What is it about how the near-miss is staged — what the reader is given access to that Stevens withholds from himself — that makes the failed transformation the novel's most powerful formal choice rather than its structural weakness?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "A Swim in a Pond in the Rain — any story chapter focused on what the protagonist has learned",
              author: "George Saunders",
              href: "https://bookshop.org/p/books/a-swim-in-a-pond-in-the-rain-george-saunders/14407624",
              note: "Purchase (continuing from earlier in the program). Choose any of Saunders's chapters in which he analyzes a Russian story specifically for what the protagonist has learned by the end — the Chekhov chapters are especially useful. Saunders's analysis of small, costly transformation in the Russian tradition is the clearest available account of how literary transformation works at the level of the single scene: what the character knows at the end of a Chekhov story that they didn't know at the beginning, how that knowing is made visible in behavior and language rather than stated, and how the smallness of the transformation is proportionate to the specific humanity of the character. The transformation evidence test — the test that the change must be legible in specific behavioral or linguistic evidence — is Saunders's most important craft lesson for this week.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Story, 'Character' sections",
              author: "Robert McKee",
              href: "https://bookshop.org/p/books/story-robert-mckee/6697453",
              note: "Purchase. McKee on character arc as the screenwriter's primary obligation — read specifically for his account of the relationship between want and need (what the character thinks they want versus what they actually need, and how the gap between these drives the arc), and for his analysis of the gap between characterization (the surface behaviors that present the character to the world) and true character (what the character does under maximum pressure, when the cost of their choice is highest). The want/need gap is the arc's engine: the character who gets what they want without discovering what they need has not undergone a transformation, only a plot.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Projected Final Scene + Spring Thesis Session 5",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Projected Final Scene (700–1,000 words + 300-word analysis): Write the final scene of your thesis manuscript — not as it currently exists, but as you imagine it will exist when the project is complete. This is a projection, not a commitment: the actual ending may turn out differently, and that is expected. What matters is that this scene represents your current best understanding of where the protagonist/narrator will have arrived by the work's end.",
            "The scene should show — not tell — what your protagonist or narrator has gained, lost, understood, or failed to understand. The transformation (or its meaningful absence) must be evidenced in specific behavior, specific changed language, specific changed relationship to the world or to another character — not announced by the narrator, not stated as a conclusion, but present in the scene's concrete details. The character who has been transformed by grief should handle an object differently than they would have in the opening scene. The character who has failed to transform should speak in the same register they spoke in at the beginning, but the reader — who has traveled with them — should now hear the tragedy of that unchanged register. The scene should not explain itself.",
            "After writing, produce a 300-word analysis: What has changed? What is the nature of the transformation, failed transformation, or revelation without change that this scene demonstrates? Is the change legible in specific behavioral or linguistic evidence — can you point to the exact sentence or moment where the transformation is visible on the page? Or does the change exist primarily in your understanding of the character, without yet appearing in the scene itself? If the latter, name the specific evidence that is missing and commit to writing it into either this scene (revised) or the draft sessions that will precede it.",
            "Part Two — Spring Thesis Session 5 (1,500–2,000 words): Write the next section of the thesis. In the session log, note whether the projected final scene has changed anything about the direction of today's session — whether knowing where the protagonist will arrive has clarified what the next draft section must accomplish.",
          ],
          target: "700–1,000 words (projected final scene) + 300-word analysis + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 55 — The Transformation Audit",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your projected final scene — the 700–1,000 word exercise from Part One. The AI reads it specifically for the evidence of transformation: what the scene demonstrates versus what it implies, what is on the page versus what exists only in the writer's understanding.",
          prompt:
            "Read this projected final scene from a long-form manuscript. Your task is not to evaluate it as prose but to audit it specifically for character transformation — what has changed, how legibly it is evidenced, and what the scene's ending implies about the journey that produced it. Specifically: (1) What transformation — or what meaningful failure to transform, or what revelation without change — does this scene demonstrate? Name it as precisely as possible in one sentence. (2) Is the change legible through specific behavioral or linguistic evidence in the scene — can you point to the exact sentence or moment where the transformation is visible to a reader who does not yet know what the author intended? Or is the transformation implied, requiring inference from the scene's general tone and situation? (3) Is the ending emotionally proportionate to the journey this scene implies — does the weight of the transformation feel earned by the difficulty of what the character appears to have undergone? (4) What does the protagonist now know or feel that they could not have known or felt at the beginning of this work — stated in one sentence, based only on what is present in this scene?",
          questions: [
            "The AI's answer to question one — the name of the transformation in one sentence: does this match your own understanding of what the projected ending is doing? If the AI identifies a different transformation than the one you intended — if the scene is demonstrating something other than what you planned — this is the most valuable finding from the exercise. The scene on the page is performing a different arc than the arc in the writer's head. Which is the right arc?",
            "The AI's answer to question two — whether the transformation is legible through specific evidence or only implied: if the AI cannot point to a specific sentence or moment where the transformation is visible, the transformation has not yet been written onto the page. It exists in the writer's understanding of the character. Name the specific behavioral or linguistic evidence that is currently missing and add it to the revision plan as a target for the next session.",
            "The AI's answer to question three — whether the ending is emotionally proportionate: is the transformation too small for the journey implied (the character who has suffered enormously and arrived at a tiny, unconvincing insight), too large (the character who has undergone modest difficulty and arrived at profound transformation), or right-sized (the specific, costly, proportionate understanding that Saunders's analysis of Chekhov describes)? The proportionality question is the character arc's most important architectural question.",
            "Apply the transformation evidence test to the first scene you have written in the fall draft — the earliest existing pages of the thesis. What does the protagonist know or not know, have or not have, understand or not understand in that first scene? Is the distance between the first scene's version of the character and the projected final scene's version legible as a specific change — or is the character identical at both ends of the work, and the arc has not yet been built into the draft's architecture? If the character is identical, the revision plan should include a structural session specifically aimed at seeding the transformation's conditions into the opening pages.",
          ],
          note: "The Transformation Audit uses the AI as the reader the writer cannot be for their own work: the reader who has access only to what is on the page and cannot see what the writer intends. The AI's reading will be imperfect — it is working from a projected ending written without the full context of the draft — but its imperfections are informative. Where the AI misreads the transformation, the transformation is not yet fully present on the page. Where the AI identifies something the writer didn't consciously intend, the scene may be doing more than the writer knows. Both findings are material for the revision plan.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Transformation Evidence Test",
      blocks: [
        {
          type: "tip",
          icon: "🔍",
          name: "If the Transformation Is Only Visible to the Author, It Hasn't Made It onto the Page",
          paragraphs: [
            "Any character transformation — or meaningful failed transformation, or revelation without change — must be evidenced in a specific behavioral, verbal, or relational change in the final section of the work. The reader should be able to point to the exact moment or sequence where the transformation is legible: the sentence in which the character does something they could not have done in the opening scene, or says something in a register unavailable to them at the beginning, or relates to another character in a way that demonstrates what they have gained or lost. If the transformation exists only in the author's understanding — if the author knows the character has changed but the page does not demonstrate it — the transformation has not been written. It is the intention of a transformation, not a transformation.",
            "The test has three parts. First: can you find the specific sentence in the final section where the transformation is most visible? If you cannot, the transformation is not yet on the page. Second: does the reader who has not read the rest of the manuscript — who has access only to the final scene — understand what has changed, based only on the scene's behavioral and linguistic evidence? If not, the evidence is insufficient. Third: is the transformation proportionate to the journey — is the specific change the character has undergone sized correctly for the specific suffering, discovery, or loss that produced it? Transformations that are too large (the character arrives at wisdom beyond what the journey earned) or too small (the character undergoes an enormous journey and arrives at a tiny, unconvincing change) both fail the proportionality test. The right-sized transformation is the one that could only have been produced by this specific journey and could not have arrived earlier or at lesser cost.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What Has Changed for You",
      blocks: [
        {
          type: "journal",
          title: "Your Own Arc — Two Years In",
          question:
            "What has changed for you, as a writer and as a person, in the two years of this program? Not what you have learned — what has actually changed. What do you understand now about writing, about your material, about your relationship to the work, that you could not have articulated when the program began? What has been gained, and what has it cost? What do you understand about your thesis — about what it is actually trying to do, about who you are writing it for, about why this specific material has claimed your attention for two years — that the person who wrote the first thesis proposal couldn't have said? Apply the transformation evidence test to yourself: is the change visible in specific behavioral or linguistic evidence — do you write differently, read differently, think about your writing differently in ways that can be pointed to — or does the change exist primarily in your own sense of yourself as a writer? Write for twenty minutes. The question is not rhetorical. The arc of the two years is as real as the arc of the thesis, and the relationship between them is often more direct than the writer realizes until they write toward it.",
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
            "By the end of this week you should have: written the 700–1,000 word projected final scene with the 300-word transformation analysis; written 1,500–2,000 words of thesis in Spring Session 5 with the full session log entry; read the final chapter of *The Remains of the Day* and the first chapter alongside it, with craft attention to how Ishiguro makes failed transformation devastating; read the Saunders chapter on what a protagonist has learned, with craft attention to the transformation evidence test; read McKee's character sections on want/need and true character revealed under pressure; completed the Transformation Audit with all four reflection questions and added any missing transformation evidence to the revision plan; written the three ellipsis sentences (trailing thought, gap in memory, dialogue hesitation) with one-sentence analysis of each and the three tests applied; found and addressed one vague ellipsis in the thesis draft.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 24",
          paragraphs: [
            "Week 24 is The Sentence as Music — Prose Rhythm Advanced. After four weeks of structural work (experimental forms, lyric essay, revision at scale, character arc), Week 24 descends to the sentence: the musicality of prose, the way rhythm, sound repetition, and the sequencing of stressed and unstressed syllables create the reading experience as something close to listening. The grammar figure is the period as the writer's most powerful punctuation mark — Klinkenborg's argument that every sentence ends with one and the question is whether each sentence earns its period, its completion, its breath.",
          ],
        },
      ],
    },
  ],
};
