import type { WeekData } from "@/lib/mfa/types";

export const week26Data: WeekData = {
  weekNumber: 26,
  totalWeeks: 36,
  semesterLabel: "Spring Semester",
  phaseLabel: "Foundation",
  title: "Plot & Structure III — Patterns of Power & Alternative Architectures",
  emphasizedWord: "Patterns of Power & Alternative Architectures",
  deck: "Beyond Freytag lies a rich vocabulary of structural alternatives. The braided narrative, the frame, the reverse chronology, the episodic structure, the spiral, the modular — each is a different governing principle of organization, each creates a different kind of meaning. Structure is not a container for content. It is itself content.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Craft Focus", value: "Alternative Structures" },
    { label: "Grammar", value: "The Rhythm-Conscious Paragraph" },
    { label: "Exercise", value: "700 words + analysis" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "Structure Is Meaning",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The decision to tell a story in reverse creates one kind of meaning. The decision to braid two timelines creates another. The decision to organize by image rather than by event, or to structure a novel as a series of formally self-contained sections that resist smooth integration, or to build a narrative as a spiral that returns to the same moment with accumulating weight — each of these is not merely a formal choice. Each is an argument about the material: about causation, about time, about what the story is and is not able to say from inside a linear progression.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "This is what Madison Smartt Bell means when he says that the writer's task is to find the narrative design native to the material. A linear chronology implies that events cause each other — that the sequence of happenings is intelligible as a causal chain, and that moving through that chain in order will yield meaning. When that implication is false — when the experience being narrated does not organize by causation, when the meaning is not in the sequence but in the relationship between distant moments, when the story's deepest structure is a pattern rather than a line — then the writer who imposes linear chronology is suppressing the form their material actually requires.",
          ],
        },
        {
          type: "pullquote",
          quote:
            "The disruption of chronology must create meaning unavailable in the linear telling. If the nonlinear structure is a way to avoid writing the hard middle, it is not structure — it is evasion.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Six Alternative Architectures",
          paragraphs: [
            "The braided narrative: two or more storylines, timelines, or registers interweave, creating meaning in their adjacency. The seams — the moments of transition between strands — generate information that neither strand contains alone. Jennifer Egan's A Visit from the Goon Squad braids focal characters across decades; the meaning accumulates in the pattern of their relationships across time, not in any single character's arc.",
            "The frame narrative: an outer story contains an inner story, and the relationship between the frame and the frame's contents is itself part of the meaning. The framing device raises questions (who is telling this? from where? why now?) that the framed story cannot answer from inside itself. Oscar Wao's footnotes create a double-frame — the novel narrates, and the footnotes annotate the narration, each level revealing what the other cannot.",
            "The reverse chronology: the story begins at or near its end and moves backward. The effect is to create dramatic irony from the first page — the reader knows outcomes before they know causes — and to make causation visible as an architectural choice. Harold Pinter's Betrayal (the play, which has a screenplay adaptation) is the canonical example of reverse chronology as a formal argument about memory and self-deception.",
            "The episodic structure: a series of loosely connected scenes or sections organized by theme, character, or setting rather than by causation. Winesburg, Ohio is episodic — each story is complete in itself, and the novel is the accumulation of those stories, not the progression from one to the next. The episodic form is honest about the discontinuities in experience that linear narrative often papers over.",
            "The spiral: the narrative returns repeatedly to the same moment, image, or emotional situation, each time with accumulated context that changes what it means. Marilynne Robinson's Housekeeping circles its central images — water, the lake, the drowned father — with deepening resonance on each return. The spiral does not progress; it deepens.",
            "The modular or section-based structure: self-contained units whose order is determined by thematic or associative logic rather than by causation or chronology. The modular structure makes visible the writer's organizing intelligence — the principle by which things are placed next to other things — rather than concealing it inside smooth narrative continuity.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The key discipline with every alternative structure is the same: the disruption must be earned. Nonlinear chronology is sometimes adopted by writers who find the middle of the linear story difficult to write — who use the structural disruption to skip what is hard rather than to create what is otherwise impossible. That is not structure; it is avoidance with architectural decoration. The test is always: what does this structure make possible that linear telling would not? If the answer is specific — the nonlinear order allows the reader to understand the ending before the beginning, which changes what the beginning means; the braid creates dramatic irony that neither strand can produce alone; the spiral makes the image's deepening resonance visible — then the structure is doing work. If the answer is vague or evasive, the structure is not doing work.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Alternative Architectures Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Literary fiction's relationship to alternative structure is one of its specific freedoms — and specific responsibilities. The novel has no external constraint forcing it toward any particular organization, which means its structural choices are always arguments rather than accommodations to convention. Egan's formal inventiveness in Goon Squad is not decoration; the variety of structural modes (third person, second person, a chapter in PowerPoint slides) is a formal argument about the fragmentary, time-scrambled nature of the lives being narrated. Robinson's spiral structure in Housekeeping is a formal argument about grief and memory — that the mind does not move past its central losses but returns to them, each time changed. The structure is the thesis.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Nonlinear screenwriting is a genre unto itself, with its own conventions and disciplines. Pulp Fiction's multiple overlapping timelines, Memento's reverse chronology, Arrival's revelation-dependent structure — each requires a level of structural control that is, if anything, more rigorous than linear structure, because the viewer cannot reread. In theater, the episodic structure (the play as a series of self-contained scenes) is an ancient form (the morality play, the revue) that has been renewed in contemporary work from Brecht through Suzan-Lori Parks. The ten-minute play is by definition episodic. For both screenwriters and playwrights, alternative structures must be legible to an audience who can only move through the work once.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "For the memoirist, alternative structure is often an ethical choice as much as a formal one. Fragmented structure is the form honest to trauma narratives, where the inability to tell a coherent linear story is itself part of the truth — the structure performs what happened to memory. The braided essay is the most common contemporary CNF form: alternating between a personal experience strand, a research or historical strand, and a lyric or meditative strand, each informing the others. The modular essay — self-contained sections organized by associative logic — is the form most honest to the essay's nature as thinking rather than narrating. The question for the memoirist is always: what is the structure that is honest to this particular experience?",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "The Rhythm-Conscious Paragraph",
      blocks: [
        {
          type: "grammar",
          title: "Phase 2 · Topic 26 of 60 — Sentence Variety in Extended Prose: The Rhythm-Conscious Paragraph",
          intro: [
            "The last three grammar topics have built a complete rhythm vocabulary: the cumulative sentence (Topic 19), the short sentence as power tool (Topic 24), and the one-sentence paragraph (Topic 25). This week integrates those tools into the paragraph as a rhythmic unit — studying how sentence length variation operates across a full paragraph of 150 words or more, where the writer must maintain rhythmic intentionality not just at the sentence level but across the entire passage.",
            "Rhythm in extended prose is the pattern of sentence lengths as they succeed each other. It is audible when read aloud — prose with no rhythmic variation sounds like a metronome, each sentence arriving with the same weight and tempo. Prose with deliberate rhythmic variation sounds like music: long accumulations followed by short landings, medium-length sentences providing the baseline that makes the variation legible. The analogy to music is not decorative: prose rhythm is a sonic property, and it is experienced aurally even when read silently.",
          ],
          rule: "Map sentence lengths across an extended paragraph: count the words in each sentence and write the numbers in sequence. The distribution should show genuine variation — a range from very short (three to five words) to long (thirty or more words), with medium-length sentences providing the rhythmic ground. No two consecutive sentences should be of the same approximate length unless that repetition is itself a deliberate rhythmic effect (anaphora, accumulation, or the deliberate flatness of a passage meant to feel numb or exhausted).",
          examples: [
            {
              label: "Rhythmically flat — similar lengths throughout",
              text: "She moved through the rooms of the old house. The furniture was covered in white sheets. The windows were dirty with years of weather. She thought about the last time she had been here. The memory was sharp and unwelcome. She didn't stay long.",
            },
            {
              label: "Mapped lengths of the flat version",
              text: "9 / 8 / 8 / 11 / 7 / 5 — range of 6 words. No sentence above 11, none below 5. The ear hears monotony even though each sentence is individually correct.",
            },
            {
              label: "Rhythmically varied — the same content, remapped",
              text: "She moved through the rooms slowly, her hand trailing the white-sheeted furniture, the dust lifting as she passed. The windows were dark with weather. She had been here once before — years ago, a different self, in the same rooms — and the memory arrived with the particular sharpness of things she had believed she had let go of. She hadn't.",
            },
            {
              label: "Mapped lengths of the varied version",
              text: "17 / 7 / 34 / 3 — range of 31 words. The long sentence accumulates; the short sentence ('She hadn't') lands with the force of everything accumulated before it. The rhythm enacts the content: expansion, then compression, then the brief devastating close.",
            },
          ],
          outro: [
            "The practical discipline is the read-aloud audit. Take any passage of your prose — a paragraph or more — and read it aloud at speaking pace. Where does the rhythm feel mechanical, as though a metronome is running underneath? Where does it feel musical, as though the language is finding its own natural cadence? The mechanical passages are the ones that need length variation; the musical passages are the ones where your instincts are already working.",
            "Note the relationship to this week's alternative structures: modular and braided narratives often use sentence rhythm as a structural signal — one strand or section has a different characteristic rhythm from another, and the shift in rhythm at the transition point announces the structural change before the content does. Rhythm is not only a sentence-level property; it is a structural one.",
          ],
          exercise:
            "Find a published paragraph of at least 150 words from any prose you are currently reading. Copy it out and count the word-length of every sentence. Write the numbers in sequence. Map the variation: what is the range? Where are the shortest sentences? Do they coincide with moments of emphasis or revelation? Now write an original paragraph on any subject — 150 to 200 words — that deliberately mirrors the rhythmic shape of the published model. Not the content or the style: the pattern of lengths. Then write a second version of the same paragraph with the opposite rhythmic shape — if the model was long-short-long, write short-long-short. Read both aloud and note which feels more natural to your ear. That note is information about your rhythmic default.",
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
              title: "A Visit from the Goon Squad",
              author: "Jennifer Egan",
              href: "https://bookshop.org/p/books/a-visit-from-the-goon-squad-jennifer-egan/6697453",
              note: "Purchase. Read the first three or four chapters — enough to see the novel's structural principle in operation. Egan shifts focal character, time period, and in at least one chapter (which you studied in Week 21) the formal mode itself. Map the structure as you read: who is the focal character in each chapter? What year is it? What is the relationship between this chapter and the previous one — is it causal, thematic, imagistic? Notice that the novel's structure is its argument: time does something to people, and the non-linear structure makes that something visible in a way chronological narration could not.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "Housekeeping, Chapters 1–2",
              author: "Marilynne Robinson",
              href: "https://bookshop.org/p/books/housekeeping-marilynne-robinson/6697453",
              note: "Purchase. Read the first two chapters as a study in spiral structure and returning images. Robinson's prose circles its central concerns — water, the lake, the drowned grandfather, the impermanence of domestic life — rather than moving past them. The novel does not progress through conflict toward resolution; it deepens through return. Mark every image that recurs in these two chapters alone. Then ask: what does the return add to the image that its first appearance did not have?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "The Brief Wondrous Life of Oscar Wao, Chapter 1",
              author: "Junot Díaz",
              href: "https://bookshop.org/p/books/the-brief-wondrous-life-of-oscar-wao-junot-diaz/6697453",
              note: "Purchase. Read Chapter 1 as a study in frame narrative and multiple timelines. Díaz uses footnotes as a structural device — the footnotes are not parenthetical; they are a second narrative register, a parallel commentary that the main text cannot contain. The novel also moves between multiple time periods and multiple narrators in ways that are ostensibly controlled by a single framing narrator (Yunior) but that generate enormous complexity. Ask: what can the footnotes do that the main text cannot? What does the frame (Yunior narrating) allow Díaz to do with the material that a more direct narration would not?",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Non-Chronological Narrative",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Write a 700-word narrative using a non-chronological structure. The specific structure is: begin in the middle (a present moment of some significance), move backward (to an earlier moment that the present moment cannot be fully understood without), then return forward (past the opening present moment to a later point, or back to it with the reader now in possession of what the backward movement revealed).",
            "The discipline is the order of revelation. The non-chronological structure must earn its disruption of chronology: the reader should understand something in the backward movement that would not have been possible in linear telling. This means the backward section cannot be backstory in the traditional sense — context provided for the reader's convenience. It must be material that, placed before the opening present-moment, changes what the present-moment means.",
            "After completing the narrative: write a 200-word analysis identifying exactly what the non-chronological order reveals that linear telling would not have. Be precise — name the specific piece of information or understanding that becomes available through the structural disruption, and explain why its placement after the opening present moment (rather than before it) is what creates that understanding.",
          ],
          target: "700-word narrative + 200-word analysis",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 26 — Five Architectures",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Describe your thesis project — or the piece you developed in Week 24's conflict arc exercise — in three sentences: the central character or subject, the central conflict or inquiry, and the material's approximate scope or time period. Use the prompt below exactly.",
          prompt:
            "I am going to describe a story or creative nonfiction project in three sentences. Design five alternative structural architectures for this material. Each architecture should be genuinely different — not just a rearrangement of chronology, but a different governing principle of organization: one braided (multiple strands whose adjacency creates meaning), one reverse or disrupted chronology, one episodic or modular (self-contained sections organized by associative or thematic logic), one spiral (returning repeatedly to a central image or moment with deepening context), and one frame narrative (an outer story containing or commenting on an inner story). For each architecture, explain: (1) what the governing formal principle is; (2) what emotional or thematic meaning this structure creates that the others cannot; (3) what it demands of the reader; and (4) what it would cost — what is lost by organizing the material this way. Here is my project: [describe in three sentences].",
          questions: [
            "Which of the five architectures feels most native to the material — most honest to the way the experience or story actually organizes itself?",
            "Which architecture did you not consider before this exercise? Does it reveal something about the material that your current structural approach conceals?",
            "What does the AI identify as the cost of each architecture? Do any of those costs match your intuition about why you haven't chosen that structure?",
            "After reading all five: what is your current structure — and is it on this list? If not, what governing principle does it use? If it is on this list, has seeing the alternatives confirmed it or made you uncertain?",
          ],
          note: "The five architectures exercise is not a menu to choose from — it is a diagnostic. By seeing five genuinely different structural principles applied to the same material, you can identify which organizing logic is most native to what you are trying to say. The architecture you did not consider is often more revealing than the one you immediately recognized.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "Structure as Meaning",
      blocks: [
        {
          type: "tip",
          icon: "🏗️",
          name: "The Structure Is the Argument",
          paragraphs: [
            "Structure is not a container for content — it is itself content. The decision to tell a story in reverse creates one kind of meaning: the reader knows outcomes before they know causes, which makes causation feel inevitable rather than contingent, which is itself an argument about fate, or consequence, or the retrospective coherence we impose on what we have lived through. The decision to braid two timelines creates another meaning: the adjacency of the two strands generates information that neither strand contains alone, which is an argument about how separate things are secretly in conversation. The decision to organize by image rather than event argues that experience is not causally structured but imaginistically structured — that the mind keeps returning to certain images because they are doing work that narrative cannot do.",
            "Before beginning any significant revision of a long draft, ask: does my structure express my theme, or does it merely contain my plot? If the structure is arbitrary — if the chapters could be reordered without meaningful loss — then the structure is not yet doing work. If the structure is the argument — if the order of the material is itself a claim about the material — then the structure is fully serving the project.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Recurring Pattern",
      blocks: [
        {
          type: "journal",
          title: "The Recurring Pattern",
          question:
            "Think of your life not as a linear story — not as a progression from birth through experience toward some future resolution — but as a series of recurring patterns. The same kinds of choices made in different circumstances. The same kinds of relationships configured differently each time. The same emotional situation arriving in different costumes. What is the recurring pattern you most want to understand? Can you see it in three or four iterations — three or four instances of the same structural event in your life, separated by years and context but recognizable as the same thing? If you were to write a memoir organized not by chronology but by this recurring pattern — a spiral structure that returned to the pattern four times — what would each return reveal that the previous one could not?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The recurring pattern in a life is often the most honest structural principle available to a memoirist. It is more honest than chronology, because life does not move forward cleanly; it circles. The spiral structure — returning to the pattern with accumulated context — is the form most faithful to how we actually come to understand the things that keep happening to us.",
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
            "By the end of this week you should have: written a non-chronological narrative in which the order of revelation earns its disruption of chronology, with a 200-word analysis of exactly what the structural disruption makes possible; read Egan for the novel whose structure is its argument, Robinson for the spiral structure in extended prose, and Díaz for frame narrative and the footnote as a second narrative register; used the five architectures exercise to see your project from five different structural angles; and completed the rhythm-conscious paragraph exercise with the length-count audit and the mirrored original.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 27",
          paragraphs: [
            "Week 27 is Voice and Tone — the sound of the self on the page. After three weeks of structure, the curriculum returns to the sentence and the consciousness behind it. Voice is the quality that makes us feel a living intelligence is behind the words — not just competent narration, but a specific way of seeing and saying. Week 27 asks: what is your voice, and how do you know when you are fully in it?",
          ],
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The three-week structure sequence — Conflict (Week 24), Freytag and its alternatives (Week 25), and this week's full vocabulary of alternative architectures — is complete. What you now have is not a formula but a set of genuine choices: the ability to look at any narrative material and ask what organizing principle it actually requires, rather than defaulting to the first familiar structure that comes to hand. That ability is the foundation of structural thinking. The spring semester's remaining weeks build voice, imagery, pacing, and the short story on top of it.",
          ],
        },
      ],
    },
  ],
};
