// The Robot Vacuum's Best Excuse — make.fun entry.
//
// Writes one excuse line (a single line, at most 140 characters) to
// /output/entry.txt. Fully deterministic: no input, no clock, no
// network — the same line every run.
//
// The joke: the vacuum's lidar misreads the crumbs as furniture, and
// a polite vacuum never vacuums furniture. It is an excuse from the
// vacuum itself, rooted in its own world (lidar, mapping), with the
// turn landing at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I didn't miss that spot — my lidar filed your crumbs under 'furniture', and I don't vacuum furniture.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

function main(): void {
  const line = EXCUSE.trim();
  if (line.length === 0) {
    throw new Error("excuse must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `excuse must be at most ${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file holds exactly the excuse text.
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
