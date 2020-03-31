import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

export const HealthySurveyButton = () => (
  <Button
    onClick={() => window.open("https://forms.gle/wUChYFb5ViBuKCkWA")}
    size="huge"
    color="blue"
  >
    I'm Healthy
  </Button>
);
