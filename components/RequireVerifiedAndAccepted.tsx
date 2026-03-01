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
      <div className="rounded-2xl border border-border bg-panel p-6 shadow">
        <h3 className="font-semibold">Verify your email to participate</h3>
        <p className="mt-2 text-sm text-muted">You can browse, but posting, commenting, and RSVPs require verification.</p>
        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-primary px-4 py-2 text-primaryText" onClick={resendVerification}>Resend verification email</button>
          <button className="rounded-xl border border-border px-4 py-2" onClick={refreshStatus}>I&apos;ve verified — refresh</button>
        </div>
      </div>
    );
  }

  if (!profile.acceptedTermsAt) return null;
  return <>{children}</>;
}
