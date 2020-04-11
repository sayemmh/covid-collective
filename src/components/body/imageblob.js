import React from "react";
import styled from "styled-components";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBlurb = styled.p`
  display: block;
  height: 320px;
  max-width: 100%;
  background-repeat: no-repeat;

  background-image: url(${props => props.imageUrl});
`;

export const ImageBlob = props => <StyledBlurb {...props} />;
