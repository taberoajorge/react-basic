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
    itemsToLoad,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchMode,
    setSearchMode,
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
        />
        <TodoSection>
          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodoLoadingError />}
            onLoading={() => <TodoLoading itemsToLoad={itemsToLoad} />}
            onEmptyTodos={() => <StyleTitle> Crea tu primer todo</StyleTitle>}
            onEmptySearchTodos={(searchText) => (
              <StyleTitle> No hay resultados para {searchText}</StyleTitle>
            )}
            // render={(todo) => (
            //   <TodoItem
            //     key={todo.text}
            //     text={todo.text}
            //     completed={todo.completed}
            //     onComplete={() => completeTodo(todo.text)}
            //     onDelete={() => deleteTodo(todo.text)}
            //   />
            // )}
          >
            {(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          </TodoList>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
        </TodoSection>
        <TodoFilter />
      </TodoMain>
    </React.Fragment>
  );
}

export default App;
