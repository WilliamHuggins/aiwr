
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl lg:text-6xl">About AI Writers&apos; Retreat</h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              {/* Placeholder for a profile picture. You can replace this with an <Image> component later. */}
              <svg
                className="w-16 h-16 text-gray-400 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2 font-body text-lg leading-relaxed space-y-6 text-ink/90 dark:text-text/90">
            <p>
              AI Writers&apos; Retreat is a free, independent resource for writers who want to use generative AI with craft and intention.
            </p>
            <p>
              The tools are powerful. The noise around them is louder. Most of what&apos;s out there is aimed at content volume — faster output, lower effort, less you.
              This place is built on a different premise: that AI is most useful when it supports a writer&apos;s thinking, not when it replaces it.
            </p>
            <p>
              The curriculum, tutorials, and tools here are designed to help writers build durable habits, maintain editorial control, and use AI as a genuine
              thinking partner across research, drafting, and revision. The focus is always on voice, structure, and judgment — the things that actually make
              writing worth reading.
            </p>
            <p>
              Our goal is to make both the craft of writing and AI technology genuinely accessible — through free learning resources and through a community of
              writers who learn from and share with each other. This isn&apos;t a platform for passive consumption. It&apos;s a place to develop real skills alongside
              other people who take the work seriously.
            </p>
            <h2 className="text-2xl font-bold font-display pt-2">Who built this</h2>
            <p>
              AI Writers&apos; Retreat was created by Will, a librarian and writer with a B.A. in Creative Writing from USC and an MLIS from San Jose State. The
              combination isn&apos;t accidental. Librarians are trained to understand information systems at a structural level — how to query them, evaluate them,
              and use them without being led by them. That same discipline shapes everything here.
            </p>
            <h2 className="text-2xl font-bold font-display pt-2">A note on transparency</h2>
            <p>
              AI Writers&apos; Retreat has no sponsorships and no affiliate relationships. When a tool or product is mentioned here, it&apos;s because we use it and
              believe in it — nothing more. If that ever changes, any sponsored or affiliated content will be clearly and conspicuously disclosed.
            </p>
            <p>
              All recommendations on this site reflect independent assessment. The views expressed here are personal and do not represent any employer or
              professional affiliation.
            </p>
            <p>
              If you&apos;d like to contribute, collaborate, or just connect, reach out at{' '}
              <a href="mailto:message@aiwritersretreat.com" className="font-bold text-glow hover:underline focus-ring rounded-sm">
                message@aiwritersretreat.com
              </a>
              . This project grows through the people who care about it.
            </p>
            <p>
              If you find this resource useful, you can{' '}
              <a
                href="https://coff.ee/aiwritersretreat"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-glow hover:underline focus-ring rounded-sm"
              >
                donate
              </a>{' '}
              to help keep things running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
