console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const elves = parseInput(input);
const elfSums = elves.map(sumNumbers);
const largestElf = Math.max(...elfSums);

console.log({elves, elfSums, largestElf });

function parseInput(rawInput: string): number[][] {
  const rawElfStrings = rawInput.split("\n\n");
  const parsedElves = rawElfStrings.map(convertRawElfStringToNumbers);
  return parsedElves;
}

function convertRawElfStringToNumbers(rawElfString: string): number[] {
  const elfStrings = rawElfString.split("\n");
  return elfStrings.map(Number);
}

function sumNumbers(numbers: number[]): number {
  let addedNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    addedNumbers = numbers[i] + addedNumbers;
  }

  return addedNumbers;
}
