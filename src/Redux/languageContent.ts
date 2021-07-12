import content from "../Content/index";
import store from "./store";

function contentLanguage() {
  const language: "en" = store.getState().language.language;
  return content[language];
}

export default contentLanguage;
