"use client";

import { updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { uploadAvatar } from "@/lib/storage";
import { db } from "@/lib/firebaseClient";
import { useAuth } from "@/components/AuthProvider";

export default function AvatarUpload() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2 text-sm transition-colors hover:bg-surface-2">
      Upload avatar
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const url = await uploadAvatar(user.uid, file);
          await updateDoc(doc(db, "users", user.uid), { avatarUrl: url, updatedAt: serverTimestamp() });
        }}
      />
    </label>
  );
}
