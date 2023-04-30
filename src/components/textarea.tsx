import { FC } from "react";
import styled from "styled-components";
import { TextAreaProps } from "@helpers/interfaces";

export const TextArea: FC<TextAreaProps> = ({ readOnly, text }) => (
  <Component value={text} cursorDisable={readOnly} readOnly={readOnly} />
);

const Component = styled.textarea<{ cursorDisable?: boolean }>`
  width: 40vw;
  padding: 8px;
  height: 500px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: ${({ cursorDisable }) => (cursorDisable ? "not-allowed" : "initial")};
`;

export default TextArea;
