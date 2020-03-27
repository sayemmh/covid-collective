import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./profile-image";
import { Background } from "./background";
import imageUrl from "../../assets/profile.jpg";
import bricks from "../../assets/jude.jpg";
import { headerHeight } from "styleguide/breakpoints";

const StyledHeader = styled.header`
  position: relative;
  height: ${headerHeight};
`;

export const Header = () => (
  <StyledHeader>
    <Background imageUrl={bricks} />
    <ProfileImage imageUrl={imageUrl} />
  </StyledHeader>
);
