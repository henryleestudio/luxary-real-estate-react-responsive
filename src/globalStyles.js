import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box; 
    font-family: 'Raleway', sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }
`