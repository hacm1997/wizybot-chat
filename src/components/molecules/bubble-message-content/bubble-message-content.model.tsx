import type { Message } from "../../../types/message";

export interface BubbleMessageContentProps {
    messages: Message[];
    isTyping: boolean;
    input: string;
    setInput: (value: string) => void;
    handleSend: () => void;
}