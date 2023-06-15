let apples: number = 5;
let peach = 3;
let banana;
banana = 2;
banana = 'delicious';

let speed: string = 'fast';
let hasNameL: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class CarT {}
let carA: CarT = new CarT();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
// Bad example:
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates); // {x: 10, y: 20};
// Correction
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initialize it later
// Bad example:
// let words = ['red', 'green', 'blue'];
// let foundWord;
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }
// Correction
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Or let foundWord = false
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// Bad example:
// let numbers = [-10, -1, 12];
// let numberAboveZero = false;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = numbers[i];
//   }
// }
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
