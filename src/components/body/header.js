import React from "react";
import styled from "styled-components";
import { black } from "styleguide/colors";

const StyledName = styled.h2`
  color: ${black};
  font-weight: bold;
  font-size: 250%;
`;

export const Header = ({ text }) => <StyledName>{text}</StyledName>;
