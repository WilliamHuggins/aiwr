import Image from "next/image";
import { BookOpen, MapPin, User, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const aiTools = [
  {
    icon: <MapPin className="h-8 w-8 text-success" />,
    bgColor: "bg-success/15",
    title: "Location Scout",
    description:
      "Get rich, immersive 'Writer's Location Dossiers' for any place and time to make your settings feel authentic and alive.",
    href: "https://chatgpt.com/share/687d4aa0-90b8-8000-8b0e-39bc6e6e6d9c",
  },
  {
    icon: <User className="h-8 w-8 text-accent2" />,
    bgColor: "bg-accent2/15",
    title: "Character-Smith",
    description:
      "Forge deep, multidimensional characters. Build a 'Character Profile Canvas' with goals, flaws, backstories, and arcs to drive your drama.",
    href: "https://chatgpt.com/share/687d4ace-1810-8000-a569-b723f9ee97e9",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    bgColor: "bg-accent/15",
    title: "Writer's Group",
    description:
      "Get instant, constructive feedback. This AI simulates a supportive writers' group, offering critiques on pacing, character, and prose.",
    href: "https://chatgpt.com/g/g-6862f670d3a8819192c032cc5a8b3222-ai-writers-retreat-the-perfect-writers-group",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    bgColor: "bg-accent/15",
    title: "StrunkSensei",
    description:
      "Master *The Elements of Style*. Learn timeless principles of punctuation, sentence structure, and word economy with an interactive AI guide.",
    href: "https://chatgpt.com/g/g-685dd59ed1e88191b2cb4ec3793ff05f-strunksensei",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex h-[72vh] min-h-[480px] items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
          alt="A writer looking out a window with a mug, inspired."
          fill
          priority
          className="z-0 object-cover brightness-[0.42]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />
        <Container className="relative z-20 flex flex-col items-center text-center">
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-white/80">AI Writers&apos; Retreat</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Master the Craft. Command the Code.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            The future of writing belongs to those who blend timeless craft with powerful technology. Our primary focus
            is teaching you to leverage generative AI as a revolutionary creative partner.
          </p>
        </Container>
      </section>

      <section className="bg-surface-2/70 py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 font-display text-3xl font-semibold text-text">Meet Your AI Writing Partners</h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted">
              Custom-built AI tools designed to assist, not replace, the creative writer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool) => (
              <Card key={tool.title} className="flex flex-col items-center p-8 text-center">
                <div className={`mb-4 rounded-full p-4 ${tool.bgColor}`}>{tool.icon}</div>
                <h3 className="mb-2 font-display text-xl font-semibold text-text">{tool.title}</h3>
                <p className="flex-grow text-sm text-muted">{tool.description}</p>
                <a href={tool.href} target="_blank" rel="noopener noreferrer" className="mt-6 no-underline">
                  <Button className="text-xs uppercase tracking-wide">Launch Tool</Button>
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="mb-12 text-center font-display text-3xl font-semibold text-text">Explore the Retreat</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40">
              <h3 className="mb-2 font-display text-xl font-semibold text-text">Lessons &amp; DIY MFA</h3>
              <p className="text-muted">Learn to collaborate with AI through structured lessons and projects.</p>
            </Card>
            <Card className="p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40">
              <h3 className="mb-2 font-display text-xl font-semibold text-text">AI Tools &amp; Custom GPTs</h3>
              <p className="text-muted">Use our pre-trained AI writing partners or build your own custom muse.</p>
            </Card>
            <Card className="p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40">
              <h3 className="mb-2 font-display text-xl font-semibold text-text">Explore Genres</h3>
              <p className="text-muted">Find tools and community spaces tailored to your chosen craft.</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
