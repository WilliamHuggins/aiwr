"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/writers-circle/login?next=${encodeURIComponent(pathname || "/writers-circle/app")}`);
    }
  }, [loading, user, router, pathname]);

  if (loading || !user) return <div className="p-8 text-center text-muted">Loading your circle...</div>;
  return <>{children}</>;
}
