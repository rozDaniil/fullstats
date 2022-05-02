import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const StyledLogoImg = styled.img`
  display: none;
  @media ${(props) => props.theme.media.tablet} {
    display: block;
    position: absolute;
    top: -74px;
  }
`;

export const LogoImg = () => {
  return <StyledLogoImg width={40} height={40} src={logo} alt="" />;
};
