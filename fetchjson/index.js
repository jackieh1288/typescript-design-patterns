"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos';
var getOneTodo = function (index) {
    axios_1.default.get("".concat(url, "/").concat(index)).then(function (response) {
        var todo = response.data;
        logTodo(todo);
    });
};
var getAllTodo = function (amount) {
    axios_1.default.get(url).then(function (response) {
        var todos = response.data;
        logNumbersOfTodos(amount, todos);
    });
};
var logTodo = function (todo) {
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is is finished? ").concat(completed, "\n  "));
};
var logNumbersOfTodos = function (amount, todos) {
    for (var i = 0; i < amount; i++) {
        logTodo(todos[i]);
    }
};
getAllTodo(3);
getOneTodo(1);
