import React from "react";
import styled from "styled-components";
import { theme } from "../styled";

const LogOut = styled.div`
  position: absolute;
  top: 44px;
  right: -10px;
  padding: 16px 32px;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  & svg {
    position: absolute;
    top: -8px;
    right: 4px;
  }
`;

export const LogOutBox = (props) => {
  return <LogOut {...props} />;
};
