import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek4Data: WeekData = {
  weekNumber: 4,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Structural Revision",
  title: "The Thematic Revision — Making the Argument More Precise",
  emphasizedWord: "Thematic Revision",
  deck: "The thesis has a governing question — you articulated it in Year Two. Now, with a complete draft in hand, you can ask more precisely: where is this question most actively engaged in the manuscript? Where is it absent when it should be present? Where has the writing answered it too neatly, foreclosing the complexity that makes the question worth asking? The thematic revision is not about making the work more 'about' something — it is about making every scene, every section, every image do genuine thematic work.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "76 of 108" },
    { label: "Craft Focus", value: "Thematic Revision" },
    { label: "Grammar", value: "Phase 6, Topic 4 — Verb Choice and the Be-Pattern" },
    { label: "Deliverable", value: "Thematic Audit + Revised Scene" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Thematic Audit — Where the Question Lives and Where It Goes Dark",
      blocks: [
        {
          type: "paragraph",
          content: [
            "A manuscript's governing question is not a thesis statement. It is not an answer the work has arrived at before it begins, not a point it is organized to make, not a message the reader is supposed to carry away confirmed. It is a genuine inquiry — an investigation the work conducts through the specific lives of specific characters in specific situations, and whose result is not known in advance. The governing question is what keeps the work honest: it is the thing the manuscript cannot resolve by assertion, that it must earn through the accumulation of evidence the story constitutes. The thematic revision asks whether the manuscript is actually conducting the investigation it claims — whether the governing question is present and active throughout, or whether the work has drifted into territory that is interesting and well-written but that is, in a precise sense, beside the point.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The thematic audit is a marking pass: reading through the full manuscript with the governing question held explicitly in mind, marking in blue every scene where the question is alive — where the content, the character choices, the imagery, or the language is doing work in direct service of the investigation — and marking in red every scene that is thematically inert — where narrative events are occurring, where characters are present and behaving, but where the governing question is not engaged. The red sections are not necessarily bad scenes; they may be well-written, atmospherically effective, even emotionally powerful. They are red because they could be removed without damage to the thematic argument — and any scene that could be removed without thematic damage is a scene that is available to be cut, regardless of its local quality.",
          ],
        },
        {
          type: "pullquote",
          quote: "The theme should be felt, not stated. If you find yourself adding 'and this was the moment she understood that love was always a form of loss,' cut it. The scene should have already made that true.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Patterns the Thematic Audit Reveals",
          paragraphs: [
            "The dormant middle: the governing question is active in the opening and closing sections — where the writer's investment and the manuscript's momentum are highest — and goes largely absent in the middle, where the narrative has been doing the work of moving from the beginning to the end without asking whether the movement is thematically productive at each stage. The dormant middle is the most common thematic problem in long manuscripts, and it is also the most practically addressable: the audit identifies which middle scenes are red, and the revision adds a beat of thematic engagement to each — not a statement of the theme, which is the over-explanation failure the editorial tip addresses, but a specific action, image, or moment of interiority that brings the governing question into active play within the scene's existing content. A red scene revised to blue is not necessarily a longer scene or a more philosophically explicit scene; it is a scene where one thing has been added or changed — a word, a gesture, a specific character choice — that makes the investigation present in what was previously narrative connective tissue.",
            "The premature resolution: the governing question has been answered — and answered with more certainty than the material warrants — before the manuscript is ready to answer it. The premature resolution is the thematic failure of nerve: the writer who, under pressure from the long manuscript's need for forward momentum, allows the investigation to arrive at a conclusion that forecloses further complexity. The premature resolution is recognizable by a specific quality of thematic closure — the scene that resolves the governing question as though it is a plot problem rather than an investigation — followed by a section in which the manuscript is still going because the story hasn't ended but the inquiry has. The reader feels this as a sagging in the work's later sections: the narrative continues but the intellectual and emotional urgency that was carrying it has discharged prematurely. The revision is not to defer the resolution but to restore the complexity: the answer the premature resolution provides is too simple, and the revision finds the specific way in which it is too simple and builds that complexity back in.",
            "The misaligned governing question: the thematic audit occasionally reveals that the manuscript's actual governing question — the question its best scenes are investigating — is not the question the writer identified when they wrote it down in Year Two Week 8. This is not a failure; it is a discovery. The draft has done what good drafts do: it has discovered something the writer could not have found before writing toward it. The misaligned governing question is the thematic audit's most important finding, because it is the one that will redirect the entire revision. If the manuscript is investigating something different from what the writer thought it was investigating, the revision plan's thematic category needs to be reconsidered: some scenes that were blue by the original governing question's standard will be red by the actual one, and vice versa. The thematic audit's most honest question is not 'where is the governing question engaged?' but 'what question is this manuscript actually asking?'",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Thematic Revision Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Theme in literary fiction is usually discovered through drafting, not planned. The revision is where the writer identifies what the work has been about all along and deepens it — where the unconscious intelligence of the drafting is made visible and given structural support. The fiction writer's thematic audit should pay particular attention to the scenes that surprised the writer in the drafting: the scenes that went somewhere unexpected, that produced a character choice the writer hadn't planned, that arrived at an image or a line whose full weight the writer only understood after writing it. These surprising scenes are often the manuscript's thematic core — the places where the investigation was most alive. The revision should treat them as anchors: what they are doing thematically, the surrounding scenes should be revised to do as well.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Theme in screenwriting is often more explicitly formalized than in prose fiction — McKee's 'controlling idea,' the single sentence that names the thematic argument the script is making — but the formalization does not mean the theme should be stated on screen. The controlling idea is the writer's internal compass; the audience should feel the argument through the specific choices the characters make and the specific consequences those choices produce, never through a character speaking the theme or a voiceover naming it. The thematic audit for a screenplay asks: for each scene, is the scene making the thematic argument through action and choice, or is it making it through dialogue that explains what the scene's action has already shown? Dialogue that explains the theme is the screenplay's equivalent of the prose narrator who announces what the scene means. Cut it.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In essay and memoir, the governing question is the essay's inquiry — the question the writer is genuinely trying to answer through the writing. The critical word is 'genuinely': if the writer already knows the answer before writing, the essay has no intellectual momentum, and the reader will feel this as a quality of false inquiry, a going-through-motions of investigation whose conclusion was fixed before the investigation began. The thematic audit for CNF asks of each section: is the narrator genuinely uncertain here — genuinely working toward understanding — or is this section arranging evidence toward a conclusion already arrived at? The sections where the narrator's uncertainty is real and present are the essay's strongest sections; the sections where the narrator is performing inquiry while actually confirming pre-existing conclusions are the thematic revision's primary targets.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 6, Topic 4 — Verb Choice: Active, Dynamic, and the Be-Pattern",
      blocks: [
        {
          type: "grammar",
          title: "Phase 6 · The Verb as Engine — What Weak Verbs Cost the Prose",
          intro: [
            "The verb is the engine of the sentence. It is the word that enacts rather than describes, that creates the event rather than reporting it, that makes the sentence move rather than stand still. Virginia Tufte, in Artful Sentences, studied what she called the 'be-pattern' — the overreliance on forms of 'to be' (is, was, were, had been, seemed, appeared, became) — as the primary weakness of underpowered literary prose. The be-pattern creates static prose: prose that describes states rather than enacting events, that reports the existence of conditions rather than showing them arriving and changing. 'The room was cold' is a report; 'the cold came in around the window frame' is an event. 'She was afraid' is a state; 'she flinched' is an action. The be-pattern sentence tells the reader what things are; the dynamic verb sentence shows the reader things happening.",
            "The cure is not the elimination of 'to be.' There are sentences where the state of being is exactly what the sentence needs — where the condition itself, rather than its arrival or its cause, is the subject, and where the be-verb is the right instrument for rendering it. 'The house was empty' may be precisely right at a moment where the emptiness is the subject and no more specific event-rendering is needed. The rule is not 'never use be' but 'replace be wherever a more specific, dynamic verb exists and serves the sentence better.' The verb audit — searching twenty pages of thesis for every be-pattern construction and asking, for each, whether a more active verb is available — is the instrument for identifying where the pattern is productive and where it is a habit masking a stronger option.",
          ],
          rule: "The practical test for each be-pattern sentence: is the state being described the result of an action? If yes, the action is usually more interesting than the state, and the dynamic verb that enacts the action will almost always be stronger than the be-verb that reports the state. 'The kitchen was a mess' → 'Dishes filled the sink; flour dusted the counter in two white arcs.' 'He was angry' → 'He set his glass down too hard.' 'She was exhausted' → 'She sat at the table and did not move for twenty minutes.' Each revision replaces the be-verb state report with the specific, concrete action or condition that constitutes the state — Hayakawa's ladder applied to verbs. The resulting prose is more specific, more physical, more present in the world the reader is being asked to inhabit.",
          examples: [
            {
              label: "The be-pattern sentence and its dynamic revision",
              text: "'The waiting room was crowded and uncomfortable, and she was nervous.' → 'Every seat was taken. A child ran between the rows of chairs while his mother watched from the wall. She turned her purse over in her hands, set it on her knees, turned it over again.' The revision has three dynamic verbs (ran, watched, turned) and two be-verbs, one of which describes a concrete count ('Every seat was taken') rather than an abstract state. The nervousness is not stated; it is rendered through the specific physical behavior the nervous person performs. The reader feels the nervousness rather than being told about it.",
            },
            {
              label: "The be-verb that earns its place — state-of-being as the point",
              text: "'After forty years in that town, she was gone.' The be-verb here is not a failure of the dynamic verb; it is the right instrument. The sentence is about an absolute state — the totality and finality of the absence — and any dynamic verb would introduce an event-quality that would soften the absoluteness: 'she had left' or 'she had disappeared' or 'she had vanished' all introduce the idea of a departure, a process, a transition. 'She was gone' is the state after the transition, the condition itself, and the be-verb is what makes it feel final. The verb audit should identify be-verbs like this — where the state, not the event, is the subject — and preserve them. The audit is not the elimination of be-verbs; it is the distinction between be-verbs that are right and be-verbs that are habits.",
            },
          ],
          outro: [
            "This week's grammar exercise: conduct a verb audit on twenty pages of the thesis draft. Search for every form of 'to be' (is, was, were, had been, seemed, appeared, became, felt). For each, ask: is there a more active, specific verb? If yes, write the substitution in the margin. If no — if the state-of-being is exactly what the sentence requires — mark it as a keeper. After the audit, count the proportion of substitutions to keepers. A high proportion of substitutions indicates a draft that is describing states more than it is enacting events; a high proportion of keepers indicates a draft that is using the be-pattern with intention. Both are useful information. Make the substitutions, read the revised passage aloud, and verify that each substitution has improved the sentence rather than merely changed it.",
          ],
          exercise:
            "Conduct a verb audit on twenty pages of the thesis draft: find every be-pattern construction, ask whether a dynamic verb is available and better, substitute where yes, mark as keeper where no. Read the revised pages aloud. Note the proportion of substitutions to keepers in the session log.",
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
              title: "Mystery and Manners",
              author: "Flannery O'Connor",
              href: "",
              note: "The essays on fiction and meaning — particularly 'The Nature and Aim of Fiction' and 'Writing Short Stories.' O'Connor's account of how theme operates in fiction is the most uncompromising available: for O'Connor, the work of fiction is not the statement of a theme but the concrete rendering of a mystery — the thing that cannot be said directly, that can only be approached through the specific and the particular. Her insistence that the writer must 'show' rather than 'tell' at the thematic level — that the theme must be enacted in scene, image, and action rather than announced by narrator or character — is the most important corrective to the thematic over-explanation failure the editorial tip addresses.",
              badge: "Required",
            },
            {
              number: "02",
              title: "A Swim in a Pond in the Rain",
              author: "George Saunders",
              href: "",
              note: "Saunders's analysis of how theme operates in Chekhov's stories — available in the book's Chekhov chapters. Saunders's method of close reading Chekhov is the most useful model available for the thematic audit: he asks, of each scene, what question it is raising and whether the story has the integrity to leave the question open rather than resolving it into a lesson. His concept of the story 'earning' its meaning — the idea that thematic significance is not a property of the subject matter but of the specific, particular, irreducible way the story has rendered the subject matter — is directly applicable to the thematic revision.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Thematic Audit + Scene Revision",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Conduct the thematic audit. Take your thesis's governing question — written down explicitly, in the most precise formulation currently available — and read through the entire current draft with it held in mind. Mark in blue every scene where the thematic question is actively engaged: where the content, the character choices, the imagery, or the language is doing direct work in service of the investigation. Mark in red every scene that is thematically inert: where narrative events are occurring and the scene is well-written but the governing question is not engaged.",
            "After the full read-through, write a 400-word analysis of the pattern. Address: what proportion of the manuscript is blue versus red? Is there a structural pattern to the red sections — are they clustered in the middle, or distributed throughout? Is the governing question you marked against the same governing question the manuscript's blue sections are actually investigating — or has the audit revealed that the manuscript's actual inquiry is more precise, or different, than the question you named? Note any revision to the governing question's formulation prompted by the audit.",
            "Then revise the weakest thematically inert scene: the red scene that has the most potential to become blue with the least structural disruption. The revision should not add a statement of the theme — it should add a specific action, image, line of dialogue, or beat of interiority that brings the governing question into active tension within the scene. The revised scene should be at least as long as the original, and the thematic element should feel organic to the scene's existing content rather than inserted from outside it. Target: 400-word analysis + 700–1,000 words of revised scene.",
          ],
          target: "400-word thematic analysis + 700–1,000 words of revised thematically inert scene",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Thematic Presence and the Inert Passage",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste five pages of the thesis draft alongside the governing thematic question. The AI reads the pages against the question, identifying where the theme is alive and where it is absent — and offering a specific, concrete suggestion for the most inert passage rather than a general recommendation.",
          prompt:
            "I am sharing five pages of my thesis draft alongside my governing thematic question: [state the question]. For each scene or passage in these pages, identify: (1) where the thematic question is most alive — where the content, character choices, or imagery engage the question directly, and what specifically is creating that engagement; (2) where the passage is thematically inert — where the narrative is moving but the question is not present; (3) for the most thematically inert passage: one specific addition — an action, a line of dialogue, an image, a beat of interiority — that would bring the thematic question into active play without feeling imposed from outside the scene's existing content. Do not add a statement of the theme; suggest something concrete that enacts it.",
          questions: [
            "The AI's identification of the most thematically alive passage: compare it to your own blue markings in the thematic audit. If the AI and the writer agree on the passage most alive with the governing question, that consensus is the manuscript's strongest evidence of what thematic engagement looks like in this specific work — and the revision can use it as a model for the red sections. If they disagree, the disagreement points to a question worth sitting with: is the writer marking as blue passages that are thematically important to their intention but not yet communicating that importance to a reader? Or is the AI missing something the writer knows the passage is doing? The distinction matters for how the revision proceeds.",
            "The AI's specific suggestion for the most inert passage: evaluate it against the revision you produced this week. Did the AI identify the same scene as the weakest thematically, or a different one? If the AI's choice is different, consider whether the AI's choice is more urgent — whether a reader who does not know the manuscript's governing question is experiencing the inertness more acutely at the AI's chosen passage than at the writer's. If the AI's suggestion for what to add is different from what you added, test both: write the AI's suggested version of the revision and read both against the passage's context. Which better serves the governing question without feeling imposed?",
            "The thematic over-explanation check: does the AI's suggestion risk stating the theme explicitly — adding dialogue or interiority that names what the scene should show? If the AI's suggestion is 'have the character reflect that this is a question of belonging,' that is a thematic statement and should be rejected in favor of a concrete rendering. If the suggestion is 'add an action where the character physically turns away from the person who has just offered them what they need,' that is a concrete enactment. The test: if the suggestion could be cut from the scene without the reader losing the narrative, it is probably the right kind of thematic addition. If the suggestion is necessary for the reader to understand the scene's meaning, it is probably an explanation rather than an enactment.",
            "Update the revision plan's thematic category based on the audit findings. The thematic revision is not complete in a single week — it is an ongoing pass that will continue through the structural revision weeks and be revisited in the line-level pass. Note in the revision plan: which scenes have been revised from red to blue this week, which remain red and are candidates for the ongoing thematic pass, and whether the governing question's formulation has been refined by the audit's findings.",
          ],
          note: "The thematic audit and revision are among the revision's most intellectually demanding passes because they require holding the governing question explicitly in mind throughout a long manuscript read — a different cognitive mode from the scene-level reading that most revision work involves. The AI workshop's value here is partly in the forcing function: articulating the governing question precisely enough to share it with the AI, and then reading the AI's assessment of whether the manuscript is actually investigating that question, produces a clarity about the gap between intention and effect that self-evaluation alone often does not.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Thematic Over-Explanation",
      blocks: [
        {
          type: "tip",
          icon: "✋",
          name: "The Theme Must Be Felt, Not Stated",
          paragraphs: [
            "The most common thematic failure in revision is the impulse, once the writer has identified their theme, to make it explicit — to have characters speak it, to have the narrator announce it, to add a passage of reflection in which the protagonist arrives at the thematic understanding the writer wants the reader to carry away. This impulse is not dishonest; it comes from a genuine desire to be understood, from the anxiety that the theme will not be felt unless it is stated, that the reader will miss what the writer most wants to communicate. But the stated theme always produces less than the enacted theme — it tells the reader what to feel rather than creating the conditions in which the reader arrives at the feeling independently, and the feeling arrived at independently is the one that stays.",
            "The test for over-explanation is simple: find every passage in the revised manuscript where the narrator or a character names what the scene is about. 'And she understood, finally, what it meant to love someone you cannot save.' 'This was the kind of silence that contained everything that had gone wrong between them.' 'He had spent forty years running from this and now it had caught him.' These are the sentences where the theme has been stated rather than enacted. Read the scene without the explanatory sentence: does the scene still work — does the reader still understand what has happened and why it matters? If yes, cut the explanation. If no, the scene needs to be revised at the level of action and image to make what the explanation is naming visible without the narration. The goal is always a scene in which the explanation sentence is unnecessary because the scene has already done what the explanation was trying to do.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "What the Writing Taught",
      blocks: [
        {
          type: "journal",
          title: "What You Know Now That You Didn't Know Before",
          question:
            "What has your thesis taught you about its own subject — what understanding have you arrived at through the writing that you didn't have when you began? Not what you set out to investigate, not what the thesis proposal said you were exploring, but what you actually know now as a result of having written this work: the understanding that arrived during the drafting, that surprised you, that you couldn't have predicted from the outside of the project. Write for twenty minutes about what you know now. Then ask: is that understanding visible in the manuscript? Is the knowledge the writing has generated available to the reader — embedded in the specific scenes, the specific images, the specific character choices — or is it knowledge the writer has but that has not yet found its way fully onto the page? The gap between what you know and what the manuscript currently shows is the thematic revision's deepest target: not the scenes that are thematically inert because they are poorly written, but the scenes that are thematically inert because the writer's full understanding of the subject has not yet been translated into the form the manuscript requires.",
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
            "By the end of this week you should have: completed the full thematic audit (blue/red marking across the full manuscript); written the 400-word thematic analysis identifying the pattern, the governing question's current formulation, and any refinement prompted by the audit; revised the weakest thematically inert scene (700–1,000 words) to bring the governing question into active play; completed the AI thematic assessment with all four reflection questions; conducted the verb audit on twenty pages (be-pattern substitutions and keepers noted); updated the revision plan's thematic category with the audit's findings.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 5",
          paragraphs: [
            "Week 5 is the voice revision — the last of the structural passes before the line-level work begins. The voice revision audits the full manuscript for consistency: where does the narrator's voice shift unexpectedly, go flat or generic, or lose the specific syntactic identity the Year Two synthesis statement identified as yours? The strongest passages — the 'signature sentences' — become the target standard for the revision of the weaker ones. Grammar: Phase 6 Topic 5 — eliminating adverbs and strengthening verbs.",
          ],
        },
      ],
    },
  ],
};
