import { combineReducers } from "redux";

import languagePickerReducer from "stores/languagePickerReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
});

export default rootReducer;
