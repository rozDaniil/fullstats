import React from "react";
import styled from "styled-components";
import { theme } from "../styled/theme";

const Field = styled.fieldset`
  width:  ${({ width }) => width};
  border: 1px solid ${theme.colors.grey};
  border-radius: 8px;
  padding: 4px 14px 9px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;


  & legend {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${theme.colors.grey};  
  }

  & input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.black};
  }

  @media ${(props) => props.theme.media.tablet} {
    width: ${({ widthMedia }) => widthMedia};
  }

}`;

export const InputField = ({
  children,
  title,
  type = "text",
  width,
  widthMedia,
  value,
  onChange,
}) => {
  return (
    <Field widthMedia={widthMedia} width={width}>
      <legend>{title}</legend>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={title}
      />
      {children}
    </Field>
  );
};
