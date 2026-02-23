import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  FileText,
  FlaskConical,
  Scale,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "U.S. Publishing Standards & Submission Protocols | AI Writers Retreat",
  description:
    "A practical, navigable analysis of U.S. book publishing standards, submission pathways, formatting requirements, and publisher-by-publisher guidance.",
};

type PublisherRow = {
  publisher: string;
  url: string;
  focus: string;
  notes: string;
};

const sectionLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#pathways", label: "Pathways" },
  { href: "#style-frameworks", label: "Style Rules" },
  { href: "#technical-matrix", label: "Technical Matrix" },
  { href: "#directories", label: "A–Z Registry" },
  { href: "#conclusions", label: "Conclusions" },
  { href: "#works-cited", label: "Sources" },
];

const technicalMatrix = [
  {
    parameter: "Font Selection",
    standard: "12-point Times New Roman",
    variation: "Lucida Bright or CG Omega (Baen Books)",
  },
  {
    parameter: "Line Spacing",
    standard: "Double-spaced (2.0)",
    variation: "Single-spaced (Yale University Journal contexts)",
  },
  {
    parameter: "Margins",
    standard: "1.0 to 1.5 inches",
    variation: "1.25 inches (Linguistic Inquiry, MIT Press)",
  },
  {
    parameter: "Citation System",
    standard: "CMOS Notes-Bibliography",
    variation: "CMOS Author-Date for social sciences",
  },
  {
    parameter: "AI Disclosure",
    standard: "Disclosure increasingly required",
    variation: "Absolute prohibition of AI-generated text (Baen)",
  },
];

const publishersA: PublisherRow[] = [
  {
    publisher: "Abingdon Press",
    url: "https://abingdonpress.com",
    focus: "Religious and cross-denominational works",
    notes: "Requires strong author platform and marketing plan.",
  },
  {
    publisher: "Akashic Books",
    url: "https://akashicbooks.com",
    focus: "Noir, pop culture, politics",
    notes: "Brooklyn-based independent house known for Noir series.",
  },
  {
    publisher: "Agate Publishing",
    url: "https://agatepublishing.com",
    focus: "Black American voices and regional nonfiction",
    notes: "Includes Bolden and Midway imprints.",
  },
  {
    publisher: "Alfred A. Knopf",
    url: "https://knopfdoubleday.com",
    focus: "High-end literary fiction and nonfiction",
    notes: "Part of Penguin Random House.",
  },
  {
    publisher: "Andrews McMeel",
    url: "https://www.andrewsmcmeel.com",
    focus: "Gift books, humor, calendars",
    notes: "Known to review unagented proposals in select lines.",
  },
  {
    publisher: "Annick Press",
    url: "https://www.annickpress.com",
    focus: "Children's and YA with contemporary themes",
    notes: "Strong commitment to diversity-forward acquisitions.",
  },
  {
    publisher: "Arcadia Publishing",
    url: "https://www.arcadiapublishing.com",
    focus: "Local U.S. history and regional interest",
    notes: "Generally excludes fiction and poetry.",
  },
  {
    publisher: "Autumn House Press",
    url: "https://www.autumnhouse.org",
    focus: "Fiction, nonfiction, poetry",
    notes: "Often acquires via contests and prize pipelines.",
  },
];

const publishersBC: PublisherRow[] = [
  {
    publisher: "Baen Books",
    url: "https://www.baen.com/submit",
    focus: "Hard science fiction and coherent fantasy",
    notes: "RTF only, strict formatting, no AI-authored text.",
  },
  {
    publisher: "Bella Books",
    url: "https://www.bellabooks.com",
    focus: "Lesbian fiction and romance",
    notes: "Leading publisher for queer women's fiction.",
  },
  {
    publisher: "Black Lawrence Press",
    url: "https://blacklawrencepress.com",
    focus: "Poetry, fiction, translations",
    notes: "Runs the Big Moose Prize and periodic reading windows.",
  },
  {
    publisher: "Bloomsbury",
    url: "https://www.bloomsbury.com",
    focus: "Trade fiction + academic publishing",
    notes: "Dual model across commercial and scholarly channels.",
  },
  {
    publisher: "Carina Press",
    url: "https://www.carinapress.com",
    focus: "Digital-first romance and mystery",
    notes: "Harlequin imprint optimized for digital acquisition.",
  },
  {
    publisher: "Chronicle Books",
    url: "https://www.chroniclebooks.com",
    focus: "Illustrated lifestyle, gift, and children's books",
    notes: "Design-forward editorial program.",
  },
  {
    publisher: "City Lights",
    url: "https://citylights.com",
    focus: "Socially engaged literary publishing",
    notes: "Historic independent press with political/literary legacy.",
  },
  {
    publisher: "Collective Ink",
    url: "https://www.collectiveinkbooks.com/submissions",
    focus: "Mystery/thrillers and specialist nonfiction",
    notes: "Remote, author-run and data-driven model.",
  },
];

