import React from "react";
import { render } from "react-dom";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Mulish', sans-serif;
        box-sizing: border-box;
    }
`;

render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
