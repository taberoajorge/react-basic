import React from "react";
import {TodoFormUI} from "../TodoForm/TodoFormUI";


function TodoForm({onClickButton, createTodo, value}) {
    return (
        <TodoFormUI value={value} createTodo={createTodo} onClickButton={onClickButton} />
    );
}

export {TodoForm};