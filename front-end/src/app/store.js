import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import infoReducer from "../features/info/infoSlice";

import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../features/cart/cartPersistence";
import {
  loadUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../features/auth/authPersistence";

import {
  loadInfoFromLocalStorage,
  saveInfoToLocalStorage,
} from "../features/info/infoPersistence";

const preloadedState = {
  cart: loadCartFromLocalStorage() || {},
  user: loadUserFromLocalStorage() || {},
  info: loadInfoFromLocalStorage() || {},
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: authReducer,
    info: infoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const { cart, user, info } = store.getState();

  if (cart && Object.keys(cart).length > 0) {
    saveCartToLocalStorage(cart);
  }

  if (user && Object.keys(user).length > 0) {
    saveUserToLocalStorage(user);
  }

  if (info) {
    saveInfoToLocalStorage(info);
  }
});

export default store;
