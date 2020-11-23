import { combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "./slices/headerSlice";
import { coursesReducer } from "./slices/coursesSlice";

const rootReducer = combineReducers({
  header: headerReducer,
  courses: coursesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
