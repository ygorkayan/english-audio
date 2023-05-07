import { FC, useState } from "react";
import styled from "styled-components";
import Audio from "@components/audio";
import Button from "@components/button";
import TextArea from "@components/textarea";
import { IndexProps } from "@helpers/interfaces";
import { shouldHideCharacter, getContent } from "@helpers/functions";

export const Index: FC<IndexProps> = ({ audioSrc, text }) => {
  const [hideCharacter, setHideCharacter] = useState(true);

  return (
    <Component>
      <Audio src={audioSrc} />
      <ContainerBoard>
        <TextArea />
        <TextArea
          readOnly={true}
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

export const getServerSideProps = async () => {
  const { text, audioSrc } = await getContent();

  return {
    props: {
      text,
      audioSrc,
    },
  };
};

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
