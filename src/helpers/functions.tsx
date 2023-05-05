import { useState, useMemo } from "react";
import { UseContent } from "./interfaces";

export const shouldHideCharacter = (hideCharacter: boolean, text: string) => {
  if (hideCharacter) {
    return text?.replace(/[\w\d]/g, "x");
  }

  return text;
};

export const useContent = (): UseContent => {
  const [state, setState] = useState<UseContent>({
    text: "",
    audioSrc: "",
    loading: true,
  });

  useMemo(() => {
    const number = randomNumber(1, 5);

    fetch(`http://localhost:3000/api/text/${number}`)
      .then((resp) => resp.text())
      .then((newText) => {
        setState({
          text: newText,
          audioSrc: `/contents/${number}/audio.mp3`,
          loading: false,
        });
      });
  }, []);

  return { ...state };
};

export const randomNumber = (start: number, end: number) => {
  return Math.round(Math.random() * (start - end) + end);
};
