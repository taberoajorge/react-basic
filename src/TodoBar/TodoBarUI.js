import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  background-color: var(--todo-color);
  border: none;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: 1.8rem;
  display: ${(props) => (props.searchMode ? "block" : "none")};

  &::placeholder {
    color: var(--border-color);
  }
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    opacity: 25%;
  }
`;
const StyledCreateInput = styled.input`
  width: 100%;
  background-color: var(--todo-color);
  border: none;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: 1.8rem;
  display: ${(props) => (props.searchMode ? "none" : "block")};

  &::placeholder {
    color: var(--border-color);
  }
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    opacity: 25%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  position: relative;
  top: -1rem;
  align-items: center;

  & > button {
    border: none;
    background: transparent;
    position: absolute;
    right: 0;
    top: 1rem;
    color: var(--text-color);
  }
`;

function TodoBarUI({
  searchValue,
  onSearchValueChange,
  onDisabled,
  setSearchMode,
  searchMode,
  createTodo,
}) {
  const onCreateTodo = (event) => {
    event.preventDefault();
    createTodo(event.currentTarget.elements.createTodoInput.value);
  };
  const onClickButton = () => {
    setSearchMode((prevState) => !prevState);
    // console.log(searchMode);
  };

  return (
    <section>
      <StyledForm onSubmit={onCreateTodo}>
        <StyledSearchInput
          onChange={onSearchValueChange}
          placeholder="Search your todo..."
          value={searchValue}
          disabled={onDisabled}
          searchMode={searchMode}
        />
        <StyledCreateInput
          id="createTodoInput"
          placeholder="Create a new todo..."
          disabled={onDisabled}
          searchMode={searchMode}
        />
        <button type={searchMode ? "submit" : "button"} onClick={onClickButton}>
        {!searchMode ? "Search" : "Create"}
      </button>
      </StyledForm>
      <button type={searchMode ? "submit" : "button"} onClick={onClickButton}>
        {!searchMode ? "Search" : "Create"}
      </button>
    </section>
  );
}

export { TodoBarUI };
