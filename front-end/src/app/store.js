import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../features/cart/cartPersistence";
import {
  loadUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../features/auth/authPersistence";

const preloadedState = {
  cart: loadCartFromLocalStorage() || {},
  user: loadUserFromLocalStorage() || {},
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const { cart, user } = store.getState();

  if (cart && Object.keys(cart).length > 0) {
    saveCartToLocalStorage(cart);
  }

  if (user && Object.keys(user).length > 0) {
    saveUserToLocalStorage(user);
  }
});

export default store;
