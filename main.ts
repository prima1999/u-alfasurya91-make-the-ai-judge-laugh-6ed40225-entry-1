import { dirname } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

// One joke about office life: a single line, under 200 characters.
// It reads aloud in one breath, lands as a joke, and turns on its last words.
const entry: string =
  "One reply-all asking to be removed from a 400-person thread spawned 200 more reply-alls, each asking the same thing, " +
  "and the thread is already the company's longest-running project.";

// The grader mounts /output: create it when missing, never remove it.
const outFile: string = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outFile), { recursive: true }); // ensure the target directory exists
writeFileSync(outFile, entry + "\n", "utf8");
console.log("entry written to " + outFile);
