import React from "react";
import { TodoListUI } from "./TodoListUI";

function TodoList(props) {
  return (
    <TodoListUI>
      {!!props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmpty(props.searchText)}
      {(!props.loading && !props.error ) && props.searchedTodos.map(props.children || props.render)}

      {props.children}
    </TodoListUI>
  );
}
export { TodoList };
