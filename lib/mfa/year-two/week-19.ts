import type { WeekData } from "@/lib/mfa/types";

export const week19Data: WeekData = {
  weekNumber: 19,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Thesis Drafting",
  title: "Entering the Thesis — Sustained Work on a Single Project",
  emphasizedWord: "Sustained Work",
  deck: "Spring semester is organized differently from every other semester in the program. The focus shifts decisively toward sustained work on a single long-form project — the thesis manuscript. Craft study continues, but it is increasingly in service of the specific challenges the thesis project presents. Weekly writing targets increase: 1,500–3,000 words of thesis-related material per week.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "55 of 108" },
    { label: "Craft Focus", value: "Thesis Production" },
    { label: "Grammar", value: "Phase 5 · Em Dash / Parentheses / Commas" },
    { label: "Semester Opens", value: "Spring Semester Begins" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "How Spring Semester Is Different — and Why",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Every prior semester in this program has been structured around the craft concept of the week: a new topic introduced, a new exercise written, a new grammar figure practiced, the thesis session appended to the primary work. That structure was right for its purpose — it built the craft foundation that the thesis requires, introduced the full range of tools available to serious literary prose, and produced the eighteen thesis sessions that now constitute the fall draft. Spring semester inverts the hierarchy. The thesis is no longer appended to the craft work. The craft work is in service of the thesis.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This inversion has practical consequences. Weekly writing targets increase to 1,500–3,000 words of thesis material per week — not total writing, but thesis pages. The craft concepts introduced in spring are chosen specifically because they address the advanced problems a writer encounters when sustaining a long-form project: experimental and hybrid forms (Week 20), the lyric essay (Week 21), minimalism and maximalism (Week 25), master sentence analysis (Week 26), advanced characterization (Week 27), voice synthesis (Week 28). Each of these is chosen not because it belongs at this point in a general craft curriculum but because it is the problem most commonly encountered at book-length, in the middle of a sustained project, when the writer has been working long enough to know what the work is and not long enough to know how to finish it.",
          ],
        },
        {
          type: "pullquote",
          quote: "The session log is not a productivity tool — it is a map of the work's development. Over months, it becomes the most accurate available account of how the thesis was made, what problems were solved and when, and what the work refused to do until it was ready.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "The Spring Semester's Governing Structure — Three Principles",
          paragraphs: [
            "The session objective: every thesis session begins with a specific, written objective — not 'write the next section' but 'complete the scene in which [specific event] happens, resolving [specific structural problem] by [specific means], so that [specific consequence for the next section] is in place.' The objective does not constrain the session — it orients it. The session may discover that the objective was wrong, that the scene requires something different than planned, that the structural problem is more complex than the morning's plan accounted for. These discoveries are the point. The objective is not the destination; it is the question the session is trying to answer. Write it in the session log before the first word of the draft.",
            "The session log: begin a session log for all spring thesis work — a running document maintained across every session of the spring semester. Each entry records: date, session number, word count produced, the session's specific objective (written before writing), what was accomplished (written after), what surprised the writer during the session, what remained unresolved, and the next session's objective. The session log is not a productivity tracker — it is a map of the work's development. Over the spring semester it becomes an invaluable document during revision: the map of where each section came from, what problems it was trying to solve, what the writer knew and didn't know when it was written. Read the session log periodically — at the midpoint of the semester and at the end — not to evaluate progress but to understand the work's development as a process rather than a product.",
            "The higher weekly target: 1,500–3,000 words of thesis material per week is the spring production standard. This is not a floor (produce at least this much) but a range (most productive weeks should land somewhere in this range). Some weeks will produce more — a session that breaks through a structural problem can produce 2,500 words in a single sitting; a week with two strong sessions can produce 4,000. Some weeks will produce less — a week dominated by craft reading, by the grammar exercise, by a structural diagnosis that requires more thinking than writing before the draft can proceed. The range is a guide, not a contract. The contract is with the work: the spring semester ends with a substantially complete draft of the thesis, and every week's production should be assessed against that goal rather than against the weekly number.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The spring semester's craft curriculum begins at the level of form: experimental and hybrid structures, the lyric essay's specific architecture, the formal relationship between minimalism and maximalism as governing syntactic philosophies. These are the concepts most immediately useful to a writer who is now inside a sustained project and encountering the problems that sustained work produces — the sagging middle, the scene that resists being written, the structural problem that reveals itself only at book length, the moment when the writer doesn't know what the work is anymore and must rediscover it from inside the draft rather than from outside it. The craft curriculum this semester is not an introduction to new territory. It is a set of tools for the specific problems of the specific work in progress.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "What Each Track Needs Most in Spring",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The fiction writer entering spring semester with eighteen sessions of draft material faces the specific problem of the long-form middle: how to sustain escalation, how to maintain the protagonist's interiority as a source of action rather than merely as a register of events, how to keep the governing question active across dozens of scenes without it becoming a thesis statement that the plot is mechanically illustrating. The spring semester's session objective practice is especially important for fiction: the novelist who begins a session without a specific, structural objective for that session — a scene to complete, a relationship to advance, a revelation to stage — is more likely to produce competent but inert prose than the novelist who knows exactly what the session must accomplish architecturally. The spring production target for fiction is ambitious by design: the novel is not written by writing whenever inspiration arrives. It is written by writing on schedule, to objective, across months.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "The screenwriter or playwright entering spring semester with a pilot draft or play draft in progress faces the spring semester's specific challenge in a concentrated form: the second act. Act Two — the long middle of the script — is where most screenplays lose their momentum, because the dramatic problem established in Act One must be sustained and complicated across forty to fifty pages without resolution. The session objective practice is the screenwriter's most important structural discipline: every session should advance the protagonist toward the midpoint turn (the moment at the script's center that reverses the protagonist's direction) or away from it, and the writer should know before the session begins which way the scene is pointing. The production target of 1,500–3,000 words per week corresponds to approximately 10–20 pages of screenplay per week — achievable in a disciplined spring semester.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The memoirist entering spring semester faces the specific challenge of the book-length CNF project: the management of the narrator's distance. In an essay the narrator's distance is established and largely maintained; in a book-length memoir it must vary — close in some sections, retrospective in others, the experiencing self and the narrating self moving in and out of relationship as the material requires. The session objective for the memoirist should specify not only what scene or section will be drafted but at what distance and in what voice: is this a section where the experiencing self is close to the page, or a section where the narrating self is in retrospective control? The answer should be determined by what the material requires, not by the writer's default distance. The session log is especially important for the memoirist: it records the writer's relationship to the material session by session, and that record is often as interesting as the draft itself.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 5 · Topic 2 — The Em Dash, Parentheses & Commas: Three Registers of Inclusion",
      blocks: [
        {
          type: "grammar",
          title: "Phase 5 · Topic 52 of 60 — Three Ways to Embed — The Rhetorical Difference Between —, (), and ,",
          intro: [
            "Phase 5 of the grammar curriculum addresses punctuation as craft. The first topic — the semicolon — was introduced in Week 17. This week introduces the three marks that govern embedded information: the comma, the parenthesis, and the em dash. These three marks can all perform the same surface function — setting off a phrase or clause within a sentence — but they perform it with radically different rhetorical effects. The choice between them is never stylistically neutral: it determines the embedded material's relationship to the main clause, its emphasis, its tone, and its claim on the reader's attention.",
            "The standard grammar instruction presents these three marks as interchangeable tools for the same job. The craft instruction presents them as three different jobs. Using a comma where an em dash is called for produces a sentence that is less emphatic than its content requires. Using an em dash where parentheses are called for produces a sentence that is more aggressive than its content warrants. Using parentheses where a comma is called for produces a sentence that is more self-deprecating than the material deserves. Each mark makes a different claim about the embedded material's relationship to what surrounds it.",
          ],
          rule: "The comma includes neutrally: the embedded material is part of the sentence's flow, equally present with the main clause, neither foregrounded nor subordinated. 'She arrived, as usual, without calling ahead.' The phrase 'as usual' is present but not emphasized — it is information, not commentary. The parenthesis whispers: the embedded material is secondary, present but slightly to the side, a note the writer is making while the main action continues. 'She arrived (as usual) without calling ahead.' The phrase 'as usual' now belongs to a different register — it is the writer confiding in the reader over the character's head, a slight aside that implies shared knowledge or ironic distance. The em dash interrupts with emphasis: the embedded material is foregrounded, given more weight than the main clause's surrounding words, slightly aggressive in its claim on the reader's attention. 'She arrived — as usual — without calling ahead.' The phrase 'as usual' is now the most important element in the sentence. The dashes create a pause before and after it that makes the reader stop and register the pattern the phrase names.",
          examples: [
            {
              label: "Three registers — same sentence, three different claims",
              text: "Comma: 'The result, as everyone had predicted, was a disaster.' [Neutral inclusion — the prediction is noted but not emphasized; the disaster is the sentence's main claim.] Parenthesis: 'The result (as everyone had predicted) was a disaster.' [The aside register — the writer is confiding to the reader that the prediction was common knowledge, perhaps implying irony or weariness about predictability.] Em dash: 'The result — as everyone had predicted — was a disaster.' [The foregrounded register — the prediction is the sentence's most charged element; the dashes create the pause in which the irony of having been right lands with full weight.]",
            },
            {
              label: "The em dash's three distinct functions — interruption, amplification, pivot",
              text: "Interruption: 'She would have left — she had already packed — but the call came.' [The dashes perform the interruption the sentence is describing; form and content are the same movement.] Amplification: 'The room was empty — perfectly, unbearably empty.' [The second em dash opens into an intensification; the main clause is amplified, not interrupted.] Pivot: 'He was her father — he was also, by any accounting, a stranger.' [The dash creates a hard turn; the second clause does not continue the first but contradicts or complicates it. This is the em dash's most powerful use: the pivot that reframes everything before it.]",
            },
            {
              label: "Parentheses' specific register — aside, digression, subordination",
              text: "The aside: 'She had been waiting for this (though she would never have admitted it) for years.' [The parenthesis performs the emotional concealment the sentence is describing — the content is present but in a register that mimics the character's own suppression of it.] The digression: 'The house (which had been in the family for four generations, which had survived two wars and a flood) was sold for less than its contents.' [The parenthetical digression gives the house's history but subordinates it — the sale is the sentence's main claim, and the history exists to weight that claim without displacing it.] Subordination: 'He wrote to her (once, and only once) and received no reply.' [The parenthetical limits without emphasizing — the 'once, and only once' is important but not the sentence's primary claim.]",
            },
            {
              label: "Common errors — and the correction",
              text: "Misregistered dash: 'She walked into the room — and sat down.' [The dash interrupts the most ordinary sequence of events; the interruption is unearned because there is nothing to interrupt. Better: 'She walked into the room. She sat down.' Or simply: 'She walked into the room and sat down.'] Misregistered parenthesis: 'The decision (which destroyed her career) was made in thirty seconds.' [The parenthesis subordinates what is the sentence's most significant fact — the destruction of a career — below the trivial detail of the decision's speed. Better: em dash or rewritten: 'The decision that destroyed her career was made in thirty seconds.'] Em dash overuse: three em dashes in two consecutive sentences produces a staccato effect that signals the writer's preference for the mark rather than the material's need for it. Use the em dash when the material calls for interruption, amplification, or pivot — not as a default substitute for all other punctuation.",
            },
          ],
          outro: [
            "The technical note on em dash formatting: the em dash is written without spaces on either side — like this, not like this - with hyphens and spaces. In many word processors it is produced by typing two hyphens (--) between words without spaces; most style guides (Chicago, MLA, Dreyer) agree on no spaces. The en dash (–) is used for ranges (pages 45–67) and compound modifiers (a post–World War II novel) — it is narrower than the em dash and not used for interruption or amplification.",
            "Phase 5 continues over the spring semester with: the colon (Week 22), comma splices as deliberate style choice (Week 23), sentence fragments as style (Week 24), the ellipsis (Week 29), and the period as rhythm maker (Week 30). Each punctuation mark will be introduced in the context of the spring semester's craft topics, with the same emphasis on rhetorical effect rather than grammatical rule.",
          ],
          exercise:
            "Write the same embedded sentence three times — once with commas, once with parentheses, once with em dashes — and write one sentence of analysis after each identifying the specific rhetorical claim the mark is making. Choose a sentence from your thesis draft or your session objective for today's writing. Then audit one page of your thesis draft for all three marks: which are doing conscious rhetorical work, and which are on autopilot? Make one specific change — a comma replaced with an em dash, or an em dash replaced with parentheses — that better serves the material's emotional register.",
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
              title: "Dreyer's English, Chapters 1–4",
              author: "Benjamin Dreyer",
              href: "https://bookshop.org/p/books/dreyer-s-english-an-utterly-correct-guide-to-clarity-and-style/10399742",
              note: "Purchase. The most stylistically attuned punctuation guide currently available — not a grammar handbook but a working editor's account of what punctuation does when it is doing its full job. Dreyer is opinionated, specific, and funny; his account of the em dash, the comma, the semicolon, and the period is the best available preparation for Phase 5's remaining punctuation figures. Chapters 1–4 cover the foundational punctuation marks; read with attention to the examples rather than the rules — the examples are where the craft is.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "A text from the reading list formally closest to your thesis",
              author: "Your choice",
              href: "",
              note: "Required — return reading. Choose a text already on the program's reading list that is formally closest to your thesis project — the text whose structure, voice, or relationship between form and material most resembles what you are trying to do. Reread it with fresh eyes, now that you have eighteen sessions of your own draft to compare it to. What is it doing at book length that you are not yet doing? What has the fall draft learned from it already? What remains to be learned? Read with the session log open: the specific observations made during this return reading belong in the log as a record of what the model text is teaching now, as opposed to what it taught when you first read it.",
              badge: "Required",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "Spring Thesis Session 1 — The Work Itself",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Spring Thesis Session 1 (1,500–2,000 words minimum): This is not an exercise. It is the work itself — the first session of the spring semester, the first entry in the spring session log, the first movement toward the completed thesis.",
            "Before writing: open the session log. Write the date, the session number (Spring Session 1), and the session objective — specific enough that it tells you exactly what the draft must accomplish in this session. The objective comes from the spring plan written in Week 18: the first task was identified there. If the spring plan named a specific scene, section, or structural problem as the semester's opening task, that is the session's objective. If the spring plan was not specific enough to produce a single first task, spend ten minutes now identifying one — the most urgent unanswered question in the draft, the scene that must exist before anything else can proceed, the structural problem that all other problems depend on.",
            "During writing: write toward the objective. When the session discovers that the objective was wrong — that the scene requires something different, that the structural problem is more complex, that the draft is moving in a direction the objective didn't anticipate — note the discovery in the margin and continue. The discovery is not a failure of the objective; it is the draft doing its work. The session log will record both the original objective and the discovery, and that record will be one of the session's most valuable products.",
            "After writing: return to the session log. Record the word count produced, what was accomplished, what surprised you, what remained unresolved, and the next session's objective — specific enough that it tells you exactly what Spring Session 2 must accomplish. The session log's entry for Session 1 is complete when all six elements are recorded: date, session number, pre-session objective, word count, post-session account (accomplishment / surprise / unresolved), next session objective.",
          ],
          target: "1,500–2,000 words (thesis) + complete session log entry",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 52 — Pacing and Structural Diagnosis",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Authors A.I. (Marlowe) or Claude",
          intro:
            "If you have 5,000 or more words of thesis draft from the fall semester, run the full draft through Marlowe 3.0 (Authors A.I.) for pacing and structural analysis — its scene-by-scene pacing visualization is the most useful automated structural tool currently available for prose manuscripts. If you are not yet at 5,000 words, or if you prefer not to use a third-party platform, use the Claude prompt below.",
          prompt:
            "Read this draft as a developmental editor at the beginning of a book project — someone whose job is to assess not whether the writing is good sentence by sentence but whether the architecture is sound. Map the draft's current pacing: where does it slow below what the material requires? Where does it rush past material that deserves more time? What is the current ratio of scene (dramatized, in-time action) to summary (reported, out-of-time narration), and is that ratio right for this material? Where is the emotional temperature highest in the current draft — and is that the place where it should be highest given the work's governing question? Identify one place in the draft where the pacing problem is most significant and describe specifically what is causing it: is it a structural problem (the wrong scene in the wrong position), a ratio problem (too much summary where scene is needed, or vice versa), or an execution problem (the scene is in the right place but hasn't been written at the right depth)?",
          questions: [
            "The AI's pacing map: where does it identify the draft slowing below what the material requires? Is that location a place you already suspected — a section that felt uncertain while you were writing it — or a surprise? When it is a surprise, the AI is seeing something the writer is too close to see. Add a note in the session log: this section needs a structural diagnosis before Spring Session 2.",
            "The scene/summary ratio: the AI's assessment of the current balance between dramatized scenes and reported summary. Is the ratio right for your genre — fiction and memoir typically benefit from a higher proportion of scene; some hybrid forms are deliberately summary-heavy; screenplays are almost entirely scene? If the ratio is wrong, which direction does it need to move — more scene (more dramatized, immediate, in-time action) or more summary (more distance, retrospection, the narrating self's understanding)?",
            "The emotional temperature: the AI identifies where the emotional temperature is currently highest in the draft. Is that the right location — does the draft's most emotionally intense material correspond to the structurally significant moments (the midpoint turn, the climax, the governing question's most acute engagement)? If not, the draft's emotional architecture needs attention: the intensity is misallocated. The spring plan should include a session specifically aimed at relocating the emotional intensity to where the work's structure requires it.",
            "Apply the AI's single most significant pacing finding to the spring plan: add one specific session to the plan — not at the end of the semester but at the point the AI's finding suggests it is most needed — that is devoted to addressing the identified problem. Name it specifically in the session log: 'Session [n]: address [specific pacing problem] in [specific section] by [specific means].'",
          ],
          note: "Marlowe 3.0 (Authors A.I., authorsai.com) is a manuscript analysis tool that produces scene-by-scene pacing visualizations, emotional arc charts, and comparative analysis against published novels in the same genre. It is most useful with complete or near-complete drafts, but even partial drafts of 5,000+ words produce usable analysis. The pacing visualization is its most distinctive and most useful feature for the spring semester's production work. It is not a replacement for human editorial feedback — it is a structural diagnostic tool, like an x-ray of the manuscript's current architecture. Use it as one input among many, not as an authority.",
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
          icon: "📋",
          name: "The Session Log Is Not a Productivity Tool — It Is a Map of the Work's Development",
          paragraphs: [
            "Begin keeping a session log for all spring thesis work, and maintain it across every session from Spring Session 1 to the final session of Week 36. The log is not a productivity tracker — its purpose is not to record that writing is happening. Its purpose is to create a written record of the work's development that becomes invaluable during revision. Every significant decision made during drafting — to follow the draft where it leads rather than where the session objective pointed, to drop a planned scene and write around it, to discover that a character refuses to do what the plot requires — should be recorded in the session log, because at the time these decisions seem obvious and during revision they are invisible. The revision is made by a writer who has already made all those decisions and can no longer remember that they were decisions. The session log makes them visible again.",
            "The log's six elements — date, session number, pre-session objective, word count, post-session account, next session objective — should be filled in completely for every session. The pre-session objective is the most important element: it is the question the session is trying to answer, written before the writer knows the answer. The post-session account is the second most important: it records what happened when the objective met the draft. The distance between them — between what was planned and what occurred — is the most accurate available record of how the thesis was actually made.",
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
          title: "What It Feels Like to Be Inside the Work",
          question:
            "What is your relationship to the work when you are inside it — when you are writing the thesis rather than thinking about writing it or planning writing it or assessing writing it? What does it feel like, specifically, to be in the work: what happens to time, what happens to the body, what happens to the internal voice that is normally narrating your experience? Is the experience different in different sessions — different in sessions that are going well versus sessions that are difficult, different in scenes that feel important versus scenes that feel like connective tissue? And: is there a time of day, a physical condition, a ritual of preparation that reliably produces access to that state — that makes entering the work more likely? If so, describe it specifically enough that you could protect it, reproduce it, rely on it across the spring semester. Write for twenty minutes. The relationship to the work when inside it is the most important practical information about your writing practice — more important than any craft concept, because no craft concept is useful if the writer cannot enter the state in which the craft operates.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The spring semester's journal prompts will be more diagnostic than the fall semester's — more directly concerned with the conditions of the work itself, with the practical and psychological life of sustaining a long-form project across fourteen weeks. The fall prompts were exploratory; the spring prompts are architectural. They are tools for understanding the relationship between the writer and the specific work in progress, which is the relationship that spring semester is organized to serve.",
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
            "By the end of this week you should have: written Spring Session 1 (1,500–2,000 words minimum) with the full session log entry completed; identified the spring semester's session objective structure and committed to the six-element log for every session; read Dreyer's English Chapters 1–4; completed the return reading of the text formally closest to your thesis with observations recorded in the session log; completed the pacing and structural diagnosis (Marlowe or Claude) and added one specific session to the spring plan to address the most significant pacing finding; written the three-register punctuation exercise (comma / parentheses / em dash versions of the same sentence) and audited one thesis draft page for all three marks; completed the spring semester's opening journal entry on the relationship to the work when inside it.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 20",
          paragraphs: [
            "Week 20 is Experimental and Hybrid Forms — When Conventional Structure Fails the Material. The first spring craft topic addresses the formal problem most commonly encountered at book length: what to do when the material resists the structural form proposed in the thesis proposal, when the conventional story shape is too small or too tidy for what the work is trying to contain. Genre Translation (AI Exercise 22) appears here — using the AI to translate a passage from your thesis into two other forms as a diagnostic for what the passage most essentially is and what form would serve it best.",
          ],
        },
      ],
    },
  ],
};
