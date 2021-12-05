import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="section">
      <ul className="todo-container">{props.children}</ul>
      <div>
      {props.todoC}
      </div>
    </section>
  );
}
export { TodoList };
