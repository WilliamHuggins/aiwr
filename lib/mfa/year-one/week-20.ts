import type { WeekData } from "@/lib/mfa/types";

export const week20Data: WeekData = {
  weekNumber: 20,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Point of View II — Third-Person Limited",
  emphasizedWord: "Third-Person Limited",
  deck: "Third-person limited is the dominant mode of contemporary literary fiction — flexible, intimate, and able to deploy free indirect discourse with maximum subtlety. It is first person's next-door neighbor, with one crucial difference: the narrator stands just outside the character and can see what the 'I' cannot.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Third-Person Limited" },
    { label: "Grammar", value: "The Periodic Sentence" },
    { label: "Exercise", value: "900–1,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Narrator Next Door",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Third-person limited narration is the dominant mode of contemporary literary fiction for good reasons: it is the most flexible POV available to a writer who wants to stay close to a single character's consciousness while retaining a degree of authorial mobility. Where first-person narration traps the reader inside the 'I' — with no perspective external to that consciousness, no possibility of irony the narrator doesn't intend — third-person limited positions a narrator just outside the focal character, close enough to render their thoughts and sensations in intimate detail, distant enough to occasionally see them from outside.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "That slight external position is third-person limited's specific power. The narrator can describe the focal character's face in a way the character could never describe their own. The narrator can register, in the quality of the prose, an irony or a self-deception that the character is not aware of — and do this without breaking the intimacy of the close perspective. Kazuo Ishiguro's Stevens in ",
            { text: "The Remains of the Day", emphasized: true },
            " narrates his own story in first person, and the irony Ishiguro achieves comes from the gap between what Stevens reports and what the reader can see that Stevens cannot. Third-person limited achieves the same gap with greater flexibility — the narrator can hold Stevens slightly at arm's length, can let the prose register what the character's consciousness refuses to register, without breaking the illusion of intimate access.",
          ],
        },
        {
          type: "pullquote",
          quote: "Third-person limited is first person with a mirror — the focal character can be seen as well as inhabited.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "The key technical tool of third-person limited is free indirect discourse, introduced in Week 17. FID is what allows the narrator to dissolve the boundary between external narration and the focal character's consciousness — moving, within a single sentence, from 'she walked into the room' (narration) to 'the room was exactly as she'd left it. Why had she expected anything different?' (character's thought, rendered in the narrator's grammar). In third-person limited, this movement is available at every moment, and the writer who has mastered it can modulate psychic distance — closer, farther, closer — as precisely as a lens adjusts focus.",
          ],
        },
        {
          type: "card",
          title: "What Third-Person Limited Can Do That First Person Cannot",
          paragraphs: [
            "Self-description: a first-person narrator cannot describe their own face without a mirror or a contrivance. A third-person narrator can observe the focal character physically — their expression, their posture, what their body is doing while their mind is elsewhere — with the naturalness of an external observer. This seemingly small capacity has large effects: the character can be seen as well as inhabited.",
            "Irony without self-awareness: a first-person narrator who is being ironic about themselves is, by definition, aware of the irony. A third-person narrator can render a character's self-deception or self-importance with an irony the character does not intend and does not notice — without breaking the close perspective. The reader sees what the character cannot see.",
            "Variable psychic distance: a first-person narrator cannot easily move between intimacy and distance within a single scene without the movement registering as a stylistic shift. Third-person limited can move fluidly up and down Gardner's scale within a paragraph — pulling back to observe, closing in to inhabit — because the narrator's external position makes that movement natural rather than conspicuous.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The discipline of third-person limited is consistency: the reader must always know whose consciousness they are in. We should never know something the focal character does not know — no information from another character's mind, no authorial intrusion beyond what this consciousness can perceive and understand. A POV slip — a moment where the prose accesses information outside the focal character's range — breaks the narrative contract. Mark every POV slip in your drafts. Most trace to a moment where you, the writer, knew something and forgot that your character didn't.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Third-Person Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Third-person limited is so dominant in contemporary literary fiction that many writers choose it by default rather than by decision — which means they are accepting a convention rather than making a choice. The useful question is always: what does this particular story require? The stories that most benefit from third-person limited are those where the protagonist's self-deception, limited understanding, or unreliable self-presentation is central to the narrative's meaning — because third-person limited can hold that gap between what the character believes and what the prose reveals, with a subtlety unavailable to first-person narration.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Screenwriting has no direct equivalent of third-person limited — the camera is always external — but a screenplay can create the functional effect by following one character and restricting information to what that character can observe. The Breaking Bad pilot is a model: the camera stays close to Walter White, giving us access to his reactions and perceptions without ever violating the external visual restriction. The screenwriter's equivalent of POV consistency is staying with the scene's focal character — not cutting away to what another character is doing in another room, unless that cut is deliberate and structurally motivated.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Third-person limited in creative nonfiction is unusual but not impossible — some memoirists render their past selves in third person as a deliberate distancing strategy, a way of looking at the experiencing self with the slight externality the narrating self actually has. More commonly in CNF, the variable psychic distance principle applies to the first-person narrator: the memoirist can pull back from the experiencing self (observing them from outside) or close in completely (entering the past moment directly). The craft is identical to third-person limited; only the pronoun differs.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Periodic Sentence — Advanced Practice",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 20 of 60 — The Periodic Sentence in Extended Practice",
          intro: [
            "Last week introduced the cumulative sentence: the base clause followed by free modifiers that add detail and texture. This week introduces its formal counterpart — the periodic (or suspensive) sentence, which delays its main clause until the very end, accumulating subordinate elements before finally releasing the kernel. Where the cumulative sentence enacts the movement of perception (the base clause registers the event; the modifiers elaborate), the periodic sentence enacts anticipation: the reader is held in suspension, gathering subordinate material, until the main clause arrives as both grammatical and emotional resolution.",
            "The periodic sentence is more formal than the cumulative — it carries the rhetorical weight of oratory, of deliberate construction, of a writer who knows exactly where the sentence is going and makes the reader wait to get there. It is not suitable for every passage, and over-use produces prose that feels labored. But in the right moment — a moment of decision, of revelation, of culmination — the periodic sentence creates a pressure and a release unavailable to any other sentence form.",
          ],
          rule: "The periodic sentence withholds its main clause until the end, using subordinate clauses, conditional constructions, participial phrases, and absolute phrases to build anticipation. The sentence is grammatically incomplete until the main clause arrives. The reader's syntactic incompleteness and the sentence's syntactic incompleteness are the same experience — which is why the periodic sentence creates such specific emotional pressure.",
          examples: [
            {
              label: "Periodic sentence — decision delayed to the final clause",
              text: "Despite everything she'd been told, despite the advice of people who knew better, despite her own better judgment on three separate occasions — she called him.",
            },
            {
              label: "Periodic sentence — revelation withheld through accumulation",
              text: "After twenty years of careful management, of small concessions made and small victories accepted, of a life built around the avoidance of exactly this kind of moment, he found that he had nothing left to say.",
            },
            {
              label: "Periodic paragraph — three sentences each building toward a revelation",
              text: "When the letter arrived, she did not open it immediately. For three days she carried it from room to room, setting it down in one place and finding it again in another, moving through her life with the letter always at the edge of her vision. Only on the fourth morning, standing in the kitchen in the grey light before the rest of the house was awake, did she understand that she was afraid.",
            },
            {
              label: "The contrast that makes the periodic sentence legible",
              text: "Cumulative: 'She understood that she was afraid, finally, standing in the grey kitchen light.' Periodic: 'Only then, standing in the grey kitchen light, did she understand that she was afraid.' Same information; entirely different experience of arriving at it.",
            },
          ],
          outro: [
            "Morrison, Baldwin, and Lincoln's Second Inaugural Address are the canonical English-language examples of periodic sentences deployed at full rhetorical power. In fiction, the periodic sentence appears less frequently than in oratory — its formality can disrupt the naturalism of the close third-person voice — but when a narrative needs to convey the weight of an arrival, the sentence that makes the reader wait is the sentence that makes the arrival matter.",
            "The periodic sentence and the cumulative sentence are complementary rather than competing: the cumulative sentence opens outward after the kernel; the periodic sentence closes inward toward it. A paragraph that alternates between them — opening, closing, opening — creates the rhythmic texture of prose that breathes.",
          ],
          exercise:
            "Write three periodic sentences about moments of decision or culmination in your current writing. Each should accumulate at least three subordinate elements before releasing the main clause. Then write a periodic paragraph of three to four sentences that builds progressively toward a single revelation — each sentence itself delayed, each adding pressure before the final release. Read the paragraph aloud. Does the release arrive with the weight the buildup earned?",
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
              title: "A Swim in a Pond in the Rain",
              author: "George Saunders",
              href: "https://bookshop.org/p/books/a-swim-in-a-pond-in-the-rain-in-which-four-russians-give-a-master-class-on-writing-reading-and-life-george-saunders/14543267",
              note: "Read any single story chapter in full — Saunders analyzes a complete Chekhov story sentence by sentence. Read specifically for how he addresses POV choices: where does Chekhov access interiority, where does he stay external, what do those decisions produce? Saunders is the most useful living teacher of how third-person limited works at the paragraph level, and his attention to which information the narrator makes available — and when — is the analytical model for this week's exercise.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Remains of the Day, Chapter 1",
              author: "Kazuo Ishiguro",
              href: "https://bookshop.org/p/books/the-remains-of-the-day-kazuo-ishiguro/6697453",
              note: "Read the first chapter. Ishiguro uses first-person narration, but Stevens is one of the great demonstrations of how a narrator's self-presentation can be simultaneously intimate and deeply ironic without the narrator being aware of the irony. Read it as a study in the gap between what a narrator reports and what the prose reveals — that gap is exactly what third-person limited achieves with its external position. Reading Ishiguro's first-person version of this effect will sharpen your understanding of what the external narrator can see that the 'I' cannot.",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Breaking Bad pilot script",
              author: "Vince Gilligan",
              href: "https://www.dailyscript.com/scripts/breakingbad_pilot.pdf",
              note: "Free online — read the first twenty pages only. Notice how Gilligan creates the functional equivalent of close third-person limited through camera positioning and action line choices: what information is available, what is withheld, how the focal character's reactions are described. A screenplay cannot access interiority directly, but it can manage information so that the reader experiences the story from one character's perceptual vantage. This is the visual equivalent of the POV discipline the prose writer exercises through free indirect discourse.",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Three-Distance Comparison",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Take the first-person immediate scene you wrote in Week 19 — the present-tense version, inside the experience as it happens. You will rewrite it twice, producing three versions total for comparison.",
            "Version 2 — Close Third-Person Limited (300 words): Rewrite the scene in third-person limited at close psychic distance — approximately Gardner's Level 4 or 5. Use the character's name or 'she/he/they.' Keep the external narrator's grammatical person but render the character's interiority through free indirect discourse: no quotation marks, no attribution tags. The character's voice and the narrator's voice should interpenetrate. The seam between narration and consciousness should be barely visible.",
            "Version 3 — Distant Third-Person Limited (300 words): Rewrite the same scene again, still in third-person limited (one focal character only, no access to other minds), but at a significantly greater psychic distance — approximately Gardner's Level 2. The narrator observes the focal character from outside, describing their physical behavior, expression, and the objective facts of the scene. Stay external. Minimize interiority. Describe only what a camera could see.",
            "Read all three versions aloud. Then write a 150-word comparative analysis: what does each version give the reader that the others cannot? Which creates the most tension? Which creates the most irony? Which feels most appropriate for your thesis project's material, and why?",
          ],
          target: "900–1,000 words (both rewrites plus analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 20 — The POV Craft Comparison",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Use the AI this week as a thinking tool before writing your exercise. Ask the question below first and use the response to frame your own comparative work — then complete the three-distance exercise with that framework in mind.",
          prompt:
            "Explain the craft difference between first-person narration and third-person limited narration using two specific passages from published literary fiction — one passage in each mode. For each passage: identify how the POV mode handles interiority (access to the character's thoughts and feelings), how it manages the reader's relationship to the focal character, and what irony or dramatic effect the mode makes available that the other cannot achieve. Then analyze: in what emotional or narrative situations might a writer choose third-person limited over first-person, and vice versa? Give two specific examples of fictional scenarios where first-person would be the stronger choice, and two where third-person limited would be.",
          questions: [
            "Which of the AI's two literary examples most clearly demonstrates the difference it describes? Look up that passage.",
            "Of the four fictional scenarios proposed — two favoring first-person, two favoring third-limited — which best describes your thesis project's situation?",
            "After completing your three-distance exercise: does the AI's analysis predict which version felt strongest? Where did your experience diverge from the analytical framework?",
            "Can you now state, in one sentence, which POV your thesis project requires and why?",
          ],
          note: "The AI's response is a starting framework, not a verdict. Use it to sharpen your thinking about the POV decision — which is ultimately a decision about what your specific material requires. After this week's exercise, you should be able to state with some confidence which point of view your thesis project requires and why.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The POV Audit",
      blocks: [
        {
          type: "tip",
          icon: "🔍",
          name: "Mark Every POV Slip",
          paragraphs: [
            "In any multi-scene draft using third-person limited, audit each scene for POV consistency. Third-person limited stays inside one focal character's consciousness per scene — the reader should never know something the focal character does not know, and should never access another character's thoughts without a deliberate perspective transition. Mark every POV slip: the moment where the narrator reports something outside the focal character's perceptual range, or where information appears that the focal character could not have.",
            "The most common third-person limited POV slips: reporting another character's thoughts or feelings as fact rather than as inference; providing information the focal character is not present to observe; describing the focal character's own face or expression without a reflective surface. Each breaks the contract. Mark them. Fix them — or change POV deliberately, which is a different decision. An unintentional POV slip and a deliberate omniscient intrusion are not the same thing. Know which one you have.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "Your Life in the Third Person",
      blocks: [
        {
          type: "journal",
          title: "Your Life in the Third Person",
          question:
            "If your life story were told in the third person — from outside, by a narrator with full access to your behavior and speech but no direct access to your interiority — what would the narrator see? What patterns in your behavior would become visible from the outside that you don't notice from the inside? What would the external narrator miss — what about your experience could only be known from the first person? Is there a period of your life where you would prefer to be rendered from outside rather than from within — where the external view would be more honest, or more survivable, than the first-person account?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The choice between first person and third person is not merely technical — it is a question about the relationship between the writer and the material. Some material is too close for first person; the distance of third-limited makes it available. Some is too distant for third; the intimacy of 'I' makes it real. The exercise of imagining your own life from outside is a way of discovering where your material actually lives on the psychic distance scale — and which pronoun tells it most honestly.",
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
            "By the end of this week, you should have: rewritten your Week 19 first-person immediate scene in both close third-person limited and distant third-person limited, and written a 150-word comparative analysis of what each of the three versions can do that the others cannot; written three periodic sentences building toward moments of decision, and a periodic paragraph that builds progressively toward a single revelation; read the Saunders chapter as a study in third-person POV management at the paragraph level; and used the AI's craft comparison to sharpen your sense of which POV your thesis project requires.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 21",
          paragraphs: [
            "Week 21 completes the POV sequence with the unconventional modes: second person, omniscient narration, and experimental forms. Second person is rare and precise — it creates uncanny intimacy and can represent dissociation. Omniscient narration is out of fashion but undergoing a revival and worth understanding deeply. You will write the same scene in all three modes and map what each affords and what each costs.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "After this week you should be able to write in close third-person limited with the same fluency you brought to first person — which means you should be able to move between them, choosing by what the material requires rather than by default. The POV sequence completes next week. After that, the spring semester turns to conflict, structure, and the sentence architectures that can carry the full weight of what you are now writing.",
          ],
        },
      ],
    },
  ],
};
