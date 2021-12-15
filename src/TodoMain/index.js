import React from "react";
import styled from "styled-components";


const StyledMain = styled.main`
`;

function TodoMain({children}) {
    return(
        <StyledMain>
            {children}
        </StyledMain>
    );
    
}

export {TodoMain};
