import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserList } from './views/UserList';

const user = User.buildUser({ name: 'customName', age: 20 });
const collection = User.buildUserCollection();

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

collection.on('change', () => {
  const list = document.getElementById('list');

  if (list) {
    new UserList(list, collection).render();
  }
});

collection.fetch();
