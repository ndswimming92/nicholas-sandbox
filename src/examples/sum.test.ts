import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
    // Arrange
   const a = 1;
   const b = 2;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(3);
})