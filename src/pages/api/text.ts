import path from "path";
import { readFile, readdir } from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";

export const text = (_: NextApiRequest, resp: NextApiResponse) => {
  getlength(pathContext)
    .then(getData)
    .then((data) => {
      resp.send({ ...data });
      resp.end();
    });
};

const getlength = (path: string): Promise<getlengthPromise> =>
  new Promise((resolver, _) =>
    readdir(pathContext, (_, result) =>
      resolver({ path, length: result.length - 1 })
    )
  );

const getData = (result: getlengthPromise): Promise<getDataPromisse> => {
  const number = randomNumber(1, result.length);
  const local = path.resolve(result.path, number, "text.txt");

  return new Promise((resolver, _) =>
    readFile(local, (_, result) =>
      resolver({
        text: result?.toString(),
        audioSrc: `/contents/${number}/audio.mp3`,
      })
    )
  );
};

const pathContext = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "public",
  "contents"
);

interface getlengthPromise {
  path: string;
  length: number;
}

interface getDataPromisse {
  text: string;
  audioSrc: string;
}

export const randomNumber = (start: number, end: number) => {
  return Math.round(Math.random() * (start - end) + end).toString();
};

export default text;
