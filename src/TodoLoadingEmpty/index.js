import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 7rem;
`;

const StyledText = styled.p`
  text-align: center;
  font-size: 5rem;
  font-weight: var(--title);
  color: var(--text-color);
`;

function TodoLoadingEmpty() {
  return (
    <StyledContainer>
      <StyledText>Crea tu primera tarea!</StyledText>
    </StyledContainer>
  );
}

export { TodoLoadingEmpty };
