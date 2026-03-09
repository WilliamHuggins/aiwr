import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek23Data: WeekData = {
  weekNumber: 23,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Final Draft Production",
  title: "Intensive Final Draft Production III",
  emphasizedWord: "Line Level",
  deck: "All major structural revisions are behind you. This week completes all line-level revision passes and produces the final substantial batch of new prose before Week 24 closes new writing entirely. The grammar exercise is the Phase 8 synthesis: the full three-year annotation toolkit applied to five pages of thesis. The editorial mandate this week is the most demanding of the production arc: read the full manuscript aloud. All of it. Mark every stumble.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "95 of 108" },
    { label: "Craft Focus", value: "Line-Level Closure + Full Manuscript Read Aloud" },
    { label: "Grammar", value: "Phase 8 Synthesis — Final Annotation Exercise on 5 Pages of Thesis" },
    { label: "Deliverable", value: "1,500–2,000 Words + All Line-Level Passes Complete" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Line-Level Pass — What It Is, What It Is Not, and Why It Comes Last",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The line-level pass is the last pass before the oral-reading revision, and it is easy to mistake it for the most important pass because it is the most granular and the most visible. Every change made at the line level is immediately perceptible; the sentence before and the sentence after are both present on the screen, and the improvement — if it is an improvement — is right there. The structural pass, by contrast, produces changes whose effects are felt across chapters, across the full arc of the manuscript, in the accumulation of effect over many pages. The structural pass is harder to see. But the line-level pass is the finishing coat, not the foundation. The manuscript whose structure is not sound cannot be saved by polished sentences. The manuscript whose structure is fully sound can survive imperfect sentences, because the sentences are serving something that works. At this stage of the program, the structure is sound. The sentences can now be attended to.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The line-level pass has specific objectives that distinguish it from both the structural revision of the fall semester and the final-draft production of the spring weeks. It does not introduce new material — that is production work. It does not address structure — that work is closed. It addresses, specifically: sentences that are doing less than their full work; word choices that are approximate where a precise choice is available; phrase constructions that are habitual rather than chosen; rhythms that stumble when read aloud; repetitions — of word, of image, of sentence structure — that are unintentional; transitions that connect adequately but do not carry the reader's full experience across the gap; and every instance of filtering, over-explanation, or hedging that survived the earlier passes. This is the work of the line-level pass. It is not decoration. It is the alignment of every sentence with the standard the manuscript's best sentences already meet.",
          ],
        },
        {
          type: "pullquote",
          quote: "The line-level pass asks of every sentence: is this the best available version of this sentence? Not the best sentence imaginable — the best sentence available to this writer at this moment, doing this work in this manuscript. The answer is almost always: not quite. The line-level pass is the discipline of closing the gap between what is there and what is available.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Five Line-Level Passes — What Each Addresses",
          paragraphs: [
            "The word-choice pass: for every word in the manuscript that is approximate — the word that is close to right but not exactly right, the word that is accurate but not specific, the word whose register does not quite match the sentence's register — find the precise word, the specific word, the word whose register is exactly right for the sentence and the moment. The word-choice pass is slower than any other pass because it requires the writer to hold the full sentence in mind while considering the single word — to feel whether the change is an improvement at the sentence level and not merely at the word level. Move slowly. The word that is exactly right will feel settled in a way the approximate word does not.",
            "The rhythm pass: read every sentence aloud, at the pace of considered speech, and mark every sentence where the rhythm stumbles — where the stressed syllables cluster in a way that creates unwanted emphasis, where the sentence length is wrong for the moment's emotional temperature, where two sentences in sequence produce an unintentional pattern (two long sentences, then two short, establishing a rhythm the prose did not intend). The rhythm pass is the only pass that cannot be done silently; the ear is the instrument, and the ear requires the voice. Every stumble is a revision opportunity. Not every stumble is a failure — some rhythmic difficulty is earned by the material's difficulty. Distinguish between the stumble that signals a problem and the stumble that signals the prose is working hard.",
            "The repetition pass: read the manuscript specifically for unintentional repetition — words used twice in close proximity, images that recur without accumulating thematic significance, sentence structures that repeat so frequently they create an involuntary pattern. The repetition pass requires a different attention than ordinary reading: it is tracking occurrence rather than following narrative, and it is most efficiently done with the manuscript printed rather than on screen, marking each occurrence of a repeated element as it appears. Distinguish between intentional repetition (the rhetorical figures of Phase 4 — anaphora, epistrophe, polysyndeton — deployed deliberately for effect) and unintentional repetition (the crutch word, the habitual phrase, the image that recurs because the writer keeps reaching for it). Remove the unintentional repetition; protect the deliberate.",
            "The filtering pass: read the manuscript specifically for filtering — the unnecessary perception verbs and attribution structures that place the reader at a remove from the experience. 'She saw that the door was open.' 'He noticed the smell of smoke.' 'She felt her hands begin to shake.' In each of these, the filtering verb ('saw,' 'noticed,' 'felt') interposes the character between the reader and the experience. Remove the filter: 'The door was open.' 'Smoke.' 'Her hands began to shake.' The filtering pass often produces the line-level revision's most dramatic improvements, because filtering is a habit of early drafting that survives even careful revision — it is invisible to the writer who is reading for story rather than for syntactic structure.",
            "The transition pass: read every transition in the manuscript — every movement between scenes, sections, chapters — specifically for whether it is doing its full work. The transition that merely connects ('The next morning,' 'Later,' 'Meanwhile') is not doing its full work. The transition that carries the reader's emotional state across the gap, that uses the end of one scene to create the beginning of the next, that finds the image or rhythm that makes the movement feel inevitable — that is the transition at the final-draft standard. Revise every transition that is only connecting.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Line-Level Pass in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction line-level pass adds one specific obligation: the dialogue pass. Read every exchange of dialogue in the manuscript specifically for whether it is doing its full dramatic work — whether the subtext is present, whether the exchange is earning its place in the scene, whether any line can be cut without loss. The line that is present because the character needs to communicate information is not dramatic dialogue; it is exposition wearing dialogue's clothes. Find the way to give the reader the information through scene rather than through the characters' saying it. Cut every line of dialogue that is only informational. The exchange that remains is doing what dialogue is for: dramatizing the relationship, revealing character through what is and is not said, advancing the conflict.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing line-level pass is the dialogue trimming pass: cut every line that can be cut without loss of dramatic function, then cut again. David Mamet's principle — that the scene should begin as late as possible and end as early as possible — applies at the line level: every line of dialogue should arrive as late as possible and end as early as possible. The line that takes three sentences to say what one sentence would say is three sentences too long. The action line that describes what the actor will show is an action line that does not trust the performance. The line-level pass for dramatic writing trusts the actor, trusts the director, trusts the performance — and removes every line that is doing work the production will do.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir line-level pass adds a specific obligation that does not apply to fiction: the accuracy pass. Read every reconstructed scene, every piece of reported dialogue, every compressed or composite element of the memoir against the ethics review completed in Week 13 and the notes or memory it rests on. Is every reconstruction within the bounds the writer established? Is every piece of dialogue either documented or clearly rendered as approximate reconstruction? Is every composite figure or compressed timeline labeled as such in the author's note? The accuracy pass is not a second ethics review — it is a confirmation that the ethics review's conclusions have been implemented consistently throughout the final draft.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 8 Synthesis — The Final Annotation Exercise",
      blocks: [
        {
          type: "grammar",
          title: "Phase 8 · Three Years of Grammar, Applied to Five Pages of Thesis",
          intro: [
            "The final annotation exercise of the program applies the complete Phase 1 through Phase 8 toolkit to five pages of the thesis — not as a demonstration of range but as a finishing instrument: a way of bringing every dimension of syntactic attention simultaneously to the pages that most need it, at the moment when the line-level pass is happening and the full analytical toolkit is most useful.",
            "Phase 1 and 2 (kernel sentences, sentence types, sentence combining) — the architectural foundation: what is the sentence type distribution across these five pages? Is the mix of simple, compound, complex, and compound-complex consistent with the manuscript's declared aesthetic position and appropriate to the material these pages are rendering? Phase 3 (phrase constructions) — the texture: which phrase constructions are doing the most work, and which are absent? Is the participial phrase appearing where it can suspend time and add physical texture, or is it absent from passages that would benefit from its particular temporal effect? Phase 4 (rhetorical figures) — the amplification: are the figures that the manuscript uses deliberately — parallelism, anaphora, asyndeton — appearing here, and are they appearing at the right moments? Phase 5 (punctuation as craft) — the timing: is every mark of punctuation a deliberate choice, creating the pause or the speed the sentence requires? Phase 6 (word-level craft) — the diction: is the ratio of Latinate to Anglo-Saxon right for these pages? Are the verbs doing their full work, or are adverbs compensating for verbs that are not specific enough? Phase 7 (paragraph and narrative technique) — the architecture: what is the organizational principle of each paragraph? Is the FID operating where interiority is needed? Is the tense consistent? Phase 8 (style synthesis) — the voice: are these pages at the level of the voice passage written in Week 22? Are they consistent with the declared aesthetic position of Week 20?",
          ],
          rule: "Select five pages of the thesis — preferably the five pages that feel closest to the final-draft standard, the pages the writer is most confident in — and annotate them at every level of the Phase 1–8 toolkit. The annotation should not be a catalog; it should be a genuine assessment at each level, noting both what is working and what the annotation reveals is still available to be improved. After the annotation, make every revision the annotation identifies as available. These are the five most carefully finished pages in the manuscript. The annotation should take approximately ninety minutes; the revision that follows should take the time it takes. These five pages, after annotation and revision, are the manuscript at its ceiling — the standard every other page should now be brought to.",
          examples: [
            {
              label: "What the final annotation typically reveals",
              text: "The final annotation of five strong pages almost always reveals one of three things: a habitual phrase construction that the writer has been reaching for throughout the manuscript and that these pages also contain (usually a participial phrase used at moments that do not require its specific temporal effect, or an absolute phrase used so frequently it has become rhythmically predictable); a verb that is doing adequate work where a more specific verb would do excellent work (this appears most often in dialogue attribution — 'said' where 'answered' or 'continued' or silence would do more); or a transition between two of the five pages that is connecting rather than carrying. Each of these is a revision that the annotation makes visible. Each is available to be made. Make them.",
            },
          ],
          outro: [
            "The final annotation exercise closes the grammar curriculum. Phase 1 began in Year One, Week 1, with kernel sentences — the most fundamental unit of English syntax. Phase 8 ends here, in Year Three, Week 23, with the full toolkit applied to the pages that most fully represent what three years of syntactic attention have produced. The curriculum has not produced a finished stylist; it has produced a writer who can see what they are doing at the sentence level and make deliberate choices rather than habitual ones. That is what the curriculum was for.",
          ],
          exercise:
            "Select five pages of thesis prose you consider closest to the final-draft standard. Annotate at every Phase 1–8 level — not a catalog, but a genuine assessment of what is working and what is available to be improved. Make every revision the annotation identifies. These five pages are the manuscript's ceiling; note what the ceiling is so the rest of the manuscript can be brought to it.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Text",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Your thesis manuscript — read aloud, in full",
              author: "You",
              href: "",
              note: "The only reading this week is the full manuscript, read aloud. Schedule it as a single session or two consecutive sessions if the manuscript's length requires it. Read at the pace of considered speech — not the rapid read of a writer checking whether the content is present, but the slow read of a voice encountering each sentence for the first time and producing it for a listener who has not read ahead. Mark every stumble: the sentence whose rhythm does not work at speaking pace, the word that is wrong for the mouth, the transition that requires the reader's voice to do work the prose should have done. Do not revise during the read. Mark. Then revise from the marks.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "1,500–2,000 Words + All Line-Level Passes Complete",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write 1,500 to 2,000 words of final-draft thesis prose — the production target decreases this week as the line-level passes claim an increasing share of the writing time. The new prose should address the most difficult remaining passage in the manuscript: the scene or section the writer has been deferring because it is the hardest to write, the one that requires the most from the writer's current capacity. Do not write the easier passage and leave the hard one for Week 24. Week 24 closes new writing; the hard passage that is not written in Week 23 is the hard passage that is not in the thesis.",
            "The line-level passes — all five of them — should be completed by the end of this week. They do not all need to be completed in a single session; they can be distributed across the week. But each of the five passes (word-choice, rhythm, repetition, filtering, transition) should run across the full manuscript before Week 24 opens. The passes run more quickly than the structural revision because they are targeted: each pass has a specific objective and tracks a specific element, and the writer who knows exactly what they are looking for moves through a manuscript faster than the writer who is reading for general improvement.",
            "The Constraint Roulette exercise (AI Workshop) should be used for the most difficult remaining passage — the passage the writer has been deferring. The constraint generated by the AI is not an obstacle to writing the passage; it is a formal problem that displaces the psychological problem of writing something difficult. The writer who cannot begin the hard passage directly may be able to begin it under a constraint, because the constraint redirects attention from 'I don't know how to write this' to 'I need to write this within these specific formal limits.' The constraint is a tool for entry. Once the passage is begun, the constraint can be relaxed.",
          ],
          target: "1,500–2,000 words of final-draft thesis prose (the most difficult remaining passage); all five line-level passes complete across the full manuscript",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise #23 — Constraint Roulette",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "AI Exercise #23: Constraint Roulette — applied to the most difficult remaining passage in the manuscript. The AI generates one formal constraint; the writer produces the passage under it. The constraint is not a creative writing exercise separate from the thesis; it is a tool for entering material that has resisted direct approach.",
          prompt:
            "I am working on the final draft of a [genre] manuscript and I have one passage remaining that I have been unable to write directly — the passage that is hardest for me to approach, the one I have been deferring. I am going to describe the passage to you, and I want you to generate a single formal constraint for writing it — a specific formal rule that I must follow while writing the passage. The constraint should be genuinely limiting (not trivially easy to satisfy) but not so extreme that it makes the passage impossible. It should be a formal constraint about syntax, structure, point of view, tense, or length — not a thematic constraint about what the passage is 'about.' Here is the passage I need to write: [describe the passage — what happens, who is present, what the emotional and thematic weight of the moment is, why it is difficult to write]. Generate one constraint and explain briefly why this specific constraint might help me enter the material.",
          questions: [
            "Write the passage under the constraint. Do not try to write the best version of the passage; try to write a complete version of the passage that satisfies the constraint. The constraint is a floor, not a ceiling — if the passage exceeds the constraint's demands, let it. But do not stop writing because the constraint is satisfied; stop writing when the passage is complete. A constraint-generated draft is not the final passage; it is the entry point. After the passage is complete, read it without the constraint in mind: what did the constraint produce that the direct approach had not? What in the draft is worth keeping, and what was produced by the constraint's pressure rather than by the material's own logic?",
            "Revise the constrained draft toward the final-draft standard. The constraint has done its work — it got the passage written. Now release it. Read the draft against the manuscript's voice, against the declared aesthetic position, against the five line-level passes that are running this week. What remains of the constraint's effects in the revision? In many cases, the constraint will have produced one specific formal choice — a sentence structure, a point of view distance, a particular syntactic economy — that is exactly right for the passage and that the writer would not have found without the pressure of the constraint. Keep that choice. Release everything else.",
            "Assess the difficulty of the passage after writing it under the constraint. What made it hard? Was it the material itself — the emotional weight of the moment, the difficulty of finding the right image, the complexity of what the narrator needs to understand here? Or was it a psychological difficulty — the writer's anxiety about the passage's thematic importance, the fear that it would not match the surrounding pages, the perfectionism that made beginning impossible? Naming the source of the difficulty is useful for the next project: the writer who knows they defer emotionally weighted passages needs a specific protocol for them; the writer who defers syntactically complex passages needs a different one.",
            "What did the constraint reveal about the passage's form? The constraint that most helps a passage is usually the constraint that is most aligned with what the passage needs formally — a length constraint for a passage that needed compression, a point-of-view constraint for a passage that needed to approach the material from a different angle, a tense constraint for a passage that needed the temporal distance that a shift to past perfect or present provides. What did the constraint reveal about the passage's natural form — the form it was trying to find before the constraint named it?",
          ],
          note: "Exercise #23 is one of the most useful exercises in the curriculum precisely because it addresses a problem that no amount of craft instruction directly resolves: the passage that resists being written. Most craft instruction assumes the writer can begin; Constraint Roulette is for the moments when the writer cannot. Keep it as a permanent tool — a protocol for every future project's hard passages.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Read the Full Manuscript Aloud — All of It",
      blocks: [
        {
          type: "tip",
          icon: "🎙️",
          name: "The Oral-Reading Pass — What the Voice Knows That the Eye Does Not",
          paragraphs: [
            "The full manuscript read-aloud is the single most important revision instrument available at this stage, and it is the one most consistently skipped because it is slow, uncomfortable, and physically demanding. Read the manuscript aloud, at the pace of considered speech, from the first sentence to the last. Schedule it as a dedicated session — not a background activity, not a half-attention exercise, but a full-attention oral performance of the manuscript to yourself. Mark every stumble: the sentence whose rhythm does not work at speaking pace; the word that feels wrong in the mouth because it is wrong for the sentence; the transition that requires the reader's voice to supply a connection the prose has not made; the passage where the voice goes flat because the prose has gone generic; the sentence that is too long to be spoken in a single breath and that reveals, in the speaking, that it is asking the reader to hold too much simultaneously.",
            "Every stumble is information. The stumble that reveals a rhythmic problem requires a rhythmic revision. The stumble that reveals a word that is wrong for the mouth often reveals a word that is wrong for the sentence — the mouth's resistance is the ear's accuracy. The stumble that reveals a transition doing inadequate work reveals a transition that the writer's eye has passed over because the eye supplies the connection the prose is not making. The oral read makes visible what silent reading conceals. Do it. Mark the stumbles. Revise from the marks before Week 24 opens.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Sentence You Want to Be Remembered For",
      blocks: [
        {
          type: "journal",
          title: "The One Sentence",
          question:
            "What is the sentence in the thesis you most want to be remembered for? Not the most technically accomplished sentence — not the sentence that demonstrates the widest range of craft tools deployed simultaneously — but the truest sentence: the sentence that says what you have been trying to say across three years of work in a form that could not be simpler or more complete, the sentence that you did not plan but that arrived and that you recognized immediately as the sentence you had been writing toward. Find it in the manuscript. Write it here. Then write, for twenty minutes, about what the sentence knows — about the manuscript, about the material, about what three years of working in this form has produced in you as a writer — that you could not have articulated any other way. The sentence is not the thesis's most important sentence by craft standards. It is the thesis's most important sentence because it is the one that is entirely yours.",
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
            "By the end of this week you should have: produced 1,500–2,000 words of final-draft prose, including the most difficult remaining passage; completed all five line-level passes across the full manuscript; read the full manuscript aloud and marked every stumble; completed the Phase 8 synthesis annotation on five pages; completed the Constraint Roulette exercise with all four reflection questions; written the journal entry on the sentence you most want to be remembered for. All line-level passes are now complete. Week 24 closes new writing and begins the oral-reading revision pass.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 24",
          paragraphs: [
            "Week 24 is the last week of new writing. The production target is modest — the focus is on the oral-reading revision pass, which addresses every stumble marked in this week's full read-aloud and completes the manuscript's final line-level finishing work. The grammar exercise is the diction synthesis: the final audit of the full manuscript for Latinate and Anglo-Saxon diction, the last word-level pass. The AI workshop submits the full query letter or pitch for final assessment. The editorial tip is the formatting pass: consistent fonts, headings, pagination, citation style. Week 24 is the last day of making. Week 25 begins the public reading preparation.",
          ],
        },
      ],
    },
  ],
};
