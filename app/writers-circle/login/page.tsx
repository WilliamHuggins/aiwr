"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { firebaseConfigError } from "@/lib/firebaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await login(email.trim(), password);
      const next = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("next") : null;
      router.push(next || "/writers-circle/app");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to sign in. Please check your credentials.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-panel p-6">
        <h1 className="font-serif text-3xl">Welcome back</h1>
        {firebaseConfigError && <p className="mt-3 rounded-lg border border-rose-300 bg-rose-50 p-2 text-sm text-rose-800">{firebaseConfigError}</p>}
        <input className="mt-4 w-full rounded-xl border border-border bg-bg p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="mt-2 text-sm text-rose-700">{error}</p>}
        <button disabled={submitting} className="mt-4 w-full rounded-xl bg-primary py-3 text-primaryText disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Signing in..." : "Log in"}</button>
        <p className="mt-4 text-sm text-muted">Need an account? <Link href="/writers-circle/signup">Sign up</Link></p>
      </form>
    </div>
  );
}
