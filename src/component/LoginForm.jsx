import React, { useState } from "react";
import { Link } from "react-router-dom";
import { visible, nonVisible } from "../assets/svg";
import {
  Button,
  Text,
  SelectedText,
  Flex,
  CustomCheckbox,
  theme,
} from "../styled";
import { InputField } from "./InputField";

export const LoginForm = ({ children, buttonText, login, policy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      {children}
      <InputField placeholder="Email" title="Email" />
      <InputField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={isVisible ? "text" : "password"}
        title="Пароль"
      >
        <div onClick={() => setIsVisible(!isVisible)}>
          {!isVisible ? visible : nonVisible}
        </div>
      </InputField>
      {login && (
        <Flex ai="center" jc="space-between">
          <Flex>
            <CustomCheckbox type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" />
            <Text lineHeight="22px">Запомнить меня</Text>
          </Flex>
          <Link to="/reset">
            <SelectedText lineHeight="22px" color={theme.colors.blue}>
              Забыли пароль?
            </SelectedText>
          </Link>
        </Flex>
      )}
      <Button>{buttonText}</Button>
      {policy}
    </>
  );
};
