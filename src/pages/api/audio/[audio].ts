import path from "path";
import { readFileSync } from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";

export const audio = (req: NextApiRequest, resp: NextApiResponse) => {
  const number: any = req.query.audio ?? "1";

  const pathAudio = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "public",
    "contents",
    number,
    "audio.txt"
  );

  const audio = readFileSync(pathAudio);
  resp.send(audio);
  resp.end();
};

export default audio;