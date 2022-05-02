import React from "react";
import styled from "styled-components";

const PageWraper = styled.div`
  padding: ${({ pd }) => pd || "0"};
  font-family: ${(props) => props.theme.fonts.roboto};
  background: ${(props) => props.bg || props.theme.colors.white};
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
  @media ${(props) => props.theme.media.tablet} {
    padding: 106px 20px;
  }
`;

export const Wrapper = (props) => {
  return <PageWraper {...props} />;
};
