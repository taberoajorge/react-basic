import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoBar } from "../TodoBar";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoLoadingError } from "../TodoLoadingError/TodoLoadingError";
import { TodoLoading } from "../TodoLoading/index";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoMain } from "../TodoMain/index";
import { TodoSection } from "../TodoSection/TodoSection";
import styled from "styled-components";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoLoadingEmpty } from "../TodoLoadingEmpty";

const StyleTitle = styled.h2`
  color: #fff;
  font-size: 3rem;
  letter-spacing: 1rem;
  @media (min-width: 600px){
    & {
      font-size: 5rem;
    }
  }
`;

function App() {
  
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    itemsToLoad,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchMode,
    setSearchMode,
    createTodo,
    setValue,
    value,
    onClickButton,
    toggleModal,
  } = useTodos();


  return (
    <React.Fragment>
      <GlobalStyle />

      <TodoHeader loading={loading}>
        <StyleTitle> TODO </StyleTitle>
      </TodoHeader>

      <TodoMain loading={loading}>
        <TodoBar
          searchMode={searchMode}
          setSearchMode={setSearchMode}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onClickButton={onClickButton}
          setValue={setValue}
        />

        <TodoSection>
          <TodoList
            error={error}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodoLoadingError />}
            onLoading={() => <TodoLoading itemsToLoad={itemsToLoad} />}
            onEmptyTodos={() => <TodoLoadingEmpty/>}
            onEmptySearchTodos={(searchText) => (
              <p> No hay resultados para {searchText}</p>
            )}
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

          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
        </TodoSection>
        <TodoFilter />
      </TodoMain>
     
      {!!toggleModal && (  
      <Modal> 
        <TodoForm 
        createTodo={createTodo}
        value={value}
        onClickButton={onClickButton} 
        searchValue={searchValue}/> 
      </Modal>)} 
     
   
    </React.Fragment>
  );
}

export default App;
