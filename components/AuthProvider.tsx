"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, sendEmailVerification, User } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseClient";
import { getVerificationSettings } from "@/lib/auth";
import type { UserProfile } from "@/lib/types";

type AuthContextValue = {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdminOrMod: boolean;
  resendVerification: () => Promise<void>;
  refreshStatus: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(userRef);

        if (!snap.exists()) {
          await setDoc(userRef, {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName || "Writer",
            username: (currentUser.email || "writer").split("@")[0].slice(0, 20),
            bio: "",
            avatarUrl: "",
            genres: [],
            goals: "",
            role: "USER",
            emailVerified: currentUser.emailVerified,
            showEmail: false,
            location: "",
            showLocation: false,
            acceptedTermsAt: null,
            acceptedTermsVersion: null,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } else {
          await updateDoc(userRef, {
            emailVerified: currentUser.emailVerified,
            updatedAt: serverTimestamp(),
          });
        }

        const updated = await getDoc(userRef);
        setProfile(updated.data() as UserProfile);
      } catch (error) {
        console.error("Failed to load user profile document.", error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [refreshTick]);

  const value = useMemo(
    () => ({
      user,
      profile,
      loading,
      isAdminOrMod: profile?.role === "ADMIN" || profile?.role === "MOD",
      resendVerification: async () => {
        if (user) await sendEmailVerification(user, getVerificationSettings());
      },
      refreshStatus: async () => {
        if (!user) return;
        await user.reload();
        setRefreshTick((v) => v + 1);
      },
    }),
    [user, profile, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}
