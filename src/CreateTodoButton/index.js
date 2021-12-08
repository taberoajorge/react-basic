import React from "react";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";

function CreateTodoButton() {

  const onClickButton = (msg) => {
    alert(`Proximo modal de creacion: ${msg}`)
  }

  return (
    <CreateTodoButtonUI 
    onClickButton={onClickButton}/>
  );
}

export { CreateTodoButton };
