import React from "react";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 480px;
  margin: ${({ margin }) => margin || "241px 0 0 330px"};

  & .form__title {
    line-height: 36px;
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  & .form__text {
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 40px 0;
  }
  @media ${(props) => props.theme.media.tablet} {
    margin: 0;
    width: 100%;
  }
  @media ${(props) => props.theme.media.smallLaptop} {
    margin: 163px 0 0 51px;
  }
`;

export const FormContainer = (props) => {
  return (
    <StyledFormContainer {...props}>
      <p className="form__title">{props.title}</p>
      <p className="form__text">{props.text}</p>
      {props.children}
    </StyledFormContainer>
  );
};
