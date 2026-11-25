// One Line, One Laugh — make.fun entry
// Writes a single funny line (at most 200 characters) to /output/entry.txt,
// where the sealed scorer reads it. The line is fixed text, so every run
// produces byte-identical output.
//
// The gate requires UTF-8 text of 1 to 200 characters, not only white
// space, so the program validates the line before writing and fails loudly
// instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My fridge filed a restraining order against my 2 a.m. snacking.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
