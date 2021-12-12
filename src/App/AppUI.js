import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/index";
import {TodoLoadingError} from "../TodoLoadingError/index"
import {TodoLoading} from "../TodoLoading/index"

const StyleTitle = styled.h2`
  color: #fff;
  font-size: 3rem;
`;

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, itemsToLoad} =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyleTitle > TODO </StyleTitle>
      <TodoSearch />
      <TodoList todoC={<TodoCounter />}>
        
        {error && <TodoLoadingError />}
        
        {loading && <TodoLoading itemsToLoad={itemsToLoad} />}
        
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

{!!openModal && (
<Modal>
  <TodoForm/>
</Modal>
)}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
