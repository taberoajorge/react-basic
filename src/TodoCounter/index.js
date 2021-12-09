import React from "react";
import styled from "styled-components";
import { TodoContext } from "../TodoContext";

const StyledTodoCounter = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: aliceblue;
  padding: 1rem;
`;

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <StyledTodoCounter>
      {completedTodos} items left of {totalTodos} items
    </StyledTodoCounter>
  );
}

export { TodoCounter };


