import React from "react";
import { TodoListUI } from "./TodoListUI";

function TodoList(props) {
  return (
    <TodoListUI counter={props.todoC} todoItem={props.children} />
  );
}
export { TodoList };
