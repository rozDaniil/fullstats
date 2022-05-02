import React from "react";
import styled from "styled-components";
import { GetStarted } from "../component/GetStarted";

const StyledMobileGetStarted = styled(GetStarted)`
  text-align: center;

  & p {
    font-size: 20px;
    // float: none;
  }
`;

export const MobileGetStarted = (props) => {
  return <StyledMobileGetStarted {...props} />;
};
