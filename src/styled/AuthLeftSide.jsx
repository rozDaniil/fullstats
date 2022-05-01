import React from "react";
import styled from "styled-components";

const LeftSide = styled.div`
  box-shadow: 0px 16px 32px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  background: url(${({ bgUrl }) => bgUrl}) no-repeat center center;
  width: 364px;
`;

export const AuthLeftSide = (props) => {
  return <LeftSide {...props} />;
};
