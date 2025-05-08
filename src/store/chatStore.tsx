import { create } from "zustand";
import type { Message } from "../types/message";
import { getCurrentTime } from "../utils/getCurrentTime";
import { v4 as uuidv4 } from 'uuid';

type ChatState = {
    messages: Message[];
    input: string;
    isTyping: boolean;
    setMessages: (msgs: Message[]) => void;
    setInput: (value: string) => void;
    setIsTyping: (val: boolean) => void;
    initializeChat: (name: string) => void;
};

// Zustand Storage for chat persistence when user minimize the chat (without reload page)
export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    input: "",
    isTyping: false,
    setMessages: (msgs) => set({ messages: msgs }),
    setInput: (val) => set({ input: val }),
    setIsTyping: (val) => set({ isTyping: val }),
    initializeChat: (name: string) =>
        set({
            messages: [
                {
                    id: uuidv4(),
                    text: `Hello ${name.toUpperCase()}! Do you need any help?`,
                    position: "left",
                    type: "text",
                    timestamp: getCurrentTime(),
                },
            ],
        }),
}));
