import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 30rem;
  background-color: var(--todo-color);
  border: none;
  height: 13rem;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;
const StyledLabel = styled.label`
  color: var(--text-color);
  font-size: 1.8rem;
`;
const StyledInput = styled.input`
  color: var(--text-color);
  border-radius: 0.5rem;
  background: none;
  border: 1px solid var(--border-color);
  margin: 1rem auto;
  padding: 1rem;

  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: var(--border-color);
  }
`;
const StyledButton = styled.button`
  margin-left: 1rem;
  width: 7rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--border-color);
  color: var(--text-color);
  background-color: var(--border-color);
`;



function TodoFormUI({ onClickButton, createTodo }) {
  const onCreateTodo = (event) => {
    // console.log(event.currentTarget.elements.todo.value);
    event.preventDefault()
    createTodo(event.currentTarget.elements.todo.value)
  };

  return (
    <StyledForm onSubmit={onCreateTodo}>
      <StyledLabel  for="todo">
        <span>Escribe una nueva tarea</span>
        <StyledInput
          placeholder="Crea una nueva tarea!"
          type="text"
          id="todo"
        />
        <StyledButton type="submit" >Crear</StyledButton>
        <StyledButton onClick={() => onClickButton()} type="button">
          Cancelar
        </StyledButton>
      </StyledLabel>
    </StyledForm>
  );
}

export { TodoFormUI };
