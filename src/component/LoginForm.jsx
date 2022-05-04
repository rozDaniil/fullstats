import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "../store/authSlice";
import { useLoginUserMutation } from "../store/authApi";
import { visible, nonVisible } from "../assets/svg";
import { Button, SelectedText, Flex } from "../styled";
import { CustomCheckbox } from "./CustomCheckbox";
import { InputField } from "./InputField";

export const LoginForm = ({ children, buttonText, login, policy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser, { data }] = useLoginUserMutation();

  useEffect(() => {
    if (data?.access) {
      localStorage.setItem("token", JSON.stringify(data));
      dispatch(authUser(data));
      navigate("/");
    }
  }, [data]);

  const loginHandler = async () => {
    await loginUser({
      username: email,
      password: password,
    });
  };

  return (
    <>
      {children}
      <InputField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        title="Email"
      />
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
      <Button onClick={loginHandler}>{buttonText}</Button>
      {policy}
    </>
  );
};
