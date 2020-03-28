import React from "react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBlurb = styled.p`
  color: black;
  font-size: 80%;
  @media screen and (min-width: ${mobileScreenSize}) {
    max-width: 650px;
  }
  margin: 0 auto;
  padding: 20px;
`;

export const Disclaimer = ({ blurb }) => <StyledBlurb>{blurb}</StyledBlurb>;
