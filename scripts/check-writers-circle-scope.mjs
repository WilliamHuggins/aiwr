import { readFileSync } from "node:fs";

function mustContain(filePath, snippet) {
  const source = readFileSync(filePath, "utf8");
  if (!source.includes(snippet)) {
    throw new Error(`${filePath} must contain: ${snippet}`);
  }
}

function mustNotContain(filePath, snippet) {
  const source = readFileSync(filePath, "utf8");
  if (source.includes(snippet)) {
    throw new Error(`${filePath} must NOT contain: ${snippet}`);
  }
}

mustContain("app/page.tsx", "The Writer");
mustNotContain("app/page.tsx", "AIWR Writer");
mustContain("app/writers-circle/page.tsx", "AIWR Writer");

console.log("Writers Circle scope check passed.");
