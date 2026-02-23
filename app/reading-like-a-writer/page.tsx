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
