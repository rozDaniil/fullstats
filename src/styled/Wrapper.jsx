import React from "react";
import styled from "styled-components";

const PageWraper = styled.div`
  padding: ${({ pd }) => pd || "0"};
  font-family: ${(props) => props.theme.fonts.roboto};
  background: ${(props) => props.bg || props.theme.colors.white};
  height: 100vh;
  @media ${(props) => props.theme.media.tablet} {
    padding: 106px 20px;
  }
`;

export const Wrapper = (props) => {
  return <PageWraper {...props} />;
};
