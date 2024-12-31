console.log("\nHello - Advent of Code Day 2!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const boxDimensionStrings = input.trim().split("\n");
const boxDimensions = boxDimensionStrings.map(parseBoxDimensions);
console.log({ boxDimensions });

function parseBoxDimensions(dimensionsString: string): number[] {
  const boxDimensions = dimensionsString.split("x");
  return boxDimensions.map(Number);
}

console.log({ boxDimensionStrings });
