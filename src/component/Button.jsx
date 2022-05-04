import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: ${({ mg }) => mg || "24px 0"};
  width: ${({ width }) => width || "100%"};
  padding: ${({ pd }) => pd || "11px 0"};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.blue};
  box-shadow: 0px 8px 16px rgba(50, 88, 251, 0.24);
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  outline: none;
  transition: all 0.2s ease-in-out;
  & a {
    color: ${(props) => props.theme.colors.white};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue};
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.blue};
    & a {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
