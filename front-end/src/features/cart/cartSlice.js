import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    plusQty: (state, action) => {
      const index = action.payload;
      state.items[index].qty += 1;
      state.items[index].totalPriceProduct =
        state.items[index].price * state.items[index].qty;
    },
    minusQty: (state, action) => {
      const index = action.payload;
      if (state.items[index].qty > 1) {
        state.items[index].qty -= 1;
        state.items[index].totalPriceProduct =
          state.items[index].price * state.items[index].qty;
      }
    },
    remove: (state, action) => {
      const index = action.payload;
      try {
        state.items.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    },
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { add, plusQty, minusQty, remove, reset } = cartSlice.actions;

export default cartSlice.reducer;
