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
import { ChangeAlert } from "../ChangeAlert/index";


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
    sincronize,
  } = useTodos();

  return (
    <React.Fragment>
      <GlobalStyle />
      
      <TodoHeader loading={loading}>
        <StyleTitle> TODO </StyleTitle>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoMain loading={loading}>
        <TodoList
        searchText={searchValue}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        error={error}
        onError={()=><TodoLoadingError />}
        onLoading={()=><TodoLoading itemsToLoad={itemsToLoad}/>}
        onEmpty={()=><StyleTitle> Crea tu primer todo</StyleTitle>}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
        />
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      </TodoMain>

      {!!openModal && (
        <Modal>
          <TodoForm onClickButton={onClickButton} createTodo={createTodo} />
        </Modal>
      )}

      <CreateTodoButton  onClickButton={onClickButton}/>

      <ChangeAlert syncNow={sincronize}/>
    </React.Fragment>
  );
}

export default App;
