import { createSlice } from "@reduxjs/toolkit";

const initialState = { info: null };

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    add: (state, action) => {
      state.info = action.payload;
    },
    remove: (state) => {
      if (state.info) {
        state.info = null;
      }
    },
    resetInfo: () => {
      return { ...initialState };
    },
  },
});

export const { add, edit, remove, resetInfo } = infoSlice.actions;

export default infoSlice.reducer;
