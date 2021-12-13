import React from "react";
import styled from "styled-components";


const StyledSection = styled.section`
  list-style: none;
  border-radius: 0.5rem;
  background-color: var(--todo-color);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function TodoSection({children, loading}) {
    return(
        <StyledSection>
            {React.Children
        .toArray(children)
        .map((child) => React.cloneElement(child, { loading: loading })
        )}
        </StyledSection>
        );
}

export {TodoSection};