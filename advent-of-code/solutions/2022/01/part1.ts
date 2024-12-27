console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input, "\n");

const lines = input.split("\n\n");
console.log({ lines }, "\n");

const largestCalories = [];

for (let i = 0; i < lines.length; i++) {
  const currentLine = lines[i];

  const cleanString = currentLine.split("\n");

  const numberCalories = convertStringsToNumbers(cleanString);

  const totalCalories = addArrayOfNumbers(numberCalories);

  console.log(
    {
      currentLine,
      cleanString,
      numberCalories,
      totalCalories,
    },
    "\n"
  );

  largestCalories.push(totalCalories);
  console.log({ largestCalories });
}

const maxNumber = Math.max(...largestCalories);
console.log({ maxNumber });

function convertStringsToNumbers(stringsToConvert: string[]): number[] {
  const newArray = [];

  for (let i = 0; i < stringsToConvert.length; i++) {
    const element = stringsToConvert[i];
    const elementAsNumber = Number(element);

    newArray.push(elementAsNumber);
  }

  return newArray;
}

function addArrayOfNumbers(numbers: number[]): number {
  let addedNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    const individualNumbers = numbers[i];

    addedNumbers = numbers[i] + addedNumbers;
  }

  return addedNumbers;
}
