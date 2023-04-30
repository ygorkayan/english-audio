import { FC, useState } from "react";
import styled from "styled-components";
import Audio from "@components/audio";
import Button from "@components/button";
import BoardWriting from "@components/board-writing";
import BoardReading from "@components/board-reading";
import { IndexProps } from "@helpers/interfaces";
import { getContent, shouldHideCharacter } from "@helpers/functions";

export const Index: FC<IndexProps> = ({ audioSrc, text }) => {
  const [hideCharacter, setHideCharacter] = useState(true);

  return (
    <Component>
      <Audio src={audioSrc} />
      <ContainerBoard>
        <BoardWriting />
        <BoardReading
          hideCharacter={hideCharacter}
          text={shouldHideCharacter(hideCharacter, text)}
        />
      </ContainerBoard>
      <Button
        hideCharacter={hideCharacter}
        setHideCharacter={setHideCharacter}
      />
    </Component>
  );
};

export const getServerSideProps = async () => ({
  props: getContent(),
});

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
