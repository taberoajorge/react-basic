import React from "react";
import style from "styled-components";

const StyledButton = style.div`
width: 100%;
display: flex;
justify-content: center;

& > button {
    width: 6rem;
    position: sticky;
    background-color: var(--button-color);
    border: none;
    margin-top: 3rem;
    padding: 2rem;
    border-radius: 100%;
    z-index: 1;
}
`;

export function CreateTodoButtonUI(props) {
  return (
    <StyledButton>
      <button onClick={()=>props.onClickButton()}>+</button>
    </StyledButton>
  );
}
