console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const depthMeasurement = parseInput(input);
const numberofIncreasedMeasurements = getIncreaseCount(depthMeasurement);

console.log({ depthMeasurement });
console.log({ numberofIncreasedMeasurements });

function parseInput(rawInput: string): number[] {
  const rawSonarStrings = rawInput.split("\n");
  console.log({ rawSonarStrings });
  return rawSonarStrings.map(Number);
}

function getIncreaseCount(sonarNumbers: number[]): number {
  let totalIncrease = 0;
  for (let i = 0; i < sonarNumbers.length - 1; i++) {
    const currentWindowValue = getMeasurementWindowSum(sonarNumbers, i);
    const nextWindowValue = getMeasurementWindowSum(sonarNumbers, i + 1);
    console.log({ currentWindowValue, nextWindowValue });
    if (currentWindowValue < nextWindowValue) {
      totalIncrease = totalIncrease + 1;
    }
  }
  return totalIncrease;
}

function getMeasurementWindowSum(
  depthMeasurements: number[],
  index: number
): number {
  return (
    depthMeasurements[index] +
    depthMeasurements[index + 1] +
    depthMeasurements[index + 2]
  );
}
