/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type BookLecture = {
  id: string;
  title: string;
  author: string;
  purchaseUrl: string;
  imageUrl: string;
  category: string;
  summary: string;
  content: {
    writersCase: string[];
    technicalBreakdown: Array<{
      heading: string;
      body: string[];
      takeaway: string;
    }>;
    criticalVerification: Array<{ label: string; url: string }>;
    readingDirective: string[];
  };
};

const bookLectures: BookLecture[] = [
  {
    id: "nine-stories",
    title: "Nine Stories",
    author: "J.D. Salinger",
    purchaseUrl:
      "https://www.hachettebookgroup.com/titles/j-d-salinger/nine-stories/9780316769501/?lens=little-brown",
    imageUrl: "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/9780316769501.jpg?resize=635,1024",
    category: "Story Mechanics",
    summary:
      "A precision study in subtext, narrative distance, and making meaning through gesture and framing.",
    content: {
      writersCase: [
        "Nine Stories is not one skill; it’s a calibrated set of demonstrations for three hard craft problems that sink otherwise competent writers: subtext that actually reads, narrative distance that can carry tenderness/satire/dread without explanation, and meaning made from smallness rather than backstory dumps.",
        "Treat specific stories as single-purpose craft machines—each one isolates a mechanism and runs it at high efficiency.",
      ],
      technicalBreakdown: [
        {
          heading:
            "Dialogue as an inference engine (subtext built from topic control, not “mysterious” lines)",
          body: [
            "Primary study texts: “Pretty Mouth and Green My Eyes,” “Down at the Dinghy,” plus the tonal counterpoint in “A Perfect Day for Bananafish.”",
            "Watch evasion architecture: questions answered with questions, reassurance replacing information, and topic swaps at the exact moment truth might surface.",
            "Watch power exchange via micro-moves: interruptions, false agreement, overpolite phrasing, sudden intimacy/formality.",
            "Watch behavioral beats as exposition substitutes: overexplaining, repeating, soothing, and confirmation-seeking reveal conflict without naming it.",
          ],
          takeaway:
            "Craft takeaway: write each line of dialogue to perform a social function (placate, probe, deflect, dominate), then let readers infer the unsaid.",
        },
        {
          heading: "Distance modulation and voice as symptom",
          body: [
            "Primary study texts: “For Esmé—with Love and Squalor,” “De Daumier-Smith’s Blue Period.”",
            "Watch selective interiority: enough vulnerability to feel, not enough explanation to dissolve tension.",
            "Watch tone under constraint: comedy and pain coexist through controlled slippage in self-presentation.",
            "Watch diction shifts as structure, not ornament: register changes move time and damage onto the page.",
          ],
          takeaway:
            "Craft takeaway: let emotion appear as language constraint—what cannot be said cleanly, where prose tightens, flattens, or overcontrols.",
        },
        {
          heading: "Meaning carried by gesture and structure",
          body: [
            "Primary study texts: “The Laughing Man,” with “Teddy” as the idea-heavy stress test.",
            "Watch frame narrative used as pressure, not decoration: telling becomes part of emotional machinery.",
            "Watch load-bearing details: hands, objects, posture, etiquette replace explanation.",
            "Watch ideas tethered to social abrasion so discussion never floats into essay.",
          ],
          takeaway:
            "Craft takeaway: when tempted to explain motive, replace explanation with a gesture or structural device that externalizes what cannot be stated directly.",
        },
      ],
      criticalVerification: [
        { label: "Donaldson on gestural narrative work in Nine Stories", url: "https://journals.openedition.org/jsse/3624" },
        {
          label: "Meloy (The New Yorker) on reread dominance and collection structure",
          url: "https://www.newyorker.com/books/page-turner/nine-stories-j-d-salinger",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read as a craft workbook in this order: “Pretty Mouth…” → “For Esmé…” → “The Laughing Man,” then circle back to “Bananafish,” “Down at the Dinghy,” and “Teddy.”",
        "Mark only three mechanisms while reading: E (evasion in dialogue), G (gesture/object where exposition should be), D (distance shift).",
        "After each story, write one sentence: what the story refuses to say directly, and which E/G/D moves carried that refusal.",
      ],
    },
  },
  {
    id: "master-and-margarita",
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    purchaseUrl:
      "https://www.penguinrandomhouse.com/books/531360/the-master-and-margarita-by-mikhail-bulgakov-a-newly-revised-translation-by-richard-pevear-and-larissa-volokhonsky-introduction-by-richard-pevear-foreword-by-boris-fishman/9780143108276/readers-guide/",
    imageUrl: "https://images1.penguinrandomhouse.com/cover/9780143108276",
    category: "Expansive Novel Systems",
    summary:
      "A model for blending farce, romance, political satire, and moral philosophy without tonal collapse.",
    content: {
      writersCase: [
        "The Master and Margarita is essential study for writers who want to combine farce, lyric romance, moral philosophy, and political satire without collapsing into tonal mush or allegorical heaviness.",
        "Bulgakov solves a hard craft problem: how to run multiple narrative modes (comic episodic satire, tragic historical counterplot, intimate love story) while keeping orientation and stakes coherent.",
        "If your writing overcommits to one register, explains meaning instead of dramatizing it, or loses control crossing realism/fantastic, this novel demonstrates a durable method: structure carries meaning and tone is managed by narrative rules and scene design.",
      ],
      technicalBreakdown: [
        {
          heading: "Braided architecture with controlled convergence",
          body: [
            "The Moscow strand operates as satirical exposure machine, Yershalaim as moral gravity well, and Master/Margarita as emotional adhesive.",
            "The mechanic is structural rhyming, not simple alternation: repeated motifs, echoed situations, and parallel moral pressure make cuts feel continuous.",
          ],
          takeaway:
            "Craft takeaway: assign each strand a distinct narrative function, then join seams with recurring motifs and parallel pressures.",
        },
        {
          heading: "Register control through narrator stance",
          body: [
            "Moscow sections use agile, wry social narration; Yershalaim tightens into sober, stripped moral contemplation.",
            "Tone shift is often syntax/stance shift: rhythm, descriptive density, and ironic distance change by strand.",
            "Absurdity stays weighty because it is anchored in behavioral realism (posturing, panic, conformity, opportunism).",
          ],
          takeaway:
            "Craft takeaway: to move between comedy and metaphysics, change narrative distance/cadence and keep character behavior socially legible.",
        },
        {
          heading: "Grotesque set pieces built from concrete micro-detail",
          body: [
            "Spectacles work through choreography (entrances, reveals, reversals, crowd contagion, abrupt exits).",
            "Minute specificity creates a factual aura that makes impossible events feel reportable.",
            "The grotesque functions as pressure system, forcing characters/readers to choose among competing realities.",
          ],
          takeaway:
            "Craft takeaway: in surreal/fantastic scenes, do not go vague—precision in logistics and physical detail makes moral consequences believable.",
        },
      ],
      criticalVerification: [
        {
          label: "B. Blake on satire, grotesque, and precision of detail",
          url: "https://www.masterandmargarita.eu/estore/pdf/emen048_blake.pdf",
        },
        {
          label: "M.L.D. Kennedy on grotesque destabilization and shifting realities",
          url: "https://libres.uncg.edu/ir/unca/f/M_Kennedy_When_2016.pdf",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read with one strict lens: chapter-to-chapter cutting technique.",
        "At each strand transition, mark (1) last image/idea outgoing, (2) first image/idea incoming, (3) bridge motif/question/behavior/object making the cut inevitable.",
        "Separately, underline each hyper-specific description of something impossible—those are load-bearing joints that make the grotesque persuasive.",
      ],
    },
  },
  {
    id: "wind-up-bird-chronicle",
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/118727/the-wind-up-bird-chronicle-by-haruki-murakami/",
    imageUrl: "https://images1.penguinrandomhouse.com/cover/9780679775430",
    category: "Expansive Novel Systems",
    summary:
      "A practical blueprint for sustaining mystery pressure across drift, modular formats, and uncanniness.",
    content: {
      writersCase: [
        "The Wind-Up Bird Chronicle is a practical blueprint for writing a long novel that stays gripping while refusing the usual engines (tight causality, continuous action, clean answers).",
        "The core craft problem it solves is sustaining narrative compulsion through drift—domestic routine, episodic encounters, documentary inserts—while still producing the felt pressure of mystery.",
        "Murakami’s method is transferable: a soft surface plot with hard question-management, modular scene design, and motif-based cohesion.",
      ],
      technicalBreakdown: [
        {
          heading: "Suspense by micro-perturbation",
          body: [
            "The novel begins in procedural mundanity (meals, errands, idle time) and turns routine into tension rather than dead air.",
            "Recurring scene pattern: ordinary task → minor anomaly → conversational intrusion → unresolved residue.",
            "That residue (name, threat, fragment, physical marker) creates forward pull without requiring chase-plot escalation.",
          ],
          takeaway:
            "Writerly takeaway: you do not need constant events; you need a steady drip of interpretive problems that keep reframing what the novel is about.",
        },
        {
          heading: "Dossier structure as structural ballast",
          body: [
            "Murakami alternates real-time first-person drift, embedded testimonies, letters, and document-like modules.",
            "Format shifts redistribute authority: the protagonist receives while other voices supply density, horror, and historical pressure.",
            "Temporal ambiguity (what arrives when, what counts as evidence) sustains mystery without conventional clue-chaining.",
          ],
          takeaway:
            "Writerly takeaway: let each narrative format do a specific job—confess, prove, unsettle, densify, redirect, historicize, moralize.",
        },
        {
          heading: "Motif-based cohesion instead of tight plotting",
          body: [
            "Recurrence system (wells, birdsong, water, marks, rooms/corridors, music, missingness) acts as structural glue, not decorative symbolism.",
            "Deadpan, reportorial sentence control keeps surreal content readable and prevents tonal collapse.",
          ],
          takeaway:
            "Writerly takeaway: for uncanny fiction, keep narration behaviorally literal; let recurrence and placement build meaning.",
        },
      ],
      criticalVerification: [
        {
          label: "Tim Gingrich on deliberate fragmentation and motif-based unity",
          url: "https://www.literatureandscience.org/wp-content/uploads/2020/09/GINGRICH-FINAL.pdf",
        },
        {
          label: "Keiko Maynard on omitted/rearranged material in the English edition",
          url: "https://www.uog.edu/_resources/files/schools-and-colleges/college-of-liberal-arts-and-social-sciences/maynard_lost-chapters-wind-up-bird.pdf",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read with one lens: chapter-by-chapter question management across format shifts.",
        "At each chapter break, note: active question, newly introduced residue, and withheld explanation.",
        "Mark every mode switch (testimony/letter/document/real-time narration) and label each module’s job in one verb.",
      ],
    },
  },
  {
    id: "jane-eyre",
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/18823/jane-eyre-by-charlotte-bronte/",
    imageUrl: "https://images1.penguinrandomhouse.com/cover/9780307455192",
    category: "First-Person Architecture",
    summary:
      "A blueprint for first-person narration that is intimate in voice but architected for long-range structural control.",
    content: {
      writersCase: [
        "Jane Eyre is essential for learning how to write a first-person life narrative that feels both intimate and architected—a voice close enough to generate heat, but disciplined enough to build long-range structure.",
        "The specific craft problem it solves is how to turn interior conviction into plot without turning the novel into a diary or a thesis.",
        "Brontë’s novel is a toolkit for retrospective first-person control, genre oscillation without incoherence, and a Bildungsroman built from pressure environments that force the protagonist to choose a self.",
      ],
      technicalBreakdown: [
        {
          heading: "Autodiegetic narration with double-vision (experiencing-self vs narrating-self)",
          body: [
            "Jane’s ‘I’ runs in two temporal registers: the younger self in-scene and the older narrator shaping judgment, irony, and suspense.",
            "Brontë compresses time when she wants moral pattern and expands into scene when she wants confrontation through dialogue, sensory detail, and choice.",
            "Direct address (‘Reader…’) works as a narrative-distance lever: intimacy when alignment is needed, explicit constructedness when persuasion is foregrounded.",
          ],
          takeaway:
            "Craft takeaway: pace first-person novels by alternating retrospective summary with high-pressure scene, and use reader-address strategically to calibrate distance.",
        },
        {
          heading: "Genre as structural rhythm (realism anchored, Gothic deployed, then re-anchored)",
          body: [
            "The novel uses Gothic apparatus—confinement, thresholds, uncanny sound/light, secret history—to externalize social power as lived physical pressure.",
            "Brontë stabilizes those intensities with a concrete, evaluative narratorial stance so dread rises without collapsing trust in the storyteller.",
            "This creates a transferable method: borrow high-voltage genre energy while preserving realist authority through consistent voice control.",
          ],
          takeaway:
            "Craft takeaway: keep narration behaviorally consistent, then let setting and event volatility supply tonal lift.",
        },
        {
          heading: "Confrontation scenes as moral tests (dialogue as ethical action)",
          body: [
            "Major dialogue sequences are value collisions, not only romantic exchanges; characterization emerges through what Jane refuses or concedes under pressure.",
            "Asymmetric power structures (class, gender, money, institutional authority) are staged so speech acts—refusal, clarification, boundary setting—carry action.",
            "Long-plot coherence comes from repeated design: each setting installs a new authority system, then scenes force a choice between belonging and self-definition.",
          ],
          takeaway:
            "Craft takeaway: if you want interiority to generate plot, build recurrent pressure scenes where language choices have social cost.",
        },
      ],
      criticalVerification: [
        {
          label: "Oxford Faculty of English on retrospective Bildungsroman stance and realism/Gothic blend",
          url: "https://www.english.ox.ac.uk/ten-minute-book-club/bronte-jane-eyre",
        },
        {
          label: "Jessica Cox on genre oscillation in Jane Eyre",
          url: "https://epi-revel.univ-cotedazur.fr/cycnos/311.pdf",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read with one lens: narrative distance as a pacing tool.",
        "In every chapter, mark S for summary (time compression), C for full scene (dialogue + physical space), and R for reader-management (direct address, overt retrospection, editorial selection).",
        "Write one sentence per chapter: what moral claim the narration made, and which scene detail functioned as proof.",
      ],
    },
  },
  {
    id: "frankenstein",
    title: "Frankenstein, or the Modern Prometheus",
    author: "Mary Shelley",
    purchaseUrl:
      "https://www.penguinrandomhouse.com/books/165577/frankenstein-by-mary-shelley-introduction-by-jeanette-winterson/",
    imageUrl: "https://images1.penguinrandomhouse.com/cover/9780307743312",
    category: "First-Person Architecture",
    summary:
      "A masterclass in staging ethical argument through narrative structure, competing testimony, and sympathy control.",
    content: {
      writersCase: [
        "Frankenstein is direct instruction for one central craft problem: how to stage ethical argument through narrative mechanics rather than authorial explanation.",
        "Shelley forces readers to adjudicate competing testimonies, making moral judgment an active part of reading instead of a supplied conclusion.",
        "The novel is especially useful when thematic fiction feels static, first-person voices flatten ambiguity, or sympathy control is too blunt.",
      ],
      technicalBreakdown: [
        {
          heading: "Frame narration as moral pressure (testimony, mediation, controlled reliability)",
          body: [
            "The Walton → Victor → Creature stack functions as an accountability system in which each narrator has stakes in how events are framed.",
            "Focalization shifts from Victor’s loaded perceptual language to the Creature’s own account, creating a structural sympathy pivot in real time.",
            "Letters compress time while confessions expand it, giving Shelley elastic pacing between scope and confrontation without losing drive.",
          ],
          takeaway:
            "Craft takeaway: for moral complexity, write competing narrative performances and let readers judge between them.",
        },
        {
          heading: "Characterization through rhetoric (syntax and diction as moral behavior)",
          body: [
            "Victor often uses abstraction, destiny language, and emotional nouns that diffuse agency even when narrating his own decisions.",
            "The Creature builds authority through observational reasoning (observation → inference → desire → thwarting → adaptation), not pure plea.",
            "Embedded human stories act as calibration devices, teaching both the Creature and the reader how empathy and judgment are learned.",
          ],
          takeaway:
            "Craft takeaway: encode narrator ethics in grammar and naming habits—what gets stated clearly versus blurred into inevitability.",
        },
        {
          heading: "Deferred confrontation as propulsion (obligation, delay, pursuit)",
          body: [
            "Shelley repeatedly plants obligations and writes the dread-producing gap between knowing what must be faced and refusing to face it.",
            "The novel alternates argument scenes (plea, confession, negotiation) with movement sequences (flight, travel, chase) as structural breath control.",
            "The pursuit endgame physicalizes responsibility: ethics becomes geography and plot velocity becomes unavoidable.",
          ],
          takeaway:
            "Craft takeaway: idea-driven fiction gains speed when every scene either increases obligation or reveals the cost of evasion.",
        },
      ],
      criticalVerification: [
        {
          label: "Beth Newman on frame narration as a seductive structure of persuasion",
          url: "https://www.jstor.org/stable/2873151",
        },
        {
          label: "Anne K. Mellor on gender, creation, and narrative presence/absence in Frankenstein",
          url: "https://cpb-us-w2.wpmucdn.com/blogs.cofc.edu/dist/e/748/files/2015/01/Mellor-1vhx09r.pdf",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read with one lens: agency tracking through narration.",
        "Mark A for explicit agency (‘I did / I chose / I refused’), D for displaced agency (passive, fate language, euphemism), and H for narration handoffs.",
        "After each major section, write one sentence: what this narrator asks to be forgiven, then cite the D-marked sentences doing that work.",
      ],
    },
  },
  {
    id: "the-beach",
    title: "The Beach",
    author: "Alex Garland",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/348300/the-beach-by-alex-garland/",
    imageUrl: "https://images2.penguinrandomhouse.com/cover/9781573226523",
    category: "First-Person Architecture",
    summary:
      "A model for writing fast first-person suspense that sustains social critique through closed-community pressure mechanics.",
    content: {
      writersCase: [
        "The Beach shows how to build a high-velocity first-person novel that reads like a thriller while delivering social critique.",
        "Its core craft problem is how to keep narrative compulsion alive after characters arrive at the destination where many utopia/travel premises stall.",
        "Garland’s solution is mechanical: media-literate voice, pressure-cooker community design, and a controlled reliability slide that escalates intensity without tonal rupture.",
      ],
      technicalBreakdown: [
        {
          heading: "Voice as propulsion (media-coded perception turned into action)",
          body: [
            "The narrator filters perception through war-film, game, and cinematic templates, converting observation into quest logic.",
            "Risk is repeatedly reframed as narrative opportunity, which generates momentum even when external action is minimal.",
            "Voice becomes structural: it decides what counts as salient, what gets skipped, and what is framed as imminent.",
          ],
          takeaway:
            "Craft takeaway: let diction and interpretive habit supply forward motion, not just stylistic flavor.",
        },
        {
          heading: "Threshold-based structure (travelogue → enclave → governance crisis)",
          body: [
            "The novel is built on threshold crossings that reduce world size and increase social pressure.",
            "Once inside the enclave, pacing shifts from mobility episodes to systems scenes about rules, roles, scarcity, and enforcement.",
            "Arrival functions as midpoint: suspense relocates from destination-seeking to collective rationalization under stress.",
          ],
          takeaway:
            "Craft takeaway: make arrival the start of systems conflict, so setting converts directly into plot.",
        },
        {
          heading: "Group psychology as plot engine (maintenance decisions drive collapse)",
          body: [
            "Conflict grows through community maintenance choices—exclusion, secrecy, punishment, rationing, narrative control—rather than a single villain.",
            "Collective complicity allows escalation to feel earned, with each compromise framed as preserving paradise.",
            "The resulting tension is not only ‘what happens next’ but ‘what this group will justify next.’",
          ],
          takeaway:
            "Craft takeaway: in closed-community suspense, plot each scene as either obligation maintenance or moral cost accrual.",
        },
      ],
      criticalVerification: [
        {
          label: "Kirkus review on the novel’s anti-travelogue/thriller/small-group psychology hybrid",
          url: "https://www.kirkusreviews.com/book-reviews/alex-garland/the-beach/",
        },
        {
          label: "Alex Tickell on postcolonial dynamics and representation in The Beach",
          url: "https://oro.open.ac.uk/28761/",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read with one lens: pressure mechanics in a closed community.",
        "Annotate every use of genre language (war/movie/game logic), every maintenance decision, and every shift from place-description to governance.",
        "End each chapter with a five-word answer to: what did the community just trade away?",
      ],
    },
  },
  {
    id: "the-pillowman",
    title: "The Pillowman",
    author: "Martin McDonagh",
    purchaseUrl: "https://bookshop.org/p/books/the-pillowman-martin-mcdonagh/10255195",
    imageUrl: "https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/The%20Pillowman.jpg",
    category: "Playwriting Mechanics",
    summary:
      "A study in embedding stories inside interrogation drama so structure, suspense, and theme all move as one engine.",
    content: {
      writersCase: [
        "The Pillowman is essential study for any writer trying to fuse story-within-story structure with sustained suspense while keeping tonal control under extreme material.",
        "McDonagh solves a difficult craft problem: how to let embedded fiction (Katurian’s fairy tales) function simultaneously as (1) character revelation, (2) plot evidence in a procedural frame, and (3) a thematic argument about art’s complicity—without collapsing into didacticism or anthology drift.",
        "The play is also a clinic in writing interrogation scenes that don’t stall: every exchange escalates stakes, reassigns power, and forces the audience to reinterpret what they thought they knew two minutes earlier.",
      ],
      technicalBreakdown: [
        {
          heading: "Structural braiding: procedural frame + embedded tales as engine, not decoration",
          body: [
            "McDonagh doesn’t ‘pause’ the plot to tell stories; he uses the stories as active turns in the investigation.",
            "Mechanically, each tale is positioned at a moment where the police need leverage and Katurian needs identity.",
            "That alignment makes every story perform double duty: it is text (a thing that can be quoted, misread, weaponized) and action (a move that changes how the interrogators behave).",
            "The crucial craft move is that the embedded stories arrive with consequences in the room—a shift in what evidence ‘means,’ a change in who is believed, a new threat vector.",
          ],
          takeaway:
            "Writerly takeaway: the difference between inset material as atmosphere and inset material as plot torque is immediate scene consequence.",
        },
        {
          heading: "Controlled unreliability via confession logic, not POV tricks",
          body: [
            "The play achieves unreliability without gimmicky narration because it’s built on confession economics: who benefits from telling which version, at what moment, to which listener.",
            "In interrogation writing, the ‘truth’ is never just information; it’s a bargaining chip.",
            "McDonagh structures revelations as transactional offers (I’ll give you X if you give me Y), then repeatedly invalidates those offers when a new fact reframes the prior bargain.",
            "This produces a rolling recalibration of narrative distance: we are close to Katurian when he defends art, then yanked back when the play exposes what that defense costs.",
          ],
          takeaway:
            "Writerly takeaway: steer audience sympathy scene-by-scene through incentives and exchanged leverage, not explanatory monologue.",
        },
        {
          heading: "Tonal counterpoint: deadpan comedy as pacing regulator under atrocity",
          body: [
            "The play’s humor isn’t there to ‘relieve’ tension; it’s a metering device that keeps the audience inside scenes that would otherwise numb them.",
            "McDonagh writes comedic beats with hard timing: short clauses, blunt vocabulary, quick reversals, and deliberately banal objections inside horrific contexts.",
            "He also uses the double-act dynamic between interrogators to create rhythmic alternation: one voice escalates threat, the other punctures it with procedure, sarcasm, or casual cruelty.",
            "This alternation is a practical technique for writers handling high-intensity material: comedy becomes tempo control, preventing a monotone of dread.",
          ],
          takeaway:
            "Writerly takeaway: comedy can function as tempo architecture, keeping scenes legible and propulsive without lowering stakes.",
        },
      ],
      criticalVerification: [
        {
          label:
            "Michael Billington (The Guardian) on the play as an argument about the dangerous power of literature",
          url: "https://www.theguardian.com/stage/2003/nov/14/theatre",
        },
        {
          label:
            "Kelley Shermeyer (De Gruyter) on children, futurity, tragedy, and fairy-tale pressure in The Pillowman",
          url: "https://www.degruyterbrill.com/document/doi/10.1515/jcde-2019-0026/html",
        },
      ],
      readingDirective: [
        "Buy a physical copy and read it with one narrow lens: track every moment an embedded story changes the power balance in the interrogation room.",
        "Mark (a) what the interrogators gain by hearing the story, (b) what Katurian is trying to buy with it, and (c) what immediate behavioral shift follows.",
        "You’re studying how to make backstory and theme operate as scene actions—the core skill that makes this play a practical craft investment rather than a mere provocation.",
      ],
    },
  },
];

export default function ReadingLikeAWriterPage() {
  const [query, setQuery] = useState("");
  const [openBookId, setOpenBookId] = useState<string | null>(null);

  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return bookLectures;

    return bookLectures.filter((book) => {
      const haystack = [book.title, book.author, book.category, book.summary].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  const groupedBooks = useMemo(() => {
    return filteredBooks.reduce<Record<string, BookLecture[]>>((acc, book) => {
      if (!acc[book.category]) acc[book.category] = [];
      acc[book.category].push(book);
      return acc;
    }, {});
  }, [filteredBooks]);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-10 space-y-5">
        <h1 className="text-center font-display text-4xl font-extrabold tracking-tight md:text-5xl">Read Like a Writer</h1>
        <div className="rounded-2xl border border-border bg-surface-1 p-5 md:p-6">
          <h2 className="font-ui text-lg font-bold">How to use this page</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 font-body text-sm leading-relaxed text-ink/85 dark:text-text/85 md:text-base">
            <li>Use the search bar to find books by title, author, or craft category.</li>
            <li>Browse books under category headers so related craft studies stay grouped.</li>
            <li>Click any book card to open its full lecture, then close it and continue.</li>
          </ol>
        </div>

        <label htmlFor="book-search" className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50 dark:text-text/50" />
          <input
            id="book-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, or category..."
            className="w-full rounded-full border border-border bg-canvas px-11 py-3 font-ui text-sm text-ink dark:bg-canvasDark dark:text-text"
          />
        </label>
      </header>

      <div className="space-y-10">
        {Object.entries(groupedBooks).map(([category, books]) => (
          <section key={category} className="space-y-4">
            <h2 className="border-b border-border pb-2 font-display text-2xl font-bold">{category}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => {
                const isOpen = openBookId === book.id;

                return (
                  <article
                    key={book.id}
                    className="overflow-hidden rounded-2xl border border-border bg-surface-1 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenBookId(isOpen ? null : book.id)}
                      className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
                      aria-expanded={isOpen}
                      aria-controls={`lecture-${book.id}`}
                    >
                      <div className="aspect-[4/5] w-full bg-gray-100 dark:bg-gray-800">
                        <img src={book.imageUrl} alt={`Cover of ${book.title}`} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="space-y-2 p-4">
                        <p className="font-display text-xl font-bold leading-tight">{book.title}</p>
                        <p className="font-ui text-sm text-ink/70 dark:text-text/70">{book.author}</p>
                        <p className="font-body text-sm text-ink/80 dark:text-text/80">{book.summary}</p>
                        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-accent">
                          {isOpen ? "Hide Lecture" : "Open Lecture"}
                        </p>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>

            {books.map((book) => {
              if (openBookId !== book.id) return null;

              return (
                <article
                  key={`${book.id}-lecture`}
                  id={`lecture-${book.id}`}
                  className="rounded-2xl border border-border bg-canvas p-6 md:p-8 dark:bg-canvasDark"
                >
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-bold">{book.title}</h3>
                      <p className="font-ui text-base text-ink/75 dark:text-text/75">{book.author}</p>
                    </div>
                    <a
                      href={book.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-ink px-5 py-2 font-ui text-sm font-bold text-canvas no-underline transition-opacity hover:opacity-90 dark:bg-text dark:text-bg"
                    >
                      Book Link
                    </a>
                  </div>

                  <section className="mb-6 space-y-3">
                    <h4 className="font-display text-2xl font-bold">The Writer&apos;s Case</h4>
                    {book.content.writersCase.map((paragraph) => (
                      <p key={paragraph} className="font-body leading-relaxed text-ink/90 dark:text-text/90">
                        {paragraph}
                      </p>
                    ))}
                  </section>

                  <section className="mb-6 space-y-5">
                    <h4 className="font-display text-2xl font-bold">Technical Breakdown</h4>
                    {book.content.technicalBreakdown.map((section) => (
                      <div key={section.heading} className="space-y-2 rounded-xl border border-border bg-surface-1 p-4">
                        <h5 className="font-ui text-lg font-bold">{section.heading}</h5>
                        <ul className="list-disc space-y-1 pl-5 font-body text-sm leading-relaxed text-ink/90 dark:text-text/90 md:text-base">
                          {section.body.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                        <p className="font-body text-sm font-semibold text-ink/90 dark:text-text/90 md:text-base">{section.takeaway}</p>
                      </div>
                    ))}
                  </section>

                  <section className="mb-6 space-y-2">
                    <h4 className="font-display text-2xl font-bold">Critical Verification</h4>
                    <ul className="list-disc space-y-2 pl-5 font-body text-ink/90 dark:text-text/90">
                      {book.content.criticalVerification.map((link) => (
                        <li key={link.url}>
                          {link.label}:{" "}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-accent underline underline-offset-2"
                          >
                            {link.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-display text-2xl font-bold">The Reading Directive</h4>
                    <ul className="list-disc space-y-2 pl-5 font-body text-ink/90 dark:text-text/90">
                      {book.content.readingDirective.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </section>
                </article>
              );
            })}
          </section>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center font-body text-ink/75 dark:text-text/75">
          No books matched your search. Try another keyword.
        </div>
      )}
    </div>
  );
}
