import Link from "next/link";
import { Coffee, Instagram, Mail, Music2, Twitter } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const socialLinks = [
  { href: "https://x.com/aiwriterretreat", label: "X", icon: Twitter },
  { href: "https://tiktok.com/@aiwritersretreat", label: "TikTok", icon: Music2 },
  { href: "https://www.instagram.com/aiwritersretreat", label: "Instagram", icon: Instagram },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/diy-mfa", label: "DIY MFA" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  const emailUser = "message";
  const emailDomain = "aiwritersretreat.com";

  return (
    <footer className="mt-16 border-t bg-surface-1">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-display text-lg text-text">AI Writers&apos; Retreat</h3>
            <p className="max-w-sm text-sm text-muted">
              Craft-forward resources for writers navigating AI with precision and taste.
            </p>
            <a href={`mailto:${emailUser}@${emailDomain}`} className="inline-block no-underline">
              <Button variant="secondary" className="text-xs uppercase tracking-wide">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-ui text-xs uppercase tracking-[0.18em] text-muted">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text no-underline hover:text-accent focus-ring rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:justify-self-end">
            <h4 className="font-ui text-xs uppercase tracking-[0.18em] text-muted">Follow</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-bg text-muted transition-colors hover:text-accent focus-ring"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <a href="https://coff.ee/aiwritersretreat" target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
              <Button className="text-xs uppercase tracking-wide">
                <Coffee className="h-4 w-4" />
                Donate
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} AI Writers’ Retreat. All Rights Reserved.</p>
          <p className="mt-1">This is an independent project. Content and tools are for personal learning and use.</p>
        </div>
      </Container>
    </footer>
  );
}
