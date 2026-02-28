import type { WeekData } from "@/lib/mfa/types";

export const week2Data: WeekData = {
  weekNumber: 2,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Subtext & Implication — The Iceberg Theory",
  emphasizedWord: "The Iceberg Theory",
  deck: "Hemingway's iceberg theory holds that a story's power derives from what is not shown — that the dignity of movement of an iceberg is due to only one-eighth of it being above water. This is a theory not of omission but of earned omission: the reader feels the seven-eighths only because the one-eighth is absolutely precise and fully realized. Poorly executed subtext creates confusion. The iceberg is only effective if the writer knows everything that isn't there.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "38 of 108" },
    { label: "Craft Focus", value: "Subtext & Implication" },
    { label: "Grammar", value: "Phase 3 · Absolute Phrases" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What Is Not Said",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Subtext is not a technique — it is a theory of how human beings actually communicate. People do not say what they mean. They do not say what they mean because saying it directly is dangerous, or embarrassing, or would require acknowledging something they are not ready to acknowledge, or would give the other person power they are not willing to surrender. They communicate what they mean through indirection: through what they choose to talk about when they will not talk about the real subject; through what they do with their hands, their eyes, their bodies, while the conversation proceeds along its surface; through the one sentence that breaks the surface pattern and reveals, for a moment, what is actually underneath. The writer who understands this is not deploying a technique — they are rendering how consciousness and communication actually work.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The iceberg principle requires the writer to know everything that is not on the page. This is the part of Hemingway's formulation that is most often misunderstood: the seven-eighths is not absent because the writer chose not to write it. It is absent because the one-eighth that is written is so precisely chosen that it implies the rest. A writer who does not know what the character is feeling cannot imply it through action. A writer who does not know what the scene is really about cannot write dialogue that conveys the real subject through the surface one. The discipline is not restraint — it is ",
            { text: "precision in service of implication.", emphasized: true },
            " The writer must know more than the page contains, and must have chosen, from that fullness, exactly the detail that makes the rest available.",
          ],
        },
        {
          type: "pullquote",
          quote: "If a writer of prose knows enough about what he is writing about he may omit things he knows and the reader will still have a strong feeling of those things.",
          cite: "— Ernest Hemingway, Death in the Afternoon",
        },
        {
          type: "card",
          title: "Three Channels of Subtext",
          paragraphs: [
            "Dialogue subtext — what is not said: the scene's surface conversation proceeds on a subject that is not the real subject. The characters discuss one thing while meaning another, and the gap between what is said and what is meant is where the scene's actual tension lives. 'Hills Like White Elephants' is the canonical example: the entire story is a conversation about whether to order drinks and whether to take a train, and neither the abortion nor the relationship's dissolution is named once. The reader understands both with complete certainty because the dialogue's surface subject is doing the work of implying the real one. The technique requires a surface subject that is genuinely concrete and specific — not vague or allegorical — and a real subject whose emotional charge is fully understood by the writer before the scene is written.",
            "Action subtext — what the character does instead of what they feel: at moments of maximum emotional pressure, characters do not feel — they act. They make coffee, they fold laundry, they adjust a picture frame, they leave the room to check on something that does not need checking on. The action is a displacement of feeling, and the reader understands the feeling through the action's inappropriateness or intensity. The character who scrubs the kitchen counter with unusual violence is not expressing a desire for cleanliness. The action is the subtext. The writer's task is to choose the action that is specific enough to be a precise vessel for the feeling — the action that only this character would perform at this moment, in exactly this way.",
            "Image subtext — the external correlative of the internal state: the object or environmental detail that carries emotional weight without being identified as symbolic. This is the objective correlative operating at the scene level: the detail the prose notices at a moment of emotional significance, the way the light falls, the specific object in the character's field of vision when something shifts. The image does not explain itself. It is selected and placed, and its selection and placement, at the right moment in the scene's architecture, makes the internal state available to the reader without the narrative naming it. The image is the most fragile of the three channels because it is the most easily over-emphasized — any authorial signal that the image matters destroys the subtext and replaces it with a symbol.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The on-the-nose scene — the scene where characters say exactly what they mean, where the action directly expresses the feeling, where the narrative names what the image implies — is not necessarily a failed scene. It is a scene that has not yet done its hardest work. The revision process for subtext is specific: find every place where the prose says what it means directly and ask whether the meaning could be carried by indirection — by a different surface subject, a displaced action, a precisely chosen detail. The answer is not always yes; sometimes directness is exactly right. But it must be a choice, not a default.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Subtext Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "The unsaid in literary fiction operates in three locations: the white space between dialogue exchanges (what the character does not respond to, what they let pass); the action performed at the moment of maximum emotional pressure (the displacement activity that is the precise equivalent of what cannot be said); and what the narrative chooses not to describe (the room the narrator enters without rendering, the face the prose does not look at directly). Mastery of subtext in literary fiction is mastery of selection: knowing which detail to render in full and which to pass over, knowing when the prose should look directly at something and when it should look slightly away. The thesis scene with the most emotional weight is almost always the scene that requires the most rigorous subtext discipline — the scene where the temptation to explain is strongest and the need to resist it is greatest.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Subtext is the entire game in screenwriting. The director, actors, and editor will amplify what the writer implies — the close-up on the actor's face during a silence, the cut to the object before the character speaks, the music under the scene's final image. A script that explains itself is a script that trusts no one: it has done the actor's work, the director's work, the editor's work, and has left no room for the collaboration that makes film. On-the-nose dialogue — characters saying exactly what they feel, exactly what they want, exactly what the scene is about — is the most common failure in beginning screenwriting and the most reliably fatal to a script's forward momentum. For playwrights, subtext in dialogue is even more exposed because the actor cannot be hidden by a cut: the pause, the look away, the movement that accompanies the words must carry what the dialogue does not say.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir, the unsaid operates differently because the writer often knows more than they are saying — knows the full context, the outcome, the retrospective understanding — and has chosen to withhold it. The ethical question is not just what to say but when to stay quiet, and why. The memoirist who explains everything the reader can feel is replacing the reader's experience with the narrator's interpretation. The memoirist who implies too much — who withholds so much that the reader cannot follow — has mistaken restraint for obscurity. The discipline is the same as in fiction: the seven-eighths must be fully known before it can be implied by the one-eighth. The memoir that achieves genuine subtext is the memoir where the narrator's retrospective understanding is present in the selection of detail without being announced in the prose — where the reader feels the memoirist knows more than they are saying, and trusts that what is being given is exactly what is needed.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 2 — Absolute Phrases: The Camera Move",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 38 of 60 — Absolute Phrases: Isolating Detail with Cinematic Specificity",
          intro: [
            "The absolute phrase is Phase 3's most cinematic construction. Where the participial phrase (Topic 37) attaches to a main clause's subject and adds a simultaneous action, the absolute phrase detaches from the main clause entirely — it modifies the whole sentence rather than any single element, floating beside the main clause as a close-up camera move that isolates one specific detail in the visual field.",
            "The absolute phrase consists of a noun plus a participial (present or past): 'Her hands trembling, she set down the glass.' The noun ('hands') is not the subject of the main clause — it is an isolated element brought into focus by the absolute phrase, with its own participial ('trembling') showing what it is doing. The absolute phrase comments on the whole situation from a specific angle, like a camera that pulls away from the wide shot to isolate the one physical detail that carries the scene's emotional weight.",
          ],
          rule: "The absolute phrase is structurally detached from the main clause: it can open a sentence ('His coat soaked through, he kept walking'), close it ('She answered the phone, her voice steady in a way that cost her'), interrupt it ('The house — its windows dark, its garden overgrown — stood exactly as she had left it'), or form a series ('She moved through the rooms, her footsteps careful, her breathing controlled, her hands doing the small ordinary things that did not require thought'). Placement changes emphasis and rhythm. The opening absolute creates the condition before the main action; the closing absolute isolates the aftermath or the accompanying detail; the series creates accumulation.",
          examples: [
            {
              label: "Single closing absolute — the emotional close-up",
              text: "He left, the door clicking shut behind him with a care she found unbearable. [The absolute phrase isolates the door-closing as a separate sensory event with its own participial; the main clause is 'he left' and the absolute phrase is the close-up on what that departure sounded like and what it meant.]",
            },
            {
              label: "Opening absolute — condition precedes action",
              text: "Her coffee untouched, she read the letter three times. [The untouched coffee establishes the state before the reading — it is a detail whose significance the reader infers without being told: she was too absorbed, or too stunned, to drink.]",
            },
            {
              label: "Series of absolutes — accumulation and texture",
              text: "She cleaned the apartment methodically, her movements practiced, her attention elsewhere, her hands going through the known sequence without requiring instruction from the mind that had left the room an hour ago. [Three absolutes in series, each adding a layer to the state of mechanical dissociation the main clause establishes.]",
            },
            {
              label: "The absolute and subtext — the physical detail that carries feeling",
              text: "The absolute phrase is the grammatical home of action subtext: the physical detail that reveals the internal state without naming it. 'Her jaw set, she agreed.' 'His hands very still in his lap, he listened.' 'The glass in her hand, she did not drink.' Each absolute phrase is a camera move to the body's evidence of what the character will not say.",
            },
          ],
          outro: [
            "The relationship between the absolute phrase and this week's craft topic is direct and generative: the three channels of subtext — dialogue, action, and image — all find their natural grammatical home in the absolute phrase. The action a character performs instead of expressing their feeling ('her hands busy with the dishes'); the image detail that carries emotional weight ('the window darkening behind her'); the physical evidence of what is not being said ('his voice entirely calm') — all of these are absolute phrases, or can be.",
            "Christensen, who identified the absolute phrase as 'the writer's best friend,' was pointing at exactly this: the absolute phrase allows the writer to isolate the most revealing detail and bring it forward without making it the main clause's subject. It is a free modifier that creates density through specificity — the close-up that makes the wide shot meaningful.",
          ],
          exercise:
            "Write six absolute phrases that isolate the specific physical detail most revealing of a character's inner state in a moment of stress — six different characters in six different situations. No repetition of body part or emotion across the six. Then take your subtext scene from this week's exercise and identify three places where an absolute phrase could replace an explanatory sentence or a telling adjective — where the close-up on a physical detail would do the work that the current prose is doing through statement. Revise those three moments using absolute phrases and read both versions aloud.",
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
              title: '"Hills Like White Elephants"',
              author: "Ernest Hemingway",
              href: "https://americanshortfiction.org/2020/08/01/hills-like-white-elephants/",
              note: "Widely available online. Read for full attention to what is not said. The surface subject of every exchange; what is never named; the one moment when the surface breaks; the final image and what it implies. After the first reading for experience, read it again with the three channels of subtext as your analytical frame: where is the dialogue subtext operating? Where is the action subtext? Where is the image subtext? How does Hemingway distribute the weight across all three?",
              badge: "Free Online",
            },
            {
              number: "02",
              title: "A Farewell to Arms, Chapter 41",
              author: "Ernest Hemingway",
              href: "https://bookshop.org/p/books/a-farewell-to-arms-ernest-hemingway/6697453",
              note: "Purchase or library. Chapter 41 is the most devastating exercise in subtext in American fiction: the most important thing that happens in this chapter is rendered in two sentences and then immediately followed by the narrator doing something completely ordinary. Read it slowly. What does Hemingway not say? What does the understatement — the prose's refusal to register what has just happened — produce in the reader that direct emotional rendering could not?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "On Writing, 'Toolbox' chapter",
              author: "Stephen King",
              href: "https://bookshop.org/p/books/on-writing-stephen-king/6697453",
              note: "Purchase. King on what to leave out — and why what is left out is more powerful than what is put in. Read as a counterpoint to Hemingway: King's approach to subtext is less austere but equally rigorous. Where do their approaches converge? Where do they differ?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Subtext Scene + Thesis Session 2",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Subtext Scene (800–1,000 words): Write a scene between two people who are discussing something completely different from what they are actually talking about. The surface subject must be neutral and concrete: planning a dinner, assembling furniture, choosing a route, dividing household tasks, discussing a practical problem. The real subject — which must never be named in the scene — is one of the following: the end of a relationship, a confession that has not been made, or a grief that cannot be spoken aloud. The reader must feel the real subject with absolute certainty. Use all three channels: give the dialogue a surface subject and a real one; give at least one character a displaced action that carries what they cannot say; choose at least one image detail that carries the scene's emotional weight without being identified as meaningful.",
            "Constraint: no character may name the real subject, gesture toward it, or use language that acknowledges it directly. The surface conversation must be sustained for the full scene.",
            "Part Two — Thesis Session 2 (1,500–2,000 words): Write the next section of the thesis manuscript, applying the subtext principle: before the session, identify one moment in the planned section where a character's emotional state could be carried by action rather than interiority, and one place where a dialogue exchange could use a surface subject to imply a real one. Write toward those moments. Record the session log entry: date, word count, specific accomplishment, what remains unresolved, next session's objective.",
          ],
          target: "800–1,000 words (subtext scene) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 38 — Dialogue Subtext Workshop (AI Exercise #8)",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "This is AI Exercise #8 from the 28-exercise curriculum. Write the on-the-nose version of your subtext scene first — the version where the characters say exactly what they mean, all of it, directly, without evasion. This is the diagnostic version: it establishes the scene's full emotional and thematic content so you know what must be carried by implication in the subtext version.",
          prompt:
            "I am going to paste a scene in which characters say exactly what they mean — all of it, directly, without subtext. Rewrite this dialogue to use subtext throughout. Keep every intention and every feeling present in the scene, but no character should state directly what they mean or feel. Remove all expository dialogue. Replace direct statement with: deflection (changing the subject), implication (saying something adjacent to the real thing), action beat (doing something instead of speaking), non-sequitur (responding to the real subject rather than the surface one), and silence (pausing before answering, or not answering at all). Maximum six lines per exchange. Preserve the full emotional arc. Here is the on-the-nose version: [paste your on-the-nose scene].",
          questions: [
            "Compare the AI's subtext version to your own subtext scene. Where does the AI use a different channel of subtext than you used? Is its choice more or less effective at this moment — and what makes one channel preferable to another at a specific point in the scene?",
            "Where does the AI's version become too obscure — where does the subtext become so buried that the real subject is no longer legible? This is the line the subtext scene must not cross: the reader must feel the real subject with certainty, even if they cannot name it.",
            "Where does the AI's version remain on-the-nose despite the rewrite instruction — where does a character still say something too directly? These moments identify the places where subtext is hardest to achieve: the moments where the emotional pressure is so high that the characters would be likely to break the surface.",
            "After comparing both versions: revise your own subtext scene using the most effective techniques from the AI's version that your version did not use, and preserving the moments where your version was stronger. The comparison is the exercise; the revision is the product.",
          ],
          note: "The on-the-nose version is not a failure — it is a necessary diagnostic. The writer who produces the on-the-nose version before the subtext version knows exactly what the scene must carry, which is the prerequisite for choosing the most precise surface subject, displaced action, and image detail. The AI's rewrite is one solution to the subtext problem; your own subtext scene is another. The most useful outcome is not adopting the AI's solution but using the comparison to sharpen your own.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The On-the-Nose Audit",
      blocks: [
        {
          type: "tip",
          icon: "🎯",
          name: "Where Characters Say Too Much",
          paragraphs: [
            "On-the-nose dialogue — where a character says exactly what they feel or exactly what the scene is about — is the most reliably detectable problem in a draft, and one of the easiest to miss in your own work because you know what you meant when you wrote it. The audit is simple: read all the dialogue in your current thesis draft aloud, skipping the action and attribution. For every line of dialogue, ask: could this character plausibly say this, in this moment, given what they want and what they fear? If the line would require the character to be more honest than anyone is in a moment of maximum emotional pressure, it is on the nose.",
            "The three signs of on-the-nose dialogue: a character states their feeling directly ('I'm afraid of losing you'), a character announces what the scene is about ('This isn't really about the money, is it'), or a character explains their own behavior ('I'm doing this because I don't know how else to show you'). Each of these is a line that might be said — people do occasionally say what they mean — but in literary prose, they deflate the tension that subtext creates. The revision in each case is the same: find the displaced action, the surface subject, or the image detail that carries the same emotional content through implication rather than statement.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Conversation That Changed Something",
      blocks: [
        {
          type: "journal",
          title: "The Conversation That Changed Something",
          question:
            "Reconstruct, as precisely as you can, a conversation you had that changed something — a relationship, a plan, your understanding of another person, your understanding of yourself. Not a summary of the conversation: the actual words, or as close as memory allows. Write the dialogue, including the action beats — what you were doing, what the other person was doing, what was happening in the room. Then: what was being said in that conversation, and what was being meant? Where was the real subject present in the surface conversation, and how could you tell? Was there a moment when the surface broke — when someone said something that came closer to the real subject than everything else — and what did that feel like? The reconstruction is the exercise; the analysis is the understanding.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The conversations worth writing about are almost always the ones where the real subject was present but not named. The conversation where everything was said directly — where both people said exactly what they felt, asked for exactly what they wanted, and received exactly the response they needed — produces satisfaction but not literature, because literature is what happens in the gap between the said and the meant. The journal prompt this week is a subtext excavation: finding the layer beneath the conversation that already changed something, locating the real subject in the surface one.",
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
            "By the end of this week you should have: written the 800–1,000-word subtext scene using all three channels without naming the real subject; written 1,500–2,000 words of thesis in Session 2 with a specific subtext objective identified before the session; read 'Hills Like White Elephants' twice — once for experience and once for structural analysis; read Hemingway's Chapter 41 for the most extreme exercise in earned omission available; completed AI Exercise #8 (Dialogue Subtext Workshop) with the comparison of the AI's version and your own; written six absolute phrases as close-up camera moves; and conducted the on-the-nose audit on your current thesis draft dialogue.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 3",
          paragraphs: [
            "Week 3 is Advanced Structure — Nonlinear, Fragmented, and Modular Narratives. Year One covered Freytag's Pyramid and its alternatives (Week 25) and patterns of power and alternative architectures (Week 26). Year Two, Week 3 goes deeper: how nonlinear, fragmented, and modular structures work at the architectural level — not as formal experiments for their own sake but as structural choices that emerge from specific content requirements and thematic concerns. Madison Smartt Bell's vocabulary of linear, modular, and delicate structures, and the specific conditions under which each is the right choice.",
          ],
        },
      ],
    },
  ],
};
