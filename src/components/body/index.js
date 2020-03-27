import React from "react";
import styled from "styled-components";
import { Title } from "./name";
import { Header } from "./header";
import {
  calltoaction,
  blurb,
  blurb2,
  whoweare,
  socialLinks,
  dataAccess
} from "./../../profile.json";

import { Blurb } from "./blurb";
import { SocialArea } from "./social-area";
import { Footer } from "../footer";
import { headerHeight } from "styleguide/breakpoints";
import { ProfileImage } from "./profile-image";
import imageUrl from "../../assets/profile.jpg";
import { SurveyButton } from "./surveybutton";

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
  background-color: #white;
  bottom: 500px;
`;

export const Body = () => (
  <Wrapper>
    <StyledContent>
      <Title name={calltoaction} />
      <Blurb blurb={blurb} />
      <SurveyButton />
      <Blurb blurb={blurb2} />
      <ProfileImage imageUrl={imageUrl} />
      <Header text="About Us" />
      <Blurb blurb={whoweare} />
      <Header text="Data" />
      <Blurb blurb={dataAccess} />
      <Header text="Share us!" />
      <SocialArea socialLinks={socialLinks} />
    </StyledContent>
    <Footer />
  </Wrapper>
);
