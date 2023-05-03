import { FC } from "react";
import styled from "styled-components";
import { AudioProps } from "@helpers/interfaces";

export const Audio: FC<AudioProps> = ({ src }) => (
  <Component>
    <AudioPlayer controls>
      <source src={src} type="audio/mpeg" />
    </AudioPlayer>
  </Component>
);

const Component = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AudioPlayer = styled.audio`
  width: 60%;
`;

export default Audio;
