import path from "path";
import { readFileSync } from "node:fs";
import { NextApiRequest, NextApiResponse } from "next";

export const text = (req: NextApiRequest, resp: NextApiResponse) => {
  const number: any = req.query.text;

  const pathText = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "public",
    "contents",
    number,
    "text.txt"
  );

  const text = readFileSync(pathText).toString();
  resp.send(text);
  resp.end();
};

export default text;
