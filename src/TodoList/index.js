import React from "react";
import { TodoListUI } from "./TodoListUI";

function TodoList(props) {
  return (
    <TodoListUI> 
      {props.children}
    </TodoListUI>
  );
}
export { TodoList };
