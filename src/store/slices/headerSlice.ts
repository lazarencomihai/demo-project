import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {
  searchField: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSearchField(state, action: PayloadAction<string>) {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
