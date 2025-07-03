export const saveInfoToLocalStorage = (infoState) => {
  try {
    const info = infoState;
    localStorage.setItem("info", JSON.stringify(info));
  } catch (err) {
    console.warn("Failed to save info to local storage", err);
  }
};

export const loadInfoFromLocalStorage = () => {
  try {
    const info = JSON.parse(localStorage.getItem("info"));
    if (!info) return undefined;
    return info;
  } catch (err) {
    console.error("Failed to load info from local storage", err);
    return undefined;
  }
};
