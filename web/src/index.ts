// A quick reminder on accessors
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('fN', 'lN');
console.log(person.fullName);

// ========================
import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
