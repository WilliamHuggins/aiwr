import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek12Data: WeekData = {
  weekNumber: 12,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Full Read-Through",
  title: "The Full Manuscript Read-Through — The Final Structural Assessment",
  emphasizedWord: "The Read-Through",
  deck: "With all major revision passes complete, this week you perform the second full manuscript read-through: the one that will determine whether the thesis is structurally complete and whether the remaining work is genuinely line-level, or whether structural problems remain. Read the full manuscript in as few sessions as possible — ideally one or two. Do not revise as you read. Mark. Feel. Assess.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "84 of 108" },
    { label: "Craft Focus", value: "Full Manuscript Read-Through" },
    { label: "Grammar", value: "Phase 7 Synthesis — Narrative Technique as a Complete System" },
    { label: "Deliverable", value: "800-word Read-Through Report" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Reading Your Own Manuscript — and What the Read-Through Is Actually For",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The full read-through is a different act from revision. Revision is surgery: targeted, incremental, focused on specific problems that have been identified in advance. The read-through is diagnosis: a continuous encounter with the manuscript as the reader will experience it, without the interruption of correction, designed to reveal what the revision passes — which were conducted section by section, problem by problem — could not see. The revision passes worked with a microscope; the read-through requires binoculars. The problems visible at the microscopic scale and the problems visible only at the manuscript's full length are different problems, and the read-through is the only instrument capable of identifying the second category.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The most important discipline of the read-through is also its most difficult: do not stop to revise. The writer who stops at a weak sentence to fix it has broken the continuity of the reading experience and cannot receive the manuscript as a reader will receive it. Every stop is a surrender of the bird's-eye view for the worm's-eye view — a trade of the whole for a part, and the part is not what the read-through is for. Mark the weak sentence. Keep reading. The pattern that the weak sentences form across the full manuscript — the cluster in a particular section, the consistent failure in a particular mode — is the finding. The individual sentences are symptoms; the pattern is the diagnosis.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "At some point in revision, a draft reaches a threshold of quality where it is good enough — functional, competent, sometimes quite fine. The good enough trap is the temptation to stop here. The final read-through is where you decide: is this as good as it can be, or as good as it is so far? The distinction is everything.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "What the Read-Through Is Looking For — Five Findings",
          paragraphs: [
            "Structural integrity: does the architecture that the structural passes built still hold across the full length of the manuscript? The structural passes worked sequentially — triage, scene map, character revision, thematic audit, voice audit — and each pass may have introduced changes that affect the others. A character arc adjusted in the character pass may have altered the thematic distribution. A voice revision may have changed the pacing. The read-through is the first time the writer has experienced the full manuscript after all the structural changes have been made, and the question is whether the structure holds as a whole, not just part by part. Structural integrity holds when the opening's governing question is consistently engaged throughout the middle and addressed at the close; when the character arcs are complete without being tidy; when the thematic passes are distributed throughout rather than concentrated in the opening and ending; when the pacing map's intended shape is actually what the reading experience delivers.",
            "Genuine line-level work vs. residual structural problems: the single most important distinction the read-through makes. After eleven weeks of revision, the writer who encounters a weak passage needs to know whether the weakness is a sentence-level problem (the words are wrong, the rhythm is off, the image is imprecise — a line-level problem addressable in the genre-specific final pass in Week 13 and the intensive production weeks) or a structural problem that the line-level work has uncovered (a scene that is weak because it is in the wrong position, a passage that is flat because the character's arc hasn't prepared for what is happening here, a section whose pacing fails because the preceding section didn't establish the tension this one is supposed to discharge). The read-through's marking system distinguishes these: one mark for line-level, a different mark for structural. When the report is written, the distribution of marks tells the writer what kind of work remains.",
            "Structural problems revealed by revision: sometimes a structural problem is invisible until the line-level work exposes it. The sentence-level revision of a section may reveal that the section's prose is weak not because the sentences are poor but because the section is doing work that belongs elsewhere, or is doing work that has already been done, or is covering an emotional register that the manuscript's structure has not prepared for. These are structural problems that the structural passes missed — often because the structural passes were working from the scene map rather than from the prose itself, and the prose's specific texture was not yet visible. The read-through identifies them as structural rather than line-level and adds them to the revision plan for immediate attention.",
            "The state of the four primary revision targets: the read-through provides the current assessment of the opening, the ending, the governing images, and the voice across the full manuscript. Each of these has been revised individually; the read-through asks whether the individual revisions cohere at full length. The opening that worked as an isolated passage: does it still work as the manuscript's actual first encounter? The ending that earned its commitment in the alternatives exercise: does it arrive with the weight the full manuscript has been building toward it, or does it feel smaller than the journey? The governing images deepened in Week 8: are they distributed with the right frequency and weight across the full reading experience, neither over-present nor invisibly sparse? The voice revised in Week 5: is it consistent across the full manuscript, or are there sections — perhaps sections that were written early and not fully caught in the voice pass — where it falters?",
            "What the manuscript is now: the final finding of the read-through, and in some ways the most important. After eleven weeks of revision, the manuscript has changed substantially from the draft that entered Week 1. The read-through's report includes a current-state description — not an evaluation of what the manuscript should be or what it is working toward, but what it is now, at this moment, as a reading experience. This description is the baseline for all the work that follows: the genre-specific final pass in Week 13, the intensive production weeks, the submission preparation. The writer who knows clearly what the manuscript currently is has a stable foundation for the work remaining; the writer who is uncertain has no baseline and risks revision that circles without advancing.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "The Read-Through Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The novel's read-through should be conducted as close to the reading experience of a first reader as possible: in sustained sessions, without stopping, covering as much ground per session as stamina allows. The read-through that is spread across many short sessions never achieves the continuous experience that reveals the manuscript's full-length problems. For the novel specifically, the read-through should track the reader's energy level across the length — marking the points where engagement flags, where the reading feels like work rather than experience, where the urge to stop is strongest. These points are almost always pacing problems or structural problems, and their location in the manuscript (early middle, late middle, post-climax) tells the writer which of the four pacing failure modes is still present after the pacing revision.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay or play read-through should be conducted as a table read if possible — performed aloud with different voices for different characters, heard rather than read. The problems visible to the ear in a screenplay are different from the problems visible to the eye: dialogue that reads as plausible is often revealed as unplayable when spoken; action lines that look precise on the page may be revealed as visually ambiguous when the reader must construct the scene in real time. If a table read is not possible, the writer should read the script aloud alone, performing all roles, and mark every line that feels wrong in the speaking. The read-through report for dramatic work includes an assessment of playability — not just whether the script is structurally sound but whether it is actable, whether the characters' intentions and obstacles are clear enough for a director and cast to work from.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoir read-through has a specific complication that fiction does not: the writer knows what is true, and the knowledge of what is true can prevent the writer from receiving the text as a reader will receive it. The memoir reader does not know what is true; they know only what the narrating self chooses to tell them, and the read-through's task is to receive the memoir as a reader — as a constructed narrative, not as a transparent account of events. The CNF read-through asks: is the narrating self's presence consistent and legible throughout? Does the governing inquiry advance or does it stall? Are there sections where the writer's knowledge of the full story has led to underwriting — to compression or summary of moments the reader needs to inhabit as scene? The memoir's structural problems are often inversions of fiction's: where fiction tends to over-explain, memoir tends to under-render.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7 Synthesis — Narrative Technique as a Complete System",
      blocks: [
        {
          type: "grammar",
          title: "Phase 7 Complete · Seven Narrative Technique Topics Held Simultaneously",
          intro: [
            "Phase 7 has introduced the paragraph as unit of composition (Week 9), white space and pacing at the paragraph level (Week 10), and transitional strategies beyond transitional words (Week 11). The Phase 7 synthesis brings in the four remaining topics that the curriculum has been building toward — free indirect discourse, interior monologue and stream of consciousness, the rhetoric of fiction (Wayne Booth's implied author), and deixis, the subjunctive, and tense — and holds all seven simultaneously in an integrated analysis of four pages of the thesis.",
            "Free indirect discourse (FID) is the technique that defines modern literary fiction — the grammatical hybrid in which the narrator's language and the character's consciousness are blended without quotation marks or attribution, creating an intimacy unavailable to either pure narration or pure direct speech. 'She was tired. What was the point of any of it?' — is this the narrator's assessment or the character's thought? Both, simultaneously. FID is the technical instrument Flaubert, Austen, Woolf, and virtually every major novelist since the nineteenth century has used to render interiority without the formality of 'she thought' or the distancing of reported speech. Interior monologue is FID extended to sustained passages of interiority; stream of consciousness is interior monologue pushed to the extreme of mimicking the unfiltered flow of thought, with the grammatical and syntactic disruptions that flow entails (Woolf, Joyce, Faulkner).",
            "Wayne Booth's implied author — from The Rhetoric of Fiction — is the persona the work creates for its author: not the real author and not the narrator, but the intelligence the reader infers from every craft decision the work makes. The implied author is the work's moral and aesthetic sensibility made manifest; every choice — what to show and what to conceal, what the narrator knows and doesn't know, what the prose finds beautiful and what it finds banal — contributes to the implied author the reader constructs. The synthesis question: what implied author has the thesis created? Is that the implied author it intends?",
            "Deixis is the linguistic system of orientation — the words and grammatical structures that locate the reader in time, space, and perspective: here/there, now/then, this/that, I/you/he/she. The effective management of deixis keeps the reader continuously oriented in the narrative's spatial and temporal field; deictic failures — the passage whose temporal location is ambiguous, the scene whose spatial orientation is unclear, the shift from past to past-perfect that loses the reader's temporal footing — are among the most disorienting problems a manuscript can have. The subjunctive mood (the mode of hypothesis, wish, and counterfactual — 'if she were here,' 'had he known,' 'she wished it were otherwise') is one of prose fiction's most powerful tools for rendering the gap between what is and what a character desires, fears, or imagines. Tense management — the consistent use of narrative tense, the deployment of the historical present for immediacy, the past-perfect for backstory — is the temporal skeleton of the prose.",
          ],
          rule: "The Phase 7 synthesis exercise: take four pages of the thesis — the four pages that are most representative of the manuscript's central narrative mode, neither the most exceptional nor the weakest, but the most typical. Analyze them at every Phase 7 level: (1) paragraph architecture — what is each paragraph's organizational principle, and is it being executed consistently? (2) white space distribution — is the white space serving the pacing needs of these pages? (3) transitional approach — are the transitions architectural or annotative? (4) FID usage — where is FID being used, and where is interiority being rendered through less intimate means when FID would serve better? (5) interiority mode — which mode of interiority (summary, FID, interior monologue, stream of consciousness) is dominant in these pages, and is it the right mode for what the pages are doing? (6) implied author — what does the implied author created by these pages value, see, care about? Is that the right implied author for this thesis? (7) deixis, subjunctive, and tense — is the temporal and spatial orientation consistent throughout? Are there deictic failures? Is the subjunctive being used where the manuscript needs its particular shade of hypothetical or longing? Write a 300-word narrative technique analysis. Then revise the pages toward greater sophistication across all these dimensions.",
          examples: [
            {
              label: "Free indirect discourse — the intimacy grammar makes possible",
              text: "'She sat across from him and watched him talk about his plans for the summer. He had such plans. Always such plans, and she was expected to receive them with enthusiasm, as though the plans were also hers, as though she had not heard them before, as if any of this were still interesting.' The shift from narration (she sat, she watched) to FID (he had such plans — whose assessment is this? the narrator's tone using the character's thought) to something more openly interior (she was expected — though still without 'she thought') creates intimacy without announcing it. The reader inhabits the character's exhaustion and irony without ever being told she is exhausted or ironic.",
            },
            {
              label: "The subjunctive as instrument — rendering what is not but is desired or feared",
              text: "'If he were here, she would know what to say.' The subjunctive were (not was) marks the condition as contrary to fact — he is not here, and this is not a simple conditional but a wish, a grief, a habitual counterfactual thought. The indicative past ('if he was here') flattens the grammar of longing into the grammar of hypothesis. The subjunctive preserves the emotional register: this is a thought that knows its own impossibility and is feeling it.",
            },
          ],
          outro: [
            "Phase 7 is complete after this week. Phase 8 begins in Week 13 with the genre-specific final pass — the revision conducted with the awareness of the specific conventions and expectations of the writer's genre, the pass that brings the manuscript into its fullest relationship with the tradition it is entering. The Phase 7 narrative technique tools do not disappear when Phase 8 begins; they become, like the Phase 6 word-level tools, part of the integrated sensibility the writer brings to all subsequent work.",
          ],
          exercise:
            "Apply all seven Phase 7 tools simultaneously to four representative pages of the thesis. Write a 300-word narrative technique analysis covering paragraph architecture, white space, transitions, FID usage, interiority mode, implied author, and deixis/subjunctive/tense. Revise the pages toward greater sophistication across all dimensions.",
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
              title: "Your own thesis manuscript",
              author: "—",
              href: "",
              note: "This week's only required reading. Read it in its entirety — in as few sessions as possible, ideally one or two, in conditions as close to uninterrupted as you can arrange. Print it out if that helps create the reading distance the screen cannot provide. Read with two marking tools: one for line-level problems (weak sentences, imprecise images, rhythm failures, word-level errors), one for structural problems (scenes that are not earning their place, sections where the governing question has gone dormant, character arcs that are inconsistent with the character revision). Do not stop to fix anything. At the end of the reading, you will have a marked manuscript and the immediate memory of the reading experience. Both are the material for the read-through report.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Second Read-Through Report",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Immediately after completing the read-through — while the reading experience is still available as memory, before the revision impulse displaces the assessment — write the read-through report. The report is not a revision plan; it is a diagnostic document that describes what the manuscript currently is and what the reading revealed. It should be written quickly and honestly, without the hedging or qualification that comes when the writer has time to rationalize. The read-through report that takes three days to write is a report that has had time to become a defense of the manuscript rather than an account of it.",
            "The report covers five areas in approximately 800 words total. First, structural integrity: does the architecture hold? Name specifically any structural problem that the revision passes did not fully solve, or any new structural problem that appeared in the continuous reading experience. Second, the line-level vs. structural distribution: of the problems marked in the reading, what proportion are genuine line-level (sentence, word, image) and what proportion are structural? If structural problems remain, name them and their location. Third, revision-revealed structural problems: were there passages where the line-level revision had exposed a structural problem underneath — where weak prose turned out to be a symptom of a misplaced scene or an arc inconsistency? Fourth, the current state of the four primary targets: opening, ending, governing images, voice. One paragraph on each, describing honestly what the read-through revealed about how each is currently working at full manuscript length. Fifth, what needs to happen: a specific, realistic account of the work remaining — what must be done before the genre-specific final pass in Week 13, what can wait for the intensive production weeks, and an honest assessment of whether the manuscript is structurally complete or whether structural work remains.",
          ],
          target:
            "800-word read-through report in five sections: structural integrity, line-level vs. structural distribution, revision-revealed problems, current state of the four primary targets, work remaining",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Comprehensive Developmental Assessment",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste the most substantial portion of the manuscript available — as much as the context window allows, starting from the beginning. Frame it explicitly as a manuscript that has been through substantial revision and is approaching final draft status. The AI reads as a developmental editor conducting a final assessment, not as a first reader.",
          prompt:
            "Read this as a manuscript that has been through substantial revision and is approaching final draft status. I am not looking for a first-reader response or a general assessment — I am looking for a rigorous final developmental evaluation. What, if anything, remains at the structural level that is not yet fully resolved? Look specifically for: any remaining inconsistency in character arc or motivation; any section where the governing question of the work goes dormant rather than being actively engaged; any pacing problem at the manuscript scale that the revision has not fully addressed; any place where the opening's contract is not being kept in the body of the work. Then: what is the manuscript's greatest remaining strength — the element that is working at the highest level, that the revision has developed most fully? What is the manuscript's greatest remaining problem — the single issue that, if resolved, would most significantly improve the work? And finally: what would make this a finished work — not perfect, but finished at the highest level this manuscript is capable of?",
          questions: [
            "The AI's identification of structural problems that remain: compare its findings to the read-through report's structural findings. Where both the AI and the read-through report identify the same structural problem, it is confirmed and should be prioritized above all other remaining work before the genre-specific final pass. Where the AI identifies a structural problem the read-through did not catch — or vice versa — the discrepancy is worth investigating. The AI is reading without the writer's investment in the manuscript's success; the read-through report is written by the writer who has spent eleven weeks revising it. Both perspectives are valuable; neither is complete alone.",
            "The AI's answer to the 'greatest remaining strength' question: note whether it identifies the same strength the writer would name. The manuscript's greatest strength is also its most important resource in the remaining revision — the element that is working at the highest level should be studied and, where possible, allowed to set the standard for the elements that are not yet working at that level. The voice revision in Week 5 did this at the sentence level; the comprehensive assessment does it at the manuscript level.",
            "The AI's answer to the 'greatest remaining problem' question: this is the single most actionable finding of the comprehensive assessment. If the AI has correctly identified the problem that, if resolved, would most significantly improve the work, the revision plan for the weeks ahead should be organized around its resolution. The remaining revision work should prioritize this problem above all others — not because the other problems are unimportant, but because addressing the most significant problem first sometimes resolves or reduces the apparent severity of the problems that were secondary.",
            "The AI's answer to 'what would make this a finished work': compare this to the read-through report's 'what needs to happen' section. Where the two accounts agree, the revision plan has its clearest mandate. Where they diverge — where the AI identifies something the writer's report omitted, or where the writer's report identifies something the AI's assessment missed — the divergence is the most productive finding of the week. A manuscript approaching completion is a manuscript whose writer knows it almost too well; the AI's externally-generated account of what would make it finished may be the most useful outside perspective available before the manuscript goes to human readers.",
          ],
          note: "The comprehensive assessment completes the Fall semester's formal revision work. Week 13 is the genre-specific final pass — a different kind of revision, conducted with the specific conventions and reader expectations of the thesis's genre in mind. After Week 13, the program shifts to professional preparation (submission packages, teaching portfolios, residency applications) while the intensive thesis production continues through the Spring semester's final draft weeks. The manuscript that enters Week 13 should be structurally complete; the genre-specific final pass is a refinement, not a reconstruction.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Good Enough Trap",
      blocks: [
        {
          type: "tip",
          icon: "⚠️",
          name: "Is This as Good as It Can Be — or Just as Good as It Is So Far?",
          paragraphs: [
            "At some point in revision, a draft reaches a threshold of quality where it is good enough — functional, competent, sometimes quite fine. The sentences are clear. The structure holds. The characters are distinguishable. The governing question is legible. A reader would not put it down in frustration. This threshold is real, and reaching it is a genuine accomplishment after the year of drafting and the eleven weeks of revision that have preceded this moment.",
            "The good enough trap is the temptation to stop here. To confuse the absence of obvious problems with the presence of excellence. To mistake the threshold — the point at which the manuscript no longer fails — for the ceiling, the point at which it has achieved everything it is capable of. The final read-through is where you make this determination with honesty: is this as good as it can be, given the capabilities you have developed across three years of this program? Or is it as good as it is so far — meaning that further work, further attention, further willingness to see the problems that the investment of years makes it painful to see, would make it better? The distinction is everything. The thesis should be finished at the highest level your current capability permits. Not the first level that feels acceptable.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Manuscript as It Actually Is",
      blocks: [
        {
          type: "journal",
          title: "The Honest Account",
          question:
            "Write an honest account of the manuscript as it actually is after the read-through — not as you hoped it would be when you began Year Three, not as you wish it were, but as the reading experience revealed it to be today. What surprised you in the read-through — what was better than you feared, what was worse, what was different from your expectation in ways you cannot yet fully account for? Where in the manuscript did you feel the reading become genuinely alive — where did you forget that you were the writer and become the reader? And where did the writer's anxiety reassert itself — where did you read as the person who made this rather than as the person encountering it for the first time? The gap between those two reading experiences — the alive reading and the anxious one — is the most honest available map of the manuscript's current state: the alive sections are what the revision has achieved, and the anxious sections are what remains.",
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "What You've Built — and Phase 7 Complete",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week you should have: read the full manuscript in as few sessions as possible without stopping to revise; marked the manuscript with two distinct marks (line-level and structural problems); written the 800-word read-through report in its five sections; completed the AI comprehensive developmental assessment with all four reflection questions; applied all seven Phase 7 tools simultaneously to four representative pages with 300-word analysis and revision. Phase 7 is complete.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 13 — and Phase 8",
          paragraphs: [
            "Week 13 is the genre-specific final pass: the revision conducted with full awareness of the specific conventions, traditions, and reader expectations of the thesis's genre. Literary fiction, screenplay, and memoir each have genre-specific final pass protocols that are distinct from the manuscript-scale revision that has occupied the fall semester. Grammar transitions to Phase 8: style studies and synthesis, beginning with minimalism — Hemingway, Carver, Hempel — and what makes it work syntactically. Phase 8 will occupy the remaining twenty-three weeks of Year Three.",
          ],
        },
      ],
    },
  ],
};
