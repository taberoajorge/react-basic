import React from "react";
import styled from "styled-components";

const StyledDiv = styled.section`
  margin-top: 1rem;
  width: 100%;
  background-color: var(--todo-color);
  height: var(--bar-size);
  border-radius: 0.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > button {
    font-weight: 700;
    background: transparent;
    border: none;
    color: var(--border-color);
  }
  & > button:focus-visible {
    outline: none;
    color: var(--check);
  } 
  & > button:active {
    color: var(--check);
  } 
`;

function TodoFilter() {
  return (
    <StyledDiv>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </StyledDiv>
  );
}

export { TodoFilter };
