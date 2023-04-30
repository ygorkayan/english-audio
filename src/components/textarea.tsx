import { FC } from "react";
import styled from "styled-components";
import { TextAreaProps } from "@helpers/interfaces";

export const TextArea: FC<TextAreaProps> = ({ readOnly, text }) => (
  <Component value={text} cursorDisabled={readOnly} readOnly={readOnly} />
);

const Component = styled.textarea<{ cursorDisabled?: boolean }>`
  width: 40vw;
  padding: 8px;
  height: 500px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: ${({ cursorDisabled }) => (cursorDisabled ? "not-allowed" : "initial")};
`;

export default TextArea;
