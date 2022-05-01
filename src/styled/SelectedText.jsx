import React from "react";
import styled from "styled-components";

const SelectedTexts = styled.span`
  margin: ${({ mg }) => mg || "0"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SelectedText = (props) => {
  return <SelectedTexts {...props} />;
};
