import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.user == null) {
        state.user = action.payload;
      }
    },
    remove: (state) => {
      state.user = null;
    },
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { add, reset } = authSlice.actions;

export default authSlice.reducer;
