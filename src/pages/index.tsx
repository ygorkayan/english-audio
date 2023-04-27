import styled from "styled-components";
import Audio from "@components/audio";
import BoardWriting from "@components/board-writing";
import BoardReading from "@components/board-reading";

export const Index = () => {
  return (
    <Component>
      <Audio />
      <BoardWriting />
      <BoardReading />
    </Component>
  );
};

const Component = styled.div``;

export default Index;
