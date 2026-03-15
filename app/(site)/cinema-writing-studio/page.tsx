import Link from "next/link";

const weeks = [
  { href: "/cinema-writing-studio/week-1", label: "Week 1", title: "The Movie on the Page", description: "Beat-by-beat reading and scene-level movement." },
  { href: "/cinema-writing-studio/week-2", label: "Week 2", title: "Editing, Rhythm, Scene Purpose", description: "Track scene purpose, cuts, and rhythm across full features." },
  { href: "/cinema-writing-studio/week-3", label: "Week 3", title: "Genre as a Promise", description: "Define genre contracts and identify delivery scenes." },
  { href: "/cinema-writing-studio/week-6", label: "Week 6", title: "Theme as Argument (Not a Slogan)", description: "Build a thematic question and concept document that pressure-tests your premise." },
  { href: "/cinema-writing-studio/week-7", label: "Week 7", title: "Protagonist Design", description: "Build a protagonist from four load-bearing elements: Want, Need, Wound, and Line." },
  { href: "/cinema-writing-studio/week-8", label: "Week 8", title: "Antagonism as a System", description: "Design opposition as a force with logic, escalation, and a defensible thematic position." },
  { href: "/cinema-writing-studio/week-9", label: "Week 9", title: "World Rules You Can Film", description: "Design a world with trackable rules, pressure-tested costs, and production-ready location strategy." },
];

export default function CinemaWritingStudioLandingPage() {
  return (
    <main className="min-h-screen bg-[#efebe4] px-6 py-12 md:py-20">
      <section className="mx-auto w-full max-w-4xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:p-14">
        <p className="font-ui text-sm uppercase tracking-[0.38em] text-[#c63d2f]">New Course</p>
        <h1 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-[1.05] text-[#181818] md:text-7xl">
          The Cinema Writing Studio
        </h1>
        <p className="mt-4 font-ui text-lg uppercase tracking-[0.28em] text-black/60">With AI as a Thought Partner</p>
        <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-black/65 md:text-[2rem]">
          Continue through the Cinema Writing Studio curriculum with focused weekly modules on film language, structure, and practical craft analysis.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {weeks.map((week) => (
            <Link
              key={week.href}
              href={week.href}
              className="rounded-2xl border border-black/15 bg-white/70 p-5 no-underline transition hover:border-[#c93d2d]/50 hover:bg-white"
            >
              <p className="font-ui text-xs uppercase tracking-[0.24em] text-[#c93d2d]">{week.label}</p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[#181818]">{week.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-black/65">{week.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
