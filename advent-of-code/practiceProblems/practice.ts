const input1 = "JavaScript";

const arrayOfStrings = individualCharacters(input1);

console.log({ arrayOfStrings });

function individualCharacters(string: string): string[] {
  const newStringArray = string.split("");
  return newStringArray;
}

//-------------->>>

const input2 = "document.pdf";

const newString = extractPDF(input2);
console.log({ newString });

function extractPDF(string: string): string {
  const parts = string.split(".");
  return parts[parts.length - 1];
}

//-------------->>>

const input4 = "apple,banana,orange";

const fruitArray = fruitsToArray(input4);
console.log({ fruitArray });

function fruitsToArray(string: string): string[] {
  const fruitsArray = string.split(",");
  return fruitsArray;
}

//-------------->>>

const input5 = "Jane Smith";

const nameArray = splitName(input5);
console.log({ nameArray });

function splitName(string: string): string[] {
  const namesSplit = string.split(" ");
  return namesSplit;
}

//-------------->>>

const input6 = "JavaScript is fun";
const countWords = stringToArrayString(input6);

console.log({ countWords });

function stringToArrayString(string: string): number {
  const splitString = string.split(" ");
  return splitString.length;
}

//-------------->>>

const input7 = "I love coding";
const reversedWords = reverseWord(input7);
console.log({ reversedWords });

function reverseWord(sentence: string): string {
  const arrayString = sentence.split(" ");
  arrayString.reverse();
  return arrayString.join(" ");
}

//-------------->>>

const input8 = "Jane Mary Doe";
const initials = getNameInitials(input8);
console.log({ initials });

function getNameInitials(string: string): string {
  const words = string.split(" ");
  return words.map((word) => word[0].toUpperCase()).join(".");
}

//-------------->>>

const input9 = "user@example.com";
const split = splitEmail(input9);

console.log({ split });

function splitEmail(string: string): string[] {
  return string.split("@");
}

//-------------->>>
// Arrow Functions

const add = (a: number, b: number) => a + b;

console.log(`Numbers added = ${add(3, 4)}`);

//-------------->>>

const greet = () => "Hello World!";

console.log(`Greeting: ${greet()}`);