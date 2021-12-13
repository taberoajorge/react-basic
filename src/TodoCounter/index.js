import React from "react";
import styled from "styled-components";

const StyledTodoCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  color: var(--border-color);
  padding: 1rem;
  opacity: ${(props) => (props.loading ? "25%" : "")};
`;

const StyledButton = styled.button`
border: none;
background: transparent;
color: var(--border-color);
font-size: 1.6rem;



`;

function TodoCounter({completedTodos,totalTodos,loading}) {
  return (
    <StyledTodoCounter loading={loading} >
      <p>{totalTodos-completedTodos} items left</p>
      <StyledButton>Clear Completed</StyledButton>
    </StyledTodoCounter>
  );
}

export { TodoCounter };


