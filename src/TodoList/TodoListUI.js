import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.1rem;
  }
`;

export function TodoListUI(props) {
  return <StyledUl>{props.children}</StyledUl>;
}
