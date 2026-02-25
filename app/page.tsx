import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import { LatestPostsTeaser } from "@/components/blog/BlogPostListings";

const retreatMenu = [
  {
    title: "AI Writing News",
    description: "Track practical AI developments for writers with editorial context and clear takeaways.",
    href: "/ai-writing-news",
  },
  {
    title: "Resources",
    description: "Explore handpicked references, tools, and guides to strengthen your writing workflow.",
    href: "/resources",
  },
  {
    title: "Books on Writing",
    description: "Browse a curated reading list of foundational books on style, story, and professional practice.",
    href: "/reading-list",
  },
  {
    title: "Reading Like A Writer",
    description: "Practice close reading techniques that sharpen scene craft, voice, structure, and revision instincts.",
    href: "/reading-like-a-writer",
  },
  {
    title: "Publishing Standards",
    description: "Use practical standards for attribution, ethics, and quality control in AI-assisted writing.",
    href: "/publishing-standards",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[640px] items-center justify-center pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <HeroBackgroundVideo />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />
        <Container className="relative z-20 flex flex-col items-center pt-8 text-center md:pt-12 lg:pt-16">
          <Image
            src="/Logo.png"
            alt="AI Writers' Retreat logo"
            width={180}
            height={180}
            className="h-24 w-24 rounded-2xl border border-white/35 bg-white/90 p-1 object-contain shadow-soft md:h-28 md:w-28"
            unoptimized
          />
          <p className="mt-4 font-ui text-xs uppercase tracking-[0.24em] text-white/80">AI Writers&apos; Retreat</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Author in charge. Tool in service.
          </h1>
          <div className="mt-7 w-full max-w-4xl space-y-5 text-left text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            <p>
              AI Writers&apos; Retreat is a craft-first studio for writers who want the advantages of generative AI
              without compromising voice, taste, or authority on the page. We teach a practical, editorial approach:
              AI can accelerate research, clarify structure, surface blind spots, and strengthen revision—but it
              can&apos;t decide what your work means. That part stays with you.
            </p>
            <p>
              Start with the DIY MFA, a focused curriculum built around craft fundamentals and disciplined practice.
              Then use our purpose-built AI writing partners as support tools: for historically grounded research,
              world and character development, constructive critique, and line-level polish. The goal isn&apos;t to
              &ldquo;write for you.&rdquo; It&apos;s to help you write with more control—fewer dead ends, cleaner drafts,
              sharper revisions.
            </p>
            <p>
              For writers who are hesitant to use AI—or hesitant to admit it—we take that seriously. We treat AI as
              an instrument, not an identity: a professional tool you direct, document, and use with standards that
              hold up to editorial scrutiny. The result is work that reads intentional, coherent, and human—because
              it is.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-2/70 py-16 md:py-24">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold text-text">Start with the essentials</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Begin in the DIY MFA, then bring in focused AI partners when you need research, critique, and revision support.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="directory-card flex flex-col p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">Featured Path</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-text">Lessons &amp; DIY MFA</h3>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-muted">
                Follow the core curriculum to build durable writing habits, stronger craft instincts, and deliberate editorial control.
              </p>
              <Link href="/diy-mfa" className="mt-7 inline-flex self-start no-underline">
                <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Explore DIY MFA</Button>
              </Link>
            </Card>
            <Card className="directory-card flex flex-col p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">Featured Tools</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-text">Meet Your AI Writing Partners</h3>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-muted">
                Custom-built AI tools designed to assist, not replace, the creative writer. Explore all four partners and launch any tool in one click.
              </p>
              <Link href="/tools" className="mt-7 inline-flex self-start no-underline">
                <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Browse all AI Writing Partners</Button>
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-surface-2/70 py-16 md:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl rounded-2xl border border-border/70 bg-surface-1/85 p-6 shadow-soft backdrop-blur-sm md:p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">From the blog</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">AI &amp; The Craft</h2>
              <p className="mt-4 max-w-2xl text-muted">
                Essays on writing with judgment in the age of AI—practical notes on process, voice, revision, and craft.
              </p>
            </div>
            <Link href="/blog" className="font-ui text-xs uppercase tracking-[0.14em] text-accent no-underline">
              Read All Posts →
            </Link>
          </div>
          <LatestPostsTeaser />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-text">Explore the Retreat</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              A calm, practical directory for finding courses, tools, editorial guidance, and writing resources.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {retreatMenu.map((item) => (
              <Link key={item.title} href={item.href} className="group no-underline">
                <Card className="directory-card flex h-full flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-ui text-xs uppercase tracking-[0.14em] text-accent">
                    Explore section
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
