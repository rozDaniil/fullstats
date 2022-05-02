import React from "react";
import styled, { css } from "styled-components";
import logo from "../assets/logo.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ mg }) => mg || "40px 0 0 40px"};
  & p {
    color: ${(props) => props.color};
    font-weight: 800;
    font-size: 26px;
    margin: 0 0 0 8px;
    line-height: 31px;
  }
  ${(props) =>
    props.home &&
    css`
      color: ${(props) => props.theme.colors.white};
      margin: 0;
      justify-content: space-between;
    `}

  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }

  ${(props) =>
    props.home &&
    css`
      @media ${(props) => props.theme.media.tablet} {
        display: flex;
        & p {
          font-size: 16px;
          line-height: 19px;
        }
      }
    `}
`;

export const Logo = (props) => {
  return (
    <LogoContainer {...props}>
      <img src={logo} alt="" />
      <p>FullStats</p>
    </LogoContainer>
  );
};
