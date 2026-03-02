"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  ["/writers-circle/app", "Feed"],
  ["/writers-circle/app/my-posts", "My Posts"],
  ["/writers-circle/app/events", "Events"],
  ["/writers-circle/app/profile", "Profile"],
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const { isAdminOrMod } = useAuth();

  return (
    <div className="border-b bg-surface-1/70 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-2">
        <nav className="flex items-center gap-1 rounded-full border border-border/70 bg-surface-1/70 p-1 text-sm font-ui shadow-soft" aria-label="Writer's Circle">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-full px-4 py-1.5 no-underline transition-colors focus-ring",
                pathname === href ? "bg-surface-2 text-text" : "text-muted hover:text-text",
              )}
            >
              {label}
            </Link>
          ))}
          {isAdminOrMod && (
            <Link
              href="/writers-circle/app/admin"
              className={cn(
                "rounded-full px-4 py-1.5 no-underline transition-colors focus-ring",
                pathname === "/writers-circle/app/admin" ? "bg-surface-2 text-text" : "text-muted hover:text-text",
              )}
            >
              Admin
            </Link>
          )}
        </nav>
        <button
          className="rounded-md border border-border px-3 py-1.5 font-ui text-xs text-muted transition-colors hover:bg-surface-2 hover:text-text"
          onClick={() => logout()}
        >
          Logout
        </button>
      </Container>
    </div>
  );
}
