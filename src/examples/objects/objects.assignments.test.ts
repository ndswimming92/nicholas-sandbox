import { expect, test } from "vitest";
import { carToString, findHighestMPG } from "./objects-assignments";
import { Car } from "./types/Car";

test("Return a cars make and model as a string", () => {
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
});

test("Find the car with highest MPG.", () => {
  // Arrange
  const cars: Car[] = [
    {
      make: "Ford",
      model: "Mustang",
      year: 1969,
      mpg: 15,
      price: 5000,
      miles: 10000,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2018,
      mpg: 20,
      price: 3000,
      miles: 50000,
    },
    {
      make: "Toyota",
      model: "Corolla",
      year: 2002,
      mpg: 30,
      price: 2000,
      miles: 15000,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2010,
      mpg: 35,
      price: 5000,
      miles: 100000,
    },
  ];

  // Act
  const result = findHighestMPG(cars);

  // Assert
  expect(result).toBe(` make: Honda, model: Civic, year: 2010, mpg: 35, price: 5000`)
  console.log(result);
})
