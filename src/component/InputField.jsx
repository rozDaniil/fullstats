import React from "react";
import styled from "styled-components";
import { theme } from "../styled/theme";

const Field = styled.fieldset`
  width:  ${({ width }) => width || null};
  border: 1px solid ${theme.colors.grey};
  border-radius: 8px;
  padding: 4px 14px 9px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}`;

const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.black};

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

const Legend = styled.legend`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${theme.colors.grey};
`;

export const InputField = ({
  children,
  title,
  type = "text",
  width,
  value,
  onChange,
}) => {
  return (
    <Field width={width}>
      <Legend>{title}</Legend>
      <InputText
        value={value}
        onChange={onChange}
        type={type}
        placeholder={title}
      />
      {children}
    </Field>
  );
};
