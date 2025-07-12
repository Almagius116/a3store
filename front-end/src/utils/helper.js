export const rupiahFormat = (number) => {
  return "Rp. " + Number(number).toLocaleString("id-ID");
};

export const dateFormat = (isoDate) => {
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
};

export const capitalizeFirstLetter = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const replaceFormatText = (text) => {
  if (!text) return "";
  const replace = text.replace(/_/g, " ");
  return replace.charAt(0).toUpperCase() + replace.slice(1);
};
