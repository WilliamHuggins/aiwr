"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      const next = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("next") : null;
      router.push(next || "/app");
    } catch {
      setError("Unable to sign in. Please check your credentials.");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-panel p-6">
        <h1 className="font-serif text-3xl">Welcome back</h1>
        <input className="mt-4 w-full rounded-xl border border-border bg-bg p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="mt-2 text-sm text-rose-700">{error}</p>}
        <button className="mt-4 w-full rounded-xl bg-primary py-3 text-primaryText">Log in</button>
        <p className="mt-4 text-sm text-muted">Need an account? <Link href="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}
