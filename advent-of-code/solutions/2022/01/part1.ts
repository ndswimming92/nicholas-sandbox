console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input);

const lines = input.split('\n\n')
const currentLine = lines;
console.log({lines});
