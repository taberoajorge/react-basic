import React from "react";
import styled from "styled-components";

const StyledDiv = styled.section`
  position: relative;
  bottom: -2rem;
  width: 27rem;
  background-color: var(--todo-color);
  border: none;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* /* &::placeholder {
    color: var(--border-color);
  }
  */

  & > button {
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
