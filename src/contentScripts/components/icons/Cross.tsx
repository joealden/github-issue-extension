import React from "react";
import styled from "styled-components";

const Cross: React.FunctionComponent = () => (
  <StyledSVG
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </StyledSVG>
);

export default Cross;

const StyledSVG = styled.svg`
  && {
    width: 30px;
    height: 30px;

    line {
      stroke: black;
    }
  }
`;
