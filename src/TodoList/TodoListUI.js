import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  list-style: none;
  border-radius: 0.5rem;
  background-color: var(--todo-color);
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  overflow: scroll;
  scroll-behavior: smooth;
`;

export function TodoListUI({todoItem, counter}) {
  return (
    <StyledSection >
      <StyledUl>{todoItem}</StyledUl>
      <div>{counter}</div>
    </StyledSection>
  );
}
