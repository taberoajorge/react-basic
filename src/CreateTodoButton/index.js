import React from "react";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
  const {setOpenModal} = React.useContext(TodoContext);
  const onClickButton = () => {
   setOpenModal(prevState=> !prevState)
  }

  return (
    <CreateTodoButtonUI 
    onClickButton={onClickButton}/>
  );
}

export { CreateTodoButton };
