import { FC, useState } from "react";
import Audio from "@components/audio";
import Button from "@components/button";
import BoardWriting from "@components/board-writing";
import BoardReading from "@components/board-reading";
import styled, { createGlobalStyle } from "styled-components";
import { IndexProps } from "@helpers/interfaces";

export const Index: FC<IndexProps> = ({ audioSrc, boardReadingSrc }) => {
  const [hideCharacter, setHideCharacter] = useState(false);

  return (
    <Component>
      <GlobalStyle />
      <Audio src={audioSrc} />
      <ContainerBoard>
        <BoardWriting />
        <BoardReading hideCharacter={hideCharacter} text={boardReadingSrc} />
      </ContainerBoard>
      <Button
        hideCharacter={hideCharacter}
        setHideCharacter={setHideCharacter}
      />
    </Component>
  );
};

export const getServerSideProps = async () => ({
  props: {
    audioSrc: "/contents/teste.mp3",
    boardReadingSrc: "ola1234",
  },
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContainerBoard = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export default Index;