const publishersDK: PublisherRow[] = [
  {
    publisher: "Dalkey Archive Press",
    url: "https://www.dalkeyarchive.com",
    focus: "Innovative fiction and translations",
    notes: "Known for experimental, international literary catalog.",
  },
  {
    publisher: "Duke University Press",
    url: "https://www.dukeupress.edu",
    focus: "Humanities and social sciences",
    notes: "Strong peer-review and journal integration.",
  },
  {
    publisher: "Graywolf Press",
    url: "https://www.graywolfpress.org/about-us/submissions",
    focus: "Literary poetry and prose",
    notes: "Requires polished submissions; CMOS for finals.",
  },
  {
    publisher: "Hachette Book Group",
    url: "https://www.hachettebookgroup.com/about/faqs/#submissions",
    focus: "Major commercial trade publishing",
    notes: "No unsolicited submissions for core trade lines.",
  },
  {
    publisher: "HarperCollins",
    url: "https://www.harpercollins.com/pages/submissions",
    focus: "General trade and Christian lines",
    notes: "Primarily agented with limited direct-entry exceptions.",
  },
  {
    publisher: "Johns Hopkins University Press",
    url: "https://www.press.jhu.edu",
    focus: "Scholarly and academic works",
    notes: "Oldest university press in the U.S.",
  },
  {
    publisher: "Kensington Publishing",
    url: "https://www.kensingtonbooks.com",
    focus: "Commercial romance and mystery",
    notes: "Notable unagented query pathways.",
  },
];

const publishersLP: PublisherRow[] = [
  {
    publisher: "Lee & Low Books",
    url: "https://www.leeandlow.com/writers-illustrators/submissions",
    focus: "Multicultural children's books",
    notes: "Prioritizes cultural authenticity and anti-stereotypical work.",
  },
  {
    publisher: "Macmillan",
    url: "https://us.macmillan.com/faq",
    focus: "General trade across genres",
    notes: "Trade imprints generally require agent representation.",
  },
  {
    publisher: "Manning Publications",
    url: "https://www.manning.com/write-for-us",
    focus: "Technical and developer-focused titles",
    notes: "Strong proposal and expertise requirements.",
  },
  {
    publisher: "MIT Press",
    url: "https://mitpress.mit.edu",
    focus: "Arts, sciences, policy scholarship",
    notes: "Anonymized peer-review workflows and strict style sheets.",
  },
  {
    publisher: "Oxford University Press",
    url: "https://global.oup.com",
    focus: "Academic and reference publishing",
    notes: "Large-scale institutional and scholarly footprint.",
  },
  {
    publisher: "Penguin Random House",
    url: "https://www.penguinrandomhouse.com",
    focus: "Comprehensive trade catalog",
    notes: "Most imprints closed to unsolicited submissions.",
  },
  {
    publisher: "Poisoned Pen Press",
    url: "https://www.poisonedpen.com",
    focus: "Crime and mystery fiction",
    notes: "Genre-specialist imprint under Sourcebooks.",
  },
];

const publishersQZ: PublisherRow[] = [
  {
    publisher: "Quirk Books",
    url: "https://www.quirkbooks.com",
    focus: "High-concept commercial books",
    notes: "Small press with strong distribution partnerships.",
  },
  {
    publisher: "Simon & Schuster",
    url: "https://www.simonandschuster.biz/c/biz-manuscript-submissions",
    focus: "Broad commercial trade",
    notes: "No unsolicited materials accepted.",
  },
  {
    publisher: "Sourcebooks",
    url: "https://www.sourcebooks.com",
    focus: "Fiction, romance, children's",
    notes: "Large independent with broad genre reach.",
  },
  {
    publisher: "Tin House",
    url: "https://tinhouse.com/books/submit/",
    focus: "Literary fiction, poetry, memoir",
    notes: "Targeted unagented windows; inclusion-oriented calls.",
  },
  {
    publisher: "Verso Books",
    url: "https://www.versobooks.com/pages/submission-guidelines",
    focus: "Radical politics and social thought",
    notes: "Generally proposals-focused; fiction constraints apply.",
  },
  {
    publisher: "Wiley",
    url: "https://www.wiley.com",
    focus: "Scientific, technical, professional titles",
    notes: "Proposal rigor and market fit are central.",
  },
  {
    publisher: "Yale University Press",
    url: "https://yalebooks.yale.edu",
    focus: "Humanities, arts, social science",
    notes: "Documentation precision and endnote structure required.",
  },
  {
    publisher: "Zondervan",
    url: "https://zondervanacademic.com/publishing-with-us",
    focus: "Christian academic and trade",
    notes: "Proposal-led acquisition with concise submission packets.",
  },
];

