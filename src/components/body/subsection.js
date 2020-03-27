import React from "react";
import styled from "styled-components";
import { black } from "styleguide/colors";

const StyledName = styled.h2`
  color: ${black};
  font-weight: bold;
  font-size: 250%;
`;

export const subsection = ({ name }) => <StyledName>{name}</StyledName>;
