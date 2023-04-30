import { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "@helpers/interfaces";

export const Button: FC<ButtonProps> = ({
  hideCharacter,
  setHideCharacter,
}) => (
  <Component onClick={() => setHideCharacter((oldValue) => !oldValue)}>
    {hideCharacter ? "Reveal" : "Hide"}
  </Component>
);

const Component = styled.button`
  cursor: pointer;
  margin-top: 30px;
  background: none;
  border-radius: 8px;
  padding: 15px 120px;
  border: 1px solid black;
  text-transform: uppercase;

  &:active {
    transition: 100ms;
    border: 1px solid #cdcdcd;
    background-color: #cdcdcd;
  }
`;

export default Button;
