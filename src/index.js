import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";
import App from "./App";

const Global = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  & a{
    text-decoration: none;
  }
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
