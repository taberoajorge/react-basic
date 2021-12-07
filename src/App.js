import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import "./App.css";

const defaultTodos = [
  {
    text: "Decirle a gabo que lo quiero mucho alv",
    completed: true,
  },
  {
    text: "Continuar viendo el curso de react",
    completed: false,
  },
  {
    text: "Ejercitarme",
    completed: false,
  },
  {
    text: "Hacer molestar a Monica sin acento",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    })
  }

  return (
    <React.Fragment>
      <h2 className="header-title"> TODO </h2>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        todoC={
          <TodoCounter total={totalTodos} completedTodos={completedTodos} />
        }
      >
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
