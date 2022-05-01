import React from "react";
import styled from "styled-components";

const StyledRotatedBox = styled.div`
  cursor: pointer;
  transform: ${({ rotate }) => rotate};
`;

export const RotatedBox = (props) => {
  return <StyledRotatedBox {...props} />;
};
