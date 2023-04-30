export const shouldHideCharacter = (hideCharacter: boolean, text: string) => {
  if (hideCharacter) {
    return text?.replace(/[\w\d]/g, "x");
  }

  return text;
};

export const getContent = async () => {
  const number = randomNumber(1, 5);
  const fetchText = await fetch(`http://localhost:3000/api/text/${number}`);
  const text = await fetchText.text();

  return {
    audioSrc: `/contents/${number}/audio.mp3`,
    text,
  };
};

export const randomNumber = (start: number, end: number) => {
  return Math.round(Math.random() * (start - end) + end);
};
