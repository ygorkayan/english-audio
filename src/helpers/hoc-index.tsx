import { FC, useState } from "react";
import { IndexProps } from "./interfaces";
import { shouldHideCharacter, useContent } from "./functions";

// eslint-disable-next-line react/display-name
export const withIndex = (Component: FC<IndexProps>) => () => {
  const [hideCharacter, setHideCharacter] = useState(true);
  const { audioSrc, text, loading } = useContent();

  if (loading) return <p>Loading...</p>;

  const componentsProps = {
    text: shouldHideCharacter(hideCharacter, text),
    audioSrc,
    hideCharacter: hideCharacter,
    setHideCharacter: setHideCharacter,
  };

  return <Component {...componentsProps} />;
};

export default withIndex;
