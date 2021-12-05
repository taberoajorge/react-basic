import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

// import './App.css';

const todos = [
  {
    text: "Cortar cebolla",
    complete: false,
  },
  {
    text: "Meditar",
    complete: false,
  },
  {
    text: "Ejercitarme",
    complete: false,
  },
  {
    text: "Practicar",
    complete: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
