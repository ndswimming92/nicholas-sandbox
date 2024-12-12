Consider this list of cars:

```txt
make: Ford
model: Mustang
year: 1969
mpg: 15
price: 5000
miles: 100000

make: Toyota
model: Corolla
year: 2002
mpg: 30
price: 2000
miles: 150000

make: Honda
model: Civic
year: 2010
mpg: 35
price: 5000
miles: 100000

make: Ford
model: F-150
year: 2018
mpg: 20
price: 30000
miles: 50000
```

1. Define a TypeScript type to represent a Car object.
2. Create an array of Car objects and fill it with the info above.

Write the following functions:

```ts
// Given a car object, return this car's make and model as a string.
const exampleCar: Car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  mpg: 15,
  price: 5000,
};

carToString(exampleCar);
// Output: '1969 Ford Mustang'
```

```ts
// Given an array of car objects, find the car with the highest mpg.
const cars: Car[] = [
  // ...cars defined above
];

findHighestMpg(cars);
// Output: { make: 'Honda', model: 'Civic', year: 2010, mpg: 35, price: 5000 }
```

```ts
// Given an array of car objects, find the car with the lowest price.
const cars: Car[] = [
  // ...cars defined above
];

findLowestPrice(cars);
// Output: { make: 'Toyota', model: 'Corolla', year: 2002, mpg: 30, price: 2000 }
```

```ts
// Given an array of car objects, return the average price of all cars.
const cars: Car[] = [
  // ...cars defined above
];

averagePrice(cars);
// Output: 22500
```

```ts
// Given an array of car objects, return an array of only the car prices.
const cars: Car[] = [
  // ...cars defined above
];

carPrices(cars);
// Output: [5000, 2000, 5000, 30000]
```

```ts
// Given an array of car objects, return an array of only the car models.
const cars: Car[] = [
  // ...cars defined above
];

carModels(cars);
// Output: ['Mustang', 'Corolla', 'Civic', 'F-150']
```

```ts
// Given an array of car objects, return an array of only the cars that are under a given price.
const cars: Car[] = [
  // ...cars defined above
];

carsUnderPrice(cars, 10000);
// Output: [
//   { make: 'Ford', model: 'Mustang', year: 1969, mpg: 15, price: 5000 },
//   { make: 'Toyota', model: 'Corolla', year: 2002, mpg: 30, price: 2000 },
//   { make: 'Honda', model: 'Civic', year: 2010, mpg: 35, price: 5000 },
// ]
```

```tsx
// Create a React Component that, given an array of cars, renders an unordered list of car objects like so:

const cars: Car[] = [
  // ...cars defined above
];

<CarList cars={cars} />;

// Output (ish):
// <ul>
//   <li>$5000 - 1969 Ford Mustang</li>
//   <li>$2000 - 2002 Toyota Corolla</li>
//   <li>$5000 - 2010 Honda Civic</li>
//   <li>$30000 - 2018 Ford F-150</li>
// </ul>
```
