import React from "react";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";


function CreateTodoButton({onClickButton}) {
  return (
    <CreateTodoButtonUI 
    onClickButton={onClickButton}/>
  );
}

export { CreateTodoButton };
