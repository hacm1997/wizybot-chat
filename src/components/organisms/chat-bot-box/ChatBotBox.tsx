import type { Message } from "../../../types/message";
import {
    BubbleMessageContent,
    ChatFooter,
    ChatHeader,
} from "../../molecules";
import { getCurrentTime } from "../../../utils/getCurrentTime";
import type { ChatBotBoxProps } from "./chat-bot-box.model";
import { useChatStore } from "../../../store/chatStore";
import { useEffect, useState } from "react";
import { generateBotResponse } from "../../../utils/generateBotResponse";
import { v4 as uuidv4 } from 'uuid';

export default function ChatBotBox({ name, isOpen }: ChatBotBoxProps) {
    const { messages, input, isTyping, initializeChat, setMessages, setInput, setIsTyping } =
        useChatStore(); // Persistence data with Zustand

    useEffect(() => {
        if (name) initializeChat(name);
    }, [initializeChat, name]);

    const [isHidden, setIsHidden] = useState(!isOpen);

    // Send message function
    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMessage: Message = {
            id: uuidv4(),
            text: trimmed,
            position: "right",
            type: "text",
            timestamp: getCurrentTime(),
        };

        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages);
        setInput("");
        setIsTyping(true);

        // Simulate bot thinking delay
        setTimeout(async () => {
            const botMessage = await generateBotResponse(trimmed);
            setMessages([...nextMessages, botMessage]);
            setIsTyping(false);
        }, 3000);
    };

    return (
        <div
            className={`${isHidden ? "w-md" : "w-[200px]"} mx-auto p-4`}
        >
            {/* Chat Header Menu */}
            <ChatHeader
                name={name}
                isHidden={isHidden}
                closeChat={() => setIsHidden(!isHidden)}
            />

            {/* Message Bubbles*/}
            {isHidden && (
                <>
                    <BubbleMessageContent
                        messages={messages}
                        input={input}
                        isTyping={isTyping}
                        handleSend={handleSend}
                        setInput={setInput}
                    />
                    {/* Chat Footer Info */}
                    <ChatFooter />
                </>
            )}
        </div>
    );
}
