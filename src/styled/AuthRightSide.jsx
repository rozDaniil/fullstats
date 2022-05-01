import React from "react";
import styled from "styled-components";

const RightSide = styled.div`
  flex: 1;
  padding-top: 24px;
`;

export const AuthRightSide = (props) => {
  return <RightSide {...props} />;
};
