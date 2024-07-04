import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Additional styles for div elements */
  div {
    /* Example styles */
    margin-bottom: 20px;
    padding: 10px;
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 4px;
  }
    /* Styles for all heading tags (h1, h2, h3, etc.) */
    h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif; /* Example font family */
    color: ${({ theme }) => theme.colors.heading}; /* Example color */
    margin-bottom: 10px;
  }

/* Specific styles for a div with class 'special-div' */
.special-div {
    background-color: lightblue;
    color: navy;
    font-weight: bold;
  }

  /* Specific styles for a div with ID 'unique-div' */
  #unique-div {
    background-color: lightgreen;
    border: 2px dashed darkgreen;
  }


`;

export default GlobalStyles;
