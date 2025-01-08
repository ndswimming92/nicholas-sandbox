console.log("\nHello - Advent of Code Day 2!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const boxDimensionStrings = input.trim().split("\n");
const boxDimensionsList = boxDimensionStrings.map(parseBoxDimensions);
const wrappingPaperNeededForEachBox = boxDimensionsList.map(
  calcualateTotalPaperForBox
);
const totalSquareFeetOfWrappingPaper = addNumbers(wrappingPaperNeededForEachBox);

console.log({ boxDimensionsList, wrappingPaperNeededForEachBox, totalSquareFeetOfWrappingPaper });

function parseBoxDimensions(dimensionsString: string): number[] {
  const boxDimensions = dimensionsString.split("x");
  return boxDimensions.map(Number);
}

function calcualateTotalPaperForBox(boxDimensions: number[]): number {
  return (
    calculateSurfaceAreaOfBox(boxDimensions) +
    calculateAreaOfSmallestSide(boxDimensions)
  );
}

function calculateSurfaceAreaOfBox(boxDimensions: number[]): number {
  const length = boxDimensions[0];
  const width = boxDimensions[1];
  const height = boxDimensions[2];
  const surfaceArea =
    2 * length * width + 2 * width * height + 2 * height * length;

  return surfaceArea;
}

function calculateAreaOfSmallestSide(boxDimensions: number[]): number {
  const sortBoxDimensionsSmalestLargest = boxDimensions.sort(
    (a: number, b: number) => a - b
  );
  const smallestSideArea =
    sortBoxDimensionsSmalestLargest[0] * sortBoxDimensionsSmalestLargest[1];

  return smallestSideArea;
}

function addNumbers(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
