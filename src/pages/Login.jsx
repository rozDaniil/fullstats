import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../component/LoginForm";
import login from "../assets/login.png";
import {
  theme,
  SelectedText,
  Text,
  Wrapper,
  Flex,
  Logo,
  AuthRightSide,
  AuthLeftSide,
  FormContainer,
  AuthHint,
} from "../styled";

export const Login = () => {
  return (
    <Wrapper pd="16px 40px 16px 16px">
      <Flex height="100%">
        <AuthLeftSide bgUrl={login}>
          <Logo />
        </AuthLeftSide>
        <AuthRightSide>
          <Text float="right" lineHeight="22px">
            Нет учетной записи?&nbsp;
            <Link to="/register">
              <SelectedText color={theme.colors.blue} fontWeight="600">
                Зарегистрироваться
              </SelectedText>
            </Link>
          </Text>
          <FormContainer>
            <Text
              lineHeight="36px"
              fontSize="24px"
              fontWeight="700"
              margin="0 0 8px 0"
            >
              Войти
            </Text>
            <Text lineHeight="24px" fontSize="16px" margin="0 0 40px 0">
              Введите свои данные ниже
            </Text>
            <AuthHint />
            <LoginForm buttonText="Войти" login />
          </FormContainer>
        </AuthRightSide>
      </Flex>
    </Wrapper>
  );
};
