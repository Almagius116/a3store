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
    resetUser: () => {
      return { ...initialState };
    },
  },
});

export const { add, resetUser } = authSlice.actions;

export default authSlice.reducer;
