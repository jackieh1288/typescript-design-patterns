// import { UserProps } from './User';

export class Attributes<T extends object> {
  constructor(private data: T) {}

  // generic constraint
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'wefe',
// });

// const name = attrs.get('name');
