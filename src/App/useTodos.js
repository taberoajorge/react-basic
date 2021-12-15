import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    itemsToLoad,
  } = useLocalStorage("TODOS_V1", []);
  const [toggleModal, setToggleModal] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [searchMode, setSearchMode] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const onClickButton = () => {
    setToggleModal(prevState=> !prevState)
  };
  
  const createTodo = (text) => {
    const newTodo = [{ text: text, completed: false }];
    const newTodos = [...todos, ...newTodo];
    saveTodos(newTodos);
    onClickButton();
  };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    createTodo,
    itemsToLoad,
    searchMode,
    setSearchMode,
    setValue,
    value,
    onClickButton,
    toggleModal,
  };
}

export { useTodos };
