import { FC } from "react";
import TextArea from "./textarea";
import { BoardReadingProps } from "@helpers/interfaces";
import { shouldHideCharacter } from "@helpers/functions";

export const BoardReading: FC<BoardReadingProps> = ({
  hideCharacter,
  text,
}) => (
  <TextArea readOnly={true} text={shouldHideCharacter(hideCharacter, text)} />
);

export default BoardReading;
