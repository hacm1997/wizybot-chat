import { HELP_CHAT, SUCCESS_RESPONSE } from "../const/gloab-consts";
import type { Message } from "../types/message";
import { fetchProducts } from "./fetchProducts";
import { getCurrentTime } from "./getCurrentTime";

// Function to get bot responses
export const generateBotResponse = async (
  inputText: string,
  idCount: number
): Promise<Message> => {
  const lowerCaseInput = inputText.toLowerCase();

  switch (lowerCaseInput) {
    // Case 1: GET PRODUCTS IF SETENCES IS CORRECT
    case SUCCESS_RESPONSE: {
      const products = await fetchProducts();

      return {
        id: idCount++, // Unique id by message
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
        id: idCount++,
        text: "For recommended products wrtie: 'i want product recommendations' ",
        position: "left",
        type: "text",
        timestamp: getCurrentTime(),
      };

    // Default case if the senteces is different
    default:
      return {
        id: idCount++,
        text: "You must ask the right questions",
        position: "left",
        type: "text",
        timestamp: getCurrentTime(),
      };
  }
};
