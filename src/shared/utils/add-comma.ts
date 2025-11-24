export const addComma = (price: string) => {
  const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
};
