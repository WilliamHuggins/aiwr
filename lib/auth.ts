import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseClient";

export async function signup(email: string, password: string, displayName: string) {
  if (!auth) throw new Error("Firebase auth unavailable");
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(credential.user);

  await setDoc(doc(db, "users", credential.user.uid), {
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
  }, { merge: true });

  return credential;
}

export function login(email: string, password: string) {
  if (!auth) throw new Error("Firebase auth unavailable");
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  if (!auth) throw new Error("Firebase auth unavailable");
  return signOut(auth);
}
