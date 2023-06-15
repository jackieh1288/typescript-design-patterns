import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMapV2';

export const red = 'red';
export default 'blue'; // Notes: avoid using the default statement to make the import statement consistent

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
