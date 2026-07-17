import { readFile, unlink, writeFile } from "node:fs/promises";

const exec = async () => {
  await unlink('./teste.txt');
}

exec();