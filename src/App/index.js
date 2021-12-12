import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { Modal } from "../Modal";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm/index";
import { TodoLoadingError } from "../TodoLoadingError/index";
import { TodoLoading } from "../TodoLoading/index";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoMain } from "../TodoMain/index";

const StyleTitle = styled.h2`
  color: #fff;
  font-size: 3rem;
`;

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    itemsToLoad,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    onClickButton,
    createTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <GlobalStyle />
      
      <TodoHeader>
        <StyleTitle> TODO </StyleTitle>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoMain>
        <TodoList>
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
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      </TodoMain>

      {!!openModal && (
        <Modal>
          <TodoForm onClickButton={onClickButton} createTodo={createTodo} />
        </Modal>
      )}

      <CreateTodoButton  onClickButton={onClickButton}/>
    </React.Fragment>
  );
}

export default App;
