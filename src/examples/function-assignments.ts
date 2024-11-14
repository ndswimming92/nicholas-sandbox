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
  const celsius = (fahrenheit-32) * (5/9);
  return celsius;
}
console.log(fahrenheitToCelsius(32));

//isDivisible(4, 2);
// Output: true

//oddOrEven(3);
// Output: 'odd'

//countVowels("hello");
// Output: 2

//firstCharacter("Hello");
// Output: "H"

//reverseString("Hello");
// Output: "olleH"