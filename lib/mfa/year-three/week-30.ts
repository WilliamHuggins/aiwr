import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek30Data: WeekData = {
  weekNumber: 30,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Defense and Reading",
  title: "The Thesis Defense",
  emphasizedWord: "Complete",
  deck: "The defense presentation was written and stress-tested in Week 26. The answers to the three committee questions were prepared. The thesis has been submitted, read in public, and is now in the final stage of its formal assessment. This week: review the presentation once, practice it aloud, prepare for questions you haven't yet anticipated, rest — and then go defend the work you made. After the defense, the thesis is complete.",
  meta: [
    { label: "Commitment", value: "The defense itself" },
    { label: "Program Week", value: "102 of 108" },
    { label: "Craft Focus", value: "The Defense — Preparation, Presence, and the Conversation After" },
    { label: "Grammar", value: "What the Defense Reveals About the Work" },
    { label: "Deliverable", value: "The Thesis Complete and Defended" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What the Defense Actually Is — and What It Asks of the Writer",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The thesis defense is unlike anything else in the program. Every other week has asked the writer to produce something — a passage, a revision, an exercise, a document. The defense asks for something different: it asks the writer to be present in a conversation about the work, to hold the work's intelligence in the mind and make it available under pressure, to receive genuine intellectual challenge and respond with the kind of precision that demonstrates the work was made consciously and with full understanding of its own formal and thematic commitments. It is not a test of memory. It is not a performance of certainty. It is a demonstration that the writer and the manuscript are the same intelligence — that the person sitting in front of the committee made the choices the manuscript contains, knows why they made them, and can account for them honestly.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The committee is not the adversary. This needs to be stated plainly because the word 'defense' implies attack, and the experience of preparing for the defense can produce the defensive disposition that makes the defense go badly. The committee has read the thesis. They have invested hours in it. They are in the room because they have questions they want to pursue — genuine intellectual inquiries about the formal decisions and thematic commitments of a manuscript they have found worth engaging seriously. The committee member who asks a hard question is the committee member who is most fully present to the work. Receive that presence as the gift it is. The defense that becomes a genuine intellectual conversation — where the writer's prepared account of the thesis is extended and deepened by the committee's questions rather than defended against them — is the defense that serves both the writer and the work.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The best thesis defenses are not performances of certainty. They are honest accounts of discovery: what the writing produced that the writer did not plan, what the form revealed about the material, what questions the thesis opens rather than closes. The committee already knows the thesis is not a finished thought. They want to know how you think.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Final Preparation — What This Week's Review Covers",
          paragraphs: [
            "The defense presentation was written in Week 26 and stress-tested against the AI committee simulation. The three questions the simulation generated were prepared with written notes. This week's preparation is not rebuilding that work — it is settling it. Read through the presentation once, aloud, at the pace you will bring to the actual defense. This is not a rehearsal in the Week 28 sense; it is a confirmation that the presentation is still the right account of the work, that it still reflects what you believe about the thesis, that nothing the reading of Week 29 revealed has changed what you want to say about the work in the defense.",
            "After the read-through: review the written notes on the three AI-generated questions. Are the answers still the right answers? Has the experience of the public reading shifted anything — revealed a passage the committee will likely ask about, confirmed or complicated a formal claim the presentation makes? The defense preparation that incorporates what the reading revealed is the preparation that is most fully current with the writer's actual understanding of the completed work. If something from the reading changes an answer, revise the note. If nothing changed, the notes stand.",
            "Then think laterally: beyond the three questions the AI generated, what other questions could this specific committee reasonably ask? Not the questions the presentation handles well — the questions it handles least well, the claims it makes most briefly, the formal decisions it mentions without fully accounting for. Write three to five additional questions of your own, from the committee's perspective, and write brief notes on how you would answer each. The writer who has prepared for eight questions rather than three is the writer who can be genuinely present in the defense rather than managing anxiety about what comes next.",
          ],
        },
        {
          type: "card",
          title: "The Day of the Defense — Before, During, After",
          paragraphs: [
            "Before: arrive with the presentation document, your thesis, and your notes on questions — not to consult during the defense, but because their physical presence is reassurance. Read nothing the morning of the defense that is not your own material. The defense is not improved by last-minute craft study; it is improved by the quality of attention the writer brings to the room, and that quality is best protected in the hours before the defense by rest, a reasonable meal, and quiet.",
            "During: give the presentation at the pace you practiced, without rushing. The committee will almost certainly ask questions during the presentation as well as after it — this is not a disruption; it is the conversation beginning early. Answer each question with the same precision the presentation itself models: specific, honest, willing to acknowledge what is unresolved. When a question reaches territory the presentation does not cover, do not improvise a claim you cannot support. It is entirely appropriate, and often more intellectually impressive, to say: 'That's a tension I've been thinking about but haven't yet resolved — here's where I am with it.' The defense that acknowledges genuine uncertainty is more credible than the defense that papers over it.",
            "After: the committee deliberates. You wait. When they return: whatever the outcome, receive it as information rather than verdict. A pass with revisions is not a failure; it is the committee telling you specifically what the thesis still needs, which is exactly the kind of specific guidance that is hardest to get and most useful to have. A pass without revisions is the committee's formal confirmation that the work is complete. Either way, you came in with a thesis and you leave with a defended thesis. That is the threshold. You have crossed it.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What the Defense Tends to Emphasize in Each Track",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction defense tends to concentrate most heavily on the relationship between formal choices and thematic commitments — committees want to understand why the manuscript is structured as it is, why the point of view is what it is, why the temporal structure serves the material. The fiction writer who has thought rigorously about these relationships and can articulate them specifically — not 'I wanted the close third to create intimacy' but the specific intimacy this specific narrator in this specific situation requires — will find that these questions open into the most productive part of the defense conversation rather than its most threatening.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writing defense often includes questions about the relationship between the written script and the production it implies — what the writer's visual imagination contributed to the formal choices, what a production would need to supply that the script cannot contain, and whether the script's formal decisions are decisions for the page or decisions for the stage and screen. The dramatic writer who can move fluently between the script as a literary object and the script as a production blueprint — who understands both registers and can account for the choices that serve each — is the writer whose defense demonstrates the full scope of dramatic craft.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir defense frequently includes the ethical questions the craft curriculum addressed in Year Two and revisited throughout Year Three: the reconstruction of dialogue, the compression of time, the representation of living subjects. These questions are not gotcha questions; they are the committee's way of confirming that the writer has thought carefully about the obligations memoir imposes. The writer who has a rigorous, specific account of the ethical framework within which the memoir was written — not a defensive justification but a genuine account of the decisions made and the principles they embody — will find these questions the easiest part of the defense.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "What the Defense Reveals About the Work",
      blocks: [
        {
          type: "grammar",
          title: "No Exercise — One Observation About What the Defense Makes Visible",
          intro: [
            "There is no grammar exercise this week. The curriculum is complete. What the grammar section offers this week is an observation about what the defense, as a specific kind of intellectual encounter with the work, tends to make visible.",
          ],
          rule: "The questions the committee asks about the formal choices in the manuscript are, at the deepest level, grammar questions: questions about how the work is made at the level of its constituent elements, how those elements relate to each other and to the work's larger commitments, and whether the choices are the right choices for this specific material. The committee member who asks why the thesis's central chapter breaks its own narrative pattern at a key moment is asking, in effect, about syntax: the pattern established, the deviation from it, and whether the deviation is doing the work a deliberate rupture should do. The writer who has spent three years studying how sentences work — how structure creates meaning, how rhythm carries emotion, how the unexpected choice produces the specific effect of surprise or recognition — is equipped to answer that question with the precision it deserves. The grammar curriculum did not only improve the prose. It trained the analytic vocabulary for exactly this kind of defense.",
          examples: [
            {
              label: "Grammar as defense preparation",
              text: "A committee member asks: 'The narrative voice in the fourth chapter feels different from the rest of the manuscript — more distant, more clinical. Was that intentional?' The writer who has spent a year studying register, diction, FID, and the rhetoric of fiction can answer precisely: 'Yes — that chapter is the one where the narrator is least able to be inside the experience, and the clinical register is the narrator's defense against material they can't yet fully inhabit. The distance is the narrator's, not the prose's failure.' That answer is only available to the writer who has the grammatical and rhetorical vocabulary to locate the effect in the specific mechanism that produces it.",
            },
          ],
          outro: [
            "After the defense, when the committee's questions have been answered and the thesis is complete: the analytic vocabulary built across three years of grammar instruction is no longer a curriculum tool. It is simply the way the writer thinks about prose — their own and everyone else's. It does not switch off when the program ends. It is, now, part of the mind.",
          ],
          exercise:
            "No exercise. Review the defense presentation once, aloud. Review the question notes. Go to the defense. The grammar curriculum is in the work.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "The Only Reading This Week",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Your defense presentation",
              author: "You — from Week 26",
              href: "",
              note: "Read once, aloud, at performance pace. This is confirmation, not rehearsal. If anything in the presentation no longer reflects your current understanding of the thesis — if the public reading shifted something, if the submission process clarified something — revise the specific passage. Otherwise, close the document and trust it. You wrote it when you understood the work most fully. That understanding is still there.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Your notes on the three committee questions",
              author: "You — from Week 26",
              href: "",
              note: "Review the written notes on the three questions the AI simulation generated. Revise any answer that the public reading's experience has shifted. Then write three to five additional questions from the committee's perspective — the claims the presentation makes most briefly, the formal decisions it mentions without fully accounting for — and write brief notes in response to each. The defense that has prepared for eight questions is the defense that can be fully present in the room.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Final Preparation and the Defense Itself",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "This week's writing is preparation rather than production. Review the defense presentation and question notes as described in the craft lecture and reading sections. Write the three to five additional questions from the committee's perspective and the brief notes in response. This writing — these notes — is the last preparation work the program requires. It should take no more than two hours.",
            "Then rest. The defense is not improved by additional study after the preparation is complete. It is improved by the quality of attention the writer brings to the room, and that quality is best protected by rest, reasonable sleep in the nights before the defense, and the deliberate setting aside of the anxiety that the preparation, once complete, no longer justifies.",
            "After the defense: write one page of notes about the experience before the day ends. Not a formal reflection — notes. What questions came that you had and had not prepared for. What question opened into the best part of the conversation. What you said that surprised you. What the committee said that you will carry forward. The defense happened once. The notes are what persists.",
          ],
          target:
            "Defense presentation reviewed; three to five additional questions prepared; defense given; one page of notes written after",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "No AI Workshop This Week",
      blocks: [
        {
          type: "paragraph",
          content: [
            "There is no AI workshop this week. The defense is a conversation between the writer and the committee — people who have read the thesis, who have their own intellectual relationship to the work, who are bringing their full attention to a genuine inquiry about what the writer made and how and why. No AI simulation can substitute for that encounter or prepare for it more than the Week 26 simulation already did. The preparation is complete. The conversation is the event.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "If the defense produces questions that remain unresolved after the event — questions the committee raised that the writer wants to think through further, observations about the work that open rather than close — those can be taken to the AI in the weeks that follow, as part of the ongoing inquiry into the work's life in the world and the writer's evolving understanding of what they made. But that conversation belongs to the fallow period and the next project, not to this week.",
          ],
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Receive the Revisions",
      blocks: [
        {
          type: "tip",
          icon: "🎓",
          name: "If the Committee Asks for Revisions — Receive Them as the Gift They Are",
          paragraphs: [
            "A pass with revisions is the most common outcome of a thesis defense, and it is not a lesser outcome than a clean pass. The committee that asks for specific revisions is the committee that has read closely enough to identify what the thesis still needs — and that specificity is exactly the guidance that is hardest to get and most useful to act on. The revision request is not a judgment that the thesis is inadequate; it is an investment in making it what it is capable of being.",
            "Receive the revisions with the same precision you brought to the defense: write them down exactly as stated, ask clarifying questions if the scope is unclear, confirm the timeline for resubmission. Then, in the days after the defense, read the revision requests as craft problems — the specific formal or thematic adjustments the committee has identified as the manuscript's remaining work. The writer who has spent three years developing the revision vocabulary to address exactly these kinds of problems is the writer best equipped to address them efficiently and well.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "After the Defense",
      blocks: [
        {
          type: "journal",
          title: "What the Conversation Revealed",
          question:
            "Write this entry in the day or two after the defense, when the conversation is still close enough to be specific but far enough that the defensiveness of the moment has settled. What question from the committee was the most useful — the question that opened rather than challenged, that extended your understanding of the work rather than requiring you to defend a position you held before you entered the room? What did you say in the defense that surprised you — an answer that emerged in the conversation that you did not know you had, a formulation of something about the work that you had not yet found language for before you were asked? And: now that the thesis is complete and defended, what do you understand about it that you could not have articulated while you were inside the making of it? The defense is the first time the work is discussed rather than made. Write about what that discussion revealed.",
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "The Thesis Is Complete",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "The defense is done. The thesis is complete and defended. Three years, 108 weeks, the full grammar curriculum, twenty-eight AI exercises, a manuscript drafted and revised and submitted and read aloud and defended — the program's central obligation is fulfilled. What remains in the six weeks ahead is not the thesis. It is the infrastructure of the ongoing writing life: the next project, the essay form as permanent practice, experimental form, the craft talk, the final synthesis. The program continues. The thesis is done.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Weeks 31–36",
          paragraphs: [
            "Week 31 begins the program's final arc — five weeks dedicated not to the thesis but to establishing the infrastructure of the writing life that continues after the program ends. Week 31 opens the next project: the first notes, sketches, or early drafts of whatever comes next, alongside a 600-word essay on the grammar curriculum across three years. Week 32 turns to the literary magazine as the ongoing form — the personal essay submitted while the thesis manuscript moves through the submission process. Week 33 is experimental form as permanent practice. Week 34 is the residency application as professional infrastructure. Week 35 is the craft talk for the teaching portfolio. Week 36 — the final week — is the synthesis: who the writer is now, at the program's end, and what the writing life ahead looks like. Six weeks remain. The thesis is behind you.",
          ],
        },
      ],
    },
  ],
};
