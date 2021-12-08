import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

const StyleTitle = styled.h2`
  color: #fff;
  font-size: 3rem;
`;

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyleTitle className="header-title"> TODO </StyleTitle>
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
