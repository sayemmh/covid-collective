import React from "react";
import styled from "styled-components";
import { grayLight } from "styleguide/colors";
import { MadeWith } from "./made-with";

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: 0.5rem 0.5rem;
  display: flex;
  color: ${grayLight};
  justify-content: space-between;
`;

export const Footer = () => (
  <StyledFooter>
    <MadeWith description="Made with React and" />
  </StyledFooter>
);
