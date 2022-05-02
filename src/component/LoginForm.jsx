import React, { useState } from "react";
import { Link } from "react-router-dom";
import { visible, nonVisible } from "../assets/svg";
import { Button, SelectedText, Flex } from "../styled";
import { CustomCheckbox } from "./CustomCheckbox";
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
          <CustomCheckbox
            label="Запомнить меня"
            type="checkbox"
            id="checkbox"
          />
          <Link to="/reset">
            <SelectedText lineHeight="22px">Забыли пароль?</SelectedText>
          </Link>
        </Flex>
      )}
      <Button>{buttonText}</Button>
      {policy}
    </>
  );
};
