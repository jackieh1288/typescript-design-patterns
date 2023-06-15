const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMakeX = [['f150'], ['corolla'], ['camero']];
const carsByMake: string[][] = [];

// Help with inference when extracting values
const carT = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(carT);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2023-10-10');
