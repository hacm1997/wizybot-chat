// Fucntion to generate rendom price
export const generateRandomPrice = (
  min: number = 20,
  max: number = 100
): number => {
  const price = Math.random() * (max - min) + min;
  return parseFloat(price.toFixed(2)); // Returns the price with 2 decimal places
};
