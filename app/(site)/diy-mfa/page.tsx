import Link from "next/link";

const diyMfaCurriculum = [
  {
    year: "Year One: The Foundations",
    slug: "year-one",
    semesters: [
      {
        title: "Semester One: The Architecture of the Sentence and the Scene",
        weeks: [
          [1, "The Writing Process & Creative Practice", "Establish the infrastructure of a serious writing life and learn why volume precedes quality in your creative practice."],
          [2, "Image & Sensory Detail", "Discover the \"triggering subject\" and learn to unlock your writing through the power of concrete sensory detail."],
          [3, "Showing vs. Telling & Narrative Mode", "Master the delicate balance between scene and summary to create a narrative that is both vivid and efficient."],
          [4, "Scene Construction & The Turn", "Learn to identify and execute the \"turn\"—the essential moment in every scene where the ground shifts and everything changes."],
          [5, "The Concrete World", "Deepen your reliance on physical grounding, replacing abstract placeholders with images that make your readers feel."],
          [6, "Subtext & Implication", "Explore the gap between what characters say and what they mean to build tension and intimacy through subtext."],
          [7, "Point of View & The Filter", "Move beyond pronoun choice to understand POV as the filter of consciousness that determines what the reader can know."],
          [8, "Characterization & Indirect Revelation", "Stop describing your characters and start revealing them through the steady pressure of specific, inhabited detail."],
          [9, "Round, Flat & the Convincing Surprise", "Distinguish between flat and round characters to understand when your story needs a single note or a complex instrument."],
          [10, "Desire, Need & the Gap", "Map the generative gap between what a character consciously wants and what they unconsciously need."],
          [11, "Dialogue I: Realism & Subtext", "Learn to write dialogue that sounds like real speech while performing the structural work that actual conversation never does."],
          [12, "Dialogue II: Voice & Dialect", "Differentiate character voices through rhythm, vocabulary, and silence to create a scene of two distinct consciousnesses."],
          [13, "Setting I: Place as Character", "Treat setting as a participant rather than a backdrop, allowing place to shape psychology and carry thematic weight."],
          [14, "Setting II: World-Building & Research", "Build the \"iceberg\" of your world through research and invisible knowledge that makes your visible world feel real."],
          [15, "Cross-Genre Week: Space & Place", "Step across genre lines to see how different forms solve the problem of placing a reader in physical space."],
          [16, "Sustaining a Practice: The Middle Distance", "Navigate the \"messy middle\" of long projects and build the return-based practice required to finish what you start."],
          [17, "Interiority: FID & Psychic Distance", "Harness the novel's unique power of interiority through free indirect discourse and the calibration of psychic distance."],
          [18, "Fall Synthesis", "Synthesize your foundational skills to write the first 1,000 words of the project you most want to pursue."],
        ],
      },
      {
        title: "Semester Two: Perspective, Structure, and Syntax",
        weeks: [
          [19, "POV I: First Person", "Enter the \"intimate prison\" of first-person narration and explore the inherent unreliability of a single mind."],
          [20, "POV II: Third-Person Limited", "Master third-person limited, the dominant mode of contemporary fiction, to balance intimacy with authorial mobility."],
          [21, "POV III: The Unconventional", "Broaden your repertoire with second person and omniscience to understand the ethical claims of knowing."],
          [22, "The Unreliable Narrator", "Use unreliability not as a trick, but as a structural engine that honors the partiality of all perception."],
          [23, "Psychic Distance: The Variable Lens", "Learn to use psychic distance as a variable dial to control pacing and emotional revelation within a scene."],
          [24, "Conflict, Crisis & Resolution", "Ignite the engine of narrative by moving from simple situation to conflict, crisis, and resolution."],
          [25, "Plot & Structure II", "Study Freytag's Pyramid and its contemporary subversions to understand how experience actually moves."],
          [26, "Plot & Structure III", "Explore alternative architectures like braided, reverse, and modular structures to find the best container for your story."],
          [27, "Voice & Tone", "Identify and inhabit your unique voice—the sum of every stylistic choice you make on the page."],
          [28, "Voice in CNF", "Distinguish between the narrator and the memoirist to manage the ethics and authority of the \"I\" on the page."],
          [29, "Syntax & Sentence-Level Craft", "Integrate syntax and craft to treat the sentence as an artistic medium in the tradition of the masters."],
          [30, "Comparison & Metaphor", "Use the metaphor not as decoration, but as a cognitive mode that creates new understanding through comparison."],
          [31, "Symbol & the Objective Correlative", "Discover how objects accumulate meaning through placement and recurrence to become powerful symbols."],
          [32, "Pacing & Rhythm", "Control the reader's experience of time by dilating significant moments and compressing connective tissue."],
          [33, "The Short Story", "Explore the special laws of the short story, where every element must produce a single, concentrated effect."],
          [34, "Tone, Comedy & Laughter", "Study how tone and comedy function as rhetorical instruments to create your reader's fundamental relationship to the work."],
          [35, "Spring Portfolio Review", "Look retrospectively at your body of work to see the manuscript, themes, and concerns beginning to emerge."],
          [36, "Year One Synthesis", "Articulate the core question of your project and declare your intent for the thesis years ahead."],
        ],
      },
    ],
  },
  {
    year: "Year Two: The Specialization",
    slug: "year-two",
    semesters: [
      {
        title: "Semester One: Advanced Structure and the Thesis Proposal",
        weeks: [
          [1, "Scene as Architectural Craft", "Transition from intuition to architecture by studying scenes as structures designed for depth and intensity."],
          [2, "The Iceberg Theory", "Apply Hemingway's theory to earn your omissions and create power through what is left unsaid."],
          [3, "Advanced Structure I", "Deepen your structural range with nonlinear, fragmented, and modular narratives that emerge from your content."],
          [4, "Advanced Structure II", "Interweave storylines and registers in a braided narrative to generate meaning in the seams between strands."],
          [5, "Time Manipulation", "Master flashback, flash-forward, and compression as structural decisions that manage narrative meaning."],
          [6, "Opening Strategies", "Treat your first page as a contract with the reader, establishing the voice and governing question of the work."],
          [7, "Pressure & Consequence", "Build strong scenes that earn their place through pressure, movement, and structural consequence."],
          [8, "Theme & Meaning", "Identify the governing question your work is asking rather than the argument it is trying to make."],
          [9, "Revision I", "Distinguish between generative drafting and the revisionary mode to see your work for what it actually is."],
          [10, "Revision II", "Develop a workshop mindset to read your own work with craft-trained eyes and without authorial attachment."],
          [11, "Long-Form Problems", "Solve the special problems of long-form projects, from managing scale to sustaining reader investment."],
          [12, "The Thesis Proposal", "Use the thesis proposal as a thinking instrument to articulate your intent and accelerate your work."],
          [13, "Writing the Other", "Engage with the ethics and craft of imaginative inhabitation when writing across lines of difference."],
          [14, "Voice Development", "Move from habit to vision as you consciously develop the vocal frequency only you can transmit."],
          [15, "Cross-Genre Ethics", "Examine the ethical responsibilities of representation across literary fiction, screenwriting, and memoir."],
          [16, "Professional Development I", "Map the contemporary publishing landscape and understand how the market serves as your work's destination."],
          [17, "Professional Development II", "Consider the long arc of a writing career, from sustainability and community to the meaning of success."],
          [18, "Fall Portfolio Review", "Confirm your direction and decide if your thesis is the project that most urgently requires your attention."],
        ],
      },
      {
        title: "Semester Two: Intensive Thesis Production",
        weeks: [
          [19, "Entering the Thesis", "Shift your focus toward sustained production as you begin the intensive drafting of your manuscript."],
          [20, "Hybrid Forms", "Use experimental and hybrid forms as diagnostic tools when conventional structures fail your material."],
          [21, "The Lyric Essay", "Build coherence through pattern and juxtaposition, letting image and pressure lead the associative leap."],
          [22, "Narrative Time Control", "Align your page-time with story pressure using a practical system for pacing, duration, and sequence."],
          [23, "Character Transformation", "Audit your manuscript for true transformation to ensure your characters have changed by the final page."],
          [24, "The Sentence as Music", "Train your ear to recognize the musicality of prose, using rhythm and sound to create a listening experience."],
          [25, "Minimalism vs. Maximalism", "Compare governing syntactic philosophies to decide which stylistic path your material requires."],
          [26, "Master Sentence Analysis", "Learn the discipline of \"reading like a technician\" through close, analytical study of master prose."],
          [27, "Advanced Characterization", "Tackle advanced challenges, from the character who resists to the narrator who doesn't know what they show."],
          [28, "Voice Synthesis", "Reflect on two years of syntactic development to finalize the voice and style of your emerging manuscript."],
          [29, "Professional Development III", "Prepare the thesis for its life after the program, from query packages to literary magazine submissions."],
          [30, "Ethics of Nonfiction", "Navigate the ethics of creative nonfiction and the irreducible tension between artistic rendering and truth."],
          [31, "Intensive Production I", "Dive into the first push of intensive production, focusing on internal logic and the paragraph as a unit."],
          [32, "The Red Pen", "Apply radical compression to your draft to learn the discipline of white space and linguistic efficiency."],
          [33, "Transitions & Surprise", "Study the architecture of transitions to move seamlessly between scenes without losing momentum."],
          [34, "The Read-Through", "Read your draft as a complete reader for the first time to reveal structural gaps and the manuscript's true nature."],
          [35, "The Revision Plan", "Transform your read-through findings into a prioritized, sequenced revision plan for the final year."],
          [36, "Year Two Synthesis", "Synthesize two years of growth and celebrate the manuscript that only you could write."],
        ],
      },
    ],
  },
  {
    year: "Year Three: The Completion",
    slug: "year-three",
    semesters: [
      {
        title: "Semester One: Intensive Revision and the Genre-Specific Final Pass",
        weeks: [
          [1, "Entering Revision", "Begin the final year with the cold eye and the willing hand, assessing your draft honestly before the systematic revision sequence."],
          [2, "The Structural Revision", "Build the scene map to understand the architecture of the whole before touching a single sentence."],
          [3, "The Character Revision", "Interrogate every character in the manuscript to ensure each earns their place and does work no other character does."],
          [4, "The Thematic Revision", "Make the governing question more precise, auditing every passage for thematic contribution and over-explanation."],
          [5, "The Voice Revision", "Conduct the voice audit for consistency, depth, and the signature sentence that defines the manuscript's sound."],
          [6, "Line-Level Revision I", "Begin the sentence pass — the first systematic line-level revision of every sentence in the manuscript."],
          [7, "Line-Level Revision II", "Focus the second sentence pass on dialogue and interiority, the two elements that most directly carry character."],
          [8, "The Image Revision", "Find and deepen the governing metaphors — the images that recur, accumulate meaning, and carry the work's deepest weight."],
          [9, "Pacing Revision", "Manage the reader's experience of time across the full manuscript, calibrating compression and expansion at scale."],
          [10, "The Opening Revision", "Determine whether the thesis begins where it must — at the last possible moment before the story must begin."],
          [11, "The Ending Revision", "Earn the arrival: revise the ending to answer the opening's question and make the final image resonate backward through the manuscript."],
          [12, "The Full Manuscript Read-Through", "Perform the second full read-through to assess structural integrity after all revision passes and determine what remains."],
          [13, "Genre-Specific Final Pass", "Apply the genre-specific final revision protocols — continuity, format, or ethics review — to complete the formal revision sequence."],
          [14, "Professional Preparation I", "Build the full submission package: query or pitch, synopsis, comparables, author bio, and first ten polished pages."],
          [15, "Professional Preparation II", "Develop the teaching portfolio: statement of teaching philosophy, course description, and culminating master sentence analysis."],
          [16, "The Writer's Reading Life", "Establish a sustainable reading ecosystem that keeps your prose in active conversation with contemporary craft and influence."],
          [17, "The Literary Community", "Build and sustain the professional literary community that will support your writing life after the program."],
        ],
      },
      {
        title: "Semester Two: Final Draft Production, Defense, and Next-Stage Submission",
        weeks: [
          [18, "Fall Semester Synthesis: The Thesis Enters Final Drafting", "Complete the final fall diagnostic and begin spring with a clear production target, revision hierarchy, and thesis-ready process."],
          [19, "The Final Draft — Producing the Thesis-Ready Manuscript", "Shift from revision mode into sustained final-draft generation, producing polished manuscript pages at publication-level standards."],
          [20, "Revising for the Reader You Want", "Calibrate prose, structure, and pacing for the intended reader by identifying where the manuscript is over-explaining, under-signaling, or misdirecting attention."],
          [21, "Intensive Final Draft Production I", "Launch the first full production sprint by generating 2,000–3,000 words of final-draft prose while protecting momentum and voice consistency."],
          [22, "Intensive Final Draft Production II", "Complete all major structural revisions, produce 2,000–3,000 words, and write the thesis's most concentrated voice passage in place."],
          [23, "Intensive Final Draft Production III", "Finish all five line-level passes, produce 1,500–2,000 words, and read the full manuscript aloud to mark every stumble."],
          [24, "Intensive Final Draft Production IV", "Complete all remaining new prose, begin the oral-reading revision pass, and transition the manuscript from making to finishing."],
          [25, "Preparing for the Public Reading", "Select and rehearse a 12–15 minute reading script with a spoken introduction and performance-ready pacing."],
          [26, "The Thesis Defense — Articulating the Work", "Write, rehearse, and AI stress-test a six-part defense presentation while completing the final grammar reflection."],
          [27, "The Thesis Submitted — What Happens After Completion", "Process completion, establish ten benchmark thesis sentences, and write the letter to your Year One self."],
          [28, "Final Preparation for the Public Reading", "Complete three timed rehearsals, finalize the author's note, and confirm all event logistics for the public reading."],
          [29, "The Public Reading", "Give the public reading, revisit Week One documents, and write one page of post-reading notes while the event is fresh."],
        ],
      },
    ],
  },
] as const;

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

      <div className="mt-16 grid gap-10 text-left lg:grid-cols-2">
        {diyMfaCurriculum.map((yearGroup) => (
          <article key={yearGroup.year} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-mfa-display text-4xl text-slate-900 md:text-5xl">{yearGroup.year}</h2>

            <div className="mt-6 space-y-8">
              {yearGroup.semesters.map((semester) => (
                <section key={semester.title} className="border-t border-slate-200 pt-6 first:border-t-0 first:pt-0">
                  <h3 className="font-mfa-mono text-xs uppercase tracking-[0.2em] text-slate-500">{semester.title}</h3>

                  <div className="mt-4 space-y-2">
                    {semester.weeks.map(([weekNumber, title, synopsis]) => (
                      <details key={`${semester.title}-${weekNumber}-${title}`} className="group rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                        <summary className="cursor-pointer list-none text-base font-medium text-slate-800 transition group-hover:text-indigo-700">
                          <span>Week {weekNumber}: </span>
                          <span>{title}</span>
                        </summary>
                        <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-7 text-slate-700">{synopsis}</p>
                        <Link
                          href={`/diy-mfa/${yearGroup.slug}/week-${weekNumber}`}
                          className="mt-3 inline-flex text-sm font-medium text-indigo-700 no-underline transition hover:text-indigo-500"
                        >
                          Enter Week {weekNumber}
                        </Link>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>



    </section>
  );
}
