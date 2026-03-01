import type { WeekData } from "@/lib/mfa/types";

export const week3Data: WeekData = {
  weekNumber: 3,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Advanced Structure I — Nonlinear, Fragmented & Modular Narratives",
  emphasizedWord: "Nonlinear, Fragmented & Modular",
  deck: "Linear chronology is a convention, not a requirement. It mirrors the experience of living through time — but it is only one of many ways to organize narrative material. The most powerful structural innovations in literary fiction of the last fifty years have involved the deliberate disruption of chronology to create juxtaposition, accumulation, and the revelation of meaning through unexpected adjacency. This week studies three alternative architectures: the nonlinear, the fragmented, and the modular.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "39 of 108" },
    { label: "Craft Focus", value: "Alternative Structures" },
    { label: "Grammar", value: "Phase 3 · Appositives" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Structure as Meaning",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Structure is not a container for content — it is itself content. The decision to tell a story chronologically forward implies that time is the organizing principle of the material: that what happened first caused what happened second, and that the sequence of events is the sequence of meaning. The decision to begin at the end implies something different: that the ending is the key to understanding everything that preceded it, that the reader needs to know where things came out before they can understand why things went as they did. The decision to fragment implies something else again: that the material resists linear telling, that it exists in pieces that will not cohere into a continuous narrative, and that the form of the fragmentation is itself part of what the work is saying.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Year One, Week 26 introduced alternative architectures as a vocabulary: braided narrative, frame narrative, reverse chronology, episodic structure, spiral, modular. This week develops three of those architectures into analytical precision, building on Madison Smartt Bell's vocabulary of linear, modular, and what he calls 'delicate' structures — structures whose disruption of chronology is so fine-grained that it is felt as texture rather than as form. The question this week is not whether nonlinear structure is interesting but ",
            { text: "whether it is earned.", emphasized: true },
            " The disruption of chronology creates meaning only when there is a meaning that chronological order could not produce. The structure must be the right vessel for the specific content — not chosen for novelty, not adopted to avoid the difficult middle, but required by what the material actually is.",
          ],
        },
        {
          type: "pullquote",
          quote: "Structure is not a container for content — it is itself content. Before revising, ask: does my structure express my theme, or merely contain my plot?",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Three Alternative Architectures",
          paragraphs: [
            "The nonlinear narrative — events arranged for maximum revelatory impact: the chronology is disrupted so that information arrives in the order that produces the most significant understanding, not the order in which it happened. The reader's experience of the past changes when they know the future; the reader's experience of the future changes when they know the past in a specific order. Nonlinear structure uses this mutability deliberately: knowing the ending before the beginning changes what the beginning means, and the structure exploits that change. The risk is disorientation without payoff — the reader who cannot orient in time is a reader whose attention is consumed by tracking rather than by feeling. The nonlinear narrative earns its disruption by making the revelation of temporal relationship itself a source of meaning.",
            "The fragmented narrative — a structure that performs its theme: the prose exists in pieces that resist cohesion, that refuse the continuous narrative, that enact through their form the same brokenness or multiplicity or resistance to singular meaning that their content describes. In the Dream House by Carmen Maria Machado is the canonical recent example: the memoir's fragmented structure — each section named as a trope from choose-your-own-adventure, fairy tale, haunted house — formally performs the narrator's experience of a relationship that was itself a genre, a set of conventions that trapped her inside its logic. The structure is the argument. Fragmented narrative fails when the fragmentation is ornamental — when the pieces could be assembled into continuity without loss, which means the fragmentation was never necessary.",
            "The modular narrative — self-contained sections organized by thematic or associative logic: the modules are complete in themselves, do not depend on each other chronologically, and are arranged according to a principle that is not causation. The principle might be thematic (each module approaches the same question from a different angle), associative (each module is connected to the next by image or motif rather than event), or tonal (the sequence of modules creates an emotional arc that the individual modules do not individually trace). Madison Smartt Bell's account of the modular story identifies its specific demand: each module must be strong enough to stand alone, and the sequence of modules must produce a meaning that the individual modules do not contain. The modular narrative whose sections could be reordered without loss has not found its governing principle.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The test for all three architectures is the same: what does this structure make possible that a linear telling would not? If the answer is juxtaposition — two moments placed in proximity whose adjacency creates meaning neither contains — the structure is earning its disruption. If the answer is accumulation — the reader understanding something at section twelve that section one was preparing for, but that only arrives when sections two through eleven have done their work — the structure is earning its disruption. If the answer is revelation through form — the way the pieces are arranged is itself a meaning the work is making — the structure is earning its disruption. If the answer is that the middle was hard to write, the structure is a crutch.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Alternative Structure Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Nonlinear fiction succeeds when the disruption of chronology creates meaning unavailable in linear telling — when knowing the ending before the beginning changes what the beginning means, when the juxtaposition of past and present produces understanding that neither moment contains alone. The Brief Wondrous Life of Oscar Wao uses footnotes as an alternate structural layer — a second narrative running beneath the primary one, related to it by irony and context, present only in the margins. A Visit from the Goon Squad uses a PowerPoint presentation as one of its sections — the form of the section is itself an argument about what has happened to the character who produces it. In both cases, the structural innovation is not decorative: it is the only form that could make the meaning available.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Nonlinear screenwriting — Pulp Fiction, Memento, Arrival — is a genre unto itself, and the demands are more rigorous than in prose because the viewer cannot reread. The nonlinear film must orient its audience continuously, providing enough temporal markers that the viewer is never simply lost — only productively disoriented, in a way that the eventual revelation resolves. For playwrights, the fragmented structure has a different set of stakes: the stage cannot cut the way film can, so fragmentation must be enacted through theatrical means — lighting shifts, set changes, costume changes, direct address — that signal the break without losing the audience. Caryl Churchill's work is the canonical study of theatrical fragmentation that earns its form.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "Fragmented memoir is particularly powerful for trauma narratives, where the inability to tell a linear story is itself part of the truth. The fragmentation performs what linear telling would deny: that the experience does not cohere, that the self who went through it is not the continuous self that a linear memoir would imply, that the relationship between past and present is not the relationship of cause and effect but of haunting. In the Dream House is the canonical recent example. The lyric essay — which Year Two, Week 20 addresses in detail — is the CNF form most fully committed to associative rather than causal structure, and the braided essay (Week 4) is the CNF form most committed to meaning through juxtaposition. Both are available to the memoir writer whose material resists the through-line.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 3 — Appositives: The Art of the Aside",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 39 of 60 — Appositives: Renaming, Reframing, Enriching",
          intro: [
            "The appositive renames and enriches a noun by placing a second noun phrase immediately beside it in the same grammatical position. It is the aside, the parenthetical context, the detail that reframes everything around it without interrupting the sentence's forward motion: 'Her father, a man who had not spoken her name in eleven years, called on a Tuesday.' The appositive — 'a man who had not spoken her name in eleven years' — does multiple things simultaneously: it characterizes the father, it establishes the relationship's history, it creates irony (the father who has not spoken her name is calling), and it does all of this inside the main clause without requiring a new sentence.",
            "The appositive is Phase 3's richest construction for compressed backstory and simultaneous characterization. Where the participial phrase (Topic 37) adds an action and the absolute phrase (Topic 38) adds a physical detail, the appositive adds identity, context, and relationship — the information that reframes how the reader understands the noun being renamed.",
          ],
          rule: "The appositive is set off by commas (for non-restrictive appositives, which add information but do not define the noun) or written without commas (for restrictive appositives, which define the noun). 'My sister Ellen' (restrictive — Ellen defines which sister) vs. 'My sister, Ellen,' (non-restrictive — I have only one sister, and Ellen names her). In literary prose, the distinction matters less than the rhythm and the content: the non-restrictive appositive with commas creates a slight pause that gives the aside more emphasis; the restrictive appositive runs more smoothly into the sentence. Appositives can be single nouns, noun phrases, or noun clauses of significant length. They can appear after the subject, after an object, or after any noun in the sentence.",
          examples: [
            {
              label: "Single appositive — compressed characterization",
              text: "The doctor, a man who had been wrong once before in exactly this way, said there was nothing to worry about. [The appositive creates irony and history in a single phrase, changing how the reassurance lands.]",
            },
            {
              label: "Noun phrase appositive series — accumulation of roles",
              text: "She was his mother, his judge, his first audience, the person whose disappointment he had spent forty years trying to outrun. [Four appositives in series, each one sharpening and complicating the relationship — the sequence matters: it moves from simple role to complex one, from external to internal, culminating in the one that explains his life.]",
            },
            {
              label: "Appositive as ironic counterpoint",
              text: "The new mayor, a man who had campaigned on honesty, had not filed his taxes in six years. [The appositive creates the standard against which the main clause's revelation lands — the appositive is the setup, the main clause is the punchline.]",
            },
            {
              label: "Appositive for structural context in CNF",
              text: "My grandmother, who had survived two wars and one husband, was afraid of the dark. [The appositive makes the fear more, not less, striking — it is the contrast between what she had survived and what frightened her that carries the emotional weight.]",
            },
          ],
          outro: [
            "The relationship between the appositive and this week's structural topic is direct: the appositive is the sentence-level equivalent of the modular structure's associative logic. Both create meaning through adjacency — the meaning of the appositive is produced by placing a second noun phrase next to the first, just as the meaning of the modular narrative is produced by placing one self-contained section next to another. In both cases, what is between the elements — the comma, the section break — is where the additional meaning is generated.",
            "The noun phrase appositive series in particular is one of the most powerful sentence-level constructions for the kind of compressed, accumulative meaning that alternative narrative structures create at the macro level. The series that builds from simple to complex, from external to internal, from the obvious relationship to the one that explains everything — that series is performing, in miniature, what the modular narrative performs across its whole length.",
          ],
          exercise:
            "Write five sentences in which an appositive reveals character through ironic or unexpected contrast with the main clause — where the appositive sets up an expectation that the main clause either fulfills unexpectedly or contradicts. Then write three noun phrase appositive series of four or more items each, each series creating a specific emotional effect through the accumulation and sequence of items. Finally: identify two places in your current thesis draft where an appositive could replace an explanatory sentence — where context or characterization that currently takes a full sentence could be compressed into an appositive beside an existing noun.",
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
              title: "Narrative Design, 'The Modular Story' chapter",
              author: "Madison Smartt Bell",
              href: "https://bookshop.org/p/books/narrative-design-madison-smartt-bell/6697453",
              note: "Purchase. Read Bell's account of the modular narrative and his vocabulary for the three structural types — linear, modular, and delicate. Bell's is the most analytically precise account available of how alternative structures work from the inside. Attend to his criteria for when each structure is the right choice, and to his diagnosis of how modular structures fail when the governing principle is not strong enough to make the sequence feel inevitable.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "In the Dream House",
              author: "Carmen Maria Machado",
              href: "https://bookshop.org/p/books/in-the-dream-house-carmen-maria-machado/14360498",
              note: "Purchase. Read the first 80 pages for structure. Each section is titled as a trope from genre fiction or game narrative — 'Dream House as Haunted House,' 'Dream House as Choose Your Own Adventure,' 'Dream House as Bildungsroman.' Read for how the form of each section title does work that the content cannot do alone: how naming the trope changes the reader's relationship to the material inside it. Then ask: what is the governing principle of the section sequence? Is it chronological, thematic, emotional, tonal? How does Machado decide what comes next?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Brief Wondrous Life of Oscar Wao, Chapter 1",
              author: "Junot Díaz",
              href: "https://bookshop.org/p/books/the-brief-wondrous-life-of-oscar-wao-junot-diaz/6697453",
              note: "Purchase. Read Chapter 1 and its footnotes as a structural study: the footnotes are not supplementary material — they are a second narrative layer that runs beneath the primary one, related to it by irony, context, and the different voice that produces them. What does the footnote form make possible that a conventional narrative structure could not? What is the relationship between what appears in the text and what appears below the line?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Earned Disruption + Thesis Session 3",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Earned Disruption (800–1,000 words + 200-word analysis): Take a linear scene or sequence from your Year One writing — any passage of 400–600 words that currently tells its events in chronological order. Rewrite it using a nonlinear or fragmented structure. The disruption of chronology must create a meaning or effect unavailable in the linear version — the structure must be earned by what it produces. After the revision, write a 200-word analysis: what does the structural choice provide that the linear version could not? What does it cost — what does the reader lose or have to work harder for? Would you adopt this structure for your thesis, or does the analysis reveal that the linear version was actually the right choice?",
            "Part Two — Thesis Session 3 (1,500–2,000 words): Write the next section of the thesis manuscript. Before the session, assess whether the thesis project's current structure — the structure implied by the opening you have written and the sections that follow — is the right structure for the material. Apply the three-question test: Is it linear because the material requires chronological causation, or because chronology is the default? Would a disruption of chronology create meaning unavailable in the current order? Is there a governing principle — thematic, associative, tonal — that could organize the material more powerfully than event sequence? Record the structural assessment in the session log alongside the session's word count and objective.",
          ],
          target: "800–1,000 words (revision) + 200 words (analysis) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 39 — The Structure Architect",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Describe your thesis project in three to four sentences — the material, the governing question, the narrative situation. Then use the prompt below to generate three alternative structural architectures and assess which is most appropriate for the specific material.",
          prompt:
            "I am going to describe my thesis project in three to four sentences. Propose three genuinely different structural architectures for this material: (1) a nonlinear option, in which chronology is disrupted to create revelatory meaning unavailable in linear telling; (2) a fragmented or sectioned option, in which the form of the structure itself performs or enacts some aspect of the material's meaning; (3) a modular or associative option, in which self-contained sections are organized by thematic or associative logic rather than causation. For each architecture: explain what specific thematic or emotional meaning the structure would create for this material; what it would demand of the reader; and what it would make possible that a linear telling would not. Be specific to the material I describe, not generic about the structures. Here is the project: [describe your thesis in 3–4 sentences].",
          questions: [
            "Which of the three proposed architectures most surprised you — which one had not occurred to you as a possibility for this material? What does the surprise tell you about assumptions you have been making about how the material must be organized?",
            "Which architecture does the AI assess as most appropriate for the material, and do you agree? If you disagree, what does the AI's assessment miss about the specific demands of your content?",
            "Apply the earning test to your current thesis structure: what does your current structure — linear or otherwise — make possible that an alternative would not? If you cannot answer this question, the structure may not yet be chosen for the right reasons.",
            "After reading the three proposed architectures: does any of them change how you understand the thesis opening written in Year One, Week 36? Would a different structure require a different opening? If so, which would you write first — the structure or the opening — and why?",
          ],
          note: "The structure architect prompt is most useful when the thesis project is genuinely underdetermined — when the opening has been written but the full structure has not yet been committed to. If you have already committed to a structure and it is working, the exercise is still useful as a diagnostic: the architectures you rule out, and why, clarify the claims your current structure is making. If the AI proposes an architecture that seems more right than the one you are using, that is the most important finding of the exercise — and the question it raises is whether the revision would be worth the cost.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Earning the Disruption",
      blocks: [
        {
          type: "tip",
          icon: "🏗️",
          name: "The Structure Must Be Required, Not Chosen",
          paragraphs: [
            "Nonlinear structure is sometimes adopted by writers who find the middle of the linear story difficult to write, rather than because the disruption creates meaning. The diagnostic question is simple and ruthless: what does this structure make possible that I could not achieve otherwise? If the answer involves juxtaposition, accumulation, or revelation through form — if there is a meaning that only this structure can produce — the disruption is earned. If the answer is that the linear version was hard, or that nonlinear seemed more interesting, or that the writer whose work you most admire uses fragmentation, the structure is a crutch.",
            "The most reliable test: write the linear version first. Write it all the way through, even the hard middle, even the sections that resist coherence. Then ask whether disrupting the chronology creates meaning that the linear version cannot. If yes, the disruption is available to you and it is genuinely your structural choice. If no — if the linear version is actually better — you have saved yourself a significant structural revision. The writers who commit to nonlinear structure without having written the linear version are often committing to structure that obscures rather than serves their material.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Order of Truth",
      blocks: [
        {
          type: "journal",
          title: "The Order of Truth",
          question:
            "Is the story you most need to tell a linear one? What does the order of events in your thesis material imply about cause, consequence, and meaning — and is that implication accurate? Is the chronological sequence of events in your material the sequence that produces the most honest understanding of what happened and why? Or is there a different order — an order that begins at the end, or that juxtaposes two moments across a gap of years, or that places fragments in adjacency whose relationship is not causal but thematic — that would tell a different truth? And: is there a part of your thesis material that resists linear telling — that exists in pieces that will not cohere, or that is too present to be narrated as past, or that changes its meaning depending on which direction you approach it from? What is that resistance telling you about the structure the material actually requires?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week asks the most consequential structural question available: not how to organize the material, but whether the instinctive organization is honest. The writer who has been telling their thesis material in chronological order because that is the order of events has not yet asked whether the order of events is the order of meaning. They may be the same — often they are. But the question must be asked before the answer can be trusted.",
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
            "By the end of this week you should have: written the 800–1,000-word structural revision of a linear passage with 200-word analysis of what the disruption provides and costs; written 1,500–2,000 words of thesis in Session 3 with a structural assessment recorded in the session log; read Bell's modular story chapter and Machado's opening eighty pages as structural studies; read Díaz's Chapter 1 and its footnotes for the two-layer narrative structure; completed the AI structure architect exercise with three alternative architectures assessed against the specific thesis material; written five ironic appositive sentences and three noun phrase series; and applied the earning test to the current thesis structure.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 4",
          paragraphs: [
            "Week 4 is Advanced Structure II — Braided Narrative and the Logic of Juxtaposition. The braided narrative interweaves two or more storylines, timelines, or registers, creating meaning through the juxtaposition of strands that the reader understands only gradually to be in dialogue with each other. The braid is not merely alternation — it is a structure whose seams create additional meaning. When a memory strand is placed next to a present-tense strand, the reader reads both differently; the relationship between them generates information that neither strand contains alone.",
          ],
        },
      ],
    },
  ],
};
