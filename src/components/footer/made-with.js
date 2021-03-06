import React from "react";
import styled from "styled-components";
import { themeColor } from "styleguide/colors";

const StyledContainer = styled.span`
  align-items: right;
  display: block;
  & > span {
    margin-top: auto;
  }
  .icon {
    color: ${themeColor};
    font-size: 13px;
    margin-left: 5px;
  }
`;

export const MadeWith = ({ description }) => (
  <StyledContainer>
    {description} <span className="icon">❤</span>
  </StyledContainer>
);
