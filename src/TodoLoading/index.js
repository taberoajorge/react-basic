import React from "react";
import styled from "styled-components";

const StyledCircle = styled.div`
  border: 0.1rem solid grey;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

const StyledText = styled.div`
  border: 0.1rem solid grey;
  width: 80%;
  height: 1rem;
  border-radius: 0.5rem;
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

function TodoLoading({ itemsToLoad }) {
  return (
    <>
      {itemsToLoad.map(() => (
        <StyledContainer>
          <StyledCircle />
          <StyledText />
          <StyledCircle />
        </StyledContainer>
      ))}
    </>
  );
}

export { TodoLoading };
