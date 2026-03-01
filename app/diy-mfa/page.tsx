import Link from "next/link";

const semesterOneWeeks = Array.from({ length: 18 }, (_, index) => index + 1);
const semesterTwoWeeks = Array.from({ length: 18 }, (_, index) => index + 19);
const yearTwoWeeks = [1, 2, 3, 4, 5, 6];

export default function DiyMfaHome() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">DIY MFA</p>
      <h1 className="mt-4 font-mfa-display text-6xl">Year One</h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl text-muted">A 36-week writing curriculum organized around practice, craft, and editorial rigor.</p>

      <div className="mt-10 space-y-10 text-left">
        <div>
          <h2 className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester One</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {semesterOneWeeks.map((weekNumber) => (
              <Link key={weekNumber} href={`/diy-mfa/year-one/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
                Enter Week {weekNumber}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester 2</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {semesterTwoWeeks.map((weekNumber) => (
              <Link key={weekNumber} href={`/diy-mfa/year-one/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
                Enter Week {weekNumber}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <h2 className="mt-16 font-mfa-display text-6xl">Year Two</h2>
      <div className="mt-10 text-left">
        <h3 className="font-mfa-mono text-xs uppercase tracking-[0.22em] text-muted">Semester One</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {yearTwoWeeks.map((weekNumber) => (
            <Link key={weekNumber} href={`/diy-mfa/year-two/week-${weekNumber}`} className="rounded-sm border border-border px-4 py-2 no-underline">
              Enter Week {weekNumber}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
