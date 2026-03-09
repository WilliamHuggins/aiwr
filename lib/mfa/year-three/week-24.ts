import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek24Data: WeekData = {
  weekNumber: 24,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Final Draft Production",
  title: "Intensive Final Draft Production IV — The Last Day of Making",
  emphasizedWord: "Done",
  deck: "This is the last week of new writing. By the end of it, all new prose is complete; the oral-reading revision pass is underway; the manuscript is moving from made to finished. The production arc that opened in Week 19 closes here. What has not been written will not be written. What has been written is the thesis.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "96 of 108" },
    { label: "Craft Focus", value: "Final New Writing + Oral-Reading Revision Pass" },
    { label: "Grammar", value: "Phase 8 — The Diction Synthesis: Full Manuscript Word-Level Audit" },
    { label: "Deliverable", value: "All New Writing Complete; Oral-Reading Revision Pass Begun" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Transition from Making to Finishing — What Changes and What It Requires",
      blocks: [
        {
          type: "paragraph",
          content: [
            "There is a specific moment in the life of every long manuscript when making gives way to finishing — when the writer is no longer generating the work but completing it. The making is generative: open, uncertain, subject to discovery, capable of change at any level. The finishing is different in kind: the structure is closed, the voice is established, the governing images are in place, and what remains is not discovery but execution — the patient work of bringing every surface to the standard the best surfaces already achieve. This week is the transition. After this week, the manuscript is no longer being made. It is being finished.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The transition requires a change in the writer's relationship to the work. The disposition of making — openness to surprise, willingness to follow the prose where it goes, tolerance for uncertainty — is exactly wrong for finishing. The finisher needs a different disposition: the meticulous attention of a craftsperson who knows exactly what the object should be and is bringing every detail into alignment with that knowledge. The meticulous attention is not anxious; it is focused. It does not doubt the object — it has already decided what the object is. It does not revise toward a different object; it completes the object it has decided to make. This week, the writer makes that decision formally and consciously: this is the thesis. This is what it is. The remaining work is to bring every part of it fully to the standard the best parts already set.",
          ],
        },
        {
          type: "pullquote",
          quote: "The oral-reading revision pass is not a check for errors. It is the manuscript's final encounter with the instrument that will perform it for every reader who picks it up: the human voice, moving at the pace of considered speech through prose that was written to be heard even when it is read silently.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Oral-Reading Revision Pass — How to Run It",
          paragraphs: [
            "Read every page of the manuscript aloud — every page, in sequence, from the first sentence to the last — at the pace of considered speech. Not the rapid read of a writer confirming that the content is present. Not the skimming read of a writer looking for specific problems. The full, deliberate, word-by-word oral performance of the manuscript to yourself, as though you were reading it aloud to the most attentive listener you can imagine. This pass was begun in Week 23, where the full manuscript read produced the stumble-marks that guided the line-level revision. The oral-reading revision pass is different: it is applied to the manuscript after the five line-level passes, after the marks from the Week 23 aloud read have been addressed, and after any final new writing from this week has been incorporated. It is the manuscript's last revision before the formatting pass and submission.",
            "Mark every stumble: a stumble is any moment where the voice wants to do something different from what the prose is asking it to do — a sentence whose rhythm resists the spoken pace, a word that is wrong for the mouth, a transition that requires the voice to supply a connection the prose has not made, a passage where the written sentences run at the wrong speed for the material they are rendering. Not every stumble requires revision; some passages are written to produce a specific resistance, a specific difficulty, that the stumble is correctly embodying. Distinguish between the stumble that signals a problem and the stumble that signals the prose is working hard. Revise the first kind. Leave the second.",
            "The oral-reading revision pass takes as long as it takes. For a novel-length thesis, reading aloud at considered-speech pace — approximately 120 to 150 words per minute — will require twelve to fifteen hours across several sessions. For a screenplay, the read at performance pace will require ninety minutes to two hours. For a memoir, the oral read will likely require six to eight hours. Schedule the sessions before the week opens. Do not attempt to run the oral-reading revision pass in a single day; the quality of attention it requires cannot be sustained for more than two to three hours at a stretch. Multiple sessions across the week, each begun with a brief re-read of the previous session's last few pages to re-enter the voice, is the correct approach.",
          ],
        },
        {
          type: "card",
          title: "The Formatting Pass — What It Covers and Why It Matters",
          paragraphs: [
            "The formatting pass is not a creative act, and it is not optional. A manuscript submitted with inconsistent formatting — varying fonts, inconsistent heading styles, irregular pagination, citation styles that shift between chapters, chapter titles that are formatted differently in different sections — signals to every professional reader that the manuscript has not been fully finished. The formatting pass confirms that the manuscript's physical presentation is consistent throughout and appropriate to the submission standard for the genre.",
            "For literary fiction and memoir: consistent font throughout (Times New Roman or Courier, 12-point, is the standard for manuscript submission); double-spaced body text; one-inch margins; page numbers in the header or footer; chapter titles formatted consistently; scene breaks indicated by a centered asterisk or blank line, consistently applied throughout. For screenplays: the format standard established by Hollywood standard professional script format — Courier 12-point, proper scene headings, action blocks, character cues, and dialogue formatting throughout, no deviations. For academic creative nonfiction: the citation style required by the submission standard (MLA, Chicago, or the program's specified style) applied consistently throughout every chapter and the bibliography.",
            "The formatting pass should be run after the oral-reading revision pass is complete — not before — because a formatting change made before the final revision can create inconsistencies that require a second formatting pass. Run it last. Run it thoroughly. Check every chapter heading, every scene break, every piece of punctuation that functions as a structural marker, every footnote or endnote if the manuscript uses them. The manuscript that goes to submission formatted correctly is the manuscript that tells the reader its maker respected the work enough to finish it completely.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Final Week in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction oral-reading revision pass has one specific obligation beyond the general protocol: every passage of dialogue should be read aloud at performance pace — the pace of actual speech, not the pace of prose. Dialogue that reads well silently often sounds wrong when spoken: the rhythm is off, the exchange is too long, a line does too much. The oral read of dialogue is the final dialogue pass. Every line that sounds wrong when spoken should be revised. The test: could an actor speak this line and have it sound like something a person would actually say? If not, revise.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing final week is organized around a table read if one has not yet been conducted, or a final oral performance of the full script if one has. Read the script aloud at performance pace — every line of dialogue at speaking speed, every action line at reading speed. The script that sounds right in performance but reads awkwardly on the page has a prose problem; the script that reads smoothly on the page but sounds wrong in performance has a dialogue problem. Both are addressable this week. The formatting pass for dramatic writing is also the final format verification: every scene heading, every character cue, every parenthetical, every transition confirmed against the Hollywood Standard or the appropriate theatrical format specification.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir oral-reading revision pass pays particular attention to the narrator's voice consistency across the full manuscript. When read aloud, the memoir reveals voice inconsistencies that silent reading conceals: the chapter written in a different mood sounds different when performed at speaking pace, and the difference is unmistakable. Every chapter that sounds like a different narrator — different register, different relationship to the material, different quality of retrospective intelligence — should be flagged and revised toward the voice the surrounding chapters establish. The memoir's formatting pass includes a final check of all reconstructed dialogue: every instance should be either documented or identified in the author's note as approximate.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 8 — The Diction Synthesis: Full Manuscript Word-Level Audit",
      blocks: [
        {
          type: "grammar",
          title: "Phase 8 · The Last Word-Level Pass — Latinate, Anglo-Saxon, and the Diction Decisions That Define the Voice",
          intro: [
            "The diction synthesis is the grammar curriculum's final applied exercise: a word-level audit of the full manuscript that confirms the diction register is consistent with the aesthetic position declared in Week 20 and the syntactic identity established in the Week 22 voice passage. The audit does not aim to change the diction register; it aims to confirm that every deviation from the register is deliberate.",
            "The full grammar curriculum has covered diction across multiple phases: Phase 6 introduced the Latinate and Anglo-Saxon streams and their different registers; Phase 6 also covered Hayakawa's ladder of abstraction, dynamic verbs, adverb elimination, and zombie nouns. The diction synthesis does not repeat those individual exercises. It asks a single overarching question: is the manuscript's diction consistent with the voice the writer has been developing and has now most fully articulated? The word that is in the wrong register for its sentence — the Latinate abstraction in a passage of Anglo-Saxon concreteness, the zombie noun in a passage of dynamic action — is the word the diction synthesis identifies and replaces.",
          ],
          rule: "Run a word-level audit across the full manuscript, focusing on three specific targets: (1) Adverbs: find every adverb remaining in the manuscript. For each, ask whether the adverb is doing work the verb could do more specifically — 'walked quickly' versus 'hurried,' 'said sadly' versus the dialogue or gesture that carries the sadness without naming it. Remove every adverb that is compensating for an under-specific verb. Keep every adverb doing work no stronger verb can do. (2) Zombie nouns: find every nominalization remaining in the manuscript — the noun created from a verb or adjective that drains the action from the sentence. 'The implementation of the decision' versus 'they decided.' 'Her realization of his deception' versus 'she realized he had lied.' Restore the verb in every instance where the nominalization is smothering action that should be alive. (3) Diction register consistency: read five pages at random from different sections of the manuscript. Does the diction register feel consistent — is the ratio of Latinate to Anglo-Saxon, of abstract to concrete, of formal to vernacular consistent with the aesthetic declaration of Week 20 and present throughout, or are there sections that drift into a different register without cause? Flag every section that drifts and revise toward consistency.",
          examples: [
            {
              label: "The adverb audit — the last pass",
              text: "At this stage of the manuscript, the adverb audit is not a wholesale search-and-destroy operation — the major adverb problems were addressed in the Fall Week 5 voice revision and the spring line-level passes. It is a confirmation pass: running through the manuscript with the specific question of adverbs in mind, catching any that survived earlier passes and confirming that every adverb still present is genuinely doing work no stronger verb can do. A manuscript that completes the adverb audit with forty adverbs remaining has forty deliberate choices. A manuscript that completes it with four hundred remaining has four hundred unexamined habits.",
            },
            {
              label: "Diction register drift — what it looks like",
              text: "A memoir written primarily in Anglo-Saxon-dominant concrete prose — the prose of sensory experience, of physical detail, of the body in a specific place at a specific time — that periodically drifts into Latinate abstraction when the narrator is discussing themes or drawing conclusions is a memoir with a diction register inconsistency. The drift is usually from showing to telling, from the specific to the general, from scene to essay. Every instance should be examined: is this drift deliberate — the narrator stepping back from the scene to offer retrospective understanding — or is it habitual — the writer reaching for abstraction when the material is difficult? Deliberate drift is voice. Habitual drift is revision.",
            },
          ],
          outro: [
            "The diction synthesis closes Phase 8 of the grammar curriculum in its applied, practical form. The theoretical closure happened in Week 23's final annotation exercise. This week's closure is the one that matters most for the submission: the manuscript whose diction is consistent, precise, and in alignment with the voice's declared aesthetic is the manuscript that is ready to be read.",
          ],
          exercise:
            "Run the full manuscript adverb audit, zombie noun audit, and diction register consistency check. Remove every adverb compensating for an under-specific verb. Restore the verb in every nominalization smothering live action. Flag and revise every section that drifts from the manuscript's declared diction register without cause.",
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
              title: "Your thesis manuscript — in full, aloud, as the oral-reading revision pass",
              author: "You",
              href: "",
              note: "The only reading this week is the manuscript. The oral-reading revision pass is the week's primary revision instrument. Schedule the sessions before the week opens: two or three hours per session, multiple sessions across the week, each beginning with a brief re-read of the previous session's last few pages. Read at the pace of considered speech. Mark every stumble. Revise from the marks. What the voice hears that the eye does not is the last thing the manuscript needs to know.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Final New Writing — Complete All Remaining Passages",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Complete all remaining new writing this week. The target is not a word count — it is completion: every passage that requires new prose, every scene that was marked as incomplete in the line-level passes, every transition that requires new material rather than revision of existing material must be written before this week closes. If these passages can be written in 500 words, write 500 words. If they require 2,000, write 2,000. The week's production obligation is not a target but a termination: when the new writing is done, it is done.",
            "After the final new prose is written and read aloud once for a quick voice check, incorporate it into the manuscript and begin the oral-reading revision pass on the full document. The pass should not wait until all new writing is complete if the new writing is small in volume; it can begin on the sections that are fully complete while the final passages are still being written, as long as those sections are re-read once more after the new material is incorporated to confirm that the voice is consistent throughout.",
            "The writer who finishes the last new sentence of the thesis this week and recognizes it as the last new sentence should mark the moment — not ceremonially, but honestly. The last day of making is a threshold. It does not need to be dramatized; it needs to be recognized. The work that has occupied three years of conscious effort and produced what is now a manuscript reaches a specific limit this week: beyond this point, the making is over. What remains is finishing, and finishing is different.",
          ],
          target: "All remaining new prose complete; oral-reading revision pass begun across the full manuscript",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Final Assessment of the Full Query Letter or Pitch",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Submit the full query letter or pitch document — built in Fall Week 14 and now being assessed against the completed manuscript — for final evaluation. The query should now be tested against the manuscript it represents: does it accurately reflect what the thesis has become across three years of drafting and revision?",
          prompt:
            "I am going to give you my complete query letter (for literary fiction or creative nonfiction) or pitch document (for dramatic writing). This document was drafted earlier in my program and I want a final assessment now that the manuscript it represents is complete. Read it and assess four things: (1) Accuracy: does the query letter accurately represent what this manuscript is — its subject, its approach, its voice, its governing concern? Or has the manuscript become something in the drafting and revision that the query letter does not yet fully reflect? Identify the single most significant gap between the query and the completed manuscript, if one exists. (2) The hook: the first paragraph of the query letter — or the logline of the pitch — is the document's most important sentence or sentences. Does it create genuine desire to read the manuscript, or does it summarize and describe? A hook creates desire; a description provides information. Is the opening doing what a hook should do? (3) The voice: does the query letter sound like the manuscript it represents — does it carry the same intelligence, the same sensibility, the same relationship to the reader? Or does it sound like a different document written by a writer performing the genre of the query letter? (4) What to revise before sending: given all of the above, what is the single most important revision to make to this query before it goes to agents or producers?",
          questions: [
            "The accuracy gap between the query and the completed manuscript: this is the most practically important finding, because a query that misrepresents the manuscript — that describes the book the writer intended to write rather than the book the revision produced — will generate agent interest in a manuscript that does not exist and indifference to the one that does. If the AI identifies a gap, revise the query to reflect the actual manuscript. The revision should not be a wholesale rewrite; the query letter's architecture is sound. It should be a targeted correction of the specific element the AI identifies as no longer accurately representing the completed work.",
            "The hook: the first paragraph of the query letter should create in the agent the experience the manuscript creates in the reader — not tell the agent what the manuscript is about, but give the agent a compressed experience of what it is like to be in the manuscript. The query letter that opens with 'This is a novel about a woman who...' is a query letter that is summarizing. The query letter that opens with a hook that is itself a compressed version of the manuscript's experience — that gives the agent the feeling the manuscript gives the reader — is the query that generates requests. If the AI identifies the hook as a description rather than an experience, revise it: find the sentence or two that most fully gives the reader the experience of the manuscript and put them first.",
            "The voice of the query: the query letter for a lyric, meditative memoir should not sound like a press release. The query for a darkly comic novel should not read like an academic abstract. If the AI identifies a voice mismatch between the query and the manuscript, the revision is a voice revision: rewrite the query in the register of the manuscript's narrator or the manuscript's characteristic prose. The agent reading the query is auditioning the writer's voice before reading the manuscript; the query that sounds like the manuscript already is the query most likely to generate a request.",
            "The single most important revision before sending: apply it. The query letter that goes to agents from this program should be the final-draft version — the version that has been through the same standard of revision as the manuscript it represents. A query letter revised to the final-draft standard is itself a demonstration of the writer's capacity for the kind of attention the manuscript required.",
          ],
          note: "After the AI assessment, revise the query letter accordingly. The revised query, alongside the submission package built in Fall Week 14 — synopsis, comparables, bio, first ten pages — constitutes the complete submission package that will go out after the thesis defense in Week 25 or 26. The query is not separate from the manuscript; it is the manuscript's first impression. Treat it accordingly.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Formatting Pass",
      blocks: [
        {
          type: "tip",
          icon: "📄",
          name: "Consistent Fonts, Headings, Pagination, Citation Style — All of It",
          paragraphs: [
            "The formatting pass is the last pass before submission, and it matters more than most writers believe. A manuscript with inconsistent formatting — chapter titles styled differently in Chapter 3 than in Chapter 8, scene breaks marked with asterisks in one section and blank lines in another, page numbers that restart at each chapter, a citation style that shifts between MLA and Chicago mid-manuscript — is a manuscript that has not been fully finished. Every professional reader notices. None of them says anything directly, but the inference is clear: if the writer did not attend to these details, what else did they not attend to?",
            "Run the formatting pass as a dedicated session after the oral-reading revision pass is complete and all prose revisions have been incorporated. Open the stylesheet or the submission guidelines for the manuscript's intended destination and confirm every formatting element against them: font, size, spacing, margins, header and footer content, chapter title styling, scene break markers, pagination style. Do not rely on memory; check every element explicitly. The manuscript that arrives at a publisher or agent formatted correctly and consistently is the manuscript that has been taken all the way to the end.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "A Letter to the Future Reader",
      blocks: [
        {
          type: "journal",
          title: "Twenty Years From Now",
          question:
            "Write a letter to the reader who will read this thesis in twenty years — not a general reader, but a specific one: a writer twenty years from now who picks up your thesis and reads it the way you have read the books that formed you, the way you read the writers whose work you most admire, with the full attention of someone who is reading to learn something about how to live and how to write. What do you want that reader to find in it? Not what you want them to think about the thesis or about you as a writer — what do you want them to find? What does the thesis know that you hope it has managed to put on the page in a form that will still be true in twenty years, when you are a different writer, when the literary landscape is different, when the concerns that governed the making of this work feel distant even to you? Write to that reader honestly, as one writer to another across time. You have never written anything more lasting than the thesis you are finishing this week. Tell the reader who will find it what it meant to make it.",
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "The Making Is Over",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week you should have: completed all remaining new prose; begun the oral-reading revision pass across the full manuscript and addressed every stumble marked; completed the diction synthesis — the adverb audit, the zombie noun audit, the diction register consistency check; submitted the full query letter for AI final assessment and applied the single most important revision; begun the formatting pass; written the letter to the future reader. The making is over. The manuscript is being finished.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Weeks 25–27",
          paragraphs: [
            "Week 25 shifts focus entirely: the public reading. Every MFA thesis culminates in a performance of the work, in the writer's own voice, for an audience. Week 25 prepares both the craft decisions — which passages to read, in what order, how much contextual framing to provide — and the performative ones: pacing, breath, the management of emotion in one's own material. The grammar exercise is the grammar of sound — revising the selected passages specifically for what they sound like when read aloud at the pace of the writer's own voice. Week 26 is the defense preparation. Week 27 is submission.",
          ],
        },
      ],
    },
  ],
};
