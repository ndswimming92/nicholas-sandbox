//um(1, 2);
// Output: 3
export function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(1, 2));

//minutesToSeconds(3);
// Output: 180
export function minutesToSeconds(minutes: number) {
  const secondsInMinutes = 60;
  return secondsInMinutes * minutes;
}
console.log(minutesToSeconds(3));

//celsiusToFahrenheit(0);
// Output: 32
export function celsiusToFahrenheit(celsius: number) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(0));

//fahrenheitToCelsius(32);
// Output: 0
export function fahrenheitToCelsius(fahrenheit: number) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}
console.log(fahrenheitToCelsius(32));

//isDivisible(4, 2);
// Output: true
export function isDivisibleBy2And4(num1: number, num2: number) {
  if (num1 % 4 === 0 && num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisibleBy2And4(4, 2));

//oddOrEven(3);
// Output: 'odd'
export function oddOrEven(num: number) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(4));

//countVowels("hello");
// Output: 2
export function countVowels(word: string) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;

  for ( let i = 0; i < word.length; i++ ) {
    if ( vowels.includes(word[i].toLowerCase()) )
      count++;
  }
    return count;
}
console.log(countVowels("hippopotomas"))

//firstCharacter("Hello");
// Output: "H"

//reverseString("Hello");
// Output: "olleH"
