import React from "react";
import styled from "styled-components";
import { themeColor } from "styleguide/colors";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBlurb = styled.p`
  @media screen and (min-width: ${mobileScreenSize}) {
    max-width: 650px;
  }
  background-position: center;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0px;
  height: 350px;
  width: 100%;
  top: 20px;
  background-repeat: no-repeat;
  background-image: url(${props => props.imageUrl});
`;

export const LogoBlob = props => <StyledBlurb {...props} />;
