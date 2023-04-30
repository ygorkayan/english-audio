export const shouldHideCharacter = (hideCharacter: boolean, text: string) => {
  if (hideCharacter) {
    return text?.replace(/[\w\d]/g, "x");
  }

  return text;
};


export const getContent = () => {

  return {
    audioSrc: "/contents/teste.mp3",
    text: "ola1234 ola ygor123",
  }
}