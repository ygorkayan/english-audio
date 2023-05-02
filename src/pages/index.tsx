import { FC } from "react";
import styled from "styled-components";
import Audio from "@components/audio";
import Button from "@components/button";
import TextArea from "@components/textarea";
import { IndexProps } from "@helpers/interfaces";
import withIndex from "@helpers/hoc-index";

export const Index: FC<IndexProps> = ({
  audioSrc,
  text,
  hideCharacter,
  setHideCharacter,
}) => (
  <Component>
    <Audio src={audioSrc} />
    <ContainerBoard>
      <TextArea />
      <TextArea readOnly={true} text={text} />
    </ContainerBoard>
    <Button hideCharacter={hideCharacter} setHideCharacter={setHideCharacter} />
  </Component>
);

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

export default withIndex(Index);
