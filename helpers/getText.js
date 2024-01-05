import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

const DIRECTORY = {
  TextContentEnglish: path.join("content", "English"),
  TextContentFrench: path.join("content", "French"),
  TextContentGerman: path.join("content", "German"),
};

// function to get all the files from the folder depending on the slug
const getFiles = (component) => readdirSync(DIRECTORY[component]);

const getFolders = (component, folder) =>
  readdirSync(path.join(DIRECTORY[component], folder));

export const getAllText = (component) => {
  const textObject = {};
  // We first return a list of all files through the function getFiles that are
  // applicable to a specific slug component (e.g., english, french, german)
  // We further manipulate the file names in order to create a list of the slugs
  // for the slug component.
  getFiles(component).map((folder) =>
    getFolders(component, folder).map((fileName) => {
      const slug = fileName.replace(".md", "");
      const fileContents = readFileSync(
        `${DIRECTORY[component]}/${folder}/${slug}.md`,
        "utf8"
      );
      // the code below only yields the metadata from all the md files
      const { data } = matter(fileContents);
      // we store each returned data object as a key in the text object
      // (this allows us to more easily access the data for a given key)
      textObject[slug] = data;
      return {
        [slug]: data,
      };
    })
  );
  return textObject;
};
