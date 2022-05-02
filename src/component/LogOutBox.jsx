import React, { useState } from "react";
import styled from "styled-components";
import { triangle } from "../assets/svg";
import { theme } from "../styled";

const StyledLogOutBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & p {
    margin: 0 8px 0 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.white};
  }

  & .arrowUp {
    cursor: pointer;
    transform: rotate(180deg);
  }
`;

const LogOut = styled.div`
  position: absolute;
  top: 44px;
  right: -10px;
  padding: 16px 32px;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  & p {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    font-size: 14px;
  }

  & svg {
    position: absolute;
    top: -8px;
    right: 4px;
  }
`;

export const LogOutBox = () => {
  const [box, setBox] = useState(false);

  const logOutBoxToggler = () => {
    setBox(!box);
  };

  return (
    <StyledLogOutBox>
      <p>Антон Аверин</p>
      <svg
        className={box ? "arrowUp" : null}
        onClick={logOutBoxToggler}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {box && (
        <LogOut>
          <p>Выход</p>
          {triangle}
        </LogOut>
      )}
    </StyledLogOutBox>
  );
};
