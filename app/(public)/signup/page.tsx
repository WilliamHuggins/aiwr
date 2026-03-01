"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signup } from "@/lib/auth";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await signup(email, password, name);
    setMsg("Account created. Verification email sent.");
    setTimeout(() => router.push("/terms?next=/app"), 700);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-panel p-6">
        <h1 className="font-serif text-3xl">Join AIWR Writer&apos;s Circle</h1>
        <input className="mt-4 w-full rounded-xl border border-border bg-bg p-3" placeholder="Display name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="mt-3 w-full rounded-xl border border-border bg-bg p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {msg && <p className="mt-2 text-sm text-muted">{msg}</p>}
        <button className="mt-4 w-full rounded-xl bg-primary py-3 text-primaryText">Create account</button>
        <p className="mt-4 text-sm text-muted">Already a member? <Link href="/login">Log in</Link></p>
      </form>
    </div>
  );
}
