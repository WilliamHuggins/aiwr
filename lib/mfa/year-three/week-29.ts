import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek29Data: WeekData = {
  weekNumber: 29,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Defense and Reading",
  title: "The Public Reading",
  emphasizedWord: "The Event",
  deck: "This week has no curriculum requirement. It is the reading. Everything the program has asked you to do — the craft study, the grammar exercises, the revision passes, the workshops, the rehearsals — has been preparation for this: standing in a room with your work, in your voice, and giving it to people who have never encountered it before. Go do that. Then write one page of notes about it while the experience is still in your body.",
  meta: [
    { label: "Commitment", value: "The reading itself" },
    { label: "Program Week", value: "101 of 108" },
    { label: "Craft Focus", value: "The Event — Before, During, After" },
    { label: "Grammar", value: "The Distance Between Year One and Year Three" },
    { label: "Deliverable", value: "One Page of Notes Written After the Reading, While It Is Fresh" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What a Public Reading Is — and What It Cannot Be",
      blocks: [
        {
          type: "paragraph",
          content: [
            "A public reading is the work's first encounter with people who did not make it. Everything that preceded this moment — three years of drafting, revising, studying, rehearsing — was the work being made in private, tested in private, assessed in private. Even the committee read it privately, in the specific solitude of a reader with a manuscript. The public reading is different in kind: the work is now in a room, in real time, irreversible, moving at the pace of speech through an audience that cannot stop and re-read, cannot linger over a sentence, cannot return to a passage that passed too quickly. The reading makes the work live in a way that no other encounter does.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "It also reveals the work in ways no other encounter does. The passages that land — where the room shifts, where the attention sharpens, where something passes between the reader and the audience that is not quite describable but is unmistakably present — are not always the passages the writer expected. Sometimes it is the sentence you nearly cut that produces the response you wanted from the one you kept. Sometimes it is the transition you considered clumsy, read aloud, that turns out to carry exactly the weight the manuscript needed it to carry. The public reading is information about the work that the writer could not have obtained any other way, and the page of notes written after it is the record of that information before it fades.",
          ],
        },
        {
          type: "pullquote",
          quote: "The reading cannot make the work better or worse than it is. It can only reveal what the work already is, in the specific form of one performance, in one room, at one moment in time. That revelation is worth having. Go have it.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Before the Reading — The Week One Documents",
          paragraphs: [
            "Before the reading — not immediately before, not in the hour before you take the stage, but sometime earlier in the day, when there is still space for reflection — read two documents: your Week One, Year One freewrite, and your Week One, Year One journal prompt response. These are the earliest writing the program produced: the baseline, the starting point, the prose of the writer who was about to begin three years of systematic craft development.",
            "Read them as historical documents, not as writing to be judged. The Year One writer who produced those sentences was not a less serious writer than you are now; they were you, at the beginning of a process whose result is the thesis you are about to read aloud. The distance between those early sentences and the sentences in the reading selection is not a measure of the Year One writer's inadequacy — it is a measure of what three years of sustained attention to craft produces. Reading the Week One documents before the reading makes that distance felt in the body, where it should be felt: not as pride, not as relief, but as the specific quality of gratitude a writer feels when the work they set out to do has been done.",
          ],
        },
        {
          type: "card",
          title: "During the Reading — One Thing to Remember",
          paragraphs: [
            "One thing, and only one: be present in the room. The reading that is fully present — the reader who is inhabiting the sentences rather than producing them, who is giving the audience the experience of the prose rather than demonstrating their mastery of it — is the reading that the audience receives. Everything the Week 25 rehearsal cycles and the Week 28 final rehearsals prepared is in the body now; it does not need conscious management during the performance. The mechanics are invisible. The pacing is settled. The breath positions are known. What the performance requires from the writer is not more technique but less self-consciousness: the willingness to be in the room, in the sentences, in the moment of the reading, without the part of the mind that is watching and evaluating the performance taking over from the part of the mind that is giving it.",
            "If the voice breaks in a weighted passage: pause. Breathe. The audience is with you. The pause that honors the weight of the material is not a failure of performance; it is part of the performance. Continue when you can. The reading that acknowledges the weight of its own material is the reading the audience remembers.",
          ],
        },
        {
          type: "card",
          title: "After the Reading — Before You Sleep",
          paragraphs: [
            "Write the page of notes before you sleep. Not in the morning, not two days later when the experience has been processed and shaped into a narrative — while it is still raw, still immediate, still before the memory of it has been replaced by your interpretation of the memory. What happened in the room? What landed where you expected and what landed differently? What surprised you in the audience's response — not what moved you about their response, but what surprised you, what you did not see coming? Was there a passage you nearly cut that you are glad you kept? Was there a moment where you felt the prose become live in the room — where something passed between you and the audience that you can feel in the body as you write these notes but cannot yet describe in words?",
            "These notes are not a critical assessment of the reading. They are not a judgment of how well you read. They are the record of a specific experience that will never happen again in exactly this form: the first time the work was given to an audience, in your voice, in that room, on that night. The reading has happened. The notes are what you save from it.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What Each Track Receives from the Reading",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction reader often discovers, in the live reading, which characters are most fully alive — not in the writer's own assessment of the manuscript, but in the audience's response to the voices. The character whose dialogue produces an audible response, the scene whose physical action the audience can be heard following — these are the manuscript's most inhabited moments, and the notes written after the reading should record them. For the revision that may follow the defense, these moments are the benchmark: the rest of the manuscript should be brought toward what the reading revealed was most alive.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The dramatic writer giving a solo reading of a script discovers the script's performative pace in a way that no table read or silent read can provide: what the audience is willing to follow without visual support, what the dialogue carries on its own, where the action lines are doing necessary work and where they are excess. The notes written after a dramatic reading are especially rich because the script was written to be performed by others, and the experience of performing it solo reveals both what the writing carries and what it needs a full production to complete.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir reading is the most vulnerable of the three tracks' readings, and often the most powerful: the audience knows they are receiving something that actually happened, and the writer knows they are giving it. What the memoir reading reveals, in the notes written after, is often about the narrator's relationship to the material — where the retrospective intelligence is most present in the performance, where the writer was most fully in both roles simultaneously (the person who lived it and the writer who made it into prose), and where the distance between the two collapsed in a way that was not managed but simply happened in the room.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Distance Between Year One and Year Three — Read It; Feel It",
      blocks: [
        {
          type: "grammar",
          title: "No Exercise This Week — One Instruction Instead",
          intro: [
            "There is no grammar exercise this week. The grammar curriculum is complete; the closing reflection was written in Week 26. What the grammar section offers this week is one instruction, which is also a practice that has no end date.",
          ],
          rule: "When you read the Week One freewrite before the reading this week, read one sentence — any sentence — with the full Phase 1 through Phase 8 toolkit available. Not to judge the Year One sentence, and not to annotate it. Just to feel, in the space of a single sentence, the distance the curriculum has covered. The Year One sentence is probably a simple declarative in the middle range of the language — direct, earnest, competent in the way that clear prose is competent before craft has become conscious. The Year Three sentence in the reading selection is something different: it has been made, revised, heard aloud, revised again, submitted. The distance between those two sentences is three years of attention to how language moves. That distance is not a judgment. It is the evidence of the work.",
          examples: [
            {
              label: "What the distance looks like",
              text: "A writer who began the program writing 'She stood at the window and looked out at the street below' and who is now reading aloud, from the thesis, a sentence whose syntax is an enactment of its own meaning — whose structure holds two temporal positions simultaneously, or whose rhythm slows at the exact moment the prose asks the reader to slow — has covered a specific distance. That distance is not between a bad sentence and a good one; it is between a sentence that is clear and a sentence that is alive. Three years of grammar instruction is the record of how that distance gets crossed.",
            },
          ],
          outro: [
            "The practice of reading one sentence from the Year One work before a reading, a defense, or any public presentation of the thesis is a practice worth keeping for as long as the writer writes. It is the fastest available recalibration of what the work has cost and what it has produced.",
          ],
          exercise:
            "No exercise this week. Read the Week One freewrite before the reading. Feel the distance in one sentence. Go give the reading.",
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
              title: "Your Week One, Year One freewrite",
              author: "You — from Year One, Week One",
              href: "",
              note: "Read before the reading. Not immediately before — earlier in the day, when there is still space to feel the distance between these sentences and the ones in the reading selection. No annotation required. No craft assessment. Just the reading, and the distance.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Your Week One, Year One journal prompt response",
              author: "You — from Year One, Week One",
              href: "",
              note: "Read alongside the freewrite, before the reading. The journal prompt from Week One asked who you were as a writer at the program's beginning — what you hoped for, what you feared, what you understood about your own practice before the program had changed it. Read what you wrote honestly, without nostalgia and without condescension. That writer began this. You are finishing it.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "One Page of Notes — Written After the Reading, While It Is Fresh",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write one page of notes about the reading before you sleep on the night it happens. Not a polished reflection — notes. What happened in the room. What landed where you expected and what surprised you. The moment, if there was one, where you felt the writing become live in the room. The passage whose response you did not anticipate. The sentence you are glad you kept. The moment, if there was one, where the voice broke or nearly broke, and what that felt like from the inside.",
            "Write these notes in the notebook, not in the document. They are not an assessment of your performance; they are the record of an experience. The reading happened once. The notes are what persists from it.",
          ],
          target: "One page of notes, handwritten if possible, written before sleep on the night of the reading",
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
            "There is no AI workshop this week. The reading is not a task to be prepared for with prompts or assessed with tools. It is an event: live, unrepeatable, between the writer and the audience in the specific conditions of a specific room on a specific night. No AI can attend it with you. No AI can tell you what it felt like from the inside. The notes you write after it are yours alone.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "If, in the days after the reading, you want to use the AI to process what the experience revealed about the work — the passages that landed unexpectedly, the response that surprised you, the moment where the prose became something different in performance than it was on the page — that conversation is available. But it is not a curriculum requirement. It is the writer's own inquiry, conducted in the writer's own time, in the fallow period between the reading and whatever comes next.",
          ],
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Last One",
      blocks: [
        {
          type: "tip",
          icon: "📖",
          name: "The Work Is Never Finished — and That Is Not a Failure",
          paragraphs: [
            "Every published book is a draft the writer was eventually willing to release into the world. The thesis you read aloud tonight is not a perfect object — no manuscript is, and no public reading reveals only strengths. What the reading reveals is what the manuscript is: what it does fully and what it reaches toward. The difference between a completed thesis and an abandoned draft is not perfection. It is the commitment to release. You committed. You released. The work is in the world.",
            "You are already beginning again.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "After the Reading",
      blocks: [
        {
          type: "journal",
          title: "What Happened in the Room",
          question:
            "Write this entry after the reading — not the page of notes, which is immediate and raw, but this entry, which can be written the next day or the day after, when the experience has settled enough to be reflected on but not yet so far that it has been replaced by the story you tell about it. What happened in the room that you did not expect? Not what went well and what went badly — what surprised you? The audience member whose response you felt without seeing; the moment where the reading was different from any rehearsal in a way that was better than any rehearsal; the sentence that, spoken aloud in that room to those people, meant something it had not meant in private. Write also about the Week One documents you read before the reading: what was it like to be that writer for a moment, and then to walk into the room with the manuscript that writer was going to make? The distance is yours. Write about it.",
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "What Happened",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "The reading happened. The Week One documents were read before it. One page of notes was written after it while the experience was still in the body. The journal entry was written in the days following, before the memory of the experience was replaced by the story told about it. Week 29 is complete.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 30",
          paragraphs: [
            "Week 30 is the thesis defense — or the preparation for it, if the defense is not yet scheduled. The defense presentation written and stress-tested in Week 26 is now the primary document: review it, practice it aloud once more, and prepare the answers to the three questions the AI simulation generated. Then the defense itself. After Week 30, the thesis is complete and defended, and the program's final six weeks — Weeks 31 through 36 — shift entirely to the infrastructure of the ongoing writing life: the next project, the essay form, experimental form, the craft talk, the residency application, and the final synthesis of who the writer is now, at the program's end, and what the writing life ahead of them looks like.",
          ],
        },
      ],
    },
  ],
};
