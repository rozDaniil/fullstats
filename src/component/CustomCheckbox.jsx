import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../styled";
import checked from "../assets/checked.svg";

const InputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin: 0 11px;
    & + p {
      font-weight: 400;
      font-family: ${(props) => props.theme.fonts.roboto};
      font-size: 14px;
      line-height: 22px;
    }
  }

  & + label::before {
    content: "";
    width: 1em;
    height: 1em;
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 3px;
  }

  &:checked + label::before {
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid ${(props) => props.theme.colors.blue};
  }
`;

export const CustomCheckbox = (props) => {
  return (
    <Flex>
      <InputCheckbox {...props} type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" />
      <p>{props.label}</p>
    </Flex>
  );
};
