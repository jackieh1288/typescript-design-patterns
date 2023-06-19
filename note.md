# Typescript

Interface
interface Todo {
id: number;
title: string;
completed: boolean;
}

> **_Jun 11, 2023_**

# Chapter One: The Basic

## Types

### Primitive Types

- number
- boolean
- void
- undefined
- string
- symbol
- null

### Object Types

- functions
- arrays
- classes
- objects

### Type 'any'

> - It's also a type, just as 'string' or 'boolean' are
> - Means TS has no idea what this is - can't check for correct property references
> - **Avoid variables with 'any' at all costs**

## Type Annotations + Type Inference

### Variables

#### Type annotation (We developers tell Typescript the type) <--> Type inference (Typescript guesses the type)

| Variable Declaration | /   | Varialble Initialization |
| -------------------- | --- | ------------------------ |
| const color          | =   | 'red'                    |

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.

#### When to use 'type inference'?

**Always. Rely heavily on 'type inference'**

#### When to use 'type annotation'? In 3 scenarios:

1. Function that returns the 'any' type

Bad example:

```typescript
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
```

Correction:

```typescript
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
```

2. When we declare a variable on one line and initialize it later

Bad example:

```typescript
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
```

Correction:

```typescript
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Or let foundWord = false
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
```

3. Variable whose type cannot be inferred correctly

Bad example:

```typescript
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
```

Corrections:

```typescript
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
```

### Functions

**_Use annotation for function arguments and the return value_**

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};

const throwError = (message: string): never => {
  throw new Error(message);
};
```

#### Annotation deconstructor

```typescript
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// ES2015
const logWeather = ({ date, weather }) => {};
// Typescript annotation deconstructor syntax
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
```

### Objects

```typescript
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
```

#### Object destructuring

```typescript
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

### Arrays

#### Why do we care?

- Help with inference when extracting values

```typescript
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMakeX = [['f150'], ['corolla'], ['camero']];
const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();
```

- Prevent incompatible values

```typescript
carMakers.push(car);
```

- Help with 'map'

```typescript
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
```

#### When to use typed arrays?

_Any time we need to represent a collection of records with come arbitrary sort order_

### Tuples (**Not used often**)

_Array-like structure where each element represents some property of a record_

**TODO:EXAMPLE**

```typescript
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['green', false, 0];
```

Could be useful when parsing an array of csv data

<br>

## Interfaces & Classes

**How we get really strong code reuse in TS**

### General Strategy for Reusable Code in TS

> - **Create functions that accept arguments that are typed with interfaces**
> - **Objects / classes can decide to 'implement' a given interface to work with a function**

## Interfaces

**Creates a new type, describing the property names and value types of an object**

## Classes

### Fields in Classes (modifiers, variables, constructor)

#### Modifiers

- **public**: This method can be called any where, any time.

```typescript
class Vehicle {
  public honk(): void {
    console.log('beep');
  }

  start(): void {
    // Default to be 'public' if not specified.
    console.log('chugga chugga');
  }
}

const vehicle = new Vehicle();
vehicle.honk();
vehicle.start();
```

- **private**: This method can only be called by other methods in this class

```typescript
class Vehicle {
  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
```

- **protected**: This method can be called by other methods in this class, or by other methods in child classes

```typescript
class Vehicle {
  protected honk(): void {
    console.log('beep');
  }

  public honkP(): void {
    this.honk();
    console.log('piu-piu');
  }
}

class Car extends Vehicle {
  startDrivingProcess(): void {
    this.honk();
  }
}

const vehicle = new Vehicle();
vehicle.honkP();

const car = new Car();
car.startDrivingProcess();
```

#### Variables (initialized by constructor)

```typescript
class Vehicle {
  constructor(public color: string) {}
}

const vehicle = new Vehicle('red');
```

#### Inheritance

Classes are inheritance.

A child class extends from its parent class

If a constructor is defined in a child class, then a super constructor must be called. Otherwise, the child class would call the constructor from its parent automatically.

```typescript
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }

  public honkP(): void {
    this.honk();
    console.log('piu-piu');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
vehicle.honkP();

const car = new Car(4, 'yellow');

car.startDrivingProcess();
car.honkP();
```

