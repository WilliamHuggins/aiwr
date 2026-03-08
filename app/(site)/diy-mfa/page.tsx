import Link from "next/link";

const semesterOneWeeks = Array.from({ length: 18 }, (_, index) => index + 1);
const semesterTwoWeeks = Array.from({ length: 18 }, (_, index) => index + 19);
const yearTwoSemesterOneWeeks = Array.from({ length: 18 }, (_, index) => index + 1);
const yearTwoSemesterTwoWeeks = Array.from({ length: 18 }, (_, index) => index + 19);
const yearThreeSemesterOneWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function DiyMfaHome() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">DIY MFA</p>
      <h1 className="mt-4 font-mfa-display text-5xl md:text-6xl">The DIY MFA</h1>
      <p className="mt-4 text-xl text-muted">A Self-Paced, AI-Integrated Three-Year Writing Program</p>

      <div className="mt-8">
        <Link
          href="https://notebooklm.google.com/notebook/39f21c5c-d204-4ed3-a263-5f0ea16b7e5c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md border border-accent px-5 py-2 font-medium text-accent no-underline transition hover:bg-indigo-50"
        >
          Get help from the AIWR Helper
        </Link>
      </div>

      <div className="mt-10 space-y-8 text-base leading-8 text-foreground">
        <p>
          Most writers who want serious craft training face the same impossible choice: a residential MFA costs $40,000–$80,000,
          demands two years of full-time attendance, and requires uprooting your life. Or you do it alone — with books and willpower
          and no one to answer to — and most of the time, the project quietly dissolves.
          <br />
          The DIY MFA is the third option.
          <br />
          It is a complete, structured, three-year writing curriculum — 108 weeks of sequenced craft study, weekly exercises, curated
          reading, and thesis development — designed for writers who are serious about the work but cannot or choose not to attend a
          traditional program. It is rigorous without being institutional. Self-paced without being unsupervised. And it uses AI —
          intelligently, deliberately, as a craft tool rather than a shortcut — in ways that no traditional program currently does.
        </p>

        <div>
          <h2 className="font-mfa-display text-3xl">What it covers</h2>
          <p className="mt-4">
            The program runs across three years and three parallel tracks: Literary Fiction, Screenwriting &amp; Playwriting, and Creative
            Nonfiction &amp; Memoir. You choose your primary track at the start and follow it through to a completed thesis manuscript at the
            end.
          </p>
          <p className="mt-4">
            Year One builds the foundation: the craft concepts that every serious writer needs regardless of genre — scene construction,
            characterization, dialogue, point of view, structure, voice, imagery, pacing. The grammar curriculum begins here too,
            working through 60 sequenced sentence-level topics across three years, because the sentence is where literary craft actually
            lives and most programs have stopped teaching it.
          </p>
          <p className="mt-4">
            Year Two advances into specialization: experimental and hybrid forms, subtext, time manipulation, nonlinear structure,
            advanced revision, the long-form manuscript&apos;s specific problems. The thesis proposal is written in Week 12. Professional
            development — the publishing landscape, the artist&apos;s statement, the query letter — is woven into the fall semester. Spring
            semester shifts the structure entirely: the thesis becomes the primary work, and the craft curriculum reorganizes to serve it.
          </p>
          <p className="mt-4">
            Year Three is completion: intensive revision at scale, voice synthesis, the full professional submission package, the public
            reading, the defense. The grammar curriculum reaches its final phase. The thesis manuscript is finished.
          </p>
        </div>

        <div>
          <h2 className="font-mfa-display text-3xl">What makes it different</h2>
          <p className="mt-4">
            The grammar curriculum. 60 sequenced topics across three years, from kernel sentences and sentence types through the full
            toolkit of rhetorical figures (anaphora, chiasmus, parataxis, asyndeton), punctuation as craft (the em dash&apos;s three
            functions, the semicolon as implied argument, the comma splice as deliberate style choice), and word-level diction —
            Latinate versus Anglo-Saxon, nominalization as prose killer, the verb as the sentence&apos;s engine. Most MFA programs stopped
            teaching sentence-level craft in the 1980s. This one treats it as foundational, because it is.
          </p>
          <p className="mt-4">
            The AI integration. 28 structured AI exercises, sequenced across three years, that use AI the way a workshop uses peer
            feedback and a craft teacher uses close reading — as a rigorous external perspective, not as a ghostwriter. The Voice
            Transplant. The Bias Detector. The Workshop Letter Comparison. The Consultation Simulation. Each exercise is designed to use
            AI&apos;s specific capabilities (reading for patterns, simulating reader responses, generating structural diagnoses) while guarding
            against its specific failures (generic praise, cultural blind spots, the flattening of distinctive voice).
          </p>
          <p className="mt-4">
            The session log. Every thesis session — from the first draft pages in Year One Week 36 through the final revision in Year
            Three — is documented in a running session log: pre-session objective, word count, what happened, what surprised, next
            session&apos;s objective. Over three years it becomes the most accurate available record of how the thesis was made.
          </p>
          <p className="mt-4">
            The cross-genre architecture. Every week teaches across all three tracks simultaneously. The craft concept of the week is
            introduced in a main lecture, then translated into each track&apos;s specific problems and model texts. The cross-genre synthesis
            weeks bring all three tracks into direct dialogue on shared questions — the ethics of representation, the relationship between
            form and content, the problem of voice — because the most important craft insights travel between forms.
          </p>
        </div>

        <div>
          <h2 className="font-mfa-display text-3xl">What you produce</h2>
          <p className="mt-4">By the end of three years:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>A completed, polished thesis manuscript — a novel draft, a feature screenplay or stage play, or a book-length memoir</li>
            <li>A thesis proposal and publishing plan (Year Two)</li>
            <li>An artist&apos;s statement and query letter or pitch document</li>
            <li>A teaching portfolio including a statement of teaching philosophy and sample course syllabi</li>
            <li>A full submission package ready to send to agents, editors, fellowships, or production companies</li>
            <li>Approximately 55,000–90,000 words of writing produced across Years One and Two alone, not counting the thesis</li>
          </ul>
        </div>

        <div>
          <h2 className="font-mfa-display text-3xl">How to use it</h2>
          <p className="mt-4">Each week contains seven elements, in this order:</p>
          <p className="mt-4">
            Craft lecture — the week&apos;s concept, developed in full, with examples and applications to the thesis. Cross-genre note — the
            concept translated into each track&apos;s specific problems. Grammar &amp; style — one topic from the 60-topic sequence, with
            examples, the rule, and a practice exercise. Core reading — two or three texts, with specific instructions for how to read
            them as a writer rather than a reader. Writing exercise — the week&apos;s primary craft exercise, with a word target and a specific
            analytical task. AI workshop — a structured AI exercise using a specific tool and a specific prompt, with four reflection
            questions. Journal prompt — a twenty-minute diagnostic writing prompt connected to the week&apos;s concept and the thesis in
            progress.
          </p>
          <p className="mt-4">
            Work through the weeks in sequence. The curriculum is designed to build on itself: every Phase 4 grammar topic assumes Phase
            3, every spring semester craft concept assumes the fall&apos;s foundation. The self-pacing is real — if a week requires more time,
            take more time — but the sequence matters.
          </p>
        </div>

        <div>
          <h2 className="font-mfa-display text-3xl">Who this is for</h2>
          <p className="mt-4">
            Writers who are serious about the work. Writers who have a project — or who need the structure of a program to find their
            project. Writers who are somewhere between &quot;I&apos;ve been meaning to write this for years&quot; and &quot;I have three hundred pages of a
            draft I don&apos;t know how to finish.&quot; Writers who want the rigor and the community and the craft instruction of an MFA without
            the cost, the geography, or the two-year full-time commitment.
          </p>
          <p className="mt-4">
            This is not a course. It is a program. The distinction is not semantic: a course ends; a program builds something. By Year
            Three, what is being built is a manuscript. The program exists to make that possible.
          </p>
          <p className="mt-4">Start with Week 1. Write the first sentence of the first exercise. The rest follows from that.</p>
        </div>
      </div>

      <div className="mt-16 space-y-10 text-left">
        <div>
          <h2 className="font-mfa-display text-5xl">Year One</h2>
          <h3 className="mt-6 font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester One</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {semesterOneWeeks.map((weekNumber) => (
              <Link key={weekNumber} href={`/diy-mfa/year-one/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
                Enter Week {weekNumber}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester 2</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {semesterTwoWeeks.map((weekNumber) => (
              <Link key={weekNumber} href={`/diy-mfa/year-one/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
                Enter Week {weekNumber}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-left">
        <h2 className="font-mfa-display text-5xl">Year Two</h2>
        <h3 className="mt-6 font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester One</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {yearTwoSemesterOneWeeks.map((weekNumber) => (
            <Link key={weekNumber} href={`/diy-mfa/year-two/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
              Enter Week {weekNumber}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 text-left">
        <h3 className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester Two</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {yearTwoSemesterTwoWeeks.map((weekNumber) => (
            <Link key={weekNumber} href={`/diy-mfa/year-two/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
              Enter Week {weekNumber}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 text-left">
        <h2 className="font-mfa-display text-5xl">Year Three</h2>
        <h3 className="mt-6 font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester One</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {yearThreeSemesterOneWeeks.map((weekNumber) => (
            <Link key={weekNumber} href={`/diy-mfa/year-three/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
              Enter Week {weekNumber}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
