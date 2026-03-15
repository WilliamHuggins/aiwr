import type { WeekData } from "@/lib/mfa/types";

export const week24Data: WeekData = {
  weekNumber: 24,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Plot & Structure I — Conflict, Crisis & Resolution",
  emphasizedWord: "Conflict, Crisis & Resolution",
  deck: "Story is the art of conflict. Without conflict there is no story — only situation. This week examines conflict as the engine of narrative, crisis as the moment of maximum pressure, and resolution as the place where the story's question doesn't just end but changes.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Conflict & Crisis" },
    { label: "Grammar", value: "The Short Sentence as Power Tool" },
    { label: "Exercise", value: "800 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Engine Beneath Everything",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/1v4A6k0o3j8GZU9ngsswkYTcM0rujAWca/preview" },
        {
          type: "paragraph",
          content: [
            "Every technique this year has been in service of something: characterization gives the reader a consciousness to inhabit; dialogue gives that consciousness a social world; setting gives it a physical ground; psychic distance gives the narrator a variable relationship to it; POV determines who gets to narrate and what they can know. But none of these techniques generates forward motion on its own. The engine of narrative — the force that makes a reader turn the page rather than setting the book down — is conflict. ",
            { text: "Without conflict, there is no story. There is only situation.", emphasized: true },
          ],
        },
        {
          type: "paragraph",
          content: [
            "Conflict is not argument. It is not violence. It is not the obvious clash of two opposing forces. At its most fundamental, conflict is simply the gap between what a character wants and what stands in the way of their getting it. That gap can be external — another character, a social structure, a physical obstacle, time itself. It can be internal — the character's own psychology, their self-deception, the wound that prevents them from taking the action the situation requires. It can be systemic — the character against a world whose structures make their desire impossible. In the most resonant literary fiction, all three levels operate simultaneously: the character's external obstacle is a projection or a consequence of their internal conflict, and both are expressions of the systemic condition the novel is interrogating.",
          ],
        },
        {
          type: "pullquote",
          quote: "The traditional dramatic arc — from complication through crisis to resolution — is not a formula. It is a description of how the human brain processes experience: we encounter an obstacle, the obstacle intensifies, something breaks, and the breaking changes us.",
          cite: "— craft principle, after Aristotle",
        },
        {
          type: "paragraph",
          content: [
            "Crisis is the moment of maximum pressure — the point at which the conflict can no longer be avoided, deferred, or managed, and the character must act. Crisis is not the same as climax in the cinematic sense: it need not be loud or dramatic. In Flannery O'Connor's 'A Good Man Is Hard to Find,' the crisis is a woman's sudden, unwanted moment of genuine human recognition — the grace that arrives in the worst possible instant. In Chekhov, crisis is often the moment when a character cannot maintain their usual self-deception any longer, however briefly. The crisis reveals character because it is the moment at which the character's full self — not the self they present to the world — is forced to respond.",
          ],
        },
        {
          type: "card",
          title: "Three Levels of Conflict — and Why All Three Must Be Present",
          paragraphs: [
            "External conflict: the character against something outside themselves — another character, an institution, a deadline, a physical situation. External conflict provides narrative momentum and keeps the reader oriented in the story's stakes. But external conflict alone produces plot without meaning: the character wins or loses, and neither outcome changes anything.",
            "Internal conflict: the character against themselves — their fear, their wound, their self-deception, the gap between who they are and who they need to be. Internal conflict is where the story's emotional weight lives. The external obstacle is only interesting because of what it forces the internal conflict to do: the character cannot escape their psychology through the scene's events; they must face it.",
            "Systemic conflict: the character against the structures that shape their world — social, economic, historical, biological. Systemic conflict is where literary fiction makes its arguments. The individual character's struggle becomes legible as a statement about the world when the systemic conflict is visible. Without it, the story is only personal. With it, the personal becomes representative.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Resolution is the most misunderstood of the three terms. It does not mean solution. It does not mean happiness, or justice, or the conflict's elimination. Resolution in literary fiction means a change in the nature of the story's question — the question that has been driving the narrative does not simply get answered; it gets transformed. The character who has been asking 'will I get what I want?' discovers that was the wrong question. The story's resolution is not the answer to the conflict's question but the discovery of a truer question beneath it. This is what Aristotle meant by catharsis: not relief, but recognition — the emotional and intellectual arrival at something that was always true but could only be understood through the experience of the conflict.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Conflict Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "In literary fiction, the most powerful conflicts are those in which the external and internal levels are structurally connected: the external obstacle is a manifestation of the internal wound, and the internal wound is a product of the systemic condition. The character cannot resolve the external conflict without confronting the internal one, and the story's argument about the world is legible in the systemic level that shapes both. The crisis that reveals character does so because it forces the character to act from their deepest, least managed self — the self that exists beneath the strategies and self-presentations the character has been using to avoid the internal conflict's full weight.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Conflict in screenwriting is always external and visible — the camera cannot show internal states directly, only their behavioral manifestations. This is a creative constraint that produces the screenplay's specific discipline: every internal conflict must be externalized as action, dialogue, or physical behavior. The three-act structure (setup, confrontation, resolution) maps directly onto complication-crisis-resolution, and the midpoint — the act two set-piece that raises the stakes and redirects the conflict — is the screenwriter's version of the escalation beat. For playwrights, conflict is even more compressed: the stage's unity of time and place means conflict must be immediate, sustained, and visible from moment one.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, conflict is the gap between the person the memoirist was at the time of the events and the person the memoirist is now, looking back. The external conflict of the events being narrated and the internal conflict of the narrator's psychology at that time are both present — but so is the systemic conflict between the memoirist's individual experience and the larger social or historical structures that shaped it. Resolution in memoir is not the resolution of the past conflict — that happened or didn't happen, and it is fixed. It is the resolution of the narrator's relationship to those events: what the memoirist has come to understand, or accepted not understanding, or learned to hold differently.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Short Sentence as Power Tool",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 24 of 60 — The Short Sentence as Power Tool",
          intro: [
            "Last week's topic established sentence variety as a rhythmic discipline — the need to mix lengths intentionally so that no single length dominates and flattens the prose. This week focuses on the specific power available at one end of the length spectrum: the very short sentence, following a longer build, as the strongest single impact instrument in prose rhythm.",
            "The mechanism is contrast. A short sentence landing after a long one arrives with disproportionate force — the reader has been moving through accumulation, subordination, complexity, and then the sentence simply ends. The brevity itself becomes expressive. Meaning is concentrated rather than distributed. The short sentence says: this is the thing. Everything before it was approach.",
          ],
          rule: "The short sentence (seven words or fewer; often three or four; sometimes a fragment) derives its power entirely from what precedes it. It must be earned by the build: a series of short sentences produces staccato, not impact. A short sentence following a long cumulative or periodic sentence lands with the force of the long sentence's entire weight behind it. The short sentence should carry the scene's emotional or argumentative center — the thing everything else was moving toward.",
          examples: [
            {
              label: "The build-and-release rhythm",
              text: "She had spent twenty years building a life she believed in, a life that had cost her more than she'd known when she began, that had required the sacrifice of things she'd only understood as sacrifices much later, looking back. She burned it down in a single afternoon. It felt like mercy.",
            },
            {
              label: "The single-word landing",
              text: "He had imagined this conversation a hundred times — in the car, in the shower, lying awake at three in the morning when the rest of the house was still — had rehearsed every version, anticipated every objection, prepared every answer. He said nothing.",
            },
            {
              label: "The fragment as completion",
              text: "Everything she had told herself about the situation — that it was temporary, that it would improve, that people endured worse and called it a life — all of it, at once, in the specific quality of his silence. Gone.",
            },
            {
              label: "What goes wrong without the build",
              text: "'She left. He watched. The door closed. Silence.' — four short sentences in sequence produce a staccato effect, not an impact. No sentence earns force from the others. To land, the short sentence needs the long sentence as its runway.",
            },
          ],
          outro: [
            "The short sentence is also the writer's most useful tool for managing pacing at the level of paragraph rhythm. A scene that needs to accelerate benefits from progressively shorter sentences as it approaches its crisis. A scene that needs to land with stillness — to stop the reader — benefits from a single short sentence at the moment of maximum weight.",
            "Note the connection to conflict: the crisis, structurally, is often where the short sentence belongs. The long sentences accumulate the pressure; the crisis lands in a sentence of three words. That concentration is not coincidence — it is the formal enactment of the crisis's function: the point at which everything that has been building is compressed into a single, unavoidable moment.",
          ],
          exercise:
            "Write a paragraph consisting of exactly two long sentences (twenty words or more each) followed by one sentence of seven words or fewer. The short sentence must carry the emotional weight of everything that came before it — not summarize it, not explain it, but land it. Write three versions of this paragraph on three different subjects or moments from your current writing. Then write a fourth version in which the short sentence is a one-word fragment. Read all four aloud and note where the landing is most precise.",
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
              title: "Writing Fiction: A Guide to Narrative Craft",
              author: "Janet Burroway",
              href: "https://bookshop.org/p/books/writing-fiction-a-guide-to-narrative-craft-janet-burroway/7440875",
              note: "Read the structure and conflict chapters. Burroway's treatment of conflict is the most systematic available in any craft textbook — she distinguishes the levels clearly, shows how they interact, and provides specific examples from contemporary fiction of each level operating in isolation and in combination. Read with your thesis project in hand: what are the three levels of conflict in your project? Which level is currently most developed in the writing you have done? Which is underdeveloped?",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Poetics, sections on plot and catharsis",
              author: "Aristotle",
              href: "https://www.gutenberg.org/ebooks/1974",
              note: "Free on Project Gutenberg (multiple translations — the Butcher translation is standard, the Halliwell is more recent and more readable). Read specifically the sections on plot (mythos) and catharsis. Aristotle's account of catharsis — pity, fear, and the purging of those emotions through the experience of the narrative — is the oldest available theory of why conflict and resolution matter to an audience. His concept of the 'probable and necessary' sequence of events is the basis for all subsequent theories of narrative causation. Read with the question: what makes a sequence of events feel inevitable in retrospect while surprising in the moment?",
              badge: "Free Online",
            },
            {
              number: "03",
              title: '"A Good Man Is Hard to Find"',
              author: "Flannery O'Connor",
              href: "https://bookshop.org/p/books/a-good-man-is-hard-to-find-and-other-stories-flannery-oconnor/6697453",
              note: "Purchase. Read the title story as a study in crisis. O'Connor's crisis — the grandmother's moment of unwanted recognition and grace in the worst possible circumstances — is one of the most analyzed moments in American short fiction. But read it not for the crisis moment itself but for the structure that makes the crisis possible: how does O'Connor build the pressure across the entire story so that the crisis, when it arrives, is both shocking and inevitable? Where does the external conflict begin? Where does the internal conflict become visible? Where do the three levels converge?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Conflict Arc & the Opening Scene",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — Structural planning (200 words): Map the conflict structure of a published story you have read this semester. Work through four questions: Where does conflict initiate — what is the first moment the gap between want and obstacle becomes visible? Where does it escalate — what event or revelation increases the pressure? Where is the crisis — the moment of maximum pressure, the point at which the character must act from their deepest self? Where is the resolution — not the solution, but the change in the nature of the story's question? Write 50 words on each of the four moments.",
            "Part Two — Design your own arc (200 words total, 50 words each): Using the same four headings — initiation, escalation, crisis, resolution — design the conflict arc for a piece you are developing. This does not need to be your thesis project, but it should be a piece with genuine stakes. Be specific: name the external conflict, the internal conflict it activates, and the systemic conflict visible beneath both.",
            "Part Three — The opening scene (600 words): Write the opening scene of the piece you designed. The opening scene does not need to show the full conflict arc — but it must make the conflict's initiation present from the first paragraph. The reader should be able to feel, within the first 200 words, that something is at stake and that the story is already in motion.",
          ],
          target: "800 words total (200 structural planning + 600-word scene)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 24 — The Devil's Advocate",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "After completing the conflict arc design in Part Two of the exercise, describe the arc to the AI — the conflict's initiation, escalation, crisis, and your current plan for resolution. Use the prompt below. The AI will push against your instinct toward resolution in ways that may be uncomfortable and useful.",
          prompt:
            "I am going to describe the conflict arc I have designed for a piece of writing. I will give you the initiation, escalation, crisis, and my current plan for resolution. Your job is to play devil's advocate. Answer these questions: (1) What are three ways this conflict could resolve that would be more surprising, harder, or more honest than my current plan? Do not propose resolutions that feel tidy or that let the character off the hook. (2) Propose one version where the conflict does not resolve cleanly at all — where the story ends in productive irresolution, with the character's situation changed but the underlying conflict unresolved. What would that ending look like, and what would it mean? (3) Where in this arc does the conflict risk feeling generic — where could a more specific, less expected complication or escalation replace the one I've described? Here is my conflict arc: [describe your arc].",
          questions: [
            "Which of the three alternative resolutions the AI proposes is most uncomfortable for you — and is that discomfort a sign it's more honest than your current plan?",
            "Does the AI's productively irresolved ending feel like a failure of resolution or a different kind of arrival? What would your thesis project look like if it ended that way?",
            "Where does the AI identify the arc as generic? Does that identification feel accurate? What specific detail or complication would make that element distinctly yours?",
            "After reading the AI's challenge: does your current resolution still feel right — confirmed by pressure — or has the pressure revealed that you were taking the path of least resistance?",
          ],
          note: "The devil's advocate exercise is not asking you to abandon your current plan. It is asking you to hold it under pressure and see what it is made of. A resolution that survives the AI's challenge — that still feels true and necessary after three alternative proposals — is a resolution you have genuinely chosen. A resolution that crumbles under the first push is one you chose because it was easy, not because it was right.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Conflict Avoidance",
      blocks: [
        {
          type: "tip",
          icon: "⚡",
          name: "Did You Let It Get as Hard as It Needed to Get?",
          paragraphs: [
            "Many writers, especially in early drafts, unconsciously resolve conflict too easily or too quickly. They soften the crisis — the moment of maximum pressure arrives and the character is given an out they didn't earn. They let characters off the hook — the internal conflict that should be forced into the open is deflected by an external event. They find the conciliatory moment too soon — the scene that should hold its tension releases it before the tension has done its work.",
            "The diagnostic question for any draft: did you let this get as hard as it needed to get? Read your strongest draft from the semester with this question active. Find the scene's crisis. Was the character genuinely forced to respond from their deepest, least managed self? Or did something intervene — a phone call, a change of subject, a convenient external event — that allowed the internal conflict to stay unconfronted? The scene that avoids its own crisis is the scene that leaves the reader with the sense that something was withheld. Something was.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Unresolved Conflict",
      blocks: [
        {
          type: "journal",
          title: "The Unresolved Conflict",
          question:
            "What conflict in your own life have you been unable to resolve? Not a finished conflict whose outcome you dislike — an active, ongoing one, where the gap between what you want and what stands in the way of it remains open. Why has it been unresolvable? Is it the external obstacle that is immovable, or the internal conflict that prevents you from acting, or the systemic condition that makes the resolution you want unavailable? What would it cost — in loss, in change, in the admission of something you have been avoiding — to resolve it? And: what does the unresolved conflict do to you? What has living with it taught you that a resolved conflict could not have?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The most honest writing usually comes from the writer's actual unresolved conflicts — not as direct autobiography, but as the emotional and psychological source material that gives fictional conflicts their specific weight. The writer who knows their own unresolved conflicts is not required to write about them directly. But they are equipped to write about characters whose conflicts carry the particular texture of genuine irresolution — the way an unresolved conflict feels from the inside, at three in the morning, when the strategies have all been tried and the gap is still there.",
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
            "By the end of this week you should have: mapped the conflict structure of a published story (initiation, escalation, crisis, resolution); designed the conflict arc for a piece you are developing at all three levels (external, internal, systemic); written a 600-word opening scene in which the conflict's initiation is present from the first paragraph; used the devil's advocate AI exercise to pressure-test your planned resolution; and written four build-and-release paragraphs to practice the short sentence as power tool.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 25",
          paragraphs: [
            "Week 25 is Freytag's Pyramid and Its Discontents — the classical dramatic arc studied alongside its contemporary alternatives and subversions. Freytag's model remains the most useful analytical vocabulary for traditional narrative structure; but contemporary literary fiction has complicated it in ways that are not deviations from craft but expressions of a more honest relationship to how experience actually moves. You will map a story you admire against Freytag, identify where it aligns and where it departs, and write a scene that borrows a published story's structural pattern without borrowing its content.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "Week 24 marks the end of Tier 1 of the Year One craft sequence — the foundational topics that every writer needs before the intermediate work can begin. Every technique from the fall semester (showing vs. telling, image, characterization, dialogue, setting) and every technique from the spring's POV sequence has been preparing you to understand conflict — because conflict is what all those techniques are in service of. The character whose psychology you rendered is the character who will be forced into crisis. The setting that does work is the setting that shapes and intensifies the conflict. The POV you chose is the lens through which the conflict will be experienced. Everything connects. The spring's remaining weeks show you how.",
          ],
        },
      ],
    },
  ],
};
