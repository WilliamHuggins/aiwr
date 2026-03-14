import type { WeekData } from "@/lib/mfa/types";

export const week15Data: WeekData = {
  weekNumber: 15,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Foundation",
  title: "Cross-Genre Week — Space, Place & the Scene",
  emphasizedWord: "Space, Place & the Scene",
  deck: "The first of three annual cross-genre synthesis weeks. All three tracks examine the same craft problem — how each form handles physical space in a scene — by reading across genre lines. The goal is defamiliarization: seeing your own form more clearly by watching another form solve the same problem.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Cross-Genre Synthesis" },
    { label: "Grammar", value: "Prepositional Phrases" },
    { label: "Exercise", value: "700–900 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "What Your Form Can't Do (And What It Can)",
      blocks: [
        { type: "audioEmbed", title: "Recorded Craft Lecture", src: "https://drive.google.com/file/d/15V6qQ9nkupnTIoo7TaLNzPjuHDQLZfzX/preview" },
        {
          type: "paragraph",
          content: [
            "Every form of narrative writing solves the problem of physical space differently — not because writers in different genres have different aesthetic preferences, but because each form has genuinely different tools available to it, and therefore genuinely different constraints. The fiction writer has access to interiority: the room can be rendered from inside a character's perception, so that the physical space and the psychological space are simultaneously present. The screenwriter has no access to interiority: the room must be rendered in what the camera can see, and every spatial fact must be translatable into a shot. The memoirist has access to both the experiencing self in the room and the narrating self looking back at it — a doubled consciousness that no other form can replicate.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "These are not limitations to overcome. They are the defining properties of each form — the constraints that produce each form's specific power. The fiction writer who wishes they could just show the scene externally without having to access the character's consciousness is wishing away the thing that makes fiction fiction. The screenwriter who wishes they could just tell the audience what the character is feeling is wishing away the discipline that forces them to find the action that externalizes the interior. The constraints are the form. Learning to work inside them — fluently, without fighting them — is one of the central tasks of literary apprenticeship.",
          ],
        },
        {
          type: "pullquote",
          quote: "The writer must learn not just how to write in their chosen form but what their chosen form is for — what it can do that no other form can do, and what it must find ways around.",
          cite: "— craft principle",
        },
        {
          type: "paragraph",
          content: [
            "Cross-genre weeks serve a specific pedagogical purpose: defamiliarization. When you have been writing in one form long enough to stop consciously noticing its conventions, reading a different form's solution to the same problem makes the conventions visible again. The fiction writer who reads a screenplay extract for setting suddenly sees how much of their own setting work is actually interiority — how the physical world they describe is always already filtered through a consciousness in ways they no longer notice because they do it automatically. The screenwriter who reads a lyric essay for spatial description suddenly sees how much spatial information they rely on stated fact rather than rendered perception. Each form holds a mirror to the others.",
          ],
        },
        {
          type: "card",
          title: "How Each Form Handles Physical Space",
          paragraphs: [
            "Literary fiction: Space is perceived, not described. The room exists as a consciousness's experience of it — filtered, selective, emotionally loaded. The same room can be threatening or inviting depending entirely on who is in it. Free indirect discourse allows the room and the character's state to become indistinguishable. This is fiction's specific power with space: it can make the external world interior.",
            "Screenwriting and playwriting: Space is visual and external — only what the camera can see, only what can be staged. This constraint forces the writer to find the spatial detail that does the psychological work without any access to interiority. The object a character reaches for, the distance they keep from another character, the threshold they cross or refuse to cross — these are the screenplay's spatial vocabulary. Constraint produces precision.",
            "Creative nonfiction and memoir: Space is remembered and reconstructed, which means it is always doubled: the place as it was, and the place as the narrator now understands it to have been. The memoirist's spatial description is always retrospective — shaped by everything that has happened since. This gives CNF a specific kind of spatial density unavailable to fiction: the place already carries its consequences.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This week you will write the same scene in all three forms. The scene is fixed: a character enters a familiar room that now feels wrong. What has changed is not the room but the character's relationship to it. Each version should be 200–250 words. The constraint is absolute: the fiction version must use interiority; the screenplay version must use only what a camera can see; the CNF version must use the memoirist's doubled consciousness — the experiencing self and the narrating self both present. After writing all three, you will have a precise map of what each form enables and what each must sacrifice. That map is this week's primary learning.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Reading Across Genre Lines This Week",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction Writers",
              variant: "lf",
              text: "This week, literary fiction writers read a screenplay. The Moonlight screenplay (Barry Jenkins, free online) opens with some of the most precise spatial writing in contemporary American cinema — the evocation of the Liberty City neighborhood, the specific light and heat and threat of the environment, achieved entirely through what a camera can see and what bodies do in space. Read it asking: what is the screenplay doing to create atmosphere that you normally achieve through interiority? What physical facts is it giving you instead of feelings? Notice how much you understand about the characters' inner states from purely external information. That is the screenplay's specific pedagogical gift to the fiction writer.",
            },
            {
              badge: "Screenwriting & Playwriting Writers",
              variant: "sp",
              text: "This week, screenwriters and playwrights read lyric prose. Annie Dillard's \"Total Eclipse\" (The Atlantic, free online) opens with one of the most precise acts of spatial rendering in American nonfiction — Dillard places the reader inside a specific moment in a specific place with a density of sensory and perceptual detail that has no equivalent in screenplay format. Read it asking: how does Dillard create spatial presence through interiority that you cannot create through external description? Where does the prose do something that would be impossible to translate to a shot list? What must the prose writer solve differently from you — and what does that solution look like?",
            },
            {
              badge: "Creative Nonfiction & Memoir Writers",
              variant: "cnf",
              text: "This week, CNF writers read the opening of a novel. The first twenty pages of Mrs Dalloway (Woolf, free on Project Gutenberg) demonstrate how fiction handles the simultaneous movement through physical exterior space and psychological interior space — Clarissa Dalloway walking through London, the city and her mind interpenetrating in a way that makes them inseparable. Read it asking: what is Woolf doing with physical space that you can also do in memoir, and what is she doing that requires the specific freedom of fiction? Where does the doubled consciousness of the memoirist give you something Woolf cannot have — and where does fiction's freedom give her something you must find other ways to achieve?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Grammar of Space",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 Bridge · Topic 15 of 60 — Prepositional Phrases and Physical Orientation",
          intro: [
            "This week's grammar topic bridges Phase 1 and Phase 2 by addressing the smallest unit of spatial language: the prepositional phrase. Prepositional phrases locate — in physical space (in the corner, above the mantle, through the window, against the wall), in temporal space (before she could speak, after the door closed, during the silence), and in relational space (toward him, beside her, between the two chairs). They are the prose's primary instrument of physical orientation.",
            "The question this week is not how to use prepositional phrases — you use them constantly, as every writer does — but when they are essential and when they clutter. A sentence like 'She crossed the room' orients the reader physically with only a verb. 'She crossed the room toward him, stopping short of the window' adds precision. 'She crossed the room toward him along the far wall, stopping just short of the window that looked out onto the garden' begins to accumulate spatial information at a rate that may exceed what the moment requires. Each addition must earn its place.",
          ],
          rule: "Prepositional phrases orient the reader in physical, temporal, and relational space. Their function is precision — placing the reader exactly where the scene requires. Use them when spatial specificity matters; strip them when they accumulate without adding meaning that the moment requires.",
          examples: [
            {
              label: "No prepositional phrases — action only, reader orients from verb alone",
              text: "She crossed the room. He hadn't moved.",
            },
            {
              label: "Two prepositional phrases — essential spatial information added",
              text: "She crossed the room toward him, stopping short of the window. He hadn't moved from the chair.",
            },
            {
              label: "Four prepositional phrases — detail begins to compete with action",
              text: "She crossed the room along the far wall toward him, stopping just short of the window above the radiator. He hadn't moved from the chair beside the door.",
            },
            {
              label: "The principle: precision, not accumulation",
              text: "Version two is almost always better than version three. The spatial information in version three tells us more — but the accumulation slows the prose and divides the reader's attention from the human action to the room's architecture. Unless the architecture is the point, the room should be present but not foregrounded.",
            },
          ],
          outro: [
            "Cross-genre note on prepositional phrases: the screenplay uses prepositional phrases more densely than prose fiction, because the action line must orient the camera precisely. 'INT. KITCHEN — DAY. She crosses to the window. He sits at the table near the door.' Every spatial fact is essential for a production designer. In prose fiction, the camera is the reader's imagination, and imagination requires less precise instruction. Give the reader enough to see; do not give them so much that they cannot move.",
            "In CNF, prepositional phrases often carry temporal weight in addition to spatial weight — 'before I understood what was happening,' 'after the last time I saw her,' 'between the moment he spoke and the moment I answered.' The doubled consciousness of the memoirist uses spatial and temporal prepositions to manage the relationship between then and now.",
          ],
          exercise:
            "Take a single sentence of physical action from your current writing — any sentence in which a character moves through or exists in a space. Rewrite it three times: once with no prepositional phrases, once with two, and once with four. Read all three aloud. Which version serves the moment? In the version you select, confirm that every prepositional phrase is earning its place — that it adds spatial information the reader needs, not spatial information you want to provide.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Texts — Read Across Genre Lines",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Moonlight (screenplay)",
              author: "Barry Jenkins",
              href: "https://deadline.com/wp-content/uploads/2017/01/moonlight-screenplay.pdf",
              note: "Free online. Literary fiction writers: read the opening twenty pages as a study in what spatial atmosphere looks like when there is no access to interiority — when the neighborhood, the light, the specific physicality of the environment must do what psychology does in prose. Screenwriters: read this as a benchmark — how does Jenkins establish world, character, and tone with the economy the form requires? CNF writers: read for how external detail creates emotional information the prose never states.",
              badge: "Free Online",
            },
            {
              number: "02",
              title: '"Total Eclipse"',
              author: "Annie Dillard",
              href: "https://www.theatlantic.com/science/archive/2017/08/annie-dillards-total-eclipse/536148/",
              note: "Free at The Atlantic online. Screenwriters: read as a study in what lyric prose can do with physical space that a shot list cannot — how interiority and exterior observation interpenetrate to create a spatial experience unavailable to purely external description. LF writers: read as a study in how the essayist's doubled consciousness handles the same moment from multiple temporal positions simultaneously. CNF writers: this is a model of your form at its most concentrated.",
              badge: "Free Online",
            },
            {
              number: "03",
              title: "Mrs Dalloway, opening 20 pages",
              author: "Virginia Woolf",
              href: "https://www.gutenberg.org/ebooks/5018",
              note: "Free on Project Gutenberg. CNF writers: read as a study in how fiction navigates the simultaneous interior and exterior space — the city and the consciousness moving through it, inseparable. LF writers: this is the definitive demonstration of free indirect discourse handling physical space; notice how the streets of London and Clarissa's memories interpenetrate without transition. Screenwriters: read as the form that must be translated — how would you render this passage's spatial and psychological information in an action line?",
              badge: "Free Online",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "One Scene, Three Forms",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write the same scene in three different genres. The scene is fixed: a character enters a familiar room that now feels wrong. Nothing in the room has necessarily changed — but the character's relationship to it has, for a reason you choose.",
            "Version 1 — Literary Fiction (200–250 words): Write in prose with full access to interiority. The room should exist as the character's perception of it. The wrongness should be rendered through what they notice, what they cannot stop looking at, how the physical space registers in their consciousness. The room and the character's state should become inseparable.",
            "Version 2 — Screenplay (200–250 words): Write as a properly formatted screenplay scene — slug line, action lines, any dialogue if the scene requires it. Use only what the camera can see. Do not access interiority. The wrongness must be visible in behavior, in specific physical details, in what the character does and does not do in the space. What the camera cannot see, you cannot write.",
            "Version 3 — CNF / Memoir (200–250 words): Write in first person, past tense, with the memoirist's doubled consciousness — the experiencing self in the room and the narrating self who now knows what that moment meant. The room should exist in both time frames simultaneously. The wrongness should be rendered from both the then and the now.",
            "After all three versions: write one analytical paragraph (150–200 words) identifying what each form could do that the others could not, and what each form was forced to sacrifice. Be precise: name specific moments in each version where the form's constraint produced either a limitation or an unexpected resource.",
          ],
          target: "700–900 words (all three versions plus analysis)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 15 — The Cross-Genre Comparison",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste all three versions of your scene into a single message — clearly labeled Version 1 (Fiction), Version 2 (Screenplay), Version 3 (CNF/Memoir). Use the prompt below. The AI will read all three versions as a comparative reader and assess which form most fully realizes the emotional situation — and why.",
          prompt:
            "I am going to paste three versions of the same scene — a character entering a familiar room that now feels wrong — written in three different forms: literary fiction (with interiority), screenplay (external only), and CNF/memoir (doubled consciousness). Read all three carefully. Then answer: (1) What does each form uniquely enable that the other two cannot achieve? Be specific — name moments in each version where the form's specific tools are doing work the others cannot replicate. (2) What does each form sacrifice — what information or effect is unavailable to it that one of the others achieves? (3) Which version most successfully conveys the emotional situation, and what specifically makes it more successful — is it a formal property of the genre or a quality of the execution?",
          questions: [
            "Does the AI's reading of what each form enables match your own experience writing each version?",
            "Which version does it identify as most successful? Do you agree with its reasoning?",
            "Where does it identify a formal limitation that surprised you — something you assumed your primary form could do that it identifies as an area of constraint?",
            "What does its analysis suggest about how to strengthen the version in your primary form?",
          ],
          note: "Use the AI's comparative analysis to sharpen the version in your primary genre. The point of writing all three is not to produce three equal drafts — it is to understand your form by seeing it against the others. The version in your primary genre should be the one you revise and keep; the other two are analytical instruments.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Reader's Eye",
      blocks: [
        {
          type: "tip",
          icon: "🎬",
          name: "What Are They Looking At?",
          paragraphs: [
            "In any scene with physical action, track where you are directing the reader's attention moment to moment. In film, this is the director's job — the cut determines what the audience sees. In prose, it is yours. Are you moving between close-up (specific objects, physical details) and wide shot (spatial orientation, the larger room or landscape) effectively? Does the reader always know where they are in space even when you are in close-up?",
            "The most common spatial failure in prose fiction is the reverse: the writer knows perfectly well where everything is, and so writes as though the reader does too. Characters cross rooms without the reader knowing what room they are in. Objects are reached for without the reader knowing where they were. The discipline is to orient first — briefly, with the minimum prepositional precision required — and then to trust the reader to hold that orientation while you move to close-up. Give them the room once. Then give them the detail.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Form You Have Never Written",
      blocks: [
        {
          type: "journal",
          title: "The Form You Have Never Written",
          question:
            "Think of a genre or form you have never written in — or have written in only briefly, without commitment. What would it force you to give up that you rely on in your primary form? What habits of mind, what tools, what ways of avoiding the hard problem would no longer be available to you? And: what might it force you to find? What problem does that form solve differently, and what might solving it differently teach you about the problem itself? You do not have to want to write in this form. You only have to be willing to think carefully about what it would demand.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The writers who understand their own form most deeply are almost always writers who have spent serious time with other forms — not to abandon their primary form but to understand, from the outside, what it is actually doing. The constraints you stop noticing are the ones that most define you. Another form makes them visible again.",
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
            "By the end of this week, you should have: written the same scene three times across three forms, with a precise analytical paragraph identifying what each form enabled and sacrificed; read across genre lines and identified at least one thing the other form does with physical space that surprised you; completed the prepositional phrase exercise and confirmed that your spatial phrases are earning their place; and used the AI comparative analysis to sharpen the version in your primary genre.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 16",
          paragraphs: [
            "Week 16 opens Phase 2 of the grammar curriculum: the cumulative sentence. Francis Christensen called it the characteristic sentence of contemporary literary prose — the base clause extended by free modifiers that add detail, texture, and the accumulated weight of perception. Everything in Phase 1 has been preparation for this. The craft focus moves to conflict and crisis: the structural engine beneath the scenes you have been building.",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "A note on cross-genre weeks: these three weeks in the curriculum — this one, and two more in later semesters — are among the most disorienting and most useful of the year. The disorientation is the point. When a familiar problem is solved by an unfamiliar instrument, the problem becomes visible in ways it hasn't been before. Take the discomfort seriously. It is almost always productive.",
          ],
        },
      ],
    },
  ],
};
