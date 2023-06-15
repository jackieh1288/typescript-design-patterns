import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const getOneTodo = (index: number): void => {
  axios.get(`${url}/${index}`).then((response) => {
    const todo = response.data as Todo;

    logTodo(todo);
  });
};

const getAllTodo = (amount: number): void => {
  axios.get(url).then((response) => {
    const todos = response.data as Todo[];

    logAmountOfTodos(amount, todos);
  });
};

const logTodo = (todo: Todo): void => {
  const { id, title, completed } = todo;
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is is finished? ${completed}
  `);
};

const logAmountOfTodos = (amount: number, todos: Todo[]): void => {
  for (let i = 0; i < amount; i++) {
    logTodo(todos[i]);
  }
};

getOneTodo(1);
getAllTodo(3);
