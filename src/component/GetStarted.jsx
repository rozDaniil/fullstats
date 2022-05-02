import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledGetStarted = styled.div`
  & p {
    float: right;
    line-height: 22px;
    font-size: 14px;
    & span {
      color: ${(props) => props.theme.colors.blue};
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    display: none;
  }
`;

const StyledMobileGetStarted = styled(StyledGetStarted)`
  text-align: center;
  display: none;
  & p {
    float: none;
  }
  @media ${(props) => props.theme.media.tablet} {
    display: block;
  }
`;

export const GetStarted = ({ mainText, linkText, to }) => {
  return (
    <StyledGetStarted>
      <p>
        {mainText}&nbsp;
        <Link to={to}>
          <span>{linkText}</span>
        </Link>
      </p>
    </StyledGetStarted>
  );
};

export const MobileGetStarted = ({ mainText, linkText, to }) => {
  return (
    <StyledMobileGetStarted>
      <p>
        {mainText}&nbsp;
        <Link to={to}>
          <span>{linkText}</span>
        </Link>
      </p>
    </StyledMobileGetStarted>
  );
};
