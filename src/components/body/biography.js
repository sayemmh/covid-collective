import React from "react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBiography = styled.p`
  color: black};
  @media screen and (min-width: ${mobileScreenSize}) {
    max-width: 700px;
  }
  margin: 0 auto;
  padding: 20px;
`;

export const Biography = ({ biography }) => (
  <StyledBiography>{biography}</StyledBiography>
);
