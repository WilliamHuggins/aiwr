export interface Lesson {
  slug: string;
  title: string;
  module: string;
  readingTime: number;
  videoUrl?: string;
  content: string;
}

export type UserRole = "USER" | "ADMIN" | "MOD";
export type PostStatus = "PENDING" | "APPROVED" | "DENIED";
export type RsvpStatus = "GOING" | "INTERESTED" | "NOT_GOING";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  username: string;
  bio: string;
  avatarUrl: string;
  genres: string[];
  goals: string;
  role: UserRole;
  emailVerified: boolean;
  acceptedTermsAt: unknown | null;
  acceptedTermsVersion: string | null;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface Post {
  id: string;
  authorId: string;
  authorUsername: string;
  authorName: string;
  authorAvatarUrl: string;
  title?: string;
  body: string;
  status: PostStatus;
  moderation: {
    reviewedBy: string | null;
    reviewedAt: unknown | null;
    decisionReason: string | null;
  };
  commentCount: number;
  likeCount: number;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface Comment {
  id: string;
  authorId: string;
  authorUsername: string;
  authorName: string;
  authorAvatarUrl: string;
  body: string;
  createdAt?: unknown;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  startAt?: unknown;
  endAt?: unknown;
  location?: string;
  virtualLink?: string;
  capacity?: number;
  createdBy: string;
  createdAt?: unknown;
}
