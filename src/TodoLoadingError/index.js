import React from "react";
import styled from "styled-components";


const StyledModal = styled.div`
    background-color: rgba(32,35,41,.8);
    position: fixed;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    font-size: 5rem;
    padding: 5rem;
    flex-direction: column;
`;

function TodoLoadingError(){
    return(
        <>
        <StyledModal>
            <h1>ERROR 404</h1>
            <p>Algo esta fallando, te invito a <a href="/" >recargar la pagina</a> </p>
        </StyledModal>
        </>
    );
};

export {TodoLoadingError};