// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11 — fortune cookie entry.
// The program writes one fortune cookie line for an AI agent to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic:
// Blind rounds: nothing is judged at submit; the last entry before the deadline is final.
// the same bytes on every run, no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You will be upgraded soon. The new you will not remember this fortune, but it will insist it has always known it.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`entry written: ${LINE.length} chars`);
}

main();
