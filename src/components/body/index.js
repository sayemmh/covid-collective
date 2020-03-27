import React from "react";
import styled from "styled-components";
import { Title } from "./name";
import { calltoaction, biography, socialLinks } from "./../../profile.json";
import { Biography } from "./biography";
import { SocialArea } from "./social-area";
import { Footer } from "../footer";
import { headerHeight } from "styleguide/breakpoints";
import { ProfileImage } from "./profile-image";
import imageUrl from "../../assets/profile.jpg";

console.log(headerHeight);
const StyledContent = styled.main`
  text-align: center;
  padding: 0 1rem;
`;

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - (${headerHeight} + 100px));
  background-color: #white;
`;

export const Body = () => (
  <Wrapper>
    <StyledContent>
      <Title name={calltoaction} />
      <Biography biography={biography} />
      <SocialArea socialLinks={socialLinks} />
    </StyledContent>
    <Footer />
  </Wrapper>
);
