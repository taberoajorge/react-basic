import React from "react";
import { TodoItemUI } from "./TodoItemUI";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <TodoItemUI
      text={text}
      completed={completed}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}
export { TodoItem };
