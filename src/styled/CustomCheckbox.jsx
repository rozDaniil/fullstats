import React from "react";
import styled from "styled-components";
import checked from "../assets/checked.svg";
import { theme } from "../styled";

const InputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin: 0 11px;
  }

  & + label::before {
    content: "";
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 3px;
  }

  &:checked + label::before {
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid ${theme.colors.blue};
  }
`;

export const CustomCheckbox = (props) => {
  return <InputCheckbox {...props} />;
};
