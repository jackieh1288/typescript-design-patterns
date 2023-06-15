// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

// Generic interface example
interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
