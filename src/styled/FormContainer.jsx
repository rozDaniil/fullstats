import React from "react";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 480px;
  margin: ${({ margin }) => margin || "241px 0 0 330px"};
`;

export const FormContainer = (props) => {
  return <StyledFormContainer {...props} />;
};
