import React from "react";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
  const {onClickButton} = React.useContext(TodoContext);

  return (
    <CreateTodoButtonUI 
    onClickButton={onClickButton}/>
  );
}

export { CreateTodoButton };
