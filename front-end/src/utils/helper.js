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
