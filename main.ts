// Fridge Roast: One Line, Biggest Laugh
// make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes a single original roast line about a smart fridge to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge's AI narrates my midnight snacks like a nature documentary — last night it called my 2 a.m. leftovers 'a cry for help, served cold.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
