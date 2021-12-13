import React from "react";
import styled from "styled-components";

const StyledTodoCounter = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: aliceblue;
  padding: 1rem;
  opacity: ${(props)=> props.loading ? '25%': ''};
`;

function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <StyledTodoCounter loading={loading}>
      {completedTodos} items left of {totalTodos} items
    </StyledTodoCounter>
  );
}

export { TodoCounter };


