"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";
import { TERMS_VERSION } from "@/lib/constants";

export default function TermsPage() {
  const [checked, setChecked] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-2xl border border-border bg-panel p-8">
        <h1 className="font-serif text-4xl">Writer&apos;s Circle Rules & Data Statement</h1>
        <h2 className="mt-6 font-serif text-2xl">Community Rules</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm">
          <li>Be respectful. No harassment, hate speech, threats, or bullying.</li>
          <li>Keep it constructive. This is a workshop space.</li>
          <li>No explicit sexual content, pornography, or graphic violence.</li>
          <li>No doxxing or sharing private personal information (yours or others).</li>
          <li>No spam, scams, or misleading promotions.</li>
          <li>If you share writing, you own your work. Don&apos;t post others&apos; copyrighted content.</li>
          <li>Admins moderate posts. AIWR may remove content or accounts to protect the space.</li>
        </ul>
        <h2 className="mt-6 font-serif text-2xl">Data Statement</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm">
          <li>AIWR does not sell your personal data.</li>
          <li>AIWR uses your data only to operate the Writer&apos;s Circle (accounts, profiles, posts, comments, events).</li>
          <li>You can request deletion of your account data by contacting AIWR (contact support).</li>
          <li>Public within members: your profile and approved posts/comments are visible to logged-in members.</li>
        </ul>

        <label className="mt-8 flex items-center gap-3 text-sm">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          I agree to the Writer&apos;s Circle Rules and Data Statement.
        </label>

        <button
          disabled={!checked || !user}
          className="mt-4 rounded-xl bg-primary px-5 py-3 text-primaryText disabled:opacity-50"
          onClick={async () => {
            if (!user) return;
            await updateDoc(doc(db, "users", user.uid), {
              acceptedTermsAt: serverTimestamp(),
              acceptedTermsVersion: TERMS_VERSION,
            });
            const next = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("next") : null;
            router.push(next || "/app");
          }}
        >
          Agree and Continue
        </button>
        <p className="mt-6 text-sm text-muted"><Link href="/">Back to home</Link></p>
      </div>
    </div>
  );
}
