import { User } from './models/User';

const user = new User({ name: 'new record', age: 18 });

// user.set({ name: 'NEW NAME', age: 25 });

user.save();
// user.fetch();

// const user = new User({ name: 'myName', age: 20 });

// user.set({ name: 'lowen' });

// user.on('change', () => {
//   console.log('Change #1');
// });

// user.on('change', () => {
//   console.log('Change #2');
// });

// user.on('toggle', () => {
//   console.log('toggle #1');
// });

// user.trigger('change');

import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'myName',
//   age: 20,
// });

// axios.get('http://localhost:3000/user/1');
