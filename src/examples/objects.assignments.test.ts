import { expect, test } from "vitest";
import { carToString } from "./objects-assignments"

test('Return a cars make and model as a string', () => {
    // Arrange
    const exampleCar = {
        make: "Ford",
        model: "Mustang",
        year: 1969,
        mpg: 15,
        price: 5000,
        miles: 10000,
  };
  
    // Act
    const result = carToString(exampleCar);

    // Assert
    expect(result).toBe("1969 Ford Mustang");
    console.log(result);

})