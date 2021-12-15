import React from "react";
import styled from "styled-components";


const StyledMain = styled.main`
`;

function TodoMain({children, loading}) {
    return(
        <StyledMain>
            {React.Children.toArray(children).map((child)=> React.cloneElement(child, {loading: loading}))}
        </StyledMain>
    );
    
}

export {TodoMain};
