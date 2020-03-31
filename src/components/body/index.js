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
  dataAccess,
  contactus,
  disclaimer
} from "./../../profile.json";

import { Blurb } from "./blurb";
import { Disclaimer } from "./disclaimer";
import { SocialArea } from "./social-area";
import { Footer } from "../footer";
import { headerHeight } from "styleguide/breakpoints";
import { ImageBlob } from "./imageblob";
import { LogoBlob } from "./logoblob";
import logo from "../../assets/logo.jpg";
import {  SurveyButton } from "./surveybutton";
import {  HealthySurveyButton } from "./healthysurveybutton";

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
      <Blurb blurb={blurb2} />
      <SurveyButton />
      <Blurb blurb="If you're not showing symptoms:" />
      <HealthySurveyButton />
      <LogoBlob imageUrl={logo} />
      <Title name="Covid Data Collective" />
      <Blurb blurb={whoweare} />
      <Header text="Data" />
      <Blurb blurb={dataAccess} />

      <Header text="Contact" />

      <Blurb blurb={contactus} />
      <SocialArea socialLinks={socialLinks} />
      <Disclaimer blurb={disclaimer} />
    </StyledContent>
    <Footer />
  </Wrapper>
);