const worksCited = [
  "https://www.simonandschuster.biz/c/biz-manuscript-submissions",
  "https://www.hachettebookgroup.com/about/faqs/#submissions",
  "https://writer.org/publishers-that-accept-unagented-submissions/",
  "https://www.baen.com/submit",
  "https://www.baen.com/faq",
  "https://mitpress.mit.edu",
  "https://direct.mit.edu/DocumentLibrary/SubGuides/LI_Style_Sheet_1.27.26.pdf",
  "https://drupal.yalebooks.yale.edu/sites/default/files/files/ManuscriptPrepGuide/Manuscript%20Preparation%20Guidelines.pdf",
  "https://www.chicagomanualofstyle.org",
  "https://www.graywolfpress.org/about-us/submissions",
  "https://www.leeandlow.com/writers-illustrators/submissions",
  "https://tinhouse.com/books/submit/",
  "https://www.publishersweekly.com/pw/corp/submissionguidelines.html",
];

function PublisherCard({ publisher, url, focus, notes }: PublisherRow) {
  return (
    <article className="group rounded-2xl border border-ink/10 bg-canvas p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display text-lg font-semibold text-ink dark:text-slate-100">{publisher}</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-glow/30 bg-glow/10 px-2 py-1 text-xs text-glow"
        >
          Visit <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">{focus}</p>
      <p className="mt-3 rounded-xl bg-ink/[0.03] p-3 text-sm text-ink/75 dark:bg-slate-800/60 dark:text-slate-300">{notes}</p>
    </article>
  );
}

function SegmentSection({ id, title, rows }: { id: string; title: string; rows: PublisherRow[] }) {
  return (
    <section id={id} className="space-y-4 rounded-3xl border border-ink/10 bg-gradient-to-b from-canvas to-canvas/70 p-5 shadow-sm dark:border-slate-700 dark:from-slate-950 dark:to-slate-900/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold text-ink dark:text-slate-100">{title}</h3>
        <span className="rounded-full border border-ink/10 bg-canvas px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          {rows.length} listings
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => (
          <PublisherCard key={row.publisher} {...row} />
        ))}
      </div>
    </section>
  );
}

