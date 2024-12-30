console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const basementFloor = landedOnFloor(input);

console.log({ basementFloor });

function landedOnFloor(direction: string): number {
  let floorCount = 0;
  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === "(") {
      floorCount++;
    } else if (direction[i] === ")") {
      floorCount--;
    }

    if (floorCount === -1) {
      return i + 1;
    }
  }
  return -1;
}
