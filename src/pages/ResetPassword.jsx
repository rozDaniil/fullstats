import React from "react";
import { useNavigate } from "react-router-dom";

import { InputField } from "../component/InputField";
import {
  Wrapper,
  Button,
  FormContainer,
  Logo,
  SelectedText,
  Text,
  theme,
  TextAlignContainer,
} from "../styled";

export const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <Wrapper pd="16px 40px 16px 16px">
      <Logo />
      <FormContainer margin="0 auto">
        <TextAlignContainer ta="left">
          <Text
            lineHeight="36px"
            fontSize="24px"
            fontWeight="700"
            margin="247px 0 8px 0"
          >
            Забыли свой пароль?
          </Text>
          <Text lineHeight="24px" fontSize="16px" margin="0 0 40px 0">
            Пожалуйста, введите адрес электронной почты, связанный с вашей
            учетной записью, и мы отправим вам ссылку для сброса пароля.
          </Text>
        </TextAlignContainer>
        <InputField title="Email" />
        <Button mg="0 0 19px 0">Восстановить пароль</Button>
        <TextAlignContainer ta="center">
          <SelectedText
            onClick={() => navigate(-1)}
            fontSize="15px"
            color={theme.colors.blue}
          >
            Назад
          </SelectedText>
        </TextAlignContainer>
      </FormContainer>
    </Wrapper>
  );
};
