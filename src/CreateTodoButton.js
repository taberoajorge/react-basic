import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {

  const onClickButton = (msg) => {
    alert(`Proximo modal de creacion: ${msg}`)
  }

  return (
    <div className="button-container">
      <button className="create-todo" onClick={() => onClickButton('Mensaje')}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
