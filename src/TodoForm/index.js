import React from "react";
import {TodoFormUI} from "../TodoForm/TodoFormUI";


function TodoForm({onClickButton, createTodo}) {
    return (
        <TodoFormUI createTodo={createTodo} onClickButton={onClickButton} />
    );
}

export {TodoForm};