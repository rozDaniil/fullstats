import React from "react";
import styled from "styled-components";

const StyledHomeText = styled.div`
  margin: 229px 0 13px 0;
  width: 40%;

  & p {
    color: ${(props) => props.theme.colors.white};
    font-size: 64px;
    line-height: 80px;
    font-weight: 700;
    margin: 0 0 40px 0;

    & span {
      font-family: ${(props) => props.theme.fonts.roboto};
      color: ${(props) => props.theme.colors.blue};
      margin: 0 0 0 33px;
      font-size: 64px;
      line-height: 80px;
      font-weight: 700;
    }
  }

  & span {
    margin: 0 0 16px 0;
    font-family: ${(props) => props.theme.fonts.sans};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.white};
  }

  @media ${(props) => props.theme.media.tablet} {
    text-align: center;
    width: 100%;
    margin: 90px 0 13px 0;
    & p {
      font-size: 32px;
      line-height: 48px;
      margin: 0 0 40px 0;

      & span {
        font-size: 32px;
        line-height: 48px;
        margin: 0;
      }
    }
  }
`;

export const HomeText = () => {
  return (
    <StyledHomeText>
      <p>
        Start a <br /> new project
        <br /> with
        <span> FullStats</span>
      </p>
      <span>
        Платформа для аналитики поможет вам в выборе товара или ниши, анализи
        конкурентов, увеличении продаж и в ускорении оборачиваемости вашего
        товара
      </span>
    </StyledHomeText>
  );
};
