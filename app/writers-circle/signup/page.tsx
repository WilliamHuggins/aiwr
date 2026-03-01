"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signup } from "@/lib/auth";
import { firebaseConfigError } from "@/lib/firebaseClient";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setMsg("");
    setSubmitting(true);

    try {
      await signup(email.trim(), password, name.trim());
      setMsg("Account created. Verification email sent.");
      setTimeout(() => router.push("/writers-circle/terms?next=/writers-circle/app"), 700);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to create your account right now.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-panel p-6">
        <h1 className="font-serif text-3xl">Join AIWR Writer&apos;s Circle</h1>
        {firebaseConfigError && <p className="mt-3 rounded-lg border border-rose-300 bg-rose-50 p-2 text-sm text-rose-800">{firebaseConfigError}</p>}
        <input className="mt-4 w-full rounded-xl border border-border bg-bg p-3" placeholder="Display name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        {msg && <p className="mt-2 text-sm text-emerald-700">{msg}</p>}
        {error && <p className="mt-2 text-sm text-rose-700">{error}</p>}
        <button disabled={submitting} className="mt-4 w-full rounded-xl bg-primary py-3 text-primaryText disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Creating account..." : "Create account"}</button>
        <p className="mt-4 text-sm text-muted">Already a member? <Link href="/writers-circle/login">Log in</Link></p>
      </form>
    </div>
  );
}
