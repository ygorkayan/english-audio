import { Dispatch, SetStateAction } from "react";

export interface IndexProps {
  audioSrc: string;
  boardReadingSrc: string;
}

export interface BoardReadingProps {
  text: string;
  hideCharacter: boolean;
}

export interface ButtonProps {
  hideCharacter: boolean;
  setHideCharacter: Dispatch<SetStateAction<boolean>>;
}

export interface AudioProps {
  src: string;
}

export interface TextAreaProps {
  text?: string;
  readOnly?: boolean;
}