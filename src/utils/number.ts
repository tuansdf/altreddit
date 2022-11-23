const formatter = Intl.NumberFormat("en", { notation: "compact" });

export const getCompactNumber = (number: number) => {
  return formatter.format(number);
};
