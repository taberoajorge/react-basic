import React from "react";
import styled from "styled-components";

const StyledForm = styled.form``;
const StyledLabel = styled.label``;
const StyledInput = styled.input``;


function TodoFormUI() {
  return (
    <StyledForm>
      <StyledLabel for="todo">
        <span>Hola</span>
        <StyledInput type="text" id="todo" />
      </StyledLabel>
    </StyledForm>
  );
}

export {TodoFormUI};
