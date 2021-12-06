import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import "./App.css";

const todos = [
  {
    text: "Estilizar app",
    complete: false,
  },
  {
    text: "Continuar viendo el curso de react",
    complete: false,
  },
  {
    text: "Ejercitarme",
    complete: false,
  },
  {
    text: "A seguir estilizando",
    complete: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <h2 className="header-title" > TODO </h2>
      <TodoSearch />
      <TodoList todoC={<TodoCounter />} >
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      
    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
