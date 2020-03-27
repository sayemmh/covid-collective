import React from "react";
import styled from "styled-components";
import { black } from "styleguide/colors";

const StyledName = styled.h2`
  color: ${black};
  font-weight: bold;
  font-size: 400%;
`;

export const Title = ({ name }) => <StyledName>{name}</StyledName>;
