import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --title: 700;
    --text-weigth: 400;
    --main-color: #181824;
    --text-color: hsl(236, 33%, 92%);
    --todo-color: #25273C;
    --border-color: hsl(234, 11%, 52%);
    --button-color: hsl(192, 100%, 67%);
    --check: hsl(280, 87%, 65%);
    --bar-size: 4.5rem;
  }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: var(--main-color);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items:center;
     }

  #root{
    width: 31rem;
  }
`;

// # Front-end Style Guide

// ## Layout

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px

// ## Colors

// ### Primary

// - Bright Blue: hsl(220, 98%, 61%)
// - Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

// ### Neutral

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// - Very Dark Blue: hsl(235, 21%, 11%)

// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)

// ## Typography

// ### Body Copy

// - Font size: 18px

// ### Font

// - Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
// - Weights: 400, 700
