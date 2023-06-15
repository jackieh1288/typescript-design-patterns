const drinkT = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type DrinkT = [color: string, carbonated: boolean, sugar: number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: DrinkT = ['clear', true, 40];
const tea: DrinkT = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