<br />

# Chapter Two: Design Patterns

> **_Jun 12, 2023_**

### parcel bundle

```bash
npx parcel index.html
```

### Notes:

- Use private modifier to protect 3rd party packages be over used,
- And to keep the class simple
- Use interface to decrease the amount of duplicate codes

> **_Jun 13, 2023_**

## Concurrent Compilation and Execution

### typescript complier

```bash
tsc init # generate tsconfig.json file

tsc # compile ts to js
tsc -w # compiler watch code updates automatically
```

#### tsconfig.json _(Essential Configuration)_

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,

    /* Emit */
    "outDir": "./build" /* Specify an output folder for all emitted files. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

### Nodejs

```bash
npm init -y # to generate a package.json file
npm install nodemon concurrently
# nodemon: Allow to re-run Node any time a file changes inside of the project
# concurrently: Help to run multiple scripts at the same time
```

#### package.json

```json
{
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }
}
```

To compile and run the project automatically:

```bash
npm start
```

> **_Jun 14, 2023_**

## Type Guard

#### Use type guard anytime when we want to restore access to a set of properties in a _union_ type

```typescript
class Sorter {
  // Union type for class Sorter
  constructor(public collection: number[] | string) {}

  sort(): void {
    // All of this only works if collection is number[]
    // If collection is an array of numbers
    if (this.collection instanceof Array) {
      // do something
    }

    // Only works if collection is a string
    // If collection is a string, do this logic instead:
    // logic to compare and swap characters in a string
    if (typeof this.collection === 'string') {
      // do other thing
    }
  }
}
```

### typeof

**Narrow type of a value to a primitive type**  
number, string, boolean, symbol

```typescript
if (typeof this.collection === 'string') {
  // do something
}
```

### instanceof

**Narrow down every other type of value**  
Every other value that is created with a constructor function

```typescript
if (this.collection instanceof Array) {
  // do something
}
```

## Abstract Class

- Can't be used to create an object directly **(No constructor)**
- Only used as a parent class (extends)
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other methods

```typescript
export abstract class SorterAbstract {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

```typescript
import { SorterAbstract } from './SorterAbstract';

export class NumbersCollection extends SorterAbstract {
  constructor(public data: number[]) {
    super();
  }

  // **getter**
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const numbersCollection = new NumbersCollection([7, -10, 4, -1]);
numbersCollection.length; // 4 -> getter function return variable directly
numbersCollection.sort(); // Call sort function from SorterAbstract directly
```

## Interfaces vs Abstract Classes

### Interfaces

- Sets up a contract between different classes
- Use when we have very different objects that we want to work together
- Promotes loose coupling

### Inheritance / Abstract classes

- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes together

### TODO://? Issues with Inheritance (non-abstract class)

- Fail to set up constructor

> **_Jun 15, 2023_**

## Enum - enumeration

```typescript
enum MatchResult = {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
  Lost, // An enum could refer to no value
}
```

#### What is Enum?

- Follow near-identical syntax ruls as normal objects
- Creates an object with the same keys and values when converted from TS to JS

#### Why Enum?

- Primary goal is to signal to other engineers that these are all closely related values

#### When to use enum?

- Use whenever we have a small fixed set of values that are all closely related and known at compile time

## Generics _\<T>_

- Like function arguments, but for types in class / function definitions
- Allows us to define the type of a property / argument / return value at a future point
- Used heavily when writing reusable code

```typescript
// Redundant
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};
addOne(1); // = 2
addTwo(1); // = 3
addThree(1); // = 4

// Refactor
const add = (a: number, b: number): number => {
  return a + b;
};
add(1, 1); // = 2
```

```typescript
// Redundant
class HoldNumber {
  data: number;
}
class HoldString {
  data: string;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = 'hello';
```

```typescript
// Refactor by generics
class HoldAnything<T> {
  data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
const holdString = new HoldAnything<string>();
holdString.data = 'hello';
```

## Inheritance vs Composition

**Inheritance** -> Charaterized by an **_"is a"_** relationship between two classes.  
**Composition** -> Characterized by a **_"has a"_** relationship between two classes.
