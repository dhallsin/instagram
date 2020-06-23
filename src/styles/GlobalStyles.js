import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #f5f5f5;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`