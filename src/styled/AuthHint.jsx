import React from "react";
import styled from "styled-components";
import { infoSvg } from "../assets/svg";
import { theme, SelectedText, Text, Flex } from "../styled";

const StyledAuthHint = styled.div`
  width: 480px;
  background: ${theme.colors.lightBlue};
  padding: 15px 36px 15px 18px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const AuthHint = () => {
  return (
    <StyledAuthHint>
      <Flex>
        {infoSvg}
        <Text lineHeight="22px">
          Используй <SelectedText fontWeight="600">email</SelectedText>:
          demo@minimals.ru /
          <SelectedText fontWeight="600"> пароль</SelectedText> : demo1234
        </Text>
      </Flex>
    </StyledAuthHint>
  );
};
