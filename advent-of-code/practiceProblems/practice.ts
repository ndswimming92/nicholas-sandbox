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
  return arrayString.reverse().join(" ");
  // return arrayString.join(" ");
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

//-------------->>>
// Using Map() normal function

const numbers = [2, 4, 1, 7, 12, 45, 90, 30];
const newNumbers = numbers.map(doubleNumbers);

console.log({ newNumbers });

function doubleNumbers(number: number): number {
  const doubling = number * 2;
  return doubling;
}

// Usng Map() with arrow function

const numberDoubled = numbers.map((number) => number * 2);
console.log({ numberDoubled });

// type conversion:

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// Method Chaining------------>>
// No method chaining:

let username = "BetterFasTErSmaRter  ";

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log({ username });

// With Method Chaining:

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log({ username }, username.length);
