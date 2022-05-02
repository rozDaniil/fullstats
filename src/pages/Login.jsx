import React from "react";
import { LoginForm } from "../component/LoginForm";
import login from "../assets/login.png";
import {
  Wrapper,
  Flex,
  Logo,
  AuthRightSide,
  AuthLeftSide,
  FormContainer,
  AuthHint,
  LogoImg,
} from "../styled";
import { GetStarted, MobileGetStarted } from "../component/GetStarted";

export const Login = () => {
  return (
    <Wrapper pd="16px 40px 16px 16px">
      <Flex height="100%">
        <AuthLeftSide bgUrl={login}>
          <Logo />
        </AuthLeftSide>
        <LogoImg />
        <AuthRightSide>
          <GetStarted
            mainText="Нет учетной записи?"
            linkText="Зарегистрироваться"
            to="/register"
          />
          <FormContainer title="Войти" text="Введите свои данные ниже">
            <AuthHint />
            <LoginForm buttonText="Войти" login />
            <MobileGetStarted
              mainText="Нет учетной записи?"
              linkText="Зарегистрироваться"
              to="/register"
            />
          </FormContainer>
        </AuthRightSide>
      </Flex>
    </Wrapper>
  );
};
