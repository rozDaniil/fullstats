import React from "react";
import styled from "styled-components";
import { theme } from "../styled";

const Texts = styled.p`
  width: ${({ width }) => width};
  text-align: ${({ ta }) => ta || null};
  font-family: ${({ fontFamily }) => fontFamily || theme.fonts.roboto};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margin }) => margin || "0"};
  float: ${({ float }) => float || "none"};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor || null};
`;

export const Text = (props) => {
  return <Texts {...props} />;
};
