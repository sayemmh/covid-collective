import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

export const SurveyButton = () => (
  <Button
    onClick={() => window.open("https://www.surveymonkey.com/r/VHBQH7K")}
    size="huge"
    color="blue"
  >
    I'm Sick
  </Button>
);
