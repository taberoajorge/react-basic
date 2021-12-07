import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completedTodos }) {
  return (
    <p>
      {completedTodos} items left of {total} items
    </p>
  );
}

export { TodoCounter };
