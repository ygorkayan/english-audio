import { useState, useEffect } from "react";

export const shouldHideCharacter = (hideCharacter: boolean, text: string) => {
  if (hideCharacter) {
    return text?.replace(/[\w\d]/g, "x");
  }

  return text;
};

export const useContent = () => {
  const [text, setText] = useState("");
  const number = randomNumber(1, 5);

  useEffect(() => {
    fetch(`http://localhost:3000/api/text/${number}`)
      .then((resp) => resp.text())
      .then((newText) => setText(newText));
  }, []);

  return {
    audioSrc: `/contents/${number}/audio.mp3`,
    text,
  };
};

export const randomNumber = (start: number, end: number) => {
  return Math.round(Math.random() * (start - end) + end);
};