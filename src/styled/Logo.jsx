import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Text } from "../styled";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ mg }) => mg || "40px 0 0 40px"};
`;

export const Logo = (props) => {
  return (
    <LogoContainer mg={props.mg}>
      <img src={logo} alt="" />
      <Text
        color={props.color}
        fontWeight="800"
        fontSize="26px"
        margin="0 0 0 8px"
        lineHeight="31px"
      >
        FullStats
      </Text>
    </LogoContainer>
  );
};
