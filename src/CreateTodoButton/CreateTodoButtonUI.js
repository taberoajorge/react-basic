import React from "react";
import style from "styled-components";

const StyledButton = style.div`
width: 100%;
display: flex;
justify-content: center;
// background-color: transparent;
& > button {
    width: 6rem;
    position: sticky;
    background-color: var(--button-color);
    border: none;
    margin-top: 3rem;
    /* margin-right: -1rem; */
    padding: 2rem;
    border-radius: 100%;
  
}
`;

export function CreateTodoButtonUI({ onClickButton }) {
  return (
    <StyledButton>
      <button onClick={() => onClickButton("Mensaje")}>+</button>
    </StyledButton>
  );
}
