import React from "react";
import styled from "styled-components";

const StyledHeader =  styled.header`
position: absolute;
    top: 4.5rem;
`;

function TodoHeader({children, loading}) {
  return (
    <StyledHeader>
      {React.Children
      .toArray(children)
      .map((child) => React.cloneElement(child, { loading: loading })
      )}
    </StyledHeader>
  );
}

export { TodoHeader };
