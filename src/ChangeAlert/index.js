import React from "react";
import styled from "styled-components";
import { useStorageListener } from "./useStorageListener";

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
`;

const StyledButton = styled.button`
  width: 20rem;
  height: 3rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--border-color);
  color: var(--text-color);
  background-color: var(--border-color);
  top: -1rem;
position: relative;
`;

const StyledDiv = styled.div`
width: 30rem;
background-color: var(--todo-color);
height: 13rem;
/* padding: 1.5rem; */
border-radius: 0.5rem;
margin-bottom: 0.5rem;
text-align:center; 
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-around; 
`;

const StyledWarning = styled.p`
top: -1rem;
position: relative;
padding-top: 2rem;
height: 50%; 
width: 100%;
font-size: 3rem;
border-radius: 0.5rem;
background: red

`;

function ChangeAlert(syncNow) {
  const { show, toggleShow } = useStorageListener(syncNow);
    if (show) {
    return (
        <StyledModal>
         <StyledDiv>
         <StyledWarning>Hubo cambios</StyledWarning>
        <StyledButton onClick={toggleShow}>Refresh</StyledButton>
         </StyledDiv>
        </StyledModal>
    );
  } else {
      return null;
  }
}

export { ChangeAlert };
