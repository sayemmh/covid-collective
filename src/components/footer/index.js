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
  background-color: #2a2a2a;
  height: 600px;
`;

export const Footer = () => <StyledFooter />;
