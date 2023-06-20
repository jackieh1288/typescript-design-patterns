import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();

setTimeout(() => {
  const lastIndex = collection.models.length;
  console.log(lastIndex);
  const user = User.buildUser({ id: lastIndex });

  user.on('change', () => {
    console.log(user);
  });

  user.fetch();
}, 4000);
