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
    <a
      class="twitter-timeline"
      href="https://twitter.com/briantimar/lists/people-to-follow?ref_src=twsrc%5Etfw"
    >
      A Twitter List by briantimar
    </a>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  </React.Fragment>
);
