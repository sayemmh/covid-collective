import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #858585;
  filter: grayscale(1);
`;

export const Background = props => (
  <StyledBackground {...props} role="img" aria-label="Header background" />
);
