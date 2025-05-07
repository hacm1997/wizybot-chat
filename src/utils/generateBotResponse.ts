import { SUCCESS_RESPONSE } from "../const/gloab-consts";
import type { Message } from "../types/message";
import { fetchRandomProducts } from "./fetchRandomProducts";
import { getCurrentTime } from "./getCurrentTime";

// Function to get bot responses
export const generateBotResponse = async (
  inputText: string,
  idCount: number
): Promise<Message> => {
  const lowerCaseInput = inputText.toLowerCase();

  // If user write the correct sentence between get products
  if (lowerCaseInput === SUCCESS_RESPONSE) {
    const products = await fetchRandomProducts();

    return {
      id: idCount++, // Unique id by message
      text: "",
      position: "left",
      type: "carousel",
      timestamp: getCurrentTime(), // Get current time of message
      products,
    };
  }

  // Else get the default response
  return {
    id: idCount++, // unique id by message
    text: "You must ask the right questions",
    position: "left",
    type: "text",
    timestamp: getCurrentTime(), // Get current time of message
  };
};
