import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const Field = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 14px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};

  & input {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.black};
  }

  & span {
    opacity: 1;
    position: absolute;
    top: 16px;
    left: 13px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0px 3px;
    color: ${(props) => props.theme.colors.grey};
    transition: all 0.2s ease-in-out;
  }

  & .fixed {
    top:-10px;
  }

  & input:focus + span {
    top: -10px;
    background: white;
  }

  &:hover span {
    top: -10px;
    background: white;
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
      <input value={value} onChange={onChange} type={type} />
      <span className={classNames({ fixed: value })}>{title}</span>
      {children}
    </Field>
  );
};
