// store/chatStore.ts
import { create } from "zustand";
import type { Message } from "../types/message";
import { getCurrentTime } from "../utils/getCurrentTime";

type ChatState = {
    messages: Message[];
    input: string;
    isTyping: boolean;
    setMessages: (msgs: Message[]) => void;
    setInput: (value: string) => void;
    setIsTyping: (val: boolean) => void;
};

// Zustand Storage for chat persistence when user minimize the chat
export const useChatStore = create<ChatState>((set) => ({
    messages: [
        {
            id: 1,
            text: "Hello there! Do you need any help?",
            position: "left",
            type: "text",
            timestamp: getCurrentTime(),
        },
    ],
    input: "",
    isTyping: false,
    setMessages: (msgs) => set({ messages: msgs }),
    setInput: (value) => set({ input: value }),
    setIsTyping: (val) => set({ isTyping: val }),
}));
