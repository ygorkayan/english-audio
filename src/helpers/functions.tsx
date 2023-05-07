export const shouldHideCharacter = (hideCharacter: boolean, text: string) => {
  if (hideCharacter) {
    return text?.replace(/[\w\d]/g, "x");
  }

  return text;
};

export const getContent = async () => {
  const objectResponse = await fetch(`http://localhost:3000/api/text`)
    .then((resp) => resp.text())
    .then((resp) => JSON.parse(resp));

  return {
    text: objectResponse.text,
    audioSrc: objectResponse.audioSrc,
  };
};
