import { Dispatch, SetStateAction } from "react";

export interface IndexProps {
  text: string;
  audioSrc: string;
  hideCharacter: boolean;
  setHideCharacter: Dispatch<SetStateAction<boolean>>;
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

export interface UseContent {
  audioSrc: string;
  text: string;
  loading: boolean;
}
