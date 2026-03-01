import type { WeekData } from "@/lib/mfa/types";

export const week4Data: WeekData = {
  weekNumber: 4,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Advanced Structure II — Braided Narrative & the Logic of Juxtaposition",
  emphasizedWord: "the Logic of Juxtaposition",
  deck: "The braided narrative interweaves two or more storylines, timelines, or registers, creating meaning through the juxtaposition of strands that the reader understands only gradually to be in dialogue with each other. The braid is not merely alternation — it is a structure whose seams create additional meaning. When a memory strand is placed next to a present-tense strand, the reader reads both differently. The relationship between them generates information that neither strand contains alone.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "40 of 108" },
    { label: "Craft Focus", value: "Braided Structure" },
    { label: "Grammar", value: "Phase 3 · Noun Phrase Appositives" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Meaning in the Seam",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Week 3 studied three alternative architectures — nonlinear, fragmented, modular — and their shared demand: that the structural disruption be earned by what it produces. Braided narrative is a fourth alternative architecture, and its governing principle is more specific than the others: the braid creates meaning not within its strands but ",
            { text: "between", emphasized: true },
            " them. The individual strands of a braided narrative are often unremarkable in isolation. What makes the braid work is the relationship created by their juxtaposition — the way strand A changes when read in proximity to strand B, and the way strand B changes when strand A has preceded it. The seam between strands is where the additional meaning lives, and the writer who treats the seam as a merely practical transition has missed the braid's central mechanism.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "A braided narrative that alternates its strands without creating productive friction at the seams is not a braid — it is two narratives printed in the same document. The test is the same test that applies to all structural choices: what does the juxtaposition make possible that either strand alone could not produce? The answer must be specific. Not 'it creates complexity' or 'it provides contrast' but a precise account of the information, understanding, or emotional effect that the strand break generates — the thing the reader knows at the beginning of strand B that they did not know at the end of strand A, and that changes how they read both.",
          ],
        },
        {
          type: "pullquote",
          quote: "In braided narrative, the moment of strand transition is as consequential as any paragraph break or chapter ending. The seam should be felt. If the break is smooth and the transition easy, you may be braiding too gently.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Four Principles of Braided Structure",
          paragraphs: [
            "Strands must not share a subject but must share a question. The strands of a braid approach the same governing question from different angles — different times, different characters, different registers, different modes. If the strands share their subject directly (two timelines about the same event), the braid produces redundancy. If they share nothing at all (two completely unrelated narratives), the braid produces confusion. The productive braid holds strands that are far enough apart to be genuinely different — different enough that their juxtaposition creates surprise — and close enough together that the reader feels their dialogue, their implicit conversation about the same underlying question.",
            "Each strand break should leave a question that the other strand partly answers. The break is not a rest — it is a suspension. The reader arrives at the end of strand A in a state of partial knowledge or partial resolution, and turns to strand B not because the writer has said 'now we switch' but because strand A has created a need that strand B will partly satisfy. The 'partly' is essential: complete satisfaction destroys the braid's forward momentum. The reader must always be moving toward a resolution that keeps receding — always knowing more than they knew but always knowing less than the braid is promising.",
            "The strand break is a form of punctuation with a rhetorical charge. The last line before the break and the first line after it are the braid's two most important sentences. The last line should leave the reader in a state of productive suspension — a question raised, a tension heightened, an image that requires completion. The first line of the returning strand should reorient without explaining, should land in a different place with its own momentum, and should carry — in its very arrival — some information about its relationship to what preceded it. Studied together, the two sentences flanking every strand break are the braid's structural argument made visible.",
            "The braid's convergence must be earned by what the strands have accumulated. Most braided narratives converge at some point — the strands meet, the question the braid has been circling is answered, or the relationship between the strands is made explicit. The convergence is the braid's payoff, and it fails when the strands have not accumulated enough — when the juxtaposition has not done enough work, when the reader has not been given enough information in each strand, when the convergence arrives before the braid has built to it. The convergence should feel inevitable in retrospect and should change what both strands mean. A convergence that does not change the meaning of what came before it is a collision, not a resolution.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The braided essay — the CNF form most fully committed to this structure — is distinguished from braided fiction by the presence of a narrator who is also a participant in at least one of the strands. The braided essay's most powerful mode is the one in which the narrator's relationship to the strands' question changes across the braid's length: the narrator who understands something differently at the end than at the beginning, because the juxtaposition of the strands has produced a new understanding that neither strand alone could have generated. This is the braided essay's specific formal achievement — not the accumulation of information but the production of understanding through structure.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Braided Structure Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Braided fiction interweaves timelines (*Beloved*'s present and haunted past), protagonists (*A Visit from the Goon Squad*'s shifting focal characters across decades), or registers (the realist and mythic in *The God of Small Things*). In each case the braid is not decorative: *Beloved*'s temporal braiding performs the argument that the past is not past, that it inhabits the present with the same weight as the living. *Goon Squad*'s protagonist braid performs the argument that a life is a network of other lives, each one changed by the others' stories. The form is the argument. Before braiding, ask: what argument does the interweaving of these specific strands make that either strand alone cannot?",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Multi-protagonist films — *Magnolia*, *Short Cuts*, *Babel* — use braided structure that converges in the climax, the strands' relationship revealed by what brings them together. The convergence in these films is often literal and physical — characters who have been in separate strands occupy the same space at the moment of maximum emotional intensity. Television episodic writing with A, B, and C plots is formally a braid: the A plot carries the episode's primary stakes, the B plot refracts them thematically, the C plot provides tonal counterpoint. The showrunner's structural task is managing the strand breaks across the episode so that each break leaves the viewer in productive suspension rather than simply switching channels.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "The braided essay is one of the most common contemporary CNF forms: alternating between a personal experience strand, a research or historical strand, and a lyric or meditative strand, each informing the others. *The Year of Magical Thinking* is grief as a braid of present and past that refuses to stay past — Didion's structural argument is that grief is not a linear process but an oscillation, a constant return to the past in the present tense. The braided memoir earns its structure when the personal strand and the research or historical strand are genuinely in dialogue — when what the narrator finds in the archive changes how she understands her own experience, and vice versa. The braid fails when the strands are merely adjacent rather than in conversation.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 3 · Topic 4 — Noun Phrase Appositives for Density",
      blocks: [
        {
          type: "grammar",
          title: "Phase 3 · Topic 40 of 60 — Noun Phrase Appositive Series: Accumulation as Characterization",
          intro: [
            "Week 3 introduced the appositive as a single construction that renames and enriches a noun. This week develops the appositive into a series — multiple noun phrases stacked in apposition to create dense, layered characterization or description that a sequence of separate sentences could not achieve with the same compactness or rhythm.",
            "The noun phrase appositive series is one of prose's most powerful tools for the rapid accumulation of relationships, roles, qualities, or contexts: 'She was his mother, his judge, his first audience, the person whose disappointment he had spent forty years trying to outrun.' Four appositives in sequence, each one sharpening and complicating the relationship, the series moving from simple role to complex one, from external to internal, from the obvious to the one that explains everything. The sequence of the items is as important as the items themselves — the appositive series is an argument made through the order of its accumulation.",
          ],
          rule: "The noun phrase appositive series creates its effect through three mechanisms: accumulation (each item adds to the total, and the total is greater than the sum of the parts), sequence (the order of items makes an implicit argument about priority, causation, or revelation — the last item in the series is the most emphatic), and compression (what the series delivers in one sentence would take three or four sentences in conventional prose, and the compression itself is part of the meaning — the stacking suggests that all these things are simultaneously true, that the noun being renamed is all of these things at once rather than these things in sequence). The series risks monotony if the items are parallel in their emotional weight — the most effective series moves through different registers, different distances, building toward the item that reframes all the others.",
          examples: [
            {
              label: "Series building from external to internal",
              text: "He was her neighbor, her landlord, the man who had found her father's body, the one person in the building she could not avoid. [The series moves from simple fact to complex history to inescapable present — each item changes the weight of the last.]",
            },
            {
              label: "Series as ironic accumulation",
              text: "The award went to Hendricks — the department's longest-serving member, its most prolific publisher, its least-read writer, the man who had outlasted every challenge to his tenure by the simple expedient of not noticing them. [The fourth item reframes the first three: the accomplishments are reconsidered in light of the obliviousness that made them possible.]",
            },
            {
              label: "Series in CNF — accumulation of relationship to subject",
              text: "The house was her inheritance, her obligation, the source of her only recurring dream, the place she had left at seventeen and returned to at forty-three and could not understand why either of those things had felt necessary. [The series moves from legal fact to emotional weight to the question the memoir is asking.]",
            },
            {
              label: "The connection to braided structure",
              text: "The noun phrase appositive series operates at the sentence level by the same logic as the braided narrative at the structural level: both create meaning through accumulation and juxtaposition, both argue through the sequence of their elements, and both produce, at their end, a total that exceeds what any single element contained. The series and the braid are the same structural principle at different scales.",
            },
          ],
          outro: [
            "The most important craft decision in the appositive series is the sequence — which item comes last. The final appositive is the one the reader is left with, the one that reframes everything before it, the one that carries the series' weight forward into the next sentence. The series that builds to its most important item at the end is performing the logic of the braid's convergence: everything has been accumulating toward this.",
            "Practice this week by building series that move through registers — from simple to complex, from external to internal, from the expected to the one that changes everything. Write the series, then reorder the items and read both versions. The sequence that feels most inevitable is almost always the right one.",
          ],
          exercise:
            "Write three noun phrase appositive series of four or more items each. Each series should create a specific emotional effect through the accumulation and sequence of items — the effect should be different in each series (ironic in one, elegiac in another, revelatory in a third). Then identify the governing logic of each series' sequence: what argument does the order make? Finally, take the braided piece written for this week's exercise and identify one place where a noun phrase appositive series could replace a conventional characterization passage — where stacking roles or relationships would be more powerful than describing them in sequence.",
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
              title: "Tell It Slant, braided and segmented essay chapters",
              author: "Brenda Miller & Suzanne Paola",
              href: "https://bookshop.org/p/books/tell-it-slant-brenda-miller/6697453",
              note: "Purchase. Read the chapters on braided and segmented essay forms. Miller and Paola give the most practically useful account of braided essay structure available — read for their vocabulary of strand management, their account of what makes a strand break productive rather than merely transitional, and their exercises for identifying the governing question that holds strands in dialogue. Apply their analytical framework to the Didion reading.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: "The Year of Magical Thinking",
              author: "Joan Didion",
              href: "https://bookshop.org/p/books/the-year-of-magical-thinking-joan-didion/6697453",
              note: "Purchase. Read the first four chapters as a study in temporal braiding. Didion's memoir braids the present of her grief with the past of her marriage — but the past keeps erupting into the present tense, refusing to stay past. The structural argument is that grief is not a linear process but an oscillation. Map the strand breaks: where does the past enter the present? What does the intrusion change? Where does the present tense return, and what has it gained from the incursion of the past?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Beloved, Chapters 1–5",
              author: "Toni Morrison",
              href: "https://bookshop.org/p/books/beloved-toni-morrison/6697453",
              note: "Purchase. Reread Chapters 1–5 for temporal braiding. Morrison's novel braids past and present not through conventional flashback but through the past's literal presence in the house — the haunting is the structural argument that the past is not past. Attend to the seams: where does Morrison move between time periods within a single scene, and how does she signal the movement? The prose often does not signal it at all, requiring the reader to locate themselves in time through context alone.",
              badge: "Purchase",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The First Braid + Thesis Session 4",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The First Braid (1,000 words): Write a braided piece in two strands. Strand A: present tense, the narrator's immediate situation — a specific scene, a specific moment, fully rendered. Strand B: past tense, a memory or earlier event that casts new meaning on the present — not backstory or explanation, but a moment from the past that the present tense strand is implicitly in conversation with. The two strands should not share their surface subject but should share a governing question. The strand breaks should be deliberate: each break should leave a question that the other strand partly answers. The braid does not need to converge — this is a first braid, a practice in strand management, not a complete narrative.",
            "Constraint: the real subject of the braid — the question both strands are approaching — must not be named in either strand. The reader should feel the strands' dialogue without being told what they share.",
            "Part Two — Thesis Session 4 (1,500–2,000 words): Write the next section of the thesis manuscript. Before the session, identify whether the thesis project has braided potential — whether there is a second strand (a second timeline, a second register, a research or historical thread) that could be placed in productive dialogue with the primary narrative. The assessment need not change the current draft; it is a structural horizon-scan. Record it in the session log alongside the session's word count, accomplishment, and next objective.",
          ],
          target: "1,000 words (braid) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 40 — The Strand Map",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Submit your First Braid draft — the 1,000-word braided piece. The AI's task is to map the relationship between the two strands with precision: what each strand provides, where the dialogue between them is activated, and where the strand breaks are working and where they are not.",
          prompt:
            "Map the relationship between the two strands in this braided piece. Answer: (1) What information does each strand provide that the other cannot — what is each strand's unique contribution to the piece's total meaning? (2) Where is the thematic dialogue most clearly activated — where do the strands speak to each other most powerfully, where does the juxtaposition generate meaning that neither strand contains alone? (3) Identify the three most effective strand breaks — the transitions where the shift from one strand to the other creates the most productive friction or meaning — and explain specifically what each transition produces. (4) Identify the two weakest strand breaks — the transitions that feel arbitrary or merely convenient — and explain what they are failing to generate. (5) What is the governing question both strands are approaching? Is it the same question, or have the strands drifted into separate inquiries?",
          questions: [
            "Does the AI identify the governing question you intended? If it names a different question, which reading is more accurate — and if the AI's reading is more accurate than your intention, what does that tell you about what the strands are actually doing?",
            "Which strand break does the AI assess as most effective, and which as weakest? Do you agree? If you disagree with the assessment of the weakest break, what is the AI missing about what that transition is doing?",
            "Does the AI find that the strands are genuinely in dialogue, or does it assess them as merely adjacent? If adjacent, what would need to change — in the content of one strand, or in the placement of the strand breaks — to create productive friction at the seams?",
            "After reading the strand map: revise the two weakest strand breaks identified by the AI. The revision should change the last line before the break, the first line after it, or both. Read the revised transitions aloud. Does the seam now generate something the reader can feel?",
          ],
          note: "The strand map is a structural diagnostic, not a quality assessment. The AI is mapping what the braid is doing — what the strands provide, where the juxtaposition works, where it doesn't — which is different from evaluating whether the individual passages are well-written. Use the strand map alongside the four principles of braided structure from the lecture: strands share a question but not a subject; each break leaves a question the other strand partly answers; the break is a form of punctuation with rhetorical charge; the convergence must be earned by accumulation. Map each principle against the AI's assessment.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Strand Break as Punctuation",
      blocks: [
        {
          type: "tip",
          icon: "🧵",
          name: "Study the Two Sentences That Flank Every Break",
          paragraphs: [
            "In braided narrative, the moment of strand transition is as consequential as any paragraph break or chapter ending. The last line before the break and the first line after it are the braid's most important sentences — they are where the braid's structural argument is made visible, where the juxtaposition either generates meaning or fails to.",
            "Study the last line before each break: does it leave the reader in productive suspension — a question raised, a tension heightened, an image that requires completion — or does it settle the reader into resolution that makes the break feel like an interruption rather than a suspension? Study the first line after the break: does it land in a different place with its own momentum, or does it explain its relationship to what preceded it? The first line of a returning strand should never say, in any form, 'meanwhile' or 'back to' or 'at the same time.' It should simply be somewhere else, and the reader's work of locating that somewhere in relation to the preceding strand is part of the braid's meaning. If the break is smooth and the transition easy, you may be braiding too gently. The seam should be felt.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Strands That Run Through Your Life",
      blocks: [
        {
          type: "journal",
          title: "The Strands That Run Through Your Life",
          question:
            "What are the two or three strands that run through your life — the recurring concerns, the returning images, the unresolved questions — that might be placed in dialogue with each other in your thesis? Not subjects: strands. A subject is what the work is about on the surface. A strand is a persistent line of inquiry, a recurring emotional situation, a question that keeps returning in different forms across years. The strand might be a relationship type you keep finding yourself in, a question about belonging or inheritance or damage, an image that appears in your dreams and your work alike. What are your strands? And: are any of them already in dialogue with each other in your thesis — already braided, even if you haven't named it as such? Where in the thesis do two strands meet at a seam, and what does that meeting produce?",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is a thesis reconnaissance — mapping the strands that are already present in the work before deciding whether to braid them deliberately. Many writers discover, on reflection, that they have been braiding intuitively: that the thesis already moves between two registers or two timelines or two questions, and that naming the braid will allow them to manage the strand breaks more consciously. Others discover that the thesis has only one strand and that the structural work of the next months is finding what the second strand might be — what question, from a different angle, would place the primary strand in a light it has not yet been seen in.",
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
            "By the end of this week you should have: written the 1,000-word First Braid with two strands sharing a governing question but not a surface subject; written 1,500–2,000 words of thesis in Session 4 with a structural horizon-scan for braided potential recorded in the session log; read Miller and Paola's chapters on braided essay structure; read Didion's first four chapters as a temporal braiding study; reread Morrison's Chapters 1–5 for strand management and temporal seams; completed the AI strand map and revised the two weakest strand breaks; written three noun phrase appositive series with identified governing sequences; and applied the strand break as punctuation test to both the First Braid and the thesis draft.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 5",
          paragraphs: [
            "Week 5 is Time Manipulation — Flashback, Flash-Forward, and Compression. All narrative involves the management of time, and the management of time is inseparable from the management of meaning. Flashback is not a device for providing backstory — it is a structural decision that says: this past moment is so present to the character, or so essential to the reader's understanding, that the narrative must stop its forward motion to return to it. Week 5 develops the full toolkit of time manipulation at the scene and chapter level, building on the structural braiding work of Weeks 3 and 4.",
          ],
        },
      ],
    },
  ],
};
