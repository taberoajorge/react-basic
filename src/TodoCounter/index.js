import React from "react";
import styled from "styled-components";

const StyledTodoCounter = styled.p`
    text-align: center;
    font-size: 1.8rem;
    color: aliceblue;
    padding: 1rem;`

function TodoCounter({ total, completedTodos }) {
  return (
    <StyledTodoCounter>
      {completedTodos} items left of {total} items
    </StyledTodoCounter>
  );
}

export { TodoCounter };
