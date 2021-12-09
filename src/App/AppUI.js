import React from "react";
import { TodoContext } from "../TodoContext";
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

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyleTitle className="header-title"> TODO </StyleTitle>
      <TodoSearch />
      <TodoList todoC={<TodoCounter />}>
        {error && <StyleTitle>Error</StyleTitle>}
        {loading && <StyleTitle>Se esta cargando</StyleTitle>}
        {!loading && !searchedTodos.length && (
          <StyleTitle> Crea tu primer todo</StyleTitle>
        )}
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
