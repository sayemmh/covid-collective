import React from "react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBlurb = styled.p`
  @media screen and (min-width: ${mobileScreenSize}) {
    max-width: 650px;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 320px;
  width: 100%;
  background-repeat: no-repeat;

  background-image: url(${props => props.imageUrl});
`;

export const ImageBlob = props => <StyledBlurb {...props} />;
