"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function RequireVerifiedAndAccepted({ children }: { children: React.ReactNode }) {
  const { user, profile, resendVerification, refreshStatus } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user && profile && !profile.acceptedTermsAt) {
      router.replace(`/writers-circle/terms?next=${encodeURIComponent(pathname || "/writers-circle/app")}`);
    }
  }, [user, profile, pathname, router]);

  if (!user || !profile) return null;

  if (!user.emailVerified) {
    return (
      <div className="rounded-2xl border border-border bg-surface-1 p-6 shadow-editorial">
        <h3 className="font-display text-lg font-semibold">Verify your email to participate</h3>
        <p className="mt-2 text-sm text-muted">You can browse, but posting, commenting, and RSVPs require a verified email.</p>
        <p className="mt-2 text-sm text-muted">
          Look for an email from <span className="font-semibold text-text">AI Writers&apos; Retreat</span> (it may arrive from a <code className="text-xs">noreply@</code> address). Be sure to check your spam or promotions folder.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent/90" onClick={resendVerification}>Resend verification email</button>
          <button className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2" onClick={refreshStatus}>I&apos;ve verified — refresh</button>
        </div>
      </div>
    );
  }

  if (!profile.acceptedTermsAt) return null;
  return <>{children}</>;
}
