console.log("\nHello - Advent of Code Day 1!\n");

const input = await Bun.file(`${import.meta.dir}/input.txt`).text();
console.log("Unsorted Input:");
console.log(input);

const lines = input.split("\n");
console.log(lines);

const column1 = [];
const column2 = [];

for (let i = 0; i < lines.length; i++) {
  const currentLine = lines[i];

  const lineParts = currentLine.split("   ");
  const a = Number(lineParts[0]);
  const b = Number(lineParts[1]);

  column1.push(a);
  column2.push(b);
}

const sortedColumn1 = column1.sort();
const sortedColumn2 = column2.sort();
console.log({ sortedColumn1, sortedColumn2 });

let differenceSum = 0;

for (let i = 0; i < sortedColumn1.length; i++) {
  const a = sortedColumn1[i];
  const b = sortedColumn2[i];

  const difference = a - b;
  const absDifference = Math.abs(difference);

  differenceSum = absDifference + differenceSum;
  console.log({ differenceSum, absDifference });
}
