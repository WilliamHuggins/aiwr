export function normalizeUsername(username: string) {
  return username.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 24);
}

export function isValidUsername(username: string) {
  return /^[a-z0-9_-]{3,24}$/.test(username);
}
