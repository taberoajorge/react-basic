import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --title: 700;
    --text-weigth: 400;
    --main-color: hsl(235, 21%, 11%);
    --text-color: hsl(236, 33%, 92%);
    --todo-color: hsl(237, 14%, 26%);
    --border-color: hsl(234, 11%, 52%);
    --button-color: hsl(192, 100%, 67%);
    --check: hsl(280, 87%, 65%);
  }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: "Josefin Sans", sans-serif;;
  }
  
  body {
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
     }
`;
