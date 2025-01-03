import { Car } from "./types/Car";

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

export function carToString(car: Car): string {
  return `${car.year} ${car.make} ${car.model}`;
}
console.log(carToString(cars[1]));

// Find car with Highest MPG
export function findHighestMPG(cars: Car[]): string {
  let highestMPG = cars[0];

  cars.forEach((element) => {
    if (element.mpg > highestMPG.mpg) {
      highestMPG = element;
    }
  });

  return ` make: ${highestMPG.make}, model: ${highestMPG.model}, year: ${highestMPG.year}, mpg: ${highestMPG.mpg}, price: ${highestMPG.price}`;
}
console.log(`Highest MPG car: ${findHighestMPG(cars)}`);

// Find lowest Price Car
export function findlowestPrice(cars: Car[]): string {
  let lowestPrice = cars[0];

  cars.forEach((element) => {
    if (element.price < lowestPrice.price) {
      lowestPrice = element;
    }
  });

  return `make: ${lowestPrice.make}, model: ${lowestPrice.model}, year: ${lowestPrice.year}, mpg: ${lowestPrice.mpg}, price: ${lowestPrice.price}`;
}

// Find average price of car
export function averagePrice(cars: Car[]): number {
  const totalPrice = cars.reduce((sum, car) => sum + car.price, 0);

  const avgPrice = totalPrice / cars.length;

  return avgPrice;
}
console.log(averagePrice(cars));

// Find all the car prices
export function carPrices(cars: Car[]): number[] {
  const allPrices = cars.map((car) => car.price);
  return allPrices;
}
console.log(carPrices(cars));

// Find all the car models
export function carModels(cars: Car[]): string[] {
  const allModels = cars.map((car) => car.model);
  return allModels;
}
console.log(carModels(cars));

// Find all cars under a certain price
export function carsUnderPrice(cars: Car[], price: number): Car[] {
  const underPrice = cars.filter((car) => car.price < price);

  return underPrice;
}

console.log(carsUnderPrice(cars, 10000));
