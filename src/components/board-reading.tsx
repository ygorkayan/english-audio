import { FC } from "react";
import TextArea from "./textarea";
import { BoardReadingProps } from "@helpers/interfaces";

export const BoardReading: FC<BoardReadingProps> = ({ text }) => (
  <TextArea readOnly={true} text={text} />
);

export default BoardReading;
