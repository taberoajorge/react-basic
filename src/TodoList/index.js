import React from "react";
import styled from "styled-components";



const StyledUl = styled.ul`
  overflow: scroll;
  scroll-behavior: smooth;
`;

function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchText)}

      {props.searchedTodos.map(props.children || props.render)}

      <StyledUl>{props.children}</StyledUl>
    </section>
  );
}
export { TodoList };
