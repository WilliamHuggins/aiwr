import type { WeekData } from "@/lib/mfa/types";

export const week5Data: WeekData = {
  weekNumber: 5,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Time Manipulation — Flashback, Flash-Forward & Compression",
  emphasizedWord: "Time Manipulation",
  deck: "All narrative involves the management of time, and the management of time is inseparable from the management of meaning. Flashback is not a device for providing backstory — it is a structural decision that says: this past moment is so present to the character, or so essential to the reader's understanding, that the narrative must stop its forward motion to return to it. Flash-forward makes a promise about where we're going. Compression is an act of selection that declares what matters enough to show.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "41 of 108" },
    { label: "Craft Focus", value: "Time Manipulation" },
    { label: "Grammar", value: "Phase 3 · Prepositional Phrases" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Time Is Not What Happened — It Is What the Story Chooses to Show",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every narrative is a selection from time. Even the simplest chronological story — beginning at point A, ending at point B — involves constant acts of compression and expansion: the years that pass in a sentence, the conversation that takes ten pages, the moment before an accident that slows to something approaching stillness. These are not technical decisions separate from the story's meaning. They are the story's meaning. The story that lingers on an afternoon and skips across a decade is making an argument about what matters. The story that gives equal time to equal spans of calendar time is not being neutral — it is being inattentive to the difference between duration and significance.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The three primary tools of time manipulation — flashback, flash-forward, and compression — are each a different kind of argument. The flashback argues that a past moment is ",
            { text: "more present than the present:", emphasized: true },
            " that it has not receded, that it continues to exert force on the current situation, that the reader cannot fully understand what is happening now without being returned to what happened then. The flash-forward argues that the future is already present: that what will happen is so certain, or so significant, that the narrative must acknowledge it before it occurs. Compression argues that some time is less important than other time — that certain events are worth rendering as scene and others are worth only summary, and that the act of selection is itself a statement about meaning.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The flashback is justified only when the experience of returning to the past is itself part of the story's meaning — not when it is a vehicle for delivering information the present-tense narrative could carry differently.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Tools, Three Arguments",
          paragraphs: [
            "Flashback — the past that is more present than the present: the flashback is triggered by something in the present-tense narrative — a sensory detail, an object, a phrase, a situation that rhymes with an earlier one — and it returns the reader to a specific past moment with the same vividness and specificity as the scene being interrupted. The return to the present, after the flashback, changes what the present means: the reader now holds both times simultaneously, and that doubleness is the flashback's gift. The flashback fails when it is backstory delivery — when the past moment is not charged with its own life but exists only to explain something in the present. The test: if the flashback could be replaced by a single summary sentence without significant loss, it should be. The flashback earns its interruption of the present only when the experience of returning — the immersion in the past, the specific quality of that moment — is itself irreplaceable.",
            "Flash-forward — the future that is already present: less common than flashback but equally powerful, the flash-forward reveals where the story is going before the story has arrived. It creates dramatic irony — the reader knows something the characters do not — and it changes how every subsequent scene is read. The flash-forward makes a promise: this is what will happen, and every scene between here and there is the story of how we arrive. Used at the opening, the flash-forward establishes the narrative's endpoint and asks the reader to watch the journey rather than wonder at the destination. Used mid-narrative, it is an interruption that says: hold this knowledge while you watch these events unfold. Both uses require that the revealed future be significant enough to bear the weight of the reader's foreknowledge.",
            "Compression — summary as selection: every scene that is not shown must be summarized, transitioned across, or elided. The choice between these three is a craft decision with significant consequences. Summary ('three years passed, and the house changed as houses do') tells the reader that time passed without rendering it — it declares that this period's events are less important than what precedes and follows them. Transition ('by the time she returned, everything was different') moves the reader across time without specifying what filled it, creating a gap whose nature the reader infers. Elision ('she did not think of him again until the following spring') collapses time entirely, making the gap itself the statement. Compression is not laziness — it is the art of knowing which moments require scene and which require only acknowledgment that they occurred.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Ishiguro's ",
            { text: "The Remains of the Day", emphasized: true },
            " is the most instructive available study of all three tools operating simultaneously and at maximum sophistication. Stevens's narrative moves between the present of his motor journey and the past of his service under Darlington — but the movement is not straightforward flashback. It is self-deception rendered as time management: Stevens returns to the past to defend his choices, and his returns are shaped by what he will not acknowledge. The structure performs the psychology. The reader understands Stevens's self-deception through the ",
            { text: "way", emphasized: true },
            " he moves through time, not through what he says about it. This is time manipulation at the level where form and content become inseparable.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Time Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Time manipulation in literary fiction is managed through narrative tense, grammatical mood (particularly the subjunctive and the conditional for flash-forward), and transitional language — but the best writers make these transitions nearly invisible. The reader moves between times without being told they are moving, because the sensory precision of each temporal location orients them without announcement. Munro's time management is the most sophisticated available in the short story form: 'Carried Away' contains forty years and makes every transition invisible by treating time the way memory treats it — associatively, not chronologically, with the past erupting into the present through the pressure of what has been suppressed.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, flashbacks are formally marked by slug lines (INT. CHILDHOOD HOME — DAY — FLASHBACK) and must be used sparingly. Overused flashbacks signal a writer who does not trust their linear storytelling — who needs to explain rather than dramatize. The flash-forward in screenwriting is rarer and more powerful: used at the opening (as in *Sunset Boulevard*, which begins with the narrator's corpse and narrates backward to how he got there), it restructures the viewer's entire relationship to the subsequent action. For playwrights, time manipulation is theatrical and therefore physical: lighting changes, costume changes, an actor's shift in posture and voice that signals temporal displacement. The stage cannot cut the way film can, so time in theater must be performed.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Memoir operates in a permanent tension between the time of the event and the time of writing — between the experiencing self who did not know what would happen and the narrating self who does. Every flashback in memoir is formally a return to the past as experienced from the present: the 'then' filtered by the 'now,' the past moment carrying the weight of what the narrator has learned since. The memoir's most sophisticated time management is the one in which the gap between the experiencing self and the narrating self is itself the subject — where the narrator's retrospective understanding is present in how the past is rendered, not in explicit commentary. Didion's *Magical Thinking* achieves this: the present tense of grief and the past tense of the marriage are not two separate time periods but two versions of the same ongoing event.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 5 — Prepositional Phrases as Rhythmic Building Blocks",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 41 of 60 — Prepositional Phrases: Spatial Grammar and Rhythmic Precision",
          intro: [
            "The prepositional phrase locates action in space and time: in the corner, before dawn, through the cracked window, against the wall, beneath the table, after the third attempt. Used with precision, prepositional phrases create the spatial grammar of a scene — the reader knows where everything is, where everyone stands, and when everything occurs. Used carelessly, they clutter the prose with directional noise that obscures rather than clarifies.",
            "Prepositional phrases are Phase 3's most rhythmically versatile construction: they can open a sentence (giving spatial or temporal orientation before the main action), close it (grounding the main clause in a specific location or moment), or accumulate in series to create the texture of a space or the passage of time. Their rhythm is determined by their position and their number — a single well-placed prepositional phrase adds precision without weight; a series creates accumulation that can function as either density or clutter, depending on whether each phrase earns its position.",
          ],
          rule: "The discipline of prepositional phrase use is the discipline of selection: each phrase should provide information that the reader needs and cannot infer. 'She walked through the door into the hallway toward the kitchen in order to make herself a cup of coffee' is five prepositional phrases doing the work that 'She went to make coffee' does better. The phrases are redundant because the information they provide — that walking through a door leads to a hallway, that the kitchen is where one makes coffee — is already known. The prepositional phrase earns its position when it specifies something genuinely particular: not 'into the room' but 'into the room that still smelled of him'; not 'before she left' but 'before she could say what she had come to say.'",
          examples: [
            {
              label: "Opening prepositional — temporal orientation before the action",
              text: "Before the first cup of coffee, before the news, before the day could make its claims on her, she sat at the window and watched the street. [Three prepositional phrases in opening position, each one a threshold crossed before the main clause — the accumulation creates the feeling of a small ceremony of quiet.]",
            },
            {
              label: "Closing prepositional — spatial grounding after the action",
              text: "She found the letter beneath the telephone directory, under a year's worth of takeout menus, at the back of the drawer she had not opened since his death. [Three closing prepositionals moving from general to specific, the final one carrying the temporal weight that changes the meaning of everything preceding it.]",
            },
            {
              label: "Prepositional phrase as rhythmic time compression",
              text: "He drove through the town, past the school, past the house where she had grown up, out along the highway toward the coast, in the direction of nothing in particular. [The series of prepositional phrases creates a rhythm that enacts the driving — the reader moves through space at the pace of the prose, each phrase a landmark.]",
            },
            {
              label: "The clutter problem — and the fix",
              text: "Cluttered: 'She moved through the door into the kitchen across the linoleum floor toward the counter beside the window.' Fixed: 'She crossed the kitchen to the counter by the window.' The fixed version provides the same spatial information in half the words, with a cleaner rhythm that does not compete with whatever the scene is actually doing.",
            },
          ],
          outro: [
            "The relationship between prepositional phrases and this week's time manipulation topic is the relationship between spatial and temporal location: prepositional phrases locate in space, and time manipulation locates in time, and the two are more closely related than they appear. The flashback uses temporal prepositional phrases to mark its entry and return ('three years earlier,' 'by the time she arrived home'). Compression uses prepositional phrases to gesture across time without rendering it ('through the winter, through the difficult spring'). The spatial precision that good prepositional phrase use creates in a scene is the same kind of precision that good time management creates in a narrative: the reader always knows where they are.",
            "The exercise this week applies the selection principle directly: write a scene using prepositional phrases to create a complete spatial map, then cut 30% of them without losing the spatial clarity. The phrases that survive the cut are the ones the reader genuinely needs; the ones that don't survive are the ones the reader was already inferring.",
          ],
          exercise:
            "Write a 200-word scene description — no character action, no dialogue, just the space — using prepositional phrases to create a complete spatial map. The reader should be able to draw the room or space from your description. Then cut 30% of the prepositional phrases without losing the spatial clarity. Which phrases survived? What made them essential? Apply the same selectivity test to one setting description in your current thesis draft: mark every prepositional phrase, cut those the reader can infer, keep those that are genuinely particular.",
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
              title: "The Remains of the Day",
              author: "Kazuo Ishiguro",
              href: "https://bookshop.org/p/books/the-remains-of-the-day-kazuo-ishiguro/6697453",
              note: "Purchase. Reread — or read for the first time — with full attention to time management. Every flashback in this novel is a form of self-deception: Stevens returns to the past to defend choices he cannot examine directly, and the structure of his returns reveals what the content of his narration conceals. Map three specific moments where Ishiguro moves between the present of the motor journey and the past of Darlington Hall. What triggers each movement? What does the past-tense scene argue that the present-tense narrator will not say? What does the reader understand about Stevens that Stevens does not understand about himself — and how does the time structure make that gap visible?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"Carried Away"',
              author: "Alice Munro",
              href: "https://bookshop.org/p/books/selected-stories-alice-munro/6697453",
              note: "Purchase (in Selected Stories or Lives of Girls and Women). 'Carried Away' contains approximately forty years of story and makes every temporal transition nearly invisible. Read for how Munro moves between time periods: what signals the shift, how much the reader is disoriented before reorienting, and what information the transition itself carries. Munro treats time the way memory treats it — associatively, with the past erupting through the pressure of what has been suppressed rather than through the logic of what comes next.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Tell It Slant, chapter on time in nonfiction",
              author: "Brenda Miller & Suzanne Paola",
              href: "https://bookshop.org/p/books/tell-it-slant-brenda-miller/6697453",
              note: "Purchase (continuing from Week 4). Read the chapter specifically on the management of time in creative nonfiction — the tension between the time of the event and the time of writing, how the experiencing self and narrating self are both present in every scene, and how the most sophisticated memoir makes the gap between those two selves the subject rather than the background. Apply their account to the Ishiguro reading: where does Stevens's experiencing self diverge most sharply from his narrating self?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Justified Flashback + Thesis Session 5",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Justified Flashback (900–1,100 words): Write a scene in the present tense that is interrupted by a flashback of exactly the right length and precision. The flashback must be: triggered by a specific sensory detail in the present-tense scene (not a decision to remember, but an involuntary recall produced by something the character perceives); rendered with the same scene-level specificity as the present-tense narrative (it is not summary but scene — it has its own entry point, complication, and exit); the right length (long enough to establish its world and carry its charged moment, short enough not to displace the present as the narrative's primary location). After the flashback, return to the present — and the present must mean something different than it did before the interruption. The doubleness is the exercise's goal: the reader holding both times simultaneously, the present changed by what the flashback has revealed.",
            "The flashback is not backstory. It does not explain the present-tense scene or provide context for it. It illuminates — it casts the present in a light that the present could not generate from within itself.",
            "Part Two — Thesis Session 5 (1,500–2,000 words): Write the next section of the thesis manuscript. Before the session, audit the current draft for time management: identify every place where time passes between scenes. Is each passage handled by scene, summary, transition, or elision — and is that the right choice for each gap? Record the audit findings and any resulting adjustments in the session log alongside the session's word count and objective.",
          ],
          target: "900–1,100 words (flashback scene) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 41 — The Time Auditor",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your flashback scene — the 900–1,100-word piece written for this week's exercise. The AI's task is to evaluate the flashback as a structural decision, not as a piece of prose — to assess whether the flashback is earning its interruption of the present.",
          prompt:
            "Evaluate the flashback in this piece as a structural decision. Answer four questions precisely: (1) What triggered the flashback — is the trigger sensory, specific, and inevitable (does it feel like involuntary recall rather than a narrative convenience), or is it vague and willed? (2) Does the flashback provide information or experience that could not have been delivered by any other means — could a single summary sentence replace it without significant loss? (3) How does the present-tense scene mean differently after the flashback than it did before — what has changed in the reader's understanding of the present? (4) Is the flashback the right length — is there any moment where it could be trimmed without losing what makes it necessary? Identify the specific sentences where the flashback could end earlier without loss.",
          questions: [
            "Does the AI assess the trigger as sensory and specific, or as vague and willed? If vague, what specific detail in the present-tense scene could have produced the recall more inevitably — what object, sound, smell, or phrase was already present that could carry the trigger's weight?",
            "Question two — could a summary sentence replace the flashback without significant loss? If the AI's answer is yes, the flashback has not yet earned its interruption. What would need to change in the flashback's content to make the immersive return to the past irreplaceable rather than merely efficient?",
            "Question three — how does the present mean differently after the flashback? If the AI identifies a meaningful change, what specifically changed — what did the reader know after the flashback that they did not know before, and how did that knowledge change the present scene's weight? If the AI finds the present unchanged, the flashback has not yet done its work.",
            "Apply the justified flashback test to one existing flashback in your thesis draft — if one exists. Could the information it delivers be integrated differently? Is the experience of returning to that past moment itself part of the story's meaning, or is it backstory delivery in scene clothing?",
          ],
          note: "The time auditor prompt applies a single standard to the flashback — is it justified? — and refuses to let formal sophistication substitute for structural necessity. A beautifully written flashback that delivers information the present-tense narrative could carry differently is still an unjustified flashback. The standard is not quality but necessity: the flashback is justified only when the return to the past — the experience of that specific moment, in full scene detail — is itself what the story needs, not a more efficient vehicle for the same information.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Justified Flashback Test",
      blocks: [
        {
          type: "tip",
          icon: "⏱️",
          name: "Before Keeping Any Flashback, Apply This Test",
          paragraphs: [
            "Before keeping any flashback in a draft, ask: could this information be delivered in the present-tense narrative through action, dialogue, implication, or a single summary sentence without significant loss to the reader's experience? If yes — if the information could travel a different route and arrive with equivalent weight — cut the flashback and integrate the information differently. The flashback is justified only when the experience of returning to the past is itself part of the story's meaning: when the reader's immersion in that specific past moment, rendered as full scene, changes what the present means in a way that summary could not.",
            "The most common flashback failure is backstory delivery in scene clothing: the writer has realized the reader needs to know something that happened earlier, and has chosen to deliver that information as a dramatized scene rather than as summary. The scene may be well-written. It is still unjustified, because the scene's purpose is informational rather than experiential — the reader learns something but does not need the experience of the past moment itself. The test distinguishes between the flashback that delivers information and the flashback that delivers an experience that changes what the information means. Only the second is justified.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Past That Interrupts the Present",
      blocks: [
        {
          type: "journal",
          title: "The Past That Interrupts the Present",
          question:
            "What past moment interrupts your present most reliably — what image or memory intrudes when you least expect it, arrives unbidden in the middle of something else, refuses to stay in its own time? Not the memory you choose to visit but the one that visits you. What triggers it — what specific sensory detail, what quality of light or sound or smell, what situation that rhymes with an earlier one? What does its persistence tell you about what remains unresolved — about what the past is still doing in the present, still making claims, still requiring something of you? And: is this memory already in your thesis, or have you been keeping it out? If out: why, and what would it mean to let it in — not as backstory, but as a flashback triggered by exactly the sensory detail that triggers it in your actual life?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is an excavation of involuntary memory — Proust's madeleine principle applied to the writer's own life. The memory that arrives unbidden is already structured as a flashback: it has a trigger, it interrupts the present, it changes what the present means by its arrival. The writer who can identify that structure in their own experience has the raw material of a justified flashback — not a flashback chosen for narrative efficiency but one that arrived because the present demanded it.",
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
            "By the end of this week you should have: written the 900–1,100-word justified flashback scene with a sensory trigger, full scene-level specificity in the past, and a present that means differently on return; written 1,500–2,000 words of thesis in Session 5 with a time management audit of the current draft recorded in the session log; read Ishiguro's Remains of the Day for time manipulation as self-deception performed structurally; read Munro's 'Carried Away' for invisible temporal transitions at the short story scale; read Miller and Paola's time chapter for the experiencing self / narrating self tension in memoir; completed the AI time auditor assessment and applied the justified flashback test to an existing flashback in the thesis draft; written the 200-word spatial map and applied the prepositional phrase selectivity test to a thesis setting description.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 6",
          paragraphs: [
            "Week 6 is Opening Strategies — The First Page as a Contract. The first page of a piece of writing makes a contract with the reader: it establishes the narrative voice, sets the tonal register, introduces the governing question, and makes an implicit promise about what kind of story this will be. Breaking that contract is a serious craft problem. Week 6 studies how master writers open their work, what promises those openings make, and how to build first pages that honor their contracts — with direct application to the thesis opening written in Year One, Week 36 and revised in Year Two, Week 1.",
          ],
        },
      ],
    },
  ],
};
