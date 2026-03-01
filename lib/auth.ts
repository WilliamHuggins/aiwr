import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, firebaseConfigError, isFirebaseConfigured } from "@/lib/firebaseClient";

function getClientAuth() {
  if (!isFirebaseConfigured) {
    throw new Error(firebaseConfigError || "Firebase configuration is missing.");
  }
  if (!auth) {
    throw new Error("Firebase auth is only available in the browser.");
  }
  return auth;
}

export async function signup(email: string, password: string, displayName: string) {
  const clientAuth = getClientAuth();
  const credential = await createUserWithEmailAndPassword(clientAuth, email, password);
  await sendEmailVerification(credential.user);

  try {
    await setDoc(
      doc(db, "users", credential.user.uid),
      {
        uid: credential.user.uid,
        email: credential.user.email,
        displayName,
        username: displayName.toLowerCase().replace(/\s+/g, "-").slice(0, 20),
        bio: "",
        avatarUrl: "",
        genres: [],
        goals: "",
        role: "USER",
        emailVerified: credential.user.emailVerified,
        acceptedTermsAt: null,
        acceptedTermsVersion: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
  } catch (error) {
    console.error("User account created, but profile write failed.", error);
  }

  return credential;
}

export function login(email: string, password: string) {
  const clientAuth = getClientAuth();
  return signInWithEmailAndPassword(clientAuth, email, password);
}

export function logout() {
  const clientAuth = getClientAuth();
  return signOut(clientAuth);
}
