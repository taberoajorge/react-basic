import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <div className="button-container">
      <button className="create-todo" type="text">+</button>
    </div>
  );
}

export { CreateTodoButton };
