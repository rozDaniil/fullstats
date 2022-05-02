import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { gradient } from "../assets/mainPageBg";
import homeBg from "../assets/home.png";
import { LogOutBox } from "../component/LogOutBox";
import { Logo, theme, Flex, Button } from "../styled";
import { HomeText } from "../styled/HomeText";

const StyledHome = styled.div`
  font-family: ${(props) => props.theme.fonts.roboto};
  height: 100vh;
  padding: 33px 148px 0 144px;
  background-image: url(${homeBg}), ${gradient};
  background-repeat: no-repeat;
  background-position: 93%, 0, 0;
  background-size: 500px, cover;
  & a {
    p {
      cursor: pointer;
      margin: 0 8px 0 0;
      lineheight: 24px;
      fontsize: 16px;
      fontweight: 700;
      color: ${theme.colors.white};
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    padding: 32px 16px 0 16px;
    background-position: 50% 28%;
    background-size: 230px, cover;
  }
`;

export const Home = () => {
  const isAuth = false;

  return (
    <StyledHome>
      <Flex jc="space-between">
        <Logo home />
        {isAuth ? (
          <LogOutBox />
        ) : (
          <Link to="/login">
            <p>Войти</p>
          </Link>
        )}
      </Flex>
      <HomeText />
      <Flex jc="stretch" jcMedia="center">
        <Button width="177px">Перейти к сервису</Button>
      </Flex>
    </StyledHome>
  );
};
