import React from "react";
import styled from "styled-components";
import { themeColor } from "styleguide/colors";
import { mobileScreenSize } from "styleguide/breakpoints";

const StyledBlurb = styled.p`
  @media screen and (min-width: ${mobileScreenSize}) {
    max-width: 650px;
  }

  margin: 0 auto;
  padding: 20px;
  height: 250px;
  width: 100%;
  background-image: url(${props => props.imageUrl});
`;

export const ProfileImage = props => <StyledBlurb {...props} />;
