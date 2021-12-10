import React, { useContext } from "react";
import {TodoFormUI} from "../TodoForm/TodoFormUI";
import { TodoContext } from "../TodoContext";


function TodoForm() {
    const { onClickButton, createTodo } = useContext(TodoContext);

    return (
        <TodoFormUI createTodo={createTodo} onClickButton={onClickButton} />
    );
}

export {TodoForm};