"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";

const links = [
  ["/app", "Feed"],
  ["/app/my-posts", "My Posts"],
  ["/app/events", "Events"],
  ["/app/profile", "Profile"],
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const { isAdminOrMod } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/app" className="no-underline font-serif text-xl font-semibold">AIWR Writer&apos;s Circle</Link>
        <nav className="flex items-center gap-3 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={`rounded-lg px-3 py-1 no-underline ${pathname === href ? "bg-panel" : ""}`}>
              {label}
            </Link>
          ))}
          {isAdminOrMod && <Link href="/app/admin" className="rounded-lg px-3 py-1 no-underline">Admin</Link>}
          <button className="rounded-lg border border-border px-3 py-1" onClick={() => logout()}>Logout</button>
        </nav>
      </div>
    </header>
  );
}
