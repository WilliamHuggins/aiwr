import type { WeekData } from "@/lib/mfa/types";

export const yearThreeWeek9Data: WeekData = {
  weekNumber: 9,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Pacing Revision",
  title: "Pacing Revision — Managing the Reader's Experience of Time Across the Full Manuscript",
  emphasizedWord: "Pacing",
  deck: "Pacing at the sentence and scene level was studied in Year Two. Year Three pacing concerns the full manuscript: the distribution of tension across the whole, the placement of moments of relief and acceleration, the management of the reader's energy across 200+ pages. Books that start brilliantly and lose momentum in the middle; books that are relentlessly tense without breathing room; books whose climax is over too quickly — all of these are pacing failures at the manuscript level.",
  meta: [
    { label: "Commitment", value: "15–20 hrs" },
    { label: "Program Week", value: "81 of 108" },
    { label: "Craft Focus", value: "Pacing Revision" },
    { label: "Grammar", value: "Phase 7, Topic 1 — The Paragraph as Unit of Composition" },
    { label: "Deliverable", value: "Pacing Map + Analysis + Substantive Revision" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Manuscript's Rhythm — Tension, Release, and the Management of the Reader's Energy",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Pacing is not speed. The slow manuscript and the fast manuscript are not inherently better or worse than each other; the wrong manuscript is the one whose pacing does not match what the material requires. The manuscript that moves too quickly through its most emotionally significant moments — that dispenses with the scene the whole book has been building toward in two pages — is a manuscript that does not trust its own weight. The manuscript that expands every moment to the same length regardless of its significance — that gives a transitional dinner scene the same number of pages as the climactic confrontation — is a manuscript that does not understand the hierarchy of its own events. Pacing is the management of proportion: the decision, enacted through the allocation of time and space, about which moments matter most and which are connective tissue between them.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The full-manuscript pacing revision is distinct from all the revision work that has preceded it because its instrument is not the sentence or the scene but the chapter or section — the largest units of the manuscript's structure. The pacing map builds what the scene map built for architecture: a bird's-eye view that makes the manuscript's temporal distribution visible as a pattern rather than a sequence. From the pacing map, the failures of distribution that are invisible inside the reading experience become legible: the sustained plateau of identical emotional temperature that makes the middle feel stalled; the acceleration that begins too early and exhausts the reader before the climax arrives; the climax that is compressed to a fraction of the space it needs while lesser events have been expanded; the ending that continues for too long after the work's central tension has discharged.",
          ],
        },
        {
          type: "pullquote",
          quote: "Relentless tension exhausts the reader. Even the most propulsive literary fiction needs moments of relief — a quieter scene, a lyric passage, a conversation that lets both character and reader breathe before the next escalation. The breathing room is not weakness in the pacing; it is what makes the escalation feel like escalation.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Pacing Problems at Manuscript Scale — and What Each Requires",
          paragraphs: [
            "The middle sag: the most common pacing problem in long manuscripts, and the one the pacing map most reliably reveals. The middle sag is the section — often spanning 30–50% of the manuscript — where the emotional temperature has plateaued, where tension is being maintained but not escalating, where the forward momentum of the opening has dissipated without the gathering urgency of the final movement having yet begun. The middle sag is not always a structural problem; sometimes the manuscript's material requires a sustained contemplative middle that the genre's conventions have trained readers to experience as slow even when it is doing necessary work. The diagnostic question: is the middle's pace appropriate to what the material requires, or has the manuscript arrived at its midpoint without a clear sense of what the middle's job is and how it escalates the story toward the climax? The middle sag that is structural (scenes that are present without being necessary, that are filling time rather than building toward something) is addressed in the cut list. The middle sag that is a pacing choice (the deliberate deceleration before a climactic acceleration) needs to be visible in the pacing map as intentional, not as drift.",
            "The premature climax: the climactic scene or sequence arrives before the manuscript has built sufficient tension to make it feel earned, or the climax is given insufficient space to discharge the tension that has accumulated. Both are related problems: the first is a failure of preparation, the second a failure of trust. The manuscript that rushes through its climax — that gives two pages to the event its whole architecture has been building toward — is the manuscript that is most clearly in the grip of the writer's anxiety about the material. The climax is precisely where the prose should slow down, where scene should expand, where the reader should be given the full experience of the moment the work has been promising. The pacing revision's most urgent task when the climax is compressed: expand it. Not by adding information, but by giving the event the time and space it needs — the slowing of the prose, the access to interiority, the physical particularity of the moment rendered at full scale.",
            "The extended denouement: the manuscript continues for too long after its central tension has been resolved. The extended denouement is a different failure from the premature climax but often occurs in the same manuscript: the writer who rushes through the climax frequently overexplains the aftermath, as though the narrative needs to explain what the climax means because the climax itself did not make it felt. The pacing revision asks of everything after the climax: is this earning its place, or is it the writer's reluctance to end — the anxiety about whether the work has said enough, shown enough, resolved enough? The work ends when the central question has been answered or definitively left open. Everything after that answer or that refusal is denouement, and denouement should be as short as the work's specific needs allow.",
            "The insufficient opening acceleration: the manuscript takes too long to generate the momentum the story needs. The opening pacing problem is often not that the opening is slow — slowness at the opening can be exactly right — but that it is slow without being purposeful, that it is establishing atmosphere or character or world without creating the forward pressure that gives the reader a reason to continue. The opening acceleration is the quality of inevitability that the reader feels when a manuscript is paced well at its start: the sense that the story has begun, that something is in motion, that the first scene's events are generating consequences that will arrive later. The pacing revision for the opening asks whether that quality of inevitability is present from the first pages, whether the opening's pace is matched to its purpose, and whether the transition from opening establishment to rising action is occurring at the right moment.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Pacing Revision Across All Three Tracks",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The novel's pacing revision should work from the scene map built in Week 2: the emotional temperature column is the raw material for the pacing map. Plot the temperatures across the manuscript's full length and look for the pattern: sustained plateaus, abrupt shifts, the shape of the arc from beginning to climax. The literary fiction pacing revision has a specific complication that commercial fiction does not: the deliberate plateau, the deceleration that is the work's aesthetic argument rather than its failure, must be distinguished from the accidental plateau that has occurred because the middle has lost its structural purpose. The test is the same test the thematic audit applied: can the slow section articulate what work it is doing? If yes — if the deceleration is serving the governing question, developing the interiority, earning the eventual escalation — it stays. If no, the cut list is the instrument.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenplay's pacing revision uses the specific formal constraints of the medium as its instrument: the page-per-minute rule (roughly one page of formatted screenplay equals one minute of screen time) makes pacing quantifiable in a way that prose narrative is not. A three-act feature screenplay of 110 pages should have its act break at approximately page 25–30 and its midpoint at approximately page 55. The pacing map for a screenplay plots actual page counts against these conventional benchmarks and identifies where the script is running long or short relative to the structure its genre requires. For plays: act length and scene length are the instruments; the pacing map assesses whether the ratio of long scenes to short scenes is creating the rhythm the work needs, and whether the act breaks are landing at the moments of maximum structural tension.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The CNF pacing revision is complicated by the form's characteristic alternation between scene and reflection — between the dramatized past and the narrating present's commentary on it. The pacing problem most specific to memoir is the reflection imbalance: sections where the narrating self's commentary on events has expanded to the point where the experiencing self's scenes — the actual rendered moments — have been crowded out. Heavy reflection slows the narrative; the reader is being told about experience rather than given it. The pacing revision for CNF asks, of every section with a low scene-to-reflection ratio, whether the reflection is earning its space: is the narrating self's commentary advancing the investigation, complicating what the scene established, carrying the governing question forward? If not, the reflection is pacing weight that can be compressed or cut, and the scene — the rendered moment the reader can inhabit — should be given more of the space.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 7, Topic 1 — The Paragraph as Unit of Composition",
      blocks: [
        {
          type: "grammar",
          title: "Phase 7 · The Paragraph — What Christensen Taught About the Unit Between the Sentence and the Scene",
          intro: [
            "Francis Christensen's generative rhetoric of the paragraph — developed alongside his sentence work in the 1960s and collected in Notes Toward a New Rhetoric — argues that paragraphs have structure analogous to sentences: a topic or base sentence (the kernel, the paragraph's central statement) and developing sentences (the free modifiers at the paragraph level) that add coordinate, subordinate, or mixed layers of information, qualification, illustration, or complication. The effective literary paragraph is not organized by the rule of 'one topic per paragraph' — a schoolroom principle that produces paragraphs of correct bureaucratic prose and mediocre literary prose. It is organized by one of three deeper principles: the movement of consciousness (the paragraph tracks a single arc of thought or perception from its inception to its conclusion or its interruption); the progression of a scene's physical action (the paragraph moves through a continuous moment of rendered experience); or the logic of an essayistic argument (the paragraph advances a single argumentative move, with its developing sentences providing the evidence or qualification the move requires).",
            "The paragraph that is organized by none of these principles — that aggregates sentences whose relationship to each other is associative rather than structural, that begins in one place and ends in another without the movement between them being meaningful — is the shapeless paragraph that the revision must address. The shapeless paragraph is not identified by its length or by the absence of a clear topic sentence; it is identified by the inability to describe its organizational principle. If you cannot say of a paragraph 'this paragraph does X by moving from A through B to C,' the paragraph is shapeless and needs to be rebuilt.",
          ],
          rule: "The three legitimate paragraph organizational principles for literary prose: (1) The consciousness paragraph moves through a single arc of thought — from its initiation (the sentence that establishes what the consciousness is attending to) through its development (the sentences that trace the thought's movement, qualification, or complication) to its conclusion or interruption (the final sentence that either arrives somewhere the opening sentence was building toward, or is cut off by an external event). (2) The scene paragraph renders a continuous moment of physical experience — its sentences advance in time through the moment, each sentence carrying the action or the sensory detail forward, the paragraph ending when the moment's unity is complete or when a shift of attention interrupts it. (3) The argument paragraph advances a single essayistic move — its topic sentence states the claim, its developing sentences provide the evidence, illustration, or qualification, and its final sentence either consolidates the claim or pivots toward the next paragraph's claim. Literary paragraphs often combine these principles, but the combination should be intentional rather than accidental.",
          examples: [
            {
              label: "The consciousness paragraph — tracking a single arc of thought",
              text: "'She had not expected to feel relieved. That was the word for it, though — relief, clean and shameful, arriving the moment the doctor said the word terminal, as if the uncertainty had been the unbearable thing all along and the certainty, however terrible, was something she could hold. She stood at the window while he continued talking. She noticed the parking lot. She noticed the specific gray of the asphalt and the way a pigeon was walking along the white line of a parking space, and she thought: I will remember this pigeon. I will remember this as the moment everything changed.' The paragraph has a single arc — the unexpected arrival of relief — and develops it through the consciousness's specific, slightly dissociated attention to what the mind fixes on when it cannot process what it is receiving.",
            },
            {
              label: "The shapeless paragraph — and what rebuilding it reveals",
              text: "'The town had changed since she left. There was a new coffee shop on Main Street and the hardware store was gone. She had grown up here. Her mother's house was on Elm and she used to walk to school every day past the old library, which was now a parking lot. It was strange to be back.' Five sentences, five different focuses, no arc, no developing principle. The shapeless paragraph is not bad writing at the sentence level; each sentence is adequate. It is bad writing at the paragraph level: nothing is being done by the aggregation. The rebuild: decide what this paragraph's single organizational principle is. Is it the strangeness of return? The specific texture of what has changed? The narrator's relationship to the town's transformation? Choose one, find the topic sentence that commits to it, and rebuild.",
            },
          ],
          outro: [
            "This week's grammar exercise: take a paragraph from your thesis that feels shapeless — a paragraph whose organizational principle you cannot describe in a single sentence. Identify what the paragraph is trying to do by examining its sentences individually: what is the most important sentence? What are the others in relationship to it? Rebuild the paragraph from its most important sentence outward, using whichever of the three organizational principles — consciousness, scene, argument — best serves what the paragraph is trying to accomplish. Then study three paragraphs from the writer you most admire in your genre: what is each paragraph's organizational principle? Is it always the same, or does the writer shift between principles with intention?",
          ],
          exercise:
            "Find a shapeless paragraph in your thesis and rebuild it from its most important sentence outward using one of the three organizational principles (consciousness, scene, argument). Then analyze three paragraphs from your most admired writer: identify the organizational principle of each, and note whether the writer's characteristic paragraph architecture matches or differs from your own.",
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
              title: "Writing Fiction",
              author: "Janet Burroway",
              href: "",
              note: "The pacing chapters. Burroway's account of pacing in fiction is organized at the scene level — the ratio of scene to summary, the management of time within the dramatized moment. Read it as a diagnostic tool for the pacing map: the sections of the manuscript that are pacing slowly are often sections where the scene-to-summary ratio has inverted, where summary is covering ground that scene should be inhabiting. The pacing revision's instrument at the scene level is the Burroway diagnostic; the pacing map's instrument at the manuscript level is the tension and temperature graph.",
              badge: "Required",
            },
            {
              number: "02",
              title: "Refuse to Be Done",
              author: "Matt Bell",
              href: "",
              note: "The pacing sections — Bell's account of how pacing problems at the manuscript level differ from pacing problems at the scene level, and how the revision addresses each. Bell is specifically useful on the middle: the structural work that the novel's second half must do to justify the first half's promise, and the specific revision strategies that address the middle sag without simply cutting scenes that are needed but are not yet doing their full work.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Pacing Map",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Create a pacing map of your thesis. For each chapter or major section, record three assessments: emotional temperature on a 1–5 scale (1 is quietude, 5 is maximum tension); dramatic tension on a 1–5 scale (the degree to which the outcome of the scene's conflict is uncertain and consequential); and pace as slow, medium, or fast (the ratio of scene to summary, and the density of event within the section's length). The map should cover every chapter or section in the manuscript.",
            "After completing the map, graph the emotional temperature across the manuscript's full length — a simple line graph with temperature on the vertical axis and chapter or section number on the horizontal. Look at the shape of the line. What patterns emerge? Is there a prolonged plateau in the middle where temperature has flatlined? An opening that takes too long to rise from its initial level? A climax that is less elevated than the sections immediately preceding it? An ending that sustains tension after the central question has been resolved? Identify the most significant pacing problem — the pattern in the graph that represents the greatest failure of distribution.",
            "Write a 400-word pacing analysis addressing: what the graph reveals about the manuscript's current temporal distribution; which of the four manuscript-scale pacing problems (middle sag, premature climax, extended denouement, insufficient opening acceleration) is most present; and what specific revision action would address it. Then perform the revision: accelerate the most problematic slow section through compression and cutting, or expand the most problematic compressed section through scene writing and slower temporal rendering. Target: pacing map + graph + 400-word analysis + substantial revision of the most problematic section.",
          ],
          target: "Complete pacing map + temperature graph + 400-word analysis + substantive revision of the most problematic section",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "The Pacing Assessment — Scene, Summary, and the Reader's Energy",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Your Perfect Tutor / Claude",
          intro:
            "Paste 3,000 words from the section of the manuscript the pacing map has identified as most problematic — the section where the graph's line is flattest, where the middle sag or the compression is most pronounced. The AI reads for pacing specifically: where it accelerates and what creates the acceleration, where it slows and whether the slowdown is earned, the ratio of scene to summary, and the specific passages that should be accelerated or expanded.",
          prompt:
            "Map the pacing of this passage. I am sharing it because my pacing analysis has identified it as the section with the most significant pacing problem in my manuscript. Read it specifically for the management of time and tension. Identify: (1) where the prose accelerates and what is creating the acceleration — specific sentence-level or scene-level choices that are generating forward momentum; (2) where it slows and whether the slowdown is productive (earned contemplation, necessary scene-setting, deliberate deceleration before escalation) or problematic (stagnation, scenes without consequence, summary covering what should be scene); (3) the ratio of scene to summary in this passage and whether that ratio is serving or undermining the manuscript's pacing needs at this structural moment; (4) one specific passage that should be accelerated through cutting or compression, and one that would benefit from expansion through scene rather than summary — with specific reasoning for each recommendation.",
          questions: [
            "The AI's identification of where the passage accelerates and what creates it: note the specific techniques — short sentences, scene with immediate consequence, dialogue that generates conflict, compressed time in summary — that the AI identifies as producing forward momentum. These are the techniques the problematic sections are not using, and the pacing revision should ask why. Is it that the content of the slow sections is less inherently propulsive — that what is happening is quieter, more reflective, less dramatic? If so, the question is whether the quieter content needs to be there and what it is doing that the more propulsive scenes cannot do. Or is it that the slow sections contain content that could be propulsive but is being rendered in summary when it should be scene, in narration when it should be action?",
            "The AI's scene-to-summary ratio assessment: compare it to the pacing map's pace ratings for this section. If the AI identifies a high proportion of summary in a section rated as 'slow' on the pacing map, the revision is clear: convert summary to scene. Select the single most important event in the slow section that is currently being covered in summary and render it as full scene — dramatized, with dialogue and action and interiority, in present narrative time rather than retrospective narration. A single scene conversion often changes a section's pacing rating from slow to medium without any other change.",
            "The AI's recommendation for the passage that should be accelerated: evaluate whether the reasoning is structural (the passage is doing work another passage is already doing) or tonal (the passage is at the wrong emotional register for its position in the arc). If structural, the acceleration is achieved through cutting — the passage is moved to the cut list. If tonal, the acceleration is achieved through revision — the passage is rewritten at a pace that matches its structural position. The distinction matters: a passage that needs to be cut should be cut; a passage that needs to be sped up should be revised, not cut.",
            "Apply the pacing map's findings to the revision plan: update the plan's structural category with the pacing revision's specific recommendations — which sections need to be accelerated, which need to be expanded, where the breathing room needs to be added or removed. The pacing revision is the last pass before the opening and ending revisions in Weeks 10 and 11; the revision plan should now reflect the full scope of work remaining before the final read-through in Week 12.",
          ],
          note: "The pacing revision is the last of the manuscript-scale passes. After this week, the revision narrows to the most specific structural concerns: the opening (Week 10), the ending (Week 11), and the full read-through assessment (Week 12). The pacing map should be retained and updated as the opening and ending revisions proceed; changes to the opening and ending often affect the pacing of adjacent sections, and the map should reflect those changes.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Breathing Room",
      blocks: [
        {
          type: "tip",
          icon: "🌬️",
          name: "The Quiet Scene That Makes the Tense Scene Feel Like Tension",
          paragraphs: [
            "Relentless tension exhausts the reader. Even the most propulsive literary fiction needs moments of relief — a quieter scene, a lyric passage, a conversation that lets both character and reader breathe before the next escalation. If your pacing map shows emotional temperature sustained at maximum across ten consecutive sections, you need to introduce breathing room. Not all tension can be resolved; some of it can be paused.",
            "The breathing room is not weakness in the pacing — it is what makes the escalation feel like escalation. The reader who has been held at maximum tension for too long stops feeling tension and starts feeling numbed: the sustained intensity has become the baseline, and no further escalation can register as escalation because everything is already at the top of the scale. The breathing room resets the baseline. The quiet scene between two intense scenes makes the second intense scene feel more intense than it would have felt if it had immediately followed the first. The lyric passage, the domestic scene, the moment of unexpected humor or tenderness — these are not interruptions of the manuscript's intensity but investments in it, the pause that makes the next note land with its full weight.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Where Time Dilates and Where It Compresses",
      blocks: [
        {
          type: "journal",
          title: "The Manuscript's Relationship to Time",
          question:
            "Where in your thesis does time dilate most — where does a single moment expand into pages, where does the prose slow to the speed of consciousness attending to something with its full capacity? And where does time compress most — where do years or months pass in sentences, where does the summary cover ground that scene could inhabit? Write about both for twenty minutes. Then ask: is that distribution correct, or has it drifted from what the material needs? The moments where time dilates should be the moments of maximum significance — the scenes where the central question is most acutely engaged, where the characters are most fully present to each other and to themselves. The moments where time compresses should be the transitions, the connective tissue, the periods where the narrative must cover ground without those periods being the ground worth covering. If the dilation and the compression are mismatched to the hierarchy of significance — if years of important development are compressed while a minor scene is expanded — the pacing revision has found its most urgent target.",
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
            "By the end of this week you should have: the complete pacing map (emotional temperature, dramatic tension, and pace for every chapter or section); the temperature graph plotted and the most significant pacing pattern identified; the 400-word pacing analysis written; the most problematic section substantially revised; the AI pacing assessment completed with all four reflection questions; the shapeless paragraph rebuilt using Christensen's principles; three paragraphs from an admired writer analyzed for organizational principle; the revision plan's structural category updated with pacing revision findings.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 10",
          paragraphs: [
            "Week 10 is the opening revision: the most consequential single revision in the manuscript, because the opening creates the reader's relationship to everything that follows. The questions: does the thesis begin where it must? Is the reader given what they need — the contract, the world, the pressure — in the right order and at the right pace? Grammar continues in Phase 7 with white space and pacing at the paragraph level, extending this week's Christensen work into the spatial dimension of prose on the page.",
          ],
        },
      ],
    },
  ],
};
