import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: ${({ ta }) => ta || null};
`;

export const TextAlignContainer = (props) => {
  return <StyledContainer {...props} />;
};
