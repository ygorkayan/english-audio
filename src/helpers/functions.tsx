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
    fetch(`http://localhost:3000/api/text`)
      .then((resp) => resp.text())
      .then((response) => {
        const objectResponse = JSON.parse(response);

        setState({
          text: objectResponse.text,
          audioSrc: objectResponse.audioSrc,
          loading: false,
        });
      });
  }, []);

  return { ...state };
};
