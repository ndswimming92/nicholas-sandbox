import { expect, test } from 'vitest'
import { celsiusToFahrenheit, fahrenheitToCelsius, minutesToSeconds, sum } from './function-assignments';

test('adds 1 + 2 to equal 3', () => {
    // Arrange
   const a = 1;
   const b = 2;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(3);
})

test('converts 3 minutes to 180 seconds', () => {
    // Arrange
    const minutes = 3;


    // Act
    const result = minutesToSeconds(minutes);

    // Assert
    expect(result).toBe(180);
})

test('converts 0 celcius to 32 fahrenheit', () => {
    // Arrange
    const celcius = 0;

    // Act
    const result = celsiusToFahrenheit(celcius);

    // Assert
    expect(result).toBe(32);
})

test('converts 32 fahrenheit to 0 celsius', () => {
    // Arrange
    const fahrenheit = 32;

    // Act
    const result = fahrenheitToCelsius(fahrenheit);

    // Assert
    expect(result).toBe(0);
})