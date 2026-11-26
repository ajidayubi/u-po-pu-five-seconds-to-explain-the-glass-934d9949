import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That glass was squatting in my sunbeam, so I evicted it \u2014 rent was due and it had no paws to pay with.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
