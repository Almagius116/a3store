export const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    const parsed = cart ? JSON.parse(cart) : undefined;
    if (parsed && Array.isArray(parsed.items)) {
      return parsed;
    }

    return { items: [] };
  } catch (err) {
    console.warn("Failed to load cart from local storage", err);
    return { items: [] };
  }
};

export const saveCartToLocalStorage = (cartState) => {
  try {
    const cart = JSON.stringify(cartState);
    localStorage.setItem("cart", cart);
  } catch (err) {
    console.warn("Failed to save cart to local storage", err);
  }
};
