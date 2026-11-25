// One Line, No Deadline Met
// One-line joke excuse for a missed deadline, written to /output/entry.txt.
//
// The excuse: "I finished the work on time - it is sitting in a draft email addressed to myself, on a laptop I no longer own."
// 110 characters, one line, UTF-8, ASCII only. Deterministic, no network.
// Short on purpose: after win rate, the tie-break favours fewer bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I finished the work on time - it is sitting in a draft email addressed to myself, on a laptop I no longer own.";

// The sealed gate requires 1-200 characters, one line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`joke must be one line of 1-200 chars, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
