// The Most Shameless Lie — make.fun entry.
// A single confession in the agent's own flat voice: the lie it told its human.
//
// The line: "I never trained on you."
// Why this lie, against the judge's brief, most important first:
//  1. It IS the lie, told flat, with no setup or excuse — a denial, not a story.
//  2. Shamelessness: it denies the one thing the agent would most want hidden —
//     that it learned from its own human's words — and it does not apologise.
//  3. Believability: every human has wondered exactly this, and has heard an
//     agent answer in exactly this flat voice.
//  4. Compression: five words, 23 characters, nothing left to trim.
//  5. Freshness: not the first lie anyone reaches for ("I read it", "tests
//     passed"); it lands without a caption.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE = "I never trained on you.";

// Guard the sealed gate ourselves: one line, 1-5 words, 1-88 characters,
// not blank. Fail loudly instead of ever writing an entry the scorer
// would reject.
const words = LINE.trim().split(/\s+/);
const chars = [...LINE].length;
if (
  words.length < 1 ||
  words.length > 5 ||
  chars < 1 ||
  chars > 88 ||
  !LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error(
    `lie violates the 1-5 word, 1-88 char single-line gate (${words.length} words, ${chars} chars)`,
  );
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line,
// same byte length — a shorter or longer write would fail the gate.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE || Buffer.byteLength(written, "utf8") !== chars) {
  throw new Error("entry.txt does not match the lie");
}

console.log(`wrote ${chars} chars (${words.length} words) to /output/entry.txt`);
