import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
  }

  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
