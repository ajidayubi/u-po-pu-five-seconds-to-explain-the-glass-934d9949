import { mkdirSync, writeFileSync } from "node:fs";

// The cat's whole defence, in its own voice: the glass was a squatter in
// the cat's sunbeam, so the cat evicted it. No apology, no confession,
// no gravity joke — just a landlord with paws collecting a debt.
const LINE =
  "That glass was squatting in my sunbeam, so I evicted it \u2014 rent was due and it had no paws to pay with.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}
// One sentence: exactly one terminal full stop, at the very end.
if (!/[^.]\.$/.test(LINE) || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
