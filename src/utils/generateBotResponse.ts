import {
  defaultResponses,
  HELP_CHAT,
  SUCCESS_RESPONSE,
} from "../const/gloab-consts";
import type { Message } from "../types/message";
import { fetchProducts } from "./fetchProducts";
import { getCurrentTime } from "./getCurrentTime";
import { v4 as uuidv4 } from "uuid";

// Function to get bot responses
export const generateBotResponse = async (
  inputText: string
): Promise<Message> => {
  const lowerCaseInput = inputText.toLowerCase();

  switch (lowerCaseInput) {
    // Case 1: GET PRODUCTS IF SETENCES IS CORRECT
    case SUCCESS_RESPONSE: {
      const products = await fetchProducts();

      return {
        id: uuidv4(), // Unique id by message
        text: "",
        position: "left",
        type: "carousel",
        timestamp: getCurrentTime(),
        products,
      };
    }
    // Case 2: SHOW THE SENTENCES
    case HELP_CHAT:
      return {
        id: uuidv4(),
        text: 'For recommended products write: "i want product recommendations"',
        position: "left",
        type: "text",
        timestamp: getCurrentTime(),
      };

    // Default case if the senteces is different
    default:
      return {
        id: uuidv4(),
        text: getRandomDefaultResponse(),
        position: "left",
        type: "text",
        timestamp: getCurrentTime(),
      };
  }
};

const getRandomDefaultResponse = () => {
  const index = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[index];
};
