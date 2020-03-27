import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

export const SurveyButton = () => (
  <Button
    onClick={() => window.open("https://forms.gle/NjkLp5xTVaUmv7cf8")}
    size="huge"
    color="blue"
  >
    Contribute Your Data
  </Button>
);
