import Link from "next/link";

export default function CinemaWritingStudioLandingPage() {
  return (
    <main className="min-h-screen bg-[#efebe4] px-6 py-12 md:py-20">
      <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-black/10 bg-[#f7f5f1] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:p-14">
        <p className="font-ui text-sm uppercase tracking-[0.38em] text-[#c63d2f]">New Course</p>
        <h1 className="mt-8 max-w-2xl font-display text-5xl font-semibold leading-[1.05] text-[#181818] md:text-7xl">
          The Cinema Writing Studio
        </h1>
        <p className="mt-4 font-ui text-lg uppercase tracking-[0.28em] text-black/60">With AI as a Thought Partner</p>
        <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-black/65 md:text-[2rem]">
          Start Week 1 of a 36-week studio focused on film language, beat journaling, and practical craft analysis.
        </p>
        <Link
          href="/cinema-writing-studio/week-1"
          className="mt-12 inline-flex rounded-full bg-[#c93d2d] px-12 py-5 font-ui text-base uppercase tracking-[0.24em] text-white no-underline transition hover:bg-[#b83526]"
        >
          Open Week 1
        </Link>
      </section>
    </main>
  );
}
