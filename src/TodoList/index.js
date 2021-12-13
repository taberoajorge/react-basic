import React from "react";
import { TodoListUI } from "./TodoListUI";

function TodoList(props) {
  return (
    <section>
      {!!props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchTodos(props.searchText)}
      {props.searchedTodos.map(props.children || props.render)}

      <TodoListUI>{props.children}</TodoListUI>
    </section>
  );
}
export { TodoList };
