import type { Product } from "./product";

export type Message = {
  id: string;
  text: string;
  position: "left" | "right";
  type?: "text" | "carousel";
  products?: Product[];
  timestamp?: string;
};
