console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const currentFloor = landedOnFloor(input);
console.log(currentFloor);

function landedOnFloor(direction: string): number {
  let floorCount = 0;
  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === "(") {
      floorCount = floorCount + 1;
    } else if (direction[i] === ")") {
      floorCount = floorCount - 1;
    }
  }
  return floorCount;
}
