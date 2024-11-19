export type Car = {
  make: string;
  model: string;
  year: number;
  color?: string;
  mpg: number;
  price: number;
  miles: number;
};

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
console.log(carToString(cars[0]));