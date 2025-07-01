export const saveUserToLocalStorage = (userState) => {
  try {
    const user = JSON.stringify(userState);
    localStorage.setItem("user", user);
  } catch (err) {
    console.warn("Failed to save user to local storage", err);
  }
};

export const loadUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return undefined;
    return JSON.parse(user);
  } catch (err) {
    console.error("Failed to load user from local storage", err);
    return undefined;
  }
};
