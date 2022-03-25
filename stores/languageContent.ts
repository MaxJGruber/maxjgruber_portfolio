import { content } from "content/index";
import store from "stores/store";

function contentLanguage() {
  const language: "en" | "fr" | "de" = store.getState().language.language;
  return content[language];
}

export default contentLanguage;
