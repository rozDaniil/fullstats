import React from "react";
import { LoginForm } from "../component/LoginForm";
import { InputField } from "../component/InputField";
import register from "../assets/registerImg.png";
import {
  SelectedText,
  Text,
  Wrapper,
  Flex,
  Logo,
  AuthRightSide,
  AuthLeftSide,
  FormContainer,
  LogoImg,
} from "../styled";
import { GetStarted, MobileGetStarted } from "../component/GetStarted";

export const Register = () => {
  return (
    <Wrapper pd="16px 40px 16px 16px">
      <Flex height="100%">
        <AuthLeftSide bgUrl={register}>
          <Logo />
        </AuthLeftSide>
        <LogoImg />
        <AuthRightSide>
          <GetStarted mainText="Уже есть аккаунт?" linkText="Войти" to="/" />
          <FormContainer
            title="Зарегистрироваться"
            text="Зарегистрируйтесь, чтобы начать работу с сервисом:"
          >
            <LoginForm
              buttonText="Зарегестрироваться"
              policy={
                <Text margin="0 0 32px 0" ta="center" lineHeight="22px">
                  Регистрируясь, я соглашаюсь с минимальными условиями
                  обслуживания и&nbsp;
                  <SelectedText fontWeight="600">
                    Политикой конфиденциальности.
                  </SelectedText>
                </Text>
              }
            >
              <Flex jcMedia="stretch" jc="space-between">
                <InputField
                  width="48%"
                  widthMedia="100%"
                  placeholder="Имя"
                  title="Имя"
                />
                <InputField
                  widthMedia="100%"
                  width="48%"
                  placeholder="Фамилия"
                  title="Фамилия"
                />
              </Flex>
            </LoginForm>
            <MobileGetStarted
              mainText="Уже есть аккаунт?"
              linkText="Войти"
              to="/"
            />
          </FormContainer>
        </AuthRightSide>
      </Flex>
    </Wrapper>
  );
};
