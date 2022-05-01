import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  position: relative;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ fd }) => fd || "row"};
  justify-content: ${({ jc }) => jc || "stretch"};
  align-items: ${({ ai }) => ai || "stretch"}; ;
`;

export const Flex = (props) => {
  return <FlexContainer {...props} />;
};
