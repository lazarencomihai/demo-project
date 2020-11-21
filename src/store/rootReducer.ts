import { combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "./slices/headerSlice";

const rootReducer = combineReducers({
  header: headerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
