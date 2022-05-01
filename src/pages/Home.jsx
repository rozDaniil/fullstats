import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeBg from "../assets/home.png";
import { gradient } from "../assets/mainPageBg";
import { triangle } from "../assets/svg";
import { LogOutBox } from "../component/LogOutBox";
import {
  Text,
  Logo,
  theme,
  Wrapper,
  Flex,
  SelectedText,
  Button,
  RotatedBox,
} from "../styled";

export const Home = () => {
  const isAuth = true;
  const [box, setBox] = useState(false);

  const logOutBoxToggler = () => {
    setBox(!box);
  };

  return (
    <Wrapper bgUrl={homeBg} pd="33px 148px 0 150px" bg={gradient}>
      <Flex jc="space-between">
        <Logo color={theme.colors.white} mg="0" />
        {isAuth ? (
          <Flex ai="center">
            <Text
              margin="0 8px 0 0"
              lineHeight="24px"
              fontSize="16px"
              fontWeight="700"
              color={theme.colors.white}
            >
              Антон Аверин
            </Text>
            {
              <RotatedBox rotate={box ? "rotate(180deg)" : null}>
                <svg
                  onClick={logOutBoxToggler}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </RotatedBox>
            }
            {box && (
              <LogOutBox>
                <Text fontWeight="500">Выход</Text>
                {triangle}
              </LogOutBox>
            )}
          </Flex>
        ) : (
          <Link to="/login">
            <Text
              cursor="pointer"
              margin="0 8px 0 0"
              lineHeight="24px"
              fontSize="16px"
              fontWeight="700"
              color={theme.colors.white}
            >
              Войти
            </Text>
          </Link>
        )}
      </Flex>
      <Text
        margin="229px 0 40px 0 "
        fontSize="64px"
        lineHeight="80px"
        fontWeight="700"
        color={theme.colors.white}
      >
        Start a <br /> new project
        <br /> with
        <SelectedText
          mg="0 0 0 33px"
          fontSize="64px"
          lineHeight="80px"
          color={theme.colors.blue}
        >
          FullStats
        </SelectedText>
      </Text>
      <Text
        width="39%"
        margin="0 0 16px 0"
        fontFamily={theme.fonts.sans}
        fontWeight="400"
        fontSize="16px"
        lineHeight="24px"
        color={theme.colors.white}
      >
        Платформа для аналитики поможет вам в выборе товара или ниши, анализи
        конкурентов, увеличении продаж и в ускорении оборачиваемости вашего
        товара
      </Text>
      <Button width="177px">Перейти к сервису</Button>
    </Wrapper>
  );
};
