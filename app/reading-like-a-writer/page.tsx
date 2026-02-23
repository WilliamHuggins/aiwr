/* eslint-disable @next/next/no-img-element */

export default function ReadingLikeAWriterPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <header className="mb-10 space-y-4 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Reading Like A Writer</h1>
        <p className="font-body text-lg text-ink/80 dark:text-text/80">
          A focused craft study page for learning from <em>Nine Stories</em> by J.D. Salinger.
        </p>
      </header>

      <section className="mb-10 rounded-2xl border border-border bg-surface-1 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
          <img
            src="https://www.hachettebookgroup.com/wp-content/uploads/2017/06/9780316769501.jpg?resize=635,1024"
            alt="Nine Stories by J.D. Salinger"
            className="mx-auto w-full max-w-[220px] rounded-lg object-cover shadow-md"
          />
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold">Nine Stories</h2>
            <p className="font-ui text-base text-ink/80 dark:text-text/80">J.D. Salinger</p>
            <a
              href="https://www.hachettebookgroup.com/titles/j-d-salinger/nine-stories/9780316769501/?lens=little-brown"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-glow px-5 py-2 font-ui text-sm font-bold text-ink no-underline transition-transform hover:scale-105"
            >
              View Book
            </a>
          </div>
        </div>
      </section>

      <article className="space-y-8 font-body leading-relaxed text-ink/90 dark:text-text/90">
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">Mini-Lesson</h2>
          <p>
            <em>Nine Stories</em> is not one skill; it&apos;s a calibrated set of demonstrations for three hard craft
            problems that sink otherwise competent writers:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Subtext that actually reads (not vague “tension,” but measurable topic control, evasion patterns, and
              power exchange).
            </li>
            <li>
              Narrative distance that can carry tenderness, satire, and dread without explanation (voice as a control
              surface, not decoration).
            </li>
            <li>
              Meaning made from “smallness”—gesture, objects, and structural framing doing the work most writers dump
              into backstory or editorial commentary.
            </li>
          </ul>
          <p>
            If you want the least generic way to study it: treat specific stories as single-purpose craft machines—
            each one isolates a mechanism and runs it at high efficiency.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">Technical Breakdown</h2>

          <div className="space-y-3">
            <h3 className="font-ui text-xl font-bold">
              1) Dialogue as an inference engine (subtext built from topic control, not “mysterious” lines)
            </h3>
            <p>
              <strong>Primary study texts:</strong> “Pretty Mouth and Green My Eyes,” “Down at the Dinghy,” plus the
              tonal counterpoint in “A Perfect Day for Bananafish.”
            </p>
            <p>
              <strong>What to watch, concretely:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Evasion architecture:</strong> questions answered with questions; reassurance replacing
                information; topic swaps at the exact moment a truth would surface. In “Pretty Mouth…,” the scene&apos;s
                motion is essentially topic management—who gets to define what the conversation is “about.”
              </li>
              <li>
                <strong>Power exchange via micro-moves:</strong> interruptions, false agreement, overpolite phrasing,
                sudden intimacy, sudden formality. Salinger makes power visible without narrating it.
              </li>
              <li>
                <strong>Behavioral beats as exposition substitutes:</strong> instead of “he was nervous,” you get the
                conversational equivalent—overexplaining, repeating, soothing, pushing for confirmation. You can
                diagram the conflict without ever being told the conflict.
              </li>
            </ul>
            <p>
              <strong>How to use this in your own work:</strong> write the dialogue so every line performs a social
              function (placate, probe, deflect, dominate), then let the reader infer the unsaid.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-ui text-xl font-bold">
              2) Distance modulation and voice as symptom (how to get emotion without confession)
            </h3>
            <p>
              <strong>Primary study texts:</strong> “For Esmé—with Love and Squalor,” “De Daumier-Smith&apos;s Blue Period.”
            </p>
            <p>
              <strong>What to watch:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Selective interiority:</strong> you&apos;re given just enough access to feel the narrator&apos;s
                vulnerability, but not enough to dissolve the story into explanation.
              </li>
              <li>
                <strong>Tone held under constraint:</strong> “De Daumier-Smith…” shows how comedy can coexist with pain
                by keeping the narrator&apos;s self-presentation active—voice as a mask that slips in controlled
                increments.
              </li>
              <li>
                <strong>Diction shifts as structural signals:</strong> in “For Esmé…,” the change in register is not a
                style flourish; it&apos;s how the story moves time and damage onto the page without lectures.
              </li>
            </ul>
            <p>
              <strong>How to use this:</strong> stop trying to “share emotion” directly. Instead, let emotion appear as
              constraint on language—what the narrator can&apos;t quite say cleanly, what they overcontrol, where the
              prose tightens or flattens.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-ui text-xl font-bold">
              3) Meaning carried by gesture and structure (small physical acts + framing doing the heavy lifting)
            </h3>
            <p>
              <strong>Primary study texts:</strong> “The Laughing Man,” with “Teddy” as the idea-heavy stress test.
            </p>
            <p>
              <strong>What to watch:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Frame narrative that isn&apos;t ornamental:</strong> “The Laughing Man” uses the frame to pressure
                the embedded story; the act of telling becomes part of the plot&apos;s emotional machinery.
              </li>
              <li>
                <strong>Gesture as load-bearing detail:</strong> the collection repeatedly replaces explanation with
                hands, objects, tics, posture, etiquette—the physical world acting as the story&apos;s emotional syntax.
              </li>
              <li>
                <strong>Ideas kept alive by social abrasion:</strong> in “Teddy,” the talk never becomes a free-floating
                essay because it&apos;s constantly tethered to status, provocation, adult incompetence, and proximity to
                danger.
              </li>
            </ul>
            <p>
              <strong>How to use this:</strong> when you feel tempted to explain motive, ask what gesture (physical or
              verbal) could carry the same information more forcefully—and where a structural device (frame, letter,
              story-within-story) could externalize what your narrator can&apos;t state.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">Critical Verification</h2>
          <p>
            Donaldson&apos;s article explicitly frames <em>Nine Stories</em> as a system where physical, verbal, and
            symbolic gestures do major narrative work, and he treats dialogue itself as “gestural” rather than merely
            informational.
          </p>
          <p>
            <a href="https://journals.openedition.org/jsse/3624" target="_blank" rel="noopener noreferrer">
              https://journals.openedition.org/jsse/3624
            </a>
          </p>
          <p>
            Meloy&apos;s <em>New Yorker</em> piece is useful not as scholarship but as a practitioner&apos;s confirmation of how
            different stories become “dominant” on reread—she points to specific stories (“De Daumier-Smith…,”
            “Pretty Mouth…,” “Teddy,” “The Laughing Man”) and emphasizes how the collection teaches what a story
            collection can be structurally.
          </p>
          <p>
            <a href="https://www.newyorker.com/books/page-turner/nine-stories-j-d-salinger" target="_blank" rel="noopener noreferrer">
              https://www.newyorker.com/books/page-turner/nine-stories-j-d-salinger
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold">The Reading Directive</h2>
          <p>
            Buy a physical copy and read it as a craft workbook in this order: “Pretty Mouth…” → “For Esmé…” → “The
            Laughing Man” (then circle back to “Bananafish,” “Down at the Dinghy,” and “Teddy” to see the same
            mechanics under different pressures).
          </p>
          <p>Use one concrete lens while reading: replace “meaning” with “mechanism.” On the page, do three marks only:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>E</strong> next to every evasion move in dialogue (question answered with question, topic change,
              reassurance, forced joking).
            </li>
            <li>
              <strong>G</strong> next to every gesture/object beat that appears where exposition “should” be.
            </li>
            <li>
              <strong>D</strong> where you feel narrative distance shift (sudden intimacy, sudden coolness, tonal
              hardening/softening).
            </li>
          </ul>
          <p>
            After each story, write one sentence in your margin: What does the story refuse to say directly, and which
            E/G/D moves carried that refusal? That&apos;s the transferable skill set this book trains.
          </p>
        </section>
      </article>
    </div>
  );
}
