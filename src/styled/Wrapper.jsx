import React from "react";
import styled from "styled-components";
import { theme } from "../styled";

const PageWraper = styled.div`
  padding: ${({ pd }) => pd || "0"};
  font-family: ${theme.fonts.roboto};
  background: ${({ bg }) => bg || theme.colors.white};
  height: 100vh;
  &::before {
    content: url(${({ bgUrl }) => bgUrl});
    opacity: 0.5;
    width: 535px;
    height: 590px;
    position: absolute;
    top: 228px;
    right: 81px;
  }
`;

export const Wrapper = (props) => {
  return <PageWraper {...props} />;
};
