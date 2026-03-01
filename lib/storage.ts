import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebaseClient";

export async function uploadAvatar(uid: string, file: File) {
  if (!storage) throw new Error("Firebase storage unavailable");
  const avatarRef = ref(storage, `avatars/${uid}/${Date.now()}.jpg`);
  await uploadBytes(avatarRef, file, { contentType: file.type });
  return getDownloadURL(avatarRef);
}
