import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import type { EventItem, Post, UserProfile } from "@/lib/types";

export const usersCol = collection(db, "users");
export const postsCol = collection(db, "posts");
export const eventsCol = collection(db, "events");

export async function ensureUserProfile(profile: UserProfile) {
  await setDoc(doc(db, "users", profile.uid), { ...profile, updatedAt: serverTimestamp() }, { merge: true });
}

export async function mirrorEmailVerification(uid: string, emailVerified: boolean) {
  await updateDoc(doc(db, "users", uid), { emailVerified, updatedAt: serverTimestamp() });
}

export function subscribeApprovedPosts(cb: (posts: Post[]) => void) {
  return onSnapshot(query(postsCol, where("status", "==", "APPROVED"), orderBy("createdAt", "desc")), (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Post, "id">) })));
  });
}

export function subscribeMyPosts(uid: string, cb: (posts: Post[]) => void) {
  return onSnapshot(query(postsCol, where("authorId", "==", uid), orderBy("createdAt", "desc")), (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Post, "id">) })));
  });
}

export async function createPost(input: Omit<Post, "id" | "createdAt" | "updatedAt">) {
  await addDoc(postsCol, { ...input, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
}

export async function updatePost(postId: string, updates: Partial<Post>) {
  await updateDoc(doc(db, "posts", postId), { ...updates, updatedAt: serverTimestamp() });
}

export async function removePost(postId: string) {
  await deleteDoc(doc(db, "posts", postId));
}

export async function fetchPost(postId: string) {
  const snap = await getDoc(doc(db, "posts", postId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as Omit<Post, "id">) };
}

export async function fetchEvents() {
  const snap = await getDocs(query(eventsCol, orderBy("startAt", "asc"), limit(100)));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<EventItem, "id">) }));
}
