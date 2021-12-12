import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    itemsToLoad,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const [openModal, setOpenModal] = React.useState(false);

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

  const createTodo = (text) => {
    console.log(text);
    const newTodo = [{text: text, completed: false}];
    const  newTodos = [...todos, ...newTodo];
    saveTodos(newTodos);
    setOpenModal(prevState=> !prevState)
  };


  const onClickButton = () => {
    setOpenModal(prevState=> !prevState)
   }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal, 
        onClickButton,
        createTodo,
        itemsToLoad
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;

export {TodoContext, TodoProvider};