import React from "react";
import styled from "styled-components";
import { infoSvg } from "../assets/svg";
import { Flex } from "../styled";

const StyledAuthHint = styled.div`
  width: 480px;
  background: ${(props) => props.theme.colors.lightBlue};
  padding: 15px 36px 15px 18px;
  border-radius: 8px;
  margin-bottom: 24px;
  & p {
    line-height: 22px;
    font-weight: 400;
    font-size: 14px;
    flex: 1;
    & span {
      font-weight: 600;
      font-size: 14px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

export const AuthHint = () => {
  return (
    <StyledAuthHint>
      <Flex ai="center">
        {infoSvg}
        <p>
          Используй <span>email</span>: test /<span> пароль</span> : test
        </p>
      </Flex>
    </StyledAuthHint>
  );
};
