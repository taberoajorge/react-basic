import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  background-color: var(--todo-color);
  border: none;
  height: var(--bar-size);
  padding: 1rem;
  border-radius: 0.5rem;
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
  height: var(--bar-size);
  padding: 1rem;
  border-radius: 0.5rem;
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
    right: 1rem;
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
  onCreate,
  setValue,
}) {
  const onCreateTodo = (event) => {
    if (event.charCode === 13) {
      onCreate()
      event.target.value = '';
    }
  };
  
  const onEnter = (event) => {
    setValue(event.target.value)
  };
  const onClickButton = () => {
    setSearchMode((prevState) => !prevState);
  };

  return (
    <section>
      <StyledForm>
        <StyledSearchInput
          onChange={onSearchValueChange}
          placeholder="SEARCH MODE: Search your todo..."
          value={searchValue}
          disabled={onDisabled}
          searchMode={searchMode}
        />
        <StyledCreateInput
          id="createTodoInput"
          placeholder="CREATE MODE: type your todo..."
          disabled={onDisabled}
          searchMode={searchMode}
          onKeyPress={onCreateTodo}
          onChange={onEnter}
        />
        <button type="button" onClick={onClickButton}>
          {!searchMode 
          ? <img src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png" alt="edit"/> 
          : <img src="https://img.icons8.com/material-outlined/24/ffffff/create.png" alt="create" />}
        </button>
      </StyledForm>
    </section>
  );
}

export { TodoBarUI };

