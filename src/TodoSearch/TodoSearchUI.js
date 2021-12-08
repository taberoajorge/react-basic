import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background-color: var(--todo-color);
  border: none;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: 1.8rem;
  
  &::placeholder {
    color: var(--border-color);
  }
  &:focus-visible {
    outline: none;
  }
`;

export function TodoSearchUI({ searchValue, onSearchValueChange }) {
  return (
    <React.Fragment>
      <StyledInput
        onChange={onSearchValueChange}
        className="search-bar"
        placeholder="Encuentra tu tarea"
        value={searchValue}
      />
    </React.Fragment>
  );
}
