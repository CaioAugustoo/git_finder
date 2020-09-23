import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --primary: rgb(26, 30, 34);
    --secondary: rgb(36, 41, 46);
    --white: #FFFFFF;
    --purple: rgb(0, 112, 243);
    --dark-purple: #9A60A4;
    --shadow-primary: rgba(0, 0, 0, 0.07) 0px 10px 30px 10px;
    --input-bg: rgb(36, 41, 46);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background-color: rgb(246, 248, 250);
    
    @media (min-width: 18.75rem) and (max-width: 49.1875rem) {
      font-size: 0.9rem !important;
    }
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  button, input {
    outline: none !important;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

`;

export const Container = styled.div`
  max-width: 112.5rem;
  margin: 0 auto;
  padding: 0px 1.875rem;
`;