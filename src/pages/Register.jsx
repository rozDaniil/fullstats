import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../component/LoginForm";
import { InputField } from "../component/InputField";
import register from "../assets/registerImg.png";
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
} from "../styled";

export const Register = () => {
  return (
    <Wrapper pd="16px 40px 16px 16px">
      <Flex height="100%">
        <AuthLeftSide bgUrl={register}>
          <Logo />
        </AuthLeftSide>
        <AuthRightSide>
          <Text float="right" lineHeight="22px">
            Уже есть аккаунт?&nbsp;
            <Link to="/login">
              <SelectedText color={theme.colors.blue} fontWeight="600">
                Войти
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
              Зарегистрироваться
            </Text>
            <Text lineHeight="24px" fontSize="16px" margin="0 0 40px 0">
              Зарегистрируйтесь, чтобы начать работу с сервисом:
            </Text>
            <LoginForm
              buttonText="Зарегестрироваться"
              policy={
                <Text ta="center" lineHeight="22px">
                  Регистрируясь, я соглашаюсь с минимальными условиями
                  обслуживания и&nbsp;
                  <SelectedText color={theme.colors.blue} fontWeight="600">
                    Политикой конфиденциальности.
                  </SelectedText>
                </Text>
              }
            >
              <Flex jc="space-between">
                <InputField width="48%" placeholder="Имя" title="Имя" />
                <InputField width="48%" placeholder="Фамилия" title="Фамилия" />
              </Flex>
            </LoginForm>
          </FormContainer>
        </AuthRightSide>
      </Flex>
    </Wrapper>
  );
};
