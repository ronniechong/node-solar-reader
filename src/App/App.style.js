import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    color: #272727;
    background: #EFF1F3;
  }
`;

export const Layout = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;