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

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
