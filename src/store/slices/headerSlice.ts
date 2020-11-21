import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: any = {
  searchField: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSearchField(state, action: PayloadAction<{ value: string }>) {
      const { value } = action.payload;
      state.searchField = value;
    },
  },
});

export const { setSearchField } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
