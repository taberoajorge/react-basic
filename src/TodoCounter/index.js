import React from "react";
import styled from "styled-components";

const StyledTodoCounter = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: aliceblue;
  padding: 1rem;
`;

function TodoCounter({totalTodos, completedTodos}) {
  return (
    <StyledTodoCounter>
      {completedTodos} items left of {totalTodos} items
    </StyledTodoCounter>
  );
}

export { TodoCounter };


