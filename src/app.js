import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { injectGlobal } from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

injectGlobal`
  :root {
    --header-height: 300px;

    @media screen and (max-width: ${mobileScreenSize}) {
      --header-height: 200px;
    }
  }

  body, html, #app {
  font-family: 'Lato', sans-serif;
  padding:0;
  margin:0;
  height: 100%;
}
`;
document.title = "Covid Data Collective";

export const App = () => (
  <React.Fragment>
    <Body />
  </React.Fragment>
);
