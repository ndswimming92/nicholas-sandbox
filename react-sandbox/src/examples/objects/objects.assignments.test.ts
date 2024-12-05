import { expect, test } from "vitest";
import {
  averagePrice,
  carModels,
  carPrices,
  carsUnderPrice,
  carToString,
  findHighestMPG,
  findlowestPrice,
} from "./objects-assignments";
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
});

test("Return the car with highest MPG", () => {
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
  expect(result).toBe(
    ` make: Honda, model: Civic, year: 2010, mpg: 35, price: 5000`
  );
});

test("Return the car with the lowest price", () => {
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
  const result = findlowestPrice(cars);

  // Assert
  expect(result).toBe(
    `make: Toyota, model: Corolla, year: 2002, mpg: 30, price: 2000`
  );
});

test("Return the average price of all the cars", () => {
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
  const result = averagePrice(cars);

  // Assert
  expect(result).toBe(3750);
});

test("Return the price of all the cars", () => {
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
  const result = carPrices(cars);

  // Assert
  expect(result).toMatchInlineSnapshot(`
    [
      5000,
      3000,
      2000,
      5000,
    ]
  `);
});

test("Return the models of all the cars", () => {
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
  const result = carModels(cars);

  // Assert
  expect(result).toMatchInlineSnapshot(`
    [
      "Mustang",
      "F-150",
      "Corolla",
      "Civic",
    ]
  `);
});

test("Return all cars under a certain price", () => {
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
  const result = carsUnderPrice(cars, 10000);

  // Assert
  expect(result).toMatchInlineSnapshot(`
    [
      {
        "make": "Ford",
        "miles": 10000,
        "model": "Mustang",
        "mpg": 15,
        "price": 5000,
        "year": 1969,
      },
      {
        "make": "Ford",
        "miles": 50000,
        "model": "F-150",
        "mpg": 20,
        "price": 3000,
        "year": 2018,
      },
      {
        "make": "Toyota",
        "miles": 15000,
        "model": "Corolla",
        "mpg": 30,
        "price": 2000,
        "year": 2002,
      },
      {
        "make": "Honda",
        "miles": 100000,
        "model": "Civic",
        "mpg": 35,
        "price": 5000,
        "year": 2010,
      },
    ]
  `);
});
