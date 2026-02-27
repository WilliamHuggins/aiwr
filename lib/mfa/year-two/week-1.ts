import type { WeekData } from "@/lib/mfa/types";

export const week1Data: WeekData = {
  weekNumber: 1,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Scene Construction as Architectural Craft",
  emphasizedWord: "Architectural Craft",
  deck: "You have written scenes. Now you will study them as an architect studies buildings — not as experiences to be had but as structures to be understood from the outside. A scene is a unit of dramatic action with its own internal architecture: entry point, ground situation, complication, turn, and exit. Year Two begins here because everything the thesis requires — depth, simultaneity, sustained intensity — depends on scene construction done consciously rather than intuitively.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "37 of 108" },
    { label: "Craft Focus", value: "Scene Architecture" },
    { label: "Grammar", value: "Phase 3 · Participial Phrases" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Scene from the Outside",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Year One built craft from the inside — from the experience of writing, from the exercise that produced a scene, from the intuition that a moment required expansion or compression. Year Two begins from the outside: looking at the scene as a structure, understanding its architecture well enough to design it before building it, to diagnose its failures after building it, and to revise it with precision rather than by feel alone. John Gardner called the reader's engagement with fiction a 'fictional dream' — a continuous, vivid experience uninterrupted by technical failure. The scene is the unit of that dream. One structural flaw — a scene that enters too early, exits too late, turns in the wrong place, or fails to complicate what it sets up — and the dream collapses. Understanding scene architecture is understanding the mechanism of the dream.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The key insight that separates the Year Two scene from the Year One scene is ",
            { text: "simultaneity.", emphasized: true },
            " A scene that advances only plot is a functional scene — it moves the story forward, it earns its space. A scene that simultaneously advances plot, reveals character, deepens theme, and deploys the prose's grammar as an expressive instrument is a ",
            { text: "literary", emphasized: true },
            " scene — it does multiple things at once, operates on multiple frequencies simultaneously, and is richer on the third reading than on the first. Building toward simultaneity in every scene of the thesis is the craft ambition of Year Two.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "Every strong scene is organized around a single governing question that the scene's end either answers or deepens. If you cannot identify the governing question, the scene may be atmospheric rather than dramatic — and may need to find its question, or be cut.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Five-Part Scene Architecture",
          paragraphs: [
            "Entry point: the latest possible moment at which the scene can begin and still establish everything the reader needs. Entering early — with setup, with context, with the preamble before the action — is the most common structural failure of scenes in first drafts. The reader should feel, when they arrive in a scene, that something is already in motion: a tension that precedes the first sentence, a situation that already contains its complication. 'Enter late, leave early' is not a rule about brevity; it is a rule about pressure. Every sentence before the scene's real beginning releases pressure that the scene needs.",
            "Ground situation: the established state of affairs at the scene's opening — what is true, what is in tension, what the characters want and what stands between them and getting it. The ground situation is not described; it is established through the scene's first significant action or exchange. The reader should understand what is at stake without being told.",
            "Complication: the event, revelation, or action that disrupts the ground situation and forces the scene's action. Complication is not conflict — conflict is the ongoing tension; complication is the specific thing that makes the existing tension untenable, that forces a response, that changes what was possible a moment ago. A scene without a complication is a scene without a turn, which is a scene without an ending.",
            "Turn: the moment after which the scene's situation is permanently changed — after which returning to the ground situation is impossible. The turn is the scene's irreversible moment. It need not be dramatic; it may be a word spoken, a decision made, a thing noticed that cannot be unnoticed. What makes it a turn is irreversibility: the scene before the turn and the scene after it are two different scenes. The turn is the scene's reason for existing.",
            "Exit point: the earliest moment at which the scene can end and still deliver its turn's full weight. Exiting late — with summary of what just happened, with emotional explanation, with the characters' processing of the turn's significance — releases the pressure the scene has built. The scene should end while the turn is still active, before the characters or the narrator have fully absorbed it. The reader's absorption of the turn is the scene's final gift, and it happens in the white space after the last sentence.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The structural autopsy — taking apart a scene you have already written to locate each of the five components — is the primary analytical tool of Year Two. It makes visible what was done intuitively, which is the prerequisite for doing it intentionally. Applied to the thesis opening written in Year One Week 36, the structural autopsy will tell you whether the opening's scene architecture is doing what you need it to do, or whether the opening requires rebuilding from its foundations.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Scene Architecture Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The literary fiction scene does its most important work in the gap between what is said and what is meant, between what the character does and what the prose reveals about what they feel. The five-part architecture applies fully, but the turn in literary fiction is often internal rather than external — a shift in consciousness rather than a shift in situation. The simultaneity principle is most demanding in literary fiction: a scene that carries only one frequency (plot, or character revelation, or thematic weight, but not all three) reads as thin regardless of how competent its execution. The thesis scene should be asking, at every point: what else is this doing?",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "In screenwriting, scene architecture is explicit and technical: the slug line declares the entry point, the action lines establish the ground situation, the dialogue carries the complication, the turn is often visible in a character's behavioral change, and the cut is the exit. The five-part structure maps directly onto industry practice. For playwrights, the architecture is less formalized but equally present — the stage direction that opens the scene establishes the ground situation, the first exchange complicates it, and the turn must be legible to an audience who cannot rewind. The theatrical scene's exit is more often a blackout than a cut, and blackouts must be earned by the scene's turn having fully registered.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The CNF scene inherits its architecture from the fiction scene but carries an additional obligation: the events being structured actually happened, and the structure must serve both the literary and the ethical demands of the material. The CNF scene's entry point is a choice about when the memoirist decides the reader's need begins — not when the events began. The turn in memoir is often the moment of retrospective understanding: the memoirist now knows what the experiencing self did not. The exit point is where the scene leaves the reader with the weight of what has changed, without the narrator processing it into meaning. The memoir that explains its turns is the memoir that has not trusted them.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 1 — Participial Phrases: Movement and Simultaneity",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 37 of 60 — Participial Phrases: The Syntax of Simultaneous Action",
          intro: [
            "Phase 3 of the grammar curriculum builds on the preview introduced in Year One, Week 30, developing the three phrase constructions — participial, absolute, and appositive — into full fluency. Phase 3 covers nine topics across the first nine weeks of Year Two. Where Phase 2 built sentence architecture at the level of clause types and rhetorical figures, Phase 3 builds the sub-clausal constructions that add density, texture, and simultaneous information to prose without requiring additional main clauses.",
            "The participial phrase is Phase 3's first and most versatile construction. A participle is a verb form used as a modifier: present participles end in '-ing' (running, watching, holding); past participles end in '-ed' or '-en' for regular verbs, or in irregular forms (broken, known, worn). The participial phrase consists of the participle and its associated words, attached to a main clause to add information about an action that is simultaneous with, or immediately preceding, the main clause's action.",
          ],
          rule: "The participial phrase creates simultaneity that a coordinate clause cannot: 'She set the table, singing under her breath' renders two actions as simultaneous through the participial construction, while 'She set the table and sang under her breath' renders them as sequential through coordination. The participial phrase subordinates the participial action to the main clause action — setting the table is primary; singing is its accompanying texture. Placement matters: participial phrases can open the sentence ('Singing under her breath, she set the table'), close it ('She set the table, singing under her breath'), or interrupt it ('She set the table — singing under her breath, moving among the plates with the deliberateness of someone who has done this ten thousand times — and said nothing'). Each placement changes emphasis and rhythm.",
          examples: [
            {
              label: "Opening participial — the action arrives before the actor",
              text: "Turning from the window, she understood that he wasn't coming back. [The turning is simultaneous with or immediately preceding the understanding; the opening position gives it slight causal weight — the turn produces the understanding.]",
            },
            {
              label: "Closing participial — texture added to the main action",
              text: "He left without looking at her, pulling the door shut with a care that was worse than anger. [The main action is leaving; the closing participial adds the manner and its emotional weight without requiring a new sentence.]",
            },
            {
              label: "Stacked participials — cinematic density",
              text: "She moved through the house closing windows, checking locks, turning off lights she hadn't turned on, performing the rituals of a life that had already ended. [Three present participials plus a fourth that reframes all three — the stacking creates a hypnotic accumulation.]",
            },
            {
              label: "Dangling participial — the construction's characteristic error",
              text: "Incorrect: 'Walking through the door, the room felt empty.' [The participial 'walking' has no subject in the main clause — the room cannot be walking through the door.] Correct: 'Walking through the door, she found the room empty.' [The participial attaches to the main clause's subject: she walked, she found.]",
            },
          ],
          outro: [
            "The participial phrase is particularly compatible with this week's craft focus: the scene's simultaneous frequencies — the action happening, the character feeling, the thematic weight accumulating — are exactly what participial phrases render. A scene in which every action is given its own main clause produces a flat, sequential quality: 'She turned. She saw the window. The light was wrong. She understood.' Participial phrases create layering: 'Turning, she saw the window, the light wrong in a way she understood immediately, without wanting to.'",
            "The dangling participial is Phase 3's most common error and the easiest to introduce accidentally in revision. After adding any participial phrase, confirm that the phrase's implicit subject is the explicit subject of the main clause. If it isn't, the phrase is dangling and must be reattached or the main clause's subject must be changed.",
          ],
          exercise:
            "Take three consecutive paragraphs from your thesis opening (Year One, Week 36) or from any scene in your current draft. Identify every place where two actions are expressed in separate main clauses when one could be rendered as a participial phrase modifying the other. Rewrite those passages using participial constructions — opening, closing, and interrupted positions. Then read both versions aloud: what does the participial version add that the main-clause version did not? What does it sacrifice? Write two sentences identifying what participial phrases do for scene texture that the five-part architecture framework does not address.",
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
              title: "Writing Fiction, scene construction chapter",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Reread the scene construction chapter with the five-part architecture in hand. Burroway's account of the scene's internal structure is the most accessible available; this reading is not new — it is a rereading with the more precise analytical vocabulary that Year Two's architecture provides. Where does Burroway's account confirm the five-part framework? Where does it complicate or extend it?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "A Swim in a Pond in the Rain, any Chekhov chapter",
              author: "George Saunders",
              href: "https://bookshop.org/p/books/a-swim-in-a-pond-in-the-rain-george-saunders/14360498",
              note: "Purchase. Choose any chapter that analyzes a Chekhov story in detail. Read the Chekhov story first, then Saunders's analysis. Attend specifically to how Saunders tracks the scene's entry and exit points, the complication, and the turn — and notice how he identifies the moment when the scene becomes inevitable. Saunders's method of scene analysis is the closest available model to the structural autopsy this week's exercise requires.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Your thesis opening from Year One, Week 36",
              author: "You",
              href: "",
              note: "Read your thesis opening as a structure, not as a draft. Apply the five-part architecture: where is the entry point — and is it late enough? Where is the ground situation established? Where is the complication? Where is the turn — is it present, and is it irreversible? Where is the exit — and is it early enough? This diagnostic reading is the preparation for the structural autopsy exercise.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Thesis Session 1 & The Structural Autopsy",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Structural Autopsy (300 words): Apply the five-part scene architecture to your thesis opening from Year One, Week 36. Perform the autopsy in writing: (1) Where does the scene enter — is this the latest possible entry point, or could it begin later? (2) What is the ground situation, and is it established through action/exchange rather than description? (3) Where is the complication — the specific thing that makes the existing tension untenable? (4) Where is the turn — the irreversible moment? Is it present? (5) Where does the scene exit — does it exit before the reader has fully absorbed the turn, or does it linger? Write the autopsy as a diagnostic, naming each component and assessing whether it is working.",
            "Part Two — Revision (match or exceed original word count): Rewrite the thesis opening incorporating the autopsy's findings. Enter later if the autopsy reveals early entry. Sharpen the complication if it is vague. Locate and intensify the turn if it is present but underwritten. Exit earlier if the scene is explaining itself. The revision should produce a scene that operates on at least two simultaneous frequencies — that is doing at least two of the following at once: advancing plot, revealing character, developing theme, establishing voice.",
            "Part Three — Thesis Session 1 (1,500–2,000 words): Write the next section of the thesis manuscript — the section that follows the revised opening. Before writing, set a specific objective: a scene to complete, a structural problem to work through, a section to draft to its natural end. After writing, note in 100 words what you accomplished, what surprised you, and what the next session's objective will be. This note is the first entry in your session log.",
          ],
          target: "300 words (autopsy) + revised opening + 1,500–2,000 words (thesis session) = 2,000–3,000 words total",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 37 — The Developmental Editor",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste your revised thesis opening — the rewritten version after the structural autopsy. The AI's task is to assess the scene's architecture with precision: not to evaluate the writing's quality, but to identify the structural components and diagnose where they are working and where they need development.",
          prompt:
            "Analyze the dramatic structure of this scene with precision. Identify: (1) the entry point — where the scene begins and whether this is the latest possible entry; (2) the ground situation — what is established as the scene's starting state, and how; (3) the complication — the specific event or revelation that disrupts the ground situation; (4) the turn — the moment after which the scene's situation is permanently changed, and whether it is present and irreversible; (5) the exit — where the scene ends and whether it ends before the reader has fully absorbed the turn. Then identify the scene's operating frequencies: how many things is this scene doing simultaneously? Does it carry plot, character revelation, thematic weight, and tonal meaning? Where does it drop to only one frequency? Where does it achieve genuine simultaneity?",
          questions: [
            "Does the AI locate the turn where you placed it in revision? If it identifies a different moment as the turn — or says no clear turn is present — what does that tell you about whether the revision achieved what the autopsy called for?",
            "What does the AI identify as the scene's operating frequencies? If it identifies fewer than two, the revision has not yet achieved simultaneity. What would need to change to add a second frequency to the weakest part of the scene?",
            "Does the AI assess the entry point as late enough? If it identifies setup or preamble before the real beginning, where does the real beginning actually occur — and what is lost and what is gained by entering there?",
            "The session log entry written after Thesis Session 1: what was the specific objective, what was accomplished, and what surprised you? The surprise is the most important data — it tells you where the material has intentions of its own that your plan did not anticipate.",
          ],
          note: "The developmental editor prompt is the Year Two AI workshop's primary mode — shifting from the Year One mode of generating and diagnosing to the Year Two mode of structural assessment at the scene level. The AI cannot read your thesis in full context, but it can assess the scene's five-part architecture from the excerpt alone, because scene architecture is a local property: the entry, complication, turn, and exit are all present (or absent) within the scene itself. Use the developmental editor assessment as a second structural autopsy — a check on whether the revision achieved what you aimed for.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Session Log",
      blocks: [
        {
          type: "tip",
          icon: "📓",
          name: "Map the Work as You Make It",
          paragraphs: [
            "Begin keeping a session log for all thesis work. For every writing session, record: the date, the word count produced, the specific accomplishment (not 'wrote some of Chapter 2' but 'completed the scene where X happens, through the turn'), what remains unresolved at the session's end, and the next session's specific objective. The session log is not a diary and not a journal — it is a technical document, the writer's equivalent of the architect's project log.",
            "Over weeks and months, the session log performs two functions. First, accountability: the specific objective set at the end of each session creates a commitment that the next session must honor, and the pattern of what you accomplish vs. what you set out to accomplish reveals your actual working pace rather than your aspirational one. Second, it provides a map of the manuscript's development — a record of when each section was written, what problems were encountered and how they were addressed, what surprised you and what didn't. When the revision process begins in Year Three, this map will be invaluable: it tells you which sections were written quickly and fluently (often the ones the draft got right) and which were labored over and revised multiple times during drafting (often the ones that still need work).",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Inside the Work",
      blocks: [
        {
          type: "journal",
          title: "Inside the Work",
          question:
            "What is your relationship to the work when you are inside it — when you are writing the thesis rather than thinking about writing it? What does it feel like to be in the work? Not what it feels like to sit down and face the blank page, not what it feels like to finish a session, but the quality of experience in the middle: the hour when the work is going, when the scene has found its direction, when the writing is ahead of the thinking. What is that experience like for you? And: is there a difference between the experience of writing a scene that is working and a scene that is not — a physical or attentional difference you can describe? Knowing what it feels like when the work is going well is the best available guide for recognizing when it is not, and for returning to the conditions that produced the good sessions.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Year Two's journal prompts are increasingly focused on process and professional identity — on the writer's relationship to the work rather than on the work's content. This is because the thesis is now the primary writing, and the journal's function shifts accordingly: from generative (prompting content that might become material) to reflective (building the metacognitive awareness of your own practice that sustained long-form work requires). The writer who does not know how they work cannot recognize when something has gone wrong, cannot adjust, cannot find their way back. The journal is the map of how you work. Keep it.",
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
            "By the end of this week you should have: completed the 300-word structural autopsy of your thesis opening and revised the opening with the autopsy's findings incorporated; written 1,500–2,000 words of thesis manuscript in Session 1 and recorded the first entry in your session log; read Burroway's scene construction chapter as a rereading with the five-part vocabulary; read a Saunders-on-Chekhov analysis chapter for the model of scene analysis; completed the AI developmental editor assessment and compared it to your own autopsy; written three participial phrase revisions of consecutive paragraphs from your draft; and identified the scene's operating frequencies before and after revision.",
          ],
        },
        {
          type: "card",
          title: "Year Two: What to Expect",
          paragraphs: [
            "Year Two operates at a higher level of expectation than Year One. The generative, exploratory mode of the first year gives way to analytical precision, deliberate revision, and the emerging identity of a writer with a distinct project. Weekly thesis targets increase: you should be producing 1,500–3,000 words of thesis material per week, alongside the craft study and grammar exercises. By Year Two, Week 12, you will have written and submitted your full thesis proposal. By Year Two, Week 18, you will have a completed first section of the thesis manuscript. The craft curriculum covers Tier 3 advanced topics across the fall semester: scene construction, subtext, advanced structure, time manipulation, opening strategies, endings, theme, and revision. The grammar curriculum covers Phases 3–5 (phrases, rhetorical figures, and punctuation as craft).",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 2",
          paragraphs: [
            "Week 2 is Subtext and Implication — The Iceberg Theory. Hemingway's formulation holds that a story's power derives from what is not shown: the dignity of movement of an iceberg is due to only one-eighth of it being above water. This is a theory not of omission but of earned omission — the reader feels the seven-eighths only because the one-eighth is absolutely precise and fully realized. Week 2 studies how implication works through all three channels: dialogue (what isn't said), action (what the character does instead of what they feel), and image (the external correlative of the internal state).",
          ],
        },
      ],
    },
  ],
};
