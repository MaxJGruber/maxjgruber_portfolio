let language: string | void | null;

function hasLanguageSessionStorage(languageState: string | undefined) {
  if (languageState === undefined) {
    try {
      try {
        language = sessionStorage.getItem("language");
        if (language === null) {
          language = "en";
          return language;
        }
        return language;
      } catch (error) {
        language = "en";
        return language;
      }
    } catch (error) {
      language = "en";
      return language;
    }
  } else {
    try {
      sessionStorage.setItem("language", languageState);
      return language;
    } catch (error) {
      language = languageState;
      return language;
    }
  }
}
export default function languagePickerReducer(
  state = { language: hasLanguageSessionStorage(undefined) },
  action: Record<string, any>
) {
  switch (action.type) {
    case "SET_LANGUAGE":
      console.log(action.language);
      hasLanguageSessionStorage(action.language);
      let newState = { ...state, language: action.language };
      return newState;
    default:
      return state;
  }
}