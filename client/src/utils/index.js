import { surpriseMePrompts, URL } from "../constants";
import FileSaver from "file-saver";

export const getRandomPrompt = (prompt) => {
  const randomInd = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomInd];
  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }
  return randomPrompt;
};

export const downloadPhoto = (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