export default function PublishingStandardsPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-canvas via-canvas to-canvas/70 pb-20 dark:from-canvasDark dark:via-canvasDark dark:to-canvasDark/70">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-72 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pt-10 md:px-6 md:pt-14 lg:flex-row">
        <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-72">
          <div className="rounded-2xl border border-ink/10 bg-canvas/95 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
            <h2 className="font-display text-lg font-semibold text-ink dark:text-slate-100">Navigate this guide</h2>
            <nav className="mt-4 space-y-2" aria-label="Section navigation">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-ink/80 transition hover:bg-glow/10 hover:text-ink dark:text-slate-300 dark:hover:text-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 rounded-xl border border-glow/25 bg-glow/10 p-3 text-xs text-ink/70 dark:text-slate-300">
              <p className="font-semibold">Fast workflow tip</p>
              <p className="mt-1">Use one segment at a time and build a custom query packet per publisher.</p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-8">
          <section id="overview" className="relative overflow-hidden rounded-3xl bg-ink p-8 text-canvas shadow-2xl md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-glow/20 blur-2xl" />
            <span className="inline-flex items-center gap-2 rounded-full bg-glow/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-glow">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Deep-Dive Reference
            </span>
            <h1 className="mt-4 max-w-5xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Analysis of United States Book Publishing Standards and Submission Protocols
            </h1>
            <p className="mt-4 max-w-4xl text-base text-canvas/85 sm:text-lg">
              This page transforms the report into a practical submission dashboard: clearer pathways, stronger formatting guidance,
              and an at-a-glance publisher registry you can actually use while preparing real submissions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Pathways", value: "Agented + Unagented" },
                { label: "Style Backbone", value: "CMOS + House Rules" },
                { label: "AI Policies", value: "Disclosure to Prohibition" },
                { label: "Registry", value: "A–Z Publisher Segments" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-canvas/20 bg-canvas/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-canvas/70">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-canvas">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="pathways" className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/10 bg-canvas p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink dark:text-slate-100"><Building2 className="h-5 w-5 text-glow" /> Agented trade route</h3>
              <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">
                Major houses rely on agents as quality and market filters, especially for high-volume commercial lists.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-canvas p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink dark:text-slate-100"><BookOpen className="h-5 w-5 text-glow" /> Independent windows</h3>
              <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">
                Smaller presses open limited windows for unagented work, rewarding strong niche fit and clean technical prep.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-canvas p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink dark:text-slate-100"><Compass className="h-5 w-5 text-glow" /> Strategic fit first</h3>
              <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">
                The fastest way to rejection is mismatch. Target lists, backlist style, and mission alignment are now mandatory checks.
              </p>
            </article>
          </section>

          <section id="style-frameworks" className="rounded-3xl border border-ink/10 bg-canvas p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-slate-100">Documentation and style frameworks</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-ink/10 p-4 dark:border-slate-700">
                <h3 className="flex items-center gap-2 font-semibold text-ink dark:text-slate-100"><FileText className="h-4 w-4" /> CMOS standardization</h3>
                <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">CMOS remains the default framework, with house-level exceptions based on production workflows.</p>
              </div>
              <div className="rounded-xl border border-ink/10 p-4 dark:border-slate-700">
                <h3 className="flex items-center gap-2 font-semibold text-ink dark:text-slate-100"><Scale className="h-4 w-4" /> Scholarly precision</h3>
                <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">University presses require structured citations and endnote discipline for reliable digital conversion.</p>
              </div>
              <div className="rounded-xl border border-ink/10 p-4 dark:border-slate-700">
                <h3 className="flex items-center gap-2 font-semibold text-ink dark:text-slate-100"><FlaskConical className="h-4 w-4" /> AI governance</h3>
                <p className="mt-2 text-sm text-ink/80 dark:text-slate-300">Disclosure requirements are expanding rapidly; some genres and houses enforce explicit AI-authorship bans.</p>
              </div>
            </div>
          </section>

          <section id="technical-matrix" className="rounded-3xl border border-ink/10 bg-canvas p-6 shadow-sm dark:border-canvas/10 dark:bg-canvasDark/70">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-text">Technical parameter matrix</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/10 dark:border-canvas/20">
                    <th className="px-3 py-2">Parameter</th>
                    <th className="px-3 py-2">Trade baseline</th>
                    <th className="px-3 py-2">Specialized variation</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalMatrix.map((row) => (
                    <tr key={row.parameter} className="border-b border-ink/5 dark:border-canvas/10">
                      <td className="px-3 py-2 font-medium text-ink dark:text-text">{row.parameter}</td>
                      <td className="px-3 py-2 text-ink/80 dark:text-text/80">{row.standard}</td>
                      <td className="px-3 py-2 text-ink/80 dark:text-text/80">{row.variation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="directories" className="space-y-5">
            <h2 className="font-display text-3xl font-semibold text-ink dark:text-text">A–Z publisher registry</h2>
            <p className="max-w-3xl text-sm text-ink/80 dark:text-text/80">
              The full list remains central to this guide, now presented as scan-friendly cards for faster comparison by niche,
              submission model, and technical requirements.
            </p>
            <SegmentSection id="segment-a" title="Segment A" rows={publishersA} />
            <SegmentSection id="segment-bc" title="Segment B–C" rows={publishersBC} />
            <SegmentSection id="segment-dk" title="Segment D–K" rows={publishersDK} />
            <SegmentSection id="segment-lp" title="Segment L–P" rows={publishersLP} />
            <SegmentSection id="segment-qz" title="Segment Q–Z" rows={publishersQZ} />
          </section>

          <section id="conclusions" className="rounded-3xl border border-ink/10 bg-canvas p-6 shadow-sm dark:border-canvas/10 dark:bg-canvasDark/70">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-text">Operational conclusions</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/85 dark:text-text/85">
              {[
                "Technical precision now acts as a first-pass gate before editorial quality is even reviewed.",
                "Unagented paths are viable, but only with niche alignment and excellent formatting discipline.",
                "AI compliance is not optional; always verify disclosure and usage constraints by house.",
                "Mission fit (audience, values, and voice) is now as important as manuscript quality.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-glow" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="works-cited" className="rounded-3xl border border-ink/10 bg-canvas p-6 shadow-sm dark:border-canvas/10 dark:bg-canvasDark/70">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-text">Works cited (selected)</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink/80 dark:text-text/80">
              {worksCited.map((source) => (
                <li key={source}>
                  <Link href={source} target="_blank" rel="noopener noreferrer" className="text-glow underline-offset-2 hover:underline">
                    {source}
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
    </div>
  );
}
