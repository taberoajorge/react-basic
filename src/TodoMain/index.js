import React from "react";
import styled from "styled-components";


const StyledMain = styled.main`
  list-style: none;
  border-radius: 0.5rem;
  background-color: var(--todo-color);
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function TodoMain({children}) {
    return(
        <StyledMain>
            {children}
        </StyledMain>
    );
    
}

export {TodoMain};
