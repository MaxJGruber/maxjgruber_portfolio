import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
});

export default rootReducer;
